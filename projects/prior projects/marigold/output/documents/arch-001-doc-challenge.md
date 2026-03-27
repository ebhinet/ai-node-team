# arch-001 — Adversarial Challenge
_Domain: Content_
_Date: 2026-03-27_
_Verdict: PROCEED_

## Verdict
PROCEED

## Findings

### Critical
None

### High
None

### Medium

1. **Booking CTA count may border on excessive.** The architecture specifies 8 distinct booking CTA placements across the site. While the intake record demands booking be "unmissable," the sheer density (persistent nav button, fixed mobile bar, hero CTA, secondary homepage CTA, per-class buttons, per-package buttons, footer link, and hamburger menu top item) risks feeling aggressive on a site that is meant to feel warm, spacious, and unpressured. Downstream nodes (web-001) should pay attention to visual weight — ensure the persistent mobile bar and nav button feel integrated into the design rather than overlaid, and that the page-level CTAs do not create a sense of being sold to on every scroll. This is a calibration issue, not a structural one.

2. **Instructors page not in primary navigation.** The architecture places Instructor Bios in secondary navigation only (footer and contextual links). For a boutique studio where instructor relationships are a key trust signal — and the primary audience (women 30-55) values personal connection — burying the instructors page may underserve user intent. This is a reasonable architectural trade-off (keeping nav to 6 items) and does not require rework, but report-002 should surface this as a discussion point for Sara.

3. **Optional add-ons section is strong but Blog is marked out-of-scope in intake.** The intake record explicitly lists "Blog" under out-of-scope items. The optional add-ons section correctly frames it as an option for Sara's consideration, not a commitment — but the report should make clear this would be a scope expansion requiring separate agreement, not an upsell baked into the current project.

### Low

1. **Privacy Policy page listed in sitemap but no wireframe description provided.** The hierarchy shows a Privacy Policy under utility/non-nav pages, and the footer structure includes it, but no wireframe description exists for this page. This is understandable for a placeholder/legal page, but downstream nodes should note that no copy has been specified for it.

2. **Email modal 30-second trigger is aggressive for a warm brand.** A 30-second delay on first visit may interrupt users who are still forming a first impression. A 45-60 second delay or scroll-depth trigger might better align with the unhurried, respectful brand positioning. This is a minor calibration note for web-001.

## Downstream Flags

- **For web-001:** The fixed mobile CTA bar (56px min height) and persistent desktop nav CTA are the two highest-priority interactive elements. Ensure these feel native to the design, not bolt-on. The 8 CTA placements are architecturally sound but visually need to breathe.
- **For report-002:** Frame the Blog add-on carefully — it is currently listed as out-of-scope in the intake record. Present it as a future consideration, not an in-scope option.
- **For report-002:** Consider surfacing the Instructors page navigation placement as a discussion point for Sara — she may want it in primary nav.
