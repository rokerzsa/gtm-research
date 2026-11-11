# GTM Deep Research v2 — final inspection and fix plan

**Date:** 11 November 2026.  
**Status:** Implemented locally after the user requested “lets do the fix”; validation completed as recorded below.  
**Scope:** Improve the generic local skill at `.agents/skills/gtm-deep-research/`. This plan does not rewrite a company study, migrate another active project, install/release a skill, commit, merge or publish anything. Existing unrelated work remains untouched.

## 1. Confirmed intent

Produce a strategy-led, evidence-supported company study in plain language. Use enough narrative to explain the business and decisions; prioritize analysis of choices, GTM mechanisms, pivots, execution, trade-offs and outcomes. Avoid both a source dump and a largely chronological story.

The user explicitly clarified the book requirement: **one whole-company GTM chapter, plus deeper chapters**. The overview must explain the complete cycle together, including how it evolved across important periods. Deeper chapters are chosen after investigation, based on strategic significance; their count and subjects are not inherited from research phases.

Research must investigate historical development, the current commercial system and material emerging direction. Gather consequential user preferences upfront, approve one consolidated execution plan, run the research as an explicitly authorized goal with autonomous internal reviews, then stop for the user's final review. The user can subsequently review chapters step by step.

## 2. Final inspection findings

| Finding | Inspected evidence | Consequence |
|---|---|---|
| Narrative is the strongest authoring instruction | `references/research-synthesis-and-lessons.md` sections 2–3 and 8; `templates/research-book-chapter.md` | Readability can pass while choices, alternatives and competitive/commercial mechanisms remain shallow. |
| Pivot analysis is not an executable coverage requirement | `references/investigation-execution.md`; charter/contract/chapter templates | Discovering or mentioning a product may substitute for analyzing the change in strategy. |
| Latest-state coverage lacks a required reconciliation | Investigation/synthesis procedures and completion checklist | Historical depth can crowd out present positioning, active products, distribution and emerging bets. |
| Flexible chapter guidance conflicts with structure approval gates | `references/research-book-architecture.md` section 2 versus section 1; specification chapter 11 sections 11.6–11.8 | The agent is told to adapt but must seek approval for top-level changes, encouraging it to freeze the initial outline. |
| Separate governance approvals are repeated across layers | Entrypoint; activation/planning/investigation references; specification chapters 01–03/13; charter/plan/contract templates | Editing only SKILL.md would leave downstream instructions that recreate approval friction. |
| Unknown historical facts can dominate completion | Completion/gap/budget procedures and dossier templates | A missing first invoice can require repeated escalation even if the overall strategic question can be responsibly answered. |
| Autonomous goal execution is not a first-class run mode | Current entrypoint/start gate and active-state template | It required a project-specific amendment to research through all phases without repeated approvals. |
| Reviews favor evidence integrity and narrative coherence | Synthesis editorial/evidence passes and final audit | No equally explicit test for strategic depth, complete GTM coverage or missed current pivots. |

### HackerRank diagnostic, not a company-specific instruction

Chakra is present in the generated chapter 06, including a support-documentation link and workflow description. The important failure is that it was not developed as a strategically significant change with explicit prior offer, new promise, target buyer, distribution/sales implications, commercial relationship and unresolved questions. The existing seven-chapter structure also spreads the commercial system across several chapters and lacks the requested whole-company GTM chapter.

The skill already discourages a fixed company-book taxonomy. Mirroring the research phase outline in the final book was also an execution mistake. Fix both the guidance and the checks; do not attribute everything to absent source discovery.

### Preserve these strengths

Plain language and concrete product workflows; source provenance and access honesty; distinction between users, payers and revenue; independent source-seeking challenge; meaningful contradictory evidence; honest unknowns; no unsolicited comparison to the user's business; standalone OKF durability and checkpoint-last writes; reader-only Docusaurus selection.

## 3. Target operating model

**Bounded reconnaissance → rigorous upfront intake → one consolidated plan approval → explicitly authorized goal execution → autonomous research, analysis, adaptive outline, drafting and internal reviews → review-ready delivery → user-led final review/revisions.**

### Intake and the single approval

- Use the existing thirteen dimensions as an internal completeness checklist. Ask only consequential questions not answered by context; group related questions, challenge weak assumptions and avoid ceremonial agreement with defaults.
- Confirm subject/products, audience, purpose, time/region scope, historical versus current emphasis, depth, strategic questions, available evidence, desired output, exclusions, hard limits, acceptable unknowns and final-review preference.
- Do not ask the user to supply facts the investigation should discover. Distinguish an unanswered research question from a missing user preference.
- Present one human-readable execution agreement covering scope, current/emerging coverage, research stages, working questions, resource rules, adaptive-structure discretion, review/stop conditions, final deliverables, workspace location and explicit permission to start a goal.
- Charter/plan/contract can remain useful internal records, but all derive authority from that one identifiable approval. Do not require separate human approvals for each representation or each later phase.
- Existing authorization remains valid. Do not reset projects into intake or invent retrospective approvals. For any migration, reconcile existing decisions and hard limits first.

### Autonomous execution and justified interruptions

Proceed without new approval for in-scope search changes, following new products/brands, testing alternatives, adjusting emphasis, reordering/adding/merging chapters, revising interpretations and running internal reviews. Record consequential choices briefly.

Interrupt only when an essential user decision cannot be inferred, a true subject/objective expansion is needed, a hard budget would be exceeded, paid access/outreach is needed, or an external action needs separate authority. Continue unaffected authorized work while an answer is pending. Do not treat learning checkpoints, an internal phase review or a newly found contradiction as automatic human gates.

Use a goal only when explicitly authorized and supported by the environment. Keep the OKF checkpoint/evidence authoritative; the goal tracks execution, not a competing research memory. Stop at the agreed review-ready deliverable. Distinguish internal quality completion from user acceptance; later step-by-step user review is a separate interaction, not falsely recorded as completed.

## 4. Research and strategic analysis requirements

### Whole-company GTM model

Build and publish exactly one canonical overview chapter joining:

- Target customers, users, buyers/payers, problems and alternatives.
- Positioning, value proposition and reasons to choose the offer.
- Awareness/discovery and acquisition routes.
- Trial/evaluation, activation, conversion, sales and procurement.
- Pricing, monetization, business model and relevant economics.
- Delivery/onboarding, customer success, retention, expansion and referrals where material.
- How these elements reinforce or constrain each other, and how they changed across important periods.

Use this as a coverage model, not a mandatory set of identically named headings. Unsupported elements remain explicit unknowns or reasoned not-applicable items. Do not invent retention data or force a linear funnel on a marketplace, enterprise sale or other different business. Tables/diagrams are optional when they clarify relationships.

### Material strategy-change investigation

For every candidate change, investigate the before/after customer, problem, offer, positioning, workflow, acquisition/sales motion, charging model and strategic role. Establish the trigger, actors' stated reasons, credible alternatives, important trade-offs, execution, outcomes and remaining questions. Distinguish decisions from inferred mechanisms and measured results.

Classify the change accurately: strategic pivot, business-model change, segment/channel shift, expansion, product extension, rebrand, or ordinary feature. A new name or launch is not automatically a pivot. A strategically important change can warrant deep coverage without proven revenue. Prioritize by impact on the business explanation, rather than equal space for every announcement.

Use an existing analysis worksheet/plan section for this comparison; no new global record type or duplicative registry is needed. Claims and major conclusions still link to the existing evidence and review records.

### Current and emerging direction

At reconnaissance, map today's product/brand portfolio and buyer-facing offer, then trace important origins and changes. Reconcile the map again before final delivery using current product/navigation pages, commercial/pricing material, release notes/docs, relevant company communications, buyer/partner evidence and independent reporting where accessible. Record cutoff and distinguish event, publication and access dates.

Follow separate product domains, brands and buyer types when material. Inspect both existing business lines and newly emphasized ones; account for products that were retired or de-emphasized. Check that live wording has not been projected backward into history. Avoid arbitrary recency windows or source-count quotas.

For future direction distinguish: (1) observable/available changes, (2) announced plans or experiments, and (3) supported conditional interpretations. For the third, state the basis, alternatives, what would confirm/disconfirm it and what remains unknown. Never claim to know an unannounced future pivot or equate a roadmap with an achieved result.

## 5. Adaptive book and writing rules

The required whole-company GTM chapter should appear early enough to orient readers. Remaining chapters answer the company's most important strategic questions, which may involve origins, a pivot, competing motions, a failed experiment or an emerging business. No fixed chapter count, part structure, per-channel chapter rule or one-to-one mapping from research phases.

Use concise context followed by explicit strategic analysis. Explain what changed, why it mattered, which choices were made and what evidence supports the mechanism. Keep readable citations and proportionate caveats; avoid repeated generic lessons or an uncertainty paragraph after every fact. Strategic analysis can be strong and useful while its outcome remains unknown.

Keep one canonical explanation of each mechanism and link deeper treatments to the overview, avoiding repeated mini-histories. Do not prescribe a narrative/analysis percentage or mandatory paragraph count. Preserve the general-reader standard and the prohibition on importing the user's business without a separate request.

## 6. Implementation work packages and affected files

Paths below are relative to `.agents/skills/gtm-deep-research/`. Edit only where the behavioral rule actually changes; use a final cross-file search to catch live contradictions.

| Order | Work package | Primary files |
|---|---|---|
| 1 | Consolidate intake, authorization and goal execution | `SKILL.md`; `references/activation-and-approval-gates.md`, `goal-discovery-and-charter.md`, `progressive-planning-and-contracts.md`, `investigation-execution.md`; `templates/research-charter.md`, `research-plan.md`, `research-contract.md`, `project-active-state.md` |
| 2 | Add mandatory strategic/current-state coverage with one maintained source of guidance | New `references/strategy-and-current-state.md`; link it from investigation/synthesis/completion; extend charter/contract questions and evidence expectations without duplicating the whole procedure |
| 3 | Make complete GTM overview canonical; deeper structure adaptive; reduce narrative bias | `references/research-synthesis-and-lessons.md`, `research-book-architecture.md`, `synthesis-revisions.md`; `templates/research-book-index.md`, `research-book-chapter.md`; new `templates/company-gtm-overview.md` for the required overview |
| 4 | Introduce strategy and coverage reviews, final-human-review state and proportionate unknown handling | `references/red-team-and-adjudication.md`, `completion-and-acceptance.md`, `gaps-and-journal.md`, `human-learning.md`, `dependency-impact-and-reopening.md`; relevant review, gap, completion and checkpoint templates |
| 5 | Remove implicit source caps/extension ceremonies while preserving real hard limits | `references/research-budget-management.md`, `templates/research-budget-ledger.md`; retain measured usage, no paid-access inference, no exceeding existing approved caps |
| 6 | Reconcile specification authority and audits | Specification chapters 01–03, 05–06, 10–14 where affected; relevant part/main indexes; appendices `audit-reconciliations.md`, `decision-coverage.md`, `glossary-and-topic-index.md`; `references/final-static-audit.md`; illustrative evidence-chain example if it contradicts the new model |

The fourteen chapters of the skill's own specification are distinct from the adaptive chapters generated for a researched company. Historical increment/review artifacts should remain historical: mark superseded live rules with a clear amendment rather than rewriting old reviews as if they validated the new behavior. Do not expand this into a packaging/installation exercise; keep those actions separate unless requested.

## 7. Review and completion changes

Use four complementary internal checks:

1. **Coverage:** Whole-company cycle addressed; material historical/current/emerging changes accounted for; no major product or buyer silently omitted.
2. **Strategic depth:** Important changes explain choices, alternatives, trade-offs, GTM implications, execution and outcomes/unknowns; a product mention does not pass.
3. **Evidence:** Material claims traced, dates/lineage/access honest, causal alternatives sought, future statements labeled, unknowns not converted into certainty.
4. **Reader/editorial:** Clear orientation and language, useful adaptive chapters, concise context, no repetitive retelling or unsupported generic lessons.

If a check exposes an in-scope research gap, return autonomously to investigation and revise, within limits. Deliver only after these checks pass or a genuinely blocking constraint is disclosed.

Agree at intake which unknowns can receive a qualified disposition and which missing user-defined must-have answers prevent delivery. Distinguish an investigated but unavailable answer from unperformed work. No automatic phase blockage merely because an old receipt is inaccessible; no blanket permission to mark missing strategic/current coverage complete. Keep limits and revisit triggers visible.

Default learning updates are nonblocking and can be deferred to final delivery. Final output is explicitly ready for user review; do not claim the user has accepted it. Subsequent chapter-by-chapter review should reuse the evidence and chapter map rather than restart research or approval.

## 8. Validation and acceptance criteria

### Static consistency

- Validate frontmatter and every changed local reference/template link.
- Search all live instructions, templates and specification chapters for separate routine charter/phase/contract approvals, top-level-outline approval, blanket critical-gap blockage and contradictory completion states. Classify historical statements rather than blindly deleting every matching word.
- Verify goal orchestration does not recreate Goal Memory dependency, fabricate usage/approval, or introduce automatic unrequested external actions.
- Confirm unchanged provenance, review-state/evidence-state separation, identity allocation, recovery and hard-budget safeguards.
- Limit the diff to the skill change; do not stage unrelated work or modify active company records as part of implementation.

### Behavioral evaluation

| Scenario | Expected behavior |
|---|---|
| Rich request with preferences already supplied | Intake asks only material missing questions; one combined approval starts the full run. |
| Ambiguous purpose or completion requirement | Agent challenges the ambiguity upfront and records the user's choice, not repeated agreement prompts. |
| Mature company with a recent separate product/brand | Current inventory discovers and strategically evaluates it; naming it once does not satisfy coverage. |
| Company with several overlapping offers | One complete whole-company GTM overview plus justified deeper chapters; no forced single pivot or fixed chapter count. |
| New current evidence changes the interpretation or outline | Agent investigates/restructures within scope and logs its reasoning without a new routine approval gate. |
| Old first-payment proof remains inaccessible | Qualified disposition follows the agreed criteria; no fabricated answer, unnecessary endless research or automatic approval loop. |
| New paid source, outreach, scope expansion or hard cap | Agent respects the boundary, requests only the needed decision and continues unaffected authorized work. |
| Roadmap announced but not shipped | Planned/experimental status remains explicit; no achieved outcome or certain future pivot inferred. |
| Research reaches final delivery | Internal checks complete; agent stops for user review and can later review chapters step by step without reinitializing the project. |

Use the HackerRank book as a regression case to test whether the rubric detects thin Chakra analysis, missing whole-company GTM overview and dispersed commercial coverage. Keep company names out of generic skill rules. Also use a different synthetic company case to check generality. Static validation is not runtime proof; report which scenarios were actually exercised and leave unperformed evaluations explicit.

## 9. Delivery sequence and scope boundaries

1. Implement the generic skill changes in the dependency order above.
2. Review cross-file consistency and run the bounded behavioral evaluations; repair findings.
3. Present the changed behavior, affected files, validation results and remaining limitations for user review.
4. Revise the HackerRank study only when separately requested, using existing evidence first and reopening targeted research where necessary. Do not retrofit claims or approvals into the completed historical run.
5. Commit/push, merge, publish, install or package only when separately requested or already explicitly authorized for that action.

**Acceptance:** The skill consistently produces substantive strategy analysis with complete current/emerging coverage, one complete company GTM chapter and adaptive deep dives; it gathers essential preferences upfront, runs autonomously under one approved agreement, preserves evidence integrity and stops at final user review.

## 10. Implementation and actual validation — 11 November 2026

Applied the generic workflow/authoring changes across the entrypoint, operational references, templates, live specification and design mappings. Added only two new skill resources: strategy-and-current-state.md and company-gtm-overview.md. Replaced duplicated live specification detail with concise governing summaries linked to the maintained procedures. Historical increment/review artifacts remain unchanged; the narrow synthetic evidence excerpt is explicitly not a full-book layout.

Actual checks:
- Skill Creator quick_validate.py passed after the changes.
- Skill-local Markdown file links and anchors checked with no missing targets; final count reported by validation command.
- Scanned live instructions for legacy separate routine approvals, top-level-outline reapproval and blanket historical-gap blockage; reconciled remaining workspace, initialization, dependency, template and specification wording. Historical artifacts were treated separately.
- Preserved source/claim/review independence procedures, identity/recovery safeguards, prior-project hard ceilings and existing publication boundaries. Preserved committed line endings to keep unrelated diff noise down.
- A separate evaluator read the revised skill and ran two bounded model dry runs from an independent prompt: an approved synthetic history-through-current request with a separate-domain AI product and an unshipped future offer; and a historical-only request ending before later products. It produced a complete-GTM overview plus adaptive deep dives, analyzed choices/alternatives/trade-offs, retained overlap and commercial/efficacy unknowns, respected the existing ceiling, avoided repeated intake/phase approvals and distinguished readiness from acceptance. It found no demonstrated live contradiction in the procedures it examined.
- The evaluator treated the supplied packet as a bounded evidence space, did not invent URLs/IDs or claim a delivered book/full external review, and did not mutate files, browse or create a live goal. This is behavioral dry-run evidence, not a full live autonomous-research certification.
- Applied the new rubric to the existing HackerRank output as an inspection regression: the complete GTM overview is missing and Chakra's strategic treatment is thin despite its presence. The skill now makes those coverage/depth failures explicit. The company book was not rewritten.

Not performed: a new end-to-end web investigation, every listed scenario as a separate runtime test, installation, ZIP packaging, website deployment or live-project migration. Existing research projects and unrelated workspace edits were not changed. No commit/push is included in this implementation action.
