Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are adding media assets to the pvNXT website (static HTML/CSS/JS, v3-main branch). Currently, product pages have placeholder icons. We need to generate AI images for the hero section screenshots.

This is an IMAGE GENERATION task. We will use AI image generation to create realistic product screenshots, then ADD them to `assets/images/` folder.

---

TASK: Generate AI image for `products/studio.html` hero section screenshot.

STEP 1: Generate the image using AI image generation (Gemini, DALLE, Midjourney, etc.)

**IMAGE REQUIREMENTS (BE VERY SPECIFIC):**
```
TYPE: IMAGE (SCREENSHOT)

FILE DETAILS:
- File name: `studio-dashboard.png`
- Format: PNG (with transparency support)
- Dimensions: 1280x720px (16:9 aspect ratio)
- Orientation: Landscape
- File size: < 500KB (optimize for web)

VISUAL DESCRIPTION (BE VERY DETAILED):
Generate a realistic screenshot of a solar EPC design software dashboard called "pvNXT Studio". The image should show:

1. **LEFT SIDE (60% width):**
   - A 3D roof model of a residential house
   - Roof with solar panels placed on it
   - Shadow analysis overlay (show shadows in soft purple/blue tint)
   - Measurement labels (show dimensions like "8.5m x 6.2m")
   - Teal (#069fb1) accent color for selected panels

2. **RIGHT SIDE (40% width):**
   - BOQ (Bill of Quantities) sidebar
   - Table with columns: Item, Quantity, Unit Price, Total
   - Rows showing: Solar Panels (24 units), Inverter (1 unit), Mounting Structure (1 set)
   - Total cost displayed at bottom: "₹ 4,85,000"

3. **TOP BAR:**
   - Logo text "pvNXT Studio" in teal (#069fb1)
   - Navigation: Project / Design / BOQ / Reports
   - "Save Project" button (teal color)

4. **COLOR SCHEME:**
   - Primary: Teal (#069fb1)
   - Background: White (#ffffff)
   - Text: Dark gray (#091d2c)
   - Accents: Light teal tint (rgba(6,159,177,0.08))

5. **STYLE:**
   - Clean, modern SaaS dashboard UI
   - No realistic photos — this is a SOFTWARE SCREENSHOT
   - Professional, technical appearance
   - readable fonts (like Inter, Roboto, or similar)

IMPORTANT NOTES:
- This is a SOFTWARE INTERFACE screenshot, NOT a real photo
- Show a computer monitor/ laptop frame around the interface (optional)
- Make it look like a real working software, not a concept mockup
- Include realistic data (not lorem ipsum)
```

STEP 2: After generating the image, ADD it to the repository:
1. Save the generated image as `assets/images/studio-dashboard.png`
2. Optimize the image (< 500KB, use TinyPNG or similar)
3. Commit and push to v3-main branch

STEP 3: Update `products/studio.html` to use this image:
Replace the placeholder (around line 65-75) with:
```html
        <div class="reveal">
          <div class="product-hero-visual" aria-label="pvNXT Studio interface preview">
            <div class="product-screenshot-frame">
              <img src="../assets/images/studio-dashboard.png" 
                   alt="pvNXT Studio - EPC design workspace showing 3D roof model and BOQ"
                   style="width:100%; border-radius:16px; box-shadow: 0 20px 60px rgba(6,159,177,0.12);">
              <div class="screenshot-caption">Studio — EPC Design Workspace</div>
            </div>
          </div>
        </div>
```

---

CRITICAL RULES:
- Generate a REALISTIC software screenshot (not a concept art)
- Follow the EXACT visual description above
- Use the CORRECT color scheme (teal #069fb1)
- Include realistic data (not placeholder text)
- Optimize the image for web (< 500KB)
- Add proper `alt` text for accessibility
- Test that the image loads correctly on the page

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. AI image generated for Studio dashboard (realistic screenshot)
2. `assets/images/studio-dashboard.png` added to repository
3. `products/studio.html` updated to use the generated image
4. Image is optimized for web (< 500KB)
5. No existing content was modified (only placeholder replaced)
