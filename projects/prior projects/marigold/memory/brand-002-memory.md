# brand-002 — Memory
_Agent type: Originator_
_V4_
_Created: 2026-03-27_
_Last updated: 2026-03-27_

---

## Current Focus
_What this node is working on right now._

Rework complete. Addressed all findings from brand-adversarial challenge (REWORK verdict). Heading typeface changed from DM Serif Display to Instrument Serif; CTA accessibility specified; logo petal count fixed; wordmark updated.

---

## Working State
_Live scratch space during execution. Add, update, or remove sections freely._

No active work.

---

## Decisions
_Significant choices made during execution — what was decided and why._

1. **Palette anchored on Terracotta Rose as singular color moment.** Chose a muted, desaturated terracotta-pink (`#C4887B`) as the lead accent rather than any sage, blush, or gold tone. Rationale: Sara explicitly flagged generic sage-green/beige as anti-patterns. A terracotta rose is warm without being earthy-cliche, and distinctive enough to separate Option B from a warm/earthy Option A or a handcrafted Option C.

2. **Burnished Gold for marigold reference, not literal yellow.** Used a muted antique gold (`#C9A85C`) as secondary accent to connect to the studio's marigold namesake through abstraction rather than a literal flower-yellow. Keeps the palette elevated.

3. **[REWORK] Instrument Serif replaces DM Serif Display as heading typeface.** The adversarial flagged that DM Serif Display was shared with brand-001, reducing cross-option distinctiveness. Instrument Serif was selected because: (a) it is a contemporary editorial serif with sharp wedge serifs and high stroke contrast, reading as distinctly modern/editorial vs. DM Serif Display's warmer, rounder character; (b) it is clearly different from brand-003's Caveat (handwritten); (c) its thick strokes provide enough visual weight to satisfy Sara's "grounded, not thin or wispy" constraint; (d) it is freely available on Google Fonts. Body typeface remains DM Sans — the cross-family pairing (Instrument Serif + DM Sans) works through deliberate contrast rather than shared lineage.

4. **Geometric rosette logo, not illustrative.** Chose a radial, geometric marigold rosette constructed from repeated tapered ellipses. This positions the brand as contemporary/refined and clearly differentiates from a hand-drawn or organic approach that Option C would likely take. Mandala-like symmetry connects to wellness concepts without literal yoga symbols.

5. **[REWORK] Logo wordmark updated to Instrument Serif.** The adversarial flagged that the heading typeface change must cascade to the wordmark. Updated "MARIGOLD" wordmark from DM Serif Display to Instrument Serif to maintain consistency between brand typography and logo.

6. **[REWORK] CTA button text color specified for accessibility.** Adversarial flagged that Terracotta Rose (#C4887B) on Warm Ivory (#F5F0E8) fails WCAG AA for normal text (~2.8:1 contrast). Added explicit specification: use Charcoal Umber (#3B3230) text on Terracotta Rose button backgrounds for body-size text, or Warm Ivory reversed for large/bold text. This is now specified in both the Color Palette and Typography sections.

7. **[REWORK] Petal count specified as 9 at 40-degree intervals.** Adversarial flagged the "approximately 8-10 petals" as too vague for geometric construction. Fixed to 9 petals at 40-degree rotational intervals (9 x 40 = 360).

8. **Imagery direction: "editorial wellness" framing.** Defined the photography style as quiet, composed, editorial — aspirational but attainable. Explicitly called out every anti-pattern from the intake record (women in white rooms, generic sage/beige lifestyle, busy layouts, clinical imagery). Emphasized natural light, muted warm grading, and the 30-55 age demographic.

---

## Downstream Notes
_Two-part section. The agent considers: who reads this memory, and what will they need?_

**For brand-adversarial:**
- Option B is positioned as the "elevated modern" lane — muted tones, geometric forms, editorial photography, contemporary editorial serif typography. It deliberately avoids the earthy warmth of Option A and the handcrafted organicism of Option C.
- Heading typeface is now Instrument Serif (Google Fonts), distinct from brand-001's DM Serif Display and brand-003's Caveat. The three options now have fully distinct type systems.
- CTA accessibility has been addressed: Terracotta Rose buttons now specify Charcoal Umber text for body-size or Warm Ivory reversed for large/bold text.
- Logo petal count is now precisely 9 at 40-degree intervals.
- Pale Sage secondary is intentionally barely-there to avoid Sara's sage-green anti-pattern. Adversarial flagged this as medium risk — recommend careful contexting in Gate 1 report.

**For arch-001 and downstream:**
- Typography system uses Instrument Serif (headings) + DM Sans (body) with generous spacing and large body sizes (16-18px). Architecture should account for this when designing content density.
- The brand leans heavily on negative space and clean composition. Page layouts should not be dense or busy.
- CTA buttons: Terracotta Rose (`#C4887B`) background with Charcoal Umber (`#3B3230`) text for body-size buttons, or Warm Ivory (`#F5F0E8`) reversed text for large/bold buttons. This has been explicitly specified for WCAG AA compliance.
- Logo has three lockup variations (stacked, horizontal, mark-only). Navigation should use the horizontal lockup; favicon uses mark-only.
- Logo wordmark uses Instrument Serif (matching headings), not DM Serif Display.
