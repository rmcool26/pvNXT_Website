# pvNXT Homepage — Section-wise Fix Plan with Prompts

> Generated: 6 July 2026  
> Method: Per section → Gemini image prompt (if needed) → Gemma code prompt  
> Rule: Generate image via Gemini FIRST, verify with Rajat, THEN apply code via Gemma  
> Responsive: Every fix checked for mobile (375px), tablet (768px), desktop (1280px+)

---

## S1 — HERO

### S1.1 — Fix broken .webp reference (CODE ONLY — no image needed)

**Issue:** `src="/assets/hero-bg-aurora.webp"` but .webp file doesn't exist → 404 on every page load.

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx, the hero section has `<img src="/assets/hero-bg-aurora.webp">` but the .webp file does not exist (only .png exists). Replace the `<img>` with a `<picture>` element that uses `/assets/hero-bg-aurora.webp` as the `<source>` (type="image/webp") and `/assets/hero-bg-aurora.png` as the fallback `<img>`. Remove the onError fallback handler. Keep all other props (alt, className, width, height, fetchPriority, decoding) exactly as they are.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S1.2 — Hero background image — enhance via Gemini (IMAGE NEEDED)

**Issue:** Current hero-bg-aurora.png is 4.6 MB, likely a raw AI-generated image. Needs to be a polished, brand-aligned hero visual that conveys "solar operations, connected" — not just an abstract aurora.

**Gemini Image Prompt:**
```
Create a wide hero background image for a B2B solar SaaS website homepage.

Subject: A sleek, top-down aerial view of solar panels arranged in neat rows on a rooftop, with subtle teal/cyan data connection lines flowing between the panels — suggesting a connected digital workflow overlay on physical solar infrastructure.

Style: Corporate clean, minimal, modern SaaS. NOT photorealistic — slightly stylized, like a high-end tech company hero image. Soft lighting, no harsh shadows.

Color palette: Primary teal #069fb1, dark teal #047a88, light tint #e6f7f9, deep ink #0f1720 for shadows. Background should blend from #e6f7f9 (light teal) at top to white/transparent at bottom. The data lines should glow subtly in #069fb1.

Mood: Professional, confident, tech-forward. A viewer should feel "this is a serious solar tech company."

Composition: Left 40% should be relatively empty/darker (for headline text overlay). Right 60% should show the solar panels + data lines visual. No text in the image.

Aspect ratio: 16:9 (1920x1080 px)

Negative: No people, no hands, no laptops, no generic stock poses, no cartoon style, no neon, no dark mode, no text, no logos, no cluttered elements.
```

**Alt text:** `pvNXT solar operations — connected solar panels with data overlay`

**After Rajat approves image → Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx hero section, replace the hero background image reference. Save the new Gemini-generated hero image as both WebP (hero-bg-aurora.webp, compressed < 200KB) and PNG (hero-bg-aurora.png, fallback) in public/assets/. The <picture> element should already reference these filenames. Compress the WebP to quality 80, max 1920px width. Delete the old oversized hero-bg-aurora.png.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S1.3 — Remove duplicate hero bullets (CODE ONLY)

**Issue:** 3 bullet points below CTAs are identical to StatBand items. Redundant.

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx hero section, remove the 3 bullet points below the CTAs (the `<div className="flex flex-wrap gap-x-5 mt-6 text-sm text-muted">` block containing "Satellite-based 3D roof modeling", "Shadow analysis – accurate site data", "BOQ + proposal – auto-generated"). These are duplicated in StatBand. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S1.4 — Show PlaceholderBox on mobile too (CODE ONLY)

**Issue:** `<div className="hidden lg:block">` hides the dashboard preview on mobile. Mobile users see only text.

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx hero section, the PlaceholderBox wrapper has `className="hidden lg:block"` which hides it on mobile. Change it to just show on all screen sizes — remove the `hidden lg:block` so the dashboard preview PlaceholderBox is visible on mobile too. On mobile it should appear below the text content (it already will because of the grid layout). Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S1.5 — Add responsive text sizing to hero heading (CODE ONLY)

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx hero section, the h1 has `className="text-[40px] lg:text-[56px]"`. Change it to `className="text-[36px] md:text-[40px] lg:text-[56px]"` for better mobile sizing. Also change the paragraph from `text-lg` to `text-base md:text-lg` for mobile readability. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S2 — WHAT IS pvNXT

### S2.1 — Replace 142 KB SVG icons with clean vectors (IMAGE + CODE)

**Issue:** All 6 SVG icons in `/public/assets/icons/` are 142 KB each — they have embedded raster images. Clean SVG icons should be < 5 KB. Non-portal visuals must be clean SVG vector/geometric per project rules.

**Gemini Image Prompt (for icon reference — but these should be CODE-GENERATED, not raster):**
> ⚠️ Per visual rules: non-portal visuals = SVG vector / geometric / line icons — code-generated. No Gemini needed. These should be hand-crafted SVGs with pvnxt-dark (#047a88) stroke color, 48×48 viewBox, 1.5 stroke-width, no fill.

**6 icons needed:**
| Icon | Description |
|------|-------------|
| ico-solar-panel.svg | Solar panel grid — rectangle divided into 3×2 cells, stand at bottom |
| ico-installer.svg | Hard hat with visor — semi-circle + brim, side wrench accent |
| ico-monitoring.svg | Monitor/screen with pulse line — rectangle + heartbeat polyline |
| ico-ecosystem.svg | Hub & spoke — center circle + 4 smaller circles connected by lines |
| ico-proposal.svg | Document with checkmark — rectangle + lines + check path |
| ico-satellite-3d.svg | Satellite dish/circle with signal arcs + 3D cube hint |

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: Replace all 6 SVG icon files in public/assets/icons/ with clean hand-crafted SVGs. Each icon must be: 48×48 viewBox, stroke color #047a88, stroke-width 1.5, fill none, no embedded raster images. Target size < 2 KB each.

Icons to create:
1. ico-solar-panel.svg — Solar panel: rounded rectangle divided into 3×2 cells with horizontal+vertical lines, stand at bottom
2. ico-installer.svg — Hard hat: semi-circle + brim, side lines suggesting tools
3. ico-monitoring.svg — Monitor: rectangle screen with a pulse/heartbeat polyline inside, stand at bottom
4. ico-ecosystem.svg — Hub & spoke: center circle + 4 smaller circles at corners connected by lines
5. ico-proposal.svg — Document: rectangle with 3 horizontal lines + a checkmark path
6. ico-satellite-3d.svg — Satellite: circle dish with signal arcs + small cube for 3D

Overwrite each file. Do not change any other file.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S2.2 — Make "What is pvNXT" cards clickable (CODE ONLY)

**Issue:** 3 cards (Design & Sell / Install & Track / Monitor & Maintain) have no link — dead end.

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx, the "What is pvNXT" section has 3 cards rendered as `<div>` elements. Change each card from a `<div>` to a `<Link>` wrapping the entire card content. Add href to each: "Design & Sell" → "/products/studio", "Install & Track" → "/products/go", "Monitor & Maintain" → "/products/connect". Add className="group" to each Link and add hover styles: hover:border-pvnxt hover:shadow-md transition duration-200. Also add an "Explore →" span at the bottom of each card (after the desc <p>) with className="text-[#047a88] font-medium text-sm mt-4 inline-block group-hover:underline". Remove the onError handler on the icon <img> tags (the clean SVGs will load fine). Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S2.3 — Add responsive sizing to S2 heading (CODE ONLY)

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx "What is pvNXT" section, the h2 has `className="text-[32px] lg:text-[40px] font-semibold text-ink"`. Change to `className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-ink font-sora"`. Also change the section padding from `py-20` to `py-16 md:py-20`, and the paragraph from `text-lg` to `text-base md:text-lg`, and the grid from `md:grid-cols-3` to `grid-cols-1 md:grid-cols-3`, and the margin from `mt-12` to `mt-10 md:mt-12`. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S3 — PRODUCTS GRID

### S3.1 — Add subtitle + fix font-[600] + differentiate status badges (CODE ONLY)

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: Three changes in the Products section of app/page.tsx and components/ProductCard.tsx:

1. In app/page.tsx Products section: wrap the h2 and add a subtitle. Change the section to have a `<div className="text-center mb-10">` wrapper containing the existing h2 (add font-sora class and responsive sizing text-[28px] md:text-[32px] lg:text-[40px]) plus a new `<p className="text-muted mt-3 text-base md:text-lg max-w-xl mx-auto">Each product connects to shared project data — no silos, no double entry.</p>`. Remove the old mb-10 from h2.

2. In components/ProductCard.tsx: change `font-[600]` to `font-semibold` on the h3.

3. In components/ProductCard.tsx: replace the single status badge style with differentiated colors. Add a `statusStyles` map: "Live" → "bg-[#e6f7f9] text-[#047a88]", "Internal" → "bg-amber-50 text-amber-700", "In progress" → "bg-blue-50 text-blue-700". Apply the matching style based on status prop, defaulting to "Live" style.

Also change the grid in app/page.tsx from `lg:grid-cols-3 md:grid-cols-2` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for better mobile stacking. Add responsive section padding: `py-16 md:py-20`. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S4 — HOW pvNXT WORKS

### S4.1 — Expand flow to cover full suite (CODE ONLY — content fix)

**Issue:** Current 4 steps only cover design pipeline. Needs to show the FULL suite journey.

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx "How pvNXT Works" section (section with id="how-it-works"), make these changes:

1. Change the h2 from "Accurate solar design – without repeated site visits." to "From site capture to plant monitoring — connected." Add font-sora class and responsive sizing: text-[28px] md:text-[32px] lg:text-[40px].

2. Change the subtitle from "Satellite imagery to installed modules – connected." to "Satellite imagery to installed modules to live monitoring — one suite."

3. Update the 4 steps to cover the full suite:
   - Step 1: "Capture" — "Satellite imagery → accurate 3D roof/site model. Minimal site visits needed."
   - Step 2: "Design & Sell" — "Layout, shadow analysis, SLD in Studio. Auto-generated BOQ and proposals."
   - Step 3: "Install" — "pvNXT Go guides installers on-site. Field App captures survey data."
   - Step 4: "Monitor & Maintain" — "Connect portal for consumers. SCADA for real-time plant monitoring and alerts."

4. Add SVG arrow connectors between steps on desktop (md and up): after each step except the last, add an SVG arrow `<svg className="w-6 h-6 text-pvnxt mt-3 flex-shrink-0 -mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`. Wrap each step in a flex container so the arrow sits beside it.

5. Add a mobile-only vertical timeline layout (md:hidden): each step has a numbered circle on the left with a vertical line connector below it, and title+desc on the right.

6. Simplify the photogrammetry image caption from the technical 7-step list to: "Satellite capture → 3D roof model — automated, accurate, no repeated site visits."

7. Add a CTA after the section: `<Link href="/products/studio" className="text-[#047a88] font-medium hover:underline">See how Studio works →</Link>` in a text-center div.

8. Add responsive section padding: py-16 md:py-24, and responsive heading sizing.

Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

### S4.2 — Process/photogrammetry image — enhance via Gemini (IMAGE NEEDED)

**Issue:** Current img-3d-photogrammetry.png is 1.1 MB and looks like a raw technical diagram. Needs to be a polished, brand-aligned visual that explains the satellite → 3D model process clearly.

**Gemini Image Prompt:**
```
Create a wide process diagram showing how satellite imagery becomes an accurate 3D solar site model.

Layout: Horizontal flow, left to right, 4 stages separated by subtle arrow connectors:

Stage 1 (left): Satellite orbiting Earth, with signal lines pointing down to a rooftop
Stage 2: Multiple overlapping aerial photographs of a rooftop from different angles
Stage 3: Wireframe 3D point cloud of the same rooftop, showing depth and structure
Stage 4 (right): Final colored 3D model of the rooftop with solar panels placed on it

Style: Clean, corporate, isometric/flat hybrid. Think Notion/Linear product diagrams — minimal, white background, teal (#069fb1) as the primary accent color for connectors and highlights. Each stage should have a subtle rounded-rectangle container with very light tint (#e6f7f9) background.

Color palette: Background white. Elements in ink #0f1720 (dark) and pvnxt #069fb1 (teal accent). Connectors in #047a88. Light fills in #e6f7f9.

Text: NO text in the image. The stages will be labeled in code below the image.

Aspect ratio: 2.35:1 (approximately 1400×600 px)

Negative: No people, no hands, no dark mode, no neon, no cartoon style, no gradients, no text, no logos, no photo-realistic elements, no cluttered details.
```

**Alt text:** `pvNXT satellite to 3D model process — satellite capture, stereo imagery, point cloud, final 3D output`

**After Rajat approves image → Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: Replace the photogrammetry image in app/page.tsx "How it Works" section. Save the new Gemini-generated image as both WebP (img-3d-photogrammetry.webp, compressed < 200KB) and PNG (img-3d-photogrammetry.png, fallback) in public/assets/. Update the <img> src to reference img-3d-photogrammetry.webp. Keep all other attributes (alt, width, height, className, loading, decoding). Remove the onError handler. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S5 — ECOSYSTEM (merge with Role-Based Entry)

### S5.1 — Ecosystem diagram — enhance via Gemini (IMAGE NEEDED)

**Issue:** Current eco-diagram.png is 901 KB. Could be a cleaner, more professional hub-and-spoke visual that clearly shows "Project Data center" in the middle connected to all 6 products.

**Gemini Image Prompt:**
```
Create a hub-and-spoke ecosystem diagram for a connected solar software suite.

Center: A rounded rectangle or circle labeled as a hub — representing "Shared Project Data". It should have a subtle glow or border in teal #069fb1.

Spokes (6): Radiating outward from the center, 6 nodes arranged in a hexagonal pattern around the hub, each connected by a thin line/connector:

1. Top-left: "Studio" — represented by a solar panel icon shape
2. Top-right: "Connect" — represented by a user/home icon shape
3. Mid-left: "Go" — represented by a location pin / field icon shape
4. Mid-right: "Proposal" — represented by a document icon shape
5. Bottom-left: "Field App" — represented by a mobile phone icon shape
6. Bottom-right: "SCADA" — represented by a monitoring/chart icon shape

Each node should be a small rounded-rectangle card with the icon and a tiny label beneath it.

Style: Clean, flat, corporate isometric. White background. Teal #069fb1 for connectors and accents. Node cards have light tint #e6f7f9 fill with #dbe8ea border. Hub has #047a88 fill with white text/icon. No shadows, no 3D effects.

Text: ONLY the product names as tiny labels under each icon node. NO other text.

Color palette: White bg, #069fb1 connectors, #e6f7f9 node fills, #047a88 hub, #0f1720 text, #dbe8ea borders.

Aspect ratio: 16:9 (1200×675 px)

Negative: No people, no dark mode, no neon, no cartoon, no photo-realistic, no gradients (except subtle hub glow), no logos, no extra text, no shadows, no 3D perspective.
```

**Alt text:** `pvNXT connected ecosystem — Shared Project Data hub connected to Studio, Connect, Go, Proposal, Field App, SCADA`

**After Rajat approves image → Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx, merge the standalone "Ecosystem" section and the standalone "Role-Based Entry" section into ONE combined section. The merged section should:
1. Keep the ecosystem heading: "One suite. Every role. Connected data." with font-sora class and responsive sizing text-[28px] md:text-[32px] lg:text-[40px]
2. Add a subtitle: "Find your workspace — every product shares the same project data."
3. Show the ecosystem diagram image (update src from eco-diagram.png to eco-diagram.webp, remove onError handler, add rounded-2xl class)
4. Below the diagram, show 5 role entry cards (replacing the old pills):
   - "EPC" → "Design & Sell" → /products/studio
   - "Homeowner" → "Track your solar" → /products/connect
   - "Installer" → "Field execution" → /products/go
   - "Proposal Creator" → "Auto proposals" → /products/proposal
   - "O&M" → "Monitor & maintain" → /products/scada
5. Each role card should be a Link with className="group flex flex-col items-center px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-white border border-line hover:border-pvnxt hover:shadow-md transition duration-200 min-w-[120px]", containing a bold label and a small hint text.
6. Remove the old standalone Role-Based Entry section entirely.
7. Remove the caption paragraph below the ecosystem image.
8. Add responsive padding: py-16 md:py-20.
Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S6 — STAT BAND

### S6.1 — Replace text claims with real stats (CODE + CONTENT)

**Issue:** StatBand shows text claims, not actual statistics. No credibility. Needs real numbers.

**Real context (from Rajat):** One EPC partner (Astron Green) in pilot run, successful so far. No inflated metrics — honest positioning only. No invented claims per tone rules.

**StatBand content — honest, corporate:**
- "Astron Green" / "Pilot EPC partner"
- "Pilot" / "Live & successful"
- "6" / "Connected products"
- "0" / "Repeated site visits needed"
- "IIT Delhi" / "FITT incubated"

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: Rewrite components/StatBand.tsx. Replace the current plain text items with a stat grid. Each stat should have a large value (font-semibold, text-pvnxt color, font-sora class, text-[28px] md:text-[32px]) and a small label below (text-[13px] md:text-sm, text-muted). Layout: grid grid-cols-2 md:grid-cols-5 gap-6 text-center. Values:
- "Astron Green" / "Pilot EPC partner"
- "Pilot" / "Live & successful"
- "6" / "Connected products"
- "0" / "Repeated site visits"
- "IIT Delhi" / "FITT incubated"
Remove the old flex-wrap layout. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S7 — ROLE-BASED ENTRY → MERGED into S5 (above)

Already covered in S5.1 Gemma prompt. Standalone section will be removed.

---

## S8 — GLOSSARY → REMOVE from homepage

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In app/page.tsx, remove the entire "GLOSSARY" section (the section with the 5-card grid containing EPC, Consumer, Installer, O&M, SCADA definitions). Delete the section completely. Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## S9 — FINAL CTA

### S9.1 — Fix font issues + broaden copy (CODE ONLY)

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: In components/CTASection.tsx, make these changes:
1. Change `font-[600]` to `font-semibold` on the h2.
2. Remove the inline `style={{fontFamily:"Sora,Inter,sans-serif"}}` and add `font-sora` class to the h2 instead.
3. Add responsive sizing: change h2 from `text-[32px] lg:text-[40px]` to `text-[28px] md:text-[32px] lg:text-[40px]`.
4. Add responsive padding: change section `py-24` to `py-16 md:py-24`.
5. Change paragraph `text-[17px]` to `text-base md:text-[17px]`.

Then in app/page.tsx, update the CTASection usage:
1. Change `sub="Request a demo for your EPC team."` to `sub="Book a demo for your team — EPC, installer, or O&M."`
2. Add secondary CTA props: `secondaryText="Explore products"` and `secondaryHref="#products"`

Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## GLOBAL — Image Compression

### G1 — Compress all images to WebP (IMAGE PROCESSING)

**Gemma Prompt:**
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: Compress all large images in public/assets/ to WebP format using Python PIL. For each PNG file, resize to its display max width and save as WebP quality 80:
- hero-bg-aurora.png → hero-bg-aurora.webp (resize to 1920px wide)
- eco-diagram.png → eco-diagram.webp (resize to 1200px wide)
- img-3d-photogrammetry.png → img-3d-photogrammetry.webp (resize to 1400px wide)
- pat-pvnxt.png → pat-pvnxt.webp (resize to 400px wide, quality 60)

Then update all image references in the codebase to use WebP with PNG fallback using <picture> tags where appropriate, or update src to .webp for lazy-loaded images.

For PatternBg.tsx: change img reference from "/assets/pat-pvnxt.png" to "/assets/pat-pvnxt.webp".

Do not delete the original PNG files (they serve as fallbacks). Do not change anything else.
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```

---

## GLOBAL — Pattern Background

### G2 — pat-pvnxt.png pattern — enhance via Gemini? (OPTIONAL IMAGE)

**Issue:** 2.9 MB for a repeating pattern is excessive. Could be replaced with a tiny CSS-generated pattern instead.

> ⚠️ Per visual rules: patterns should be code-generated (CSS/SVG), not raster images. Recommend building as CSS instead of Gemini image.

**Recommendation:** Skip Gemini — build as CSS repeating gradient or tiny SVG tile via Gemma. The current pattern is just a subtle background texture.

---

## Summary — Gemini Prompts Needed

| ID | Section | What | Status |
|----|---------|------|--------|
| GEM-01 | S1.2 Hero bg | Solar panels + data overlay hero visual | ⏳ Rajat to approve prompt |
| GEM-02 | S4.2 Process | Satellite → 3D model process diagram | ⏳ Rajat to approve prompt |
| GEM-03 | S5.1 Ecosystem | Hub-and-spoke connected suite diagram | ⏳ Rajat to approve prompt |

**3 Gemini image prompts. Rest are code-only fixes via Gemma.**

---

## Execution Order

1. **FIRST:** Rajat reviews + approves/revises the 3 Gemini prompts above
2. **SECOND:** Rajat generates images via Gemini, verifies them
3. **THIRD:** Save approved images to public/assets/ (both WebP + PNG)
4. **FOURTH:** Execute Gemma prompts in order: S1.1 → S1.3 → S1.4 → S1.5 → S2.1 → S2.2 → S2.3 → S3.1 → S4.1 → S5.1 → S6.1 → S8 → S9.1 → G1
5. **FIFTH:** Run `npm run build` to verify

---

*Rajat — review the 3 Gemini prompts above. Approve, revise, or reject each. Then we proceed with execution.*
