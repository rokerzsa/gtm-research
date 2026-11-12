# Uncommitted-review fixes — 12 November 2026

Authority: user's explicit “Lets do the fixes” following the uncommitted-change review. Scope: install the reviewed GTM skill and reconcile the three project checkpoints. Reader content, evidence confidence, routes and publication remain unchanged.

## Skill installation

Applied exactly the 20 files in the reviewed candidate manifest. Checked all pre-install source and candidate hashes before writing, preserved preimages in [backup](gtm-skill-pre-install-2026-11-12.json), and verified every installed byte against its candidate. [Installation result](gtm-skill-installation-result.json). The scoped escalated command succeeded; no ACL, ownership or sandbox configuration changes were made. The active skill passes the skill-creator validator. Candidate evaluation/plan now explicitly record installation closure; their earlier blocker remains history.

## Checkpoint reconciliation

Each project now has one current status: its revised book is delivered and ready for user review with qualifications; the explicit three-book goal is complete; acceptance of the new editions remains pending. Current authority, latest source/claim/RT ranges, review links and completed validation replace the stale mixed-stage summaries. Earlier checkpoint text and SHA-256 are preserved in each project's `review-history/checkpoint-before-review-fixes-2026-11-12.json`; journals and dossiers record the correction. Earlier technical failures and historical budgets remain available in those records rather than presenting them as current results.

## Verification

`npm run check:library` passed: 16 regression tests, production build and verification of all 31 registered reader pages. Skill validation passed; installed hashes, checkpoint archive hashes, local file links and CRLF-aware diff checks passed in the [closure audit](uncommitted-review-fixes-validation.json). Template parameter links were excluded from the local-file scan; an initial checker false positive on those placeholders required no skill change. No new reader or browser changes are part of this correction; the prior limited browser inspection remains the relevant visual evidence. No independent reader test is claimed.

## Commit boundary

No commit/push requested or performed. Existing preview logs, `pnpm-lock.yaml` and unfinished `pnpm-workspace.yaml` remain untouched and should be excluded from a research/skill commit unless separately reviewed. No broad staging was performed. Pre-existing line-ending-only skill edits outside the 20 reviewed files were preserved.
