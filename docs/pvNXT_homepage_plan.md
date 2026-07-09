# pvNXT HOMEPAGE REVAMP PLAN — Agency-Level

> **Base Theme:** `index.html` from terranxt-website (v3-main branch)
> **Design Philosophy:** Keep the premium terranxt aesthetic. Shorten headings. Clean up font sizes. Add pvNXT-specific content. No dark/light split — use the established design language.

---

## CURRENT STATE AUDIT

### What's Already Great (KEEP):
- Hero orbital rings + floating signal badges + 3D analysis GIF
- Trust strip (4 indicators)
- Lenis smooth scroll
- CSS: glow effects, float animations, gradient text, card-hover
- Section variety (energy field, solar wash, soft sections)
- Page loader (animated orbit)
- Lucide icons + Inter font
- Mobile responsive, skip-link, accessibility

### What Needs Fixing:
- Headlines too long (e.g., "From property input to decision-ready solar output")
- Font sizes too big in hero (text-xl + md:text-2xl subtext)
- "Terranxt" messaging — needs to become pvNXT-focused
- Only 3 portals shown — needs all 6-7 products
- Missing: "Old Way vs pvNXT Way", Atlas pipeline, Real Results stats
- "Why Terranxt" → should become "Why pvNXT"
- Contact CTAs point to Terranxt contact, not pvNXT demo

---

## REVAMPED HOMEPAGE STRUCTURE (7 Sections)

```
S1: HERO + TRUST STRIP
S2: OLD WAY vs pvNXT WAY
S3: PRODUCTS (6 portals + data layer)
S4: HOW IT WORKS (Atlas pipeline + ecosystem)
S5: WHY pvNXT
S6: REAL RESULTS
S7: CTA
```

---

## S1: HERO + TRUST STRIP

### Hero
**DESIGN:** Keep the terranxt hero design EXACTLY — orbital rings, roof plane with 3D Analysis GIF, floating signal badges. This is already premium. Only update content.

**CONTENT CHANGES:**
- Overline: "IIT Delhi-incubated solar workflow suite" (was "solar intelligence platform")
- Headline: "Solar operations, connected." (3 words, was "Elevating Solar with AI & Geo-Spatial Tech")
- Subtext: "pvNXT connects satellite-based 3D design, auto BOQ generation, proposal automation, installation tracking, and SCADA monitoring — on one shared data layer." (shorter, pvNXT-focused)
- Hero proof row (3 pills between subtext and CTAs): Keep the 3 items — "Remote property scan", "3D Shadow analysis", "Auto BOQ in 15-20 minutes"
- CTAs: "Request a Demo" (primary → contact.html#contact-form) + "Explore products" (secondary → #products)
- Floating signals: "Geo-spatial scan → Active", "Yield model → 15-20 min", "Manual visit → Reduced" — KEEP

**🎬 VISUAL NOTES:**
- The 3D Analysis GIF is PERFECT. Keep it.
- The orbital rings animation is premium. Keep it.
- Right side: The GIF + floating signals stay. Consider adding a 4th floating signal: "pvNXT Atlas → Connected"

### Trust Strip (below hero)
**DESIGN:** Keep exactly as-is. Border-y, 4-column grid, muted labels + bold values.

**CONTENT UPDATE:**
- "Incubation → IIT Delhi Incubated" (KEEP)
- "Core Engine → AI + Geo-spatial Design" (KEEP)
- "Workflow → Zero Site Visit" (was "Zero-site-visit qualification")
- "Output → Layouts, Yields, BOQs" (KEEP)

---

## S2: OLD WAY vs pvNXT WAY

**❌ DO NOT USE dark/light split screen. It looked bad.**

**✅ USE the clean card approach from v2_pvNXT_index.html but refine it:**

**DESIGN:**
- Background: White with subtle top/bottom padding
- Two rounded-2xl cards side by side in a 2-column grid
- Left card: Light red accent border (border-red-100), subtle red-50 background wash, red X markers
- Right card: Light emerald accent border (border-emerald-100), subtle emerald-50 background wash, green V checkmarks
- Cards have card-hover treatment
- Headline: centered above, 4-5 words max

**CONTENT:**
- Section label: "The gap we close." (in overline style with teal left bar)
- Headline: "Old Way vs pvNXT Way" (5 words)
- Sub: "The solar industry runs on disconnected tools. pvNXT connects them."

**LEFT CARD — The Old Way (7 items):**
1. ✕ Leads managed in WhatsApp chats
2. ✕ Designs done in manual CAD, takes days
3. ✕ Proposals typed in Word or Excel
4. ✕ Projects tracked on whiteboards
5. ✕ Site visits for every small update
6. ✕ Manual handoffs between teams
7. ✕ Days-to-weeks of delay at each step

**RIGHT CARD — The pvNXT Way (7 items):**
1. ✓ Every lead tracked in the system
2. ✓ Designs generated in minutes
3. ✓ Proposals created with one click
4. ✓ Projects managed in real time
5. ✓ Site data captured on mobile, remotely
6. ✓ Data flows between portals automatically
7. ✓ Connected, faster, and accurate

**VISUAL TREATMENT:**
- Each card gets a header with circle icon (✕ in red circle, ✓ in green circle) + bold title
- Bullet list below with consistent spacing
- The red card should feel "problem zone" — not dark, just light red tint
- The green card should feel "solution zone" — light emerald tint
- This is softer than the dark split, cleaner, and fits the terranxt design language

---

## S3: PRODUCTS — "6 products. One data layer."

**DESIGN:**
- Background: Soft teal tint (bg-teal-50 or pvnxt-tint/30 equivalent)
- Currently the terranxt site has a 3-portal section. Replace with a 6-product grid.

**VISUAL TREATMENT:**
- 6 cards in 3x2 grid on desktop, 2x3 on tablet, 1-column on mobile
- Each card: Icon + product number + name + tagline + status badge + link
- Cards use the existing card-hover treatment
- Below the grid: "ONE DATA LAYER" banner (from HTML version) — a centered teal-tinted strip saying "All six portals read and write to the same unified data source"

**CONTENT — 6 Cards:**
1. **01 · Studio** — "EPC design and proposal workspace" — Live → /products/studio.html
2. **02 · Connect** — "Consumer solar portal" — Live → /products/connect.html
3. **03 · Go** — "Installer field portal" — Live → /products/go.html
4. **04 · Proposal** — "Automated customer proposals" — Live → /products/proposal.html
5. **05 · Field App** — "Site survey capture" — Internal → /products/field-app.html
6. **06 · SCADA** — "Plant operations monitoring" — In progress → /products/scada.html

**🖼️ PLACEHOLDER NOTES:**
- Each card could eventually get a small product icon/illustration (24x24 or 32x32 teal icon)
- For now, use lucide icons: Studio=Layers, Connect=Home, Go=Smartphone, Proposal=FileText, FieldApp=Camera, SCADA=Activity

**STATUS BADGES:**
- Live: Teal background, teal-dark text
- Internal: Gray background, gray text
- In progress: Amber background, amber text

---

## S4: HOW IT WORKS — "From satellite to solar."

**DESIGN:** This is the HERO section of the page. Most important. Takes the best from terranxt's "How It Works" section and enhances it with the Atlas pipeline.

**PART A — ATLAS ILLUSTRATION AREA:**
- A full-width container with subtle bg-teal-50/30
- An ILLUSTRATION area showing the pipeline:
  - Left: Satellite icon with "Stereo Imagery" label
  - Center: Processing (3D wireframe of a roof emerging)
  - Right: Output (3D roof model with panels + shadow overlay)
  - Connected by animated teal data flow lines

**🖼️ ILLUSTRATION PLACEHOLDER:**
```
[ILLUSTRATION: pvNXT Atlas Pipeline
Size: 1200x500px
Style: Clean technical line-art, teal on white
Content: 3-stage pipeline —
  Stage 1: Satellite dish receiving stereo imagery from space
  Stage 2: Photogrammetry processing — 2D images converging into a 3D wireframe roof model
  Stage 3: Final 3D roof model with solar panels placed, shadow zones marked, keepouts labeled
  Connecting lines: Dashed teal lines with subtle glow between stages
  Background: Very light teal gradient, mostly white
Purpose: Show how pvNXT captures roof data from space without physical visits]
```

- Below the illustration: 3-line caption centered in small muted text
  "Stereo satellite imagery → Photogrammetry processing → Accurate 3D roof model"
  "Zero physical site visits. Auto-detected keepouts and obstructions."

**PART B — 7-STEP CONNECTED FLOW:**
- Below the Atlas illustration, a section labeled "Connected Flow"
- 7 steps as connected circles in a horizontal row (desktop) / vertical timeline (mobile)
- Each circle: step number inside, product name above, one-line function below
- Connected by a thin teal line (SVG) with subtle energy-pulse animation

**STEPS (in order):**
1. Atlas — Satellite → 3D Model
2. Field App — Site Verify
3. Connect — Feasibility & Quote
4. Studio — Design & Output
5. Proposal — Auto-Generate
6. Go — Track Installation
7. SCADA — Monitor & Alert

**CAPTION (below timeline):**
"Each portal reads from the same project data. No re-entry. No broken handoffs. One connected system."

---

## S5: WHY pvNXT

**DESIGN:** Adapt the existing terranxt "Why Terranxt" section. It already has a great 3-column layout with numbered items. Keep the design, update content for pvNXT.

**CONTENT:**
- Section label: "Why pvNXT" (overline style)
- Headline: "A cleaner operating layer for every solar decision." (keep existing headline — it's good)
- Sub: shorten from existing text

**3 REASONS (keep numbered layout, update text):**
1. **Speed and zero site visits** — "Generate 3D building digitization, shadow analysis, accurate energy yields and automated BOQs without waiting for a manual visit."
2. **Role-aware ecosystem** — "Consumer, EPC, and installer collaborate through interfaces designed for their exact roles. One data layer, no confusion."
3. **Soft-cost discipline** — "AI and geo-spatial workflows reduce repetitive manual processing across qualification, proposal, and handover stages."

**🎬 VIDEO PLACEHOLDER (right side):**
If the current design has a media element, keep it. If not, add:
```
[VIDEO: pvNXT Studio Demo
Size: 800x500px
Type: Screen recording — product demo
Duration: 15-20s loop
Content: Show Studio interface: satellite view → 3D model generation → panel layout → shadow overlay → BOQ output
Style: Clean screen capture, no voiceover needed for loop
Purpose: Show the product in action]
```

---

## S6: REAL RESULTS — "Measured. Not promised."

**DESIGN:**
- Background: White section with subtle top border
- This follows the terranxt design language — clean, typography-driven
- 4 stats in a row, followed by 3 supporting points

**STATS:**
- Use the EXISTING terranxt stat card design (if present) or create:
  - Big teal numbers (text-5xl md:text-6xl font-bold text-teal-500)
  - Small muted labels below
  - Subtle card-hover with scale

| Stat | Label |
|------|-------|
| 90% | Reduction in design time |
| 0 | Unnecessary site visits |
| 3x | Faster proposal generation |
| 40% | Faster project delivery |

**SUPPORTING POINTS (3 in a row, arrow + bold + text):**
1. → **Full data traceability.** Every action, change, and approval is logged.
2. → **Better team coordination.** Teams work from the same data, not different versions.
3. → **Scalable operations.** Handle more projects without adding headcount.

---

## S7: CTA — "See pvNXT in action."

**DESIGN:** Keep the existing final-cta-section from terranxt. It's premium. Just update content.

- Headline: "See pvNXT in action." (was about Terranxt)
- Sub: "Book a demo for your team — EPC, installer, or O&M."
- Primary CTA: "Request a Demo" → contact.html#contact-form
- Secondary CTA: "Explore products" → #products

---

## FONT & TYPOGRAPHY FIXES

| Element | Current | Fix |
|---------|---------|-----|
| Hero headline | 4-6 words, large | Keep size, shorten to 3-4 words |
| Hero subtext | Long paragraph | Shorten to 1-2 lines max |
| Section headlines | Long (6-10 words) | Max 4-5 words each |
| Section subs | Sometimes too long | 1 line, 8-12 words max |
| Body text | OK | Keep short — 2-4 lines max |
| Font weight | Over-bold in places | Headings: 600 max, body: 400-500 |
| Font family | Inter OK | Keep Inter for body. Consider adding Manrope for headings (from final_terranxt_index) |

---

## VISUAL ASSET NEEDS (Placeholder Summary)

| Section | Asset Type | Description |
|---------|-----------|-------------|
| S1 Hero | Already exists | 3D Analysis GIF — KEEP |
| S3 Products | Icons | 6 product icons (use lucide for now) |
| S4 Atlas | **ILLUSTRATION** | Satellite→3D pipeline (see spec above) |
| S5 Why | **VIDEO** | Studio demo screen recording |
| S6 Results | None needed | Pure typography |

---

## FILES TO CREATE/MODIFY

| File | Action |
|------|--------|
| `index.html` | Complete revamp (homepage) |
| `home.html` | Same content as index.html (symlink or copy) |
| `products/studio.html` | New — dedicated product page |
| `products/connect.html` | New |
| `products/go.html` | New |
| `products/proposal.html` | New |
| `products/field-app.html` | New |
| `products/scada.html` | New |
| `about.html` | Revamp for pvNXT focus |
| `contact.html` | Minor updates for pvNXT |
| `assets/css/style.css` | Add any new CSS needed |
| `components/header.html` | Update nav links |
| `components/footer.html` | Update links |

---

## WHAT STAYS UNCHANGED

- CSS architecture (style.css + pages/*.css)
- Lenis smooth scroll
- Page loader
- GSAP animations
- Lucide icons
- Header/footer component system (JS dynamic loading)
- Skip-link + accessibility
- Mobile responsive breakpoints
- Border radius (soft, soft-lg, soft-sm)
- Color palette (teal-50 through teal-900)
- Glow effects, float animations, gradient text
- WhatsApp bot (in contact)

---

## SECTION-BY-SECTION VERDICT

| # | Section | Source | Status |
|---|---------|--------|--------|
| S1 | Hero + Trust Strip | terranxt (keep design, update content) | 🔧 Modify |
| S2 | Old Way vs pvNXT Way | v2_pvNXT HTML (clean card approach) | 🆕 New |
| S3 | Products Grid | New (replaces 3-portal section) | 🆕 New |
| S4 | How It Works | New (Atlas pipeline + 7-step flow) | 🆕 New |
| S5 | Why pvNXT | terranxt "Why Terranxt" (adapt) | 🔧 Modify |
| S6 | Real Results | New stats section | 🆕 New |
| S7 | CTA | terranxt (update content only) | 🔧 Modify |

---

## DESIGN RULES (from website_master_plan)

Applied throughout:
- ✅ Max 4-5 word headlines
- ✅ Every section visually distinct
- ✅ No card-card-box-box repetition (S2=cards, S3=grid+banner, S4=illustration+timeline, S5=numbered+video, S6=typography)
- ✅ Strategic CTAs at S1 and S7
- ✅ Restrained, purposeful motion
- ✅ Premium corporate aesthetic
- ✅ No AI clichés or hype words
- ✅ Short paragraphs (2-4 lines max)
