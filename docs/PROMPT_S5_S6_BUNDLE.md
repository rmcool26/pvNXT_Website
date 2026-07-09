Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT. The page has a premium design system (CSS variables, .section, .overline, h1/h2/h3, .lead, .btn, .text-link). CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS variables. Use existing classes where possible. Add new styles ONLY to home.css.

---

TASK: Add TWO new sections — S5 (Who It's For) and S6 (Real Results) — after the products section.

STEP 1: Find the closing of the products section (</section> after the ONE DATA LAYER banner). Insert S5 and S6 at that location, one after another.

INSERT THIS HTML (S5 + S6 together):

<!-- ===== S5: WHO IT'S FOR ===== -->
<section class="section who-section">
  <div class="container">
    
    <div class="who-header">
      <p class="overline"><span></span>Who it's for</p>
      <h2>Built for every solar team.</h2>
      <p class="lead">Four roles. One connected platform.</p>
    </div>

    <div class="who-lanes">
      <!-- Lane 1: EPC -->
      <a href="products/studio.html" class="who-lane">
        <div class="who-lane-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="9" y1="14" x2="12" y2="14"/></svg>
        </div>
        <div class="who-lane-body">
          <h3>EPC Companies</h3>
          <p>Manage multiple projects end-to-end with full visibility and control.</p>
        </div>
        <span class="who-lane-arrow">Explore Studio →</span>
      </a>

      <!-- Lane 2: Installer -->
      <a href="products/go.html" class="who-lane">
        <div class="who-lane-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div class="who-lane-body">
          <h3>Solar Installers</h3>
          <p>From site survey to commissioning, execute work with digital tools.</p>
        </div>
        <span class="who-lane-arrow">Explore Go →</span>
      </a>

      <!-- Lane 3: Homeowner -->
      <a href="products/connect.html" class="who-lane">
        <div class="who-lane-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        </div>
        <div class="who-lane-body">
          <h3>Homeowners</h3>
          <p>Check feasibility, compare quotes, track installation — no jargon.</p>
        </div>
        <span class="who-lane-arrow">Explore Connect →</span>
      </a>

      <!-- Lane 4: O&M -->
      <a href="products/scada.html" class="who-lane">
        <div class="who-lane-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        </div>
        <div class="who-lane-body">
          <h3>O&M Teams</h3>
          <p>Monitor plant performance, identify faults early, and maintain uptime.</p>
        </div>
        <span class="who-lane-arrow">Explore SCADA →</span>
      </a>
    </div>

  </div>
</section>

<!-- ===== S6: REAL RESULTS ===== -->
<section class="section results-section">
  <div class="container">
    
    <div class="results-header">
      <p class="overline"><span></span>Results</p>
      <h2>Measured. Not promised.</h2>
      <p class="lead">Improvements from teams using pvNXT.</p>
    </div>

    <div class="results-stats">
      <div class="result-stat">
        <p class="result-value">90%</p>
        <p class="result-label">Reduction in design time</p>
      </div>
      <div class="result-stat">
        <p class="result-value">0</p>
        <p class="result-label">Unnecessary site visits</p>
      </div>
      <div class="result-stat">
        <p class="result-value">3x</p>
        <p class="result-label">Faster proposal generation</p>
      </div>
      <div class="result-stat">
        <p class="result-value">40%</p>
        <p class="result-label">Faster project delivery</p>
      </div>
    </div>

    <div class="results-points">
      <div class="result-point">
        <span class="result-arrow">→</span>
        <p><strong>Full data traceability.</strong> Every action, change, and approval is logged.</p>
      </div>
      <div class="result-point">
        <span class="result-arrow">→</span>
        <p><strong>Better team coordination.</strong> Teams work from the same data, not different versions.</p>
      </div>
      <div class="result-point">
        <span class="result-arrow">→</span>
        <p><strong>Scalable operations.</strong> Handle more projects without adding headcount.</p>
      </div>
    </div>

  </div>
</section>

STEP 2: Add CSS at the END of assets/css/pages/home.css:

/* ===== S5: WHO IT'S FOR ===== */
.who-section { background: linear-gradient(180deg, #f9fcfd 0%, #fff 100%); }
.who-header { text-align: center; max-width: 560px; margin: 0 auto 56px; }
.who-header .overline { justify-content: center; }
.who-header .lead { margin: 0 auto; }

.who-lanes { display: flex; flex-direction: column; gap: 12px; max-width: 760px; margin: 0 auto; }
.who-lane { display: flex; align-items: center; gap: 18px; padding: 20px 28px; border-radius: var(--radius-lg); background: #fff; border: 1px solid var(--line); text-decoration: none; color: inherit; transition: border-color .25s ease, box-shadow .25s ease, transform .25s ease; cursor: pointer; }
.who-lane:hover { border-color: rgba(6,159,177,.4); box-shadow: 0 12px 40px rgba(6,159,177,.08); transform: translateX(4px); }
.who-lane-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(6,159,177,.1); display: flex; align-items: center; justify-content: center; color: var(--brand); flex-shrink: 0; }
.who-lane-body { flex: 1; min-width: 0; }
.who-lane-body h3 { font-size: .95rem; margin-bottom: 2px; }
.who-lane-body p { font-size: .82rem; color: var(--muted); margin: 0; line-height: 1.4; }
.who-lane-arrow { font-size: .8rem; font-weight: 700; color: var(--brand-dark); white-space: nowrap; flex-shrink: 0; opacity: 0; transform: translateX(-8px); transition: opacity .25s ease, transform .25s ease; }
.who-lane:hover .who-lane-arrow { opacity: 1; transform: translateX(0); }

/* ===== S6: REAL RESULTS ===== */
.results-section { background: radial-gradient(circle at 50% 0%, rgba(6,159,177,.06), transparent 60%); }
.results-header { text-align: center; max-width: 560px; margin: 0 auto 64px; }
.results-header .overline { justify-content: center; }
.results-header .lead { margin: 0 auto; }

.results-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; max-width: 860px; margin: 0 auto 72px; }
.result-stat { text-align: center; }
.result-value { font-size: clamp(2.8rem, 5vw, 4.2rem); font-weight: 800; color: var(--brand); line-height: 1; letter-spacing: -.04em; margin: 0 0 10px; transition: transform .3s ease; }
.result-stat:hover .result-value { transform: scale(1.06); }
.result-label { font-size: .85rem; color: var(--muted); font-weight: 500; margin: 0; }

.results-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 800px; margin: 0 auto; }
.result-point { display: flex; align-items: flex-start; gap: 10px; }
.result-arrow { color: var(--brand); font-weight: 800; font-size: .9rem; flex-shrink: 0; margin-top: 1px; }
.result-point p { font-size: .86rem; color: var(--muted); margin: 0; line-height: 1.55; }
.result-point strong { color: var(--ink); }

@media (max-width: 700px) {
  .results-stats { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
  .results-points { grid-template-columns: 1fr; gap: 16px; }
  .who-lane-arrow { opacity: .6; transform: translateX(0); font-size: .75rem; }
}
@media (max-width: 500px) {
  .who-lane { flex-wrap: wrap; gap: 12px; }
  .who-lane-body { flex: 1 1 100%; }
}
---

CRITICAL RULES:
- Insert S5 and S6 after the products section closing tag.
- DO NOT delete any existing section.
- Use existing CSS variables (--brand, --brand-dark, --ink, --muted, --line).
- Use existing classes where possible.
- DO NOT change header, footer, JavaScript, or other CSS files.
- Only add new CSS at the END of home.css.
- S5 uses lane-style rows (NOT cards), with hover arrow reveal.
- S6 uses big floating numbers (NO card backgrounds).

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. S5 (Who It's For) inserted with 4 lanes
2. S6 (Real Results) inserted with 4 stats + 3 points
3. New CSS added to home.css
