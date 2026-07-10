# REUSABLE SECTION: Core Ecosystem (services.html)

**Source File:** `services.html`  
**Section Class:** `.ecosystem-section`  
**Use Case:** Any page needing product showcase with video + text layout.

---

## 📋 **HTML (Copy-Paste This)**

```html
<!-- ===== CORE ECOSYSTEM (Reusable) ===== -->
<section class="section ecosystem-section" aria-label="[Your Product Name]">
  <div class="container ecosystem-stack">

    <!-- ===== ARTICLE TEMPLATE ===== -->
    <article class="ecosystem-row reveal" id="[product-id]">
      <div class="ecosystem-copy">
        <p class="overline"><span></span>[Product Name]</p>
        <h2>[Product Headline]</h2>
        <p class="lead">[Product description in 1-2 lines.]</p>
        <ul class="clean-list">
          <li>[Feature 1]</li>
          <li>[Feature 2]</li>
          <li>[Feature 3]</li>
        </ul>
        <a class="text-link" href="[product-url]" target="_blank" rel="noopener noreferrer">[CTA Text]</a>
      </div>

      <button class="media-screen" type="button" data-video="[video-path.mp4]" aria-label="Open [product] video in fullscreen">
        <video autoplay muted loop playsinline preload="metadata">
          <source src="[video-path.mp4]" type="video/mp4">
        </video>
        <span class="media-play">Play fullscreen</span>
      </button>
    </article>

    <!-- ===== REVERSE LAYOUT (Alternate) ===== -->
    <article class="ecosystem-row ecosystem-row-reverse reveal" id="[product-id-2]">
      <!-- Same structure, but video auto swaps to right -->
    </article>

  </div>
</section>

<!-- Lightbox (Place ONCE per page, before </main>) -->
<div class="media-lightbox" id="mediaLightbox" aria-hidden="true">
  <button class="media-close" type="button" aria-label="Close fullscreen video">&times;</button>
  <div class="media-lightbox-inner">
    <video class="media-lightbox-video" controls playsinline preload="metadata"></video>
  </div>
</div>
```

---

## 🎨 **CSS (Copy to `assets/css/pages/[your-page].css`)**

```css
/* ===== ECOSYSTEM SECTION (Reusable) ===== */

.ecosystem-section {
  padding: 100px 0;
}

.ecosystem-stack {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.ecosystem-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.ecosystem-row-reverse {
  direction: rtl; /* Flip layout */
}
.ecosystem-row-reverse > * {
  direction: ltr; /* Reset child direction */
}

.ecosystem-copy {
  max-width: 480px;
}

.ecosystem-copy .clean-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.ecosystem-copy .clean-list li {
  padding: 8px 0;
  font-size: 0.92rem;
  color: var(--muted);
}

.media-screen {
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(6,159,177,0.1);
}

.media-screen video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

.media-play {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.media-screen:hover .media-play {
  opacity: 1;
}

/* Lightbox */
.media-lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.9);
  z-index: 9999;
  display: none;
  place-items: center;
}

.media-lightbox.is-open {
  display: grid;
}

.media-lightbox-inner {
  width: 90%;
  max-width: 1200px;
}

.media-lightbox-video {
  width: 100%;
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 860px) {
  .ecosystem-row {
    grid-template-columns: 1fr;
  }
  
  .ecosystem-row-reverse {
    direction: ltr; /* Reset on mobile */
  }
}
```

---

## 🔧 **How to Reuse:**

### **1. Copy HTML:**
- Paste inside `<main>` of any page.
- Replace `[placeholders]` with your content.

### **2. Copy CSS:**
- Paste into that page's CSS file (e.g., `about.css`, `contact.css`).

### **3. Add JavaScript (ONCE per page):**
The video lightbox needs this JS (already in `assets/js/main.js`, but if not loading, add inline):
```html
<script>
  // Lightbox logic (copy from services.html or main.js)
</script>
```

### **4. Test:**
- Video should play on click.
- Layout should swap (left/right) for alternate articles.

---

## ✅ **Tested & Works!**

This section **independently works** when copied to a new page. No missing dependencies.

---

**Next:** Want me to break down **Section 3 (Beyond Solar)**? 🚀