Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are enhancing the pvNXT homepage (index.html, v3-main branch) with a dark theme rhythm. S3 (Magic) is now dark. S6 (Real Results) is next. Same dark treatment: gradient background + grid overlay + white/light text. CSS is in assets/css/pages/home.css. DO NOT touch header, footer, main.js, style.css.

---

TASK: Convert the Results section (S6) to a premium dark theme. HTML stays. Only CSS changes.

---

STEP 1: FIND the existing results CSS in home.css.

Look for the block starting with `/* ===== S6: REAL RESULTS ===== */` containing: .results-section, .results-header, .results-stats, .result-stat, .result-value, .result-label, .results-points, .result-point, .result-arrow, and the @media block.

REPLACE this entire CSS block with the dark version below.

---

STEP 2: REPLACE with this dark-enhanced CSS:

/* ===== S6: REAL RESULTS — DARK ===== */
.results-section { padding: 118px 0; background: radial-gradient(circle at 20% 50%, rgba(6,159,177,.14), transparent 55%), linear-gradient(135deg, #082b3b, #031d2a); position: relative; overflow: hidden; }
.results-section::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; }
.results-header { text-align: center; max-width: 560px; margin: 0 auto 64px; position: relative; z-index: 1; }
.results-header .overline { justify-content: center; color: rgba(255,255,255,.5); }
.results-header .overline span { background: rgba(255,255,255,.5); }
.results-header h2 { color: #fff; }
.results-header .lead { margin: 0 auto; color: rgba(255,255,255,.6); }

.results-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; max-width: 860px; margin: 0 auto 72px; position: relative; z-index: 1; }
.result-stat { text-align: center; }
.result-value { font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 800; color: #5eeadb; line-height: 1; letter-spacing: -.04em; margin: 0 0 10px; transition: transform .3s ease; text-shadow: 0 0 40px rgba(94,234,219,.25); }
.result-stat:hover .result-value { transform: scale(1.06); text-shadow: 0 0 60px rgba(94,234,219,.4); }
.result-label { font-size: .85rem; color: rgba(255,255,255,.55); font-weight: 500; margin: 0; }

.results-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
.result-point { display: flex; align-items: flex-start; gap: 10px; }
.result-arrow { color: #5eeadb; font-weight: 800; font-size: .9rem; flex-shrink: 0; margin-top: 1px; }
.result-point p { font-size: .86rem; color: rgba(255,255,255,.6); margin: 0; line-height: 1.55; }
.result-point strong { color: #fff; }

@media (max-width: 700px) {
 .results-stats { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
 .results-points { grid-template-columns: 1fr; gap: 16px; }
}

---

STEP 3: The Results section ends before the "who-lane-arrow" media block in home.css. Make sure the new CSS block is placed where the old S6 CSS was — between the Who section CSS and the old CTA CSS. Keep everything else exactly as it was.

---

CRITICAL RULES:
- DO NOT change the HTML in index.html. Only CSS changes.
- DO NOT touch header.html, footer.html, main.js, or style.css
- REPLACE the old S6 CSS block with this new dark version
- Numbers (90%, 0, 3x, 40%) use a brighter teal (#5eeadb) with text-shadow glow for extra impact on dark
- Supporting points get white bold text with semi-transparent white descriptions
- Grid overlay matches S3 dark section (58px squares)
- S6 background is slightly different from S3 — inverted gradient direction (#082b3b → #031d2a) + radial at different position — so two dark sections don't look identical
- Keep all existing responsive breakpoints

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Results section CSS replaced with dark theme
2. Big numbers now use glowing teal (#5eeadb) with text-shadow
3. HTML structure unchanged
4. No other sections or files modified
