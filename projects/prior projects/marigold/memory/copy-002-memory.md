# copy-002 — Memory
_Agent type: Originator_
_V4_
_Created: 2026-03-27_
_Last updated: 2026-03-27_

---

## Current Focus
_What this node is working on right now._

Complete. Services and conversion pages copy produced and written to `output/documents/copy-002-doc.md`.

---

## Working State
_Live scratch space during execution. Add, update, or remove sections freely._

No active work in progress.

---

## Decisions
_Significant choices made during execution — what was decided and why._
_Captures rationale so a re-entering agent doesn't relitigate settled questions._

1. **Proceeded without copy-001 output.** copy-001-doc.md did not exist at spawn time and copy-001's memory was blank. Charter states copy-001 should be complete before copy-002 is spawned. Decision: proceed using brand-002 (Elevated Modern) as the primary voice reference, since the orchestrator explicitly spawned with "produce output" and the content-adversarial can flag voice inconsistencies in review. Voice was established directly from brand-002 tone guidance and intake record.

2. **Voice established as: warm, confident, unhurried, direct.** Sentences are clean and declarative. Avoids wellness cliches ("transform your life," "journey to wellness," "sacred space"). Uses contractions sparingly — mostly in conversational moments (testimonials, first-visit info) but not in headline or CTA copy. Second person ("you/your") throughout. No exclamation marks in body copy.

3. **Corporate Wellness tone shift documented.** The corporate page uses longer sentences, more formal structure, and outcomes-oriented language (stress reduction, focus, team cohesion, ROI). Avoids jargon but speaks to business decision-makers. Still recognizably Marigold — warm openings, human language — but with a professional register. No yoga terminology on this page (uses "mindful movement," "wellness programming," "sessions" instead of "classes").

4. **Placeholder pricing set at realistic boutique studio rates.** Drop-in: $22, 5-pack: $95 ($19/class), 10-pack: $170 ($17/class), Monthly Unlimited: $149. Private sessions: $85. These are mid-range for a boutique studio in a Hudson Valley town — not NYC prices, not budget. New student discount: 50% off first drop-in ($11).

5. **Placeholder instructor names reused from schedule.** Sara O. (owner), Priya L. (Pilates), Tomoko R. (sound bath/restorative), Jordan K. (yoga). These names appear in the schedule table and in testimonials for cross-consistency. If copy-001 established different placeholder instructor names, this will need alignment.

6. **Testimonials written in six distinct voices.** Each highlights a different facet: (1) atmosphere/stress relief, (2) instructor quality/accessibility, (3) sound bath/physical results, (4) corporate wellness/workplace impact, (5) working mom/Pilates/specific instructor, (6) gift card/retention. Varied lengths and specificity levels per architecture spec.

7. **Email capture lead magnet: free drop-in class.** Chosen because it removes all risk for new visitors and is the strongest conversion incentive for a studio. Noted as a placeholder — Sara can swap for another offer. Four copy variants provided for contextual placement across the site.

8. **Schedule includes a "New Moon Sound Journey" as a recurring monthly event.** This adds character and differentiates the studio from generic class schedules. Noted to Sara that she should adjust frequency or replace if it doesn't match her offerings.

---

## Downstream Notes
_Two-part section. The agent considers: who reads this memory, and what will they need?_
_Then captures signals, findings, constraints, or flags worth surfacing to those nodes._

**For content-adversarial:**
- copy-001-doc.md did not exist at time of writing. Voice was established independently from brand-002 and intake record. The adversarial should verify voice consistency between copy-001 and copy-002 once both exist — particularly terminology choices (e.g., "practice" vs. "class," "student" vs. "member"), use of contractions, and sentence rhythm.
- Corporate Wellness tone shift is deliberate and documented (Decision #3 above). The page avoids yoga terminology and uses professional-register language. This is intentional per charter and intake record, not a voice inconsistency.
- Placeholder instructor names (Sara O., Priya L., Tomoko R., Jordan K.) were invented here — they may not match names in copy-001 if that document establishes different placeholders. Flag if misaligned.
- Six testimonials provided (charter asked for 4-6). Architecture spec requested 6-8. Went with 6 to stay within charter range while providing adequate variety.

**For report-002:**
- All page copy is organized by page (H2) and then by section matching the architecture wireframe. Section labels match arch-001 section names for easy cross-reference.
- Developer notes and Sara notes are included inline — these should be stripped or reformatted for the client-facing report. The actual copy is the content outside of bracketed notes.
- Seasonal messaging suggestions for the Gift Cards page are included as a separate block — these are supplementary, not page copy, and could be presented as a sidebar or appendix in the report.

**For web-001:**
- All CTA buttons are labeled and linked to placeholder URLs as specified. Corporate Wellness uses "Schedule a Consultation" (links to /contact), not "Book a Class."
- Schedule table has 18 placeholder class entries across 7 days. Sunday has only one class (Restorative). Developer should implement as table on desktop, card-stack-by-day on mobile per arch-001.
- Email capture has 4 copy variants: (1) inline for homepage/footer, (2) modal for desktop first-visit, (3) contextual for classes page, (4) contextual for about page. Developer can select and place as appropriate.
- Contact form confirmation message is provided ("Thank you — we have received your message..."). This should appear on submit even though the form has no backend.
- Pricing middle card (Class Pack) should receive the "Most Popular" label and visual elevation per arch-001 spec.
