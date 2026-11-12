import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';
import {bookDocId} from '../src/data/bookPaths.mjs';
import {checkManualNavigation, renderedPath, escapeAttribute} from './library-validation-utils.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8').replace(/^\uFEFF/, ''));
const books = read('research-library.json');
const generated = '.docusaurus/docusaurus-plugin-content-docs/default';
const config = (await import(pathToFileURL(path.join(root, '.docusaurus/docusaurus.config.mjs')).href)).default;
const baseUrl = config.baseUrl;
const docsPath = read('.docusaurus/globalData.json')['docusaurus-plugin-content-docs'].default.path.replace(/\/$/, '');
const sidebarIds = books.map((b) => b.sidebarId);
assert.equal(new Set(sidebarIds).size, books.length, 'Duplicate sidebar registration');
assert.equal(new Set(books.map((b) => b.project)).size, books.length, 'Duplicate book registration');
const versions = fs.readdirSync(path.join(root, generated, 'p')).map((f) => read(`${generated}/p/${f}`).version)
  .filter((v) => v && sidebarIds.every((id) => v.docsSidebars?.[id])
    && books.every((b) => v.docsSidebars[b.sidebarId].some((item) => item.href === `${docsPath}/projects/${b.project}/book/`)));
assert.equal(versions.length, 1, 'Build first: expected one current generated library configuration');
const version = versions[0];
assert.deepEqual(Object.keys(version.docsSidebars).sort(), [...sidebarIds].sort(), 'Unexpected/global sidebar');
const metadata = fs.readdirSync(path.join(root, generated)).filter((f) => f.endsWith('.json'))
  .map((f) => read(`${generated}/${f}`)).filter((v) => v.id && v.source && version.docs[v.id]);
const docId = (b, p) => bookDocId(b.project, p);
function chapterPaths(items) {
  return items.flatMap((item) => typeof item === 'string' ? [item] : [
    ...(item.index ? [item.index] : []), ...chapterPaths(item.chapters),
  ]);
}
function sourcePages(folder, relative = '') {
  return fs.readdirSync(folder, {withFileTypes: true}).flatMap((entry) => {
    const name = path.posix.join(relative, entry.name);
    return entry.isDirectory() ? sourcePages(path.join(folder, entry.name), name)
      : name.endsWith('.md') && (name === 'index.md' || /^part-[^/]+\//.test(name)) ? [name.slice(0, -3)] : [];
  });
}
function checkPage(page, sidebar, previous, next) {
  assert.equal(page.sidebar, sidebar, `Wrong sidebar: ${page.id}`);
  assert.equal(page.previous?.permalink, previous?.permalink, `Wrong Previous: ${page.id}`);
  assert.equal(page.next?.permalink, next?.permalink, `Wrong Next: ${page.id}`);
}
function treeLinks(item) {
  return [...(item.href ? [item.href] : []), ...(item.items ?? []).flatMap(treeLinks)];
}
function companyRoot(sidebar, book, introduction) {
  assert.equal(sidebar.length, 2, `Loose top-level chapter outside company category: ${book.project}`);
  assert.equal(sidebar[0].type, 'link');
  const company = sidebar[1];
  assert.equal(company.type, 'category');
  assert.equal(company.label, book.label);
  assert.equal(company.href, introduction.permalink, 'Company root must open its introduction');
  return company;
}
const homepage = fs.readFileSync(path.join(root, 'build/index.html'), 'utf8');
let pageCount = 0;
const results = [];
for (const book of books) {
  const main = ['index', ...chapterPaths(book.chapters)];
  const supplementary = book.supplemental ?? [];
  const all = [...main, ...supplementary];
  assert.equal(new Set(all).size, all.length, `Duplicate reading page: ${book.project}`);
  assert.deepEqual([...all].sort(), sourcePages(path.join(root, 'research/projects', book.project, 'book')).sort(),
    `Included reader page missing from registry or registry points outside book: ${book.project}`);
  const docs = all.map((p) => {
    const id = docId(book, p);
    const matches = metadata.filter((m) => m.id === id);
    assert.equal(matches.length, 1, `Expected one generated document: ${id}`);
    assert.equal(matches[0].source, `@site/research/projects/${book.project}/book/${p}.md`);
    return matches[0];
  });
  const sidebar = version.docsSidebars[book.sidebarId];
  const company = companyRoot(sidebar, book, docs[0]);
  const links = treeLinks(company);
  const allowed = new Set(docs.map((d) => d.permalink));
  for (const href of links) assert(allowed.has(href), `Foreign or operational page in ${book.label}: ${href}`);
  assert.equal(links.length, docs.length, `Duplicate/missing company sidebar page: ${book.label}`);
  for (const doc of docs) assert.equal(links.filter((href) => href === doc.permalink).length, 1, `Wrong containment: ${doc.id}`);
  for (let i = 0; i < main.length; i++) {
    checkPage(docs[i], book.sidebarId, docs[i - 1], i + 1 < main.length ? docs[i + 1] : undefined);
    const source = (p) => path.join(root, 'research/projects', book.project, 'book', `${p}.md`);
    checkManualNavigation(source(main[i]), fs.readFileSync(source(main[i]), 'utf8'),
      i > 0 ? source(main[i - 1]) : undefined, i + 1 < main.length ? source(main[i + 1]) : undefined);
  }
  for (const doc of docs.slice(main.length)) checkPage(doc, book.sidebarId, undefined, undefined);
  for (const doc of docs) {
    assert(doc.permalink.startsWith(docs[0].permalink), `Route escaped company root: ${doc.id}`);
    const html = renderedPath(path.join(root, 'build'), doc.permalink, baseUrl);
    assert(fs.existsSync(html), `Compiled page missing: ${doc.id}`);
    const body = fs.readFileSync(html, 'utf8');
    const nav = body.match(/<nav[^>]*aria-label="Docs sidebar"[^>]*>[\s\S]*?<\/nav>/)?.[0];
    assert(nav, `Rendered sidebar missing: ${doc.id}`);
    assert(nav.includes(`href="${baseUrl}"`), `Rendered library return link missing: ${doc.id}`);
    assert(nav.includes(`href="${docs[0].permalink}"`), `Rendered company root missing: ${doc.id}`);
    for (const other of books.filter((b) => b.project !== book.project)) {
      assert(!nav.includes(`/docs/projects/${other.project}/book/`), `Foreign company in rendered sidebar: ${doc.id}`);
    }
  }
  assert(homepage.includes(`href="${docs[0].permalink}"`), `Homepage entry missing: ${book.label}`);
  assert(homepage.includes(`aria-label="${escapeAttribute(`Read ${book.label} case study`)}"`), `Home link needs a company-specific accessible name: ${book.label}`);
  // Negative control reproduces the original cross-company pagination failure.
  assert.throws(() => checkPage({...docs[0], previous: {permalink: '/foreign-book/'}}, book.sidebarId, undefined, docs[1]));
  // Original flat autogenerated slices must fail even when all URLs exist.
  assert.throws(() => companyRoot([sidebar[0], ...company.items], book, docs[0]));
  results.push({company: book.label, sidebar: book.sidebarId, pages: docs.length, firstPrevious: null, lastNext: null});
  pageCount += docs.length;
}
const actualProjects = fs.readdirSync(path.join(root, 'research/projects')).filter((p) => fs.existsSync(path.join(root, 'research/projects', p, 'book/index.md')));
assert.deepEqual(actualProjects.sort(), books.map((b) => b.project).sort(), 'Book exists without library registration');
assert.equal(Object.keys(version.docs).length, pageCount, 'Unexpected/orphan/operational docs are published');
const report = {status: 'passed', books: results, pages: pageCount, checks: [
  'company sidebar ancestry and association', 'exact registered reading sequence and manual Next/Previous links',
  'Previous/Next and isolated terminal boundaries', 'supplemental guide isolation',
  'complete included-page registration', 'stable company-root routes and compiled pages',
  'accessible home entries and operational-page exclusion', 'rendered HTML sidebar containment and configured baseUrl',
  'cross-book pagination and flat-root negative controls',
], limitations: 'Compiled metadata/HTML inspection; not a browser visual or accessibility test.'};
fs.writeFileSync(path.join(root, 'plans/library-navigation-validation.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
