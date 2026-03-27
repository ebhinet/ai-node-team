# Site Architecture — Marigold Wellness Studio
_Node: arch-001_
_Date: 2026-03-27_
_Brand direction: Option B — Elevated Modern (selected at Gate 1)_

---

## Sitemap

The sitemap is organized into a flat-with-grouping hierarchy. Most pages are one level deep from the homepage, with a few logical sub-pages. This keeps navigation simple and ensures no page is more than two clicks from the homepage — critical for a booking-driven conversion funnel.

### Hierarchy

```
Home
├── About
│   ├── Our Story
│   └── Instructor Bios
├── Classes & Schedule
├── Corporate Wellness
├── Pricing & Packages
├── Gift Cards
├── Testimonials
├── Contact
└── [Utility / Non-nav pages]
    ├── Email Capture (modal/inline — not a standalone page)
    └── Privacy Policy (footer only)
```

### Page Inventory

| Page | URL Path | Parent | Notes |
|---|---|---|---|
| Homepage | `/` | — | Primary landing page. Hero with booking CTA. |
| Our Story | `/about` | Home | Studio background, Sara's story, mission. |
| Instructor Bios | `/instructors` | Home | Individual placeholder bios with photos. |
| Classes & Schedule | `/classes` | Home | Class types, weekly schedule, instructor assignments. Booking CTA per class. |
| Corporate Wellness | `/corporate-wellness` | Home | B2B offering. Slightly more professional tone. Inquiry CTA. |
| Pricing & Packages | `/pricing` | Home | Drop-in, packs, memberships. Booking CTA. |
| Gift Cards | `/gift-cards` | Home | Placeholder purchase flow (external link). |
| Testimonials | `/testimonials` | Home | Placeholder quotes. Social proof. |
| Contact | `/contact` | Home | Form, address, hours, map placeholder. |

**Email Capture** is not a standalone page. It appears as: (1) a timed modal overlay on first visit, and (2) an inline signup section in the site footer. Both link to a placeholder email service integration.

---

## Navigation Structure

### Primary Navigation (Main Menu)

The primary navigation appears as a persistent horizontal bar on desktop and a hamburger-triggered slide-out menu on mobile. It contains only high-priority pages — kept to 6 items maximum for scannability.

| Position | Label | Links To | Rationale |
|---|---|---|---|
| 1 | Our Story | `/about` | Establishes trust and brand personality early. |
| 2 | Classes | `/classes` | Core offering — the thing people come for. |
| 3 | Corporate Wellness | `/corporate-wellness` | Separate audience (B2B). Elevating it to primary nav signals that it is a real offering, not an afterthought. |
| 4 | Pricing | `/pricing` | Users want to know cost before booking. Removing friction. |
| 5 | Testimonials | `/testimonials` | Social proof — supports the booking decision. |
| 6 | Contact | `/contact` | Standard utility. |

**Logo placement:** Top left — horizontal lockup (rosette + wordmark). Links to homepage. On mobile, the rosette mark-only version is used to save horizontal space.

**Primary CTA button:** A persistent "Book a Class" button appears at the far right of the navigation bar on desktop, and as a fixed bottom bar on mobile. Styled as the Terracotta Rose (`#C4887B`) button with Charcoal Umber (`#3B3230`) text (per brand-002 WCAG specification). This button links to the external booking system (placeholder URL). It is always visible — it never scrolls away on mobile.

### Secondary Navigation (Footer)

The footer contains a comprehensive link set for users who scroll to the bottom, plus utility links.

| Column | Contents |
|---|---|
| Studio | Our Story, Instructors, Testimonials |
| Offerings | Classes & Schedule, Corporate Wellness, Pricing & Packages, Gift Cards |
| Connect | Contact, Email Signup (inline form), Social Media Links (placeholder icons) |
| Legal | Privacy Policy |

The footer also includes: studio address, phone number, hours of operation, and a small version of the logo (stacked lockup).

### Mobile Navigation

- **Hamburger menu:** Top right. Opens a full-screen overlay with vertically stacked nav items matching the primary navigation order, plus secondary items (Instructors, Gift Cards) listed below a divider.
- **Fixed bottom CTA bar:** "Book a Class" button spans the bottom of the viewport on all mobile pages. It is always visible, always tappable. Background: Terracotta Rose. Text: Charcoal Umber. Height: 56px minimum for touch target compliance.
- **Sticky header:** The header (logo + hamburger + CTA on desktop) sticks to the top on scroll for desktop. On mobile, the header collapses to logo + hamburger only; the CTA lives in the fixed bottom bar.

### Booking CTA Placement Summary

Booking is the unmissable primary action. It surfaces in all of the following locations:

| Location | Format | Notes |
|---|---|---|
| Primary nav (desktop) | Button, far right | Always visible. Terracotta Rose. |
| Fixed bottom bar (mobile) | Full-width button | Always visible. Never scrolls away. |
| Homepage hero | Large CTA button | Centered below hero headline. |
| Homepage secondary CTA | Button in "Ready to begin?" section | Below-the-fold reinforcement. |
| Classes & Schedule page | "Book This Class" button per class card | Individual class booking. |
| Pricing & Packages page | "Get Started" button per package | Links to booking with package context. |
| Every page footer | Text link in footer nav | Fallback for deep scrollers. |
| Mobile hamburger menu | Top item, styled differently | Booking is the first thing users see when they open the menu. |

---

## Page Structure & Wireframe Descriptions

### Homepage (`/`)

The homepage is the primary conversion funnel entry point. It establishes the brand, communicates the offering, and drives users toward booking. The layout is spacious, using generous negative space consistent with the Elevated Modern brand direction.

**Section 1 — Hero**
- Layout: Full-width, full-viewport-height on desktop; ~80vh on mobile
- Background: Large stock image (studio interior with warm natural light, empty or near-empty space — not a person). Subtle warm overlay to ensure text contrast.
- Content: Centered text block
  - H1 headline: Brand-voice tagline (e.g., "Find your ground.")
  - Subhead: One sentence describing the studio (e.g., "Yoga, Pilates, and sound bath in the heart of Millbrook.")
  - Primary CTA: "Book a Class" button — Terracotta Rose, large, prominent
- Typography: H1 in Instrument Serif, subhead in DM Sans
- Spacing: Generous vertical padding above and below text. Content should feel like it is floating in the image.

**Section 2 — Introduction / About Teaser**
- Layout: Two-column on desktop (60/40 text-left, image-right). Stacks vertically on mobile.
- Content:
  - H2 heading: "A space for you"
  - 2-3 short paragraphs introducing the studio, Sara's philosophy, and the community
  - Text link: "Read our story" → `/about`
- Image: Detail shot — hands in a mudra, light through a window, or a ceramic vessel. Cropped tight, warm tones.
- Background: Warm Ivory

**Section 3 — Class Offerings Overview**
- Layout: Three-card grid on desktop (equal columns). Stacks to single column on mobile.
- Content: Three cards, one each for Yoga, Pilates, and Sound Bath
  - Each card: stock image (top), class name (H3), 1-2 sentence description, "View Schedule" text link → `/classes`
- Card styling: Warm Ivory card on Pale Sage (`#D5D8CE`) section background. Subtle Warm Stone border. Hover state lifts card with shadow.
- Background: Pale Sage section — provides visual separation from the white sections above and below.

**Section 4 — Social Proof / Testimonial Highlight**
- Layout: Single-column, centered. Full-width Charcoal Umber (`#3B3230`) background.
- Content:
  - One featured testimonial — large pull quote in Instrument Serif (italic if available, or standard)
  - Attribution: "— [Name], [descriptor]" in DM Sans
  - Text link: "More stories" → `/testimonials`
- Color: Warm Ivory text on Charcoal Umber background. Burnished Gold (`#C9A85C`) thin decorative rule above and below the quote.

**Section 5 — Booking CTA / Closing**
- Layout: Single-column, centered. Warm Ivory background.
- Content:
  - H2: "Ready to begin?"
  - One sentence of supportive copy
  - "Book a Class" button — Terracotta Rose, same styling as hero CTA
- Spacing: Very generous — this section is mostly whitespace with a centered content block.

**Section 6 — Email Capture (Inline)**
- Layout: Full-width band. Warm Stone (`#B8AFA6`) background.
- Content:
  - H3: "Stay connected"
  - One line of copy: what subscribers receive (e.g., "New classes, workshops, and studio updates — no spam.")
  - Email input field + "Subscribe" button (Terracotta Rose)
- Note: This is the inline version. The modal version triggers on a timed delay (see Email Capture below).

**Section 7 — Footer**
- Standard footer layout (see Footer in Navigation Structure above)

---

### Our Story (`/about`)

**Section 1 — Page Header**
- Layout: Full-width. Short hero (40vh) with background image (studio exterior or warm interior wide shot).
- Content: H1 "Our Story" in Instrument Serif, centered on image with warm overlay.

**Section 2 — Studio Story**
- Layout: Single-column, narrow text container (max-width ~720px, centered).
- Content:
  - 3-4 paragraphs telling the story of Marigold Wellness Studio — why it was founded, what it stands for, what makes it different
  - Tone: Warm, personal, grounded. Written as Sara's voice.
- Background: Warm Ivory

**Section 3 — Sara's Story**
- Layout: Two-column on desktop (40/60 image-left, text-right). Stacks on mobile.
- Content:
  - Stock photo placeholder: a woman in a calm, natural setting (not posed at camera)
  - H2 "Meet Sara" or similar
  - 2-3 paragraphs about Sara — her background, what drew her to wellness, her vision for the studio
  - Placeholder content in proper style
- Background: Warm Ivory

**Section 4 — Values / Pillars**
- Layout: Three-column icon grid on desktop. Stacks on mobile.
- Content: Three core values (e.g., "Community," "Intention," "Accessibility")
  - Each: simple geometric line icon (Charcoal Umber, consistent with brand illustration style), H3 value name, 1-2 sentence description
- Background: Pale Sage section

**Section 5 — CTA**
- "Book a Class" CTA block (same pattern as Homepage Section 5)

---

### Instructor Bios (`/instructors`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "Our Instructors" centered.
- Background image: a group practice shot from the side/behind.

**Section 2 — Instructor Grid**
- Layout: Two-column card grid on desktop. Single column on mobile.
- Content: 3-4 instructor cards (placeholder bios)
  - Each card: stock headshot (warm-toned, natural light, not posed at camera — looking away or eyes closed), H3 instructor name, title/specialty (e.g., "Vinyasa & Sound Bath"), 2-3 sentence bio, list of certifications/training (placeholder)
- Card styling: Warm Ivory card, Warm Stone border, generous padding. Image fills top half of card.
- Background: Warm Ivory page, Pale Sage section behind the grid.

**Section 3 — Join CTA**
- Short block: "Interested in teaching with us? Get in touch." → link to `/contact`

---

### Classes & Schedule (`/classes`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "Classes & Schedule." Subhead: one sentence about the range of offerings.

**Section 2 — Class Types**
- Layout: Accordion or tab interface — one section per class type (Yoga, Pilates, Sound Bath). Default: first section expanded.
- Each class type section:
  - H2 class type name
  - 1-2 paragraph description of the practice and what to expect
  - Stock image: practice-in-progress shot appropriate to the class type
  - Key details: duration, intensity level, what to bring
- Background: Warm Ivory

**Section 3 — Weekly Schedule**
- Layout: Table/grid on desktop. Card stack on mobile (grouped by day).
- Content: A weekly schedule showing:
  - Day, time, class name, instructor, duration
  - Each row includes a "Book" button (small, Terracotta Rose) linking to external booking system
- Placeholder data: 2-3 classes per day, Monday through Saturday. Sunday: studio closed or one restorative class.
- Desktop: horizontal table with day columns or time rows
- Mobile: vertical cards grouped by day, each card showing one class with inline Book button
- Background: Warm Ivory. Table borders in Warm Stone.

**Section 4 — First Visit Info**
- Layout: Two-column (icon + text) or single-column callout box
- Content: Brief section for new students — what to expect, what to wear, arrival time, parking
- Styling: Warm Stone background callout box with Charcoal Umber text. Burnished Gold accent rule.

**Section 5 — CTA**
- "Book Your First Class" CTA block. Copy variant targets new visitors.

---

### Corporate Wellness (`/corporate-wellness`)

This page has a slightly more professional tone while still remaining warm. It targets HR managers and office decision-makers (secondary audience).

**Section 1 — Page Header**
- Short hero (40vh). H1 "Corporate Wellness." Subhead: one sentence positioning the offering (e.g., "Bring mindful movement to your team.").
- Background image: bright, plant-filled conference room or outdoor group session — warm but professional.

**Section 2 — Value Proposition**
- Layout: Single-column, narrow container.
- Content:
  - 2-3 paragraphs explaining the corporate wellness offering: chair yoga, guided breathwork, custom workshops
  - Focus on outcomes: stress reduction, team cohesion, employee wellbeing
  - Tone: Warm but professional. Not salesy.

**Section 3 — Offerings Grid**
- Layout: Three-card grid on desktop.
- Content: Cards for each offering type
  - Chair Yoga: description, ideal for, duration
  - Guided Breathwork: description, ideal for, duration
  - Custom Workshops: description, consultation-based
- Card styling: Warm Ivory cards, Warm Stone borders.

**Section 4 — How It Works**
- Layout: Three-step horizontal process (numbered or icon-based)
  - Step 1: "Get in touch" — describe your team's needs
  - Step 2: "We design your program" — customized to your space and goals
  - Step 3: "We come to you" — onsite sessions at your workplace

**Section 5 — Testimonial**
- One corporate client testimonial (placeholder). Pull quote format.

**Section 6 — Inquiry CTA**
- Different from standard booking CTA. This one says "Schedule a Consultation" or "Get in Touch" and links to the contact page (or a dedicated inquiry form section on the contact page).
- Styling: Same Terracotta Rose button, but copy is consultation-oriented, not class-booking-oriented.

---

### Pricing & Packages (`/pricing`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "Pricing & Packages." Subhead: "Simple, flexible options for every practice."

**Section 2 — Pricing Table**
- Layout: Three-column card layout on desktop (2-column on tablet, single on mobile).
- Content: Three pricing tiers (placeholder values)
  - **Drop-In:** Single class price, description, "Book a Class" button
  - **Class Pack:** Multi-class bundle (e.g., 5-pack, 10-pack), savings highlighted, "Get Started" button
  - **Monthly Unlimited:** Membership price, included benefits, "Join Now" button
- Card styling: Middle card (recommended tier) visually elevated — slightly larger, Terracotta Rose accent border or header band, "Most Popular" label.
- All buttons link to external booking/purchase system (placeholder).

**Section 3 — Additional Options**
- Layout: Simple two-column text block.
- Content:
  - Private sessions: brief description, pricing, inquiry link
  - Corporate packages: brief mention with link to `/corporate-wellness`
  - Gift cards: brief mention with link to `/gift-cards`

**Section 4 — FAQ Callout**
- Layout: Inline callout or 3-4 expandable FAQ items.
- Content: Common pricing questions (cancellation policy, package expiry, new student discount if applicable).
- Styling: Warm Stone background, accordion-style.

---

### Gift Cards (`/gift-cards`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "Gift Cards." Subhead: "Give the gift of practice."
- Background image: warm, tactile — a wrapped package, dried flowers, hands holding an envelope.

**Section 2 — Gift Card Options**
- Layout: Two-card grid on desktop.
- Content:
  - **Fixed Amount Cards:** Preset denominations (e.g., $50, $75, $100)
  - **Custom Amount Card:** Choose your own amount
  - Each card: brief description, "Purchase" button linking to external gift card system (placeholder)
- Card styling: Warm Ivory, Burnished Gold accent border to signal "gift" quality.

**Section 3 — How It Works**
- Layout: Three-step horizontal process
  - Step 1: Choose an amount
  - Step 2: Personalize your message
  - Step 3: Send instantly via email or print at home
- Note: All steps are placeholder — the actual flow will be handled by the external system.

**Section 4 — CTA**
- "Not sure what to give? Book a class for yourself and find out." → links to `/classes`. Light, warm cross-sell.

---

### Testimonials (`/testimonials`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "What Our Community Says."

**Section 2 — Testimonial Grid**
- Layout: Masonry-style or staggered card grid. Two columns on desktop, single on mobile.
- Content: 6-8 placeholder testimonials
  - Each card: quote text, attribution (name, practice type or timeframe, e.g., "— Jess M., member since 2024"), optional star rating or no rating (depending on simplicity preference)
  - Quotes should be realistic: specific, varied in length (some 1-2 sentences, some a short paragraph), referencing different classes and experiences
- Card styling: Warm Ivory cards on Pale Sage background. Pull quotes use Instrument Serif. Attribution in DM Sans. Burnished Gold decorative open-quote mark.

**Section 3 — CTA**
- "Ready to start your own story?" → "Book a Class" button.

---

### Contact (`/contact`)

**Section 1 — Page Header**
- Short hero (30vh). H1 "Get in Touch."

**Section 2 — Contact Split**
- Layout: Two-column on desktop. Left: contact form. Right: studio info.
- Left column — Contact Form:
  - Fields: Name, Email, Phone (optional), Subject (dropdown: General Inquiry, Corporate Wellness, Private Sessions, Other), Message
  - Submit button: Terracotta Rose, "Send Message"
  - Note: Form submission is a placeholder (no backend)
- Right column — Studio Info:
  - Studio address (placeholder Millbrook address)
  - Phone number
  - Email address
  - Hours of operation
  - Small embedded map placeholder (static image or iframe placeholder)

**Section 3 — Additional Contact Paths**
- Layout: Two-card row
- Content:
  - "Book a Class" card — for users whose real need is booking, not contacting. Links to external booking.
  - "Corporate Wellness Inquiry" card — for B2B contacts. Links to `/corporate-wellness` or opens a pre-filled form.

---

### Email Capture

Email capture is not a standalone page. It appears in two forms:

**Inline (Footer-adjacent)**
- Appears on the homepage (Section 6) and in the global footer on every page
- Single-row layout: email input + "Subscribe" button
- Brief copy: what they get (class updates, workshop announcements, no spam)

**Modal Overlay**
- Triggers after 30 seconds on site (first visit only, with cookie/session tracking)
- Centered modal with semi-transparent Charcoal Umber backdrop
- Content: H3 headline, 1 line of copy, email input, "Subscribe" button, close button (X in top right)
- Styling: Warm Ivory modal, Terracotta Rose button, Burnished Gold accent rule
- Behavior: Does not trigger on mobile (reduces intrusion on small screens). On mobile, the inline footer capture is the sole capture mechanism.

---

## Optional Add-ons & Alternatives

The following are features or pages not in the confirmed scope. They are presented as options for Sara to consider at Gate 2 — not commitments.

### 1. Blog / Studio Journal

**What it involves:** A simple blog or journal section (`/journal`) with templated post pages. Initial launch would include 2-3 placeholder posts (e.g., "What to Expect at Your First Sound Bath," "5 Minutes of Breathwork You Can Do at Your Desk," "Meet Our Newest Instructor"). Posts would appear in a card grid on the journal index page, with individual post pages following a standard article layout.

**Why Sara might want it:** A blog supports SEO by creating keyword-rich content that brings new visitors through organic search. It also gives the studio a voice between classes — a place to share seasonal offerings, instructor spotlights, or wellness tips. It positions Marigold as a thought leader in the Millbrook wellness space, not just a service provider. Long-term, it is the single most effective lever for organic traffic growth.

### 2. FAQ Page

**What it involves:** A standalone FAQ page (`/faq`) with expandable accordion sections organized by topic (First Visit, Booking & Cancellation, Pricing, Corporate Wellness). Content would be placeholder but written in proper style.

**Why Sara might want it:** Reduces contact form volume by answering common questions proactively. Especially valuable for new visitors who have never been to a yoga/Pilates studio. Also supports SEO through question-based content that matches how people search ("what should I bring to a yoga class in Millbrook"). Currently, a small FAQ exists inline on the Pricing page — a standalone page would expand this significantly.

### 3. Online Shop (Merchandise / Retail)

**What it involves:** A simple shop page (`/shop`) with a product card grid. Products would be placeholder (e.g., branded water bottle, mat bag, candle, gift box). Each product card would show image, name, price, and a "Buy" button linking to an external checkout (no native e-commerce). Could start with as few as 4-6 items.

**Why Sara might want it:** Extends the brand beyond the studio. Retail creates a secondary revenue stream and strengthens brand identity — when a student carries a Marigold tote or lights a Marigold candle at home, it extends the studio's presence. Also creates gift-giving options beyond gift cards. Implementation is lightweight because it uses the same external-link pattern as booking and gift cards.

### 4. Student Loyalty / Rewards Program

**What it involves:** A dedicated page or section (`/rewards` or a section on `/pricing`) describing a loyalty program — e.g., attend 10 classes and receive a free drop-in, refer a friend and both get a discount. The page would explain the program structure and include a CTA to sign up or inquire.

**Why Sara might want it:** Retention is as important as acquisition. A loyalty program gives existing students a reason to stay consistent and refer friends. Word-of-mouth referrals are especially powerful for boutique studios in small communities like Millbrook. Even a simple "bring a friend" program could meaningfully increase new student trials. This page would be purely informational — actual tracking would happen in the booking system.
