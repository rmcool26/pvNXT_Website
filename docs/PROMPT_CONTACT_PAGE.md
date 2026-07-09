Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are updating the pvNXT website (static HTML/CSS/JS, v3-main branch). The homepage, all 6 product pages, and About page are complete with pvNXT branding. Now we need to update the Contact page to match pvNXT branding and improve the form flow. The existing contact.html uses Terranxt branding — we must update it to pvNXT branding while keeping the same page shell structure.

This is an EXISTING file: `contact.html` in the root directory. We will MODIFY this file to make it pvNXT-focused.

---

TASK: Update `contact.html` — Transform from Terranxt-focused to pvNXT-focused.

STEP 1: Read the existing `contact.html` to understand current structure, then REPLACE the entire content with the following complete HTML:

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Contact pvNXT — Get a Demo | pvNXT by Terranxt</title>
  <meta name="description" content="Contact pvNXT for product demos, partnership inquiries, or support. Get routed to the right solar workflow solution for your role.">
  <meta name="theme-color" content="#069fb1">
  <meta property="og:title" content="Contact pvNXT — Get a Demo">
  <meta property="og:description" content="Book a demo for pvNXT Studio, Connect, Go, Proposal, Field App, or SCADA. Or inquire about partnerships and support.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/pages/contact.css">
</head>
<body data-page="contact">
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="page-loader" data-loader aria-hidden="true">
    <div class="loader-orbit"><span></span><span></span><span></span></div>
  </div>
  <div id="header-placeholder"></div>

  <main id="main">

    <!-- ===== PAGE HERO ===== -->
    <section class="page-hero">
      <div class="container reveal">
        <p class="overline"><span></span>Contact pvNXT</p>
        <h1>Get started with pvNXT.</h1>
        <p class="lead">Tell us who you are and what you need. We'll route you to the right product demo or conversation.</p>
      </div>
    </section>

    <!-- ===== ROLE SELECTOR ===== -->
    <section class="section" id="role-selector">
      <div class="container">
        <p class="overline"><span></span>Select your role</p>
        <h2>What describes you best?</h2>
        <div class="role-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:40px;">
          <button class="role-card" onclick="showForm('consumer')" style="padding:24px;background:#fff;border:2px solid var(--line);border-radius:16px;cursor:pointer;transition:border-color .25s ease,box-shadow .25s ease;text-align:left;">
            <h3 style="font-size:.95rem;margin-bottom:8px;color:var(--ink);">Consumer</h3>
            <p style="font-size:.82rem;color:var(--muted);margin:0;line-height:1.5;">Going solar, want to check feasibility and ROI</p>
          </button>
          <button class="role-card" onclick="showForm('epc')" style="padding:24px;background:#fff;border:2px solid var(--line);border-radius:16px;cursor:pointer;transition:border-color .25s ease,box-shadow .25s ease;text-align:left;">
            <h3 style="font-size:.95rem;margin-bottom:8px;color:var(--ink);">EPC / Solar Business</h3>
            <p style="font-size:.82rem;color:var(--muted);margin:0;line-height:1.5;">Want to design faster, propose confidently</p>
          </button>
          <button class="role-card" onclick="showForm('installer')" style="padding:24px;background:#fff;border:2px solid var(--line);border-radius:16px;cursor:pointer;transition:border-color .25s ease,box-shadow .25s ease;text-align:left;">
            <h3 style="font-size:.95rem;margin-bottom:8px;color:var(--ink);">Installer</h3>
            <p style="font-size:.82rem;color:var(--muted);margin:0;line-height:1.5;">Need field tools, task tracking, progress updates</p>
          </button>
          <button class="role-card" onclick="showForm('om')" style="padding:24px;background:#fff;border:2px solid var(--line);border-radius:16px;cursor:pointer;transition:border-color .25s ease,box-shadow .25s ease;text-align:left;">
            <h3 style="font-size:.95rem;margin-bottom:8px;color:var(--ink);">O&M / Plant Owner</h3>
            <p style="font-size:.82rem;color:var(--muted);margin:0;line-height:1.5;">Need monitoring, alerts, and accountability</p>
          </button>
          <button class="role-card" onclick="showForm('investor')" style="padding:24px;background:#fff;border:2px solid var(--line);border-radius:16px;cursor:pointer;transition:border-color .25s ease,box-shadow .25s ease;text-align:left;">
            <h3 style="font-size:.95rem;margin-bottom:8px;color:var(--ink);">Investor / Partner</h3>
            <p style="font-size:.82rem;color:var(--muted);margin:0;line-height:1.5;">Interested in arthaNXT or partnership opportunities</p>
          </button>
        </div>
      </div>
    </section>

    <!-- ===== CONTACT FORM ===== -->
    <section class="section section-soft" id="contact-form" style="display:none;">
      <div class="container">
        <div style="max-width:640px;margin:0 auto;">
          <p class="overline"><span></span>Start a conversation</p>
          <h2>Send us a message.</h2>
          <p class="lead" style="margin-top:16px;">Fields marked with an asterisk are required. We'll get back to you within 24 hours.</p>
          
          <form id="contactForm" style="margin-top:40px;" onsubmit="handleSubmit(event)">
            <input type="hidden" id="role" name="role" value="">
            
            <div style="display:grid;gap:20px;">
              <div>
                <label for="name" style="display:block;font-weight:600;font-size:.88rem;margin-bottom:8px;">Name *</label>
                <input type="text" id="name" name="name" required style="width:100%;padding:12px 16px;border:1px solid var(--line);border-radius:10px;font-size:.92rem;font-family:inherit;transition:border-color .2s ease;">
              </div>
              
              <div>
                <label for="email" style="display:block;font-weight:600;font-size:.88rem;margin-bottom:8px;">Email *</label>
                <input type="email" id="email" name="email" required style="width:100%;padding:12px 16px;border:1px solid var(--line);border-radius:10px;font-size:.92rem;font-family:inherit;transition:border-color .2s ease;">
              </div>
              
              <div>
                <label for="phone" style="display:block;font-weight:600;font-size:.88rem;margin-bottom:8px;">Phone *</label>
                <input type="tel" id="phone" name="phone" required style="width:100%;padding:12px 16px;border:1px solid var(--line);border-radius:10px;font-size:.92rem;font-family:inherit;transition:border-color .2s ease;">
              </div>
              
              <div>
                <label for="company" style="display:block;font-weight:600;font-size:.88rem;margin-bottom:8px;">Company</label>
                <input type="text" id="company" name="company" style="width:100%;padding:12px 16px;border:1px solid var(--line);border-radius:10px;font-size:.92rem;font-family:inherit;transition:border-color .2s ease;">
              </div>
              
              <div>
                <label for="message" style="display:block;font-weight:600;font-size:.88rem;margin-bottom:8px;">Message *</label>
                <textarea id="message" name="message" rows="5" required style="width:100%;padding:12px 16px;border:1px solid var(--line);border-radius:10px;font-size:.92rem;font-family:inherit;resize:vertical;transition:border-color .2s ease;"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="justify-self:start;">Submit enquiry</button>
            </div>
          </form>
          
          <p style="font-size:.82rem;color:var(--muted);margin-top:24px;line-height:1.6;">The form validates locally in this static build. Connect your CRM or email backend before launch.</p>
        </div>
      </div>
    </section>

    <!-- ===== DIRECT LINKS ===== -->
    <section class="section" id="direct-links">
      <div class="container" style="text-align:center;">
        <p class="overline"><span></span>Or explore directly</p>
        <h2>See pvNXT in action.</h2>
        <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:32px;">
          <a href="products/studio.html" class="btn btn-secondary">Studio Demo</a>
          <a href="products/connect.html" class="btn btn-secondary">Connect Portal</a>
          <a href="products/go.html" class="btn btn-secondary">Go Field Tools</a>
          <a href="products/proposal.html" class="btn btn-secondary">Proposal System</a>
          <a href="products/scada.html" class="btn btn-secondary">SCADA Monitoring</a>
        </div>
      </div>
    </section>

  </main>

  <div id="footer-placeholder"></div>
  <script src="assets/js/main.js"></script>
  <script>
    function showForm(role) {
      document.getElementById('role-selector').style.display = 'none';
      document.getElementById('contact-form').style.display = 'block';
      document.getElementById('role').value = role;
      document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      alert('Thank you for your enquiry! We will get back to you within 24 hours.');
      document.getElementById('contactForm').reset();
      document.getElementById('role-selector').style.display = 'block';
      document.getElementById('contact-form').style.display = 'none';
    }
  </script>
</body>
</html>

STEP 2: Update `assets/css/pages/contact.css` to add styles for the new role selector grid. Add the following CSS at the END of the existing contact.css file:

/* ===== CONTACT PAGE — pvNXT UPDATE ===== */

/* Role Grid */
.role-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 40px;
}

.role-card {
  padding: 24px;
  background: #fff;
  border: 2px solid var(--line);
  border-radius: 16px;
  cursor: pointer;
  transition: border-color .25s ease, box-shadow .25s ease;
  text-align: left;
}

.role-card:hover {
  border-color: var(--brand);
  box-shadow: 0 8px 30px rgba(6,159,177,.08);
}

.role-card h3 {
  font-size: .95rem;
  margin-bottom: 8px;
  color: var(--ink);
}

.role-card p {
  font-size: .82rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.5;
}

/* Form Section */
#contact-form {
  display: none;
}

#contact-form.show {
  display: block;
}

/* Responsive */
@media (max-width: 860px) {
  .role-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .role-grid {
    grid-template-columns: 1fr;
  }
}

---

CRITICAL RULES:
- MODIFY the existing `contact.html` file (do not create a new file)
- ADD CSS to the END of `assets/css/pages/contact.css` (do not replace existing CSS)
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper)
- Use existing utility classes where possible: .section, .section-soft, .container, .overline, .lead, .btn, .btn-primary, .btn-secondary
- The page shell (head, meta, fonts, loader, header placeholder, footer placeholder) must match the existing structure
- DO NOT touch: components/header.html, components/footer.html, assets/js/main.js, assets/css/style.css
- Inline styles in the HTML will be moved to contact.css in a future cleanup. For now, keep them inline to match the prompt structure.
- Form validation is frontend-only (static build). Backend integration is out of scope for this task.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. contact.html modified with pvNXT-focused content (role selector + form)
2. assets/css/pages/contact.css updated with new styles at the END
3. Page uses existing design system (CSS variables, utility classes)
4. No other existing files were modified except contact.html and contact.css