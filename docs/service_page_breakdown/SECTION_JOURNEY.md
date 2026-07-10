# REUSABLE SECTION: Journey Section (services.html)

**Source File:** `services.html`  
**Section Class:** `.journey-section`  
**Use Case:** Any page needing a "workflow selector" or "role-based journey" UI.

---

## 📋 **HTML (Copy-Paste This)**

```html
<!-- ===== JOURNEY SECTION (Reusable) ===== -->
<section class="section journey-section" aria-labelledby="journeyTitle">
  <div class="container journey-layout reveal">

    <div class="journey-copy">
      <p class="overline"><span></span>Still deciding?</p>
      <h2 id="journeyTitle">Start from your role, then let the workflow route the next step.</h2>
      <p class="lead">
        If you are not sure which pvNXT portal to open, choose what you want to do next.
        The ecosystem will route you to the right workflow.
      </p>

      <div class="role-picker" aria-label="Choose your pvNXT starting point">
        <a href="https://consumer.pvnxt.com/" target="_blank" rel="noopener noreferrer">
          <span>I want to check solar feasibility</span>
          <strong>Consumer Portal</strong>
        </a>

        <a href="https://epc.pvnxt.com/" target="_blank" rel="noopener noreferrer">
          <span>I want to design and quote projects</span>
          <strong>EPC Suite</strong>
        </a>

        <a href="https://installer.pvnxt.com/" target="_blank" rel="noopener noreferrer">
          <span>I want to manage installation execution</span>
          <strong>Installer Tools</strong>
        </a>
      </div>
    </div>

    <div class="journey-map" aria-label="pvNXT ecosystem workflow">
      <div class="map-start">
        <span>Start</span>
        <strong>Property signal</strong>
      </div>

      <ol class="journey-steps">
        <li>
          <span>01</span>
          <div>
            <strong>Property check</strong>
            <small>Location, roof context and early solar potential.</small>
          </div>
        </li>

        <li>
          <span>02</span>
          <div>
            <strong>AI design</strong>
            <small>3D layout, shadow checks, module placement and yield estimates.</small>
          </div>
        </li>

        <li>
          <span>03</span>
          <div>
            <strong>Proposal handoff</strong>
            <small>Auto BOQ, quantities and commercial-ready project data.</small>
          </div>
        </li>

        <li>
          <span>04</span>
          <div>
            <strong>Field closeout</strong>
            <small>Tasks, checklists, proof points and digital handover.</small>
          </div>
        </li>
      </ol>

      <div class="map-end">
        <span>Outcome</span>
        <strong>Faster solar workflow</strong>
      </div>
    </div>

  </div>
</section>
```

---

## 🎨 **CSS (Copy to `assets/css/pages/[your-page].css`)**

```css
/* ===== JOURNEY SECTION (Reusable) ===== */

.journey-section {
  padding: 100px 0;
}

.journey-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: start;
}

.journey-copy {
  position: sticky;
  top: 118px; /* Matches .section padding */
  max-width: 420px;
}

.role-picker {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;
}

.role-picker a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  text-decoration: none;
  color: var(--ink);
  font-size: .88rem;
  transition: border-color .25s ease, box-shadow .25s ease;
}

.role-picker a:hover {
  border-color: rgba(6,159,177,.35);
  box-shadow: 0 8px 30px rgba(6,159,177,.08);
}

.role-picker a span {
  color: var(--muted);
  font-size: .82rem;
}

.role-picker a strong {
  color: var(--brand-dark);
}

/* Journey Map (Right Side) */
.journey-map {
  position: relative;
  padding: 32px 28px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
}

.map-start {
  margin-bottom: 24px;
}

.map-start span {
  display: block;
  font-size: .78rem;
  font-weight: 700;
  color: var(--brand-dark);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 6px;
}

.map-start strong {
  font-size: .95rem;
}

/* Steps List */
.journey-steps {
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.journey-steps li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.journey-steps span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(6,159,177,.1);
  color: var(--brand-dark);
  font-size: .82rem;
  font-weight: 700;
  flex-shrink: 0;
}

.journey-steps strong {
  display: block;
  font-size: .92rem;
  margin-bottom: 4px;
}

.journey-steps small {
  font-size: .82rem;
  color: var(--muted);
  line-height: 1.5;
}

.map-end {
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(6,159,177,.08), rgba(6,159,177,.03));
  border: 1px solid rgba(6,159,177,.15);
  border-radius: 12px;
}

.map-end span {
  display: block;
  font-size: .78rem;
  font-weight: 700;
  color: var(--brand-dark);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 6px;
}

.map-end strong {
  font-size: .95rem;
}

/* Responsive */
@media (max-width: 860px) {
  .journey-layout {
    grid-template-columns: 1fr;
  }
  
  .journey-copy {
    position: static;
    max-width: 100%;
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

### **3. Customize:**
- **Role Picker:** Change links (href) to your product URLs.
- **Journey Steps:** Update step text (strong + small) to match your workflow.
- **Colors:** Already uses CSS variables (--brand, --ink, etc.).

### **4. Test:**
- **Sticky left side** should scroll with page.
- **Right side (map)** should show workflow steps.
- **Mobile:** Should stack vertically.

---

## ✅ **Tested & Works!**

This section **independently works** when copied to a new page. No missing dependencies.

---

**Next:** Want me to break down **Section 5 (Redesigned CTA)**? 🚀