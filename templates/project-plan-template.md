# Project Plan — [Project Name]
_Written by: Orchestrator_
_Date: [date]_
_Last updated: [date]_

---

## Stage 1 — [Stage Name]

| Step | Node ID | Deliverable | Depends On | Parallel With | Status | Client Gate |
|---|---|---|---|---|---|---|
| 1.1 | [node-id] | [what this node produces] | — | — | Not spawned | No |
| 1.2 | [node-id] | [what this node produces] | 1.1 | — | Not spawned | No |
| — | **Gate 1** | [deliverable(s) presented to client] | 1.2 | — | — | **Yes** |

---

## Stage 2 — [Stage Name]

| Step | Node ID | Deliverable | Depends On | Parallel With | Status | Client Gate |
|---|---|---|---|---|---|---|
| 2.1 | [node-id] | [what this node produces] | Gate 1 | 2.2 | Not spawned | No |
| 2.2 | [node-id] | [what this node produces] | Gate 1 | 2.1 | Not spawned | No |
| 2.3 | [node-id] | [what this node produces] | 2.1, 2.2 | — | Not spawned | No |
| — | **Gate 2** | [deliverable(s) presented to client] | 2.3 | — | — | **Yes** |

---

## Stage N — [Stage Name]

_Add stages as needed. Final stage typically ends with a client gate._

---

## Amendment Log
_Append an entry any time the plan is revised post-creation._

| Date | Change | Triggered By |
|---|---|---|
| [creation date] | Initial plan written | Phase 2 plan build |
