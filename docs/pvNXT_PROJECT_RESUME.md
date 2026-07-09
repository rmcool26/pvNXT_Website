# pvNXT Website — Complete Project Resume
> **Give this file to any AI in a new chat. It will continue from exactly where we left off.**

---

## QUICK REFERENCE

```
Repo:      https://github.com/rmcool26/pvNXT_Website
Branch:    v3-main
Status:    HOMEPAGE COMPLETE ✓ — Product pages IN PROGRESS
Last done: S1-S7 homepage verified LIVE
Next:      Execute PROMPT_PRODUCT_STUDIO.md → then 5 more product pages
```

---

## 1. WHAT IS pvNXT?

pvNXT is a **connected solar workflow suite** by **Terranxt** (IIT Delhi-FITT incubated). 7 products (Atlas, Field App, Connect, Studio, Proposal, Go, SCADA) on one shared data layer — from satellite-based 3D roof modeling to plant monitoring.

**Tagline:** "Solar operations, connected."
**Brand color:** #069fb1 (teal)
**Flow:** ATLAS → FIELD APP → CONNECT → STUDIO → PROPOSAL → GO → SCADA

Full product details in `pvNXT_overview.md` (ask Rajat for this file if needed).

---

## 2. WEBSITE ARCHITECTURE

```
Type:       Static HTML/CSS/JS (NO React, NO Next.js, NO build step)
Deploy:     Netlify (direct HTML files)
Base theme: Originally from terranxt-website (premium design)

File structure:
  v3-main/
  ├── index.html              ← HOMEPAGE (7 sections, COMPLETE ✓)
  ├── home.html               ← Same as index (symlink)
  ├── about.html              ← About page (needs pvNXT revamp)
  ├── contact.html            ← Contact page (needs pvNXT update)
  ├── services.html           ← Legacy platform page (keep as-is)
  ├── products/               ← ❌ DOES NOT EXIST YET — CREATE IT
  │   ├── studio.html         ← NEXT TO CREATE
  │   ├── connect.html
  │   ├── go.html
  │   ├── proposal.html
  │   ├── field-app.html
  │   └── scada.html
  ├── components/
  │   ├── header.html         ← JS-loaded (needs pvNXT nav update)
  │   └── footer.html         ← JS-loaded (needs pvNXT links update)
  └── assets/
      ├── css/
      │   ├── style.css       ← GLOBAL CSS: variables, reset, typography, btn, header, footer — NEVER EDIT
      │   └── pages/
      │       ├── home.css    ← Homepage-specific CSS (add new styles at END)
      │       ├── about.css   ← About page CSS
      │       ├── contact.css ← Contact page CSS
      │       └── product.css ← ❌ DOES NOT EXIST YET — CREATE IT
      ├── js/
      │   └── main.js         ← GLOBAL JS: Lenis, GSAP, loader, header, form — NEVER EDIT
      └── images/
          ├── 081025 pvNXT_3D Analysis_EPC.gif  ← Hero GIF
          ├── *.mp4, *.svg, *.png
          └── IMAGE-SOURCES.txt
```

---

## 3. DESIGN SYSTEM (CRITICAL — USE THESE EXACTLY)

### CSS Variables (from style.css)

```css
--brand: #069fb1;        /* Primary teal */
--brand-dark: #047f8e;   /* Darker for hover/buttons */
--ink: #091d2c;           /* Dark text */
--muted: #5d6f7e;         /* Secondary text */
--paper: #ffffff;          /* White */
--mist: #f6fafb;           /* Light bg */
--line: #dce9ed;           /* Borders */
--night: #071824;          /* Dark sections */
```

### Key Utility Classes

```
.section          — 118px vertical padding
.section-soft     — gradient bg (mist → white)
.container        — max-width 1160px centered
.overline         — <p class="overline"><span></span>LABEL</p> (teal bar + uppercase)
h1, h2, h3        — 800 weight, tight letter-spacing
.lead             — larger body text, muted color
.btn              — height 48px, 800 weight, pill shape
.btn-primary      — solid brand bg, white text, brand shadow
.btn-secondary    — white bg, brand border
.text-link        — inline link, animated arrow on hover
.page-hero        — page hero section (not homepage hero)
.page-hero-grid   — 2-col grid layout for page hero
.reveal           — GSAP fade-up animation trigger
```

### Critical Rules for Gemma

```
01. Do EXACTLY what the task asks. Nothing extra.
02. NEVER edit: components/header.html, components/footer.html,
    assets/js/main.js, assets/css/style.css
03. Add new CSS ONLY at the END of the page-specific CSS file
04. Use CSS variables (var(--brand)) — NEVER hardcode colors
05. Use existing utility classes before creating new ones
06. One section = one prompt = one verification
07. Reply format: "TASK FINISHED SUCCESSFULLY" + what changed + files edited
```

---

## 4. HOMEPAGE STATUS — 100% COMPLETE ✓

All 7 sections built and verified LIVE on `v3-main/index.html`:

| # | Section | Headline | Treatment |
|---|---------|----------|-----------|
| S1 | Hero + Trust Strip | "Solar operations, connected." | Motion hero + 4 trust indicators |
| S2 | The Story | "Solar shouldn't be this hard." | Editorial narrative + chaos→clarity illustration |
| S3 | The Magic | "From satellite to solar." | Atlas pipeline + 7-node ecosystem hub |
| S4 | Products | "6 products. One data layer." | 6 cards + ONE DATA LAYER banner |
| S5 | Who It's For | "Built for every solar team." | 4 role lanes (EPC/Installer/Homeowner/O&M) |
| S6 | Real Results | "Measured. Not promised." | Floating stats (90%, 0, 3x, 40%) + 3 points |
| S7 | CTA | "See pvNXT in action." | Centered text + 2 buttons |

Live at: https://raw.githubusercontent.com/rmcool26/pvNXT_Website/v3-main/index.html

---

## 5. REMAINING WORK (Priority Order)

| Priority | Task | Files | Complexity |
|----------|------|-------|------------|
| 🔴 P0 | **Product pages** (6) | products/studio.html, connect.html, go.html, proposal.html, field-app.html, scada.html | High |
| 🟡 P1 | **About page** revamp | about.html | Medium |
| 🟡 P1 | **Contact page** update | contact.html | Low |
| 🟢 P2 | **Header/footer** update | components/header.html, footer.html | Low |

---

## 6. PRODUCT PAGE TEMPLATE — Every Product Page Follows This

Each product page has 10 sections, inheriting the terranxt page shell:

```
1. PRODUCT HERO — breadcrumb (pvNXT / Name) + h1 + tagline + status badge + 2 CTAs + visual placeholder
2. WHAT IT IS — .overline "Overview" + h2 + .lead paragraph
3. WHAT IT DOES — .overline "What it does" + 6 capabilities (2-col grid, icons + title + desc)
4. BEFORE vs AFTER — 2 cards (soft red tint + soft green tint), 3 ✕/✓ points each
5. OUTCOME + IMPACT — 2 cards side by side (brand-tint + white)
6. KEY FEATURES — .overline "Key features" + grid of feature badges
7. WHO IT'S FOR — .overline "Who it's for" + h2 + user chips (pills)
8. ATLAS CONNECTION — .overline "Powered by Atlas" + h2 + .lead with link to homepage #how-it-works
9. ECOSYSTEM NAV — .overline "Part of the pvNXT suite" + h2 + grid of links to other products
10. FINAL CTA — .overline "Get started" + h2 + .lead + 2 CTAs (Demo + Live Portal)
```

### Product-specific data for each page:

**STUDIO** (next to build)
```
Name: pvNXT Studio
Tagline: EPC design and proposal workspace — from layout to BOQ, in one place.
Status: Live | Users: EPC designers, sales teams, solar businesses
Live portal: https://epc.pvnxt.com/
Before (3): Manual CAD drawings 2-3 days / Sizing errors / Shadow analysis separate tool
After (3): Designs in 15 min / Accurate first time / Shadow analysis built-in
Outcome: Design time reduced from days to minutes. Fewer errors, faster turnaround.
Impact: Eliminates the design bottleneck. Proposal and project teams get accurate data.
Features: Solar layout creation, Shadow/roof analysis, BOQ generation, Project reports, Proposal-ready output, Project tracking
Who: EPC designers, Sales teams, Solar businesses
```

**CONNECT** (after Studio)
```
Name: pvNXT Connect | Tagline: Consumer solar portal — solar, minus the jargon.
Status: Live | Users: Homeowners, solar customers
Live portal: https://consumer.pvnxt.com/
Before (3): Leads scattered on WhatsApp / Follow-ups missed / No conversion visibility
After (3): Every lead tracked / Automated follow-ups / Full pipeline visibility
Outcome: Your sales team stops losing leads in chats. Clear, real-time pipeline.
Impact: No more chasing WhatsApp updates. Leads flow to design and proposal automatically.
Features: Feasibility check, Cost & ROI estimate, Quote compare, Order/installation tracking, Plant monitoring
Who: Homeowners, Solar customers
```

**GO** (after Connect)
```
Name: pvNXT Go | Tagline: Installer field portal — built for rooftops, not desks.
Status: Live | Users: Installers, site teams, EPC managers
Live portal: https://installer.pvnxt.com/
Before (3): Whiteboard tracking / Delays discovered late / No multi-site visibility
After (3): Real-time tracking / Proactive delay alerts / Complete dashboard visibility
Outcome: On-time delivery and predictable project cycles.
Impact: Parallel workflows replace sequential handoffs. Field and office teams work simultaneously.
Features: Site task assignment, Daily photo proof, Status updates, Delay-reason tracking, Verification
Who: Installers, Site teams, EPC managers
```

**PROPOSAL** (after Go)
```
Name: Proposal System | Tagline: Automated customer proposals.
Status: Live | Users: EPC teams presenting to customers
Before (3): Manual proposals 2-4 hours / Pricing errors from copy-paste / Inconsistent formatting
After (3): Generated in 5 min / Pricing from design data — zero errors / Consistent output
Outcome: 3x faster proposal generation with zero pricing errors.
Impact: No manual data entry. Everything pulls from Studio. Approved proposals flow directly to project management.
Features: Auto-generated from project data, System summary, Cost+subsidy+savings tables, Solar impact, Customer-friendly layout
Who: EPC teams, Sales
```

**FIELD APP** (after Proposal)
```
Name: Field App | Tagline: One visit, complete site capture.
Status: Internal | Users: Field survey teams
Before (3): Incomplete handoffs / Design team asked for missing details / Multiple visits needed
After (3): One visit captures everything / Design gets complete data first time / Proposals move faster
Outcome: Cleaner handoff in one visit. Fewer missing details, fewer revisits.
Impact: One visit replaces multiple back-and-forths. Design gets structured data on day one.
Features: Site data capture, Roof details & keepouts, Measurements, Photos, Structured handoff notes
Who: Field survey teams
```

**SCADA** (after Field App)
```
Name: SCADA Monitoring | Tagline: Every alert, accountable.
Status: In progress | Users: EPC managers, plant owners, field techs, O&M owners
Live portal: https://scada.pvnxt.com/
Before (3): Manual checks with screenshots / Late alerts / Unclear issue ownership
After (3): Role-based dashboard + live alerts / Instant issue flagging / Full traceable history
Outcome: From reactive checking to visible, accountable operations. Every alert has an owner.
Impact: No more chasing who is responsible. Alerts assigned, tracked, resolved in defined flow.
Features: Role-based views, Live alerts, Work orders & assignment, Activity history, Plant-level monitoring
Who: EPC managers, Plant owners, Field techs, O&M owners
```

---

## 7. THE NEXT STEP — FIRST PROMPT READY

The prompt for `products/studio.html` is already written. It's in `PROMPT_PRODUCT_STUDIO.md` (ask Rajat for this file, or use the content below).

---

## 8. WORKING METHOD

```
1. Rajat gives you a Gemma prompt (one per task)
2. You (Gemma) execute EXACTLY what's asked — create files, add HTML/CSS
3. You reply "TASK FINISHED SUCCESSFULLY" + summary
4. Rajat verifies on GitHub
5. Rajat gives next prompt
6. Repeat

CRITICAL: One task at a time. Never batch. Never skip verification.
```

---

## 9. KEY FILE PATHS FOR THIS PROJECT

```
Homepage:        index.html
Page CSS:        assets/css/pages/home.css (homepage), product.css (product pages)
Product pages:   products/studio.html, products/connect.html, etc.
Global CSS:      assets/css/style.css (NEVER EDIT)
Navigation:      Product pages use ../ to go back to root: ../index.html, ../contact.html
CSS paths:       ../assets/css/style.css, ../assets/css/pages/product.css
JS path:         ../assets/js/main.js
```

---

## 10. COMMON PITFALLS

```
❌ Editing style.css instead of the page-specific CSS file
❌ Hardcoding colors instead of using CSS variables
❌ Changing header/footer when not asked
❌ Adding sections in wrong order on the homepage
❌ Using wrong relative paths (../ for product pages, no prefix for root)
❌ Forgetting to reply "TASK FINISHED SUCCESSFULLY"
```

---

**End of Resume. Now execute PROMPT_PRODUCT_STUDIO.md.**
Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding dedicated product pages to the pvNXT website (static HTML/CSS/JS, v3-main branch). The existing pages (index.html, about.html, contact.html) use a shared design system: CSS variables in assets/css/style.css, page-specific CSS in assets/css/pages/. Header and footer are JS-loaded from components/. We must follow this exact architecture.

This is a NEW file: `products/studio.html`. The `products/` directory does not exist yet — create it. The page must follow the same page shell structure as about.html and contact.html — same head, same meta tags, same CSS links, same header/footer placeholders.

---

TASK: Create `products/studio.html` — pvNXT Studio dedicated product page.

STEP 1: Create the file at `products/studio.html` with the following complete HTML:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>pvNXT Studio — EPC Design & Proposal Workspace | pvNXT by Terranxt</title>
  <meta name="description" content="pvNXT Studio is the EPC workspace for solar system design. Create layouts, run roof analysis, generate BOQ and reports — in one place.">
  <meta name="theme-color" content="#069fb1">
  <meta property="og:title" content="pvNXT Studio — EPC Design & Proposal Workspace">
  <meta property="og:description" content="Solar layout creation, shadow analysis, BOQ generation, and project tracking — all in one EPC workspace.">
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
    <section class="page-hero product-hero product-hero-studio">
      <div class="container page-hero-grid">
        <div class="reveal">
          <p class="overline"><span></span><a href="../index.html" style="color:inherit;text-decoration:none;">pvNXT</a> / Studio</p>
          <h1>pvNXT Studio</h1>
          <p class="lead">EPC design and proposal workspace — from layout to BOQ, in one place.</p>
          <div class="product-hero-meta">
            <span>For: EPC designers, sales teams, solar businesses</span>
            <span>•</span>
            <span class="product-badge badge-live">Live</span>
          </div>
          <div class="product-hero-cta">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
            <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener" class="btn btn-secondary">Visit live portal ↗</a>
          </div>
        </div>
        <div class="reveal">
          <!-- ILLUSTRATION: pvNXT Studio Dashboard
               Size: 600x450px
               Style: Clean UI illustration, teal + white
               Content: Studio interface showing satellite view with 3D roof model,
                        solar panels placed, shadow analysis overlay, BOQ sidebar
               Purpose: Show the Studio workspace in action -->
          <div class="product-hero-visual" aria-label="pvNXT Studio interface preview">
            <div class="product-visual-placeholder">
              <div class="product-visual-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <p class="product-visual-label">[ pvNXT Studio — layout & BOQ screen | client screenshot | 1280x720px | bg: #ffffff ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PRODUCT OVERVIEW ===== -->
    <section class="section" id="overview">
      <div class="container product-overview">
        <p class="overline"><span></span>Overview</p>
        <h2>What is pvNXT Studio?</h2>
        <p class="lead">pvNXT Studio is the EPC workspace for solar system design. Create layouts, run roof analysis, generate BOQ and reports, and prepare proposal-ready outputs — in one place. Built on the pvNXT Atlas 3D model pipeline, Studio eliminates the need for manual CAD and repeated site visits.</p>
      </div>
    </section>

    <!-- ===== CAPABILITIES ===== -->
    <section class="section section-soft" id="capabilities">
      <div class="container">
        <p class="overline"><span></span>What it does</p>
        <h2>Design faster. Propose with confidence.</h2>
        <div class="capabilities-grid">
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
            </div>
            <div>
              <h3>Solar layout creation</h3>
              <p>Place panels on accurate 3D roof models generated from satellite imagery. Auto-detect usable area, orientation, and tilt.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <div>
              <h3>Shadow and roof analysis</h3>
              <p>Run shadow analysis across seasons and times of day. Identify shadow zones, obstructions, and keepouts automatically.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div>
              <h3>BOQ generation</h3>
              <p>Auto-generate bill of quantities from your design — panels, inverters, structures, cables. Accurate quantities, zero manual math.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
            </div>
            <div>
              <h3>Project reports</h3>
              <p>Generate detailed project reports with system specs, layout views, yield estimates, and component lists — all from project data.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <div>
              <h3>Proposal-ready design export</h3>
              <p>Export designs directly into pvNXT Proposal — no manual recreation. Design data flows automatically into customer-ready proposals.</p>
            </div>
          </div>
          <div class="capability-item">
            <div class="capability-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            </div>
            <div>
              <h3>Project tracking</h3>
              <p>Track project progress from design through installation. Status updates, milestones, and team visibility — all in one dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BEFORE vs AFTER ===== -->
    <section class="section" id="comparison">
      <div class="container">
        <p class="overline"><span></span>Before & After</p>
        <h2>The difference Studio makes.</h2>
        <div class="comparison-grid">
          <div class="comparison-card comparison-before">
            <div class="comparison-header">
              <div class="comparison-circle before-circle">X</div>
              <h3>Before</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-before">X</span>Manual CAD drawings taking 2-3 days</li>
              <li><span class="marker-before">X</span>Sizing errors requiring multiple revisions</li>
              <li><span class="marker-before">X</span>Shadow analysis done separately in another tool</li>
            </ul>
          </div>
          <div class="comparison-card comparison-after">
            <div class="comparison-header">
              <div class="comparison-circle after-circle">✓</div>
              <h3>After (pvNXT Studio)</h3>
            </div>
            <ul class="comparison-list">
              <li><span class="marker-after">✓</span>Designs generated in under 15 minutes</li>
              <li><span class="marker-after">✓</span>Accurate first time, no rework</li>
              <li><span class="marker-after">✓</span>Shadow analysis built into the design flow</li>
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
            <p class="outcome-text">Design time reduced from days to minutes. Fewer errors, faster turnaround, and designs that feed directly into proposals.</p>
          </div>
          <div class="outcome-card">
            <p class="overline"><span></span>Process Impact</p>
            <p class="outcome-text">Eliminates the design bottleneck that delays every downstream step. Proposal and project teams get accurate data without waiting.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== KEY FEATURES ===== -->
    <section class="section" id="features">
      <div class="container">
        <p class="overline"><span></span>Key features</p>
        <h2>Everything EPC teams need.</h2>
        <div class="features-grid">
          <div class="feature-card">Solar layout creation</div>
          <div class="feature-card">Shadow/roof analysis</div>
          <div class="feature-card">BOQ generation</div>
          <div class="feature-card">Project reports</div>
          <div class="feature-card">Proposal-ready output</div>
          <div class="feature-card">Project tracking</div>
        </div>
      </div>
    </section>

    <!-- ===== WHO IT'S FOR ===== -->
    <section class="section section-soft" id="who">
      <div class="container">
        <p class="overline"><span></span>Who it's for</p>
        <h2>Built for solar design teams.</h2>
        <div class="who-chips">
          <span class="who-chip">EPC designers</span>
          <span class="who-chip">Sales teams</span>
          <span class="who-chip">Solar businesses</span>
        </div>
      </div>
    </section>

    <!-- ===== THE ATLAS CONNECTION ===== -->
    <section class="section" id="atlas-connection">
      <div class="container atlas-note">
        <p class="overline"><span></span>Powered by Atlas</p>
        <h2>Satellite data. Studio design.</h2>
        <p class="lead">Studio designs are built on accurate 3D roof models generated by pvNXT Atlas — stereo satellite imagery processed through AI photogrammetry. No manual measurements. No repeated site visits. See how the <a href="../index.html#how-it-works" class="text-link">Atlas pipeline works</a>.</p>
      </div>
    </section>

    <!-- ===== ECOSYSTEM NAV ===== -->
    <section class="section section-soft" id="ecosystem-nav">
      <div class="container">
        <p class="overline"><span></span>Part of the pvNXT suite</p>
        <h2>Explore other products.</h2>
        <div class="eco-nav-grid">
          <a href="connect.html" class="eco-nav-card">Connect <span>Consumer portal →</span></a>
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
          <h2>See Studio in action.</h2>
          <p class="lead">Book a demo for your EPC team. We'll show you how Studio turns satellite data into proposal-ready designs in minutes.</p>
          <div class="cta-final-buttons">
            <a href="../contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
            <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener" class="btn btn-secondary">Visit live portal ↗</a>
          </div>
        </div>
      </div>
    </section>

  </main>

  <div id="footer-placeholder"></div>
  <script src="../assets/js/main.js"></script>
</body>
</html>

STEP 2: Create the CSS file at `assets/css/pages/product.css` with this content:

/* ===== PRODUCT PAGE — GLOBAL ===== */
.product-hero { padding: 140px 0 80px; background: radial-gradient(circle at 30% 20%, rgba(6,159,177,.1), transparent 50%), linear-gradient(180deg, #f8fcfd 0%, #fff 100%); }
.product-hero-meta { display: flex; align-items: center; gap: 8px; font-size: .82rem; color: var(--muted); margin: 18px 0 24px; }
.product-badge { display: inline-block; font-size: .65rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; padding: 3px 10px; border-radius: 999px; }
.badge-live { background: rgba(6,159,177,.12); color: var(--brand-dark); }
.product-hero-cta { display: flex; flex-wrap: wrap; gap: 12px; }
.product-hero-visual { position: relative; min-height: 380px; display: grid; place-items: center; }
.product-visual-placeholder { width: 100%; max-width: 560px; aspect-ratio: 4/3; border-radius: 24px; background: linear-gradient(135deg, rgba(6,159,177,.06), rgba(6,159,177,.12)); border: 1px solid var(--line); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; }
.product-visual-icon { width: 72px; height: 72px; border-radius: 50%; background: #fff; border: 1px solid rgba(6,159,177,.2); display: flex; align-items: center; justify-content: center; color: var(--brand); }
.product-visual-label { font-size: .76rem; color: var(--muted); max-width: 320px; text-align: center; line-height: 1.5; }

/* Overview */
.product-overview { max-width: 720px; }
.product-overview .lead { margin-top: 16px; }

/* Capabilities */
.capabilities-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 40px; }
.capability-item { display: flex; gap: 16px; padding: 20px 22px; background: #fff; border: 1px solid var(--line); border-radius: 16px; transition: border-color .25s ease, box-shadow .25s ease; }
.capability-item:hover { border-color: rgba(6,159,177,.3); box-shadow: 0 12px 36px rgba(6,159,177,.06); }
.capability-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(6,159,177,.1); display: flex; align-items: center; justify-content: center; color: var(--brand); flex-shrink: 0; }
.capability-item h3 { font-size: .92rem; margin-bottom: 3px; }
.capability-item p { font-size: .82rem; color: var(--muted); margin: 0; line-height: 1.5; }

/* Before vs After */
.comparison-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 40px; }
.comparison-card { padding: 32px 28px; border-radius: 20px; }
.comparison-before { background: #fef5f5; border: 1px solid #fecaca; }
.comparison-after { background: #f0fdf9; border: 1px solid #a7f3d0; }
.comparison-header { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
.comparison-circle { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: .85rem; }
.before-circle { background: #fee2e2; color: #ef4444; }
.after-circle { background: #d1fae5; color: #10b981; }
.comparison-header h3 { margin: 0; font-size: 1.02rem; }
.comparison-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.comparison-list li { display: flex; align-items: flex-start; gap: 10px; font-size: .88rem; color: var(--muted); line-height: 1.5; }
.marker-before { color: #ef4444; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
.marker-after { color: #10b981; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

/* Outcome */
.outcome-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.outcome-card { padding: 32px 28px; border-radius: 20px; }
.outcome-card:first-child { background: linear-gradient(135deg, rgba(6,159,177,.08), rgba(6,159,177,.03)); border: 1px solid rgba(6,159,177,.15); }
.outcome-card:last-child { background: #fff; border: 1px solid var(--line); }
.outcome-text { font-size: .95rem; color: var(--ink); font-weight: 500; line-height: 1.65; margin: 0; }

/* Features */
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 40px; }
.feature-card { padding: 16px 20px; background: #fff; border: 1px solid var(--line); border-radius: 14px; font-size: .88rem; color: var(--ink); font-weight: 600; }

/* Who */
.who-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.who-chip { padding: 8px 18px; border-radius: 999px; background: rgba(6,159,177,.1); color: var(--brand-dark); font-size: .84rem; font-weight: 600; }

/* Atlas Note */
.atlas-note { max-width: 720px; }
.atlas-note .lead { margin-top: 16px; }

/* Ecosystem Nav */
.eco-nav-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 32px; }
.eco-nav-card { padding: 18px 22px; background: #fff; border: 1px solid var(--line); border-radius: 16px; text-decoration: none; color: var(--ink); font-weight: 700; font-size: .9rem; display: flex; justify-content: space-between; align-items: center; transition: border-color .25s ease, box-shadow .25s ease; }
.eco-nav-card:hover { border-color: rgba(6,159,177,.35); box-shadow: 0 8px 30px rgba(6,159,177,.08); }
.eco-nav-card span { font-size: .76rem; color: var(--brand-dark); font-weight: 600; }

/* CTA — reuse from homepage */
.cta-final { background: radial-gradient(circle at 20% 80%, rgba(6,159,177,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(6,159,177,.05), transparent 35%); }
.cta-final-inner { text-align: center; max-width: 560px; margin: 0 auto; }
.cta-final-inner .overline { justify-content: center; }
.cta-final-inner .lead { margin: 0 auto 32px; }
.cta-final-buttons { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }

/* Responsive */
@media (max-width: 860px) {
  .capabilities-grid { grid-template-columns: 1fr; }
  .comparison-grid { grid-template-columns: 1fr; }
  .outcome-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .eco-nav-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .features-grid { grid-template-columns: 1fr; }
  .eco-nav-grid { grid-template-columns: 1fr; }
  .product-hero { padding: 120px 0 60px; }
  .product-hero-visual { min-height: 260px; }
}

STEP 3: The header and footer use relative paths. The main.js script loads header from `../components/header.html` and footer from `../components/footer.html` (since we're in products/ subdirectory). Verify that main.js uses a path relative to the current page. If it uses absolute paths or a base path, it should work. If not, we may need to update the path in main.js.

For now, assume main.js handles paths correctly based on the existing about.html and contact.html which are in the root and use `assets/js/main.js`.

Actually, since products/studio.html loads `../assets/js/main.js`, the JS will execute from the products/ directory context. The main.js likely uses relative paths like `components/header.html` which would become `../components/header.html` from the products/ folder. We may need to check.

For this task, use the script tag as shown. If header/footer don't load, we'll fix in a follow-up.

---

CRITICAL RULES:
- Create the products/ directory if it doesn't exist
- Create the CSS file `assets/css/pages/product.css` if it doesn't exist
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper)
- Use existing utility classes: .section, .section-soft, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary, .text-link, .page-hero, .page-hero-grid, .reveal
- The page shell (head, meta, fonts, loader, header placeholder, footer placeholder) must match about.html
- All CSS goes into assets/css/pages/product.css — DO NOT touch style.css or other page CSS files
- DO NOT change any existing file except creating these two new files
- Links to other product pages (connect.html, go.html, etc.) — these pages don't exist yet. The links are READY for when they're created.
- Nav paths: use `../` prefix for links back to root (../index.html, ../contact.html, etc.) since this file is in products/ subdirectory

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. products/studio.html created with all 10 sections
2. assets/css/pages/product.css created with all styles
3. Page uses existing design system (CSS variables, utility classes)
4. No existing files were modified

---

## INSTRUCTIONS FOR NEW AI CHAT

1. Read everything above. Understand the project, design system, and current state.
2. Read the Gemma prompt at the bottom of this file (after the --- line).
3. DO NOT add commentary. DO NOT suggest changes.
4. Reply ONLY with: "Ready. The next task is to create products/studio.html. Give me the exact Gemma prompt and I will execute it."
5. Wait for Rajat to give the go-ahead before doing anything.

NOTE: The Gemma prompt below is already complete. Rajat will copy-paste it to Gemma directly. Your job as the planning AI is to understand the project state, verify everything looks correct, and continue generating prompts for the remaining 5 product pages after Studio is done.
