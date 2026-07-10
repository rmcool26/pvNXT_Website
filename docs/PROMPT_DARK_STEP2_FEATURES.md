Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
STEP 2 of product page dark rhythm. S3 (capabilities) is now dark. We are now converting the Key Features section (#features) to dark. All product pages share ONE CSS file: `assets/css/pages/product.css`. ZERO HTML changes. Modify existing CSS in-place.

DO NOT touch header.html, footer.html, main.js, style.css, or any other file. DO NOT touch any other section's CSS.

---

TASK: Convert the Key Features section to dark theme on all product pages.

---

STEP 1: FIND the existing features CSS rules in product.css.

Look for: `.features-grid` and `.feature-card`. These currently have light-theme styles.

STEP 2: MODIFY these EXISTING rules. Edit in-place, do NOT add duplicate rules:

.features-grid
  Keep: display, grid, gap, margin
  Add: position: relative; z-index: 1;

.feature-card
  OLD background: background: #fff;
  NEW background: background: rgba(255,255,255,.04);
  OLD border: border: 1px solid var(--line);
  NEW border: border: 1px solid rgba(6,159,177,.12);
  ADD hover effect if not present: transition: background .25s ease, border-color .25s ease;
  OLD color: (whatever it is)
  NEW color: color: rgba(255,255,255,.8);

STEP 3: ADD the section background at the END of product.css:

/* ===== DARK: Features Section Background ===== */
#features { background: radial-gradient(circle at 30% 60%, rgba(6,159,177,.1), transparent 50%), linear-gradient(135deg, #082b3b, #031d2a); position: relative; overflow: hidden; }
#features::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#features .overline { color: rgba(255,255,255,.5); position: relative; z-index: 1; }
#features .overline span { background: rgba(255,255,255,.5); }
#features h2 { color: #fff; position: relative; z-index: 1; }
#features .container { position: relative; z-index: 1; }

---

CRITICAL RULES:
- MODIFY existing .feature-card and .features-grid rules in-place — edit, don't duplicate
- ADD the section background block at the END of product.css
- DO NOT change any HTML
- DO NOT touch any other file or section
- DO NOT use !important on the features section background (it doesn't have .section-soft conflict)
- The .feature-card hover effect: on hover, change bg and border slightly

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. .feature-card rule modified (bg, border, color changed to dark)
2. Section background with grid overlay added for #features
3. No HTML changed
4. No other files or sections touched
