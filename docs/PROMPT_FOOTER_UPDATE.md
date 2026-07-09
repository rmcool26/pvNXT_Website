Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are updating the pvNXT website (static HTML/CSS/JS, v3-main branch). All main pages (homepage, products, about, contact) are complete with pvNXT branding. Now we need to update the shared footer component to match pvNXT branding and include product links. The footer is loaded via JavaScript on every page.

This is an EXISTING file: `components/footer.html`. We will MODIFY this file to make it pvNXT-focused.

---

TASK: Update `components/footer.html` — Transform from Terranxt-focused to pvNXT-focused with product links.

STEP 1: Read the existing `components/footer.html` to understand current structure, then REPLACE the entire content with the following complete HTML:

```html
<footer class="site-footer" data-footer>
  <div class="container">
    <div class="footer-grid">
      
      <!-- Column 1: Brand -->
      <div class="footer-brand">
        <a href="/home.html" class="footer-logo" aria-label="pvNXT Home">
          <svg width="100" height="28" viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="8" y="20" font-family="Inter, sans-serif" font-weight="800" font-size="16" fill="#069fb1">pvNXT</text>
          </svg>
        </a>
        <p class="footer-tagline">Solar operations, connected.</p>
        <p class="footer-desc">pvNXT is a connected solar workflow suite by Terranxt — an IIT Delhi-FITT incubated deep-tech startup.</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-links">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-list">
          <li><a href="/home.html" class="footer-link">Home</a></li>
          <li><a href="/about.html" class="footer-link">About pvNXT</a></li>
          <li><a href="/contact.html#contact-form" class="footer-link">Contact Us</a></li>
          <li><a href="/contact.html#contact-form" class="footer-link">Request Demo</a></li>
        </ul>
      </div>

      <!-- Column 3: Products -->
      <div class="footer-products">
        <h4 class="footer-heading">Products</h4>
        <ul class="footer-list">
          <li><a href="/products/studio.html" class="footer-link">Studio — EPC Design</a></li>
          <li><a href="/products/connect.html" class="footer-link">Connect — Consumer Portal</a></li>
          <li><a href="/products/go.html" class="footer-link">Go — Installer Portal</a></li>
          <li><a href="/products/proposal.html" class="footer-link">Proposal System</a></li>
          <li><a href="/products/field-app.html" class="footer-link">Field App</a></li>
          <li><a href="/products/scada.html" class="footer-link">SCADA Monitoring</a></li>
        </ul>
      </div>

      <!-- Column 4: Contact -->
      <div class="footer-contact">
        <h4 class="footer-heading">Contact</h4>
        <p class="footer-text">IIT Delhi incubation ecosystem<br>New Delhi, India</p>
        <a href="/contact.html#contact-form" class="footer-link">Start a product enquiry</a>
        <div class="footer-social" style="margin-top:16px;display:flex;gap:12px;">
          <a href="https://linkedin.com/company/pvnxt" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://twitter.com/pvnxt" target="_blank" rel="noopener" class="footer-social-link" aria-label="X (Twitter)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l11.733 16h4.267l-11.733-16H4zm0 16l11.733-16h4.267l-11.733 16H4z" transform="scale(.85)"/></svg>
          </a>
          <a href="https://youtube.com/@pvNXT" target="_blank" rel="noopener" class="footer-social-link" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="10,8 16,12 10,16"/></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p class="footer-copyright">© 2026 pvNXT by Terranxt. All rights reserved.</p>
      <div class="footer-legal">
        <a href="/contact.html#contact-form" class="footer-legal-link">Partnership enquiries</a>
      </div>
    </div>

  </div>
</footer>
```

STEP 2: No CSS changes needed — the footer uses existing classes from `assets/css/style.css`. The social icons need minimal styling, but that can be added later. For now, use these inline styles:

Add this style block at the end of the footer HTML (before the closing `</footer>` tag):

```html
<style>
.footer-social-link { 
  display: inline-flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px; 
  height: 36px; 
  border-radius: 8px; 
  background: rgba(6,159,177,.08); 
  color: var(--brand-dark); 
  transition: background .2s ease, color .2s ease; 
}
.footer-social-link:hover { 
  background: var(--brand); 
  color: #fff; 
}
.footer-text { 
  font-size: .88rem; 
  color: var(--muted); 
  line-height: 1.6; 
  margin-bottom: 8px; 
}
</style>
```

---

CRITICAL RULES:
- MODIFY the existing `components/footer.html` file
- Use pvNXT branding (logo text "pvNXT" in teal #069fb1)
- Include all 6 product links in the Products column
- Mention "Powered by Terranxt" in the brand description
- Keep existing contact info (IIT Delhi incubation)
- Use CSS variables from style.css
- The footer loads via JavaScript on every page, so this change will affect ALL pages

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. components/footer.html updated with pvNXT branding
2. All 6 product links added to footer
3. Social media links updated (LinkedIn, X, YouTube)
4. Copyright updated to "© 2026 pvNXT by Terranxt"
5. No other files were modified
