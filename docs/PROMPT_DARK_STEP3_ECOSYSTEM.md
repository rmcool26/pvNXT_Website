Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
STEP 3 of product page dark rhythm. S3 (capabilities) and S6 (features) are now dark. We are converting the Ecosystem Nav section (#ecosystem-nav) to dark. All product pages share ONE CSS file: `assets/css/pages/product.css`. ZERO HTML changes. Modify existing CSS in-place.

DO NOT touch header.html, footer.html, main.js, style.css, or any other file. DO NOT touch any other section's CSS.

---

TASK: Convert the Ecosystem Navigation section to dark theme on all product pages.

---

STEP 1: FIND the existing ecosystem nav CSS rules in product.css.

Look for: `.eco-nav-grid` and `.eco-nav-card`. These have light-theme styles.

STEP 2: MODIFY these EXISTING rules. Edit in-place:

.eco-nav-grid
  Keep: display, grid, gap, margin
  Add: position: relative; z-index: 1;

.eco-nav-card
  OLD background: background: #fff;
  NEW background: background: rgba(255,255,255,.04);
  OLD border: border: 1px solid var(--line);
  NEW border: border: 1px solid rgba(6,159,177,.12);
  OLD color: (whatever it is for text)
  NEW color: color: #fff;
  Keep: padding, border-radius, display, flex, text-decoration, transition
  CHANGE hover: border-color: rgba(6,159,177,.3); box-shadow: 0 8px 30px rgba(6,159,177,.12);

.eco-nav-card span
  OLD color: (whatever it is)
  NEW color: color: #84e6ee;
  Keep: font-size, font-weight

STEP 3: ADD the section background at the END of product.css:

/* ===== DARK: Ecosystem Nav Background ===== */
#ecosystem-nav { background: radial-gradient(circle at 50% 80%, rgba(6,159,177,.1), transparent 50%), linear-gradient(135deg, #031d2a, #082b3b); position: relative; overflow: hidden; }
#ecosystem-nav::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#ecosystem-nav .overline { color: rgba(255,255,255,.5); position: relative; z-index: 1; }
#ecosystem-nav .overline span { background: rgba(255,255,255,.5); }
#ecosystem-nav h2 { color: #fff; position: relative; z-index: 1; }
#ecosystem-nav .container { position: relative; z-index: 1; }

---

CRITICAL RULES:
- MODIFY existing .eco-nav-card rules in-place — edit, don't duplicate
- ADD the section background block at the END of product.css
- DO NOT change any HTML
- DO NOT touch any other file or section
- DO NOT use !important (ecosystem-nav doesn't have section-soft class conflict)
- The ecosystem-nav section gradient matches capabilities direction (#031d2a → #082b3b) but different radial position

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. .eco-nav-card and .eco-nav-card span rules modified to dark
2. Section background with grid overlay added for #ecosystem-nav
3. No HTML changed
4. No other files or sections touched
