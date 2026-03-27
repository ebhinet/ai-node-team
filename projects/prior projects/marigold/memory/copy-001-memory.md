# copy-001 — Memory
_Agent type: Originator_
_V4_
_Created: 2026-03-27_
_Last updated: 2026-03-27_

---

## Current Focus
_What this node is working on right now._

Complete. Primary pages copy produced and written to `output/documents/copy-001-doc.md`.

---

## Working State
_Live scratch space during execution. Add, update, or remove sections freely._

No active work in progress.

---

## Decisions
_Significant choices made during execution — what was decided and why._
_Captures rationale so a re-entering agent doesn't relitigate settled questions._

1. **Voice and tone: warm, grounded, direct, confident.** Aligned with Option B (Elevated Modern) — the copy avoids both clinical detachment and overly soft/breathy wellness language. Sentences are clear and declarative. The voice speaks with quiet authority rather than aspiration or hype. Contractions are used selectively (not overused) to maintain warmth without becoming too casual. This is editorial warmth — a magazine feature, not a social media caption.

2. **Hero headline: "Find your ground."** Three words. Period at the end for declarative weight. "Ground" serves triple duty — physical (yoga mat, body), emotional (stability, calm), and brand-referential (the Elevated Modern direction is described as "grounded"). Deliberately not a question, not an invitation, not a command with an exclamation point. It is a statement of what happens here.

3. **No exclamation points anywhere.** The brand voice is confident and warm, not enthusiastic or cheerful. Exclamation points undermine the elevated, editorial feel of Option B. Every sentence earns its energy through word choice, not punctuation.

4. **Placeholder content written as real content.** All placeholder bios, Sara's story, and testimonials are written as complete, polished copy in full brand voice. Sara should be able to read them and feel the tone is exactly right — she only needs to swap in her actual details. This was an explicit charter requirement and a key quality standard.

5. **Instructor bios given distinct personalities.** Each of the four placeholder instructors has a different specialty, background, and teaching style. This gives Sara a template for variety — not four identical bios with swapped names. The bios include personal details (rowing injury, dance background) to model the kind of specificity that makes bios feel human.

6. **Three values chosen: Community, Intention, Accessibility.** These emerged directly from the intake record (community focus, deliberate design, inclusive audience) and the brand direction (nothing corporate, nothing exclusive). "Intention" bridges the brand and the practice — it describes both how the studio is designed and how students are asked to practice. "Accessibility" is stated plainly, not euphemistically.

7. **CTA language kept simple and consistent.** "Book a Class" is the universal primary CTA across homepage and about page, matching the architecture spec. No variation in wording to avoid confusion. Supporting copy varies by context but the button text is always the same.

8. **Apostrophes avoided in contractions where ambiguity could arise in markdown.** Used full forms ("do not" instead of "don't") in several places to keep copy clean in markdown rendering and maintain the slightly elevated register.

---

## Downstream Notes
_Two-part section. The agent considers: who reads this memory, and what will they need?_
_Then captures signals, findings, constraints, or flags worth surfacing to those nodes._

**For copy-002 (services and conversion pages):**
- The established voice is: warm, grounded, direct, editorially confident. Sentences tend toward medium length. No exclamation points. Contractions used sparingly. The copy speaks with quiet authority.
- "Find your ground" is the hero tagline — do not repeat or echo it on other pages. Each page should have its own energy.
- CTA button text is "Book a Class" consistently. Do not vary this for standard booking CTAs. The corporate wellness CTA is different per the architecture spec ("Schedule a Consultation" or similar).
- Placeholder content should be written as complete, polished copy in brand voice — not generic filler. This is a non-negotiable quality standard from the charter.
- The testimonial on the homepage references feeling "scattered" and coming back to "center." Avoid duplicating these specific images in the 6-8 placeholder testimonials on the testimonials page — vary the emotional beats.
- Terminology: "practice" (not "workout"), "practitioners" or "students" (not "clients"), "sessions" (not "appointments" — except for corporate wellness consultations). This language is deliberate.

**For content-adversarial:**
- Copy covers all three primary pages: Homepage (7 sections), Our Story (5 sections), Instructor Bios (3 sections). Every section from the architecture wireframe has corresponding copy.
- All CTAs use "Book a Class" as button text, linking to external booking system (placeholder URL per arch spec).
- Placeholder content for Sara's bio and all four instructor bios includes clear bracketed notes indicating what to replace.
- The About page values/pillars section uses three values (Community, Intention, Accessibility) which are not specified in the architecture wireframe — I chose these based on intake record and brand alignment. The adversarial should assess whether these feel right.
- No pricing, schedule, or service detail content is included — that is copy-002's scope.

**For report-002 (Gate 2 report):**
- Copy is organized by page, then by section matching the architecture wireframe labels exactly (e.g., "Section 1 — Hero", "Section 3 — Class Offerings Overview"). This labeling is intentional to make the report easy to assemble.
- Each copy block is clearly labeled with its content type (H1, H2, H3, body copy, CTA button text, text link) to help the report node present it correctly.
