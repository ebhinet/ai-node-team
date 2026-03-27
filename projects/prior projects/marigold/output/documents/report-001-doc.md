<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Marigold Wellness Studio — Brand Design Report</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=DM+Serif+Display&family=Instrument+Serif&family=Inter:wght@300;400;500;600;700&family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap" rel="stylesheet">
<style>
  /* ===== RESET & BASE ===== */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { font-size: 16px; scroll-behavior: smooth; }
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #2D2D2D;
    background: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  /* ===== LAYOUT ===== */
  .container { max-width: 900px; margin: 0 auto; padding: 0 32px; }
  .section { padding: 72px 0; }
  .section + .section { border-top: 1px solid #E8E4E0; }

  /* ===== COVER PAGE ===== */
  .cover {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(175deg, #F5EDE3 0%, #FAFAFA 60%);
    padding: 80px 32px;
    position: relative;
  }
  .cover-flower {
    width: 120px;
    height: 120px;
    margin-bottom: 40px;
    opacity: 0.25;
  }
  .cover h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 3rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #3C2415;
    margin-bottom: 8px;
  }
  .cover .cover-subtitle {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #9A8E82;
    margin-bottom: 56px;
  }
  .cover .cover-divider {
    width: 48px;
    height: 2px;
    background: #D4942A;
    margin: 0 auto 56px;
  }
  .cover .cover-meta {
    font-size: 0.95rem;
    color: #6B6259;
    line-height: 2;
  }
  .cover .cover-meta strong { font-weight: 600; color: #3C2415; }

  /* ===== TYPOGRAPHY ===== */
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.75rem;
    color: #3C2415;
    margin-bottom: 12px;
    letter-spacing: 0.02em;
  }
  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    color: #3C2415;
    margin-bottom: 8px;
    margin-top: 40px;
  }
  h4 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #5C5147;
    margin-bottom: 6px;
    margin-top: 28px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.8rem;
  }
  p { margin-bottom: 16px; color: #4A4440; }
  .lead {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #5C5147;
    margin-bottom: 24px;
  }
  .section-label {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9A8E82;
    margin-bottom: 8px;
  }

  /* ===== OPTION HEADER ===== */
  .option-header {
    padding: 56px 0 40px;
    text-align: center;
  }
  .option-header .option-tag {
    display: inline-block;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 100px;
    margin-bottom: 16px;
  }
  .option-header h2 {
    font-size: 2.2rem;
    margin-bottom: 16px;
    text-align: center;
  }
  .option-header .option-desc {
    max-width: 620px;
    margin: 0 auto;
    font-size: 1.05rem;
    color: #6B6259;
    line-height: 1.8;
  }

  /* ===== COLOR SWATCHES ===== */
  .palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 20px;
    margin: 24px 0 40px;
  }
  .swatch-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    transition: transform 0.2s;
  }
  .swatch-card:hover { transform: translateY(-2px); }
  .swatch-color {
    height: 100px;
    width: 100%;
  }
  .swatch-info {
    padding: 14px 16px;
  }
  .swatch-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: #3C2415;
    margin-bottom: 4px;
  }
  .swatch-desc {
    font-size: 0.78rem;
    color: #7A7067;
    line-height: 1.5;
  }

  /* ===== TYPOGRAPHY SAMPLES ===== */
  .type-sample-card {
    background: #fff;
    border-radius: 14px;
    padding: 36px 32px;
    margin: 16px 0;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .type-label {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #9A8E82;
    margin-bottom: 12px;
  }
  .type-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    color: #7A7067;
    line-height: 1.6;
    margin-top: 12px;
  }
  .sample-button {
    display: inline-block;
    padding: 14px 36px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-decoration: none;
    margin-top: 16px;
    border: none;
    cursor: pointer;
  }

  /* ===== LOGO SECTION ===== */
  .logo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
  }
  .logo-card {
    border-radius: 14px;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 280px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .logo-card svg {
    max-width: 160px;
    max-height: 160px;
    margin-bottom: 20px;
  }
  .logo-card .logo-card-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 8px;
    opacity: 0.6;
  }
  .logo-icon-row {
    display: flex;
    gap: 28px;
    justify-content: center;
    align-items: center;
    margin: 24px 0;
    padding: 32px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .logo-icon-row svg { width: 48px; height: 48px; }

  /* ===== IMAGERY DIRECTION ===== */
  .imagery-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 24px 0;
  }
  .imagery-card {
    background: #fff;
    border-radius: 14px;
    padding: 28px 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .imagery-card h5 {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    color: #3C2415;
    margin-bottom: 8px;
  }
  .imagery-card p {
    font-size: 0.85rem;
    line-height: 1.6;
    color: #6B6259;
    margin-bottom: 0;
  }
  .avoid-card {
    background: #FFF8F5;
    border-left: 3px solid #D4942A;
  }

  /* ===== COMPARISON SECTION ===== */
  .comparison-bar-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 32px 0;
  }
  .comparison-bar-col { text-align: center; }
  .comparison-bar-col .bar-label {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    color: #3C2415;
    margin-bottom: 12px;
  }
  .comparison-bars {
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-radius: 10px;
    overflow: hidden;
  }
  .comparison-bars .cbar {
    height: 28px;
    width: 100%;
    border-radius: 6px;
  }
  .comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 32px 0;
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }
  .comparison-table th {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    padding: 16px 20px;
    background: #F5EDE3;
    color: #3C2415;
    border-bottom: 1px solid #E8E4E0;
  }
  .comparison-table td {
    padding: 14px 20px;
    font-size: 0.88rem;
    color: #4A4440;
    border-bottom: 1px solid #F0ECE8;
    vertical-align: top;
    line-height: 1.6;
  }
  .comparison-table tr:last-child td { border-bottom: none; }

  /* ===== NEXT STEPS ===== */
  .next-steps-box {
    background: #fff;
    border-radius: 14px;
    padding: 40px 36px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin: 24px 0;
  }
  .next-steps-box ol {
    padding-left: 20px;
    margin-top: 12px;
  }
  .next-steps-box li {
    margin-bottom: 12px;
    color: #4A4440;
    line-height: 1.7;
  }

  /* ===== UTILITIES ===== */
  .divider {
    width: 48px;
    height: 2px;
    background: #D4942A;
    margin: 0 auto 40px;
  }
  .text-center { text-align: center; }
  .mt-0 { margin-top: 0; }
  .mt-24 { margin-top: 24px; }
  .mb-0 { margin-bottom: 0; }
  .mb-8 { margin-bottom: 8px; }
  .mb-40 { margin-bottom: 40px; }

  /* ===== PRINT ===== */
  @media print {
    .cover { page-break-after: always; }
    .section { page-break-inside: avoid; }
    .option-section { page-break-before: always; }
    body { background: #fff; }
    .swatch-card, .type-sample-card, .logo-card, .imagery-card, .next-steps-box, .comparison-table {
      box-shadow: none;
      border: 1px solid #E8E4E0;
    }
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 640px) {
    .cover h1 { font-size: 2rem; }
    .option-header h2 { font-size: 1.6rem; }
    .palette-grid { grid-template-columns: repeat(2, 1fr); }
    .logo-grid { grid-template-columns: 1fr; }
    .imagery-grid { grid-template-columns: 1fr; }
    .comparison-bar-row { grid-template-columns: 1fr; }
    .container { padding: 0 20px; }
  }
</style>
</head>
<body>

<!-- ========================================== -->
<!-- COVER PAGE                                 -->
<!-- ========================================== -->
<div class="cover">
  <!-- Decorative marigold silhouette -->
  <svg class="cover-flower" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="1" fill="#D4942A">
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(0 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(40 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(80 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(120 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(160 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(200 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(240 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(280 60 60)" />
      <ellipse cx="60" cy="30" rx="10" ry="26" transform="rotate(320 60 60)" />
      <circle cx="60" cy="60" r="12" fill="#B5654A" />
    </g>
  </svg>
  <h1>Marigold Wellness Studio</h1>
  <div class="cover-subtitle">Brand Design Report</div>
  <div class="cover-divider"></div>
  <div class="cover-meta">
    <strong>Prepared for Sara Okonkwo</strong><br>
    March 27, 2026<br><br>
    Three brand direction options for your review
  </div>
</div>

<!-- ========================================== -->
<!-- INTRODUCTION                               -->
<!-- ========================================== -->
<div class="section">
  <div class="container">
    <div class="section-label">Welcome</div>
    <h2>Hi Sara,</h2>
    <p class="lead">This report presents three different visual directions for Marigold Wellness Studio. Each option includes a color palette, font choices, a logo concept, and guidance for photography and imagery. They are all built around your vision of a studio that feels warm, calm, grounded, and distinctive.</p>
    <p>There is no wrong choice here. Each direction takes a different approach to expressing your studio's personality. As you look through them, think about which one <em>feels</em> most like Marigold to you -- the colors, the fonts, the overall mood. You can pick one direction as-is, mix elements you love from different options, or share any thoughts and we will refine from there.</p>
    <p>Take your time. This is about finding what feels right.</p>
  </div>
</div>

<!-- ========================================== -->
<!-- OPTION A — WARM / EARTHY                   -->
<!-- ========================================== -->
<div class="option-section">
  <div class="section">
    <div class="container">
      <div class="option-header">
        <span class="option-tag" style="background: #FDF6EC; color: #D4942A;">Option A</span>
        <h2 style="color: #3C2415;">Warm &amp; Earthy</h2>
        <p class="option-desc">This direction draws inspiration from sun-warmed clay, golden marigold petals, and the feeling of a pottery studio filled with natural light. It is warm, grounded, and full of character.</p>
      </div>

      <!-- COLORS -->
      <h4>Color Palette</h4>
      <h3 class="mt-0">The colors of your studio</h3>
      <p>This palette is built around warm golds and earthy terracottas -- like sunlight on clay. It avoids the generic beige-and-sage-green look and instead feels rich and distinctive.</p>

      <div class="palette-grid">
        <div class="swatch-card">
          <div class="swatch-color" style="background: #D4942A;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Marigold Gold</div>
            <div class="swatch-desc">Your signature color. Used for buttons, highlights, and anywhere you want to draw the eye. Bold and confident.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #B5654A;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Terracotta Clay</div>
            <div class="swatch-desc">A warm, earthy red-brown. Think fired pottery. Used for backgrounds and supporting design elements.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #3C2415;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Deep Umber</div>
            <div class="swatch-desc">A rich dark brown used for text and headings. Warmer and more inviting than black.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #F5EDE3;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Warm Cream</div>
            <div class="swatch-desc">The main background color. A soft, warm off-white with a hint of gold -- never stark or clinical.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #8A9A7B;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Dried Sage</div>
            <div class="swatch-desc">A quiet, dusty green used sparingly for accents. Just a whisper of nature, not a main character.</div>
          </div>
        </div>
      </div>

      <!-- TYPOGRAPHY -->
      <h4>Typography</h4>
      <h3 class="mt-0">How your words will look</h3>
      <p>Headings use a sturdy, rounded serif font that feels established and warm. Body text uses a clean, friendly sans-serif that is easy to read on any device.</p>

      <div class="type-sample-card" style="background: #F5EDE3;">
        <div class="type-label">Headings</div>
        <div style="font-family: 'DM Serif Display', serif; font-size: 2.4rem; color: #3C2415; line-height: 1.2; margin-bottom: 8px;">
          Find Your Practice
        </div>
        <div style="font-family: 'DM Serif Display', serif; font-size: 1.5rem; color: #B5654A; line-height: 1.3;">
          Yoga, Pilates &amp; Sound Bath in Millbrook
        </div>
        <div class="type-desc">Sturdy and grounded with rounded letterforms. This font has real weight to it -- nothing thin or wispy. It feels like a hand-painted sign on a warm, well-loved building.</div>
      </div>

      <div class="type-sample-card">
        <div class="type-label">Body Text</div>
        <div style="font-family: 'Source Sans 3', sans-serif; font-size: 1.05rem; color: #3C2415; line-height: 1.7;">
          Marigold Wellness Studio is a place to slow down. Whether you are rolling out your mat for the first time or deepening a long-standing practice, our classes are built around the idea that wellness is personal, not performative. Come as you are.
        </div>
        <div class="type-desc">Clean and warm, easy to read on phones and computers alike. Friendly without being casual.</div>
      </div>

      <div class="type-sample-card" style="background: #F5EDE3;">
        <div class="type-label">Button Sample</div>
        <div style="margin-top: 8px;">
          <span class="sample-button" style="background: #D4942A; color: #F5EDE3; font-family: 'Source Sans 3', sans-serif;">Book a Class</span>
        </div>
      </div>

      <!-- LOGO -->
      <h4>Logo Concept</h4>
      <h3 class="mt-0">A stylized marigold bloom</h3>
      <p>This logo uses a semi-geometric marigold flower -- structured but with an organic warmth. The layered petals create depth and a sense of unfolding, and the top-down view makes the flower feel open and welcoming. The wordmark uses the same sturdy serif font as the headings.</p>

      <div class="logo-grid">
        <!-- Light background -->
        <div class="logo-card" style="background: #F5EDE3;">
          <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" width="200" height="260">
            <!-- Outer petals -->
            <g transform="translate(100,90)">
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(0)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(36)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(72)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(108)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(144)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(180)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(216)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(252)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(288)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(324)" opacity="0.9"/>
              <!-- Inner petals -->
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(18)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(54)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(90)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(126)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(162)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(198)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(234)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(270)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(306)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(342)" opacity="0.85"/>
              <!-- Center -->
              <circle r="10" fill="#3C2415" opacity="0.7"/>
              <circle r="6" fill="#B5654A"/>
            </g>
            <!-- Wordmark -->
            <text x="100" y="155" text-anchor="middle" font-family="'DM Serif Display', serif" font-size="22" fill="#3C2415" letter-spacing="3">MARIGOLD</text>
            <line x1="55" y1="164" x2="145" y2="164" stroke="#D4942A" stroke-width="1"/>
            <text x="100" y="180" text-anchor="middle" font-family="'Source Sans 3', sans-serif" font-size="9.5" fill="#3C2415" letter-spacing="4.5" font-weight="600">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #3C2415;">On light background</div>
        </div>

        <!-- Dark background -->
        <div class="logo-card" style="background: #3C2415;">
          <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" width="200" height="260">
            <g transform="translate(100,90)">
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(0)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(36)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(72)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(108)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(144)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(180)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(216)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(252)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(288)" opacity="0.9"/>
              <ellipse rx="14" ry="38" fill="#D4942A" transform="rotate(324)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(18)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(54)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(90)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(126)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(162)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(198)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(234)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(270)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(306)" opacity="0.85"/>
              <ellipse rx="10" ry="26" fill="#B5654A" transform="rotate(342)" opacity="0.85"/>
              <circle r="10" fill="#5C3A20" opacity="0.7"/>
              <circle r="6" fill="#B5654A"/>
            </g>
            <text x="100" y="155" text-anchor="middle" font-family="'DM Serif Display', serif" font-size="22" fill="#F5EDE3" letter-spacing="3">MARIGOLD</text>
            <line x1="55" y1="164" x2="145" y2="164" stroke="#D4942A" stroke-width="1"/>
            <text x="100" y="180" text-anchor="middle" font-family="'Source Sans 3', sans-serif" font-size="9.5" fill="#F5EDE3" letter-spacing="4.5" font-weight="600">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #F5EDE3;">On dark background</div>
        </div>
      </div>

      <!-- Icon-only row -->
      <div class="logo-icon-row">
        <div style="text-align:center;">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
            <g transform="translate(40,40)">
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(0)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(36)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(72)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(108)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(144)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(180)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(216)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(252)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(288)" opacity="0.9"/>
              <ellipse rx="10" ry="26" fill="#D4942A" transform="rotate(324)" opacity="0.9"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(18)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(54)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(90)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(126)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(162)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(198)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(234)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(270)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(306)" opacity="0.85"/>
              <ellipse rx="7" ry="18" fill="#B5654A" transform="rotate(342)" opacity="0.85"/>
              <circle r="7" fill="#3C2415" opacity="0.7"/>
              <circle r="4" fill="#B5654A"/>
            </g>
          </svg>
          <div style="font-size: 0.7rem; color: #9A8E82; margin-top: 8px; font-weight: 500; letter-spacing: 0.1em;">STANDALONE ICON</div>
        </div>
      </div>

      <!-- IMAGERY -->
      <h4>Imagery Direction</h4>
      <h3 class="mt-0">The visual world of Option A</h3>
      <p>Think morning light through a studio window. A mat with slight wear. Hands in a mudra. Everything warm, grounded, and real.</p>

      <div class="imagery-grid">
        <div class="imagery-card">
          <h5>Mood &amp; Lighting</h5>
          <p>Warm, golden, lived-in. Natural light is always the source -- golden hour tones, soft window light. Shadows are present but gentle. The studio should feel like a place people actually practice in.</p>
        </div>
        <div class="imagery-card">
          <h5>What to Photograph</h5>
          <p>Close-up details: hands, bare feet on a mat, a singing bowl's rim, folded towels, dried flowers. People mid-practice (not facing the camera). Small groups shot from behind, emphasizing togetherness.</p>
        </div>
        <div class="imagery-card">
          <h5>Color Treatment</h5>
          <p>Images lean warm in editing. Boosted golds and ambers, slightly desaturated greens, soft matte shadows. Stock photos should feel like they belong alongside the gold-and-terracotta palette.</p>
        </div>
        <div class="imagery-card avoid-card">
          <h5>What to Avoid</h5>
          <p>No posed photos of people smiling at the camera. No busy or cluttered compositions. No cold or corporate imagery. No generic sage-and-beige aesthetic. Every image should have warmth and intention.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- ========================================== -->
<!-- OPTION B — ELEVATED MODERN                 -->
<!-- ========================================== -->
<div class="option-section">
  <div class="section">
    <div class="container">
      <div class="option-header">
        <span class="option-tag" style="background: #F5F0E8; color: #C4887B;">Option B</span>
        <h2 style="color: #3B3230;">Elevated Modern</h2>
        <p class="option-desc">This direction feels like a boutique hotel meets a wellness studio -- refined, curated, and quietly confident. It uses restraint and sophistication to stand out from typical studio branding.</p>
      </div>

      <!-- COLORS -->
      <h4>Color Palette</h4>
      <h3 class="mt-0">The colors of your studio</h3>
      <p>This palette is built on deliberate restraint. A warm ivory base, a signature dusty terracotta-rose, and rich dark tones that feel sophisticated without being cold. Every color earns its place.</p>

      <div class="palette-grid">
        <div class="swatch-card">
          <div class="swatch-color" style="background: #F5F0E8;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Warm Ivory</div>
            <div class="swatch-desc">The foundation of every page. Clean and contemporary with the warmth of natural linen -- never sterile.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #C4887B;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Terracotta Rose</div>
            <div class="swatch-desc">Your signature color. A dusty, elevated terracotta-pink for buttons and brand moments. Warm and intentional.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #3B3230;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Charcoal Umber</div>
            <div class="swatch-desc">A warm brown-black for text and structure. More sophisticated than dark brown, warmer than charcoal.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #B8AFA6;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Warm Stone</div>
            <div class="swatch-desc">A soft gray-beige for dividers, borders, and breathing space between sections. Quiet and calming.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #C9A85C;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Burnished Gold</div>
            <div class="swatch-desc">A muted antique gold for subtle accents. Connects to the marigold flower without being bright yellow. Used sparingly.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #D5D8CE;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Pale Sage</div>
            <div class="swatch-desc">A barely-there hint of green for large background areas. Reads more as a soft neutral than a color.</div>
          </div>
        </div>
      </div>

      <!-- TYPOGRAPHY -->
      <h4>Typography</h4>
      <h3 class="mt-0">How your words will look</h3>
      <p>Headings use a sharp, confident serif font with a magazine-quality feel. Body text uses a clean, modern sans-serif that is warm and easy to read. Together, they feel polished and editorial.</p>

      <div class="type-sample-card" style="background: #F5F0E8;">
        <div class="type-label">Headings</div>
        <div style="font-family: 'Instrument Serif', serif; font-size: 2.6rem; color: #3B3230; line-height: 1.2; margin-bottom: 8px;">
          Find Your Practice
        </div>
        <div style="font-family: 'Instrument Serif', serif; font-size: 1.6rem; color: #C4887B; line-height: 1.3;">
          Yoga, Pilates &amp; Sound Bath in Millbrook
        </div>
        <div class="type-desc">Sharp and confident with a contemporary, editorial quality. The thick strokes give it real presence while the fine details add elegance. It feels like the title page of a beautiful magazine.</div>
      </div>

      <div class="type-sample-card">
        <div class="type-label">Body Text</div>
        <div style="font-family: 'DM Sans', sans-serif; font-size: 1.05rem; color: #3B3230; line-height: 1.7;">
          Marigold Wellness Studio is a place to slow down. Whether you are rolling out your mat for the first time or deepening a long-standing practice, our classes are built around the idea that wellness is personal, not performative. Come as you are.
        </div>
        <div class="type-desc">Modern and geometric, but with a subtle warmth that keeps it friendly. Effortless to read without being invisible.</div>
      </div>

      <div class="type-sample-card" style="background: #F5F0E8;">
        <div class="type-label">Button Sample</div>
        <div style="margin-top: 8px;">
          <span class="sample-button" style="background: #C4887B; color: #F5F0E8; font-family: 'DM Sans', sans-serif; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500;">Book a Class</span>
        </div>
      </div>

      <!-- LOGO -->
      <h4>Logo Concept</h4>
      <h3 class="mt-0">A geometric marigold rosette</h3>
      <p>This logo distills the marigold flower into a precise, symmetric rosette -- nine overlapping petals arranged in a perfect circle, like a mandala. It is clean, modern, and quietly powerful. The geometric construction signals refinement and intention.</p>

      <div class="logo-grid">
        <!-- Light background -->
        <div class="logo-card" style="background: #F5F0E8;">
          <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" width="200" height="260">
            <g transform="translate(100,88)">
              <!-- 9 geometric petals, each rotated 40deg -->
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(0)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(40)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(80)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(120)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(160)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(200)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(240)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(280)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#3B3230" transform="rotate(320)" opacity="0.75"/>
              <!-- Central disc -->
              <circle r="6" fill="#C9A85C"/>
            </g>
            <text x="100" y="152" text-anchor="middle" font-family="'Instrument Serif', serif" font-size="21" fill="#3B3230" letter-spacing="4" text-transform="uppercase">MARIGOLD</text>
            <text x="100" y="172" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="8.5" fill="#3B3230" letter-spacing="4.5" font-weight="500" text-transform="uppercase">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #3B3230;">On light background</div>
        </div>

        <!-- Dark background -->
        <div class="logo-card" style="background: #3B3230;">
          <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" width="200" height="260">
            <g transform="translate(100,88)">
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(0)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(40)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(80)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(120)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(160)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(200)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(240)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(280)" opacity="0.75"/>
              <ellipse rx="9" ry="32" fill="#F5F0E8" transform="rotate(320)" opacity="0.75"/>
              <circle r="6" fill="#C9A85C"/>
            </g>
            <text x="100" y="152" text-anchor="middle" font-family="'Instrument Serif', serif" font-size="21" fill="#F5F0E8" letter-spacing="4">MARIGOLD</text>
            <text x="100" y="172" text-anchor="middle" font-family="'DM Sans', sans-serif" font-size="8.5" fill="#F5F0E8" letter-spacing="4.5" font-weight="500">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #F5F0E8;">On dark background</div>
        </div>
      </div>

      <!-- Accent color version + icon -->
      <div class="logo-icon-row">
        <div style="text-align:center;">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
            <g transform="translate(40,40)">
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(0)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(40)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(80)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(120)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(160)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(200)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(240)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(280)" opacity="0.75"/>
              <ellipse rx="7" ry="24" fill="#C4887B" transform="rotate(320)" opacity="0.75"/>
              <circle r="5" fill="#C9A85C"/>
            </g>
          </svg>
          <div style="font-size: 0.7rem; color: #9A8E82; margin-top: 8px; font-weight: 500; letter-spacing: 0.1em;">STANDALONE ICON</div>
        </div>
      </div>

      <!-- IMAGERY -->
      <h4>Imagery Direction</h4>
      <h3 class="mt-0">The visual world of Option B</h3>
      <p>Think editorial calm. Every image feels carefully composed and intentional -- aspirational but attainable, polished but never sterile.</p>

      <div class="imagery-grid">
        <div class="imagery-card">
          <h5>Mood &amp; Lighting</h5>
          <p>Quiet confidence. Still, composed, and intentional. Soft natural light with gentle shadows and warmth. Late morning or golden hour quality. The feeling of a carefully considered moment.</p>
        </div>
        <div class="imagery-card">
          <h5>What to Photograph</h5>
          <p>Clean studio interiors with natural materials. People mid-practice with eyes closed or gaze averted. Detail shots: hands on a mat, light through a window, texture of a bolster. The Millbrook streetscape.</p>
        </div>
        <div class="imagery-card">
          <h5>Color Treatment</h5>
          <p>Desaturated but warm. Muted, tonal, with lowered contrast and lifted blacks. The photographs should feel like they exist in the same curated, restrained world as the color palette.</p>
        </div>
        <div class="imagery-card avoid-card">
          <h5>What to Avoid</h5>
          <p>No posed stock photography. No high-saturation or neon colors. No overhead flat-lay compositions. No dark or moody imagery. No generic beige lifestyle aesthetic. No athletic or fitness-focused imagery.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- ========================================== -->
<!-- OPTION C — HANDCRAFTED / ORGANIC           -->
<!-- ========================================== -->
<div class="option-section">
  <div class="section">
    <div class="container">
      <div class="option-header">
        <span class="option-tag" style="background: #F4EDE4; color: #C47B2B;">Option C</span>
        <h2 style="color: #3B2F2A;">Handcrafted &amp; Organic</h2>
        <p class="option-desc">This direction feels like it was made by hand -- like a ceramics studio, a bookbinder's workshop, or a hand-lettered sign on a beloved local shop. Every element carries the mark of human touch and care.</p>
      </div>

      <!-- COLORS -->
      <h4>Color Palette</h4>
      <h3 class="mt-0">The colors of your studio</h3>
      <p>These colors feel like they were mixed from natural pigments -- plant dyes, clay, and mineral. Every tone is warm and slightly muted, as if hand-ground and applied with a brush.</p>

      <div class="palette-grid">
        <div class="swatch-card">
          <div class="swatch-color" style="background: #C47B2B;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Saffron Ink</div>
            <div class="swatch-desc">Your signature color. A deep saffron gold like dried marigold petals pressed into ink. Used for headings, the logo, and buttons.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #3B2F2A;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Charred Walnut</div>
            <div class="swatch-desc">A near-black brown with visible warmth, like burnt wood or walnut hull ink. Used for all text and dark areas.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #F4EDE4;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Parchment</div>
            <div class="swatch-desc">An unbleached paper tone for backgrounds. Not stark white, not beige -- the feeling of handmade paper with slight warmth.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #7A8B6F;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Lichen Green</div>
            <div class="swatch-desc">A dusty, wild green like moss on stone. Used for accents and dividers. Deliberately avoids the overused "wellness sage."</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #B8827A;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Dried Rose</div>
            <div class="swatch-desc">A weathered terracotta pink for highlights and decorative touches. Think clay that has been softened by rain.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #E8DFD0;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Raw Linen</div>
            <div class="swatch-desc">A half-step darker than Parchment for subtle background variation. Adds depth without contrast.</div>
          </div>
        </div>
        <div class="swatch-card">
          <div class="swatch-color" style="background: #E6A84D;"></div>
          <div class="swatch-info">
            <div class="swatch-name">Marigold Wash</div>
            <div class="swatch-desc">A lighter, translucent gold as if the saffron pigment were thinned with water. For gentle highlights and active states.</div>
          </div>
        </div>
      </div>

      <!-- TYPOGRAPHY -->
      <h4>Typography</h4>
      <h3 class="mt-0">How your words will look</h3>
      <p>Headings use a genuine handwritten font that feels like someone actually lettered them with care. Body text uses a warm, readable serif that anchors the hand-drawn personality with credibility.</p>

      <div class="type-sample-card" style="background: #F4EDE4;">
        <div class="type-label">Headings</div>
        <div style="font-family: 'Caveat', cursive; font-size: 3rem; color: #3B2F2A; line-height: 1.2; margin-bottom: 8px;">
          Find Your Practice
        </div>
        <div style="font-family: 'Source Serif 4', serif; font-size: 1.4rem; color: #C47B2B; line-height: 1.3; font-weight: 600;">
          Yoga, Pilates &amp; Sound Bath in Millbrook
        </div>
        <div class="type-desc">Personal and spontaneous, like a hand-lettered sign on the studio door. The slight bounce and irregularity give it genuine character -- this was made by a person, not a machine.</div>
      </div>

      <div class="type-sample-card">
        <div class="type-label">Body Text</div>
        <div style="font-family: 'Source Serif 4', serif; font-size: 1.05rem; color: #3B2F2A; line-height: 1.7;">
          Marigold Wellness Studio is a place to slow down. Whether you are rolling out your mat for the first time or deepening a long-standing practice, our classes are built around the idea that wellness is personal, not performative. Come as you are.
        </div>
        <div class="type-desc">Warm and approachable with just enough substance to feel grounded. Reads beautifully at any size -- like a letter from a friend who happens to write well.</div>
      </div>

      <div class="type-sample-card" style="background: #F4EDE4;">
        <div class="type-label">Button Sample</div>
        <div style="margin-top: 8px;">
          <span class="sample-button" style="background: #C47B2B; color: #F4EDE4; font-family: 'Source Serif 4', serif; font-weight: 600;">Book a Class</span>
        </div>
      </div>

      <!-- LOGO -->
      <h4>Logo Concept</h4>
      <h3 class="mt-0">A hand-drawn marigold</h3>
      <p>This logo is an artist's sketch of a marigold flower -- loose, expressive, and full of character. The line work varies in weight as if drawn with a felt-tip pen in a single confident pass. The imperfections are the point: this is a studio where things are made with human hands and human attention.</p>

      <div class="logo-grid">
        <!-- Light background -->
        <div class="logo-card" style="background: #F4EDE4;">
          <svg viewBox="0 0 200 270" xmlns="http://www.w3.org/2000/svg" width="200" height="270">
            <!-- Hand-drawn marigold with varying stroke weights -->
            <g transform="translate(100,82)" fill="none" stroke="#3B2F2A">
              <!-- Outer petals - irregular, hand-drawn feel -->
              <path d="M0,-40 C5,-38 12,-25 8,-15 C4,-5 2,-2 0,0" stroke-width="2.2" opacity="0.9"/>
              <path d="M0,-40 C-4,-37 -10,-26 -7,-15 C-4,-6 -1,-2 0,0" stroke-width="1.8" opacity="0.9"/>
              <path d="M28,-30 C26,-26 20,-17 12,-10 C6,-5 2,-2 0,0" stroke-width="2.5" opacity="0.85"/>
              <path d="M28,-30 C24,-28 15,-20 10,-12 C5,-5 2,-1 0,0" stroke-width="1.6" opacity="0.85"/>
              <path d="M40,-5 C36,-4 25,-2 16,2 C8,5 3,2 0,0" stroke-width="2.3" opacity="0.9"/>
              <path d="M38,-10 C34,-8 24,-4 15,0 C7,3 2,1 0,0" stroke-width="1.7" opacity="0.85"/>
              <path d="M32,25 C28,22 19,14 12,8 C5,3 2,1 0,0" stroke-width="2.1" opacity="0.9"/>
              <path d="M35,20 C30,18 21,12 13,6 C6,2 2,1 0,0" stroke-width="1.9" opacity="0.85"/>
              <path d="M8,40 C7,35 5,24 3,14 C1,6 1,2 0,0" stroke-width="2.4" opacity="0.9"/>
              <path d="M-5,42 C-4,36 -3,25 -2,14 C-1,6 0,2 0,0" stroke-width="1.8" opacity="0.85"/>
              <path d="M-30,28 C-26,24 -18,15 -11,8 C-5,3 -2,1 0,0" stroke-width="2.2" opacity="0.9"/>
              <path d="M-33,22 C-29,19 -20,12 -12,6 C-5,2 -2,1 0,0" stroke-width="1.6" opacity="0.85"/>
              <path d="M-40,-2 C-35,-2 -24,-1 -15,1 C-7,2 -2,1 0,0" stroke-width="2.5" opacity="0.9"/>
              <path d="M-38,-8 C-34,-7 -24,-5 -14,-2 C-6,0 -2,0 0,0" stroke-width="1.7" opacity="0.85"/>
              <path d="M-28,-30 C-24,-26 -17,-17 -10,-10 C-4,-4 -1,-1 0,0" stroke-width="2.0" opacity="0.9"/>
              <path d="M-25,-33 C-22,-29 -15,-20 -9,-12 C-4,-5 -1,-2 0,0" stroke-width="1.8" opacity="0.85"/>
              <!-- Saffron wash fill on some petals -->
              <path d="M0,-36 C4,-34 10,-22 7,-13 C3,-4 0,0 0,0 C0,0 -3,-4 -6,-13 C-9,-22 -4,-34 0,-36Z" fill="#C47B2B" opacity="0.2" stroke="none"/>
              <path d="M36,-6 C33,-5 22,-2 14,1 C7,4 0,0 0,0 C0,0 7,-4 14,-8 C22,-12 33,-8 36,-6Z" fill="#C47B2B" opacity="0.15" stroke="none"/>
              <path d="M6,38 C5,33 4,22 2,12 C1,5 0,0 0,0 C0,0 -1,5 -3,12 C-4,22 -4,33 -4,38Z" fill="#C47B2B" opacity="0.18" stroke="none"/>
              <path d="M-37,-4 C-33,-3 -22,-1 -13,1 C-6,2 0,0 0,0 C0,0 -6,-3 -13,-6 C-22,-9 -33,-6 -37,-4Z" fill="#C47B2B" opacity="0.15" stroke="none"/>
              <!-- Center texture -->
              <circle r="8" fill="#C47B2B" opacity="0.4" stroke="none"/>
              <circle r="5" fill="none" stroke="#3B2F2A" stroke-width="1.5" opacity="0.6"/>
              <circle r="2.5" fill="#3B2F2A" opacity="0.5" stroke="none"/>
              <!-- Small dots in center for texture -->
              <circle cx="3" cy="2" r="0.8" fill="#3B2F2A" opacity="0.4" stroke="none"/>
              <circle cx="-2" cy="3" r="0.7" fill="#3B2F2A" opacity="0.4" stroke="none"/>
              <circle cx="1" cy="-3" r="0.9" fill="#3B2F2A" opacity="0.3" stroke="none"/>
            </g>
            <!-- Wordmark -->
            <text x="100" y="155" text-anchor="middle" font-family="'Caveat', cursive" font-size="28" fill="#3B2F2A">Marigold</text>
            <text x="100" y="175" text-anchor="middle" font-family="'Source Serif 4', serif" font-size="10" fill="#3B2F2A" letter-spacing="3.5" font-weight="600">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #3B2F2A;">On light background</div>
        </div>

        <!-- Dark background -->
        <div class="logo-card" style="background: #3B2F2A;">
          <svg viewBox="0 0 200 270" xmlns="http://www.w3.org/2000/svg" width="200" height="270">
            <g transform="translate(100,82)" fill="none" stroke="#F4EDE4">
              <path d="M0,-40 C5,-38 12,-25 8,-15 C4,-5 2,-2 0,0" stroke-width="2.2" opacity="0.9"/>
              <path d="M0,-40 C-4,-37 -10,-26 -7,-15 C-4,-6 -1,-2 0,0" stroke-width="1.8" opacity="0.9"/>
              <path d="M28,-30 C26,-26 20,-17 12,-10 C6,-5 2,-2 0,0" stroke-width="2.5" opacity="0.85"/>
              <path d="M28,-30 C24,-28 15,-20 10,-12 C5,-5 2,-1 0,0" stroke-width="1.6" opacity="0.85"/>
              <path d="M40,-5 C36,-4 25,-2 16,2 C8,5 3,2 0,0" stroke-width="2.3" opacity="0.9"/>
              <path d="M38,-10 C34,-8 24,-4 15,0 C7,3 2,1 0,0" stroke-width="1.7" opacity="0.85"/>
              <path d="M32,25 C28,22 19,14 12,8 C5,3 2,1 0,0" stroke-width="2.1" opacity="0.9"/>
              <path d="M35,20 C30,18 21,12 13,6 C6,2 2,1 0,0" stroke-width="1.9" opacity="0.85"/>
              <path d="M8,40 C7,35 5,24 3,14 C1,6 1,2 0,0" stroke-width="2.4" opacity="0.9"/>
              <path d="M-5,42 C-4,36 -3,25 -2,14 C-1,6 0,2 0,0" stroke-width="1.8" opacity="0.85"/>
              <path d="M-30,28 C-26,24 -18,15 -11,8 C-5,3 -2,1 0,0" stroke-width="2.2" opacity="0.9"/>
              <path d="M-33,22 C-29,19 -20,12 -12,6 C-5,2 -2,1 0,0" stroke-width="1.6" opacity="0.85"/>
              <path d="M-40,-2 C-35,-2 -24,-1 -15,1 C-7,2 -2,1 0,0" stroke-width="2.5" opacity="0.9"/>
              <path d="M-38,-8 C-34,-7 -24,-5 -14,-2 C-6,0 -2,0 0,0" stroke-width="1.7" opacity="0.85"/>
              <path d="M-28,-30 C-24,-26 -17,-17 -10,-10 C-4,-4 -1,-1 0,0" stroke-width="2.0" opacity="0.9"/>
              <path d="M-25,-33 C-22,-29 -15,-20 -9,-12 C-4,-5 -1,-2 0,0" stroke-width="1.8" opacity="0.85"/>
              <path d="M0,-36 C4,-34 10,-22 7,-13 C3,-4 0,0 0,0 C0,0 -3,-4 -6,-13 C-9,-22 -4,-34 0,-36Z" fill="#C47B2B" opacity="0.25" stroke="none"/>
              <path d="M36,-6 C33,-5 22,-2 14,1 C7,4 0,0 0,0 C0,0 7,-4 14,-8 C22,-12 33,-8 36,-6Z" fill="#C47B2B" opacity="0.2" stroke="none"/>
              <path d="M6,38 C5,33 4,22 2,12 C1,5 0,0 0,0 C0,0 -1,5 -3,12 C-4,22 -4,33 -4,38Z" fill="#C47B2B" opacity="0.22" stroke="none"/>
              <path d="M-37,-4 C-33,-3 -22,-1 -13,1 C-6,2 0,0 0,0 C0,0 -6,-3 -13,-6 C-22,-9 -33,-6 -37,-4Z" fill="#C47B2B" opacity="0.2" stroke="none"/>
              <circle r="8" fill="#C47B2B" opacity="0.45" stroke="none"/>
              <circle r="5" fill="none" stroke="#F4EDE4" stroke-width="1.5" opacity="0.6"/>
              <circle r="2.5" fill="#F4EDE4" opacity="0.5" stroke="none"/>
              <circle cx="3" cy="2" r="0.8" fill="#F4EDE4" opacity="0.4" stroke="none"/>
              <circle cx="-2" cy="3" r="0.7" fill="#F4EDE4" opacity="0.4" stroke="none"/>
              <circle cx="1" cy="-3" r="0.9" fill="#F4EDE4" opacity="0.3" stroke="none"/>
            </g>
            <text x="100" y="155" text-anchor="middle" font-family="'Caveat', cursive" font-size="28" fill="#F4EDE4">Marigold</text>
            <text x="100" y="175" text-anchor="middle" font-family="'Source Serif 4', serif" font-size="10" fill="#F4EDE4" letter-spacing="3.5" font-weight="600">WELLNESS STUDIO</text>
          </svg>
          <div class="logo-card-label" style="color: #F4EDE4;">On dark background</div>
        </div>
      </div>

      <!-- Icon-only row -->
      <div class="logo-icon-row">
        <div style="text-align:center;">
          <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
            <g transform="translate(40,40)" fill="none" stroke="#3B2F2A">
              <path d="M0,-28 C3,-26 8,-18 6,-10 C3,-4 1,-1 0,0" stroke-width="2" opacity="0.9"/>
              <path d="M0,-28 C-3,-26 -7,-18 -5,-10 C-3,-4 -1,-1 0,0" stroke-width="1.6" opacity="0.9"/>
              <path d="M20,-21 C18,-18 14,-12 8,-7 C4,-3 1,-1 0,0" stroke-width="2.2" opacity="0.85"/>
              <path d="M20,-21 C17,-19 11,-14 7,-8 C3,-4 1,-1 0,0" stroke-width="1.4" opacity="0.85"/>
              <path d="M28,-3 C25,-3 18,-1 11,1 C5,3 2,1 0,0" stroke-width="2" opacity="0.9"/>
              <path d="M27,-7 C24,-6 17,-3 10,0 C5,2 1,1 0,0" stroke-width="1.5" opacity="0.85"/>
              <path d="M22,18 C19,15 13,10 8,5 C3,2 1,1 0,0" stroke-width="1.8" opacity="0.9"/>
              <path d="M24,14 C21,12 15,8 9,4 C4,1 1,0 0,0" stroke-width="1.6" opacity="0.85"/>
              <path d="M5,28 C5,24 3,17 2,10 C1,4 0,1 0,0" stroke-width="2.1" opacity="0.9"/>
              <path d="M-4,29 C-3,25 -2,17 -1,10 C-1,4 0,1 0,0" stroke-width="1.5" opacity="0.85"/>
              <path d="M-21,19 C-18,16 -13,10 -8,6 C-4,2 -1,1 0,0" stroke-width="1.9" opacity="0.9"/>
              <path d="M-23,15 C-20,13 -14,8 -8,4 C-4,1 -1,0 0,0" stroke-width="1.4" opacity="0.85"/>
              <path d="M-28,-1 C-24,-1 -17,-1 -10,0 C-5,1 -1,0 0,0" stroke-width="2.2" opacity="0.9"/>
              <path d="M-27,-6 C-24,-5 -17,-3 -10,-1 C-4,0 -1,0 0,0" stroke-width="1.5" opacity="0.85"/>
              <path d="M-20,-21 C-17,-18 -12,-12 -7,-7 C-3,-3 -1,-1 0,0" stroke-width="1.8" opacity="0.9"/>
              <path d="M-18,-23 C-16,-20 -11,-14 -6,-8 C-3,-4 -1,-1 0,0" stroke-width="1.5" opacity="0.85"/>
              <circle r="6" fill="#C47B2B" opacity="0.35" stroke="none"/>
              <circle r="3.5" fill="none" stroke="#3B2F2A" stroke-width="1.2" opacity="0.6"/>
              <circle r="1.8" fill="#3B2F2A" opacity="0.4" stroke="none"/>
            </g>
          </svg>
          <div style="font-size: 0.7rem; color: #9A8E82; margin-top: 8px; font-weight: 500; letter-spacing: 0.1em;">STANDALONE ICON</div>
        </div>
      </div>

      <!-- IMAGERY -->
      <h4>Imagery Direction</h4>
      <h3 class="mt-0">The visual world of Option C</h3>
      <p>Think intimate, unhurried, imperfect. A studio photographed for a personal journal, not a magazine. Everything feels touched by human hands.</p>

      <div class="imagery-grid">
        <div class="imagery-card">
          <h5>Mood &amp; Lighting</h5>
          <p>Intimate and unhurried. Natural light only -- side light, window light, golden hour outdoors. Soft and directional with visible shadows. The camera is a quiet observer, not a participant.</p>
        </div>
        <div class="imagery-card">
          <h5>What to Photograph</h5>
          <p>Hands are the star: hands in mudras, adjusting a bolster, pouring tea. Textures everywhere: linen, raw wood, ceramic, dried flowers. A room before class starts. Mats laid out with space between them.</p>
        </div>
        <div class="imagery-card">
          <h5>Color Treatment</h5>
          <p>Slightly desaturated with warm mid-tones pulled toward saffron and amber. Shadows pushed warm (never blue). The overall effect is as if photos were printed on warm handmade paper.</p>
        </div>
        <div class="imagery-card avoid-card">
          <h5>What to Avoid</h5>
          <p>No posed stock photography. No busy layouts. Nothing cold or corporate. No generic wellness tropes (stacked stones, lotus on water). No digitally perfect or heavily retouched imagery.</p>
        </div>
      </div>

      <div class="imagery-grid" style="margin-top: 0;">
        <div class="imagery-card" style="grid-column: 1 / -1;">
          <h5>Illustration Accents</h5>
          <p>Small hand-drawn botanical sketches (marigold petals, leaves, seed pods) serve as section dividers and decorative touches. Hand-drawn underlines beneath key phrases. Rough-edge borders around photographs, as if they were hand-cut and placed into a scrapbook. These line drawings match the logo's organic character.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- ========================================== -->
<!-- SIDE-BY-SIDE COMPARISON                    -->
<!-- ========================================== -->
<div class="option-section">
  <div class="section">
    <div class="container">
      <div class="text-center" style="margin-bottom: 48px;">
        <div class="section-label">Comparison</div>
        <h2>All Three Options at a Glance</h2>
        <p class="lead" style="max-width: 600px; margin: 0 auto;">Here are the three directions side by side so you can see how they compare. Each has its own personality -- the question is which one feels most like Marigold.</p>
      </div>

      <!-- COLOR BARS COMPARISON -->
      <h3 class="text-center" style="margin-top: 0;">Color Palettes</h3>
      <div class="comparison-bar-row">
        <div class="comparison-bar-col">
          <div class="bar-label">Option A -- Warm &amp; Earthy</div>
          <div class="comparison-bars">
            <div class="cbar" style="background: #D4942A;"></div>
            <div class="cbar" style="background: #B5654A;"></div>
            <div class="cbar" style="background: #3C2415;"></div>
            <div class="cbar" style="background: #F5EDE3;"></div>
            <div class="cbar" style="background: #8A9A7B;"></div>
          </div>
        </div>
        <div class="comparison-bar-col">
          <div class="bar-label">Option B -- Elevated Modern</div>
          <div class="comparison-bars">
            <div class="cbar" style="background: #F5F0E8;"></div>
            <div class="cbar" style="background: #C4887B;"></div>
            <div class="cbar" style="background: #3B3230;"></div>
            <div class="cbar" style="background: #B8AFA6;"></div>
            <div class="cbar" style="background: #C9A85C;"></div>
          </div>
        </div>
        <div class="comparison-bar-col">
          <div class="bar-label">Option C -- Handcrafted</div>
          <div class="comparison-bars">
            <div class="cbar" style="background: #C47B2B;"></div>
            <div class="cbar" style="background: #3B2F2A;"></div>
            <div class="cbar" style="background: #F4EDE4;"></div>
            <div class="cbar" style="background: #7A8B6F;"></div>
            <div class="cbar" style="background: #B8827A;"></div>
          </div>
        </div>
      </div>

      <!-- COMPARISON TABLE -->
      <h3 class="text-center">How They Compare</h3>
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="width: 18%;"></th>
            <th style="width: 27.3%;">Option A -- Warm &amp; Earthy</th>
            <th style="width: 27.3%;">Option B -- Elevated Modern</th>
            <th style="width: 27.3%;">Option C -- Handcrafted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Overall Feel</strong></td>
            <td>A sun-warmed pottery studio. Rich, grounded, and full of character.</td>
            <td>A boutique hotel lobby. Refined, curated, and quietly confident.</td>
            <td>A bookbinder's workshop. Personal, artisan, and made with care.</td>
          </tr>
          <tr>
            <td><strong>Colors</strong></td>
            <td>Bold golds and warm terracottas against cream. Earthy warmth is the dominant impression.</td>
            <td>Restraint and sophistication. A muted terracotta-rose is the signature color against warm neutrals.</td>
            <td>Natural pigment tones -- saffron, walnut, lichen, parchment. Feels hand-mixed.</td>
          </tr>
          <tr>
            <td><strong>Headings</strong></td>
            <td>Sturdy, rounded serif. Feels established and warm, like a hand-painted sign.</td>
            <td>Sharp, editorial serif. Feels contemporary and magazine-quality.</td>
            <td>Genuine handwriting. Feels personal and spontaneous.</td>
          </tr>
          <tr>
            <td><strong>Logo Style</strong></td>
            <td>Layered marigold bloom in gold and terracotta. Semi-geometric, warm, structured.</td>
            <td>Precise geometric rosette. Nine symmetric petals, mandala-like. Clean and modern.</td>
            <td>Hand-drawn marigold sketch with varying line weight. Organic, alive, imperfect.</td>
          </tr>
          <tr>
            <td><strong>Photography</strong></td>
            <td>Golden, lived-in, detail-oriented. Close-ups and morning light. Warm and real.</td>
            <td>Still, composed, editorial. Clean spaces with breathing room. Aspirational but attainable.</td>
            <td>Intimate, unhurried. Hands and textures. Shot for a journal, not a magazine.</td>
          </tr>
          <tr>
            <td><strong>Best For</strong></td>
            <td>If you want Marigold to feel immediately warm and inviting -- a place you can picture yourself in right away.</td>
            <td>If you want Marigold to feel elevated and distinctive -- a studio that signals quality from the first glance.</td>
            <td>If you want Marigold to feel personal and artisan -- a studio that is clearly made with love.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


<!-- ========================================== -->
<!-- NEXT STEPS                                 -->
<!-- ========================================== -->
<div class="section">
  <div class="container">
    <div class="text-center" style="margin-bottom: 32px;">
      <div class="section-label">What Happens Next</div>
      <h2>Over to You, Sara</h2>
    </div>

    <div class="next-steps-box">
      <p>Take your time looking through each option. There is no deadline pressure here. When you are ready, just let us know:</p>
      <ol>
        <li><strong>Pick a direction.</strong> If one option feels right, tell us and we will move forward with it. You do not need to justify or explain your choice -- if it feels like Marigold, that is enough.</li>
        <li><strong>Mix and match.</strong> Love the colors from Option A but the logo feel from Option C? That is completely fine. Tell us what you are drawn to from each and we will combine them into a unified direction.</li>
        <li><strong>Share your reaction.</strong> Even if you are not sure yet, your first impressions are valuable. Tell us what you like, what you do not like, or what feels close but not quite right. We can refine from there.</li>
      </ol>
      <p style="margin-top: 24px; margin-bottom: 0; color: #6B6259;">Once we align on a brand direction, we will move into site architecture and page copy -- the structure and words that will bring your website to life.</p>
    </div>

    <div style="text-align: center; padding: 48px 0 24px; color: #B8AFA6; font-size: 0.8rem; letter-spacing: 0.06em;">
      Marigold Wellness Studio -- Brand Design Report -- March 2026
    </div>
  </div>
</div>

</body>
</html>