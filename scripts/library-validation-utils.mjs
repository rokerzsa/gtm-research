import assert from 'node:assert/strict';
import path from 'node:path';

export function escapeAttribute(text) {
  return text.replace(/[&<>"']/g, (character) => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;'}[character]));
}

export function checkManualNavigation(sourceFile, text, previousSource, nextSource) {
  for (const match of text.matchAll(/\[([^\]]+)\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    const direction = /^(next|previous)\b/i.exec(match[1])?.[1].toLowerCase();
    if (!direction) continue;
    const expected = direction === 'next' ? nextSource : previousSource;
    assert(expected, `Manual ${direction} link beyond book boundary: ${sourceFile}`);
    const target = match[2].replace(/^<|>$/g, '').split('#')[0];
    assert(!/^(?:[a-z]+:|\/)/i.test(target), `Manual ${direction} must use a relative reader-page link: ${sourceFile}`);
    assert.equal(path.resolve(path.dirname(sourceFile), decodeURIComponent(target)), path.resolve(expected),
      `Manual ${direction} disagrees with registered reading order: ${sourceFile}`);
  }
}

export function renderedPath(buildRoot, permalink, baseUrl) {
  const prefix = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  assert(permalink.startsWith(prefix), `URL outside configured baseUrl: ${permalink}`);
  return path.join(buildRoot, decodeURIComponent(permalink.slice(prefix.length)), 'index.html');
}
