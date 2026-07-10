Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are fixing and enhancing the Products section (S4) on the pvNXT homepage — `index.html`, v3-main branch. The CSS is in `assets/css/pages/home.css`. The design system uses CSS variables (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper). Header, footer, JS, style.css — DO NOT TOUCH.

---

TASK: Fix and enhance the Products section (S4) in `index.html` and `home.css`.

---

STEP 1: FIND the current Products section in index.html.

Look for a section with id="products". It currently has simple cards with numbers and "Explore X →" links. REPLACE the ENTIRE section (from its opening `<section>` to its closing `</section>`) with this improved version:

<section class="section section-soft products-section-new" id="products">
  <div class="container">
    
    <div class="products-header reveal">
      <p class="overline"><span></span>Our Products</p>
      <h2>6 products. One data layer.</h2>
      <p class="lead">Each product connects to shared project data — no silos, no double entry.</p>
    </div>

    <div class="products-grid-new">
      
      <!-- 01: Studio -->
      <a href="products/studio.html" class="product-card-new reveal">
        <span class="product-card-num">01</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        </div>
        <div class="product-card-info">
          <h3>Studio</h3>
          <p>EPC design and proposal workspace</p>
        </div>
        <span class="product-card-badge badge-live">Live</span>
        <span class="product-card-arrow">→</span>
      </a>

      <!-- 02: Connect -->
      <a href="products/connect.html" class="product-card-new reveal">
        <span class="product-card-num">02</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </div>
        <div class="product-card-info">
          <h3>Connect</h3>
          <p>Consumer solar portal</p>
        </div>
        <span class="product-card-badge badge-live">Live</span>
        <span class="product-card-arrow">→</span>
      </a>

      <!-- 03: Go -->
      <a href="products/go.html" class="product-card-new reveal">
        <span class="product-card-num">03</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </div>
        <div class="product-card-info">
          <h3>Go</h3>
          <p>Installer field portal</p>
        </div>
        <span class="product-card-badge badge-live">Live</span>
        <span class="product-card-arrow">→</span>
      </a>

      <!-- 04: Proposal -->
      <a href="products/proposal.html" class="product-card-new reveal">
        <span class="product-card-num">04</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
        </div>
        <div class="product-card-info">
          <h3>Proposal</h3>
          <p>Automated customer proposals</p>
        </div>
        <span class="product-card-badge badge-live">Live</span>
        <span class="product-card-arrow">→</span>
      </a>

      <!-- 05: Field App -->
      <a href="products/field-app.html" class="product-card-new reveal">
        <span class="product-card-num">05</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
        </div>
        <div class="product-card-info">
          <h3>Field App</h3>
          <p>Site survey capture</p>
        </div>
        <span class="product-card-badge badge-internal">Internal</span>
        <span class="product-card-arrow">→</span>
      </a>

      <!-- 06: SCADA -->
      <a href="products/scada.html" class="product-card-new reveal">
        <span class="product-card-num">06</span>
        <div class="product-card-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/></svg>
        </div>
        <div class="product-card-info">
          <h3>SCADA</h3>
          <p>Plant operations monitoring</p>
        </div>
        <span class="product-card-badge badge-progress">In Progress</span>
        <span class="product-card-arrow">→</span>
      </a>

    </div>

    <div class="products-datalayer-new reveal">
      <div class="datalayer-inner">
        <div class="datalayer-line"></div>
        <p class="datalayer-label-new">ONE DATA LAYER</p>
        <p class="datalayer-desc-new">All six portals read and write to the same unified data source</p>
        <div class="datalayer-line"></div>
      </div>
    </div>

  </div>
</section>

STEP 2: FIND and REMOVE the old products section's CSS in home.css.

Search for the CSS block starting with `/* ===== S4: PRODUCTS ===== */` that contains `.product-card`, `.product-num`, `.product-icon-wrap`, `.product-card-body`, `.product-badge`, `.badge-live`, `.badge-internal`, `.badge-progress`, `.products-datalayer`, `.datalayer-label`, `.datalayer-desc`, and the responsive media queries for products-grid. DELETE this entire CSS block.

Then ALSO find and remove the `/* ===== S4: PRODUCTS (Beyond Solar Design) ===== */` CSS block that contains `.output-section`, `.output-shell`, `.output-columns` etc. DELETE this entire block too (it was from a failed attempt).

STEP 3: Add this new CSS at the END of `assets/css/pages/home.css`:

/* ===== S4: PRODUCTS — ENHANCED ===== */
.products-section-new { background: linear-gradient(180deg, #fff 0%, #f9fcfd 100%); }
.products-header { text-align: center; max-width: 560px; margin: 0 auto 56px; }
.products-header .overline { justify-content: center; }
.products-header .lead { margin: 0 auto; }

.products-grid-new { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 56px; }

.product-card-new { position: relative; display: grid; grid-template-columns: auto 36px 1fr auto auto; grid-template-rows: auto auto; align-items: center; gap: 8px 14px; padding: 26px 28px; border-radius: 18px; background: #fff; border: 1px solid var(--line); text-decoration: none; transition: transform .35s cubic-bezier(.25,1,.5,1), box-shadow .35s cubic-bezier(.25,1,.5,1), border-color .35s ease; cursor: pointer; overflow: hidden; }
.product-card-new::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at var(--mx, 80%) var(--my, 20%), rgba(6,159,177,.06), transparent 70%); opacity: 0; transition: opacity .4s ease; pointer-events: none; z-index: 0; }
.product-card-new:hover { transform: translateY(-6px); box-shadow: 0 28px 64px rgba(6,159,177,.14); border-color: rgba(6,159,177,.35); }
.product-card-new:hover::before { opacity: 1; }
.product-card-num { grid-row: 1 / -1; font-size: .82rem; font-weight: 800; color: var(--brand-dark); letter-spacing: .04em; position: relative; z-index: 1; }
.product-card-icon { grid-row: 1 / -1; width: 36px; height: 36px; border-radius: 10px; background: rgba(6,159,177,.1); display: flex; align-items: center; justify-content: center; color: var(--brand); position: relative; z-index: 1; }
.product-card-info { position: relative; z-index: 1; }
.product-card-info h3 { font-size: 1.02rem; font-weight: 700; color: var(--ink); margin: 0 0 2px; letter-spacing: -.01em; }
.product-card-info p { font-size: .8rem; color: var(--muted); margin: 0; line-height: 1.4; }
.product-card-badge { padding: 3px 10px; border-radius: 999px; font-size: .64rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; position: relative; z-index: 1; }
.badge-live { background: rgba(6,159,177,.12); color: var(--brand-dark); }
.badge-internal { background: rgba(120,120,128,.08); color: #5d5d6e; }
.badge-progress { background: rgba(251,191,36,.12); color: #b45309; }
.product-card-arrow { font-size: .85rem; color: var(--brand-dark); opacity: 0; transform: translateX(-6px); transition: opacity .25s ease, transform .25s ease; position: relative; z-index: 1; }
.product-card-new:hover .product-card-arrow { opacity: 1; transform: translateX(0); }

/* Data Layer Banner */
.products-datalayer-new { margin-top: 8px; }
.datalayer-inner { display: flex; align-items: center; justify-content: center; gap: 20px; padding: 20px 0; }
.datalayer-line { flex: 1; height: 1px; background: var(--line); max-width: 120px; }
.datalayer-label-new { font-size: .72rem; font-weight: 800; color: var(--brand-dark); letter-spacing: .1em; margin: 0; white-space: nowrap; }
.datalayer-desc-new { font-size: .8rem; color: var(--muted); margin: 0; text-align: center; }

/* Scroll Reveal Animation via main.js — cards get .reveal class which triggers GSAP */
/* Stagger effect handled by GSAP in main.js (if not, add manually below) */

@media (max-width: 860px) { .products-grid-new { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .products-grid-new { grid-template-columns: 1fr; } .product-card-new { grid-template-columns: auto 36px 1fr auto; } .product-card-arrow { opacity: .5; transform: translateX(0); } }

STEP 4: If main.js does NOT already stagger GSAP reveals for `.products-grid-new .reveal`, add this JS to the END of `assets/js/main.js`, just before the closing part:

/* Staggered reveal for product cards */
const productCardsNew = document.querySelectorAll('.products-grid-new .reveal');
if (productCardsNew.length && typeof gsap !== 'undefined') {
  gsap.set(productCardsNew, { opacity: 0, y: 30 });
  gsap.to(productCardsNew, {
    opacity: 1, y: 0, duration: .6, stagger: .08, ease: 'power2.out',
    scrollTrigger: { trigger: '.products-grid-new', start: 'top 82%', toggleActions: 'play none none none' }
  });
}

If main.js already handles `.reveal` globally via a ScrollTrigger loop, you can SKIP adding this JS. Check the file first. If there's already a loop like `gsap.utils.toArray('.reveal').forEach(...)`, the stagger won't happen automatically — in that case, ADD the above code.

---

CRITICAL RULES:
- DO NOT change any other section in index.html. ONLY the Products section (id="products")
- DO NOT change header.html, footer.html, style.css, main.js (unless main.js needs the stagger code)
- DO NOT change any other CSS file
- REMOVE the old products CSS blocks from home.css (both the old card styles AND the output-section styles)
- ADD new CSS at the END of home.css
- Use CSS variables: var(--brand), var(--brand-dark), var(--ink), var(--muted), var(--line)
- Cards must use `.reveal` class so GSAP animates them on scroll
- h3 headings MUST have explicit color: var(--ink) — this is the heading color fix
- Status badges: Live=teal, Internal=gray, In Progress=amber

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Old products section HTML replaced with enhanced version
2. Both old CSS blocks removed from home.css (S4 Products + S4 Beyond Solar)
3. New CSS added at END of home.css with card hover effects and stagger-ready classes
4. Heading color explicitly set to var(--ink) on h3 — fixes the invisible heading issue
5. No other sections, files, or styles were modified
