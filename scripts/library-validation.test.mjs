import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import {createRequire} from 'node:module';
import {normalizeDocPath} from '../src/data/bookPaths.mjs';
import {checkManualNavigation, renderedPath, escapeAttribute} from './library-validation-utils.mjs';

const require = createRequire(import.meta.url);
// Compare our portable helper with the actually installed framework implementation.
const {DefaultNumberPrefixParser} = require('@docusaurus/plugin-content-docs/lib/numberPrefix.js');
for (const source of ['part-01-case/01-intro', 'part-01-case/02_nested/03_topic',
  'part-01-case/001. Topic', 'part-01-case/8.0-api', 'part-01-case/01-2fa',
  'part-01-case/010 -- guide', 'part-01-case/part-02-method/001-final']) {
  test(`document ID matches installed Docusaurus: ${source}`, () => {
    assert.equal(normalizeDocPath(source), source.split('/').map((s) => DefaultNumberPrefixParser(s).filename).join('/'));
  });
}
const current = path.resolve('fixture/book/part-01-case/02-now.md');
const next = path.resolve('fixture/book/part-01-case/03-next.md');
const previous = path.resolve('fixture/book/part-01-case/01-before.md');
test('accessible-name inspection handles company punctuation and HTML escaping', () => {
  assert.equal(escapeAttribute(`Read R&D's "Tools" case study`), 'Read R&amp;D&#x27;s &quot;Tools&quot; case study');
});
test('manual navigation accepts matching relative links and fragments', () => {
  checkManualNavigation(current, '[Previous](01-before.md) [Next: next](03-next.md#details)', previous, next);
});
test('manual navigation rejects a valid but wrong chapter', () => {
  assert.throws(() => checkManualNavigation(current, '[Next: skip](04-later.md)', previous, next), /disagrees/);
});
test('inline next-chapter prose cannot skip the next section introduction', () => {
  const sectionIndex = path.resolve('fixture/book/part-02-section/index.md');
  assert.throws(() => checkManualNavigation(current,
    'Continue in the [next chapter](../part-02-section/01-chapter.md).', previous, sectionIndex), /disagrees/);
  checkManualNavigation(current, 'Continue in the [next section](../part-02-section/index.md).', previous, sectionIndex);
});
test('manual navigation rejects terminal and cross-company links', () => {
  assert.throws(() => checkManualNavigation(current, '[Next](03-next.md)', previous, undefined), /boundary/);
  assert.throws(() => checkManualNavigation(current, '[Next](../../../other/book/index.md)', previous, next), /disagrees/);
});
for (const base of ['/', '/gtm-research/', '/preview/new-library/']) {
  test(`compiled path respects configured deployment base: ${base}`, () => {
    assert.equal(renderedPath('build', `${base}docs/book/chapter/`, base), path.join('build/docs/book/chapter/index.html'));
  });
}
test('compiled path rejects a foreign deployment prefix', () => {
  assert.throws(() => renderedPath('build', '/foreign/docs/book/', '/library/'), /baseUrl/);
});
