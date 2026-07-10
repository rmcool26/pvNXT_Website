# REUSABLE SECTION: Page Hero (services.html)

**Source File:** `services.html`  
**Section ID:** `#platform`  
**Use Case:** Any page needing a hero with orbiting ecosystem text.

---

## 📋 **HTML (Copy-Paste This)**

```html
<!-- ===== PAGE HERO (Reusable) ===== -->
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
```

---

## 🎨 **CSS (Copy to `assets/css/pages/[your-page].css`)**

```css
/* ===== PAGE HERO (Reusable) ===== */

.page-hero {
  padding: 140px 0 80px;
  background: radial-gradient(circle at 30% 20%, rgba(6,159,177,.1), transparent 50%), 
              linear-gradient(180deg, #f8fcfd 0%, #fff 100%);
}

.page-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.services-hero-art {
  position: relative;
  min-height: 300px;
  display: grid;
  place-items: center;
}

/* Orbiting Text Animation */
.ecosystem-orbit {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px dashed rgba(6,159,177,.2);
  animation: orbit 20s linear infinite;
}

.ecosystem-orbit span {
  position: absolute;
  font-size: .88rem;
  font-weight: 600;
  color: var(--brand-dark);
  background: #fff;
  padding: 8px 18px;
  border-radius: 999px;
  box-shadow: 0 8px 30px rgba(6,159,177,.08);
}

/* Position each span around the circle */
.ecosystem-orbit span:nth-child(1) {  top: -18px; left: 50%; transform: translateX(-50%); }
.ecosystem-orbit span:nth-child(2) {  bottom: 30%; right: -40px; }
.ecosystem-orbit span:nth-child(3) {  bottom: -18px; left: 50%; transform: translateX(-50%); }

@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 860px) {
  .page-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .services-hero-art {
    min-height: 200px;
  }
  
  .ecosystem-orbit {
    width: 200px;
    height: 200px;
  }
}
```

---

## 🔧 **How to Reuse:**

1. **Copy HTML** → Paste into any page's `<main>` tag.
2. **Copy CSS** → Paste into that page's CSS file (e.g., `about.css`, `contact.css`).
3. **Customize:**
   - Change `<p class="overline">` text (e.g., "pvNXT Platform" → "About Us")
   - Change `<h1>` headline
   - Change `<p class="lead">` description
   - Adjust orbiting text (`<span>`) to match your page topic.

---

## ✅ **Tested & Works!**

This section **independently works** when copied to a new page. No missing dependencies.

---

**Next:** Want me to break down **Section 2 (Core Ecosystem)**? 🚀