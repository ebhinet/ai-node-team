# File Structure
_V4_
_Informational only. File locations and purposes only — write permissions are defined in `constitution.md`._

---

## Root

```
[root]/
├── CLAUDE.md
├── constitution.md
├── file-structure.md
├── templates/
└── projects/
    └── template_project/
```

---

## templates/
Reference and template files used by the Charter Specialist and orchestrator at plan time.

| File | Purpose |
|---|---|
| `originator-charter-template.md` | Blank charter for originator agent nodes |
| `originator-charter-reference.md` | Completed example of an originator charter |
| `adversarial-charter-template.md` | Blank charter for adversarial domain nodes |
| `adversarial-charter-reference.md` | Completed example of an adversarial charter |
| `project-plan-template.md` | Structure and instructions for the project plan |
| `node-map-template.md` | Structure and instructions for the node map |
| `node-map-reference.md` | Completed example of a populated node map |
| `intake-record-template.md` | Structure for the client intake record |
| `memory-starter.md` | Blank memory file for new agents |

---

## projects/
Each subdirectory is one live project. `template_project/` is the seed —
copy and rename it before starting a new project.

```
template_project/
├── client/
│   └── readme.md
├── charters/
│   ├── orchestrator-CHARTER.md
│   ├── charter-specialist-CHARTER.md
│   └── plan-adversarial-CHARTER.md
├── memory/
│   ├── orchestrator-memory.md
│   └── plan-adversarial-memory.md
└── output/
    ├── documents/
    └── deliverables/
```

---

### client/
Input materials provided by the human before the project begins.
Contents vary by engagement — described in `readme.md`.

| File | Purpose |
|---|---|
| `readme.md` | Lists every file in this folder and its role in the project |
| *(varies)* | Additional input files as needed |

The orchestrator writes `intake-record.md` to this folder during Phase 1
using `templates/intake-record-template.md` as the structure. It does not
exist at project start — it is created by the orchestrator post-intake.

---

### charters/
One charter file per agent. The orchestrator and Charter Specialist charters are pre-seeded.
All other charters are written by the Charter Specialist at plan time.

| Naming | Purpose |
|---|---|
| `orchestrator-CHARTER.md` | Pre-seeded; defines orchestrator behavior |
| `charter-specialist-CHARTER.md` | Pre-seeded; defines Charter Specialist behavior |
| `plan-adversarial-CHARTER.md` | Pre-seeded; defines Plan Adversarial behavior — reviews intake, plan, node map, and scope events (see charter for full pass definitions) |
| `[node-id]-CHARTER.md` | Written by Charter Specialist at plan time for each originator node |
| `[domain]-adversarial-CHARTER.md` | Written by Charter Specialist at plan time for each adversarial domain node |

---

### memory/
One memory file per agent. Pre-seeded memory files (`orchestrator-memory.md`,
`plan-adversarial-memory.md`) are included in the template project. All other
memory files are created by the Charter Specialist at plan time using
`templates/memory-starter.md`.

| Naming | Purpose |
|---|---|
| `orchestrator-memory.md` | Pre-seeded blank; maintained by orchestrator |
| `plan-adversarial-memory.md` | Pre-seeded blank; maintained by Plan Adversarial |
| `[node-id]-memory.md` | Created by Charter Specialist at plan time; maintained by each agent during execution |

---

### output/
All project outputs. Written entirely at runtime — nothing is pre-seeded.

| File / Directory | Purpose |
|---|---|
| `project-plan.md` | Sequenced plan — deliverables, dependencies, status, gates |
| `node-map.md` | Information topology — what each node reads |
| `documents/` | All node outputs |
| `deliverables/` | Assembled client-facing outputs |

#### documents/
One document pair per originator node.

| Naming | Purpose |
|---|---|
| `[node-id]-doc.md` | The originator's output document |
| `[node-id]-doc-challenge.md` | The adversarial's challenge document, paired to the above |
| `plan-adversarial-[pass].md` | Plan Adversarial findings document — one per pass (see plan-adversarial-CHARTER.md for exact filenames per pass) |

Originator/adversarial pairs are created and updated together. When the originator revises
its document following a `REWORK` verdict, the adversarial updates its
challenge document in the same pass. They are a permanent pair.
