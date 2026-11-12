"""Project-specific consistency audit; does not assess source truth or prose quality."""
from pathlib import Path
from collections import Counter
import json
import re
import sys
from urllib.parse import unquote
from html.parser import HTMLParser

root = Path(__file__).resolve().parents[1]
project = root / 'research/projects/PRJ-0003-upgrad-gtm'
records = []
errors = []
files = list(project.rglob('*.md'))
for file in files:
    body = file.read_text(encoding='utf-8-sig')
    records += re.findall(r'Canonical ID: (PRJ-0003:(?:SRC|CLM|RT|GAP|DEC|RC)-\d{4})\.', body)
    for dest in re.findall(r'\]\(([^)]+)\)', body):
        if dest.startswith(('https://', 'http://', 'mailto:')):
            continue
        target, _, anchor = dest.partition('#')
        resolved = (file.parent / unquote(target)).resolve() if target else file
        if not resolved.exists():
            errors.append(f'missing target: {file.relative_to(root)} -> {dest}')
        elif anchor and resolved.suffix == '.md':
            headings = re.findall(r'^#{1,6}\s+(.+)$', resolved.read_text(encoding='utf-8-sig'), re.M)
            slugs = [re.sub(r'[^\w\- ]', '', h.lower()).replace(' ', '-') for h in headings]
            if anchor not in slugs:
                errors.append(f'anchor requires inspection: {file.relative_to(root)} -> {dest}')
    if 'book' in file.relative_to(project).parts:
        if not body.startswith('---\n'):
            errors.append(f'missing book frontmatter: {file.name}')
        for dest in re.findall(r'\]\(([^)]+\.md(?:#[^)]*)?)\)', body):
            if not dest.startswith(('https://', 'http://')):
                resolved = (file.parent / dest.split('#')[0]).resolve()
                if (project / 'book').resolve() not in resolved.parents:
                    errors.append(f'book links excluded record: {file.name} -> {dest}')

counts = Counter(x.split(':')[1].split('-')[0] for x in records)
duplicates = [key for key, n in Counter(records).items() if n > 1]
if duplicates:
    errors.append(f'duplicate canonical IDs: {duplicates}')
allocator = (project / 'record-ids.md').read_text(encoding='utf-8-sig')
for kind, last in re.findall(r'\| (SRC|CLM|RT|GAP|DEC|RC) \| (\d+) \|', allocator):
    expected = {f'PRJ-0003:{kind}-{i:04}' for i in range(1, int(last) + 1)}
    actual = {x for x in records if f':{kind}-' in x}
    if expected != actual:
        errors.append(f'{kind}: allocation mismatch: missing={sorted(expected-actual)}, extra={sorted(actual-expected)}')
book = sorted((project / 'book').rglob('*.md'))
source_records = '\n'.join(p.read_text(encoding='utf-8-sig') for p in [project/'sources.md', *sorted((project/'evidence').glob('*.md'))])
registry_urls = set(re.findall(r'https?://[^\s)]+', source_records))
book_urls = set()
word_counts = {}
for file in book:
    body = file.read_text(encoding='utf-8-sig')
    book_urls.update(re.findall(r'https?://[^\s)]+', body))
    clean = re.sub(r'\]\(https?://[^)]+\)', ']', body)
    clean = re.sub(r'^---.*?---\s*', '', clean, count=1, flags=re.S)
    word_counts[str(file.relative_to(project))] = len(clean.split())
for url in sorted(book_urls - registry_urls):
    errors.append(f'book public URL not in registry: {url}')
result = {'canonical_counts': dict(counts), 'markdown_files': len(files), 'book_pages': len(book), 'book_words_approx': sum(word_counts.values()), 'page_words_approx': word_counts, 'unique_book_public_urls': len(book_urls), 'errors': errors, 'scope': 'Local targets/anchors, canonical IDs/allocations, frontmatter and book-source URL traceability. No external uptime, independent truth, rendered layout or editorial-quality proof.'}
out = project / 'validation-results.json'
out.write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print(json.dumps(result, indent=2, ensure_ascii=False))
if '--build' in sys.argv:
    class Page(HTMLParser):
        def __init__(self):
            super().__init__()
            self.hrefs = []
            self.h1s = []
            self.in_h1 = False
        def handle_starttag(self, tag, attrs):
            attrs = dict(attrs)
            if tag == 'a' and 'href' in attrs:
                self.hrefs.append(attrs['href'])
            if tag == 'h1':
                self.in_h1 = True
        def handle_endtag(self, tag):
            if tag == 'h1':
                self.in_h1 = False
        def handle_data(self, data):
            if self.in_h1:
                self.h1s.append(data)
    prefix = '/gtm-research/'
    route_prefix = prefix + 'docs/projects/PRJ-0003-upgrad-gtm/book/'
    build_checks = []
    build_errors = []
    for file in book:
        relative = file.relative_to(project/'book')
        if relative.name == 'index.md':
            route = relative.parent
        else:
            route = relative.parent / re.sub(r'^\d+-', '', relative.stem)
        html = root/'build/docs/projects/PRJ-0003-upgrad-gtm/book'/route/'index.html'
        if not html.exists():
            build_errors.append(f'missing compiled page: {html}')
            continue
        parsed = Page()
        parsed.feed(html.read_text(encoding='utf-8'))
        expected_title = re.search(r'^# (.+)$', file.read_text(encoding='utf-8-sig'), re.M).group(1)
        if expected_title not in ''.join(parsed.h1s):
            build_errors.append(f'compiled h1 mismatch: {html}')
        for href in parsed.hrefs:
            if href.startswith(route_prefix):
                path = unquote(href.split('#')[0]).removeprefix(prefix)
                target = root/'build'/path
                if not (target/'index.html').exists():
                    build_errors.append(f'compiled route missing: {href}')
        build_checks.append({'source': str(relative), 'html': str(html.relative_to(root)), 'h1': ''.join(parsed.h1s)})
    home = Page()
    home.feed((root/'build/index.html').read_text(encoding='utf-8'))
    if route_prefix not in home.hrefs:
        build_errors.append('compiled homepage missing UpGrad entry')
    build_result = {'pages': build_checks, 'errors': sorted(set(build_errors)), 'scope': 'Compiled HTML files, h1 text, UpGrad reading/sidebar route targets and homepage entry. No browser layout, accessibility audit, external uptime or live deployment verification.'}
    (project/'validation-build.json').write_text(json.dumps(build_result, indent=2, ensure_ascii=False)+'\n', encoding='utf-8')
    print(json.dumps(build_result, indent=2, ensure_ascii=False))
    errors.extend(build_errors)
sys.exit(bool(errors))
