# Node Map — Marigold Wellness Studio
_Written by: Orchestrator_
_Date: 2026-03-27_
_Last updated: 2026-03-27_

---

## Originator Nodes

### brand-001
**Role:** Produce Brand Direction Option A — a warm/earthy brand concept including color palette, typography, logo concept, and imagery direction

**Document inputs:**
- `client/intake-record.md` — Sara's vision, design preferences, anti-patterns, audience, and business context

**Memory connections:**
- `memory/brand-001-memory.md` — own memory — check for prior rework notes or adversarial feedback

---

### brand-002
**Role:** Produce Brand Direction Option B — an elevated/modern brand concept, distinctly different from Option A, including color palette, typography, logo concept, and imagery direction

**Document inputs:**
- `client/intake-record.md` — Sara's vision, design preferences, anti-patterns, audience, and business context

**Memory connections:**
- `memory/brand-002-memory.md` — own memory — check for prior rework notes or adversarial feedback

---

### brand-003
**Role:** Produce Brand Direction Option C — a handcrafted/organic brand concept, distinctly different from Options A and B, including color palette, typography, logo concept, and imagery direction

**Document inputs:**
- `client/intake-record.md` — Sara's vision, design preferences, anti-patterns, audience, and business context

**Memory connections:**
- `memory/brand-003-memory.md` — own memory — check for prior rework notes or adversarial feedback

---

### arch-001
**Role:** Produce site architecture — sitemap, navigation structure, page hierarchy, wireframe descriptions for each page, and optional add-ons/alternatives for Sara's input

**Document inputs:**
- `client/intake-record.md` — confirmed pages, features, priorities, audience, and constraints
- `output/documents/brand-001-doc.md` — Brand Direction A (read all three; intake record captures Sara's selection at Gate 1)
- `output/documents/brand-002-doc.md` — Brand Direction B
- `output/documents/brand-003-doc.md` — Brand Direction C

**Memory connections:**
- `memory/arch-001-memory.md` — own memory — check for prior rework notes or adversarial feedback
- `memory/brand-001-memory.md` — brand designer — look for notes on imagery approach or visual hierarchy preferences
- `memory/brand-002-memory.md` — brand designer — look for notes on imagery approach or visual hierarchy preferences
- `memory/brand-003-memory.md` — brand designer — look for notes on imagery approach or visual hierarchy preferences

---

### copy-001
**Role:** Produce page copy for primary pages — Homepage, About/Our Story, and Instructor Bios. Placeholder content in proper style for bios.

**Document inputs:**
- `client/intake-record.md` — business context, audience, tone, placeholder content requirements
- `output/documents/arch-001-doc.md` — page structure and wireframe descriptions to write copy against
- `output/documents/brand-001-doc.md` — brand direction options (intake record captures selection)
- `output/documents/brand-002-doc.md` — brand direction options
- `output/documents/brand-003-doc.md` — brand direction options

**Memory connections:**
- `memory/copy-001-memory.md` — own memory — check for prior rework notes or adversarial feedback
- `memory/arch-001-memory.md` — architect — look for notes on content hierarchy, CTA placement, or page flow decisions

---

### copy-002
**Role:** Produce page copy for services and conversion pages — Classes/Schedule, Corporate Wellness, Pricing/Packages, Gift Cards, Contact, Testimonials, and Email Capture. Placeholder content in proper style for testimonials and pricing.

**Document inputs:**
- `client/intake-record.md` — business context, audience, tone, placeholder content requirements, corporate wellness tone shift
- `output/documents/arch-001-doc.md` — page structure and wireframe descriptions to write copy against
- `output/documents/brand-001-doc.md` — brand direction options (intake record captures selection)
- `output/documents/brand-002-doc.md` — brand direction options
- `output/documents/brand-003-doc.md` — brand direction options

**Memory connections:**
- `memory/copy-002-memory.md` — own memory — check for prior rework notes or adversarial feedback
- `memory/arch-001-memory.md` — architect — look for notes on content hierarchy, CTA placement, or page flow decisions
- `memory/copy-001-memory.md` — primary copy — look for established tone, voice, and terminology decisions to maintain consistency

---

### report-001
**Role:** Produce the Gate 1 Brand Design Report as a visual, self-contained HTML document. Present all 3 brand direction options with rendered color swatches, live font samples (Google Fonts), SVG logo concepts, and imagery direction — formatted for a non-technical client audience. No hex codes or technical jargon.

**Document inputs:**
- `client/intake-record.md` — Sara's context, preferences, and constraints; report should speak directly to her
- `output/documents/brand-001-doc.md` — Brand Direction A — full content to present visually
- `output/documents/brand-002-doc.md` — Brand Direction B — full content to present visually
- `output/documents/brand-003-doc.md` — Brand Direction C — full content to present visually

**Memory connections:**
- `memory/report-001-memory.md` — own memory — check for prior rework notes

---

### report-002
**Role:** Produce the Gate 2 Site Architecture & Copy Report as a visual, self-contained HTML document. Present site architecture (sitemap, page structure, wireframes), all page copy, and optional add-ons/alternatives — formatted for a non-technical client audience.

**Document inputs:**
- `client/intake-record.md` — Sara's context, preferences, and constraints
- `output/documents/arch-001-doc.md` — site architecture to present
- `output/documents/copy-001-doc.md` — primary pages copy to present
- `output/documents/copy-002-doc.md` — services and conversion pages copy to present
- `output/documents/brand-001-doc.md` — selected brand direction for visual alignment
- `output/documents/brand-002-doc.md` — brand direction options
- `output/documents/brand-003-doc.md` — brand direction options

**Memory connections:**
- `memory/report-002-memory.md` — own memory — check for prior rework notes

---

### web-001
**Role:** Produce the complete website as HTML/CSS/JS — responsive, stock imagery, placeholder integrations, runnable on localhost

**Document inputs:**
- `client/intake-record.md` — constraints, placeholder requirements, design anti-patterns
- `output/documents/brand-001-doc.md` — brand direction options (intake record captures selection)
- `output/documents/brand-002-doc.md` — brand direction options
- `output/documents/brand-003-doc.md` — brand direction options
- `output/documents/arch-001-doc.md` — site architecture, page structure, wireframe descriptions
- `output/documents/copy-001-doc.md` — primary pages copy
- `output/documents/copy-002-doc.md` — services and conversion pages copy

**Memory connections:**
- `memory/web-001-memory.md` — own memory — check for prior rework notes or adversarial feedback
- `memory/arch-001-memory.md` — architect — look for structural decisions, navigation patterns, responsive breakpoints
- `memory/copy-001-memory.md` — primary copy — look for content placement notes
- `memory/copy-002-memory.md` — services copy — look for content placement notes

---

### media-001
**Role:** Source real stock images and videos from free libraries (Unsplash, Pexels, Pixabay) that match the Option B (Elevated Modern) imagery direction. Select specific images for each page section across the website. Integrate the sourced media into the website files at `output/website/` by replacing placeholder blocks with actual image/video references.

**Document inputs:**
- `client/intake-record.md` — constraints, placeholder requirements, imagery sourcing requirement
- `output/documents/brand-002-doc.md` — Option B imagery direction: photography style, mood, lighting, subjects, color treatment, what to avoid
- `output/documents/arch-001-doc.md` — page structure and section layout to know where images are needed
- `output/documents/web-001-doc.md` — build manifest documenting current placeholder approach and file structure

**Memory connections:**
- `memory/media-001-memory.md` — own memory — check for prior rework notes
- `memory/web-001-memory.md` — web developer — look for notes on image placement, hero sections, video placeholder implementation

---

## Adversarial Domain Nodes

### brand-adversarial
**Domain:** brand
**Shared concern:** Does each brand direction authentically reflect Sara's vision — warm, calm, grounded, distinctive — while avoiding generic wellness tropes, and are the three options meaningfully distinct from each other?
**Member nodes:** brand-001, brand-002, brand-003

**Document read list:**
- `output/node-map.md` — domain entry; confirms which nodes this adversarial covers
- `client/intake-record.md` — Sara's stated preferences, anti-patterns, inspiration references, and audience
- `output/documents/brand-001-doc.md` — Brand Direction A under review
- `output/documents/brand-002-doc.md` — Brand Direction B under review
- `output/documents/brand-003-doc.md` — Brand Direction C under review

**Memory read list:**
- `memory/brand-adversarial-memory.md` — own memory; check prior findings and patterns
- `memory/brand-001-memory.md` — brand designer A — look for design rationale and trade-offs
- `memory/brand-002-memory.md` — brand designer B — look for design rationale and trade-offs
- `memory/brand-003-memory.md` — brand designer C — look for design rationale and trade-offs

---

### content-adversarial
**Domain:** content
**Shared concern:** Does the site architecture support clear user flow with booking as the unmissable primary action, and does all copy maintain consistent brand voice, appropriate tone shifts (e.g., corporate wellness), and quality placeholder content that Sara can realistically polish?
**Member nodes:** arch-001, copy-001, copy-002

**Document read list:**
- `output/node-map.md` — domain entry; confirms which nodes this adversarial covers
- `client/intake-record.md` — confirmed pages, audience, tone requirements, CTA priority, corporate wellness tone shift
- `output/documents/arch-001-doc.md` — site architecture under review
- `output/documents/copy-001-doc.md` — primary pages copy under review
- `output/documents/copy-002-doc.md` — services and conversion pages copy under review
- `output/documents/brand-001-doc.md` — brand direction options for tone/voice alignment check
- `output/documents/brand-002-doc.md` — brand direction options
- `output/documents/brand-003-doc.md` — brand direction options

**Memory read list:**
- `memory/content-adversarial-memory.md` — own memory; check prior findings and patterns
- `memory/arch-001-memory.md` — architect — look for structural decisions and rationale
- `memory/copy-001-memory.md` — primary copy — look for tone and voice decisions
- `memory/copy-002-memory.md` — services copy — look for tone and voice decisions

---

### technical-adversarial
**Domain:** technical
**Shared concern:** Is the website well-built — responsive across devices, accessible, performant, with clean semantic HTML, and does it faithfully implement the approved brand, architecture, and copy?
**Member nodes:** web-001

**Document read list:**
- `output/node-map.md` — domain entry; confirms which nodes this adversarial covers
- `client/intake-record.md` — constraints, placeholder requirements, design anti-patterns
- `output/documents/web-001-doc.md` — website implementation under review
- `output/documents/arch-001-doc.md` — approved site architecture to verify implementation against
- `output/documents/copy-001-doc.md` — approved copy to verify implementation against
- `output/documents/copy-002-doc.md` — approved copy to verify implementation against

**Memory read list:**
- `memory/technical-adversarial-memory.md` — own memory; check prior findings and patterns
- `memory/web-001-memory.md` — web developer — look for implementation decisions, trade-offs, and known limitations

---

## Amendment Log

| Date | Change | Triggered By |
|---|---|---|
| 2026-03-27 | Initial node map written | Phase 2 plan build |
| 2026-03-27 | Added report-001 and report-002 originator nodes for visual report production | Client feedback — orchestrator should not produce client-facing visual artifacts |
| 2026-03-27 | Added media-001 originator node for stock image/video sourcing and integration | Client feedback — placeholder blocks insufficient for client review |
