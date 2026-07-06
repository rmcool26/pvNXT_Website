# pvNXT Website — Image Generation Chat Context

> **Purpose:** Use this as the FIRST message in a new chat dedicated to Gemini image generation for pvNXT website. This gives the agent full project + brand + section context so it can craft precise prompts.
> **Date:** 6 July 2026

---

## Project Overview

- **What:** pvNXT — connected solar workflow SaaS suite by Terranxt (IIT Delhi FITT incubated)
- **Audience:** B2B — EPC companies, installers, O&M teams, homeowners in India
- **Website:** Next.js 14 marketing site — lead gen goal (Request a Demo CTA)
- **Brand tone:** Corporate, professional, clean — like Linear / Zoho / Notion product pages. NOT funky, NOT case-study storytelling, NOT AI-cliché
- **Language:** English only, no Hindi

## Brand Tokens (use these in ALL image prompts)

| Token | Hex | Usage |
|-------|-----|-------|
| pvnxt (primary) | #069fb1 | Main accent, connectors, highlights, overlays |
| pvnxt-dark | #047a88 | Buttons, strong accents, hub fills |
| pvnxt-tint | #e6f7f9 | Light fills, card backgrounds, tints |
| ink | #0f1720 | Text, dark elements, shadows |
| muted | #5b6b73 | Secondary text, subtle elements |
| line | #dbe8ea | Borders, dividers |
| white | #ffffff | Backgrounds |
| Keepout red | #ef4444 | Keepout zone markers |
| Keepout orange | #f97316 | Keepout zone borders |

## Fonts
- Sora (headings) + Inter (body) — but NO text in images except minimal annotations

## Visual Rules
- NO AI photos for product screenshots — those are labelled placeholders
- Decorative/hero visuals: clean, corporate, minimal
- Non-portal visuals = SVG vector / geometric / line icons — code-generated
- Motion: solar-related subtle corporate — antigravity-style mouse gradient allowed — professional, not playful
- Images must look REAL and professional — NOT like obvious AI generations
- Indian context — rooftops, urban colonies, Delhi NCR style buildings

---

## Images Needed (2 pending)

---

### IMG-01: Indian RCC Rooftop — Solar Analysis Visual

**Section:** S4 — "How pvNXT Works" (after 4-step process flow)
**Placement:** Full-width image below the 4 steps, above the "See how Studio works →" CTA
**Current image:** `img-3d-photogrammetry.png` (1.1 MB, generic technical diagram — being replaced)
**Dimensions:** 2.35:1 aspect ratio (~1400×600 px)
**File:** Will be saved as `img-3d-photogrammetry.webp` + `.png` fallback

**What this image MUST show:**
- Top-down aerial/satellite view of an Indian RCC flat roof (grey concrete)
- L-shaped or irregular layout (typical Indian urban home — NOT western pitched roof)
- 2-3 keepout zones marked with red/orange dashed outlines (water tank, stairwell room, vent pipes)
- Shadow pattern from adjacent building/water tank — diagonal shadow across part of roof
- Teal (#069fb1) grid overlay on usable area showing solar panel placement zones
- Minimal measurement annotations (2-3 only, like "12m", "8m") in teal
- Subtle 3D wireframe hint on one edge suggesting 3D model generation
- Surrounding: adjacent buildings at edges — Delhi NCR / Gurgaon / Faridabad urban colony feel

**Why this image exists:** To show an Indian EPC team "pvNXT can analyze YOUR roof" — must feel authentic and relatable, not like a generic stock image. The keepouts + shadow analysis + grid = proof of value.

**Caption that will appear below image:** "Actual Indian RCC rooftop — keepout zones, shadow mapping, and panel layout in pvNXT Studio."

**Previous attempt review:**
- GEM-02 (process diagram) — REJECTED: Gemini divided one image into 4 panels instead of creating a real process flow
- GEM-04 (Indian RCC roof, already generated once) — Rajat felt it doesn't look like a process, just a single image. This is CORRECT — it should be a single roof analysis image, not a process. The process is shown in the 4 code steps above it.

**Style:** Photorealistic base with clean vector-style overlays (grid, keepout markers, measurements). Think polished SaaS product screenshot overlaid on real satellite imagery. NOT cartoon, NOT illustration, NOT dark mode.

**Negative keywords:** No people, no cars, no logos, no text blocks, no dark mode, no neon, no cartoon, no western pitched roofs, no trees blocking roof, no blurry, no watermark.

**Alt text:** `pvNXT satellite analysis of Indian RCC rooftop — keepout zones marked, shadow pattern visible, solar placement grid overlay`

---

### IMG-02: Ecosystem Hub-and-Spoke Diagram

**Section:** S5 — "One suite. Every role. Connected data." (merged with role-based entry)
**Placement:** Center of section, above 5 role entry cards
**Current image:** `eco-diagram.png` (901 KB, existing diagram)
**Dimensions:** 16:9 aspect ratio (~1200×675 px)
**File:** Will be saved as `eco-diagram.webp` + `.png` fallback

**What this image MUST show:**
- Hub-and-spoke layout with center node + 6 product nodes
- Center: "Shared Project Data" — rounded rect or circle, #047a88 fill, subtle glow
- 6 nodes arranged in hexagonal pattern around center, each connected by thin teal line:
  1. Studio — solar panel icon
  2. Connect — user/home icon
  3. Go — location/field icon
  4. Proposal — document icon
  5. Field App — mobile phone icon
  6. SCADA — monitoring chart icon
- Each node = small rounded-rect card with icon + tiny product name label
- Lines from center to each node suggesting data flow

**Why this image exists:** To visually show that all 6 products share one data layer. A viewer should instantly get "everything is connected through one hub." Must be scannable on mobile (nodes not too tiny).

**Previous attempt review:**
- GEM-03 (already generated once) — 74% white space, only 1-2% teal accents. Likely too sparse/minimal for homepage. On mobile the nodes would be too small to read. Needs to be DENSER with larger, more colorful nodes. More brand color presence. Less white space.

**Style:** Clean, flat, corporate isometric. White background but nodes should be LARGER and MORE COLORFUL than previous attempt. Node cards with #e6f7f9 fill + #dbe8ea border. Hub with #047a88 fill + white icon. Connectors in #069fb1. Must feel like a polished infographic, not a wireframe.

**Negative keywords:** No people, no dark mode, no neon, no cartoon, no photorealistic, no gradients (except subtle hub glow), no logos, no extra text, no shadows, no 3D perspective, no sparse/minimal layout.

**Alt text:** `pvNXT connected ecosystem — Shared Project Data hub connected to Studio, Connect, Go, Proposal, Field App, SCADA`

---

## Already Resolved (NO image needed)

| Section | Decision |
|---------|----------|
| S1 Hero background | CSS gradient + SolarHeroCanvas motion overlay. No image, no video. |
| S2 What is pvNXT | Code-generated SVG icons. No image. |
| S3 Products Grid | Status badges = code only. |
| S6 Stat Band | Text + numbers = code only. |
| S8 Glossary | Removed from homepage. |
| S9 CTA | Code fix only. |

---

## How to Use This Context

1. Start new chat
2. Paste this entire document as the first message
3. Tell the agent: "Using this project context, create a Gemini image prompt for IMG-01 [or IMG-02]. Make it precise enough that Gemini generates a professional, agency-level result that fits the section's purpose."
4. Generate image in Gemini
5. Verify quality
6. Save to `pvNXT_Website/public/assets/` as both WebP (compressed) and PNG (fallback)
7. Come back to the code-fix chat to execute Gemma prompts

---

*End of image generation context.*
