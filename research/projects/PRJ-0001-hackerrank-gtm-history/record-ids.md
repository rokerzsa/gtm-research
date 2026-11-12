# Scoped Research Record IDs — PRJ-0001

Single-writer issuance. Counters are set to zero only before allocation. Issued identifiers are never recycled.

| Kind | Prefix | Last issued number |
|---|---|---:|
| Source | SRC | 81 |
| Claim | CLM | 144 |
| Research contract | RC | 4 |
| Red-team review | RT | 7 |
| Gap | GAP | 2 |
| Project decision | DEC | 10 |

**Qualified form:** PRJ-0001:SRC-0001. Source, claim, contract, review, gap, and decision IDs are project-scoped; workspace concepts use the separate K- namespace.

Persist issuance before record creation. Gaps in numbering are acceptable; reused IDs are not.

Budget events use stable ledger-local markers rather than a new global ID sequence.

12 November 2026: DEC-0010 / SRC-0076–0080 / CLM-0141–0144 / RT-0007 reserved before usefulness revision records under the explicit sequential goal. Existing caps/identity history preserved.

SRC-0081 allocated before developer payment/billing cross-check record.
