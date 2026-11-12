# Skill usefulness candidate: changes and evaluation

12 November 2026. Current status: **installed into the active `.agents` skill** following the user's review-fix request; see [installation result](gtm-skill-installation-result.json) and [fix report](uncommitted-review-fixes.md). The candidate-only evaluation and earlier application blocker below are preserved as historical records. The user authorized improving the skill under the [plan](gtm-research-improvement-plan.md). Automatic approval review rejected writes to the protected path. The candidate preserves the existing local skill edits and adds the changes described here.

## Reviewable result

- [Candidate entrypoint](gtm-skill-usefulness-candidate/SKILL.md)
- [Decision and acquisition procedure](gtm-skill-usefulness-candidate/references/strategy-and-current-state.md)
- [Evidence reconciliation](gtm-skill-usefulness-candidate/references/source-and-claim-evidence.md#10-material-fact-reconciliation)
- [Demonstrated-answer review](gtm-skill-usefulness-candidate/references/research-synthesis-and-lessons.md#four-internal-reviews)
- [Exact patch against the current active skill](gtm-skill-usefulness.patch)
- [Static results and source/candidate SHA-256 manifest](gtm-skill-usefulness-validation.json)

Twenty files differ from the copied working version: entrypoint; eight operational references; five templates; five specification chapters; amendment record. The full candidate also includes unchanged supporting files so its references remain inspectable. It is a review copy, not an installed second skill or a second evidence registry.

## Changes implemented in the candidate

Decision reconstruction replaces the vague request for strategic depth with an observable reader outcome. Conditional acquisition guidance covers target context, milestones, stake/perimeter, disclosed commitments/structure, rationale, integration and follow-through. It explicitly separates deal prices from allocations, forecasts and cash paid.

Evidence reconciliation checks raw passage → records → book rather than treating source registration as sufficient. The existing four reviews require actual draft answers and passage-level reasons. Bounded interpretation is encouraged without inventing management intent or causal results. Templates and specification conform; detail lives in its governing reference rather than repeated checklists.

Existing authority, public-source/access honesty, hard ceilings, namespaces, adaptive chapters, substantive adversarial work, evidence/review separation and checkpoint-last safeguards remain. The changes add no routine approval rounds or source/chapter quotas. The company-name substitution check permits useful general context rather than banning it.

## Method and limits

This is a same-investigator manual application of the revised guidance to bounded artifacts and deliberately flawed sample sentences. Expected dispositions were established in the improvement plan before editing. The source passages and record/chapter comparisons are documented there and in the earlier audit; live company records were not rewritten for evaluation. Synthetic inputs below are explicitly tests, not new corporate claims.

Observed judgments and repair outputs follow. They demonstrate how the candidate distinguishes these cases; they do not measure autonomous model performance or constitute independent reader testing. No model/subagent was invoked as a separate reviewer. Whole-book usefulness and end-to-end research reliability remain untested by this exercise.

| Case / reader question and input | Observed judgment under candidate guidance | Concrete repair or boundary |
|---|---|---|
| 1. How did the acquisition strategy develop? Actual UpGrad chapter 4 capability table and autonomy/coordination discussion | **Fails as a sufficient answer.** It names capabilities and risks without reconstructing the material sequence and commitments | Require dated episodes and connections; preserve this table only as a summary. The former review's depth pass is not supported for this question |
| 2. What was committed for INSOFE? Inspected transaction table versus SRC-0082/CLM-0027 | **Extraction failure.** The consideration is disclosed but absent from the derived records | Repair the material extraction with source-defined amount/structure and announcement date; leave the blank completion field unverified. Do not assign an aggregate amount to one component without evidence |
| 3. What was committed for Unacademy? SRC-0003 versus actual chapter 4 | **Synthesis omission.** The existing record contains the reported consideration, while the transaction-history discussion omits it | Include an attributed amount with the correct perimeter; reconcile differing reported valuation definitions. No extra source count is needed merely to recover a fact already recorded |
| 4. Synthetic: “KnowledgeHut cost the USD250m M&A allocation and delivered the following year's forecast revenue” | **Fails definition/time fidelity** | Correct to an announced group M&A allocation and a revenue forecast; neither establishes this deal's price or achieved revenue |
| 5. Synthetic chapter lists exact dates, stakes and prices for ten deals, with no explanation | **Fails depth despite specific facts** | Explain consequential choices and commercial mechanisms; more rows do not repair the unanswered strategy question |
| 6. Synthetic: “The acquisition reduced customer acquisition cost; that was management's reason” with only deal PR about broader reach | **Fails unsupported motive and causality** | Replace with a supported access rationale or an explicitly conditional hypothesis; seek discriminating evidence before claiming measured efficiency |
| 7. Conditional interpretation from KnowledgeHut's stated short-course/overseas/B2B ambitions and founder continuity | **Provisionally adequate for a bounded interpretation**, not the whole decision history | The illustrative paragraph below explains an access/capability mechanism and a rival interpretation without asserting realized cross-selling |
| 8. Synthetic thin-record deal: price remains undisclosed after relevant public-source attempts; rationale, structure and implementation are otherwise explained | **May pass qualified** | State undisclosed price and its analytical consequence; do not invent a figure or require endless searching. This synthetic case does not assert any actual deal search was exhausted |
| 9. Actual HackerRank founder recollection promoted in a synthetic sentence to a verified first payment and exact price | **Fails calibration** | Retain a retrospective first-cheque account; distinguish it from independently established first payer. An uncertain amount need not be main-text verified pricing |
| 10. Actual RedyHire Judge0 constraint/response/trade-off paragraphs | **Adequate for the bounded operating episode**, with first-party attribution | Reader can identify the old constraint, chosen component and changed technical work. Preserve unknown revenue impact and avoid assigning publication date as adoption date |
| 11. Synthetic: every launched feature creates a new, mutually exclusive strategic era | **Fails classification and chronology** | Group by demonstrated material commercial changes and preserve coexisting offers; publication sequence alone cannot establish replacement or causality |
| 12. Synthetic finding: “Acquisitions buy access, but integration is difficult” | **Insufficient as a case finding** | Retain as background only, or explain which acquired assets, structure and execution evidence establish a company-specific conclusion |

All twelve dispositions agree with the plan's expectations in this manual exercise. This is not a claim that twelve automated behavioral tests passed. The useful cases constrain the repair: requiring every unknown price or private outcome would incorrectly fail cases 8–10.

## Illustrative repair output, isolated from the live book

Reader question: what commercial bet did buying KnowledgeHut represent?

The August 2021 announcement placed KnowledgeHut within UpGrad's recently stated M&A allocation. Management connected the purchase with shorter professional learning and overseas employer markets, while retaining the founder as CEO of a wholly owned subsidiary. The supported strategic interpretation is that UpGrad was buying an existing specialist operation and routes to customers alongside its longer-program business. Retaining leadership could preserve specialist execution, although the announcement does not establish a shared sales system. A rival reading is portfolio breadth with limited operational integration. Subsequent evidence of shared selling, customers using multiple group offers or coordinated delivery would help distinguish those readings; the announcement alone cannot.

Basis: existing SRC-0008 and its inspected company release, as documented in the [inspection plan](gtm-research-improvement-plan.md#evidence-inspection-and-diagnosis). This paragraph demonstrates a bounded interpretation, not a replacement chapter or a completed transaction/outcome investigation. The earlier-context/next-move connections still need work in the eventual book pilot.

## Static checks actually performed

- Compared candidate with the active working copy: 20 changed files; all other copied files unchanged at validation time.
- Checked entrypoint frontmatter and local Markdown file/heading links across all 88 Markdown files: no broken targets, and no baseline link errors.
- Generated a minimal unified patch from the copied working version; `git apply --check` exited 0 without applying it.
- Recorded SHA-256 for each source/candidate pair. Recheck source hashes before any later authorized application to avoid overwriting intervening edits.
- Inspected the patch and governing references for conflicts: acquisition guidance is conditional, unknowns remain qualified where appropriate, and numerical specificity alone cannot satisfy depth.

The site build/typecheck was not run: no active skill, public reader pages, registry, TS or config changed. This does not constitute a visual check, deployed-site test or factual recertification of the books.

## Earlier application blocker — resolved

Ordinary sandbox commands succeeded. The latest inspected dated setup log reported `errors=[]`; the old startup/ownership failure did not recur. Inspection found explicit write-deny ACL entries on the active `.agents` skill. No permissions or ownership were changed.

Automatic approval review first rejected the patch's unsandboxed retry under the project's ordinary-execution rules. After diagnosis it rejected a scoped retry because overcoming the explicit write restriction required separate authorization. No alternative path was used to mutate the protected skill. The candidate and patch were prepared under writable `plans/` instead.

The remaining action is specifically authorized application of these twenty reviewed file changes to `.agents/skills/gtm-deep-research`, with source-hash guards and no ACL, ownership or sandbox-configuration changes. If that authorization is provided, apply once, verify active files equal the reviewed candidate, repeat affected checks and record actual application. Do not silently treat this candidate as the active installed skill.


## Installation closure

The subsequent explicit review-fix request covered installation. A narrowly scoped escalated command applied exactly the 20 reviewed files after checking every source/candidate SHA-256, preserving the preimages and verifying installed bytes. No ACL, ownership or sandbox configuration changed. The original manifest records pre-install source hashes and is historical; the installation result records installed hashes.
