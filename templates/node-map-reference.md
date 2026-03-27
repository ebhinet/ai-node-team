# Node Map — Northlight Booking Platform
_Written by: Orchestrator_
_Date: 2026-03-26_
_Last updated: 2026-03-26_

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

## Originator Nodes

### ux-001
**Role:** Produce the UX sitemap — all pages, user flows, and navigation structure

**Document inputs:**
- `client/intake-record.md` — confirmed scope, user types, and flow requirements
- `client/brand-brief.md` — tone and audience context

**Memory connections:**
- *(none — first node in the graph)*

---

### copy-001
**Role:** Write homepage copy — hero, value proposition, and primary CTA

**Document inputs:**
- `client/intake-record.md` — confirmed messaging priorities and CTA targets
- `client/brand-brief.md` — voice, tone, and audience
- `output/documents/ux-001-doc.md` — sitemap; establishes page structure copy must fit

**Memory connections:**
- `memory/ux-001-memory.md` — UX node — check Downstream Notes for structural constraints affecting copy placement

---

### copy-002
**Role:** Write booking flow microcopy — labels, confirmations, error states, and helper text

**Document inputs:**
- `client/intake-record.md` — confirmed booking flow steps and edge cases
- `output/documents/ux-001-doc.md` — sitemap; defines the flow steps this copy must cover
- `output/documents/copy-001-doc.md` — homepage copy; tone reference for consistency

**Memory connections:**
- `memory/copy-001-memory.md` — Copy node — check Decisions for voice and terminology choices that must carry through

---

### seo-001
**Role:** Produce SEO strategy — target keywords, page-level recommendations, and metadata structure

**Document inputs:**
- `client/intake-record.md` — confirmed pages, audience, and geographic targeting
- `output/documents/ux-001-doc.md` — sitemap; defines which pages need SEO treatment
- `output/documents/copy-001-doc.md` — homepage copy; keyword alignment check

**Memory connections:**
- `memory/ux-001-memory.md` — UX node — check Downstream Notes for any structural decisions affecting page discoverability
- `memory/copy-001-memory.md` — Copy node — check Downstream Notes for terminology and messaging signals relevant to keyword strategy

---

## Adversarial Domain Nodes

### brand-adversarial
**Domain:** Brand
**Shared concern:** Does every output speak with a consistent, accurate brand voice — tone, terminology, and audience fit?
**Member nodes:** copy-001, copy-002, seo-001

**Document read list:**
- `client/intake-record.md` — confirmed brand requirements and messaging priorities
- `client/brand-brief.md` — primary brand reference
- `output/documents/copy-001-doc.md` — homepage copy
- `output/documents/copy-001-doc-challenge.md` — prior brand challenge; track whether issues were resolved
- `output/documents/copy-002-doc.md` — booking flow microcopy *(read when available)*
- `output/documents/seo-001-doc.md` — SEO strategy; check keyword choices against brand voice *(read when available)*

**Memory read list:**
- `memory/copy-001-memory.md` — Copy node — check Decisions for voice choices and Downstream Notes for signals passed forward
- `memory/copy-002-memory.md` — Copy node — check Downstream Notes for consistency flags *(read when available)*

---

### ux-adversarial
**Domain:** UX
**Shared concern:** Does every output maintain structural integrity, logical flow, and usability across the full user experience?
**Member nodes:** ux-001, copy-002

**Document read list:**
- `client/intake-record.md` — confirmed user flows and feature scope
- `output/documents/ux-001-doc.md` — sitemap; primary reference for structural review
- `output/documents/ux-001-doc-challenge.md` — prior UX challenge; track whether issues were resolved
- `output/documents/copy-002-doc.md` — booking flow microcopy; verify it fits the confirmed flow *(read when available)*

**Memory read list:**
- `memory/ux-001-memory.md` — UX node — check Decisions for structural rationale and Downstream Notes for constraints passed to downstream nodes

---

## Amendment Log

| Date | Change | Triggered By |
|---|---|---|
| 2026-03-26 | Initial node map written | Phase 2 plan build |
