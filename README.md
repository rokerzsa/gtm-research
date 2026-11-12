# GTM Research Library

An evidence-linked Docusaurus library for historical go-to-market case studies.

## Start locally

Install dependencies with npm install, then start the development server with npm run start.
The site opens at http://localhost:3000. Build a static site with npm run build.

## Research workflow

The gtm-deep-research skill keeps authoritative records in the standalone OKF workspace under `research/`.

Docusaurus reads from `research/` but includes only reader-facing book pages: each project's `book/index.md` and pages under `book/part-*/`. Plans, contracts, decisions, source and claim registers, review logs, and other workflow files stay in the workspace and are excluded from docs routes. The sidebar and top navigation list only included book pages.

The first book is HackerRank: A Historical GTM Case Study, edition 1.0: seven chapters from early InterviewStreet experiments through the November 11, 2026 research cutoff. It retains reviewed historical unknowns; the project completion dossier records the evidence limits and checks.

## Adding books and maintaining navigation

Read [AGENTS.md](AGENTS.md) for this project's authoring and site rules. Register a company once in [research-library.json](research-library.json): its metadata renders the home card, and its explicit chapter tree generates a company-root category in a separate sidebar. This keeps automatic Previous/Next navigation within the book. The navbar's Research link returns to the library home.

Published introductions are `research/projects/<project>/book/index.md`; chapters belong under `book/part-*/`. Operational project/workspace indexes are separate and excluded from publication. Registry chapter paths are relative to `book/`, without `.md`; retain source prefixes. The shared ID helper follows Docusaurus's default prefix parser for each segment, including nested directories. Each included page must be registered exactly once. Existing supplemental guides use `ref` navigation and an explicit owning `displayed_sidebar`, preserving their URLs without inserting them into sequential reading.

After navigation/content changes, run `npm run check:library` (regression tests, production build, then hierarchy/pagination verification). For TS/config edits also run `npm run typecheck`. Tests compare prefix handling with installed Docusaurus, reject incorrect manual Next/Previous links and cover alternative deployment prefixes. The verifier checks generated company ancestry, sidebar ownership, exact Previous/Next sequence and boundaries, manual chapter navigation, included page coverage, accessible home entries and exclusion of operational records. It includes negative controls for both original navigation bugs; it is not a browser visual test. TypeScript 6 currently requires the `ignoreDeprecations: "6.0"` setting for Docusaurus's inherited `baseUrl` configuration; theme declarations are loaded in `src/theme.d.ts`.

## Project notes

- Docusaurus 3.10.2 with the classic TypeScript template.
- The blog is disabled.
- Dependencies and package-lock.json are present in the workspace.
- GitHub Pages destination: https://rokerzsa.github.io/gtm-research/.
- The deployment workflow builds and deploys pushes to main; research changes on work/next-updates do not deploy until merged.
