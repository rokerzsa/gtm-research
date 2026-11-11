# Scoped Research Record IDs — PRJ-0001

Single-writer issuance. Counters are set to zero only before allocation. Issued identifiers are never recycled.

| Kind | Prefix | Last issued number |
|---|---|---:|
| Source | SRC | 37 |
| Claim | CLM | 96 |
| Research contract | RC | 2 |
| Red-team review | RT | 2 |
| Gap | GAP | 1 |
| Project decision | DEC | 5 |

**Qualified form:** PRJ-0001:SRC-0001. Source, claim, contract, review, gap, and decision IDs are project-scoped; workspace concepts use the separate K- namespace.

Persist issuance before record creation. Gaps in numbering are acceptable; reused IDs are not.

Budget events use stable ledger-local markers rather than a new global ID sequence.
