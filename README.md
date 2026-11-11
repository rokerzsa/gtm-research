# GTM Research Library

An evidence-linked Docusaurus library for historical go-to-market case studies.

## Start locally

Install dependencies with npm install, then start the development server with npm run start.
The site opens at http://localhost:3000. Build a static site with npm run build.

## Research workflow

The gtm-deep-research skill keeps authoritative records in the standalone OKF workspace under `research/`.

Docusaurus reads from `research/` but includes only reader-facing book pages: each project's `book/index.md` and pages under `book/part-*/`. Plans, contracts, decisions, source and claim registers, review logs, and other workflow files stay in the workspace and are excluded from docs routes. The sidebar and top navigation list only included book pages.

The first listed book is HackerRank: A Historical GTM Case Study. Its P1.1 research is blocked/incomplete at the approved 25-source limit; the P2.1 plan and contract are proposed and await approval.

## Project notes

- Docusaurus 3.10.2 with the classic TypeScript template.
- The blog is disabled.
- Dependencies and package-lock.json are present in the workspace.
- url in docusaurus.config.ts is a placeholder until a deployment destination is chosen.
