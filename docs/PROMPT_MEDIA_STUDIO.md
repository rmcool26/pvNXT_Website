Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding media assets to the pvNXT website (static HTML/CSS/JS, v3-main branch). Currently, all product pages have SVG placeholder icons in the capabilities section. We need to replace these with actual product screenshots.

This is a MEDIA ADDITION task. We will ADD screenshot images to `assets/images/` folder and UPDATE the HTML to reference these images.

---

TASK: Add product screenshots to `products/studio.html` hero section.

STEP 1: Add the screenshot image to `assets/images/` folder:
- **File name:** `studio-dashboard.png`
- **Type:** Image (PNG/JPG)
- **Dimensions:** 1280x720px (16:9 aspect ratio)
- **Content:** pvNXT Studio dashboard showing:
  - 3D roof model on left side
  - BOQ sidebar on right side
  - Shadow analysis overlay
  - Teal (#069fb1) accent colors
- **Source:** Take screenshot from live portal: https://epc.pvnxt.com/

STEP 2: Update `products/studio.html` hero section (around line 65-75). REPLACE the placeholder div with this:

```html
        <div class="reveal">
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

STEP 3: If the screenshot is not yet available, use this TEMPORARY placeholder (improved version):

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
- ADD image file to `assets/images/studio-dashboard.png`
- UPDATE `products/studio.html` to reference the image
- Use proper `alt` text for accessibility
- If screenshot not available, use improved placeholder (not the generic one)
- Image should be optimized (< 500KB) for fast loading
- The screenshot should clearly show Studio's value proposition (3D roof + BOQ)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `assets/images/studio-dashboard.png` added (or placeholder improved)
2. `products/studio.html` hero section updated with screenshot/improved placeholder
3. Image has proper `alt` text
4. No other existing content was modified
