Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are applying dark theme rhythm to ALL product pages (studio.html, connect.html, go.html, proposal.html, field-app.html, scada.html). All product pages share ONE CSS file: `assets/css/pages/product.css`. We will make 3 sections dark across all pages using CSS only. NO HTML changes.

The 3 sections to convert: #capabilities, #features, #ecosystem-nav

Dark treatment: gradient background + grid overlay + white/light teal text. Same DNA as homepage S3 and S6 dark sections.

---

TASK: Convert 3 sections (#capabilities, #features, #ecosystem-nav) to dark theme in product.css only. No HTML changes.

---

STEP 1: FIND the CSS for capabilities section in product.css.

Look for styles related to: .capabilities-grid, .capability-item, .capability-icon, capability-item h3, capability-item p. These are currently light-themed.

ADD the following dark-theme overrides at the END of product.css:

/* ===== DARK RHYTHM: Capabilities ===== */
#capabilities { background: radial-gradient(circle at 70% 20%, rgba(6,159,177,.12), transparent 55%), linear-gradient(135deg, #031d2a, #082b3b); position: relative; overflow: hidden; }
#capabilities::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; }
#capabilities .overline { color: #84e6ee; position: relative; z-index: 1; }
#capabilities .overline span { background: #84e6ee; }
#capabilities h2 { color: #fff; position: relative; z-index: 1; }
#capabilities .lead { color: rgba(255,255,255,.65); position: relative; z-index: 1; }
#capabilities .capabilities-grid { position: relative; z-index: 1; }
#capabilities .capability-item { background: rgba(255,255,255,.04); border: 1px solid rgba(6,159,177,.15); }
#capabilities .capability-item:hover { border-color: rgba(6,159,177,.35); box-shadow: 0 12px 36px rgba(6,159,177,.1); }
#capabilities .capability-item h3 { color: #fff; }
#capabilities .capability-item p { color: rgba(255,255,255,.6); }
#capabilities .capability-icon { background: rgba(6,159,177,.15); color: #84e6ee; }

STEP 2: ADD dark-theme overrides for the features section. ADD at the END of product.css:

/* ===== DARK RHYTHM: Key Features ===== */
#features { background: radial-gradient(circle at 30% 60%, rgba(6,159,177,.1), transparent 50%), linear-gradient(135deg, #082b3b, #031d2a); position: relative; overflow: hidden; }
#features::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; }
#features .overline { color: rgba(255,255,255,.5); position: relative; z-index: 1; }
#features .overline span { background: rgba(255,255,255,.5); }
#features h2 { color: #fff; position: relative; z-index: 1; }
#features .lead { color: rgba(255,255,255,.6); position: relative; z-index: 1; }
#features .features-grid { position: relative; z-index: 1; }
#features .feature-card { background: rgba(255,255,255,.04); border: 1px solid rgba(6,159,177,.12); color: rgba(255,255,255,.8); }
#features .feature-card:hover { background: rgba(6,159,177,.08); border-color: rgba(6,159,177,.25); }

STEP 3: ADD dark-theme overrides for the ecosystem nav section. ADD at the END of product.css:

/* ===== DARK RHYTHM: Ecosystem Nav ===== */
#ecosystem-nav { background: radial-gradient(circle at 50% 80%, rgba(6,159,177,.1), transparent 50%), linear-gradient(135deg, #031d2a, #082b3b); position: relative; overflow: hidden; }
#ecosystem-nav::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; }
#ecosystem-nav .overline { color: rgba(255,255,255,.5); position: relative; z-index: 1; }
#ecosystem-nav .overline span { background: rgba(255,255,255,.5); }
#ecosystem-nav h2 { color: #fff; position: relative; z-index: 1; }
#ecosystem-nav .eco-nav-grid { position: relative; z-index: 1; }
#ecosystem-nav .eco-nav-card { background: rgba(255,255,255,.04); border: 1px solid rgba(6,159,177,.12); color: #fff; }
#ecosystem-nav .eco-nav-card:hover { background: rgba(6,159,177,.08); border-color: rgba(6,159,177,.3); box-shadow: 0 8px 30px rgba(6,159,177,.12); }
#ecosystem-nav .eco-nav-card span { color: #84e6ee; }

---

STEP 4: Also FIX the section-soft class on dark sections. The #capabilities section uses class="section section-soft". The .section-soft class has a light gradient background that would conflict. Add this override at the END of product.css to prevent the light gradient from applying to our dark sections:

/* ===== DARK RHYTHM: Override section-soft on dark sections ===== */
#capabilities.section-soft, #features.section-soft, #ecosystem-nav.section-soft { background: transparent; }

This ensures the `.section-soft` light gradient doesn't override our dark backgrounds.

---

CRITICAL RULES:
- ADD new CSS at the END of assets/css/pages/product.css only
- DO NOT change any HTML in any product page
- DO NOT remove or modify any existing CSS in product.css — only add new rules at the end
- DO NOT touch header.html, footer.html, main.js, style.css, or any other file
- All dark sections use the same grid-overlay technique (58px squares, white 4% opacity)
- Each dark section has a UNIQUE gradient direction to avoid identical look
- Capabilities: #031d2a → #082b3b (same direction as S3)
- Features: #082b3b → #031d2a (inverted, same as S6)  
- Ecosystem: #031d2a → #082b3b (matches capabilities)
- All text: white or rgba white, accent: #84e6ee (light teal)
- Cards/items get rgba(255,255,255,.04) bg with teal borders
- The #id selectors ensure these styles only affect the 3 specific sections
- These CSS rules will automatically apply to ALL 6 product pages since they share product.css

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Dark CSS added at END of product.css for capabilities, features, and ecosystem-nav
2. section-soft override added to prevent conflict
3. No HTML changed in any product page
4. No other files modified
5. All 6 product pages will now have dark rhythm (3 dark sections each)
