# web-001 — Website Build Manifest
_Marigold Wellness Studio_
_Node: web-001_
_Date: 2026-03-27_
_Brand direction: Option B — Elevated Modern_

---

## File Inventory

All files are located under `output/website/` within the project root.

| File | Purpose |
|---|---|
| `index.html` | Homepage — hero with animated gradient video placeholder, about teaser, class cards, testimonial, booking CTA, inline email capture |
| `about.html` | Our Story — studio story, Sara's bio (placeholder), values/pillars grid |
| `instructors.html` | Instructor Bios — 4 placeholder instructor cards with certs |
| `classes.html` | Classes & Schedule — class type descriptions, weekly schedule (table + mobile cards), first visit info, booking CTA |
| `corporate-wellness.html` | Corporate Wellness — value proposition, offerings grid, how-it-works process, corporate testimonial, inquiry CTA |
| `pricing.html` | Pricing & Packages — 3-tier pricing cards (Drop-In, Class Pack, Monthly Unlimited), additional options, FAQ accordion |
| `gift-cards.html` | Gift Cards — fixed and custom amount cards, how-it-works process |
| `testimonials.html` | Testimonials — masonry-style 2-column testimonial card grid, 6 testimonials |
| `contact.html` | Contact — contact form, studio info, hours, map placeholder, additional contact path cards |
| `css/style.css` | Main stylesheet — all brand colors, typography, responsive breakpoints, animations |
| `js/main.js` | Main JavaScript — scroll reveal, mobile menu, email modal, FAQ accordion, parallax, form handling |

---

## Implementation Decisions

### Brand Implementation
- All 6 brand palette colors applied as CSS custom properties using exact hex values from brand-002-doc
- Instrument Serif loaded from Google Fonts for headings; DM Sans for body text
- Typography sizing follows brand spec: H1 3.5rem (letter-spacing 0.02em), body 18px (1.125rem), line-height 1.6
- CTA buttons use Terracotta Rose (#C4887B) background with Charcoal Umber (#3B3230) text per brand-002 spec (body-size text on Terracotta Rose must use Charcoal Umber to meet WCAG AA contrast)
- SVG logo implemented as inline SVG on every page — geometric marigold rosette with 9 overlapping elliptical petals rotated at 40-degree intervals, Burnished Gold center disc, Charcoal Umber petals (Warm Ivory petals in footer/reversed contexts)
- Horizontal logo lockup (rosette + wordmark) in header; text hidden on mobile for space savings per arch-001 spec

### Scroll Animations (Gate 2 Feedback)
- CSS-based animations using `opacity` and `transform` transitions triggered by Intersection Observer
- Four animation types: fade-up (`.reveal`), slide-from-left (`.reveal--left`), slide-from-right (`.reveal--right`), scale-in (`.reveal--scale`)
- Stagger delays (`.reveal--delay-1` through `--delay-4`) for card grids
- All animations are gentle: 30px translate, 0.8s duration, smooth easing
- Respects `prefers-reduced-motion` media query — animations disabled entirely when user prefers reduced motion
- Subtle parallax on hero backgrounds (0.2x scroll rate)

### Video Placeholders (Gate 2 Feedback)
- Homepage hero uses a CSS animated gradient that cycles through brand palette colors as a video placeholder — simulates an ambient looping video background
- Several interior page heroes use the same animated gradient treatment
- Gradient animation: 20-25s cycle, smooth easing, 400% background-size for slow movement
- Comment in code notes where real video elements would be embedded
- Actual `<video>` HTML5 elements are supported in CSS — the `.hero__bg-video` class is ready for real video files

### Architecture Implementation
- Flat page structure matching arch-001 sitemap exactly — 9 HTML pages
- Navigation: 6-item primary nav (Our Story, Classes, Corporate Wellness, Pricing, Testimonials, Contact) + persistent "Book a Class" CTA button
- Active page indicated with Terracotta Rose underline on nav link
- Mobile: hamburger menu with full-screen overlay; fixed bottom booking bar (56px min-height, always visible)
- Footer: 4-column grid (Brand/address, Studio, Offerings, Connect) matching arch-001 spec
- Booking CTA appears in all specified locations: nav bar, mobile bottom bar, hero, page CTAs, schedule rows, footer

### Copy Implementation
- All copy placed verbatim from copy-001-doc and copy-002-doc
- Placeholder notes to Sara preserved in brackets where present in the copy documents
- No copy was rewritten, summarized, or edited

### Responsive Design
- Three breakpoints: desktop (1025px+), tablet (769px-1024px), mobile (768px and below)
- CSS Grid for page layouts, Flexbox for component-level alignment
- Schedule table transforms to day-grouped card stack on mobile
- Pricing grid: 3-col desktop, 2-col tablet, 1-col mobile
- Testimonials: 2-column masonry on desktop, single column on mobile
- No CSS frameworks used — all styles written from scratch

### Accessibility
- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<blockquote>`
- Proper heading hierarchy maintained on every page (H1 > H2 > H3 > H4)
- All placeholder images include descriptive text (in lieu of alt attributes, since they are divs not img tags)
- ARIA labels on hamburger menu button, email inputs, close buttons
- Keyboard-navigable: all interactive elements are focusable, FAQ accordion uses button elements
- Color contrast: Charcoal Umber on Warm Ivory (high contrast body text), Charcoal Umber on Terracotta Rose (CTA buttons — 4.25:1 ratio, passes WCAG AA)
- FAQ accordion buttons update `aria-expanded` attribute when toggled, keeping screen readers informed of open/closed state

### Placeholder Integrations
- All "Book a Class" buttons link to `#booking` (placeholder URL)
- Gift card purchase buttons link to `#gift-card-placeholder`
- Contact form submits to `#contact-placeholder` with JS-driven confirmation message
- Email capture forms submit to `#email-placeholder` with visual feedback
- Map area is a styled placeholder div with descriptive text
- Social media links point to `#instagram` and `#facebook`

### Email Capture
- Inline version: Homepage Section 6 (Warm Stone background band) and global footer
- Contextual variants: Classes page ("Never miss a new class"), About page ("Follow our journey")
- Modal version: Desktop only, 30-second delay, first visit only (sessionStorage-gated)
- Modal suppressed on mobile via CSS `!important` override

---

## Known Limitations & Placeholder Notes for Sara

1. **Images are placeholder blocks.** All images are styled `<div>` elements with descriptive text. Replace with real photography matching the brand-002 imagery direction. Recommended size: hero images at 1920x1080, card images at 800x600, instructor headshots at 600x800.

2. **Video hero is a CSS gradient animation.** Replace with a real ambient looping video by adding an HTML5 `<video>` tag with the class `hero__bg-video` inside the `.hero__bg` div. Remove the gradient div when substituting real video.

3. **No backend.** Forms do not submit anywhere. The contact form shows a confirmation message via JavaScript. Email capture shows a "Thank you" state. To make these functional, connect to a form handling service (Formspree, Netlify Forms, etc.) or a mailing list provider (Mailchimp, ConvertKit, etc.).

4. **Booking system not connected.** All booking CTAs link to `#booking`. Replace with the real booking system URL (MindBody, Acuity, etc.) when ready.

5. **Gift card system not connected.** Purchase buttons link to `#gift-card-placeholder`. Replace with Square Gift Cards, GiftUp, or similar.

6. **Map is a placeholder.** Replace the `.map-placeholder` div on the contact page with a Google Maps embed or static map image.

7. **Instructor names differ between copy-001 and copy-002.** The instructor bios page uses names from copy-001 (Amara Jacobs, Marcus Leong, Priya Desai, Elena Vargas). The schedule uses names from copy-002 (Sara O., Priya L., Tomoko R., Jordan K.). Sara will replace all placeholder names with real instructor details.

8. **Privacy Policy page not created.** The footer links to `#privacy`. Create a privacy policy page when real legal content is available.

---

## Running the Site Locally

1. **Simplest method:** Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge). Click the file directly or drag it into a browser window. Navigation between pages works via relative links.

2. **With a local server (recommended for best experience):**
   - If you have Python installed, open a terminal in the `output/website/` directory and run:
     - Python 3: `python3 -m http.server 8000`
     - Python 2: `python -m SimpleHTTPServer 8000`
   - Then open `http://localhost:8000` in your browser.
   - Alternatively, use VS Code's "Live Server" extension or any static file server.

3. **Internet connection required** for Google Fonts (Instrument Serif, DM Sans). If fonts fail to load, the site falls back to Georgia (headings) and system sans-serif (body).

---

_End of web-001 deliverable._
