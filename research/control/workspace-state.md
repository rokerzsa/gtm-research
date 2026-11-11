# Workspace State — allocation and compatibility

| Field | Value |
|---|---|
| Workspace ID | W-GTM-RESEARCH-001 |
| Convention version | 1.0 |
| Last issued project number | 2 |
| Last issued concept number | 3 |
| Unresolved recovery | none; PRJ-0002 allocations, records and local links reconciled 11 November 2026; ready-for-user-review-qualified |

## Allocation invariants

- Persist counter increments before creating records; issued numbers remain spent even after a failed write.
- On restart, compare counters against records and any allocation journal; if inconsistent, halt and reconcile without issuing duplicates.
- Do not claim concurrency safety or atomic multi-file commits.

