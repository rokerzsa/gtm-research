# Workspace State — allocation and compatibility

| Field | Value |
|---|---|
| Workspace ID | W-GTM-RESEARCH-001 |
| Convention version | 1.0 |
| Last issued project number | 3 |
| Last issued concept number | 3 |
| Unresolved recovery | none; 12 November sequential usefulness revisions reconciled for PRJ-0003 edition 3, PRJ-0001 edition 2.5 and PRJ-0002 edition 2; all ready-for-user-review-qualified, new acceptance pending |

## Allocation invariants

- Persist counter increments before creating records; issued numbers remain spent even after a failed write.
- On restart, compare counters against records and any allocation journal; if inconsistent, halt and reconcile without issuing duplicates.
- Do not claim concurrency safety or atomic multi-file commits.

