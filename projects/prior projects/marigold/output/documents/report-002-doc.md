<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Marigold Wellness Studio — Site Architecture &amp; Copy Report</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
  :root {
    --warm-ivory: #F5F0E8;
    --terracotta: #C4887B;
    --charcoal: #3B3230;
    --warm-stone: #B8AFA6;
    --gold: #C9A85C;
    --pale-sage: #D5D8CE;
    --white: #FFFFFF;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--warm-ivory);
    color: var(--charcoal);
    line-height: 1.6;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  /* ---- COVER ---- */
  .cover {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 80px 40px;
    background: var(--charcoal);
    color: var(--warm-ivory);
    position: relative;
  }
  .cover::after {
    content: '';
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: var(--gold);
  }
  .cover .rosette {
    width: 80px;
    height: 80px;
    margin-bottom: 48px;
  }
  .cover h1 {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.15;
    margin-bottom: 12px;
  }
  .cover .subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--warm-stone);
    margin-bottom: 48px;
  }
  .cover .prepared {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: var(--warm-stone);
    margin-bottom: 8px;
  }
  .cover .date {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--warm-stone);
    opacity: 0.7;
  }

  /* ---- LAYOUT ---- */
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 32px;
  }
  section {
    padding: 80px 0;
  }
  section.alt-bg {
    background: var(--white);
  }
  section.dark-bg {
    background: var(--charcoal);
    color: var(--warm-ivory);
  }
  section.sage-bg {
    background: var(--pale-sage);
  }
  section.stone-bg {
    background: var(--warm-stone);
  }

  /* ---- TYPOGRAPHY ---- */
  h2.section-title {
    font-family: 'Instrument Serif', serif;
    font-size: 36px;
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  h3.page-title {
    font-family: 'Instrument Serif', serif;
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 8px;
    line-height: 1.25;
  }
  .section-intro {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    color: var(--warm-stone);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 48px;
  }
  .dark-bg .section-intro { color: var(--warm-stone); }

  .gold-rule {
    width: 48px;
    height: 2px;
    background: var(--gold);
    margin-bottom: 32px;
  }
  .gold-rule-center {
    width: 48px;
    height: 2px;
    background: var(--gold);
    margin: 0 auto 32px auto;
  }

  /* ---- SITEMAP DIAGRAM ---- */
  .sitemap-diagram {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 48px 0;
  }
  .sitemap-home {
    background: var(--terracotta);
    color: var(--charcoal);
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 16px 40px;
    border-radius: 8px;
    text-align: center;
    position: relative;
  }
  .sitemap-connector {
    width: 2px;
    height: 32px;
    background: var(--warm-stone);
  }
  .sitemap-branch-bar {
    height: 2px;
    background: var(--warm-stone);
    width: 100%;
    max-width: 760px;
    position: relative;
  }
  .sitemap-children {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin-top: 0;
    max-width: 820px;
  }
  .sitemap-child-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    width: 140px;
  }
  .sitemap-child-connector {
    width: 2px;
    height: 24px;
    background: var(--warm-stone);
  }
  .sitemap-child {
    background: var(--white);
    border: 1.5px solid var(--warm-stone);
    border-radius: 6px;
    padding: 12px 8px;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: var(--charcoal);
    width: 100%;
  }
  .sitemap-child.has-sub {
    border-color: var(--terracotta);
  }
  .sitemap-sub {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-top: 0;
    width: 100%;
  }
  .sitemap-sub-connector {
    width: 2px;
    height: 16px;
    background: var(--warm-stone);
  }
  .sitemap-sub-child {
    background: var(--warm-ivory);
    border: 1px dashed var(--warm-stone);
    border-radius: 4px;
    padding: 8px 6px;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    color: var(--charcoal);
    width: 100%;
    opacity: 0.85;
  }
  .sitemap-utility {
    margin-top: 40px;
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .sitemap-utility-item {
    background: transparent;
    border: 1px dashed var(--warm-stone);
    border-radius: 4px;
    padding: 8px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: var(--warm-stone);
    text-align: center;
  }

  /* ---- PAGE WALKTHROUGH ---- */
  .page-card {
    background: var(--white);
    border-radius: 10px;
    padding: 48px 40px;
    margin-bottom: 48px;
    border: 1px solid rgba(184,175,166,0.35);
  }
  .page-card .page-purpose {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--warm-stone);
    margin-bottom: 24px;
    font-style: italic;
  }
  .page-card .layout-heading {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--terracotta);
    margin-bottom: 8px;
    margin-top: 32px;
  }
  .page-card .layout-desc {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.7;
    margin-bottom: 16px;
    opacity: 0.85;
  }
  .page-card .placeholder-note {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    color: var(--warm-stone);
    background: rgba(184,175,166,0.12);
    border-left: 3px solid var(--gold);
    padding: 12px 16px;
    border-radius: 0 4px 4px 0;
    margin: 16px 0;
    line-height: 1.6;
  }

  /* ---- COPY PREVIEW ---- */
  .copy-preview {
    background: var(--warm-ivory);
    border-radius: 8px;
    padding: 36px 32px;
    margin: 20px 0;
    border: 1px solid rgba(184,175,166,0.25);
  }
  .copy-preview h1,
  .copy-preview h2,
  .copy-preview h3 {
    font-family: 'Instrument Serif', serif;
    font-weight: 400;
    color: var(--charcoal);
    line-height: 1.2;
  }
  .copy-preview h1 { font-size: 36px; margin-bottom: 12px; letter-spacing: 0.02em; }
  .copy-preview h2 { font-size: 28px; margin-bottom: 10px; letter-spacing: 0.01em; }
  .copy-preview h3 { font-size: 22px; margin-bottom: 8px; }
  .copy-preview p,
  .copy-preview li {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: var(--charcoal);
    margin-bottom: 14px;
  }
  .copy-preview ul {
    padding-left: 20px;
    margin-bottom: 14px;
  }
  .copy-preview .subhead {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    color: var(--charcoal);
    opacity: 0.75;
    margin-bottom: 20px;
  }
  .copy-preview .cta-btn {
    display: inline-block;
    background: var(--terracotta);
    color: var(--charcoal);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 14px 32px;
    border-radius: 6px;
    text-decoration: none;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .copy-preview .text-link {
    color: var(--terracotta);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    text-decoration: none;
    border-bottom: 1px solid var(--terracotta);
  }
  .copy-preview .section-divider {
    width: 100%;
    height: 1px;
    background: var(--warm-stone);
    opacity: 0.3;
    margin: 28px 0;
  }
  .copy-preview .testimonial-block {
    background: var(--charcoal);
    color: var(--warm-ivory);
    padding: 36px 32px;
    border-radius: 8px;
    margin: 24px 0;
    text-align: center;
  }
  .copy-preview .testimonial-block .gold-accent {
    width: 40px;
    height: 2px;
    background: var(--gold);
    margin: 0 auto 20px auto;
  }
  .copy-preview .testimonial-block blockquote {
    font-family: 'Instrument Serif', serif;
    font-size: 22px;
    line-height: 1.5;
    font-style: italic;
    color: var(--warm-ivory);
    margin-bottom: 16px;
  }
  .copy-preview .testimonial-block .attribution {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--warm-stone);
  }
  .copy-preview .email-band {
    background: var(--warm-stone);
    padding: 28px 24px;
    border-radius: 8px;
    margin: 24px 0;
    text-align: center;
  }
  .copy-preview .email-band h3 { color: var(--charcoal); margin-bottom: 6px; }
  .copy-preview .email-band p { color: var(--charcoal); opacity: 0.8; margin-bottom: 12px; font-size: 14px; }
  .copy-preview .email-band .email-row {
    display: flex;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .copy-preview .email-band .email-input {
    padding: 10px 16px;
    border: 1px solid rgba(59,50,48,0.2);
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    background: var(--warm-ivory);
    color: var(--charcoal);
    min-width: 220px;
  }
  .copy-preview .email-band .email-btn {
    padding: 10px 24px;
    background: var(--terracotta);
    color: var(--charcoal);
    border: none;
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
  }

  /* Instructor card grid */
  .instructor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 20px 0;
  }
  .instructor-card {
    background: var(--warm-ivory);
    border: 1px solid rgba(184,175,166,0.35);
    border-radius: 8px;
    padding: 28px 24px;
  }
  .instructor-card h3 { font-family: 'Instrument Serif', serif; font-size: 20px; margin-bottom: 4px; font-weight: 400; }
  .instructor-card .specialty { font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--terracotta); margin-bottom: 12px; font-weight: 500; }
  .instructor-card p { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.65; margin-bottom: 12px; }
  .instructor-card .certs { font-family: 'DM Sans', sans-serif; font-size: 12px; color: var(--warm-stone); line-height: 1.6; }

  /* Pricing cards */
  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
  }
  .pricing-card {
    background: var(--warm-ivory);
    border: 1.5px solid rgba(184,175,166,0.4);
    border-radius: 8px;
    padding: 28px 20px;
    text-align: center;
  }
  .pricing-card.featured {
    border-color: var(--terracotta);
    position: relative;
  }
  .pricing-card.featured .popular-label {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--terracotta);
    color: var(--charcoal);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 16px;
    border-radius: 20px;
  }
  .pricing-card h3 { font-family: 'Instrument Serif', serif; font-size: 22px; font-weight: 400; margin-bottom: 8px; }
  .pricing-card .price { font-family: 'DM Sans', sans-serif; font-size: 28px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
  .pricing-card p { font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; color: var(--charcoal); margin-bottom: 8px; }
  .pricing-card ul { text-align: left; padding-left: 16px; margin: 12px 0; }
  .pricing-card li { font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; margin-bottom: 4px; }

  /* Schedule table */
  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
  }
  .schedule-table th {
    background: var(--charcoal);
    color: var(--warm-ivory);
    padding: 10px 12px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .schedule-table td {
    padding: 10px 12px;
    border-bottom: 1px solid rgba(184,175,166,0.3);
    vertical-align: middle;
  }
  .schedule-table tr:nth-child(even) td {
    background: rgba(245,240,232,0.5);
  }
  .schedule-table .book-link {
    color: var(--terracotta);
    font-weight: 500;
    text-decoration: none;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  /* Three-column cards */
  .three-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }
  .mini-card {
    background: var(--warm-ivory);
    border: 1px solid rgba(184,175,166,0.35);
    border-radius: 8px;
    padding: 24px 20px;
  }
  .mini-card h3 { font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; margin-bottom: 8px; }
  .mini-card p { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.65; margin-bottom: 8px; }
  .mini-card .details { font-family: 'DM Sans', sans-serif; font-size: 12px; color: var(--warm-stone); line-height: 1.6; }

  /* Steps */
  .steps-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
    text-align: center;
  }
  .step-item .step-num {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--terracotta);
    color: var(--charcoal);
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }
  .step-item h4 {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .step-item p {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--charcoal);
    opacity: 0.8;
    line-height: 1.55;
  }

  /* Testimonial cards grid */
  .testimonial-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }
  .testimonial-card {
    background: var(--warm-ivory);
    border: 1px solid rgba(184,175,166,0.3);
    border-radius: 8px;
    padding: 28px 24px;
    position: relative;
  }
  .testimonial-card .quote-mark {
    font-family: 'Instrument Serif', serif;
    font-size: 48px;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 8px;
  }
  .testimonial-card blockquote {
    font-family: 'Instrument Serif', serif;
    font-size: 16px;
    line-height: 1.55;
    color: var(--charcoal);
    font-style: italic;
    margin-bottom: 14px;
  }
  .testimonial-card .attribution {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--warm-stone);
    font-weight: 500;
  }

  /* Gift card grid */
  .gift-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }
  .gift-card {
    background: var(--warm-ivory);
    border: 1.5px solid var(--gold);
    border-radius: 8px;
    padding: 28px 24px;
  }
  .gift-card h3 { font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; margin-bottom: 10px; }
  .gift-card p, .gift-card li { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.65; margin-bottom: 8px; }
  .gift-card ul { padding-left: 18px; }

  /* Contact split */
  .contact-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    margin: 20px 0;
  }
  .contact-form-preview {
    background: var(--warm-ivory);
    border: 1px solid rgba(184,175,166,0.3);
    border-radius: 8px;
    padding: 24px 20px;
  }
  .contact-form-preview .field {
    margin-bottom: 12px;
  }
  .contact-form-preview .field label {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--charcoal);
    margin-bottom: 4px;
  }
  .contact-form-preview .field .input-mock {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid rgba(184,175,166,0.5);
    border-radius: 4px;
    background: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--warm-stone);
  }
  .contact-form-preview .field .textarea-mock {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid rgba(184,175,166,0.5);
    border-radius: 4px;
    background: var(--white);
    height: 80px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--warm-stone);
  }
  .studio-info {
    background: var(--warm-ivory);
    border: 1px solid rgba(184,175,166,0.3);
    border-radius: 8px;
    padding: 24px 20px;
  }
  .studio-info h3 { font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; margin-bottom: 12px; }
  .studio-info p, .studio-info td { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.65; color: var(--charcoal); }
  .studio-info table { margin: 12px 0; border-collapse: collapse; }
  .studio-info td { padding: 4px 16px 4px 0; }

  /* Add-on cards */
  .addon-card {
    background: var(--white);
    border: 1px solid rgba(184,175,166,0.35);
    border-radius: 10px;
    padding: 36px 32px;
    margin-bottom: 24px;
    border-left: 4px solid var(--gold);
  }
  .addon-card h3 { font-family: 'Instrument Serif', serif; font-size: 22px; font-weight: 400; margin-bottom: 8px; }
  .addon-card .addon-what {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 14px;
  }
  .addon-card .addon-why {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    color: var(--charcoal);
    opacity: 0.8;
    padding-left: 16px;
    border-left: 2px solid var(--warm-stone);
  }

  /* Next steps */
  .next-steps-box {
    background: var(--charcoal);
    color: var(--warm-ivory);
    border-radius: 10px;
    padding: 48px 40px;
    text-align: center;
  }
  .next-steps-box h2 {
    font-family: 'Instrument Serif', serif;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .next-steps-box p {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto 12px auto;
    color: var(--warm-stone);
  }
  .next-steps-box ol {
    text-align: left;
    max-width: 500px;
    margin: 24px auto;
    padding-left: 24px;
  }
  .next-steps-box li {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    margin-bottom: 10px;
    color: var(--warm-ivory);
  }

  /* Callout box */
  .callout-box {
    background: var(--warm-stone);
    border-radius: 8px;
    padding: 28px 24px;
    margin: 20px 0;
    border-top: 3px solid var(--gold);
  }
  .callout-box h3 { font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; margin-bottom: 10px; color: var(--charcoal); }
  .callout-box p { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.7; color: var(--charcoal); margin-bottom: 10px; }

  /* Values pillars */
  .pillars-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin: 20px 0;
  }
  .pillar-card {
    text-align: center;
    background: var(--pale-sage);
    border-radius: 8px;
    padding: 28px 20px;
  }
  .pillar-card .pillar-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 14px auto;
  }
  .pillar-card h3 { font-family: 'Instrument Serif', serif; font-size: 20px; font-weight: 400; margin-bottom: 8px; }
  .pillar-card p { font-family: 'DM Sans', sans-serif; font-size: 13px; line-height: 1.6; }

  /* FAQ items */
  .faq-item {
    background: var(--warm-stone);
    border-radius: 6px;
    padding: 20px 24px;
    margin-bottom: 12px;
  }
  .faq-item .faq-q {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--charcoal);
    margin-bottom: 6px;
  }
  .faq-item .faq-a {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--charcoal);
    line-height: 1.65;
    opacity: 0.85;
  }

  /* Two-column text */
  .two-col-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 20px 0;
  }
  .two-col-text .col { font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.65; }
  .two-col-text .col h4 { font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 600; margin-bottom: 6px; }

  /* TOC */
  .toc {
    margin: 32px 0;
    padding: 0;
    list-style: none;
    counter-reset: toc-counter;
  }
  .toc li {
    counter-increment: toc-counter;
    padding: 12px 0;
    border-bottom: 1px solid rgba(184,175,166,0.25);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    display: flex;
    align-items: baseline;
    gap: 12px;
  }
  .toc li::before {
    content: counter(toc-counter, decimal-leading-zero);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--terracotta);
    min-width: 24px;
  }
  .toc li span.toc-label {
    font-weight: 500;
    color: var(--charcoal);
  }
  .toc li span.toc-desc {
    color: var(--warm-stone);
    font-size: 13px;
  }

  /* Responsive */
  @media (max-width: 720px) {
    .container { padding: 0 20px; }
    section { padding: 56px 0; }
    .cover h1 { font-size: 32px; }
    h2.section-title { font-size: 28px; }
    h3.page-title { font-size: 22px; }
    .instructor-grid,
    .pricing-grid,
    .three-cards,
    .steps-row,
    .testimonial-grid,
    .gift-grid,
    .contact-split,
    .two-col-text,
    .pillars-grid { grid-template-columns: 1fr; }
    .sitemap-children { flex-direction: column; align-items: center; }
    .sitemap-child-col { width: 200px; }
    .page-card { padding: 32px 24px; }
    .copy-preview { padding: 24px 20px; }
    .copy-preview h1 { font-size: 28px; }
    .copy-preview h2 { font-size: 22px; }
  }

  /* Print */
  @media print {
    body { font-size: 12px; }
    .cover { min-height: auto; padding: 60px 40px; page-break-after: always; }
    section { padding: 40px 0; }
    .page-card { page-break-inside: avoid; margin-bottom: 32px; }
    .addon-card { page-break-inside: avoid; }
    .next-steps-box { page-break-before: always; }
    .sitemap-diagram { page-break-after: always; }
  }
</style>
</head>
<body>

<!-- ============================================================ -->
<!-- COVER PAGE -->
<!-- ============================================================ -->
<div class="cover">
  <svg class="rosette" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(50,50)">
      <circle cx="0" cy="0" r="7" fill="#C9A85C" opacity="0.8"/>
      <g fill="none" stroke="#F5F0E8" stroke-width="1.2">
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(0)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(40)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(80)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(120)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(160)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(200)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(240)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(280)"/>
        <ellipse cx="0" cy="-18" rx="6" ry="17" transform="rotate(320)"/>
      </g>
    </g>
  </svg>
  <h1>Site Architecture &amp; Copy</h1>
  <div class="subtitle">Marigold Wellness Studio</div>
  <div class="prepared">Prepared for Sara Okonkwo</div>
  <div class="date">March 27, 2026 &mdash; Gate 2 Review</div>
</div>

<!-- ============================================================ -->
<!-- TABLE OF CONTENTS -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">What is in this report</h2>
    <p class="section-intro">This document presents the complete architecture and copy for the Marigold Wellness Studio website. Everything here is ready for your review. Read through each section, flag anything that feels off, and let us know what you would like to change before we start building.</p>
    <ol class="toc">
      <li><span class="toc-label">Site Map</span> <span class="toc-desc">&mdash; how the pages connect</span></li>
      <li><span class="toc-label">Homepage</span> <span class="toc-desc">&mdash; layout and full copy</span></li>
      <li><span class="toc-label">Our Story</span> <span class="toc-desc">&mdash; layout and full copy</span></li>
      <li><span class="toc-label">Our Instructors</span> <span class="toc-desc">&mdash; layout and placeholder bios</span></li>
      <li><span class="toc-label">Classes &amp; Schedule</span> <span class="toc-desc">&mdash; class descriptions, weekly schedule, first-visit info</span></li>
      <li><span class="toc-label">Corporate Wellness</span> <span class="toc-desc">&mdash; layout, copy, and offerings</span></li>
      <li><span class="toc-label">Pricing &amp; Packages</span> <span class="toc-desc">&mdash; pricing tiers, add-ons, FAQ</span></li>
      <li><span class="toc-label">Gift Cards</span> <span class="toc-desc">&mdash; options and purchase flow</span></li>
      <li><span class="toc-label">Testimonials</span> <span class="toc-desc">&mdash; placeholder community quotes</span></li>
      <li><span class="toc-label">Contact</span> <span class="toc-desc">&mdash; form, studio info, directions</span></li>
      <li><span class="toc-label">Email Capture</span> <span class="toc-desc">&mdash; newsletter signup (inline and pop-up)</span></li>
      <li><span class="toc-label">Optional Add-ons</span> <span class="toc-desc">&mdash; features we could add if you are interested</span></li>
      <li><span class="toc-label">Next Steps</span> <span class="toc-desc">&mdash; how to give feedback</span></li>
    </ol>
  </div>
</section>

<!-- ============================================================ -->
<!-- SITE MAP -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Site Map</h2>
    <p class="section-intro">Every page on your website and how they connect. The structure is intentionally flat &mdash; no page is more than two clicks from the homepage, and the &ldquo;Book a Class&rdquo; button is always visible.</p>

    <div class="sitemap-diagram">
      <div class="sitemap-home">Homepage</div>
      <div class="sitemap-connector"></div>
      <div class="sitemap-branch-bar"></div>
      <div class="sitemap-children">

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child has-sub">Our Story</div>
          <div class="sitemap-sub">
            <div class="sitemap-sub-connector"></div>
            <div class="sitemap-sub-child">Instructor Bios</div>
          </div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Classes &amp; Schedule</div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Corporate Wellness</div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Pricing &amp; Packages</div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Testimonials</div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Gift Cards</div>
        </div>

        <div class="sitemap-child-col">
          <div class="sitemap-child-connector"></div>
          <div class="sitemap-child">Contact</div>
        </div>

      </div>

      <div class="sitemap-utility">
        <div class="sitemap-utility-item">Email Capture (pop-up + footer)</div>
        <div class="sitemap-utility-item">Privacy Policy (footer only)</div>
      </div>
    </div>

    <div style="margin-top: 40px;">
      <h3 class="page-title">Navigation</h3>
      <p style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--charcoal); margin-top: 12px; opacity: 0.85;">
        <strong>Main menu (6 items):</strong> Our Story &middot; Classes &middot; Corporate Wellness &middot; Pricing &middot; Testimonials &middot; Contact
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--charcoal); margin-top: 8px; opacity: 0.85;">
        <strong>&ldquo;Book a Class&rdquo; button:</strong> Always visible &mdash; top-right on desktop, fixed bar at the bottom of the screen on mobile. It never scrolls away.
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--charcoal); margin-top: 8px; opacity: 0.85;">
        <strong>Footer:</strong> Full link set organized into Studio, Offerings, Connect, and Legal columns, plus address, phone, hours, and a small logo.
      </p>
      <p style="font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7; color: var(--charcoal); margin-top: 8px; opacity: 0.85;">
        <strong>Mobile:</strong> Hamburger menu (full-screen overlay). &ldquo;Book a Class&rdquo; is the first item in the menu and is also always visible in the fixed bottom bar.
      </p>
    </div>

  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 1: HOMEPAGE -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Homepage</h2>
    <p class="section-intro">The front door of the website. It sets the mood, introduces Marigold, and makes booking a class effortless.</p>

    <div class="page-card">
      <div class="page-purpose">This is the primary landing page. Its job is to establish the brand, communicate what Marigold offers, and drive visitors toward booking a class.</div>

      <div class="layout-heading">Section 1 &mdash; Hero</div>
      <div class="layout-desc">A full-screen image (warm studio interior with natural light) with a centered headline, one-line description, and a prominent &ldquo;Book a Class&rdquo; button. The text floats over the image with generous space around it.</div>

      <div class="copy-preview">
        <h1>Find your ground.</h1>
        <p class="subhead">Yoga, Pilates, and sound bath in the heart of Millbrook.</p>
        <span class="cta-btn">Book a Class</span>
      </div>

      <div class="layout-heading">Section 2 &mdash; Introduction</div>
      <div class="layout-desc">Two columns on desktop: text on the left (60%), a warm detail photo on the right (40%). On mobile, the image sits above the text. This section introduces the studio in Sara&rsquo;s voice.</div>

      <div class="copy-preview">
        <h2>A space for you</h2>
        <p>Marigold Wellness Studio was built on a simple idea: that the spaces where we practice matter as much as the practice itself. We created a studio where warmth, intention, and quiet confidence live in every detail &mdash; from the light that fills the room to the teachers who hold the space.</p>
        <p>Whether you are stepping onto a mat for the first time or deepening a practice you have carried for years, this is a place where you belong. No performance. No pressure. Just the steady, grounding work of showing up for yourself.</p>
        <p>We would love to share our story with you.</p>
        <span class="text-link">Read our story &rarr;</span>
      </div>

      <div class="layout-heading">Section 3 &mdash; Class Offerings</div>
      <div class="layout-desc">Three cards side-by-side on a soft sage background &mdash; one for Yoga, one for Pilates, one for Sound Bath. Each has an image, a short description, and a link to the schedule. On mobile, they stack into a single column.</div>

      <div class="copy-preview">
        <div class="three-cards">
          <div class="mini-card">
            <h3>Yoga</h3>
            <p>From grounding vinyasa flows to slow, restorative holds &mdash; our yoga classes meet you where you are. Move at your own pace, breathe at your own rhythm.</p>
            <span class="text-link">View Schedule &rarr;</span>
          </div>
          <div class="mini-card">
            <h3>Pilates</h3>
            <p>Strengthen from the center out. Our Pilates classes build stability, alignment, and confidence through deliberate, controlled movement.</p>
            <span class="text-link">View Schedule &rarr;</span>
          </div>
          <div class="mini-card">
            <h3>Sound Bath</h3>
            <p>Close your eyes. Let go. Our sound bath sessions use singing bowls, chimes, and guided stillness to quiet the noise and bring you back to yourself.</p>
            <span class="text-link">View Schedule &rarr;</span>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 4 &mdash; Featured Testimonial</div>
      <div class="layout-desc">A single pull quote on a dark background, centered, with a gold decorative rule above and below. This is a social-proof moment &mdash; one strong voice that builds trust.</div>

      <div class="copy-preview">
        <div class="testimonial-block">
          <div class="gold-accent"></div>
          <blockquote>&ldquo;I walked in feeling scattered and walked out feeling like myself again. That is what Marigold does &mdash; it brings you back to center.&rdquo;</blockquote>
          <div class="attribution">&mdash; Danielle R., member since 2024</div>
          <div class="gold-accent" style="margin-top: 20px;"></div>
        </div>
        <div style="text-align: center; margin-top: 12px;">
          <span class="text-link">More stories &rarr;</span>
        </div>
      </div>

      <div class="layout-heading">Section 5 &mdash; Closing Call to Action</div>
      <div class="layout-desc">A generous, spacious section with a centered heading, a single line of copy, and the &ldquo;Book a Class&rdquo; button. Mostly whitespace &mdash; it lets the page breathe before the footer.</div>

      <div class="copy-preview" style="text-align: center;">
        <h2>Ready to begin?</h2>
        <p>Your mat is waiting. Whether it is your first class or your hundredth, every session is a fresh start.</p>
        <span class="cta-btn">Book a Class</span>
      </div>

      <div class="layout-heading">Section 6 &mdash; Email Signup</div>
      <div class="layout-desc">A full-width band in warm stone with a brief headline, one line of copy, and an email input field with a &ldquo;Subscribe&rdquo; button.</div>

      <div class="copy-preview">
        <div class="email-band">
          <h3>Stay connected</h3>
          <p>New classes, workshops, and studio updates &mdash; no spam, just the good stuff.</p>
          <div class="email-row">
            <div class="email-input">Your email address</div>
            <div class="email-btn">Subscribe</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 2: OUR STORY -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Our Story</h2>
    <p class="section-intro">The heart of the brand. This page tells visitors who you are, why Marigold exists, and what makes it different.</p>

    <div class="page-card">
      <div class="page-purpose">Builds trust and emotional connection. Visitors who read this page are significantly more likely to book.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>
      <div class="layout-desc">A shorter hero image (about 40% of the screen) with &ldquo;Our Story&rdquo; centered over a warm studio photo.</div>

      <div class="copy-preview">
        <h1>Our Story</h1>
      </div>

      <div class="layout-heading">Section 2 &mdash; Studio Story</div>
      <div class="layout-desc">A single narrow column of text, centered on the page (maximum width about 720 pixels). No image competing for attention &mdash; just the words, in a comfortable reading width.</div>

      <div class="copy-preview">
        <p>Marigold Wellness Studio did not start with a business plan. It started with a feeling &mdash; the kind you get when you walk into a room and your shoulders drop an inch before you even sit down. That exhale. That sense of permission to stop carrying everything for a moment.</p>
        <p>When we opened our doors in Millbrook, we wanted to build a space that gave people that feeling before the class even began. A studio where the warmth was not an afterthought but the foundation. Where the light was soft, the pace was human, and the work &mdash; the real, honest, sometimes difficult work of moving and breathing and being present &mdash; was always met with steadiness rather than spectacle.</p>
        <p>We teach yoga, Pilates, and sound bath because we believe in practices that meet people where they are. Not where they think they should be. Not where a trend tells them to go. We are not chasing the next thing. We are tending to the practices that have been holding people up for a long time &mdash; and making them feel like home.</p>
        <p>Marigold is named for a flower that grows in nearly any soil. Hardy, warm, unpretentious, and quietly radiant. That felt like the right foundation for a studio built around showing up exactly as you are.</p>
      </div>

      <div class="layout-heading">Section 3 &mdash; Meet Sara</div>
      <div class="layout-desc">Two columns: a photo of Sara on the left (40%), her personal story on the right (60%). On mobile, the photo appears above the text.</div>

      <div class="placeholder-note">Sara &mdash; the bio below is placeholder content written in your brand voice. Replace the names, career details, and training history with your own. The tone and structure are ready to keep.</div>

      <div class="copy-preview">
        <h2>Meet Sara</h2>
        <p>Sara Okonkwo came to wellness the way most people do &mdash; not through a grand revelation, but through a quiet, persistent need. After years in a fast-paced career that left little room for stillness, she found her way to a yoga mat almost by accident. What started as a way to manage stress became something much larger: a reckoning with what it means to take care of yourself &mdash; not as a luxury, but as a practice.</p>
        <p>She trained and taught in studios across the Northeast before settling in Millbrook, drawn to its unhurried pace and tight-knit community. She saw a gap &mdash; not for another fitness studio, but for a true wellness space. A place with warmth baked into the walls. A place where the teacher remembers your name and the schedule respects the rhythm of real life.</p>
        <p>Marigold Wellness Studio is the realization of that vision. Sara teaches several classes each week and oversees every detail of the studio experience, from the instructors she brings on to the temperature of the room when you walk in. Her philosophy is simple: practice should feel like coming home.</p>
      </div>

      <div class="layout-heading">Section 4 &mdash; Our Values</div>
      <div class="layout-desc">Three pillars displayed as equal cards with a simple icon above each. Set on a soft sage background to create visual separation.</div>

      <div class="copy-preview">
        <div class="pillars-grid">
          <div class="pillar-card">
            <svg class="pillar-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="16" r="6" fill="none" stroke="#3B3230" stroke-width="1.5"/><circle cx="12" cy="24" r="5" fill="none" stroke="#3B3230" stroke-width="1.5"/><circle cx="28" cy="24" r="5" fill="none" stroke="#3B3230" stroke-width="1.5"/></svg>
            <h3>Community</h3>
            <p>We are more than a schedule of classes. Marigold is a gathering place &mdash; for regulars and newcomers, for seasoned practitioners and curious beginners. You will know people here, and they will know you.</p>
          </div>
          <div class="pillar-card">
            <svg class="pillar-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="12" fill="none" stroke="#3B3230" stroke-width="1.5"/><circle cx="20" cy="20" r="4" fill="#3B3230"/></svg>
            <h3>Intention</h3>
            <p>Nothing here is accidental. From the classes we offer to the way we light the room, every choice serves the experience. We believe attention to the details is how you build a space people want to return to.</p>
          </div>
          <div class="pillar-card">
            <svg class="pillar-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="14" width="24" height="14" rx="3" fill="none" stroke="#3B3230" stroke-width="1.5"/><line x1="20" y1="10" x2="20" y2="14" stroke="#3B3230" stroke-width="1.5"/><line x1="14" y1="12" x2="26" y2="12" stroke="#3B3230" stroke-width="1.5"/></svg>
            <h3>Accessibility</h3>
            <p>Wellness is not a members-only club. Our classes are designed for real bodies and real lives. We offer modifications at every level, pricing that makes sense, and an open door to anyone willing to show up.</p>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 5 &mdash; Call to Action</div>
      <div class="layout-desc">Same centered booking prompt used on the homepage.</div>

      <div class="copy-preview" style="text-align: center;">
        <h2>Ready to begin?</h2>
        <p>Your mat is waiting. Whether it is your first class or your hundredth, every session is a fresh start.</p>
        <span class="cta-btn">Book a Class</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 3: INSTRUCTOR BIOS -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Our Instructors</h2>
    <p class="section-intro">A page for your teaching team. The bios below are placeholders written in your brand voice &mdash; swap in real names, photos, and details when ready.</p>

    <div class="page-card">
      <div class="page-purpose">Builds trust through the people behind the studio. Visitors want to know who will be teaching their class.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>
      <div class="layout-desc">A shorter hero (about 30% of the screen) with &ldquo;Our Instructors&rdquo; centered over a side-angle group practice photo.</div>

      <div class="copy-preview">
        <h1>Our Instructors</h1>
      </div>

      <div class="placeholder-note">Sara &mdash; all instructor bios below are placeholder content. Replace names, photos, specialties, personal details, and certifications with your real instructor information. The structure and tone are ready to use &mdash; just swap in the specifics.</div>

      <div class="layout-heading">Section 2 &mdash; Instructor Grid</div>
      <div class="layout-desc">Two-column card grid on desktop, single column on mobile. Each card has a warm-toned headshot at the top, the instructor&rsquo;s name and specialty, a short bio, and their certifications.</div>

      <div class="copy-preview">
        <div class="instructor-grid">
          <div class="instructor-card">
            <h3>Amara Jacobs</h3>
            <div class="specialty">Vinyasa &amp; Sound Bath</div>
            <p>Amara brings a rare combination of strength and stillness to her teaching. Her vinyasa classes are deliberate and grounding &mdash; focused on breath-led movement rather than pace &mdash; and her sound bath sessions are some of the most popular on the schedule. She has been teaching for eight years and still gets excited when a student discovers what their body can do when they stop rushing.</p>
            <div class="certs">500-hour RYT, Vinyasa &amp; Restorative &middot; Certified Sound Healing Practitioner &middot; Trauma-Informed Yoga Training</div>
          </div>
          <div class="instructor-card">
            <h3>Marcus Leong</h3>
            <div class="specialty">Pilates &amp; Functional Movement</div>
            <p>Marcus came to Pilates through physical therapy after a back injury that sidelined him from competitive rowing. What started as rehabilitation became a calling. His classes are precise, warm, and often funny &mdash; he believes that strong foundations do not require a serious face. Expect clear cues, thoughtful progressions, and the occasional rowing metaphor.</p>
            <div class="certs">Balanced Body Comprehensive Pilates Instructor &middot; NASM Corrective Exercise Specialist &middot; ACE-Certified Group Fitness Instructor</div>
          </div>
          <div class="instructor-card">
            <h3>Priya Desai</h3>
            <div class="specialty">Hatha &amp; Restorative Yoga</div>
            <p>Priya teaches with the kind of patience that makes you slow down just being in the room. Her hatha classes focus on alignment and awareness, giving students time to understand each posture rather than rushing through sequences. Her restorative sessions are a masterclass in doing less &mdash; bolsters, blankets, and long holds that let your nervous system catch up with you.</p>
            <div class="certs">500-hour RYT, Hatha &amp; Therapeutic Yoga &middot; Yoga Nidra Certification &middot; Prenatal &amp; Postnatal Yoga Specialist</div>
          </div>
          <div class="instructor-card">
            <h3>Elena Vargas</h3>
            <div class="specialty">Mat Pilates &amp; Breathwork</div>
            <p>Elena&rsquo;s background in dance gives her Pilates teaching a fluid, intuitive quality that sets it apart. She focuses on the connection between breath and movement, helping students find control without rigidity. Her breathwork workshops have become a studio favorite &mdash; accessible, grounding, and surprisingly powerful for something that asks you to just sit and breathe.</p>
            <div class="certs">STOTT Pilates Certified Instructor &middot; Certified Breathwork Facilitator &middot; BFA in Dance, specialization in movement pedagogy</div>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 3 &mdash; Teaching Inquiry</div>
      <div class="layout-desc">A short closing block inviting potential instructors to get in touch.</div>

      <div class="copy-preview">
        <p>Interested in teaching with us? We are always looking for instructors who share our values &mdash; warmth, intention, and a genuine love of the work.</p>
        <span class="text-link">Get in touch &rarr;</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 4: CLASSES & SCHEDULE -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Classes &amp; Schedule</h2>
    <p class="section-intro">The core of the website. This page describes every class type, shows the weekly schedule, and makes it easy to book.</p>

    <div class="page-card">
      <div class="page-purpose">Converts interested visitors into booked students. Every class description ends with a path to booking.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>
      <div class="layout-desc">A shorter hero with the page title and a one-line subhead describing the range of offerings.</div>

      <div class="copy-preview">
        <h1>Classes &amp; Schedule</h1>
        <p class="subhead">From energizing morning flows to grounding evening sound baths &mdash; find the practice that meets you where you are.</p>
      </div>

      <div class="layout-heading">Section 2 &mdash; Class Types</div>
      <div class="layout-desc">An expandable accordion &mdash; one section per class type (Yoga, Pilates, Sound Bath). Each section opens to show a description, key details, and the specific class options within that type. A photo accompanies each. The first section is open by default.</div>

      <div class="copy-preview">
        <h2>Yoga</h2>
        <p>Whether you are stepping onto the mat for the first time or deepening a lifelong practice, our yoga classes are built around the simple idea that movement should feel good. Each session blends breath, alignment, and intentional pacing &mdash; never rushed, never performative. Our instructors meet you at your level, offering modifications and progressions so every body in the room is supported.</p>
        <p>Expect warm lighting, unhurried transitions, and the kind of quiet focus that stays with you long after you roll up your mat.</p>
        <p><strong>Duration:</strong> 60 minutes &nbsp;&middot;&nbsp; <strong>Intensity:</strong> Gentle to moderate &nbsp;&middot;&nbsp; <strong>Bring:</strong> Yoga mat (loaners available), water bottle, comfortable clothing</p>

        <div class="section-divider"></div>

        <p><strong>Morning Flow Yoga</strong> &mdash; A warm, steady vinyasa to start your day with intention. Breath-linked movement builds heat gradually, leaving you energized but centered.</p>
        <p><strong>Slow Stretch &amp; Restore</strong> &mdash; A floor-based practice focused on deep stretching, long holds, and guided relaxation. Ideal for recovery days or anyone carrying tension.</p>
        <p><strong>Restorative Evening Session</strong> &mdash; Supported postures, soft lighting, and extended stillness. This is the practice you turn to when the week has been too much.</p>

        <div class="section-divider"></div>

        <h2>Pilates</h2>
        <p>Our Pilates classes focus on precision over speed. Core strength, postural alignment, and controlled movement form the foundation of every session &mdash; but the real focus is on how your body feels when it moves well. Classes are small enough for individual attention, challenging enough to hold your interest, and accessible enough that newcomers feel welcome from the first rep.</p>
        <p>No previous Pilates experience required. Just a willingness to slow down and pay attention.</p>
        <p><strong>Duration:</strong> 50 minutes &nbsp;&middot;&nbsp; <strong>Intensity:</strong> Moderate &nbsp;&middot;&nbsp; <strong>Bring:</strong> Comfortable fitted clothing, grip socks (optional), water bottle</p>

        <div class="section-divider"></div>

        <p><strong>Mat Pilates Fundamentals</strong> &mdash; A full-body mat class emphasizing core engagement, spinal mobility, and breath control. Ideal for building a strong foundation or refining your form.</p>
        <p><strong>Pilates Strength &amp; Sculpt</strong> &mdash; A more dynamic session incorporating resistance bands and light props. Expect to feel challenged &mdash; and to stand a little taller afterward.</p>

        <div class="section-divider"></div>

        <h2>Sound Bath</h2>
        <p>This is not a workout &mdash; it is an experience. Our sound bath sessions use crystal singing bowls, chimes, and guided meditation to create an immersive sonic environment. You lie down, close your eyes, and let the vibrations do the work. There is nothing to learn, nothing to perform. Just arrive, settle in, and allow yourself to be still.</p>
        <p>Many of our students describe sound bath as the most restorative hour of their week. If you have never tried it, this is a gentle place to begin.</p>
        <p><strong>Duration:</strong> 60&ndash;75 minutes &nbsp;&middot;&nbsp; <strong>Intensity:</strong> None &mdash; fully passive &nbsp;&middot;&nbsp; <strong>Bring:</strong> Nothing required. We provide mats, blankets, and bolsters.</p>

        <div class="section-divider"></div>

        <p><strong>Friday Evening Sound Bath</strong> &mdash; End the workweek in stillness. Crystal bowls, candlelight, and extended savasana. Our most popular session.</p>
        <p><strong>New Moon Sound Journey</strong> &mdash; A monthly gathering aligned with the lunar cycle. Guided intention-setting followed by a deep sound immersion.</p>
      </div>

      <div class="layout-heading">Section 3 &mdash; Weekly Schedule</div>
      <div class="layout-desc">A table on desktop showing day, time, class, instructor, duration, and a &ldquo;Book&rdquo; button for each class. On mobile, the same information appears as cards grouped by day. Each &ldquo;Book&rdquo; button links to the external booking system.</div>

      <div class="placeholder-note">Sara &mdash; this is a placeholder schedule. Swap in your real class names, times, and instructor assignments. The format is ready &mdash; just update the details.</div>

      <div class="copy-preview" style="overflow-x: auto;">
        <table class="schedule-table">
          <thead>
            <tr><th>Day</th><th>Time</th><th>Class</th><th>Instructor</th><th>Duration</th><th></th></tr>
          </thead>
          <tbody>
            <tr><td>Monday</td><td>7:00 AM</td><td>Morning Flow Yoga</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Monday</td><td>12:00 PM</td><td>Mat Pilates Fundamentals</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Monday</td><td>6:30 PM</td><td>Slow Stretch &amp; Restore</td><td>Tomoko R.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Tuesday</td><td>7:00 AM</td><td>Pilates Strength &amp; Sculpt</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Tuesday</td><td>10:00 AM</td><td>Morning Flow Yoga</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Tuesday</td><td>5:30 PM</td><td>Restorative Evening Session</td><td>Tomoko R.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Wednesday</td><td>7:00 AM</td><td>Morning Flow Yoga</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Wednesday</td><td>12:00 PM</td><td>Mat Pilates Fundamentals</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Wednesday</td><td>7:00 PM</td><td>Friday Evening Sound Bath</td><td>Tomoko R.</td><td>75 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Thursday</td><td>7:00 AM</td><td>Pilates Strength &amp; Sculpt</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Thursday</td><td>10:00 AM</td><td>Slow Stretch &amp; Restore</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Thursday</td><td>6:30 PM</td><td>Morning Flow Yoga</td><td>Jordan K.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Friday</td><td>7:00 AM</td><td>Morning Flow Yoga</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Friday</td><td>12:00 PM</td><td>Mat Pilates Fundamentals</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Friday</td><td>7:00 PM</td><td>Friday Evening Sound Bath</td><td>Tomoko R.</td><td>75 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Saturday</td><td>9:00 AM</td><td>Morning Flow Yoga</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Saturday</td><td>10:30 AM</td><td>Pilates Strength &amp; Sculpt</td><td>Priya L.</td><td>50 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Saturday</td><td>4:00 PM</td><td>New Moon Sound Journey</td><td>Tomoko R.</td><td>75 min</td><td><span class="book-link">Book</span></td></tr>
            <tr><td>Sunday</td><td>10:00 AM</td><td>Restorative Evening Session</td><td>Sara O.</td><td>60 min</td><td><span class="book-link">Book</span></td></tr>
          </tbody>
        </table>
      </div>

      <div class="layout-heading">Section 4 &mdash; First Visit Information</div>
      <div class="layout-desc">A highlighted callout box with warm stone background and a gold accent rule. Covers arrival time, what to wear, what is provided, and parking &mdash; everything a new visitor needs to know.</div>

      <div class="callout-box">
        <h3>New to Marigold?</h3>
        <p>Welcome. Here is everything you need to know before your first class.</p>
        <p><strong>Arrive early.</strong> We recommend arriving 10&ndash;15 minutes before class so you have time to settle in, fill out a brief intake form, and meet your instructor. No rushing.</p>
        <p><strong>Wear what feels right.</strong> Comfortable, breathable clothing you can move in freely. For Pilates, fitted layers work best so your instructor can see your alignment. For sound bath, wear whatever you would nap in.</p>
        <p><strong>We have what you need.</strong> Yoga mats, Pilates props, blankets, and bolsters are all provided. If you prefer your own mat, bring it along.</p>
        <p><strong>Parking.</strong> Free street parking is available on Elm Street and in the municipal lot on Oak Avenue, one block east of the studio.</p>
        <p><strong>Questions?</strong> Reach out anytime &mdash; we are happy to help you find the right class.</p>
      </div>

      <div class="layout-heading">Section 5 &mdash; Call to Action</div>

      <div class="copy-preview" style="text-align: center;">
        <h2>Book Your First Class</h2>
        <p>Your practice starts with a single step. Choose a class, reserve your spot, and we will take care of the rest.</p>
        <span class="cta-btn">Book a Class</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 5: CORPORATE WELLNESS -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Corporate Wellness</h2>
    <p class="section-intro">A slightly more professional tone for a different audience &mdash; HR managers and wellness coordinators looking to bring movement into their workplace.</p>

    <div class="page-card">
      <div class="page-purpose">Targets business decision-makers (your secondary audience). The tone is warm but outcomes-oriented &mdash; recognizably Marigold, but speaking the language of workplace wellness.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>
      <div class="layout-desc">A hero image (bright, plant-filled workspace or outdoor group session) with the page title and a one-line positioning statement.</div>

      <div class="copy-preview">
        <h1>Corporate Wellness</h1>
        <p class="subhead">Bring mindful movement to your team.</p>
      </div>

      <div class="layout-heading">Section 2 &mdash; Value Proposition</div>
      <div class="layout-desc">A single narrow column of text that explains what Marigold offers to organizations, focusing on real outcomes rather than a sales pitch.</div>

      <div class="copy-preview">
        <p>Workplace stress is not an abstract problem. It shows up in sick days, disengagement, turnover, and the quiet erosion of morale that no ping-pong table can fix. At Marigold Wellness Studio, we partner with organizations to deliver evidence-informed wellness programming that meets employees where they are &mdash; in the office, on the clock, no gym clothes required.</p>
        <p>Our corporate wellness sessions are designed for real workplaces. Chair yoga that fits in a conference room. Breathwork that takes less time than a team stand-up. Workshops that give your employees tools they will actually use. Every session is facilitated by a certified instructor and tailored to your team&rsquo;s experience level &mdash; from complete beginners to seasoned practitioners.</p>
        <p>The result is not just a perk on a benefits page. It is a tangible investment in focus, resilience, and the kind of team cohesion that compounds over time.</p>
      </div>

      <div class="layout-heading">Section 3 &mdash; Offerings</div>
      <div class="layout-desc">Three cards, one for each offering type, with a description, ideal use case, duration, and setting.</div>

      <div class="copy-preview">
        <div class="three-cards">
          <div class="mini-card">
            <h3>Chair Yoga</h3>
            <p>Gentle, seated movement designed for the office environment. No mats, no special clothing, no disruption to the workday. Sessions focus on tension release in the neck, shoulders, and lower back &mdash; the places where desk work accumulates.</p>
            <div class="details">Ideal for: All-staff sessions, wellness weeks, lunch-and-learns<br>Duration: 30&ndash;45 minutes<br>Setting: Conference room, break room, or any open floor space</div>
          </div>
          <div class="mini-card">
            <h3>Guided Breathwork</h3>
            <p>Structured breathing techniques with immediate, noticeable effects on stress and focus. Our facilitator guides the group through accessible exercises &mdash; no prior experience needed.</p>
            <div class="details">Ideal for: High-pressure teams, pre-deadline resets, quarterly wellness initiatives<br>Duration: 20&ndash;30 minutes<br>Setting: Any quiet room</div>
          </div>
          <div class="mini-card">
            <h3>Custom Workshops</h3>
            <p>Not every team needs the same thing. We design bespoke wellness workshops around your goals &mdash; whether that is a one-time event for a retreat, a recurring series, or a multi-week introduction to mindful movement.</p>
            <div class="details">Ideal for: Retreats, leadership offsites, ongoing wellness programs<br>Duration: Consultation-based<br>Setting: Your space or ours</div>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 4 &mdash; How It Works</div>
      <div class="layout-desc">A three-step visual process showing how easy it is to get started.</div>

      <div class="copy-preview">
        <div class="steps-row">
          <div class="step-item">
            <div class="step-num">1</div>
            <h4>Get in touch</h4>
            <p>Tell us about your team &mdash; size, goals, schedule, and any constraints. A brief conversation is all we need.</p>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <h4>We design your program</h4>
            <p>Based on our consultation, we build a tailored offering &mdash; the right sessions, the right cadence, the right fit for your space.</p>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <h4>We come to you</h4>
            <p>Our instructors arrive on-site, fully equipped. Your team shows up. That is it. No logistics burden on your end.</p>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 5 &mdash; Testimonial</div>

      <div class="placeholder-note">Sara &mdash; replace this with a real corporate client testimonial when available. This placeholder captures the format and voice.</div>

      <div class="copy-preview">
        <div class="testimonial-block">
          <div class="gold-accent"></div>
          <blockquote>&ldquo;We brought Marigold in for a four-week chair yoga series during our busiest quarter. The feedback was immediate &mdash; people were calmer, more focused, and actually looking forward to Wednesdays. We have since made it a permanent part of our wellness budget.&rdquo;</blockquote>
          <div class="attribution">&mdash; Rachel Stein, Director of People Operations, Elm &amp; Associates</div>
          <div class="gold-accent" style="margin-top: 20px;"></div>
        </div>
      </div>

      <div class="layout-heading">Section 6 &mdash; Inquiry Call to Action</div>
      <div class="layout-desc">Different from the standard booking button. This one invites a consultation rather than a class booking.</div>

      <div class="copy-preview" style="text-align: center;">
        <h2>Let&rsquo;s Build Something for Your Team</h2>
        <p>Every workplace is different. Tell us about yours, and we will design a program that fits.</p>
        <span class="cta-btn">Schedule a Consultation</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 6: PRICING & PACKAGES -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Pricing &amp; Packages</h2>
    <p class="section-intro">Clear, simple pricing that removes friction from the booking decision. The middle option is highlighted as the most popular.</p>

    <div class="page-card">
      <div class="page-purpose">Converts browsers into paying students. Transparent pricing builds trust and reduces &ldquo;how much does it cost?&rdquo; inquiries.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>

      <div class="copy-preview">
        <h1>Pricing &amp; Packages</h1>
        <p class="subhead">Simple, flexible options for every practice.</p>
      </div>

      <div class="layout-heading">Section 2 &mdash; Pricing Tiers</div>
      <div class="layout-desc">Three cards side by side. The middle card (Class Pack) is slightly larger with a terracotta accent border and a &ldquo;Most Popular&rdquo; label. Each card has a price, description, included features, and a booking button.</div>

      <div class="placeholder-note">Sara &mdash; the prices below are realistic placeholders. Adjust the dollar amounts, package sizes, and membership terms to match your actual pricing.</div>

      <div class="copy-preview">
        <div class="pricing-grid">
          <div class="pricing-card">
            <h3>Drop-In</h3>
            <div class="price">$22</div>
            <p>per class</p>
            <p>No commitment, no expiration. Just show up. A single-class pass for those who prefer flexibility &mdash; or a perfect way to try Marigold for the first time.</p>
            <ul>
              <li>Valid for any scheduled class</li>
              <li>Mat and props included</li>
              <li>No registration required</li>
            </ul>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Book a Class</span>
          </div>
          <div class="pricing-card featured">
            <div class="popular-label">Most Popular</div>
            <h3>Class Pack</h3>
            <div class="price">$95&ndash;$170</div>
            <p>5 classes ($19/class) or 10 classes ($17/class)</p>
            <p>For the student who has found their rhythm. Class packs offer meaningful savings and the flexibility to attend on your own schedule.</p>
            <ul>
              <li>Valid for any scheduled class</li>
              <li>Shareable with a friend or family member</li>
              <li>6-month expiration</li>
            </ul>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Get Started</span>
          </div>
          <div class="pricing-card">
            <h3>Monthly Unlimited</h3>
            <div class="price">$149</div>
            <p>per month</p>
            <p>Your practice, without limits. Attend every class on the schedule &mdash; as many times as you want, every week.</p>
            <ul>
              <li>Unlimited access to all classes</li>
              <li>Priority workshop booking</li>
              <li>10% off private sessions</li>
              <li>Cancel anytime</li>
            </ul>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Join Now</span>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 3 &mdash; Additional Options</div>
      <div class="layout-desc">A two-column text block covering private sessions, corporate packages, and gift cards &mdash; with links to the relevant pages.</div>

      <div class="copy-preview">
        <div class="two-col-text">
          <div class="col">
            <h4>Private Sessions</h4>
            <p>One-on-one instruction tailored to your goals &mdash; whether that is building a home practice, rehabilitating an injury, or deepening a specific area of study. Sessions are 60 minutes and scheduled at your convenience.</p>
            <p><strong>$85 / session</strong> &nbsp;|&nbsp; Monthly Unlimited members receive 10% off.</p>
          </div>
          <div class="col">
            <h4>Corporate &amp; Group Packages</h4>
            <p>We offer customized pricing for corporate wellness programs and private group bookings.</p>
            <p style="margin-top: 16px;"><h4>Gift Cards</h4></p>
            <p>Give the gift of practice. Gift cards are available in preset and custom amounts.</p>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 4 &mdash; Frequently Asked Questions</div>
      <div class="layout-desc">Expandable accordion items on a warm stone background addressing common pricing questions.</div>

      <div class="placeholder-note">Sara &mdash; adjust the cancellation policy, expiration window, and new student discount to match your actual studio policies.</div>

      <div class="copy-preview">
        <div class="faq-item">
          <div class="faq-q">Can I try a class before committing to a package?</div>
          <div class="faq-a">Absolutely. Our drop-in rate is designed for exactly that. Book any class on the schedule &mdash; no package or membership required.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">Do class packs expire?</div>
          <div class="faq-a">Yes. Class packs are valid for 6 months from the date of purchase. We find this gives students plenty of time to use their sessions without the pressure of a tight deadline.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">What is your cancellation policy?</div>
          <div class="faq-a">We ask for at least 12 hours&rsquo; notice for cancellations. Late cancellations and no-shows will be charged as a used class (for pack holders) or a drop-in fee (for monthly members). We know things come up &mdash; just give us a heads-up when you can.</div>
        </div>
        <div class="faq-item">
          <div class="faq-q">Is there a new student discount?</div>
          <div class="faq-a">Yes. First-time visitors receive their first drop-in class at 50% off &mdash; just $11. No code needed; it is applied automatically when you book.</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 7: GIFT CARDS -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Gift Cards</h2>
    <p class="section-intro">A simple, inviting page for gift purchases. The actual transaction will be handled by an external gift card service &mdash; this page presents the options and guides visitors through the process.</p>

    <div class="page-card">
      <div class="page-purpose">Creates a secondary revenue path and extends the brand through word-of-mouth gifting.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>
      <div class="layout-desc">A shorter hero with warm, tactile imagery (wrapped package, dried flowers, or hands holding an envelope) and the tagline below the title.</div>

      <div class="copy-preview">
        <h1>Gift Cards</h1>
        <p class="subhead">Give the gift of practice.</p>
      </div>

      <div class="layout-heading">Section 2 &mdash; Gift Card Options</div>
      <div class="layout-desc">Two cards side by side with gold accent borders &mdash; one for fixed-amount cards, one for custom amounts. Each has a description and a &ldquo;Purchase&rdquo; button linking to the external gift card system.</div>

      <div class="placeholder-note">The purchase flow will be handled by an external service. The buttons on this page link out to that system.</div>

      <div class="copy-preview">
        <div class="gift-grid">
          <div class="gift-card">
            <h3>Fixed Amount Cards</h3>
            <p>Choose from our preset amounts &mdash; a thoughtful gift for anyone, no guesswork required.</p>
            <ul>
              <li><strong>$50</strong> &mdash; A perfect introduction (two drop-in classes and change to spare)</li>
              <li><strong>$75</strong> &mdash; A five-class pack or a private session</li>
              <li><strong>$100</strong> &mdash; A generous head start on a monthly practice</li>
            </ul>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Purchase</span>
          </div>
          <div class="gift-card">
            <h3>Custom Amount</h3>
            <p>Set your own amount and let them choose their own path &mdash; whether that is a single sound bath or a full month of movement.</p>
            <ul>
              <li>Choose any amount from $25 to $500</li>
              <li>Delivered instantly via email or printable at home</li>
              <li>Personalize with a message</li>
            </ul>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Purchase</span>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 3 &mdash; How It Works</div>

      <div class="copy-preview">
        <div class="steps-row">
          <div class="step-item">
            <div class="step-num">1</div>
            <h4>Choose an amount</h4>
            <p>Select a preset denomination or enter a custom value.</p>
          </div>
          <div class="step-item">
            <div class="step-num">2</div>
            <h4>Personalize your message</h4>
            <p>Add a note to make it feel like you. Gift cards are delivered as beautifully formatted digital cards bearing the Marigold mark.</p>
          </div>
          <div class="step-item">
            <div class="step-num">3</div>
            <h4>Send or print</h4>
            <p>Gift cards are delivered instantly via email &mdash; or download a printable version to tuck into a card.</p>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 4 &mdash; Cross-sell</div>

      <div class="copy-preview" style="text-align: center;">
        <p><strong>Not sure what to give?</strong> Book a class for yourself and find out what they will love.</p>
        <span class="text-link">Explore our classes &rarr;</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 8: TESTIMONIALS -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Testimonials</h2>
    <p class="section-intro">Social proof from your community. These are placeholder quotes written in varied, realistic voices &mdash; replace them one by one as you collect real testimonials from students and corporate clients.</p>

    <div class="page-card">
      <div class="page-purpose">Builds trust and reduces booking anxiety. Real words from real people are the most persuasive marketing tool you have.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>

      <div class="copy-preview">
        <h1>What Our Community Says</h1>
      </div>

      <div class="layout-heading">Section 2 &mdash; Testimonial Grid</div>
      <div class="layout-desc">A staggered, two-column card grid on desktop (single column on mobile). Each card has a gold open-quote decorative mark, the quote itself in the heading typeface, and the person&rsquo;s name and context below.</div>

      <div class="copy-preview">
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>I came to Marigold because my doctor told me I needed to manage my stress. I stayed because it became the best part of my week. The studio feels like a deep breath &mdash; the moment I walk in, everything slows down.</blockquote>
            <div class="attribution">&mdash; Danielle K., member since 2024</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>I have tried yoga at three other studios and always felt like I was behind. Sara&rsquo;s classes are the first place I have not felt judged for modifying. She actually sees you.</blockquote>
            <div class="attribution">&mdash; Maria T., yoga student</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>The Friday sound bath is non-negotiable in my calendar now. I sleep better that night than any other night of the week. My husband has started asking when the next one is.</blockquote>
            <div class="attribution">&mdash; Jess M., sound bath regular</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>We hired Marigold for a six-week chair yoga series at our office. Attendance grew every week &mdash; by the end, people who had never done anything like it were asking when the next round started. It genuinely shifted the energy in our workplace.</blockquote>
            <div class="attribution">&mdash; Tom H., Office Manager, Millbrook Design Co.</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>I am a mom of three and I have maybe four hours a week that are truly mine. I spend two of them at Marigold. The Pilates classes have completely changed my posture and the way I carry stress. Priya is an incredible instructor.</blockquote>
            <div class="attribution">&mdash; Aisha R., Pilates student</div>
          </div>
          <div class="testimonial-card">
            <div class="quote-mark">&ldquo;</div>
            <blockquote>I bought my sister a gift card for her birthday not knowing what to expect. She has been going twice a week for three months now. Best gift I have ever given.</blockquote>
            <div class="attribution">&mdash; Lauren C.</div>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 3 &mdash; Call to Action</div>

      <div class="copy-preview" style="text-align: center;">
        <h2>Ready to start your own story?</h2>
        <span class="cta-btn">Book a Class</span>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 9: CONTACT -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Contact</h2>
    <p class="section-intro">A straightforward page with a contact form on one side and studio information on the other. Plus quick links for visitors who actually need to book a class or ask about corporate wellness.</p>

    <div class="page-card">
      <div class="page-purpose">The catch-all for anyone who has a question. Also serves as the entry point for corporate wellness inquiries and private session requests.</div>

      <div class="layout-heading">Section 1 &mdash; Page Header</div>

      <div class="copy-preview">
        <h1>Get in Touch</h1>
      </div>

      <div class="layout-heading">Section 2 &mdash; Contact Form + Studio Info</div>
      <div class="layout-desc">Two columns on desktop. Left: a contact form with fields for name, email, phone (optional), subject (dropdown), and message. Right: studio address, phone, email, hours, and a map placeholder. On mobile, the form appears above the info.</div>

      <div class="placeholder-note">Sara &mdash; replace the address, phone, email, and hours with your real studio details. The form submission is a placeholder (no backend) &mdash; we will connect it during the build phase.</div>

      <div class="copy-preview">
        <p>We would love to hear from you &mdash; whether you are a first-time visitor with questions, a longtime student with feedback, or an organization exploring corporate wellness. This is your open door.</p>

        <div class="contact-split">
          <div class="contact-form-preview">
            <div class="field"><label>Name</label><div class="input-mock">Your full name</div></div>
            <div class="field"><label>Email</label><div class="input-mock">your@email.com</div></div>
            <div class="field"><label>Phone (optional)</label><div class="input-mock">(555) 000-0000</div></div>
            <div class="field"><label>Subject</label><div class="input-mock">General Inquiry / Corporate Wellness / Private Sessions / Other</div></div>
            <div class="field"><label>Message</label><div class="textarea-mock">Tell us what is on your mind...</div></div>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px; margin-top: 8px;">Send Message</span>
          </div>
          <div class="studio-info">
            <h3>Marigold Wellness Studio</h3>
            <p>147 Elm Street<br>Millbrook, NY 12545</p>
            <p style="margin-top: 12px;"><strong>Phone:</strong> (845) 555-0178<br><strong>Email:</strong> hello@marigoldwellness.com</p>
            <p style="margin-top: 12px;"><strong>Studio Hours:</strong></p>
            <table>
              <tr><td>Monday &ndash; Friday</td><td>6:30 AM &ndash; 8:30 PM</td></tr>
              <tr><td>Saturday</td><td>8:30 AM &ndash; 5:00 PM</td></tr>
              <tr><td>Sunday</td><td>9:30 AM &ndash; 1:00 PM</td></tr>
            </table>
            <div style="margin-top: 16px; background: var(--pale-sage); border-radius: 6px; height: 140px; display: flex; align-items: center; justify-content: center; font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--warm-stone);">Map placeholder &mdash; Millbrook, NY</div>
          </div>
        </div>
      </div>

      <div class="layout-heading">Section 3 &mdash; Quick Links</div>
      <div class="layout-desc">Two cards directing visitors to booking (for those who do not actually need to contact you) and corporate wellness (for B2B inquiries).</div>

      <div class="copy-preview">
        <div class="gift-grid">
          <div class="gift-card" style="border-color: var(--warm-stone);">
            <h3>Looking to book a class?</h3>
            <p>You do not need to contact us first &mdash; browse the schedule and reserve your spot in a few clicks.</p>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">View Schedule &amp; Book</span>
          </div>
          <div class="gift-card" style="border-color: var(--warm-stone);">
            <h3>Corporate Wellness Inquiry?</h3>
            <p>We design on-site wellness programs for organizations of all sizes. Tell us about your team and we will build something that fits.</p>
            <span class="cta-btn" style="font-size: 12px; padding: 10px 20px;">Learn About Corporate Wellness</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- PAGE 10: EMAIL CAPTURE -->
<!-- ============================================================ -->
<section class="alt-bg">
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Email Capture</h2>
    <p class="section-intro">Email signup is not a standalone page &mdash; it appears in two forms across the site to capture interested visitors without being intrusive.</p>

    <div class="page-card">
      <div class="page-purpose">Builds your email list for ongoing communication. Two formats: a subtle inline band and a one-time pop-up for desktop visitors.</div>

      <div class="layout-heading">Inline Version (Homepage + Every Page Footer)</div>
      <div class="layout-desc">A full-width band at the bottom of the homepage and repeated in the footer of every page. Simple: a headline, one line of copy, and an email field with a subscribe button.</div>

      <div class="copy-preview">
        <div class="email-band">
          <h3>Stay connected</h3>
          <p>New classes, workshops, and studio updates &mdash; delivered to your inbox, never to your spam folder.</p>
          <div class="email-row">
            <div class="email-input">Your email address</div>
            <div class="email-btn">Subscribe</div>
          </div>
        </div>
      </div>

      <div class="layout-heading">Pop-up Version (Desktop Only, First Visit)</div>
      <div class="layout-desc">A centered pop-up that appears after 30 seconds on desktop (not on mobile &mdash; too intrusive on small screens). Offers a free drop-in class as an incentive to sign up. Has a close button in the top right.</div>

      <div class="placeholder-note">Sara &mdash; the free drop-in class is a placeholder incentive. Swap it for whatever offer makes sense: 10% off first class pack, free mat rental, or simply &ldquo;join our community&rdquo; without an offer.</div>

      <div class="copy-preview" style="text-align: center; border: 2px solid var(--warm-stone); border-radius: 12px; padding: 40px 32px; position: relative;">
        <div style="position: absolute; top: 12px; right: 16px; font-family: 'DM Sans', sans-serif; font-size: 18px; color: var(--warm-stone); cursor: pointer;">&times;</div>
        <h3>Your first class is on us.</h3>
        <p>Sign up for the Marigold newsletter and receive a free drop-in class &mdash; no strings, no spam, just a reason to show up.</p>
        <div class="email-row" style="justify-content: center; margin-top: 16px;">
          <div class="email-input" style="background: var(--white);">Your email address</div>
          <div class="email-btn">Claim Your Free Class</div>
        </div>
      </div>

      <div class="layout-heading" style="margin-top: 32px;">Contextual Variants</div>
      <div class="layout-desc">Additional inline signup copy that can appear on specific pages where it feels natural:</div>

      <div class="copy-preview">
        <p style="margin-bottom: 8px;"><strong>On the Classes page:</strong></p>
        <h3>Never miss a new class</h3>
        <p>We add new sessions and workshops regularly. Be the first to know.</p>
        <div class="section-divider"></div>
        <p style="margin-bottom: 8px;"><strong>On the About page:</strong></p>
        <h3>Follow our journey</h3>
        <p>Studio news, instructor spotlights, and the occasional reflection on why this work matters.</p>
      </div>

    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- OPTIONAL ADD-ONS -->
<!-- ============================================================ -->
<section>
  <div class="container">
    <div class="gold-rule"></div>
    <h2 class="section-title">Optional Add-ons</h2>
    <p class="section-intro">These are features not currently in the plan &mdash; but they could be valuable additions if you are interested. No commitment needed now. Just let us know if any of these appeal to you and we can include them in the build.</p>

    <div class="addon-card">
      <h3>1. Blog / Studio Journal</h3>
      <div class="addon-what">A simple journal section on the site with templated post pages. We would launch it with 2&ndash;3 placeholder posts &mdash; for example, &ldquo;What to Expect at Your First Sound Bath,&rdquo; &ldquo;5 Minutes of Breathwork You Can Do at Your Desk,&rdquo; and &ldquo;Meet Our Newest Instructor.&rdquo; Posts would appear in a card grid on the journal index page, with individual post pages following a clean article layout.</div>
      <div class="addon-why"><strong>Why it could be valuable:</strong> A blog supports SEO by creating keyword-rich content that brings new visitors through organic search. It also gives the studio a voice between classes &mdash; a place to share seasonal offerings, instructor spotlights, or wellness tips. Long-term, it is the single most effective lever for organic traffic growth.</div>
    </div>

    <div class="addon-card">
      <h3>2. FAQ Page</h3>
      <div class="addon-what">A standalone FAQ page with expandable accordion sections organized by topic (First Visit, Booking &amp; Cancellation, Pricing, Corporate Wellness). Content would be placeholder but written in proper style, ready for you to update.</div>
      <div class="addon-why"><strong>Why it could be valuable:</strong> Reduces the number of contact form messages by answering common questions up front. Especially helpful for new visitors who have never been to a yoga or Pilates studio. Also supports SEO through question-based content that matches how people search. Currently, a small FAQ exists on the Pricing page &mdash; a standalone page would expand this significantly.</div>
    </div>

    <div class="addon-card">
      <h3>3. Online Shop (Merchandise / Retail)</h3>
      <div class="addon-what">A simple shop page with a product card grid &mdash; 4 to 6 placeholder items (branded water bottle, mat bag, candle, gift box). Each product card would show an image, name, price, and a &ldquo;Buy&rdquo; button linking to an external checkout. No native e-commerce needed.</div>
      <div class="addon-why"><strong>Why it could be valuable:</strong> Extends the brand beyond the studio walls. Retail creates a secondary revenue stream and strengthens brand identity &mdash; when a student carries a Marigold tote or lights a Marigold candle at home, it extends the studio&rsquo;s presence. Also creates gift-giving options beyond gift cards.</div>
    </div>

    <div class="addon-card">
      <h3>4. Student Loyalty / Rewards Program</h3>
      <div class="addon-what">A dedicated page or section describing a loyalty program &mdash; for example, attend 10 classes and receive a free drop-in, or refer a friend and both receive a discount. The page would explain the structure and include a signup call to action.</div>
      <div class="addon-why"><strong>Why it could be valuable:</strong> Retention is as important as acquisition. A loyalty program gives existing students a reason to stay consistent and refer friends. Word-of-mouth referrals are especially powerful for boutique studios in close-knit communities like Millbrook.</div>
    </div>

  </div>
</section>

<!-- ============================================================ -->
<!-- NEXT STEPS -->
<!-- ============================================================ -->
<section class="dark-bg" style="padding: 80px 0;">
  <div class="container">
    <div class="next-steps-box" style="background: transparent;">
      <div class="gold-rule-center"></div>
      <h2>Next Steps</h2>
      <p>This report contains the complete architecture and all the copy for your website. Before we start building, we need your feedback.</p>
      <ol>
        <li><strong>Read through each page&rsquo;s copy carefully.</strong> Does it sound like you? Does it sound like Marigold? Flag anything that feels off &mdash; a word, a phrase, an entire section.</li>
        <li><strong>Review the site structure.</strong> Are the pages organized the way you would expect? Is anything missing? Is anything unnecessary?</li>
        <li><strong>Check the placeholder content.</strong> Bios, testimonials, pricing, schedule, contact details &mdash; all of these need your real information eventually. For now, just confirm the format and tone work for you.</li>
        <li><strong>Consider the optional add-ons.</strong> If any of the four options interest you, let us know and we will include them in the build.</li>
        <li><strong>Tell us what you think.</strong> Approve to move forward, or send us your changes. There is no wrong answer &mdash; this is your studio and your voice.</li>
      </ol>
      <div class="gold-rule-center" style="margin-top: 40px;"></div>
      <p style="margin-top: 24px; font-size: 14px; opacity: 0.6;">Marigold Wellness Studio &mdash; Gate 2 Review &mdash; March 2026</p>
    </div>
  </div>
</section>

</body>
</html>
