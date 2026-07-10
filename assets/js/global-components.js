(function () {
  var headerTemplate = `<header class="site-header" data-header>
  <div class="container header-inner">
    <a href="/home.html" class="logo" aria-label="pvNXT Home">
      <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="24" font-family="Inter, sans-serif" font-weight="800" font-size="20" fill="#069fb1">pvNXT</text>
      </svg>
    </a>

    <nav class="main-nav" data-nav>
      <ul class="nav-list">
        <li><a href="/home.html" class="nav-link">Home</a></li>
        <li class="nav-dropdown" data-dropdown>
          <button class="nav-link nav-dropdown-trigger" data-dropdown-trigger>
            Products
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4.5l3 3 3-3"/></svg>
          </button>
          <ul class="nav-dropdown-menu" data-dropdown-menu>
            <li><a href="/products/studio.html" class="dropdown-link">Studio — EPC Design</a></li>
            <li><a href="/products/connect.html" class="dropdown-link">Connect — Consumer Portal</a></li>
            <li><a href="/products/go.html" class="dropdown-link">Go — Installer Portal</a></li>
            <li><a href="/products/proposal.html" class="dropdown-link">Proposal — Auto Proposals</a></li>
            <li><a href="/products/field-app.html" class="dropdown-link">Field App — Site Survey</a></li>
            <li><a href="/products/scada.html" class="dropdown-link">SCADA — Plant Monitoring</a></li>
          </ul>
        </li>
        <li><a href="/about.html" class="nav-link">About</a></li>
        <li><a href="/contact.html" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <div class="header-actions">
      <a href="/contact.html#contact-form" class="btn btn-primary btn-sm">Request Demo</a>
    </div>

    <button class="mobile-menu-toggle" data-mobile-toggle aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <style>
.nav-dropdown { position: relative; }
.nav-dropdown-trigger { display: flex; align-items: center; gap: 4px; background: none; border: none; cursor: pointer; font: inherit; }
.nav-dropdown-menu { 
  position: absolute; 
  top: 100%; 
  left: 0; 
  min-width: 240px; 
  background: #fff; 
  border: 1px solid var(--line); 
  border-radius: 12px; 
  padding: 8px; 
  box-shadow: 0 12px 36px rgba(6,159,177,.08); 
  opacity: 0; 
  visibility: hidden; 
  transform: translateY(-8px); 
  transition: opacity .2s ease, transform .2s ease, visibility .2s ease; 
  z-index: 100;
}
.nav-dropdown[data-open="true"] .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.dropdown-link { 
  display: block; 
  padding: 10px 14px; 
  border-radius: 8px; 
  font-size: .88rem; 
  color: var(--ink); 
  text-decoration: none; 
  transition: background .15s ease; 
}
.dropdown-link:hover { background: rgba(6,159,177,.08); color: var(--brand-dark); }
.btn-sm { padding: 8px 18px; font-size: .85rem; }
</style>
</header>`;

  var footerTemplate = `<footer class="site-footer" data-footer>
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
</footer>`;

  var whatsappTemplate = `
<a class="whatsapp-widget" href="https://wa.me/918447444157?text=Hello%20Terranxt%2C%20I%20would%20like%20to%20discuss%20solar%20AI%20solutions." target="_blank" rel="noopener noreferrer" aria-label="Chat with Terranxt on WhatsApp">
  <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16.02 3.2A12.6 12.6 0 0 0 5.28 22.36L3.8 28.8l6.62-1.74A12.59 12.59 0 1 0 16.02 3.2Zm0 22.98c-2 0-3.86-.58-5.44-1.58l-.39-.25-3.93 1.03 1.05-3.82-.26-.4a10.29 10.29 0 1 1 8.97 5.02Zm5.72-7.7c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
    <span>WhatsApp</span>
</a>`;

  function inject(id, template) {
    var target = document.getElementById(id);
    if (target) target.innerHTML = template;
  }

  function mount() {
    inject('header-placeholder', headerTemplate);
    inject('footer-placeholder', footerTemplate);
    inject('whatsapp-placeholder', whatsappTemplate);
  }

  window.TerranxtComponents = { mount: mount };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount, { once: true });
  } else {
    mount();
  }
})();