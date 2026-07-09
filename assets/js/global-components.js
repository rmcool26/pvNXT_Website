(function () {
  var headerTemplate = `
<header class="site-header" data-header>
  <div class="header-progress" data-progress></div>
  <div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Terranxt home">
      <img src="assets/images/logo.png" width="224" height="56" alt="Terranxt logo">
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a class="nav-link" href="index.html" data-nav="home">Home</a>
      <a class="nav-link" href="services.html#platform" data-nav="platform">pvNXT Platform</a>
      <a class="nav-link" href="about.html" data-nav="about">About</a>
      <a class="nav-link" href="contact.html" data-nav="contact">Contact</a>
    </nav>
    <div class="nav-actions">
      <div class="portal-wrap">
        <button class="portal-button" type="button" data-portal-toggle aria-expanded="false" aria-controls="portal-menu">
          <span>pvNXT Portal</span>
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.3 6.1 8 9.8l3.7-3.7" /></svg>
        </button>
        <div class="portal-menu" id="portal-menu" role="menu" aria-label="Portal login options">
          <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item" role="menuitem">
            <span class="portal-item-mark" aria-hidden="true"></span>
            <span><strong>Consumer</strong><small>Free checks and reverse bidding</small></span>
          </a>
          <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item" role="menuitem">
            <span class="portal-item-mark" aria-hidden="true"></span>
            <span><strong>Solar EPC</strong><small>Auto 3D layouts and BOQs</small></span>
          </a>
          <a href="https://installer.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item" role="menuitem">
            <span class="portal-item-mark" aria-hidden="true"></span>
            <span><strong>Installer</strong><small>Mobile tasks and handovers</small></span>
          </a>
        </div>
      </div>
      <button class="menu-toggle" type="button" data-menu-toggle aria-controls="mobile-menu" aria-expanded="false" aria-label="Open navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="mobile-panel" id="mobile-menu" data-mobile-menu>
    <nav class="mobile-links" aria-label="Mobile navigation">
      <a class="nav-link" href="index.html" data-nav="home">Home</a>
      <a class="nav-link" href="services.html#platform" data-nav="platform">pvNXT Platform</a>
      <a class="nav-link" href="services.html#beyond" data-nav="beyond">Beyond Solar</a>
      <a class="nav-link" href="about.html" data-nav="about">About Us</a>
      <a class="nav-link" href="contact.html" data-nav="contact">Contact</a>
    </nav>
    <div class="mobile-portal">
      <p class="mobile-portal-title">pvNXT Portal</p>
      <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item">
        <span class="portal-item-mark" aria-hidden="true"></span>
        <span><strong>Consumer</strong><small>Free checks and reverse bidding</small></span>
      </a>
      <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item">
        <span class="portal-item-mark" aria-hidden="true"></span>
        <span><strong>Solar EPC</strong><small>Auto 3D layouts and BOQs</small></span>
      </a>
      <a href="https://installer.pvnxt.com/" target="_blank" rel="noopener noreferrer" class="portal-item">
        <span class="portal-item-mark" aria-hidden="true"></span>
        <span><strong>Installer</strong><small>Mobile tasks and handovers</small></span>
      </a>
    </div>
  </div>
</header>`;

  var footerTemplate = `
<footer class="site-footer">
  <div class="footer-glow" aria-hidden="true"></div>
  <div class="container footer-grid">
    <div class="footer-brand-block">
      <a class="footer-brand" href="index.html" aria-label="Terranxt home">
        <img src="assets/images/logo.png" width="224" height="56" alt="Terranxt logo">
      </a>
      <p>Terranxt is building the digital backbone of solar with AI, geo-spatial intelligence and role-specific workflows for consumers, EPCs and installers.</p>
      <div class="footer-trust">
        <span>IIT Delhi Incubated</span>
        <span>AI Solar Design</span>
        <span>Zero Site Visit</span>
      </div>
    </div>
    <div class="footer-col">
      <h2>Quick links</h2>
      <nav aria-label="Footer navigation">
        <a href="index.html">Home</a>
        <a href="services.html#platform">pvNXT Platform</a>
        <a href="services.html#beyond">Beyond Solar</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
    <div class="footer-col app-col">
      <h2>Flexibility on the go</h2>
      <p>Request mobile access for installer field tools, digital checklists and handovers.</p>
      <div class="store-row">
        <img class="google-play-badge" alt="Google Play Store badge" height="50" src="assets/images/Get_GP.png" width="150">
      </div>
    </div>
    <div class="footer-col">
      <h2>Contact</h2>
      <address>
        <a href="contact.html#contact-form">Start a product enquiry</a>
        <a aria-label="Open Terranxt office location in Google Maps" href="https://maps.app.goo.gl/Jyn11jgyqLdDVydn7" target="_blank" rel="noopener noreferrer">12A, M3M Urbana Premium, Sector 67 Gurugram 122101</a>
      </address>
      <div class="social-links" aria-label="Social links">
        <a href="https://in.linkedin.com/company/Terranxt" target="_blank" rel="noopener noreferrer" aria-label="Terranxt LinkedIn">LinkedIn</a>
        <a href="https://www.youtube.com/@TerranxtPvtLtd" target="_blank" rel="noopener noreferrer" aria-label="Terranxt YouTube">YouTube</a>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; 2026 Terranxt. All rights reserved.</span>
    <div>
      <a href="contact.html#contact-form">Partnership enquiries</a>
      <span aria-hidden="true">|</span>
      <a href="terms.html">Terms of service</a>
      <span aria-hidden="true">|</span>
      <a href="privacy.html">Privacy policy</a>
    </div>
  </div>
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