# Workspace State — allocation and compatibility

| Field | Value |
|---|---|
| Workspace ID | W-GTM-RESEARCH-001 |
| Convention version | 1.0 |
| Last issued project number | 1 |
| Last issued concept number | 2 |
| Unresolved recovery | none (initial value only) |

## Allocation invariants

- Persist counter increments before creating records; issued numbers remain spent even after a failed write.
- On restart, compare counters against records and any allocation journal; if inconsistent, halt and reconcile without issuing duplicates.
- Do not claim concurrency safety or atomic multi-file commits.
