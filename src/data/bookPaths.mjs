// Match Docusaurus 3.10's default number-prefix rules for every path segment.
// Version-like names such as 8.0-api are intentionally preserved.
export function normalizeDocPath(sourcePath) {
  return sourcePath.split('/').map((segment) => {
    if (/^\d+[-_.]\d+/.test(segment)) return segment;
    return /^(\d+)\s*[-_.]+\s*([^-_.\s].*)$/.exec(segment)?.[2] ?? segment;
  }).join('/');
}

export function bookDocId(project, sourcePath) {
  return normalizeDocPath(`projects/${project}/book/${sourcePath}`);
}
