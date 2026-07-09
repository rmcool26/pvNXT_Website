Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are improving the pvNXT website (static HTML/CSS/JS, v3-main branch). All product pages are created with placeholder icons in the hero section. Now we need to replace these placeholders with actual product screenshots for better visual appeal.

This is an ENHANCEMENT task. We will UPDATE the hero section of each product page to use a real screenshot instead of the generic placeholder.

---

TASK: Replace product hero placeholders with actual screenshots (Studio page first).

STEP 1: For `products/studio.html`, REPLACE the hero visual section (currently lines ~65-75) with this updated version that uses a real screenshot:

```html
        <div class="reveal">
          <!-- SCREENSHOT: pvNXT Studio Dashboard -->
          <div class="product-hero-visual" aria-label="pvNXT Studio interface preview">
            <div class="product-screenshot-frame">
              <img src="../assets/images/studio-dashboard.png" 
                   alt="pvNXT Studio - EPC design workspace showing 3D roof model and BOQ" 
                   style="width:100%; border-radius:16px; box-shadow: 0 20px 60px rgba(6,159,177,.12);">
              <div class="screenshot-caption">Studio — EPC Design Workspace</div>
            </div>
          </div>
        </div>
```

STEP 2: Add the following CSS to `assets/css/pages/product.css` at the END of the file:

```css
/* ===== PRODUCT SCREENSHOTS ===== */

.product-screenshot-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--line);
  box-shadow: 0 20px 60px rgba(6,159,177,.1);
  transition: transform .3s ease, box-shadow .3s ease;
}

.product-screenshot-frame:hover {
  transform: translateY(-8px);
  box-shadow: 0 30px 80px rgba(6,159,177,.15);
}

.product-screenshot-frame img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 16px 16px 0 0;
}

.screenshot-caption {
  padding: 14px 18px;
  font-size: .82rem;
  font-weight: 600;
  color: var(--brand-dark);
  background: rgba(6,159,177,.04);
  border-top: 1px solid var(--line);
  text-align: center;
}

/* Responsive */
@media (max-width: 860px) {
  .product-screenshot-frame {
    border-radius: 16px;
  }
  
  .screenshot-caption {
    padding: 10px 14px;
    font-size: .78rem;
  }
}
```

STEP 3: The screenshot image (`studio-dashboard.png`) needs to be added to `assets/images/`. For now, the prompt assumes the image will be added separately. If the image doesn't exist yet, use a placeholder with better styling:

**Alternative (if screenshot not available):**
```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Studio interface preview">
            <div class="product-visual-placeholder" style="background: linear-gradient(135deg, rgba(6,159,177,.08), rgba(6,159,177,.03)); border: 2px dashed rgba(6,159,177,.2);">
              <div class="product-visual-icon" style="background: #fff; box-shadow: 0 8px 30px rgba(6,159,177,.1);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <p class="product-visual-label" style="font-weight: 600; color: var(--brand-dark);">Studio Dashboard Preview<br><small style="font-weight: 400; color: var(--muted);">Add screenshot: studio-dashboard.png</small></p>
            </div>
          </div>
        </div>
```

---

CRITICAL RULES:
- UPDATE only the hero visual section of `products/studio.html`
- ADD CSS to `assets/css/pages/product.css` (at the END)
- Use actual product screenshots if available, otherwise use improved placeholder
- Make sure the screenshot has proper `alt` text for accessibility
- The image path assumes screenshots will be added to `assets/images/`
- Repeat this process for ALL 6 product pages (studio, connect, go, proposal, field-app, scada)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `products/studio.html` hero section updated (screenshot or improved placeholder)
2. `assets/css/pages/product.css` updated with screenshot frame styles
3. Page uses existing design system (CSS variables, utility classes)
4. No other existing files were modified

NOTE: This prompt only updates STUDIO page. After this, repeat the same process for the other 5 product pages.
