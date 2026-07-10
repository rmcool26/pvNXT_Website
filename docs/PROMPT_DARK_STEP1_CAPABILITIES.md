Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding a dark theme rhythm to the pvNXT product pages ONE section at a time. This is STEP 1: the "What it does" (capabilities) section on all product pages. All product pages share ONE CSS file: `assets/css/pages/product.css`. We will make ONLY the capabilities section dark using CSS. ZERO HTML changes. Just modify the existing CSS.

DO NOT touch header.html, footer.html, main.js, style.css, or any other file.

---

TASK: Convert the capabilities section to dark theme on all product pages.

---

STEP 1: FIND the existing capabilities CSS in `assets/css/pages/product.css`.

Look for these CSS rules:
- `.capabilities-grid` (grid layout)
- `.capability-item` (each capability card)  
- `.capability-icon` (the icon container)
- `.capability-item h3` (heading)
- `.capability-item p` (description)

These currently have light-theme styles (white bg, ink text, line border).

STEP 2: MODIFY these EXISTING rules to dark theme. Do NOT add new rules at the end. Edit the existing rules in-place. Change these properties:

.capabilities-grid
  Keep: display, grid, gap
  Add: position: relative; z-index: 1;

.capability-item
  OLD background: background: #fff;
  NEW background: background: rgba(255,255,255,.04);
  OLD border: border: 1px solid var(--line);
  NEW border: border: 1px solid rgba(6,159,177,.15);
  Keep: padding, border-radius, display, gap, transition
  CHANGE hover: border-color: rgba(6,159,177,.35); box-shadow: 0 12px 36px rgba(6,159,177,.1);

.capability-icon
  OLD background: background: rgba(6,159,177,.1);
  NEW background: background: rgba(6,159,177,.15);
  OLD color: color: var(--brand);
  NEW color: color: #84e6ee;
  Keep: width, height, border-radius, display, flex

.capability-item h3
  OLD color: (whatever is currently set)
  NEW color: color: #fff;

.capability-item p
  OLD color: (whatever is currently set - likely var(--muted))
  NEW color: color: rgba(255,255,255,.6);

STEP 3: The capabilities section itself has NO unique section ID that we can style. Instead, find the capabilities-grid's PARENT section. In the HTML, it's `<section class="section section-soft" id="capabilities">`. We need to make this entire section dark WITHOUT breaking the .section-soft class for other sections.

Add THIS at the END of product.css:

/* ===== DARK: Capabilities Section Background ===== */
#capabilities { background: radial-gradient(circle at 70% 20%, rgba(6,159,177,.12), transparent 55%), linear-gradient(135deg, #031d2a, #082b3b) !important; position: relative; overflow: hidden; }
#capabilities::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#capabilities .overline { color: #84e6ee; position: relative; z-index: 1; }
#capabilities .overline span { background: #84e6ee; }
#capabilities h2 { color: #fff; position: relative; z-index: 1; }
#capabilities .container { position: relative; z-index: 1; }

The `!important` is necessary ONLY on the background override because .section-soft has its own background that would otherwise win due to specificity. This is the ONLY place we use !important.

---

CRITICAL RULES:
- MODIFY existing CSS rules for capability-item, capability-icon, h3, p — edit them in-place
- ADD the section background block at the END of product.css
- DO NOT change any HTML files
- DO NOT touch header.html, footer.html, main.js, style.css, or any other file
- DO NOT touch any other section's CSS
- The only !important usage is on the section background — justified, with explanation
- Test: Open products/studio.html after changes — "What it does" section should be dark with glowing teal icons
- The .section-soft class has its own background. Using #capabilities with !important overrides it for only this section

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. capability-item, capability-icon, h3, p rules modified to dark theme
2. Section background with grid overlay added for #capabilities
3. No HTML changed
4. No other files or sections touched
