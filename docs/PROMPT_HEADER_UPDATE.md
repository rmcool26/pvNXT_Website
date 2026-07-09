Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are updating the pvNXT website (static HTML/CSS/JS, v3-main branch). All main pages (homepage, products, about, contact) are complete with pvNXT branding. Now we need to update the shared header and footer components to match pvNXT branding and include product navigation. The header and footer are loaded via JavaScript on every page.

These are EXISTING files: `components/header.html` and `components/footer.html`. We will MODIFY these files to make them pvNXT-focused.

---

TASK: Update `components/header.html` — Transform from Terranxt-focused to pvNXT-focused with product navigation.

STEP 1: Read the existing `components/header.html` to understand current structure, then REPLACE the entire content with the following complete HTML:

```html
<header class="site-header" data-header>
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
</header>
```

STEP 2: No CSS changes needed — the header uses existing classes from `assets/css/style.css`. The dropdown will need CSS, but that should be added to `style.css` carefully. For now, use these inline styles in the header HTML:

Add this style block at the end of the header HTML (before the closing `</header>` tag):

```html
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
```

---

CRITICAL RULES:
- MODIFY the existing `components/header.html` file
- Use pvNXT branding (logo text "pvNXT" in teal #069fb1)
- Include all 6 product links in dropdown
- Keep existing functionality (mobile menu toggle, dropdown logic)
- Use CSS variables from style.css
- Test that dropdown works on both desktop and mobile
- The header loads via JavaScript on every page, so this change will affect ALL pages

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. components/header.html updated with pvNXT branding
2. Product dropdown added with all 6 product links
3. Mobile menu still works
4. No other files were modified
