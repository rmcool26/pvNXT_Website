Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT. The page has a premium design system (CSS variables, .overline, .section, h1/h2/h3, .lead, .btn, .text-link). The design CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS variables (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper). Use existing classes where possible. Add new styles ONLY to home.css.

---

TASK: Add a new Products section AFTER the magic-section (after its closing </section> tag) and BEFORE whatever follows (which may be nothing — the page may end after S3). Insert this new section at that location.

INSERT THIS HTML:

<!-- ===== S4: PRODUCTS ===== -->
<section class="section section-soft" id="products">
  <div class="container">

    <div class="products-header">
      <p class="overline"><span></span>Products</p>
      <h2>6 products. One data layer.</h2>
      <p class="lead">Each product connects to shared project data — no silos, no double entry.</p>
    </div>

    <div class="products-grid">
      <!-- Product 01: Studio -->
      <a href="products/studio.html" class="product-card">
        <span class="product-num">01</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <div class="product-card-body">
          <h3>Studio</h3>
          <p>EPC design and proposal workspace</p>
        </div>
        <span class="product-badge badge-live">Live</span>
      </a>

      <!-- Product 02: Connect -->
      <a href="products/connect.html" class="product-card">
        <span class="product-num">02</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </div>
        <div class="product-card-body">
          <h3>Connect</h3>
          <p>Consumer solar portal</p>
        </div>
        <span class="product-badge badge-live">Live</span>
      </a>

      <!-- Product 03: Go -->
      <a href="products/go.html" class="product-card">
        <span class="product-num">03</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </div>
        <div class="product-card-body">
          <h3>Go</h3>
          <p>Installer field portal</p>
        </div>
        <span class="product-badge badge-live">Live</span>
      </a>

      <!-- Product 04: Proposal -->
      <a href="products/proposal.html" class="product-card">
        <span class="product-num">04</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
        </div>
        <div class="product-card-body">
          <h3>Proposal</h3>
          <p>Automated customer proposals</p>
        </div>
        <span class="product-badge badge-live">Live</span>
      </a>

      <!-- Product 05: Field App -->
      <a href="products/field-app.html" class="product-card">
        <span class="product-num">05</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
        </div>
        <div class="product-card-body">
          <h3>Field App</h3>
          <p>Site survey capture</p>
        </div>
        <span class="product-badge badge-internal">Internal</span>
      </a>

      <!-- Product 06: SCADA -->
      <a href="products/scada.html" class="product-card">
        <span class="product-num">06</span>
        <div class="product-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
        </div>
        <div class="product-card-body">
          <h3>SCADA</h3>
          <p>Plant operations monitoring</p>
        </div>
        <span class="product-badge badge-progress">In progress</span>
      </a>
    </div>

    <!-- ONE DATA LAYER Banner -->
    <div class="products-datalayer">
      <p class="datalayer-label">ONE DATA LAYER</p>
      <p class="datalayer-desc">All six portals read and write to the same unified data source</p>
    </div>

  </div>
</section>

STEP 2: Add CSS at the END of assets/css/pages/home.css:

/* ===== S4: PRODUCTS ===== */
.products-header { text-align: center; max-width: 560px; margin: 0 auto 56px; }
.products-header .overline { justify-content: center; }
.products-header .lead { margin: 0 auto; }

.products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 48px; }

.product-card { position: relative; display: flex; flex-direction: column; gap: 14px; padding: 28px 24px 24px; border-radius: var(--radius-lg); background: #fff; border: 1px solid var(--line); transition: transform .3s var(--ease), box-shadow .3s var(--ease), border-color .3s ease; text-decoration: none; color: inherit; }
.product-card:hover { transform: translateY(-4px); box-shadow: 0 24px 60px rgba(6,159,177,.1); border-color: rgba(6,159,177,.28); }
.product-num { font-size: .68rem; font-weight: 800; color: var(--brand-dark); letter-spacing: .08em; }
.product-icon-wrap { width: 36px; height: 36px; border-radius: 10px; background: rgba(6,159,177,.1); display: flex; align-items: center; justify-content: center; color: var(--brand); }
.product-card-body h3 { font-size: 1rem; margin-bottom: 3px; }
.product-card-body p { font-size: .82rem; color: var(--muted); margin: 0; line-height: 1.45; }

.product-badge { display: inline-block; font-size: .65rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; padding: 3px 10px; border-radius: 999px; width: fit-content; }
.badge-live { background: rgba(6,159,177,.1); color: var(--brand-dark); }
.badge-internal { background: rgba(120,120,128,.08); color: #5d5d6e; }
.badge-progress { background: rgba(184,132,35,.1); color: #8a6218; }

.products-datalayer { text-align: center; padding: 22px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.datalayer-label { font-size: .73rem; font-weight: 800; color: var(--brand-dark); letter-spacing: .1em; margin: 0 0 4px; }
.datalayer-desc { font-size: .82rem; color: var(--muted); margin: 0; }

@media (max-width: 860px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .products-grid { grid-template-columns: 1fr; }
  .product-card { flex-direction: row; flex-wrap: wrap; align-items: center; gap: 10px; }
  .product-card-body { flex: 1; min-width: 0; }
}
---

CRITICAL RULES:
- Insert the new products section AFTER magic-section closing tag.
- Each product card links to its dedicated page: products/studio.html, products/connect.html, etc. These pages don't exist yet — the links are ready for when they do.
- Each card has an inline SVG icon — these are part of the HTML, no external files needed.
- Badge colors: Live=teal, Internal=gray, In progress=amber.
- DO NOT delete or change any existing section.
- DO NOT change header, footer, JavaScript, or other CSS files.
- Only add new CSS at the END of home.css.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Products section inserted after magic-section
2. 6 product cards present with correct badges
3. ONE DATA LAYER banner visible
4. New CSS added to home.css
