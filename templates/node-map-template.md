# Node Map — [Project Name]
_Written by: Orchestrator_
_Date: [date]_
_Last updated: [date]_

---

## How This File Works
This file defines the information topology of the project.
It answers one question for every node: what does this node read when spawned?

Two node populations are tracked here:
- **Originator nodes** — one per sub-deliverable; each entry defines its document inputs and memory connections
- **Adversarial domain nodes** — one per domain; each entry defines its scope, member nodes, and read list

This file does not define what nodes produce or track execution status — those live in the project plan.
Update this file only when nodes are defined at plan time or when scope changes add, remove, or restructure nodes.

---

## Node ID Naming Convention

**Originator nodes:** `[role-abbreviation]-[sequence number]`
- Role abbreviation is short and descriptive: `ux`, `copy`, `seo`, `tech`, `content`
- Sequence number is zero-padded three digits: `001`, `002`, `003`
- Examples: `ux-001`, `copy-001`, `copy-002`, `seo-001`

**Adversarial domain nodes:** `[domain]-adversarial`
- Domain name matches the domain exactly: `brand`, `ux`, `technical`, `seo`
- Examples: `brand-adversarial`, `ux-adversarial`, `technical-adversarial`

Node IDs are used directly in file names — charter files, memory files, and output
documents all derive their names from the node ID. Once assigned, a node ID
never changes.

---

## Originator Nodes

### [role-abbreviation]-001
**Role:** [one-line description of what this node produces]

**Document inputs:**
- `[path]` — [why this node reads this document]

**Memory connections:**
- `memory/[role-abbreviation]-001-memory.md` — [node role] — [what this node should look for]

---

_Add an entry for every originator node defined in the project plan._
_Follow the naming convention above for all node IDs._
_Document inputs are determined by the orchestrator — there are no universal inputs._

---

## Adversarial Domain Nodes

### [domain]-adversarial
**Domain:** [domain name]
**Shared concern:** [one sentence — what lens this adversarial applies across all nodes in its domain]
**Member nodes:** [node-id], [node-id], [node-id]

**Document read list:**
- `output/node-map.md` — domain entry; confirms which nodes this adversarial covers
- `[path]` — [why relevant to this domain]

**Memory read list:**
- `memory/[domain]-adversarial-memory.md` — own memory; check prior findings and patterns
- `memory/[node-id]-memory.md` — [node role] — [what this adversarial should look for]

---

_Add an entry for every adversarial domain node derived at plan time._
_Document read list is determined by the orchestrator — there are no universal inputs._

---

## Amendment Log

| Date | Change | Triggered By |
|---|---|---|
| [creation date] | Initial node map written | Phase 2 plan build |
