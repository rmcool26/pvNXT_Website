Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding dedicated product pages to the pvNXT website (static HTML/CSS/JS, v3-main branch). The existing pages use a shared design system: CSS variables in assets/css/style.css, page-specific CSS in assets/css/pages/product.css. Header and footer are JS-loaded from components/. We must follow this exact architecture.

This is a NEW file: `products/field-app.html`. The `products/` directory already exists. This page must follow the same page shell structure as the other product pages.

---

TASK: Create `products/field-app.html` — pvNXT Field App dedicated product page.

STEP 1: Create the file at `products/field-app.html` with the following complete HTML:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>pvNXT Field App — Site Survey Capture | pvNXT by Terranxt</title>
  <meta name="description" content="pvNXT Field App captures complete site data in one visit. Roof details, measurements, photos, and structured handoff notes — all in one place.">
  <meta name="theme-color" content="#069fb1">
  <meta property="og:title" content="pvNXT Field App — Site Survey Capture">
  <meta property="og:description" content="One visit, complete site capture. Roof details, measurements, photos, structured handoff notes for design teams.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/pages/product.css">
</head>
<body data-page="product">
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="page-loader" data-loader aria-hidden="true">
    <div class="loader-orbit"><span></span><span></span><span></span></div>
  </div>
  <div id="header-placeholder"></div>

  <main id="main">

    <!-- ===== PRODUCT HERO ===== -->
    <section class="page-hero product-hero">
      <div class="container page-hero-grid">
        <div class="reveal">
          <p class="overline"><span></span><a href="../index.html" style="color:inherit;text-decoration:none;">pvNXT</a> / Field App</p>
          <h1>Field App</h1>
          <p class="lead">One visit, complete site capture.</p>
          <div class="product-hero-meta">
            <span>For: Field survey teams</span>
            <span>•</span>
            <span class="product-badge badge-internal">Internal</span>
          </div>
          <div class="product-hero-cta">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
          </div>
        </div>
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Field App preview">
            <div class="product-visual-placeholder">
              <div class="product-visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              </div>
              <p class="product-visual-label">[ pvNXT Field App — mobile app | site capture view | 1280x720px | bg: #ffffff ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT OVERVIEW ===== -->
    <section class="section" id="overview">
      <div class="container product-overview">
        <p class="overline"><span></span>Overview</p>
        <h2>What is Field App?</h2>
        <p class="lead">pvNXT Field App captures complete site data in one visit. Field teams can record roof details, keepouts, measurements, and photos — all structured for design teams. No more incomplete handoffs, no more revisits for missing data.</p>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section section-soft" id="capabilities">
      <div class="container">
        <p class="overline"><span></span>What it does</p>
        <h2>Complete site capture.</h2>
        <div class="capabilities-grid">
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
            </div>
            <div>
              <h3>Site data capture</h3>
              <p>Capture all site data in a structured format. Roof type, orientation, access points, electrical panel location — everything design needs.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>
            </div>
            <div>
              <h3>Photos</h3>
              <p>Capture and tag site photos systematically. Roof conditions, obstructions, electrical setup — organized by category, not random shots.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
            </div>
            <div>
              <h3>Roof details & keepouts</h3>
              <p>Mark roof details and keepouts digitally. Shadow-casting objects, skylights, vents — all recorded with location and measurements.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
            </div>
            <div>
              <h3>Measurements</h3>
              <p>Record measurements directly in the app. Roof dimensions, available area, tilt angles — accurate data for design teams.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <div>
              <h3>Structured handoff notes</h3>
              <p>Add structured notes for design teams. Flag constraints, special requirements, or site-specific challenges. Nothing gets lost in handoff.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="9,11 12,14 22,4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            </div>
            <div>
              <h3>Complete data checklist</h3>
              <p>Built-in checklist ensures no data is missed. Field teams know exactly what to capture before leaving the site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BEFORE vs AFTER ===== -->
    <section class="section" id="comparison">
      <div class="container">
        <p class="overline"><span></span>Before and After</p>
        <h2>The difference Field App makes.</h2>
        <div class="comparison-grid">
          <div class="comparison-card comparison-before">
            <div class="comparison-header">
              <div class="comparison-circle before-circle">X</div>
              <h3>Before</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-before">X</span>Incomplete handoffs to design team</li>
              <li><span class="marker-before">X</span>Design team asking for missing details</li>
              <li><span class="marker-before">X</span>Multiple site visits needed</li>
            </ul>
          </div>
          <div class="comparison-card comparison-after">
            <div class="comparison-header">
              <div class="comparison-circle after-circle">✓</div>
              <h3>After (pvNXT Field App)</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-after">✓</span>One visit captures everything</li>
              <li><span class="marker-after">✓</span>Design gets complete data first time</li>
              <li><span class="marker-after">✓</span>Proposals move faster</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== OUTCOME + IMPACT ===== -->
    <section class="section section-soft" id="outcome">
      <div class="container">
        <div class="outcome-grid">
          <div class="outcome-card">
            <p class="overline"><span></span>Outcome You Get</p>
            <p class="outcome-text">Cleaner handoff in one visit. Fewer missing details, fewer revisits. Design teams get everything they need on day one.</p>
          </div>
          <div class="outcome-card">
            <p class="overline"><span></span>Process Impact</p>
            <p class="outcome-text">One visit replaces multiple back-and-forths. Design gets structured data on day one. Faster proposals, happier customers.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== KEY FEATURES ===== -->
    <section class="section" id="features">
      <div class="container">
        <p class="overline"><span></span>Key features</p>
        <h2>Everything field teams need.</h2>
        <div class="features-grid">
          <div class="feature-card">Site data capture</div>
          <div class="feature-card">Roof details & keepouts</div>
          <div class="feature-card">Measurements</div>
          <div class="feature-card">Photos</div>
          <div class="feature-card">Structured handoff notes</div>
          <div class="feature-card">Complete data checklist</div>
        </div>
      </div>
    </section>

    <!-- ===== WHO IT'S FOR ===== -->
    <section class="section section-soft" id="who">
      <div class="container">
        <p class="overline"><span></span>Who it's for</p>
        <h2>Built for field survey teams.</h2>
        <div class="who-chips">
          <span class="who-chip">Field survey teams</span>
        </div>
      </div>
    </section>

    <!-- ===== THE ATLAS CONNECTION ===== -->
    <section class="section" id="atlas-connection">
      <div class="container atlas-note">
        <p class="overline"><span></span>Powered by Atlas</p>
        <h2>Satellite data. Field verification.</h2>
        <p class="lead">Field App complements Atlas by capturing ground-truth data. Verify satellite analysis, capture details Atlas can't see. See how the <a href="../index.html#how-it-works" class="text-link">Atlas pipeline works</a>.</p>
      </div>
    </section>

    <!-- ===== ECOSYSTEM NAV ===== -->
    <section class="section section-soft" id="ecosystem-nav">
      <div class="container">
        <p class="overline"><span></span>Part of the pvNXT suite</p>
        <h2>Explore other products.</h2>
        <div class="eco-nav-grid">
          <a href="studio.html" class="eco-nav-card">Studio <span>EPC design workspace →</span></a>
          <a href="connect.html" class="eco-nav-card">Connect <span>Consumer portal →</span></a>
          <a href="go.html" class="eco-nav-card">Go <span>Installer field portal →</span></a>
          <a href="proposal.html" class="eco-nav-card">Proposal <span>Auto-generated proposals →</span></a>
          <a href="scada.html" class="eco-nav-card">SCADA <span>Plant monitoring →</span></a>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="section cta-final" id="cta">
      <div class="container">
        <div class="cta-final-inner">
          <p class="overline"><span></span>Get started</p>
          <h2>See Field App in action.</h2>
          <p class="lead">Book a demo for your field teams. We'll show you how Field App eliminates incomplete handoffs and revisits.</p>
          <div class="cta-final-buttons">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <div id="footer-placeholder"></div>
  <script src="../assets/js/main.js"></script>
</body>
</html>

STEP 2: The CSS file `assets/css/pages/product.css` already exists. This page will use the same CSS file — NO CSS CHANGES NEEDED.

---

CRITICAL RULES:
- Use the existing `products/` directory
- Use the existing `assets/css/pages/product.css` (DO NOT create a new CSS file)
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper)
- Use existing utility classes: .section, .section-soft, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary, .text-link, .page-hero, .page-hero-grid, .reveal
- The page shell must match the other product pages
- All CSS is already in assets/css/pages/product.css — DO NOT touch style.css or any other CSS files
- DO NOT change any existing file except creating this new file (products/field-app.html)
- Links to other product pages — some pages don't exist yet. The links are READY for when they're created.
- Nav paths: use `../` prefix for links back to root since this file is in products/ subdirectory
- Status badge: use `badge-internal` class (not badge-live) for internal products

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. products/field-app.html created with all 10 sections
2. No CSS file changes (uses existing product.css)
3. Page uses existing design system (CSS variables, utility classes)
4. No existing files were modified