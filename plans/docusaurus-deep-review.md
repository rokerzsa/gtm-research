# Deep review of the Docusaurus navigation changes

12 November 2026. Scope: registry, home page, sidebar generation, included routes, pagination, verifier, TS configuration, CI gate and project authoring instructions. Same investigator; inspected source, generated metadata/HTML, installed Docusaurus implementation and executable failure cases. No company research or deployment.

## Findings, ordered by impact

### Medium — manual reading links disagreed with pagination

The original verifier checked generated Previous/Next but never inspected authored Markdown navigation. Its stronger replacement failed on a real HackerRank link: the full-GTM chapter called the origins chapter “next” while pagination first visits the origins section introduction. A second mismatch occurred at the end of the employer-workflow chapter, which skipped the later-shifts section introduction.

Fixed both links and their wording to target the actual next section, preserving the curated reading order. New checks inspect explicit Next/Previous labels, including inline lowercase “next chapter,” compare resolved source paths with registered neighbors, and reject skipped chapters, foreign books and terminal links. A focused regression test reproduces the discovered section-skipping case. No research conclusion changed.

### Medium — ID normalization diverged from Docusaurus

The old helper stripped only a final hyphen-number filename prefix. Installed Docusaurus 3.10.2 strips supported numeric prefixes on every path segment and accepts underscore/dot/spacing variants while preserving version-like names. Legitimate nested or differently prefixed source pages could fail registration/build despite following the framework's conventions. The verifier duplicated the same limited regex, so it was not an independent check of that assumption.

Added shared production `src/data/bookPaths.mjs`, consumed by frontend sidebar generation and the Node verifier. Tests compare its results directly with the installed framework parser, covering normal filenames, nested directories, underscores, dots/spaces, version-like names and digit-leading suffixes. The framework's private helper is used only by tests, not by the browser/runtime implementation. Updated AGENTS.md/README to describe actual rules.

### Medium — verification assumed one deployment prefix

Compiled-file lookup and the library-return-link check hardcoded `/gtm-research/`. This worked at the current location but made valid deployment-prefix changes fail verification. Cached generated route candidates also lacked a current-path check.

Verifier now reads baseUrl and docs path from generated site configuration/data, selects matching current book roots, and resolves compiled files relative to that base. Tests cover root, current and nested preview prefixes and reject foreign prefixes. This does not change the actual deployment configuration or execute alternate live deployments.

### Low — home links had indistinguishable accessible names

All company CTAs read “Read the case study.” The visual heading distinguished cards, but the links themselves had identical accessible names. Added company-specific aria-label values, checked in compiled HTML with correct escaping for punctuation/HTML characters. This is a targeted accessibility improvement, not a complete accessibility audit.

## Validation actually performed

- `npm run check:library`: **passed** after the two real navigation mismatches were repaired. Runs 16 regression tests, production build and generated library verification.
- `npm run typecheck`: **passed**. TypeScript's input list contains no generated .docusaurus files, supporting the CI ordering that checks types before building.
- Generated/compiled verification: all **31 pages** (HackerRank 15, RedyHire 7, UpGrad 9) retain correct company ancestry, association, registered order and boundaries. Manual links, operational exclusion, home link names and configured return routes pass. Original flat-root and cross-company pagination negative controls remain active.
- Changed tracked files pass `git -c core.whitespace=cr-at-eol diff --check`; CRLF is treated as a Windows line ending rather than silently rewriting unrelated file content.
- CI invokes `check:library`, so the new regression tests run before the existing upload/deploy gate. Workflow execution was not triggered; no Linux/remote-CI pass is claimed.

The first enhanced integration run intentionally exposed the actual HackerRank mismatch and failed; only the repaired run is reported as passing. Source/claim records, research acceptance states and existing book URLs remain unchanged. Browser visual/responsive testing remains unverified; this review did not repeat the previously unsuccessful browser connection. No remaining blocking implementation defect was demonstrated within this scope.

## Limits of the verifier

It checks the registered English reader navigation and current Docusaurus generated metadata/HTML. It does not judge research completeness, editorial quality, external source truth, arbitrary prose references, live hosting or visual layout. Changed framework serialization/localization may require updating its metadata/HTML adapter. Default generated document IDs are assumed; custom ID/parser behavior requires explicit integration support and tests before adoption.
