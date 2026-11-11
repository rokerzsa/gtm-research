# Scoped Research Record IDs — PRJ-0001

Single-writer issuance. Counters are set to zero only before allocation. Issued identifiers are never recycled.

| Kind | Prefix | Last issued number |
|---|---|---:|
| Source | SRC | 75 |
| Claim | CLM | 140 |
| Research contract | RC | 4 |
| Red-team review | RT | 6 |
| Gap | GAP | 2 |
| Project decision | DEC | 9 |

**Qualified form:** PRJ-0001:SRC-0001. Source, claim, contract, review, gap, and decision IDs are project-scoped; workspace concepts use the separate K- namespace.

Persist issuance before record creation. Gaps in numbering are acceptable; reused IDs are not.

Budget events use stable ledger-local markers rather than a new global ID sequence.
