# web-001 — Adversarial Challenge
_Domain: Technical_
_Date: 2026-03-27_
_Verdict: PROCEED_
_Review pass: 3 (post media-001 integration)_

## Verdict
PROCEED — no critical or high findings; challenge document written; memory updated

## Review Scope
This review is focused specifically on the media-001 integration: replacement of placeholder blocks with real Unsplash images across all 9 pages and associated CSS changes. The website previously passed technical review on pass 2.

## Findings

### Critical
None

### High
None

### Medium

**1. Mobile menu transition is abrupt. (Carried forward from pass 1, unchanged.)**
The mobile menu toggles between `display: none` and `display: flex`, which prevents the CSS `opacity` transition from executing. The menu appears and disappears instantly. Polish issue, not functional.

**2. Homepage featured testimonial attribution differs from testimonials page. (Carried forward from pass 1, unchanged.)**
Homepage: "Danielle R., member since 2024" (from copy-001). Testimonials page: "Danielle K., member since 2024" (from copy-002). Upstream copy inconsistency, not a build error.

**3. Prior Medium finding resolved: inline animation on about.html.**
The about.html hero previously used an inline `style` attribute with `animation: ambientGradient 25s ease infinite` on a gradient div, which overrode `prefers-reduced-motion`. The media-001 integration replaced the gradient div with a real `<img>` element, eliminating the animation entirely. This finding is now moot.

### Low

**4. Footer email capture form not present on all pages. (Carried forward from pass 1, unchanged.)**
The arch-001 spec calls for email capture "in the global footer on every page." Only the homepage footer includes an email form; other pages do not. Minor deviation from architecture spec.

**5. Inline styles on image elements could be consolidated into CSS. (New, Low.)**
The media-001 integration applies `object-fit: cover`, `width`, `height`, and `aspect-ratio` via inline `style` attributes on every `<img>` element. The CSS already defines equivalent rules for `.hero__bg-image`, `.card__image img`, `.class-type__image img`, and `.instructor-card__image img`. The inline styles are functionally redundant with the CSS rules and add unnecessary specificity. Not a functional issue — both the inline styles and the class-based styles produce the same result — but it reduces maintainability if image sizing needs to change later.

**6. Orphaned CSS rules for `.hero__bg-gradient` and `.placeholder-image`. (New, Low.)**
The CSS retains rules for `.hero__bg-gradient` (lines 441-462, the ambient gradient animation) and `.placeholder-image` references (lines 550, 595-598) that are no longer used by any HTML page. Dead CSS — no functional impact, but adds ~30 lines of unused code. The `.hero__bg-video` class also remains (as designed — it is intentionally preserved for future real video integration).

## Media-001 Integration Assessment

**Alt text:** All 20 images include descriptive, meaningful alt text aligned with the brand voice. No generic or missing alt attributes. PASS.

**Lazy loading:** All below-fold images correctly include `loading="lazy"`. All hero/above-fold images correctly omit it. PASS.

**Responsive/object-fit CSS:** All images use `object-fit: cover` ensuring proper aspect ratio preservation. Hero images fill their containers. Card and content images maintain specified aspect ratios (4:3 for cards, 3:4 for instructor headshots, 4:5 for about teaser). PASS.

**HTML integrity:** All placeholder `<div class="placeholder-image">` elements have been cleanly replaced with `<img>` elements. All `<div class="hero__bg-gradient">` elements have been replaced with hero `<img>` elements. No broken HTML, no unclosed tags, no orphaned elements. PASS.

**Brand imagery alignment:** Image selections match Option B (Elevated Modern) imagery brief: natural light, warm tones, muted/desaturated color treatment, editorial wellness mood, subjects mid-practice with averted gaze, studio interiors with natural materials, clean compositions with generous negative space. No posed stock photos, no high saturation, no clinical/corporate imagery. Image reuse (3 images used on 2 pages each) is reasonable and browser-cache-friendly. PASS.

**CSS changes:** New CSS rules (lines 1600-1619) for `.class-type__image img`, `.instructor-card__image img`, and `.card__image img` are additive and properly structured. They do not conflict with existing responsive breakpoints. All responsive behavior remains intact at tablet (1024px), mobile (768px), and small mobile (480px) breakpoints. PASS.

## Downstream Flags

- **Prior reduced-motion finding (Medium #1 from pass 2) is now resolved.** The inline gradient animation on about.html was replaced by a static image during media-001 integration. No `prefers-reduced-motion` concern remains.
- **Content inconsistency (Medium #2) persists.** The Danielle R./K. discrepancy is upstream. If it matters for Gate 3 presentation, the orchestrator should resolve it in the copy docs.
- **Dead CSS (Low #6) is cosmetic.** The orphaned `.hero__bg-gradient` and `.placeholder-image` rules can be cleaned up in a polish pass but do not affect functionality or rendering.
