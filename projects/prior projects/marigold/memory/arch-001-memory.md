# arch-001 — Memory
_Agent type: Originator_
_V4_
_Created: 2026-03-27_
_Last updated: 2026-03-27_

---

## Current Focus
_What this node is working on right now._

Complete. Site architecture produced and written to `output/documents/arch-001-doc.md`.

---

## Working State
_Live scratch space during execution. Add, update, or remove sections freely._

No active work in progress.

---

## Decisions
_Significant choices made during execution — what was decided and why._
_Captures rationale so a re-entering agent doesn't relitigate settled questions._

1. **Flat-with-grouping sitemap hierarchy.** All primary pages are one level deep from homepage. About/Our Story and Instructor Bios are conceptually grouped under "About" but each gets its own top-level URL and nav entry. Rationale: a boutique studio site does not need deep nesting, and shallow hierarchy ensures no page is more than two clicks from home.

2. **Primary nav limited to 6 items.** Our Story, Classes, Corporate Wellness, Pricing, Testimonials, Contact. Instructors and Gift Cards are accessible via secondary nav (footer) and contextual links. Rationale: 6 items is the scannability threshold for horizontal nav; overloading the nav with 10 items would undermine the clean, spacious feel of the Elevated Modern brand direction.

3. **Booking CTA as persistent, omnipresent element.** Desktop: button in primary nav bar (far right). Mobile: fixed bottom bar spanning full viewport width. Never scrolls away on mobile. Rationale: intake record specifies booking must be the "unmissable primary action." A persistent CTA ensures it is visible at all scroll depths and on all pages.

4. **Corporate Wellness elevated to primary navigation.** Rather than burying it in a sub-menu or footer, Corporate Wellness gets a primary nav slot. Rationale: it targets a distinct audience (B2B decision-makers) who may arrive directly on this page. Making it primary signals legitimacy and prevents it from being overlooked.

5. **Email capture as modal (desktop) + inline (all devices), not standalone page.** Rationale: a standalone email capture page has no natural entry point in user flow. A timed modal on desktop and persistent inline capture in footer provide exposure without requiring users to navigate to a dedicated page. Modal suppressed on mobile to reduce intrusion.

6. **Pricing page uses three-tier card layout with recommended tier highlighted.** Drop-in, Class Pack, Monthly Unlimited. Rationale: three-tier pricing is proven for conversion — the middle option becomes the anchor. Visual elevation of the recommended tier guides decision without hard-selling.

7. **Schedule displayed as table on desktop, card stack on mobile.** Rationale: weekly schedule data is inherently tabular, but tables break on small screens. Cards grouped by day provide the same information in a mobile-friendly format.

8. **All brand-002 specifications followed for color and typography application.** Terracotta Rose buttons with Charcoal Umber text (WCAG AA compliant per brand-002 spec). Instrument Serif for headings, DM Sans for body. Horizontal logo lockup in nav, mark-only for favicon. Generous negative space throughout layout.

---

## Downstream Notes
_Two-part section. The agent considers: who reads this memory, and what will they need?_
_Then captures signals, findings, constraints, or flags worth surfacing to those nodes._

**For content-adversarial:**
- Architecture covers all 10 confirmed pages from intake record. Email capture is a component (modal + inline), not a standalone page — this is a deliberate design decision, not an omission.
- Booking CTA appears in 8 distinct locations across the site. The adversarial should verify this is sufficient without being excessive.
- Corporate Wellness page has a different CTA pattern ("Schedule a Consultation" / inquiry-based) rather than the standard "Book a Class" — this is intentional given the B2B audience.

**For copy-001 (primary pages):**
- Homepage has 7 sections. Copy is needed for: hero headline + subhead, intro/about teaser (2-3 paragraphs + link), class offering card descriptions (3 cards, 1-2 sentences each), featured testimonial (1 quote), closing CTA copy, email capture headline + description.
- Our Story page has a studio story section (3-4 paragraphs), Sara's personal story (2-3 paragraphs), and three values/pillars (H3 + 1-2 sentences each). All content is placeholder but should be written in Sara's warm, personal voice.
- Instructor Bios: 3-4 placeholder instructor cards. Each needs a name, specialty, and 2-3 sentence bio plus certifications.
- The About/Our Story page is at `/about` — not a sub-page. Instructor Bios is at `/instructors` — also top-level.

**For copy-002 (services and conversion pages):**
- Classes & Schedule: needs class type descriptions (Yoga, Pilates, Sound Bath — 1-2 paragraphs each with key details), plus a "First Visit Info" section (what to expect, what to bring).
- Corporate Wellness: slightly more professional tone. Needs value proposition (2-3 paragraphs), three offering descriptions (Chair Yoga, Guided Breathwork, Custom Workshops), three-step process copy, and one corporate testimonial.
- Pricing: three tiers (Drop-in, Class Pack, Monthly Unlimited) — each needs description and included benefits. Also needs 3-4 FAQ items for the inline FAQ section.
- Gift Cards: two options (fixed amount, custom amount) — brief descriptions plus a three-step "How It Works."
- Testimonials: 6-8 placeholder quotes, varied in length and specificity. Reference different class types and experiences.
- Contact: field labels, subject dropdown options, studio info (placeholder address, phone, email, hours).
- Email capture: headline + one line of copy for both modal and inline versions.

**For web-001 (website build):**
- The mobile fixed-bottom booking CTA bar is 56px minimum height and must never scroll away. It is the single most important interactive element on mobile.
- Schedule table transforms to card stack on mobile — this is a responsive pattern decision, not a content difference.
- Email modal triggers at 30 seconds, first visit only (cookie/session-gated), desktop only. Mobile uses inline capture only.
- Pricing middle card ("recommended") needs visual elevation — larger size, accent border, or header band with "Most Popular" label.
- Testimonials page uses a masonry or staggered grid — cards are different heights due to varied quote lengths.
- All external links (booking, gift card purchase) are placeholder URLs. Architecture does not specify the target system — just the CTA labels and placement.
