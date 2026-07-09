
(function () {
  var body = document.body;
  var header = document.querySelector('[data-header]');
  var progress = document.querySelector('[data-progress]');
  var loader = document.querySelector('[data-loader]');
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  var portalToggle = document.querySelector('[data-portal-toggle]');
  var portalMenu = document.getElementById('portal-menu');

  function closeMobileMenu() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mobileMenu.classList.remove('is-open');
    body.classList.remove('menu-open');
  }

  function closePortal() {
    if (!portalToggle || !portalMenu) return;
    portalToggle.setAttribute('aria-expanded', 'false');
    portalMenu.classList.remove('is-open');
  }

  function onScroll() {
    var y = window.scrollY || 0;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (progress) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (y / max) * 100 : 0;
      progress.style.width = pct + '%';
    }
  }

  /* Start of Zoom In/Out */
/*   const mediaCards = document.querySelectorAll(".media-screen");
  const lightbox = document.getElementById("mediaLightbox");
  const lightboxVideo = lightbox.querySelector(".media-lightbox-video");
  const closeBtn = lightbox.querySelector(".media-close");

  function openMedia(videoSrc) {
    lightboxVideo.src = videoSrc;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    lightboxVideo.currentTime = 0;
    lightboxVideo.play().catch(() => {});

    if (lightbox.requestFullscreen) {
      lightbox.requestFullscreen().catch(() => {});
    }
  }

  function closeMedia() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    lightboxVideo.pause();
    lightboxVideo.removeAttribute("src");
    lightboxVideo.load();

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
  }

  mediaCards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      if (videoSrc) openMedia(videoSrc);
    });
  });

  closeBtn.addEventListener("click", closeMedia);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeMedia();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeMedia();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && lightbox.classList.contains("is-open")) {
      closeMedia();
    }
  }); */
  /* End of Zoom In/Out */

  document.addEventListener("DOMContentLoaded", function () {
    // Helper function to detect correct base path
    function getBasePath() {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      
      // For GitHub Pages (username.github.io/repo-name/)
      if (hostname.includes('github.io') || hostname.includes('netlify.app')) {
        // Extract repo name from pathname
        const pathParts = pathname.split('/');
        const repoName = pathParts[1] || '';  // pvNXT_Website
        
        if (pathname.includes('/products/')) {
          return '/' + repoName + '/';  // → /pvNXT_Website/ (goes to root)
        } else {
          return '/' + repoName + '/';  // → /pvNXT_Website/
        }
      }
      
      // For local development (127.0.0.1 or localhost)
      if (pathname.includes('/products/')) {
        return '../';  // products/*.html → go up to root
      } else {
        return './';  // root pages → same directory
      }
    }

    const basePath = getBasePath();

    // Debug: Log the basePath (remove after testing)
    console.log('Base path:', basePath);
    console.log('Loading header from:', basePath + 'assets/components/header.html');

    // Header Load Karna (FIXED with absolute paths)
    fetch(basePath + 'assets/components/header.html')
      .then(response => {
        if (!response.ok) throw new Error("Header not found: " + response.status + " (tried: " + basePath + "assets/components/header.html)");
        return response.text();
      })
      .then(data => {
        const placeholder = document.getElementById('header-placeholder');
        if (placeholder) {
          placeholder.innerHTML = data;
          
          // Dropdown functionality
          const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
          dropdownTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
              e.preventDefault();
              const dropdown = this.closest('[data-dropdown]');
              const isOpen = dropdown.getAttribute('data-open') === 'true';
              dropdown.setAttribute('data-open', isOpen ? 'false' : 'true');
            });
          });
          
          // Close dropdown on outside click
          document.addEventListener('click', function(e) {
            if (!e.target.closest('[data-dropdown]')) {
              document.querySelectorAll('[data-dropdown]').forEach(dd => {
                dd.setAttribute('data-open', 'false');
              });
            }
          });
          
          console.log('✅ Header loaded successfully from:', basePath + 'assets/components/header.html');
        } else {
          console.error('❌ Header placeholder not found!');
        }
      })
      .catch(error => console.error("❌ Error loading header:", error));

    // Footer Load Karna (FIXED with absolute paths)
    fetch(basePath + 'assets/components/footer.html')
      .then(response => {
        if (!response.ok) throw new Error("Footer not found: " + response.status + " (tried: " + basePath + "assets/components/footer.html)");
        return response.text();
      })
      .then(data => {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
          placeholder.innerHTML = data;
          console.log('✅ Footer loaded successfully from:', basePath + 'assets/components/footer.html');
        } else {
          console.error('❌ Footer placeholder not found!');
        }
      })
      .catch(error => console.error("❌ Error loading footer:", error));
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (loader) {
    window.addEventListener('load', function () {
      window.setTimeout(function () { loader.classList.add('is-hidden'); }, 260);
    });
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      mobileMenu.classList.toggle('is-open', !isOpen);
      body.classList.toggle('menu-open', !isOpen);
      closePortal();
    });

    mobileMenu.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMobileMenu();
    });
  }

  if (portalToggle && portalMenu) {
    portalToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = portalToggle.getAttribute('aria-expanded') === 'true';
      portalToggle.setAttribute('aria-expanded', String(!isOpen));
      portalMenu.classList.toggle('is-open', !isOpen);
      closeMobileMenu();
    });

    portalMenu.addEventListener('click', function (event) {
      if (event.target.closest('a')) closePortal();
    });
  }

  document.addEventListener('click', function (event) {
    if (portalMenu && portalToggle && !portalMenu.contains(event.target) && !portalToggle.contains(event.target)) closePortal();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMobileMenu();
      closePortal();
    }
  });

  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  Array.prototype.slice.call(document.querySelectorAll('.energy-field')).forEach(function (field) {
    field.addEventListener('pointermove', function (event) {
      var rect = field.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * 100;
      var y = ((event.clientY - rect.top) / rect.height) * 100;
      field.style.setProperty('--mx', x.toFixed(2) + '%');
      field.style.setProperty('--my', y.toFixed(2) + '%');
    });
  });

  var params = new URLSearchParams(window.location.search);
  var roleParam = (params.get('role') || '').toLowerCase();
  var roleMap = {
    consumer: 'Consumer',
    epc: 'Solar EPC',
    installer: 'Installer',
    scada: 'SCADA / O&M',
    investor: 'Investor / arthaNXT',
    partnership: 'Partnership'
  };
  var roleSelect = document.getElementById('role');
  if (roleSelect && roleMap[roleParam]) roleSelect.value = roleMap[roleParam];

  function setFieldError(field, message) {
    var wrapper = field.closest('.field');
    if (!wrapper) return;
    wrapper.classList.toggle('is-invalid', Boolean(message));
    var old = wrapper.querySelector('.error-message');
    if (old) old.remove();
    field.removeAttribute('aria-describedby');
    if (message) {
      var error = document.createElement('span');
      error.className = 'error-message';
      error.id = field.id + '-error';
      error.textContent = message;
      wrapper.appendChild(error);
      field.setAttribute('aria-describedby', error.id);
    }
  }

  function validateForm(form) {
    var valid = true;
    var fields = Array.prototype.slice.call(form.querySelectorAll('input[required], select[required], textarea[required]'));
    fields.forEach(function (field) {
      var value = field.value.trim();
      var message = '';
      if (!value) message = 'This field is required.';
      if (!message && field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = 'Enter a valid email address.';
      if (!message && field.type === 'tel' && value.replace(/[^0-9+]/g, '').length < 7) message = 'Enter a valid phone number.';
      setFieldError(field, message);
      if (message) valid = false;
    });
    return valid;
  }

  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    var status = document.querySelector('[data-form-status]');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validateForm(contactForm)) {
        if (status) status.textContent = 'Please correct the highlighted fields.';
        return;
      }
      if (status) status.textContent = 'Thank you. Your enquiry is ready to be connected to Terranxt CRM or email routing.';
      contactForm.reset();
    });
    contactForm.addEventListener('input', function (event) {
      if (event.target.matches('input, select, textarea')) setFieldError(event.target, '');
    });
  }
})();
