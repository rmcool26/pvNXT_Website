Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding media assets to the pvNXT website (static HTML/CSS/JS, v3-main branch). Currently, product pages have SVG placeholder icons in the capabilities section. We need to replace these with actual product screenshots.

This is a MEDIA ADDITION task. We will ADD screenshot images to `assets/images/` folder and UPDATE the HTML to reference these images.

---

TASK: Add product screenshot to `products/proposal.html` hero section.

STEP 1: Add the screenshot image to `assets/images/` folder:
- **File name:** `proposal-sample.png`
- **Type:** Image (PNG/JPG)
- **Dimensions:** 1280x720px (16:9 aspect ratio)
- **Content:** pvNXT Proposal sample document showing:
  - System summary on left
  - Cost + subsidy + savings tables in middle
  - Solar impact section on right
  - Teal (#069fb1) accent colors
- **Source:** Take screenshot from live portal or design mockup

STEP 2: Update `products/proposal.html` hero section (around line 65-75). REPLACE the placeholder div with this:

```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Proposal preview">
            <div class="product-screenshot-frame">
              <img src="../assets/images/proposal-sample.png" 
                   alt="pvNXT Proposal — Auto-generated customer proposal with system specs and cost tables"
                   style="width:100%; border-radius:16px; box-shadow: 0 20px 60px rgba(6,159,177,.12);">
              <div class="screenshot-caption">Proposal — Auto-Generated Customer Proposals</div>
            </div>
          </div>
        </div>
```

STEP 3: If the screenshot is not yet available, use this TEMPORARY placeholder (improved version):

```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Proposal preview">
            <div class="product-visual-placeholder" style="background: linear-gradient(135deg, rgba(6,159,177,.08), rgba(6,159,177,.03)); border: 2px dashed rgba(6,159,177,.2);">
              <div class="product-visual-icon" style="background: #fff; box-shadow: 0 8px 30px rgba(6,159,177,.1);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002 2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              </div>
              <p class="product-visual-label" style="font-weight: 600; color: var(--brand-dark);">Proposal Sample Preview<br><small style="font-weight: 400; color: var(--muted);">Add screenshot: proposal-sample.png</small></p>
            </div>
          </div>
        </div>
```

---

CRITICAL RULES:
- ADD image file to `assets/images/proposal-sample.png`
- UPDATE `products/proposal.html` to reference the image
- Use proper `alt` text for accessibility
- If screenshot not available, use improved placeholder (not the generic one)
- Image should be optimized (< 500KB) for fast loading
- The screenshot should clearly show Proposal's value proposition (auto-generated proposals)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `assets/images/proposal-sample.png` added (or placeholder improved)
2. `products/proposal.html` hero section updated with screenshot/improved placeholder
3. Image has proper `alt` text
4. No other existing content was modified
