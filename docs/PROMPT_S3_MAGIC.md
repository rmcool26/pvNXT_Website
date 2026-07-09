Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT (connected solar workflow suite by Terranxt, IIT Delhi-incubated). The page design system is already premium (CSS variables, .overline, .section, h1/h2/h3, .lead, .btn, .text-link, etc.). We must maintain this design language.

The design CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing classes where possible. Add new styles to home.css only.

---

TASK: Replace the proof-section + Why Terranxt + pvNXT platform section with one new immersive "The Magic" section that shows pvNXT Atlas pipeline and ecosystem.

STEP 1: Find and DELETE these sections:

A. The proof-section (contains "Deep-tech trust layer" heading, "Built with incubation rigor..." headline, 4 proof-matrix articles numbered 01-04, and the consumer portal SVG image). Delete the ENTIRE section from its opening section tag to its closing section tag.

B. The Why Terranxt section (contains heading "Why Terranxt", "A cleaner operating layer..." headline, 3 numbered items). Delete the ENTIRE section and its container divs.

C. The pvNXT platform section (contains "pvNXT platform" overline, "One intelligence layer. Three solar workflows." heading, and 3 portal cards: Consumer, EPC, Installer). Delete the ENTIRE section.

STEP 2: Insert the new S3 section at that EXACT location (where proof-section was, between story-section and whatever follows after the platform section). The new section combines the best of all three: what pvNXT is + how it works + the ecosystem.

Insert this HTML:

<!-- ===== S3: THE MAGIC ===== -->
<section class="section magic-section" id="how-it-works">
  <div class="container">
    
    <!-- Section Header -->
    <div class="magic-header">
      <p class="overline"><span></span>How it works</p>
      <h2>From satellite to solar.</h2>
      <p class="lead">pvNXT Atlas captures your site from space. The rest follows — connected.</p>
    </div>

    <!-- PART A: Atlas Pipeline Illustration -->
    <div class="magic-atlas">
      <div class="atlas-illustration" aria-label="pvNXT Atlas pipeline — satellite to 3D roof model">
        <!-- ILLUSTRATION: pvNXT Atlas Pipeline
             Size: 1200x480px
             Style: Clean technical line-art, teal on white with subtle grid
             Content: 3 stages connected by animated teal data lines —
               Stage 1 "Capture": Stylized satellite with stereo imagery beams
               Stage 2 "Process": Photogrammetry — point cloud converging into 3D wireframe roof
               Stage 3 "Output": Finished 3D roof with panels, shadow zones, keepouts marked
             Purpose: Show the technology that eliminates site visits -->
        <div class="atlas-stage stage-capture">
          <div class="atlas-stage-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="10" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="3 2"/>
              <circle cx="24" cy="24" r="4" fill="#069fb1" opacity="0.3"/>
              <line x1="24" y1="10" x2="24" y2="4" stroke="#069fb1" stroke-width="1.5"/>
              <line x1="14" y1="14" x2="10" y2="10" stroke="#069fb1" stroke-width="1.5"/>
              <line x1="34" y1="14" x2="38" y2="10" stroke="#069fb1" stroke-width="1.5"/>
            </svg>
          </div>
          <p class="atlas-stage-title">Capture</p>
          <p class="atlas-stage-desc">Stereo satellite imagery</p>
          <p class="atlas-stage-note">0 physical visits</p>
        </div>
        <div class="atlas-connector">
          <svg width="80" height="3" viewBox="0 0 80 3" fill="none">
            <line x1="0" y1="1.5" x2="80" y2="1.5" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
            <circle cx="40" cy="1.5" r="2" fill="#069fb1"/>
          </svg>
        </div>
        <div class="atlas-stage stage-process">
          <div class="atlas-stage-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="8" width="32" height="32" rx="4" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.6"/>
              <path d="M12 36L20 24L28 28L36 16" stroke="#069fb1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="20" cy="24" r="2" fill="#069fb1"/>
              <circle cx="28" cy="28" r="2" fill="#069fb1"/>
              <circle cx="36" cy="16" r="2" fill="#069fb1"/>
            </svg>
          </div>
          <p class="atlas-stage-title">Process</p>
          <p class="atlas-stage-desc">AI photogrammetry</p>
          <p class="atlas-stage-note">Auto-detects keepouts</p>
        </div>
        <div class="atlas-connector">
          <svg width="80" height="3" viewBox="0 0 80 3" fill="none">
            <line x1="0" y1="1.5" x2="80" y2="1.5" stroke="#069fb1" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5"/>
            <circle cx="40" cy="1.5" r="2" fill="#069fb1"/>
          </svg>
        </div>
        <div class="atlas-stage stage-output">
          <div class="atlas-stage-icon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="14" width="36" height="28" rx="3" stroke="#069fb1" stroke-width="1.5"/>
              <rect x="12" y="18" width="10" height="6" rx="1" fill="#069fb1" opacity="0.2" stroke="#069fb1" stroke-width="0.5"/>
              <rect x="26" y="18" width="10" height="6" rx="1" fill="#069fb1" opacity="0.2" stroke="#069fb1" stroke-width="0.5"/>
              <rect x="12" y="28" width="10" height="6" rx="1" fill="#069fb1" opacity="0.2" stroke="#069fb1" stroke-width="0.5"/>
              <rect x="26" y="28" width="10" height="6" rx="1" fill="#069fb1" opacity="0.15" stroke="#069fb1" stroke-width="0.5"/>
            </svg>
          </div>
          <p class="atlas-stage-title">Output</p>
          <p class="atlas-stage-desc">3D roof model</p>
          <p class="atlas-stage-note">Shadow + BOQ ready</p>
        </div>
      </div>
      <p class="atlas-caption">Stereo satellite imagery → Photogrammetry processing → Accurate 3D roof model with shadow analysis. In 15-20 minutes. Without leaving your desk.</p>
    </div>

    <!-- PART B: Connected Ecosystem Diagram -->
    <div class="magic-ecosystem">
      <p class="ecosystem-label">Connected Flow</p>
      
      <!-- ILLUSTRATION: pvNXT Hub-and-Spoke Ecosystem
           Size: 1000x500px
           Style: Clean tech diagram, teal on white
           Content: Central circle "PROJECT DATA" with 7 product nodes orbiting:
             Atlas, Field App, Connect, Studio, Proposal, Go, SCADA
           Each node connected by teal line to center
           Purpose: Show that data enters once via Atlas, flows to all portals -->

      <!-- Desktop: Hub and Spoke -->
      <div class="eco-hub-desktop">
        <div class="eco-center">
          <div class="eco-center-circle">
            <span class="eco-center-label">PROJECT<br>DATA</span>
          </div>
        </div>
        <div class="eco-nodes">
          <div class="eco-node node-1">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Atlas</span>
            <span class="eco-node-func">Satellite to 3D</span>
          </div>
          <div class="eco-node node-2">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Field App</span>
            <span class="eco-node-func">Site Verify</span>
          </div>
          <div class="eco-node node-3">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Connect</span>
            <span class="eco-node-func">Consumer Portal</span>
          </div>
          <div class="eco-node node-4">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Studio</span>
            <span class="eco-node-func">Design & Output</span>
          </div>
          <div class="eco-node node-5">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Proposal</span>
            <span class="eco-node-func">Auto-Generate</span>
          </div>
          <div class="eco-node node-6">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">Go</span>
            <span class="eco-node-func">Track Install</span>
          </div>
          <div class="eco-node node-7">
            <div class="eco-node-dot"></div>
            <span class="eco-node-name">SCADA</span>
            <span class="eco-node-func">Monitor & Alert</span>
          </div>
        </div>
        <svg class="eco-hub-lines" viewBox="0 0 700 700" fill="none">
          <line x1="350" y1="350" x2="350" y2="60" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="570" y2="120" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="640" y2="350" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="570" y2="580" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="350" y2="640" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="130" y2="580" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
          <line x1="350" y1="350" x2="60" y2="350" stroke="#069fb1" stroke-width="1" stroke-dasharray="4 3" opacity="0.3"/>
        </svg>
      </div>

      <!-- Mobile: Vertical List -->
      <div class="eco-hub-mobile">
        <div class="eco-mobile-list">
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">1</span>
            <div><strong>Atlas</strong> <span>Satellite to 3D Model</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">2</span>
            <div><strong>Field App</strong> <span>Site Verify</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">3</span>
            <div><strong>Connect</strong> <span>Consumer Portal</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">4</span>
            <div><strong>Studio</strong> <span>Design & Output</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">5</span>
            <div><strong>Proposal</strong> <span>Auto-Generate</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">6</span>
            <div><strong>Go</strong> <span>Track Installation</span></div>
          </div>
          <div class="eco-mobile-item">
            <span class="eco-mobile-num">7</span>
            <div><strong>SCADA</strong> <span>Monitor & Alert</span></div>
          </div>
        </div>
      </div>

      <p class="ecosystem-caption">Each portal reads from the same project data. No re-entry. No broken handoffs. One connected system.</p>
    </div>

    <!-- CTA after ecosystem -->
    <div class="magic-cta">
      <a href="#products" class="btn btn-primary">Explore all products</a>
    </div>

  </div>
</section>

STEP 3: Add CSS at the END of assets/css/pages/home.css:

/* ===== S3: THE MAGIC ===== */
.magic-section { padding: 118px 0; background: radial-gradient(circle at 50% 30%, rgba(6,159,177,.06), transparent 50%), linear-gradient(180deg, #f9fcfd 0%, #fff 100%); }
.magic-header { text-align: center; max-width: 640px; margin: 0 auto 72px; }
.magic-header .overline { justify-content: center; }
.magic-header h2 { margin-bottom: 14px; }
.magic-header .lead { margin: 0 auto; }

/* Atlas Pipeline */
.magic-atlas { max-width: 960px; margin: 0 auto 96px; }
.atlas-illustration { display: flex; align-items: center; justify-content: center; gap: 0; padding: 48px 0; background: linear-gradient(180deg, rgba(6,159,177,.03), rgba(6,159,177,.06)); border-radius: var(--radius-xl); border: 1px solid var(--line); }
.atlas-stage { display: flex; flex-direction: column; align-items: center; text-align: center; flex: 0 0 180px; }
.atlas-stage-icon { width: 72px; height: 72px; border-radius: 50%; background: #fff; border: 1px solid rgba(6,159,177,.18); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; box-shadow: 0 8px 30px rgba(6,159,177,.08); }
.atlas-stage-title { font-size: .92rem; font-weight: 800; color: var(--ink); margin: 0 0 4px; }
.atlas-stage-desc { font-size: .82rem; color: var(--brand-dark); font-weight: 600; margin: 0 0 2px; }
.atlas-stage-note { font-size: .72rem; color: var(--muted); margin: 0; }
.atlas-connector { flex: 0 0 80px; display: flex; align-items: center; justify-content: center; padding-bottom: 32px; }
.atlas-caption { text-align: center; font-size: .82rem; color: var(--muted); margin-top: 18px; line-height: 1.65; }

/* Ecosystem Hub */
.magic-ecosystem { max-width: 960px; margin: 0 auto; }
.ecosystem-label { text-align: center; font-size: .73rem; font-weight: 800; color: var(--muted); text-transform: uppercase; letter-spacing: .12em; margin-bottom: 32px; }

/* Desktop Hub */
.eco-hub-desktop { display: block; position: relative; width: 100%; max-width: 700px; aspect-ratio: 1/1; margin: 0 auto 0; }
.eco-center { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.eco-center-circle { width: 90px; height: 90px; border-radius: 50%; background: linear-gradient(135deg, rgba(6,159,177,.18), rgba(6,159,177,.08)); border: 2px solid var(--brand); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 60px rgba(6,159,177,.15); }
.eco-center-label { font-size: .65rem; font-weight: 800; color: var(--brand-dark); text-align: center; line-height: 1.3; letter-spacing: .06em; }
.eco-nodes { position: absolute; inset: 0; }
.eco-node { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 3px; width: 110px; }
.node-1 { left: 50%; top: 2%; transform: translateX(-50%); }
.node-2 { right: 6%; top: 14%; }
.node-3 { right: 0%; top: 42%; }
.node-4 { right: 6%; bottom: 14%; }
.node-5 { left: 50%; bottom: 2%; transform: translateX(-50%); }
.node-6 { left: 6%; bottom: 14%; }
.node-7 { left: 0%; top: 42%; }
.eco-node-dot { width: 12px; height: 12px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 12px rgba(6,159,177,.35); }
.eco-node-name { font-size: .78rem; font-weight: 800; color: var(--ink); }
.eco-node-func { font-size: .68rem; color: var(--muted); }
.eco-hub-lines { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }

/* Mobile Hub */
.eco-hub-mobile { display: none; }
.eco-mobile-list { display: flex; flex-direction: column; gap: 0; }
.eco-mobile-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--line); }
.eco-mobile-num { width: 28px; height: 28px; border-radius: 50%; background: rgba(6,159,177,.12); display: flex; align-items: center; justify-content: center; font-size: .73rem; font-weight: 800; color: var(--brand-dark); flex-shrink: 0; }
.eco-mobile-item strong { display: block; font-size: .88rem; color: var(--ink); }
.eco-mobile-item span { font-size: .76rem; color: var(--muted); }

.ecosystem-caption { text-align: center; font-size: .88rem; color: var(--muted); margin-top: 24px; font-weight: 500; }

.magic-cta { text-align: center; margin-top: 48px; }

@media (max-width: 860px) {
  .magic-atlas { margin-bottom: 64px; }
  .atlas-illustration { flex-direction: column; gap: 16px; padding: 36px 24px; }
  .atlas-stage { flex: none; }
  .atlas-connector { flex: none; transform: rotate(90deg); padding: 0; }
  .eco-hub-desktop { display: none; }
  .eco-hub-mobile { display: block; }
}

---

CRITICAL RULES:
- DELETE proof-section, Why Terranxt section, AND pvNXT platform section completely.
- Insert the new S3 section where proof-section used to be.
- Use existing CSS variables (--brand, --brand-dark, --ink, --muted, --line, --mist).
- Use existing classes where possible: .section, .container, .overline, .lead, .btn, .btn-primary, .text-link.
- The Atlas pipeline uses inline SVGs for icons — these are part of the HTML, not external files.
- The hub-and-spoke diagram is built with positioned divs + SVG connection lines.
- Desktop shows hub-and-spoke, mobile shows a simple numbered list.
- DO NOT change header, footer, JavaScript, or other CSS files.
- Only add new CSS at the END of home.css.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Old proof-section deleted
2. Old Why Terranxt section deleted
3. Old pvNXT platform section deleted
4. New magic-section inserted with Atlas pipeline + ecosystem hub
5. New CSS added to home.css
