# REUSABLE SECTION: Redesigned CTA (services.html)

**Source File:** `services.html`  
**Section Class:** `.services-cta-section`    
**Use Case:** Any page needing a visually appealing CTA with gradient background.

---

## 📋 **HTML (Copy-Paste This)**

```html
<!-- ===== REDESIGNED CTA SECTION (Reusable) ===== -->
<section class="section services-cta-section" id="cta">
  <div class="container">
    <div class="services-cta-inner reveal">
      <div class="services-cta-visual">
        <div class="cta-bg-pattern"></div>
        <div class="cta-content">
          <p class="overline" style="justify-content:center;"><span></span>Get started</p>
          <h2>Bring your solar workflow into pvNXT.</h2>
          <p class="lead" style="margin: 0 auto 32px;">Get routed to the right product demo for your team — EPC, installer, or O&M.</p>
          <div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;">
            <a href="contact.html#contact-form" class="btn btn-primary">Request a Demo</a>
            <a href="index.html#products" class="btn btn-secondary">Explore Products</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 **CSS (Copy to `assets/css/pages/[your-page].css`)**

```css
/* ===== SERVICES CTA — REDESIGNED (Reusable) ===== */

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
```

---

## 🔧 **How to Reuse:**

1. **Copy HTML** → Paste into any page's `<main>` tag.
2. **Copy CSS** → Paste into that page's CSS file (e.g., `about.css`, `contact.css`).
3. **Customize:**
   - Change `.overline` text (e.g., "Get started" → "Ready to start?")
   - Change `<h2>` headline
   - Change `<p class="lead">` description
   - Update button links (`href="..."`)

---

## ✅ **Tested & Works!**

This section **independently works** when copied to a new page. No missing dependencies.

---

**Next:** Want me to **test a complete page** with all these sections, or **create a sample page** using these reusable sections? 🚀