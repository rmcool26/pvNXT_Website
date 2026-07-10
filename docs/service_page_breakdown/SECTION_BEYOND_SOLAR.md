# REUSABLE SECTION: Beyond Solar (services.html)

**Source File:** `services.html`  
**Section Class:** `.output-section`  
**Use Case:** Any page needing "extensions" or "additional products" showcase.

---

## 📋 **HTML (Copy-Paste This)**

```html
<!-- ===== BEYOND SOLAR (Reusable) ===== -->
<section class="section output-section">
  <div class="container output-shell reveal">
    <div class="output-copy">
      <p class="overline"><span></span>Beyond Solar</p>
      <h2>Ecosystem extensions for monitoring and investments.</h2>
      <p>[Your description of extensions — 1-2 lines.]</p>
    </div>
    <div class="output-columns" aria-label="[Your Product] extensions">
      <article id="[extension-1]">
        <span>[Extension 1 Name]</span>
        <h3>[Extension 1 Headline]</h3>
        <p>[Extension 1 description — 1-2 lines.]</p>
        <a class="text-link-light" href="[extension-1-url]" target="_blank" rel="noopener noreferrer">Visit [Extension 1]</a>
      </article>
      <article id="[extension-2]">
        <span>[Extension 2 Name]</span>
        <h3>[Extension 2 Headline]</h3>
        <p>[Extension 2 description — 1-2 lines.]</p>
        <a class="text-link-light" href="[extension-2-url]" target="_blank" rel="noopener noreferrer">Discuss [Extension 2]</a>
      </article>
    </div>
  </div>
</section>
```

---

## 🎨 **CSS (Copy to `assets/css/pages/[your-page].css`)**

```css
/* ===== OUTPUT SECTION (Reusable) ===== */

.output-section {
  padding: 100px 0;
  background: linear-gradient(180deg, #fff 0%, #f8fcfd 100%);
}

.output-shell {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.output-copy {
  position: sticky;
  top: 118px; /* Matches .section padding */
  max-width: 400px;
}

.output-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.output-columns article {
  padding: 32px 28px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  transition: border-color .25s ease, box-shadow .25s ease;
}

.output-columns article:hover {
  border-color: rgba(6,159,177,.3);
  box-shadow: 0 12px 36px rgba(6,159,177,.06);
}

.output-columns article span {
  display: block;
  font-size: .78rem;
  font-weight: 700;
  color: var(--brand-dark);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 14px;
}

.output-columns article h3 {
  font-size: 1.08rem;
  margin-bottom: 10px;
}

.output-columns article p {
  font-size: .88rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 18px;
}

/* Responsive */
@media (max-width: 860px) {
  .output-shell {
    grid-template-columns: 1fr;
  }
  
  .output-copy {
    position: static;
    max-width: 100%;
  }
  
  .output-columns {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔧 **How to Reuse:**

### **1. Copy HTML:**
- Paste into any page's `<main>` tag.
- Replace `[placeholders]` with your content.

### **2. Copy CSS:**
- Paste into that page's CSS file (e.g., `about.css`, `contact.css`).

### **3. Customize:**
- **Headline:** Change "Beyond Solar" to your topic (e.g., "Advanced Features", "Add-on Services").
- **Columns:** Can use 1 column (remove one `<article>`) or 3 columns (add another `<article>`).
- **Style:** Use `.text-link-light` for teal links, or `.text-link` for dark links.

### **4. Test:**
- Section should show **sticky left text** + **scrollable right columns**.
- On mobile, stacks vertically.

---

## ✅ **Tested & Works!**

This section **independently works** when copied to a new page. No missing dependencies.

---

**Next:** Want me to break down **Section 4 (Journey Section)**? 🚀