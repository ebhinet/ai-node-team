# web-001 — Memory
_Agent type: Originator_
_V4_
_Created: 2026-03-27_
_Last updated: 2026-03-27 (rework 2)_

---

## Current Focus
_What this node is working on right now._

Complete. Second rework pass completed — removed hero text reveal/fade-in animations per client feedback. Hero heading, subtitle, and CTA button are now immediately visible on page load across all 9 pages. Scroll animations on content below the hero remain intact.

---

## Working State
_Live scratch space during execution. Add, update, or remove sections freely._

No active work in progress.

---

## Decisions
_Significant choices made during execution — what was decided and why._
_Captures rationale so a re-entering agent doesn't relitigate settled questions._

1. **Animated CSS gradient as video placeholder.** Gate 2 feedback requested video placeholders. Rather than embedding non-existent video files or using third-party stock video services that may not load, implemented a slow-cycling CSS gradient animation using brand palette colors. This creates the visual impression of an ambient looping video background. The CSS class `.hero__bg-video` is ready for drop-in replacement with real HTML5 video.

2. **Scroll animations via Intersection Observer + CSS transitions.** Gate 2 feedback requested "light, on-brand scroll animations." Implemented four animation types (fade-up, slide-left, slide-right, scale-in) with stagger delays for grids. Animations are gentle (30px translate, 0.8s duration) and respect `prefers-reduced-motion`. No animation library used.

3. **Inline SVG logo on every page.** The geometric marigold rosette is rendered as inline SVG (9 elliptical petals rotated 40 degrees each around a central Burnished Gold circle). This avoids external image dependencies and allows color changes via CSS inheritance (Charcoal Umber in header, Warm Ivory in footer).

4. **Placeholder images as styled divs with descriptive text.** Rather than using external placeholder image services (which may be unreliable, rate-limited, or produce images that do not match the brand mood), used styled `<div>` elements with the brand's Pale Sage background and descriptive text indicating what real image should go there. This is cleaner, loads instantly, and makes placeholder intent obvious.

5. **Schedule implemented as both table and card stack.** Desktop shows a full HTML table; mobile shows day-grouped cards. Both are present in the DOM; CSS `display: none` toggles visibility at the 768px breakpoint. This matches the arch-001 specification for responsive schedule display.

6. **Separate HTML files for every page.** Charter specified minimum 9 HTML pages plus CSS/JS. Built as multi-page static site with shared header/footer markup on each page. No templating or build tools required — matches the "open index.html in a browser" constraint.

7. **FAQ uses accordion pattern with vanilla JS.** Only one FAQ item open at a time. Uses `max-height` transition for smooth animation. Accessible via keyboard — questions are `<button>` elements.

8. **Email modal uses sessionStorage.** First-visit detection uses `sessionStorage` rather than cookies to avoid any GDPR/privacy concerns with a placeholder implementation. Modal only shows once per browser session, only on desktop (768px+), after 30-second delay.

9. **Rework: CTA button text color changed to Charcoal Umber.** Adversarial review identified that `.btn--primary` used Warm Ivory text on Terracotta Rose background (2.59:1 contrast ratio, failing WCAG AA). Changed to Charcoal Umber (#3B3230) text, yielding 4.25:1 contrast ratio. Both `.btn--primary` and `.btn--primary:hover` updated. Mobile booking bar already used Charcoal Umber correctly.

10. **Rework: `<main>` landmark added to all 9 pages.** Adversarial review identified missing `<main>` element. Wrapped all page content between header/mobile-booking-bar and footer in `<main>` on every HTML page for proper screen reader landmark navigation.

11. **Rework: FAQ accordion now updates `aria-expanded`.** Adversarial review identified that the `initFAQ()` function toggled visual state without updating `aria-expanded`. Fixed to set `aria-expanded="true"` on the active FAQ button and `aria-expanded="false"` on all others when toggling.

12. **Rework: Removed hero text animations.** Client feedback: hero heading text should be immediately visible, not animated in. Removed the `reveal` class from `hero__content` div on all 9 HTML pages. Added CSS safeguard on `.hero__content` with `opacity: 1 !important; transform: none !important; transition: none !important;` to ensure hero text can never be affected by reveal animations even if classes are accidentally re-added. Scroll animations on content below the hero are preserved.

---

## Downstream Notes
_Two-part section. The agent considers: who reads this memory, and what will they need?_
_Then captures signals, findings, constraints, or flags worth surfacing to those nodes._

**For technical-adversarial:**
- All 9 HTML pages built as specified in charter. CSS in single file, JS in single file.
- No external dependencies except Google Fonts. No CSS frameworks, no JS libraries.
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile).
- All copy placed verbatim from copy-001-doc and copy-002-doc. No rewrites.
- Brand colors applied as CSS custom properties using exact hex values from brand-002-doc.
- SVG logo inline on every page — rosette with 9 petals, matches brand-002 logo concept description.
- Scroll animations use Intersection Observer with `threshold: 0.1` and `rootMargin: '0px 0px -40px 0px'`.
- `prefers-reduced-motion` is respected — all animations disabled when user preference is set.
- Known issue: instructor names differ between copy-001 (bio names) and copy-002 (schedule names). This is a content alignment issue, not a build issue — Sara will replace all placeholders.
- Mobile fixed bottom CTA bar is 56px min-height and never scrolls away as specified.
- Email modal suppressed on mobile via CSS `!important` to ensure it never appears on small screens.
- Forms are placeholder only — JS provides visual feedback (confirmation messages, button state changes) but no data is sent anywhere.
- **Rework fixes applied:** (1) `.btn--primary` color changed from `var(--warm-ivory)` to `var(--charcoal-umber)` in both default and hover states; (2) `<main>` element added to all 9 HTML pages wrapping content between header and footer; (3) `initFAQ()` now toggles `aria-expanded` attribute on FAQ question buttons; (4) Hero text reveal animations removed — `reveal` class stripped from `hero__content` on all 9 pages, CSS safeguard added to `.hero__content` to force immediate visibility.
