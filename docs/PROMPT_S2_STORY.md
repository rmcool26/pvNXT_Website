Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT (connected solar workflow suite by Terranxt, IIT Delhi-incubated). The page design system is already premium (CSS variables, .overline, .section, h1/h2/h3, .lead, .btn, .text-link, etc.). We must maintain this design language for new sections.

The design system CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS classes wherever possible. For new styles, add them to `assets/css/pages/home.css`.

---

TASK: Replace the "Workflow" section with a new "The Story" section.

STEP 1: Find and DELETE the existing workflow section.

Find the section with class "flow-section" (it has a section-split div with heading "From property input to decision-ready solar output." and 4 flow-line articles numbered 01-04). DELETE this entire section from the opening section tag to its closing section tag.

STEP 2: Insert the new S2 section in its place. Insert at that EXACT location — between the trust-strip-section end and the proof-section start.

Insert this HTML:

<!-- ===== S2: THE STORY ===== -->
<section class="section story-section" id="story">
  <div class="container">
    <div class="story-grid">
      <div class="story-copy">
        <p class="overline"><span></span>The problem</p>
        <h2>Solar shouldn't be this hard.</h2>
        <p class="lead">Today, solar projects run on WhatsApp groups, Excel sheets, and manual CAD. Leads get lost in chats. Designs take days. Proposals have pricing errors from copy-paste. Installers get unclear instructions. Nobody has a single view of the project. Every handoff between teams is a new chance for things to break.</p>
        <p class="lead">This isn't a technology problem. It's a connection problem.</p>
        <a href="#how-it-works" class="text-link">See how pvNXT connects it</a>
      </div>
      <div class="story-visual" aria-label="Illustration showing the transformation from disconnected solar tools to the connected pvNXT ecosystem">
        <div class="story-illustration-placeholder">
          <div class="story-chaos-side">
            <div class="story-icon-scatter i1">📱</div>
            <div class="story-icon-scatter i2">📊</div>
            <div class="story-icon-scatter i3">✏️</div>
            <div class="story-icon-scatter i4">📍</div>
            <div class="story-icon-scatter i5">📧</div>
            <svg class="story-chaos-lines" viewBox="0 0 280 420" fill="none">
              <line x1="40" y1="60" x2="180" y2="140" stroke="#ef4444" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
              <line x1="200" y1="100" x2="80" y2="260" stroke="#ef4444" stroke-width="1" stroke-dasharray="4 3" opacity="0.4"/>
              <line x1="60" y1="180" x2="160" y2="340" stroke="#ef4444" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>
              <line x1="140" y1="80" x2="220" y2="300" stroke="#ef4444" stroke-width="1" stroke-dasharray="4 3" opacity="0.35"/>
            </svg>
          </div>
          <div class="story-arrow-area">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 20H28M28 20L20 12M28 20L20 28" stroke="#069fb1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="story-clarity-side">
            <div class="story-hub-circle">
              <div class="story-hub-label">pvNXT</div>
            </div>
            <svg class="story-clarity-lines" viewBox="0 0 280 420" fill="none">
              <line x1="140" y1="160" x2="80" y2="60" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.6"/>
              <line x1="140" y1="160" x2="220" y2="90" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.6"/>
              <line x1="140" y1="160" x2="60" y2="230" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.5"/>
              <line x1="140" y1="160" x2="220" y2="250" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.5"/>
              <line x1="140" y1="160" x2="100" y2="360" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.5"/>
            </svg>
            <div class="story-icon-clean c1">📱</div>
            <div class="story-icon-clean c2">📊</div>
            <div class="story-icon-clean c3">✏️</div>
            <div class="story-icon-clean c4">📍</div>
            <div class="story-icon-clean c5">📧</div>
          </div>
        </div>
        <p class="story-visual-caption">Disconnected tools → Connected ecosystem</p>
      </div>
    </div>
  </div>
</section>

STEP 3: Add CSS at the END of assets/css/pages/home.css:

/* ===== S2: THE STORY ===== */
.story-section { padding: 118px 0; background: linear-gradient(180deg, #fff 0%, #f9fcfd 100%); }
.story-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(380px, 1fr); gap: clamp(48px, 8vw, 96px); align-items: center; }
.story-copy { max-width: 560px; }
.story-copy .lead { color: var(--muted); font-size: clamp(.96rem, 1.5vw, 1.08rem); line-height: 1.75; margin-bottom: 18px; }
.story-copy .lead:last-of-type { font-weight: 600; color: var(--ink); }
.story-visual { position: relative; display: flex; flex-direction: column; align-items: center; }
.story-illustration-placeholder { position: relative; width: 100%; max-width: 560px; aspect-ratio: 560/580; display: flex; align-items: center; justify-content: center; border-radius: 28px; background: linear-gradient(135deg, rgba(254,242,242,0.6) 0%, rgba(249,250,251,0.9) 48%, rgba(236,253,250,0.7) 100%); border: 1px solid var(--line); overflow: hidden; }
.story-chaos-side { position: absolute; left: 8%; top: 10%; width: 38%; height: 80%; }
.story-icon-scatter { position: absolute; font-size: 1.6rem; opacity: 0.75; filter: grayscale(0.3); }
.story-icon-scatter.i1 { left: 10%; top: 8%; }
.story-icon-scatter.i2 { left: 55%; top: 22%; }
.story-icon-scatter.i3 { left: 25%; top: 42%; }
.story-icon-scatter.i4 { left: 60%; top: 55%; }
.story-icon-scatter.i5 { left: 15%; top: 72%; }
.story-chaos-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
.story-arrow-area { position: absolute; left: 44%; top: 50%; transform: translate(-50%,-50%); z-index: 2; background: rgba(255,255,255,0.9); border-radius: 50%; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(6,159,177,0.12); }
.story-clarity-side { position: absolute; right: 8%; top: 10%; width: 38%; height: 80%; }
.story-hub-circle { position: absolute; left: 50%; top: 36%; transform: translate(-50%,-50%); width: 56px; height: 56px; border-radius: 50%; background: rgba(6,159,177,0.12); border: 2px solid rgba(6,159,177,0.35); display: flex; align-items: center; justify-content: center; }
.story-hub-label { font-size: .62rem; font-weight: 800; color: var(--brand-dark); letter-spacing: .04em; }
.story-clarity-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
.story-icon-clean { position: absolute; font-size: 1.4rem; opacity: 0.9; }
.story-icon-clean.c1 { left: 32%; top: 5%; }
.story-icon-clean.c2 { right: 10%; top: 16%; }
.story-icon-clean.c3 { left: 5%; bottom: 28%; }
.story-icon-clean.c4 { right: 8%; bottom: 30%; }
.story-icon-clean.c5 { left: 28%; bottom: 5%; }
.story-visual-caption { margin-top: 14px; font-size: .78rem; color: var(--muted); font-weight: 500; text-align: center; }
@media (max-width: 860px) { .story-grid { grid-template-columns: 1fr; gap: 48px; } .story-copy { max-width: 100%; order: 1; } .story-visual { order: 2; } .story-illustration-placeholder { max-width: 100%; aspect-ratio: 4/3; } }

---

CRITICAL RULES:
- The new section must be placed between the closing of trust-strip-section and the opening of proof-section.
- DELETE the old flow-section completely.
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper).
- Use existing classes where possible: .section, .container, .overline, .lead, .text-link.
- DO NOT change any other section. DO NOT change header, footer, or any JavaScript. DO NOT change other CSS files.
- Only add new CSS for story-specific classes at the END of home.css.
- The HTML comment with illustration specs (ILLUSTRATION: Solar Chaos to Clarity) is informational only — keep it in the code as a comment for future reference.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Old flow-section deleted
2. New story-section inserted at correct location
3. New CSS added to home.css
