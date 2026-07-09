Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are updating the pvNXT website (static HTML/CSS/JS, v3-main branch). The `services.html` page currently has Terranxt branding and a plain CTA section. We need to update it to pvNXT branding and redesign the CTA section to be more visually appealing.

This is an EXISTING file: `services.html` in the root directory. We will MODIFY this file to make it pvNXT-focused and improve the CTA design.

---

TASK: Update `services.html` — Transform from Terranxt-focused to pvNXT-focused + Redesign CTA section.

STEP 1: Read the existing `services.html` to understand current structure, then REPLACE the entire content with the following complete HTML:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>pvNXT Platform — Connected Solar Workflow Suite | pvNXT by Terranxt</title>
  <meta name="description" content="Explore the pvNXT ecosystem — 6 connected products for consumers, EPCs, and installers. From satellite modeling to plant monitoring, all on one shared data layer.">
  <meta name="theme-color" content="#069fb1">
  <meta property="og:title" content="pvNXT Platform — Connected Solar Workflow">
  <meta property="og:description" content="6 products, one data layer. pvNXT connects every step of the solar workflow — from satellite to solar.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/pages/services.css">
</head>
<body data-page="services">
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="page-loader" data-loader aria-hidden="true">
    <div class="loader-orbit"><span></span><span></span><span></span></div>
  </div>
  <div id="header-placeholder"></div>

  <main id="main">

    <!-- ===== PAGE HERO ===== -->
    <section class="page-hero services-hero" id="platform">
      <div class="container page-hero-grid">
        <div class="reveal">
          <p class="overline"><span></span>pvNXT Platform</p>
          <h1>The pvNXT ecosystem for consumers, EPCs and installers.</h1>
          <p class="lead">pvNXT is a connected workflow suite: it creates demand clarity for consumers, design automation for EPCs, and mobile execution discipline for installers.</p>
        </div>
        <div class="services-hero-art reveal" aria-hidden="true">
          <div class="ecosystem-orbit"><span>Consumer</span><span>EPC</span><span>Installer</span></div>
        </div>
      </div>
    </section>

    <!-- ===== CORE ECOSYSTEM ===== -->
    <section class="section ecosystem-section" aria-label="pvNXT core ecosystem">
      <div class="container ecosystem-stack">

        <article class="ecosystem-row reveal" id="consumer">
          <div class="ecosystem-copy">
            <p class="overline"><span></span>Consumer Portal</p>
            <h2>Free checks and transparent comparisons for confident solar decisions.</h2>
            <p class="lead">Consumers can start with a clean estimate, understand system potential, and invite competitive proposals through a guided experience.</p>
            <ul class="clean-list">
              <li>Free solar feasibility checks with guided next steps.</li>
              <li>Transparent comparisons to reduce decision friction.</li>
              <li>Clear routing into qualified EPC conversations.</li>
            </ul>
            <a class="text-link" href="https://consumer.pvnxt.com/" target="_blank" rel="noopener noreferrer">Start consumer journey</a>
          </div>

          <button class="media-screen" type="button" data-video="assets/images/180626 pvNXT_pvNXTMode_Consumer.mp4" aria-label="Open consumer portal video in fullscreen">
            <video autoplay muted loop playsinline preload="metadata">
              <source src="assets/images/180626 pvNXT_pvNXTMode_Consumer.mp4" type="video/mp4">
            </video>
            <span class="media-play">Play fullscreen</span>
          </button>
        </article>

        <article class="ecosystem-row ecosystem-row-reverse reveal" id="epc">
          <div class="ecosystem-copy">
            <p class="overline"><span></span>EPC Suite</p>
            <h2>Auto 3D layouts, instant BOQs and CRM workflows for Solar EPCs.</h2>
            <p class="lead">The EPC Suite turns property intelligence into proposal-ready outputs, helping teams eliminate repeated manual steps in site assessment and pre-sales design.</p>
            <ul class="clean-list">
              <li>AI-assisted 3D roof layouts and module placement.</li>
              <li>Shadow analysis, energy yield estimates and auto BOQ generation.</li>
              <li>CRM visibility for leads, proposals and follow-ups.</li>
            </ul>
            <a class="text-link" href="https://epc.pvnxt.com/" target="_blank" rel="noopener noreferrer">Visit EPC suite</a>
          </div>

          <button class="media-screen" type="button" data-video="assets/images/180626 pvNXT_3D Analysis_EPC.mp4" aria-label="Open EPC video in fullscreen">
            <video autoplay muted loop playsinline preload="metadata">
              <source src="assets/images/180626 pvNXT_3D Analysis_EPC.mp4" type="video/mp4">
            </video>
            <span class="media-play">Play fullscreen</span>
          </button>
        </article>

        <article class="ecosystem-row reveal" id="installer">
          <div class="ecosystem-copy">
            <p class="overline"><span></span>Installer Tools</p>
            <h2>Field tools for tasks, checklists and digital handovers.</h2>
            <p class="lead">Installer workflows bring execution into the same digital loop, supporting field teams with task clarity, geo-tagged proof points, and handover discipline.</p>
            <ul class="clean-list">
              <li>Mobile task management for installation teams.</li>
              <li>Field checklists aligned to the design and BOQ.</li>
              <li>Digital handovers with location-aware evidence.</li>
            </ul>
            <a class="text-link" href="https://installer.pvnxt.com/" target="_blank" rel="noopener noreferrer">Visit installer tool</a>
          </div>

          <button class="media-screen" type="button" data-video="assets/images/180626 pvNXT_RoofInstalltion_Installer.mp4" aria-label="Open installer tools video in fullscreen">
            <video autoplay muted loop playsinline preload="metadata">
              <source src="assets/images/180626 pvNXT_RoofInstalltion_Installer.mp4" type="video/mp4">
            </video>
            <span class="media-play">Play fullscreen</span>
          </button>
        </article>

      </div>
    </section>

    <!-- ===== BEYOND SOLAR ===== -->
    <section class="section output-section">
      <div class="container output-shell reveal">
        <div class="output-copy">
          <p class="overline"><span></span>Beyond Solar</p>
          <h2>Ecosystem extensions for monitoring and investments.</h2>
          <p>pvNXT extends into SCADA.pvNXT for predictive monitoring and arthaNXT for blockchain-based solar investment pathways — all built on the same connected data layer.</p>
        </div>
        <div class="output-columns" aria-label="pvNXT ecosystem extensions">
          <article id="scada">
            <span>pvNXT SCADA</span>
            <h3>Real-time monitoring and predictive O&M</h3>
            <p>Designed for solar monitoring, performance visibility, and predictive operations and maintenance workflows.</p>
            <a class="text-link-light" href="https://scada.pvnxt.com/" target="_blank" rel="noopener noreferrer">Visit pvNXT SCADA</a>
          </article>
          <article id="artha">
            <span>arthaNXT</span>
            <h3>Blockchain-based solar investments</h3>
            <p>Creates a pathway for digital investment participation in solar plant opportunities.</p>
            <a class="text-link-light" href="https://artha.pvnxt.com/" target="_blank" rel="noopener noreferrer">Discuss arthaNXT</a>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== JOURNEY SECTION ===== -->
    <section class="section journey-section" aria-labelledby="journeyTitle">
      <div class="container journey-layout reveal">

        <div class="journey-copy">
          <p class="overline"><span></span>Still deciding?</p>
          <h2 id="journeyTitle">Start from your role, then let the workflow route the next step.</h2>
          <p class="lead">
            If you are not sure which pvNXT portal to open, choose what you want to do next.
            The ecosystem will route you to the right workflow.
          </p>

          <div class="role-picker" aria-label="Choose your pvNXT starting point">
            <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener noreferrer">
              <span>I want to check solar feasibility</span>
              <strong>Consumer Portal</strong>
            </a>

            <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener noreferrer">
              <span>I want to design and quote projects</span>
              <strong>EPC Suite</strong>
            </a>

            <a href="https://installer.pvnxt.com/" target="_blank" rel="noopener noreferrer">
              <span>I want to manage installation execution</span>
              <strong>Installer Tools</strong>
            </a>
          </div>
        </div>

        <div class="journey-map" aria-label="pvNXT ecosystem workflow">
          <div class="map-start">
            <span>Start</span>
            <strong>Property signal</strong>
          </div>

          <ol class="journey-steps">
            <li>
              <span>01</span>
              <div>
                <strong>Property check</strong>
                <small>Location, roof context and early solar potential.</small>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <strong>AI design</strong>
                <small>3D layout, shadow checks, module placement and yield estimates.</small>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <strong>Proposal handoff</strong>
                <small>Auto BOQ, quantities and commercial-ready project data.</small>
              </div>
            </li>

            <li>
              <span>04</span>
              <div>
                <strong>Field closeout</strong>
                <small>Tasks, checklists, proof points and digital handover.</small>
              </div>
            </li>
          </ol>

          <div class="map-end">
            <span>Outcome</span>
            <strong>Faster solar workflow</strong>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== REDESIGNED CTA SECTION ===== -->
    <section class="section services-cta-section" id="cta">
      <div class="container">
        <div class="services-cta-inner reveal">
          <div class="services-cta-visual">
            <div class="cta-bg-pattern"></div>
            <div class="cta-content">
              <p class="overline" style="justify-content:center;"><span></span>Get started</p>
              <h2>Bring your solar workflow into pvNXT.</h2>
              <p class="lead" style="margin: 0 auto 32px;">Get routed to the right product demo for consumer acquisition, EPC sales automation, installer execution, SCADA.pvNXT or arthaNXT.</p>
              <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;">
                <a href="contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
                <a href="index.html#products" class="btn btn-secondary">Explore Products</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <div id="footer-placeholder"></div>
  <div id="whatsapp-placeholder"></div>
  <script defer="" src="assets/js/global-components.js"></script>
  <script defer="" src="assets/js/main.js"></script>
</body>

</html>

STEP 2: Update `assets/css/pages/services.css` to add styles for the redesigned CTA section. Add the following CSS at the END of the existing services.css file:

/* ===== SERVICES CTA — REDESIGNED ===== */

.services-cta-inner {
  max-width: 960px;
  margin: 0 auto;
}

.services-cta-visual {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: radial-gradient(circle at 20% 80%, rgba(6,159,177,.08), transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(6,159,177,.05), transparent 35%);
  border: 1px solid rgba(6,159,177,.15);
}

.cta-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(6,159,177,.06) 1px, transparent 1px),
    radial-gradient(circle at 80% 50%, rgba(6,159,177,.04) 1px, transparent 1px);
  background-size: 60px 60px, 80px 80px;
  opacity: .6;
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
  padding: 80px 40px;
  text-align: center;
}

.cta-content .overline {
  justify-content: center;
}

.cta-content h2 {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin-top: 16px;
}

.cta-content .lead {
  max-width: 600px;
  margin: 0 auto 32px;
}

/* Responsive */
@media (max-width: 860px) {
  .cta-content {
    padding: 60px 28px;
  }
}

@media (max-width: 560px) {
  .cta-content {
    padding: 48px 20px;
  }
  
  .cta-content h2 {
    font-size: 1.4rem;
  }
}

---

CRITICAL RULES:
- MODIFY the existing `services.html` file (do not create a new file)
- ADD CSS to the END of `assets/css/pages/services.css` (do not replace existing CSS)
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper)
- Use existing utility classes where possible: .section, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary
- The page shell (head, meta, fonts, loader, header placeholder, footer placeholder) must match the existing structure
- DO NOT touch: components/header.html, components/footer.html, assets/js/main.js, assets/css/style.css
- The CTA section now has a decorative background with gradient orbs and dot pattern
- Updated the CTA button from "Talk to Terranxt" to "Request a Demo" (primary) + "Explore Products" (secondary)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. services.html updated with pvNXT branding (all sections)
2. "Beyond Solar" section updated (mentions pvNXT extensions)
3. CTA section redesigned with visual background
4. assets/css/pages/services.css updated with new styles at the END
5. No other existing files were modified except services.html and services.css