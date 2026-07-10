Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are enhancing the pvNXT homepage (index.html, v3-main branch) with a dark theme rhythm. The "Magic" section (S3, id="how-it-works") is being converted to a premium dark treatment — inspired by the Beyond Solar section design from services.html. The CSS is in assets/css/pages/home.css. Use CSS variables: --brand (#069fb1), --night (#071824), --ink, --muted. DO NOT touch header, footer, main.js, style.css.

---

TASK: Convert the Magic section (S3) to a premium dark theme while keeping its exact HTML structure and layout.

---

STEP 1: FIND the Magic section in index.html.

It has: section class="section magic-section" id="how-it-works". Inside are: magic-header, magic-atlas (pipeline), magic-ecosystem (hub-and-spoke), magic-cta.

DO NOT change this HTML. The HTML structure stays exactly as it is. We are only updating the CSS.

---

STEP 2: FIND the existing magic-section CSS in home.css.

Look for the CSS block starting with `/* ===== S3: THE MAGIC ===== */` which contains: .magic-section, .magic-header, .magic-atlas, .atlas-illustration, .atlas-stage, .atlas-stage-icon, .atlas-stage-title, .atlas-stage-desc, .atlas-stage-note, .atlas-connector, .atlas-caption, .magic-ecosystem, .ecosystem-label, .eco-hub-desktop, .eco-center, .eco-center-circle, .eco-center-label, .eco-nodes, .eco-node, .node-1 through .node-7, .eco-node-dot, .eco-node-name, .eco-node-func, .eco-hub-lines, .eco-hub-mobile, .eco-mobile-list, .eco-mobile-item, .eco-mobile-num, .ecosystem-caption, .magic-cta, and the responsive @media block.

REPLACE this entire CSS block (from `/* ===== S3: THE MAGIC ===== */` to the closing of its `@media` block) with the dark-enhanced version below.

---

STEP 3: REPLACE with this dark-enhanced CSS:

/* ===== S3: THE MAGIC — DARK ===== */
.magic-section { padding: 118px 0; background: radial-gradient(circle at 50% 30%, rgba(6,159,177,.12), transparent 55%), linear-gradient(135deg, #031d2a, #082b3b); position: relative; overflow: hidden; }
.magic-section::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; }
.magic-header { text-align: center; max-width: 640px; margin: 0 auto 72px; position: relative; z-index: 1; }
.magic-header .overline { justify-content: center; color: #84e6ee; }
.magic-header .overline span { background: #84e6ee; }
.magic-header h2 { margin-bottom: 14px; color: #fff; }
.magic-header .lead { margin: 0 auto; color: rgba(255,255,255,.65); }

/* Atlas Pipeline — dark */
.magic-atlas { max-width: 960px; margin: 0 auto 96px; position: relative; z-index: 1; }
.atlas-illustration { display: flex; align-items: center; justify-content: center; gap: 0; padding: 48px 0; background: linear-gradient(180deg, rgba(6,159,177,.12), rgba(6,159,177,.05)); border-radius: var(--radius-xl); border: 1px solid rgba(6,159,177,.18); }
.atlas-stage { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 0 0 180px; }
.atlas-stage-icon { width: 72px; height: 72px; border-radius: 50%; background: rgba(255,255,255,.06); border: 1px solid rgba(6,159,177,.3); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 8px 30px rgba(6,159,177,.15); }
.atlas-stage-icon svg { stroke: #84e6ee; }
.atlas-stage-title { font-size: .92rem; font-weight: 800; color: #fff; margin: 0 0 4px; }
.atlas-stage-desc { font-size: .82rem; color: #84e6ee; font-weight: 600; margin: 0 0 2px; }
.atlas-stage-note { font-size: .72rem; color: rgba(255,255,255,.5); margin: 0; }
.atlas-connector { flex: 0 0 80px; display: flex; align-items: center; justify-content: center; padding-bottom: 32px; }
.atlas-connector svg line { stroke: rgba(6,159,177,.5); }
.atlas-connector svg circle { fill: #84e6ee; }
.atlas-caption { text-align: center; font-size: .82rem; color: rgba(255,255,255,.55); margin-top: 18px; line-height: 1.65; position: relative; z-index: 1; }

/* Ecosystem Hub — dark */
.magic-ecosystem { max-width: 960px; margin: 0 auto; position: relative; z-index: 1; }
.ecosystem-label { text-align: center; font-size: .73rem; font-weight: 800; color: rgba(255,255,255,.45); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 32px; }

/* Desktop Hub */
.eco-hub-desktop { display: block; position: relative; width: 100%; max-width: 700px; aspect-ratio: 1/1; margin: 0 auto; }
.eco-center { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.eco-center-circle { width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, rgba(6,159,177,.25), rgba(6,159,177,.1)); border: 2px solid var(--brand); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 80px rgba(6,159,177,.25); }
.eco-center-label { font-size: .65rem; font-weight: 800; color: #84e6ee; text-align: center; line-height: 1.3; letter-spacing: .06em; }
.eco-nodes { position: absolute; inset: 0; }
.eco-node { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 3px; width: 110px; }
.node-1 { left: 50%; top: 2%; transform: translateX(-50%); }
.node-2 { right: 6%; top: 14%; }
.node-3 { right: 0%; top: 42%; }
.node-4 { right: 6%; bottom: 14%; }
.node-5 { left: 50%; bottom: 2%; transform: translateX(-50%); }
.node-6 { left: 6%; bottom: 14%; }
.node-7 { left: 0%; top: 42%; }
.eco-node-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 16px rgba(6,159,177,.5); }
.eco-node-name { font-size: .78rem; font-weight: 800; color: #fff; }
.eco-node-func { font-size: .68rem; color: rgba(255,255,255,.5); }
.eco-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }
.eco-hub-lines line { stroke: rgba(6,159,177,.3); }

/* Mobile Hub */
.eco-hub-mobile { display: none; }
.eco-mobile-list { display: flex; flex-direction: column; gap: 0; }
.eco-mobile-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.08); }
.eco-mobile-num { width: 28px; height: 28px; border-radius: 50%; background: rgba(6,159,177,.2); display: flex; align-items: center; justify-content: center; font-size: .73rem; font-weight: 800; color: #84e6ee; flex-shrink: 0; }
.eco-mobile-item strong { display: block; font-size: .88rem; color: #fff; }
.eco-mobile-item span { font-size: .76rem; color: rgba(255,255,255,.5); }

.ecosystem-caption { text-align: center; font-size: .88rem; color: rgba(255,255,255,.55); margin-top: 24px; font-weight: 500; }

.magic-cta { text-align: center; margin-top: 48px; position: relative; z-index: 1; }
.magic-cta .btn-primary { box-shadow: 0 16px 36px rgba(6,159,177,.35); }

@media (max-width: 860px) {
 .magic-atlas { margin-bottom: 64px; }
 .atlas-illustration { flex-direction: column; gap: 16px; padding: 36px 24px; }
 .atlas-stage { flex: none; }
 .atlas-connector { flex: none; transform: rotate(90deg); padding: 0; }
 .eco-hub-desktop { display: none; }
 .eco-hub-mobile { display: block; }
}

---

STEP 4: The Magic section's navbar anchor uses id="how-it-works" which is linked from S1 hero CTA and S2 text-link. The id stays the same. The dark section should be clearly distinguishable from the S2 story-section above.

---

CRITICAL RULES:
- DO NOT change the HTML in index.html. Only CSS changes.
- DO NOT change any other section's CSS (S2 story, S4 products, etc.)
- DO NOT touch header.html, footer.html, main.js, or style.css
- DO NOT touch other CSS files
- REPLACE the existing S3 CSS block (from `/* ===== S3: THE MAGIC ===== */` to its media query end) with the new dark CSS
- The `::before` pseudo-element adds a grid overlay — same technique as Beyond Solar section
- The section already has `overflow: hidden` — helps contain the grid overlay
- Color mapping: text-ink → #fff, text-muted → rgba(255,255,255,.5-.65), brand-dark → #84e6ee
- Atlas pipeline inner box keeps its border-radius and border but gets dark-adapted bg
- Hub center circle gets enhanced glow with larger box-shadow spread
- Keep existing responsive breakpoints and layout behavior

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Magic section CSS replaced with dark theme
2. HTML structure unchanged
3. No other sections or files modified
4. Grid overlay visible on the dark background
