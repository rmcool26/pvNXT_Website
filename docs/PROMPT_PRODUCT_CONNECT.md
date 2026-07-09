Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding dedicated product pages to the pvNXT website (static HTML/CSS/JS, v3-main branch). The existing pages (index.html, about.html, contact.html, products/studio.html) use a shared design system: CSS variables in assets/css/style.css, page-specific CSS in assets/css/pages/product.css. Header and footer are JS-loaded from components/. We must follow this exact architecture.

This is a NEW file: `products/connect.html`. The `products/` directory already exists (created for studio.html). This page must follow the same page shell structure as studio.html — same head, same meta tags, same CSS links, same header/footer placeholders.

---

TASK: Create `products/connect.html` — pvNXT Connect dedicated product page.

STEP 1: Create the file at `products/connect.html` with the following complete HTML:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>pvNXT Connect — Consumer Solar Portal | pvNXT by Terranxt</title>
  <meta name="description" content="pvNXT Connect is the consumer portal for solar adoption. Check feasibility, estimate ROI, compare quotes, and track your installation — all in one place.">
  <meta name="theme-color" content="#069fb1">
  <meta property="og:title" content="pvNXT Connect — Consumer Solar Portal">
  <meta property="og:description" content="Feasibility check, cost & ROI estimate, quote comparison, and installation tracking — all in one consumer portal.">
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
          <p class="overline"><span></span><a href="../index.html" style="color:inherit;text-decoration:none;">pvNXT</a> / Connect</p>
          <h1>pvNXT Connect</h1>
          <p class="lead">Consumer solar portal — solar, minus the jargon.</p>
          <div class="product-hero-meta">
            <span>For: Homeowners, solar customers</span>
            <span>•</span>
            <span class="product-badge badge-live">Live</span>
          </div>
          <div class="product-hero-cta">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
            <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener" class="btn btn-secondary">Visit live portal ↗</a>
          </div>
        </div>
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Connect portal preview">
            <div class="product-visual-placeholder">
              <div class="product-visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <p class="product-visual-label">[ pvNXT Connect — consumer portal | dashboard view | 1280x720px | bg: #ffffff ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT OVERVIEW ===== -->
    <section class="section" id="overview">
      <div class="container product-overview">
        <p class="overline"><span></span>Overview</p>
        <h2>What is pvNXT Connect?</h2>
        <p class="lead">pvNXT Connect is the consumer portal for solar adoption. Homeowners can check feasibility, estimate costs and ROI, compare quotes, track installation progress, and monitor their plant — all in one place. Built to simplify solar for everyone, Connect removes the jargon and makes going solar transparent and trackable.</p>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section section-soft" id="capabilities">
      <div class="container">
        <p class="overline"><span></span>What it does</p>
        <h2>Solar adoption, simplified.</h2>
        <div class="capabilities-grid">
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
            <div>
              <h3>Feasibility check</h3>
              <p>Check if your roof is suitable for solar in seconds. Satellite-based analysis shows usable area, orientation, and shadow patterns.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div>
              <h3>Cost & ROI estimate</h3>
              <p>Get accurate cost estimates and ROI calculations based on your location, energy usage, and available subsidies. No guesswork.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div>
              <h3>Quote compare</h3>
              <p>Compare multiple quotes side-by-side with standardized metrics. See through the jargon and make informed decisions.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            </div>
            <div>
              <h3>Order & installation tracking</h3>
              <p>Track your solar journey from order to commissioning. Real-time updates on installation progress, no more chasing contractors.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
            </div>
            <div>
              <h3>Plant monitoring</h3>
              <p>Monitor your solar plant's performance after installation. See energy generation, savings, and health status in real-time.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <h3>Performance analytics</h3>
              <p>Understand your plant's performance with simple, jargon-free analytics. Spot issues early and maximize your solar investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BEFORE vs AFTER ===== -->
    <section class="section" id="comparison">
      <div class="container">
        <p class="overline"><span></span>Before and After</p>
        <h2>The difference Connect makes.</h2>
        <div class="comparison-grid">
          <div class="comparison-card comparison-before">
            <div class="comparison-header">
              <div class="comparison-circle before-circle">X</div>
              <h3>Before</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-before">X</span>Leads scattered across WhatsApp and spreadsheets</li>
              <li><span class="marker-before">X</span>Follow-ups missed or forgotten</li>
              <li><span class="marker-before">X</span>No visibility into conversion rates</li>
            </ul>
          </div>
          <div class="comparison-card comparison-after">
            <div class="comparison-header">
              <div class="comparison-circle after-circle">✓</div>
              <h3>After (pvNXT Connect)</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-after">✓</span>Every lead tracked automatically</li>
              <li><span class="marker-after">✓</span>Automated follow-up reminders, nothing slips through</li>
              <li><span class="marker-after">✓</span>Full pipeline visibility with clear conversion data</li>
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
            <p class="outcome-text">Your sales team stops losing leads in chats. Clear, real-time pipeline. Customers get transparent, trackable solar adoption journey.</p>
          </div>
          <div class="outcome-card">
            <p class="overline"><span></span>Process Impact</p>
            <p class="outcome-text">No more chasing WhatsApp updates. Leads flow automatically to design and proposal. Installation tracking replaces "when will it be done?" calls.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== KEY FEATURES ===== -->
    <section class="section" id="features">
      <div class="container">
        <p class="overline"><span></span>Key features</p>
        <h2>Everything homeowners need.</h2>
        <div class="features-grid">
          <div class="feature-card">Feasibility check</div>
          <div class="feature-card">Cost & ROI estimate</div>
          <div class="feature-card">Quote compare</div>
          <div class="feature-card">Order tracking</div>
          <div class="feature-card">Installation tracking</div>
          <div class="feature-card">Plant monitoring</div>
        </div>
      </div>
    </section>

    <!-- ===== WHO IT'S FOR ===== -->
    <section class="section section-soft" id="who">
      <div class="container">
        <p class="overline"><span></span>Who it's for</p>
        <h2>Built for solar customers.</h2>
        <div class="who-chips">
          <span class="who-chip">Homeowners</span>
          <span class="who-chip">Solar customers</span>
        </div>
      </div>
    </section>

    <!-- ===== THE ATLAS CONNECTION ===== -->
    <section class="section" id="atlas-connection">
      <div class="container atlas-note">
        <p class="overline"><span></span>Powered by Atlas</p>
        <h2>Satellite data. Consumer clarity.</h2>
        <p class="lead">Connect uses pvNXT Atlas satellite analysis to give homeowners accurate feasibility checks and ROI estimates — no site visit needed. See how the <a href="../index.html#how-it-works" class="text-link">Atlas pipeline works</a>.</p>
      </div>
    </section>

    <!-- ===== ECOSYSTEM NAV ===== -->
    <section class="section section-soft" id="ecosystem-nav">
      <div class="container">
        <p class="overline"><span></span>Part of the pvNXT suite</p>
        <h2>Explore other products.</h2>
        <div class="eco-nav-grid">
          <a href="studio.html" class="eco-nav-card">Studio <span>EPC design workspace →</span></a>
          <a href="go.html" class="eco-nav-card">Go <span>Installer field portal →</span></a>
          <a href="proposal.html" class="eco-nav-card">Proposal <span>Auto-generated proposals →</span></a>
          <a href="field-app.html" class="eco-nav-card">Field App <span>Site survey capture →</span></a>
          <a href="scada.html" class="eco-nav-card">SCADA <span>Plant monitoring →</span></a>
        </div>
      </div>
    </section>

    <!-- ===== FINAL CTA ===== -->
    <section class="section cta-final" id="cta">
      <div class="container">
        <div class="cta-final-inner">
          <p class="overline"><span></span>Get started</p>
          <h2>See Connect in action.</h2>
          <p class="lead">Book a demo for your sales team. We'll show you how Connect transforms lead management and gives customers transparency they deserve.</p>
          <div class="cta-final-buttons">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
            <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener" class="btn btn-secondary">Visit live portal ↗</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <div id="footer-placeholder"></div>
  <script src="../assets/js/main.js"></script>
</body>
</html>

STEP 2: The CSS file `assets/css/pages/product.css` already exists from the Studio page creation. This page will use the same CSS file — NO CSS CHANGES NEEDED. The existing product.css contains all styles needed for this page.

---

CRITICAL RULES:
- Use the existing `products/` directory
- Use the existing `assets/css/pages/product.css` (DO NOT create a new CSS file)
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper)
- Use existing utility classes: .section, .section-soft, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary, .text-link, .page-hero, .page-hero-grid, .reveal
- The page shell (head, meta, fonts, loader, header placeholder, footer placeholder) must match studio.html
- All CSS is already in assets/css/pages/product.css — DO NOT touch style.css or any other CSS files
- DO NOT change any existing file except creating this new file (products/connect.html)
- Links to other product pages (studio.html, go.html, etc.) — these pages don't exist yet except studio.html. The links are READY for when they're created.
- Nav paths: use `../` prefix for links back to root (../index.html, ../contact.html, etc.) since this file is in products/ subdirectory

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. products/connect.html created with all 10 sections
2. No CSS file changes (uses existing product.css)
3. Page uses existing design system (CSS variables, utility classes)
4. No existing files were modified