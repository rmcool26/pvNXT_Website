Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding media assets to the pvNXT website (static HTML/CSS/JS, v3-main branch). Currently, all product pages have SVG placeholder icons in the capabilities section. We need to replace these with actual product screenshots.

This is a MEDIA ADDITION task. We will ADD screenshot images to `assets/images/` folder and UPDATE the HTML to reference these images.

---

TASK: Add product screenshot to `products/go.html` hero section.

STEP 1: Add the screenshot image to `assets/images/` folder:
- **File name:** `go-mobile.png`
- **Type:** Image (PNG/JPG)
- **Dimensions:** 1280x720px (16:9 aspect ratio, mobile mockup)
- **Content:** pvNXT Go installer portal showing:
  - Mobile interface on left/center
  - Task list with checkboxes
  - Photo proof section
  - Status updates panel
  - Teal (#069fb1) accent colors
- **Source:** Take screenshot from live portal: https://installer.pvnxt.com/

STEP 2: Update `products/go.html` hero section (around line 65-75). REPLACE the placeholder div with this:

```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Go portal preview">
            <div class="product-screenshot-frame">
              <img src="../assets/images/go-mobile.png" 
                   alt="pvNXT Go - Installer field portal showing task management and photo proof"
                   style="width:100%; border-radius:16px; box-shadow: 0 20px 60px rgba(6,159,177,.12);">
              <div class="screenshot-caption">Go — Installer Field Portal</div>
            </div>
          </div>
        </div>
```

STEP 3: If the screenshot is not yet available, use this TEMPORARY placeholder (improved version):

```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Go portal preview">
            <div class="product-visual-placeholder" style="background: linear-gradient(135deg, rgba(6,159,177,.08), rgba(6,159,177,.03)); border: 2px dashed rgba(6,159,177,.2);">
              <div class="product-visual-icon" style="background: #fff; box-shadow: 0 8px 30px rgba(6,159,177,.1);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              </div>
              <p class="product-visual-label" style="font-weight: 600; color: var(--brand-dark);">Go Mobile Preview<br><small style="font-weight: 400; color: var(--muted);">Add screenshot: go-mobile.png</small></p>
            </div>
          </div>
        </div>
```

---

CRITICAL RULES:
- ADD image file to `assets/images/go-mobile.png`
- UPDATE `products/go.html` to reference the image
- Use proper `alt` text for accessibility
- If screenshot not available, use improved placeholder (not the generic one)
- Image should be optimized (< 500KB) for fast loading
- The screenshot should clearly show Go's value proposition (task management + photo proof)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `assets/images/go-mobile.png` added (or placeholder improved)
2. `products/go.html` hero section updated with screenshot/improved placeholder
3. Image has proper `alt` text
4. No other existing content was modified
