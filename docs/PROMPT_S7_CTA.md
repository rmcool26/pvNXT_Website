Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT. CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS variables. Use existing classes.

---

TASK: Add a final CTA section at the END of the page, after the S6 (results-section) closing tag and BEFORE the closing </main> tag and footer scripts. This should be the LAST section on the page.

INSERT THIS HTML:

<!-- ===== S7: CTA ===== -->
<section class="section cta-final">
  <div class="container">
    <div class="cta-final-inner">
      <p class="overline"><span></span>Get started</p>
      <h2>See pvNXT in action.</h2>
      <p class="lead">Book a demo for your team — EPC, installer, or O&M. We'll show you how pvNXT fits your workflow.</p>
      <div class="cta-final-buttons">
        <a href="contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
        <a href="#products" class="btn btn-secondary">Explore products</a>
      </div>
    </div>
  </div>
</section>

STEP 2: Add CSS at the END of assets/css/pages/home.css:

/* ===== S7: CTA ===== */
.cta-final { background: radial-gradient(circle at 20% 80%, rgba(6,159,177,.08), transparent 40%), radial-gradient(circle at 80% 20%, rgba(6,159,177,.05), transparent 35%); }
.cta-final-inner { text-align: center; max-width: 560px; margin: 0 auto; }
.cta-final-inner .overline { justify-content: center; }
.cta-final-inner .lead { margin: 0 auto 32px; }
.cta-final-buttons { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }

---

CRITICAL RULES:
- Insert at the END of the page, after S6 results-section closing tag.
- DO NOT delete any existing section.
- Use existing classes: .section, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary.
- DO NOT change header, footer, JavaScript, or other CSS files.
- Only add new CSS at the END of home.css.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. S7 CTA inserted at end of page
2. Two buttons present: Request a Demo + Explore products
3. New CSS added to home.css
