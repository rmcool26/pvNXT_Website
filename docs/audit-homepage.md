# pvNXT Homepage — End-to-End Audit Report

> **Auditor:** Ink & Blink — 7-in-1 role (UI/UX Designer + Tester + WCAG Auditor + Pixel-Perfect + Content Writer + Newbee Simulator + Art Director)  
> **Date:** 6 July 2026  
> **Page:** `/` (app/page.tsx)  
> **Build status:** ✅ `npm run build` passes — zero errors  

---

## Executive Summary

The homepage has **9 sections** top-to-bottom. Build compiles clean, but there are significant issues in **flow redundancy, image performance, broken asset references, missing social proof, and content repetition**. A first-time visitor (especially a solar EPC decision-maker) would understand "this is a solar SaaS suite" but would NOT be pushed toward conversion — there's no trust signal, no proof, no urgency, and several sections repeat the same message in different wrappers.

**Overall Grade: C+** — Functional, but not conversion-ready for a B2B lead-gen site.

---

## Section-by-Section Audit

### S1 — HERO

| Aspect | Finding |
|--------|---------|
| **Structure** | Full-width hero, min-h-[82vh], left content + right PlaceholderBox (dashboard preview). Background image + SolarHeroCanvas motion overlay. |
| **Headline** | "Solar operations, connected." — ✅ Clean, corporate, clear. |
| **Subtext** | "pvNXT connects EPC design, sales, installation and monitoring in one workflow suite. Built for solar teams in India." — ✅ Good. |
| **CTAs** | "Request a Demo" (primary → /contact) + "Explore products" (secondary → #products) — ✅ Clear. |
| **Motion** | SolarHeroCanvas: Framer aurora orbs + GSAP sun glow + rotating rays + floating panel cells — ✅ Professional, subtle, corporate. Respects `prefers-reduced-motion`. |

#### 🔴 Critical Issues

1. **BROKEN IMAGE REFERENCE:** `src="/assets/hero-bg-aurora.webp"` — this file **DOES NOT EXIST**. Only `.png` exists. The `onError` fallback switches to `.png`, but every visitor first triggers a **404** before the fallback loads. This wastes an HTTP request and causes a visible flash.  
   → **Fix:** Change `src` to `/assets/hero-bg-aurora.png` directly, or convert the PNG to WebP.

2. **MASSIVE HERO IMAGE:** `hero-bg-aurora.png` = **4.6 MB** (2752×1536). For a hero background that loads above the fold, this is unacceptable. Target: **< 200 KB** (WebP) or **< 300 KB** (compressed PNG).  
   → **Action:** Compress aggressively, or generate a new hero bg via Gemini at optimized size.

3. **DUPLICATE CONTENT:** The 3 bullet points below CTAs ("Satellite-based 3D roof modeling" / "Shadow analysis – accurate site data" / "BOQ + proposal – auto-generated") are **exactly the same** as StatBand (Section S6). Redundant — remove one or differentiate.

#### 🟡 Medium Issues

4. **MOBILE — NO VISUAL:** PlaceholderBox has `hidden lg:block`. Mobile users see ONLY text. No dashboard preview, no visual anchor.  
   → **Suggestion:** Show a simplified/stacked placeholder on mobile, or use a different visual (icon cluster, short video loop).

5. **NO VIDEO USED:** Two `.mp4` files exist in `/assets/` (A_sophisticated_dark_mode_abst.mp4, Cinematic_slow_motion_drone_v.mp4) but neither is used on the homepage. A subtle hero video loop could significantly improve first impression.

---

### S2 — "What is pvNXT"

| Aspect | Finding |
|--------|---------|
| **Headline** | "One connected suite for solar operations." — ✅ Clear. |
| **Subtext** | "pvNXT gives every solar role its own workspace – EPC, consumer, installer, O&M – with shared project data." — ✅ |
| **Cards** | 3 cards: Design & Sell / Install & Track / Monitor & Maintain. Each has icon + title + one-line desc. |

#### 🟡 Medium Issues

1. **CARDS NOT CLICKABLE:** These cards group products but have NO link or "Learn more" action. Dead-end for a user who wants to explore.  
   → **Fix:** Make cards link to the relevant product page, or add a "Explore →" link.

2. **OVERLAPS WITH ROLE-BASED ENTRY (S7):** Same 3 groupings appear again in Section 7 as role pills. Redundant flow.  
   → **Recommendation:** Merge into ONE section — either make these cards clickable and remove S7, or make S7 more descriptive and simplify S2.

3. **SVG ICONS ARE 142 KB EACH:** `ico-solar-panel.svg`, `ico-installer.svg`, `ico-monitoring.svg` are each 142 KB. A proper SVG icon should be < 5 KB. These likely have embedded raster images or excessive path data.  
   → **Fix:** Replace with clean hand-crafted SVG icons, or use code-generated icons (per visual rules — non-portal visuals = SVG vector / geometric / line icons).

---

### S3 — PRODUCTS GRID

| Aspect | Finding |
|--------|---------|
| **Headline** | "6 products. One connected data layer." — ✅ Punchy. |
| **Layout** | 3×2 grid (lg), 2-col (md), 1-col (sm). |
| **Cards** | ProductCard component — name, tagline, status badge, "Explore →" link. |

#### 🟡 Medium Issues

1. **NO INTRO CONTEXT:** Section jumps straight from headline to grid. A 1-line subtitle like "Each product connects to shared project data — no silos, no double entry." would help a newbee understand WHY these 6 are listed together.

2. **ProductCard INCONSISTENCY:** Uses `font-[600]` instead of `font-semibold`. The M3 micro-prompt was supposed to fix all `font-600` → `font-semibold` globally. This was missed in ProductCard.tsx.  
   → **Fix:** Change `font-[600]` to `font-semibold` in ProductCard.tsx.

3. **LAST ROW UNBALANCED:** 6 cards in a 3-col grid = 2 full rows. On lg this looks fine. On md (2-col), last row has 2 cards — OK. No issue here actually.

4. **STATUS COLORS UNIFORM:** All status badges (Live / Internal / In progress) use the same teal bg. "In progress" could use a different color (e.g., amber) to set expectations.

---

### S4 — HOW pvNXT WORKS

| Aspect | Finding |
|--------|---------|
| **Headline** | "Accurate solar design – without repeated site visits." — ✅ Strong value prop. |
| **Flow** | 4-step numbered process: Capture → Design → Propose → Install & Monitor. |
| **Image** | img-3d-photogrammetry.png (3168×1344, **1.1 MB**) with technical caption. |

#### 🔴 Critical Issues

1. **MISLEADING HEADLINE + FLOW:** The headline says "how pvNXT works" but the 4 steps only cover the **Design-to-Install pipeline**. There's no mention of Connect (consumer portal), SCADA (monitoring), or the ongoing O&M workflow. A visitor might think pvNXT is ONLY a design tool.  
   → **Fix:** Either expand to 6 steps covering the full suite, or reframe headline as "How pvNXT Studio works" and add a parallel flow for monitoring/O&M.

2. **IMAGE NOT COMPRESSED:** 1.1 MB for a photogrammetry diagram. Should be < 200 KB.  
   → **Action:** Compress, or replace with a cleaner code-generated diagram.

#### 🟡 Medium Issues

3. **NO VISUAL CONNECTOR BETWEEN STEPS:** 4 numbered circles floating in a grid with no arrows, lines, or flow indicators. A user scanning quickly might not realize these are sequential.  
   → **Suggestion:** Add connecting lines or arrows between steps (CSS or SVG).

4. **CAPTION IS TOO TECHNICAL:** "Acquire stereo satellite imagery → Import images → Align & orient → 3D view → Dense point cloud → Model & texture → Final 3D output" — this is photogrammetry jargon, not marketing copy. A CTO might care; an EPC business owner won't.  
   → **Fix:** Simplify to: "From satellite capture to accurate 3D site model — automated."

5. **NO CTA AFTER THIS SECTION:** User just learned the process but has no next action. Add a "See Studio in action →" link.

---

### S5 — ECOSYSTEM DIAGRAM

| Aspect | Finding |
|--------|---------|
| **Headline** | "One suite. Every role. Connected data." — ✅ |
| **Visual** | eco-diagram.png (2752×1536, **901 KB**) with PatternBg overlay. |
| **Caption** | "Project Data center – Studio · Connect · Go · Proposal · Field App · SCADA" |

#### 🟡 Medium Issues

1. **REPETITIVE MESSAGE:** This is the **third time** we're told "one suite, connected, every role":
   - S2: "One connected suite for solar operations"
   - S3: "6 products. One connected data layer"
   - S5: "One suite. Every role. Connected data"
   
   Three sections saying the same thing = wasted scroll depth.  
   → **Recommendation:** Merge S5 into S2 or S3. The ecosystem diagram could be the visual centerpiece of the "What is pvNXT" section instead of the 3 cards.

2. **IMAGE SIZE:** 901 KB — compress to < 150 KB.

3. **PASSIVE SECTION:** Just an image. No interactivity, no hover states, no click-to-explore. For a central concept ("connected ecosystem"), this should be more engaging — perhaps an interactive SVG where hovering each product node highlights it.

4. **DIAGRAM ACCESSIBILITY:** The image alt text is decent but a complex diagram should also have a text-based description or an accessible data table alternative.

---

### S6 — STAT BAND

| Aspect | Finding |
|--------|---------|
| **Component** | StatBand.tsx |
| **Content** | 5 text items in horizontal band. |

#### 🔴 Critical Issues

1. **NOT ACTUAL STATS:** The component is called "StatBand" but contains ZERO numbers/metrics. It's just text claims. A real stat band would have: "500+ sites designed" / "98% shadow accuracy" / "40% faster proposals" etc.  
   → **Fix:** Replace with real metrics from Terranxt, OR rename component and section to "Capabilities" or "Highlights".

2. **EXACT DUPLICATE OF HERO BULLETS:** First 3 items are word-for-word identical to the hero's 3 bullet points.  
   → **Fix:** Remove from hero OR from StatBand. Don't show the same content twice.

#### 🟡 Medium Issues

3. **VISUALLY WEAK:** Plain text items with no icons, no numbers, no visual weight. Easy to scroll past.  
   → **Suggestion:** If keeping, add icons or big numbers to make it scannable.

---

### S7 — ROLE-BASED ENTRY

| Aspect | Finding |
|--------|---------|
| **Headline** | "Find your workspace" — ✅ |
| **Content** | 4 pills: EPC → Studio, Homeowner → Connect, Installer → Go, O&M → SCADA. |

#### 🟡 Medium Issues

1. **REDUNDANT WITH S2:** Same role groupings as "What is pvNXT" cards. S2 has Design & Sell / Install & Track / Monitor & Maintain. S7 has EPC / Homeowner / Installer / O&M. Overlapping audience mapping.  
   → **Recommendation:** Merge into one strong section. Keep the clickable pills but add 1-line descriptions.

2. **MISSING ROLE — "Proposal Creator":** Someone who creates proposals isn't represented. The Proposal product is a standalone tool, not just for EPC.

3. **NO CONTEXT ON PILLS:** A first-time visitor sees "EPC | Homeowner | Installer | O&M" but doesn't know what happens after clicking. Add a 3-word hint: "EPC — Design & Sell" etc.

4. **UNBALANCED MAPPING:** Homeowner → Connect (consumer portal), but what about Homeowner → Proposal? A homeowner might want to see their proposal too.

---

### S8 — GLOSSARY

| Aspect | Finding |
|--------|---------|
| **Content** | 5 cards: EPC, Consumer, Installer, O&M, SCADA — with definitions. |
| **Layout** | 1/3/5 columns responsive grid. |

#### 🔴 Critical Issues

1. **WRONG PLACEMENT FOR HOMEPAGE:** A glossary on the main marketing homepage is unusual and wastes prime conversion real estate. This belongs in a Help/FAQ page, footer, or as a tooltip/hover interaction.  
   → **Recommendation:** Remove from homepage. Move to /about or a dedicated /glossary page, or integrate as hover tooltips in the Role-Based Entry section.

2. **AUDIENCE MISMATCH:** The target audience is EPC businesses, installers, and O&M owners — they already know what EPC, O&M, and SCADA mean. Defining these on the homepage insults their intelligence. If the audience includes homeowners, define only "EPC" and "SCADA" inline where they appear.

#### 🟡 Medium Issues

3. **5-COL ON lg IS CRAMPED:** On large screens, 5 narrow columns with paragraph text looks squeezed. Hard to read.

4. **THIRD REPETITION OF ROLES:** EPC / Consumer / Installer / O&M — same 4 roles appear in S2, S7, and now S8. That's 3 sections mapping the same audience.

---

### S9 — FINAL CTA

| Aspect | Finding |
|--------|---------|
| **Component** | CTASection.tsx |
| **Content** | "See pvNXT in action." + "Request a demo for your EPC team." |

#### 🟡 Medium Issues

1. **INCONSISTENT FONT:** CTASection uses `fontFamily: "Sora, Inter, sans-serif"` as inline style instead of the `font-sora` Tailwind class. Per project rules, must use `font-sora` class, never literal font names.  
   → **Fix:** Remove inline style, add `font-sora` class to the h2.

2. **INCONSISTENT WEIGHT:** Uses `font-[600]` instead of `font-semibold`. M3 was supposed to fix these globally.  
   → **Fix:** Change to `font-semibold`.

3. **NARROW CTA COPY:** "Request a demo for your EPC team" — excludes homeowners, installers, O&M. Should be broader: "Request a demo for your team" or "See pvNXT in action — book a demo."

4. **NO SECONDARY CTA:** Only one button ("Request a Demo"). Could add "Explore products" or "View pricing" (when ready).

---

## Global / Cross-Section Issues

### 🔴 Critical

| # | Issue | Impact |
|---|-------|--------|
| G1 | **hero-bg-aurora.webp DOES NOT EXIST** — 404 on every page load before PNG fallback | Performance + bad UX |
| G2 | **hero-bg-aurora.png = 4.6 MB** — above-the-fold image should be < 200 KB | Core Web Vitals fail |
| G3 | **StatBand has NO actual statistics** — just text claims, no numbers | No credibility signal |
| G4 | **3 sections repeat the same "one suite / connected / roles" message** (S2, S5, S7) | Wasted scroll, user tunes out |
| G5 | **ZERO social proof** — no testimonials, client logos, case study links, partner badges, "trusted by X" | No trust = no conversion |

### 🟡 Medium

| # | Issue | Impact |
|---|-------|--------|
| G6 | SVG icons are 142 KB each (should be < 5 KB) — likely embedded raster | Slow load |
| G7 | img-3d-photogrammetry.png = 1.1 MB, eco-diagram.png = 901 KB — need compression | Performance |
| G8 | ProductCard + CTASection still use `font-[600]` instead of `font-semibold` | Code consistency |
| G9 | CTASection uses inline `fontFamily` instead of `font-sora` class | Violates project rules |
| G10 | "How pvNXT Works" only covers design pipeline, not full suite | Misleading positioning |
| G11 | 6 Gemini images (6.8–11 MB each) + 2 MP4 videos sit in /public/assets but are NOT used on homepage | Repo bloat, not page performance issue |
| G12 | No video used on homepage despite having 2 MP4 assets | Missed engagement opportunity |
| G13 | Glossary section wastes homepage real estate | Conversion friction |
| G14 | Role mapping repeated 3 times (S2 cards, S7 pills, S8 glossary) with slight variations | Confusing, not reinforcing |

### 🟢 Minor / Nice-to-have

| # | Issue |
|---|-------|
| G15 | Hero mobile has no visual — just text |
| G16 | No "Back to top" or sticky CTA on long page |
| G17 | Product status badges all same color — could differentiate Live vs Internal vs In-progress |
| G18 | S4 steps have no connecting arrows/lines |
| G19 | No hover animation on ProductCards beyond border-color + translate |
| G20 | Skip-to-content link exists ✅ — good accessibility |

---

## Conversion Flow Analysis (Newbee User Simulator)

**User persona:** Solar EPC business owner, 45 yrs, non-technical, browsing on mobile during commute.

| Step | What they see | What they feel | Do they convert? |
|------|--------------|----------------|------------------|
| Hero | "Solar operations, connected." + CTAs | ✅ Clear value prop | Maybe — but no trust signal |
| S2 | "One connected suite" + 3 cards | "Ok but what does it mean for ME?" | Cards aren't clickable → dead end |
| S3 | 6 product cards | "Too many options, not sure which is mine" | Might click Studio if EPC |
| S4 | 4-step process | "This is about design... I need monitoring too" | Misled — partial picture |
| S5 | Ecosystem diagram | "Seen this already... scrolling" | Redundant, skipped |
| S6 | Text claims, no numbers | "Anyone can claim this" | No credibility |
| S7 | Role pills | "Which one am I? EPC... ok" | Clicks → lands on Studio page |
| S8 | Glossary | "I know what EPC means... why is this here?" | Skipped |
| S9 | CTA | "Maybe I'll request a demo... but who else uses this?" | Low confidence → likely bounce |

**Verdict:** A newbee EPC owner would understand WHAT pvNXT is but NOT trust it enough to convert. Missing: **social proof, real metrics, client logos, a clear "why us vs manual/spreadsheet" differentiator.**

---

## Recommended Section Flow (what it SHOULD be)

| # | Section | Purpose | Current? |
|---|---------|---------|----------|
| 1 | Hero — headline + CTA + dashboard preview | Hook + first action | ✅ Exists, needs fixes |
| 2 | Problem → Solution (1 short line: "Solar teams juggle spreadsheets, site visits, and disconnected tools. pvNXT replaces all of it.") | Create urgency | ❌ Missing |
| 3 | How it works — FULL 6-product flow (not just design) | Show breadth | ⚠️ Partial — only design |
| 4 | Product grid (6 cards) | Detail per product | ✅ Exists |
| 5 | Social proof — client logos / testimonials / metrics | Build trust | ❌ Missing |
| 6 | Ecosystem diagram (merged with role entry — clickable roles) | Visual + navigation | ⚠️ Split + redundant |
| 7 | Stat band with REAL numbers | Credibility | ⚠️ Exists but no numbers |
| 8 | Final CTA — broad, confident | Convert | ✅ Exists, needs copy fix |

**Remove from homepage:** Glossary (S8), redundant "What is pvNXT" cards (merge into ecosystem).  
**Add to homepage:** Problem statement, social proof, real metrics.

---

## Image / Asset Audit

| Asset | Size | Used? | Location | Verdict |
|-------|------|-------|----------|---------|
| hero-bg-aurora.png | 4.6 MB (2752×1536) | ✅ Hero bg | 🔴 COMPRESS — target < 200 KB WebP |
| hero-bg-aurora.webp | ❌ DOES NOT EXIST | Referenced in code | 🔴 BUG — remove .webp ref or create file |
| eco-diagram.png | 901 KB (2752×1536) | ✅ Ecosystem | 🟡 COMPRESS — target < 150 KB |
| img-3d-photogrammetry.png | 1.1 MB (3168×1344) | ✅ How it works | 🟡 COMPRESS — target < 200 KB |
| pat-pvnxt.png | 2.9 MB (1536×1024) | ✅ PatternBg | 🟡 COMPRESS — it's a repeating pattern! Should be tiny tile < 20 KB |
| ico-solar-panel.svg | 142 KB | ✅ S2 card | 🔴 REPLACE — SVG icon should be < 5 KB |
| ico-installer.svg | 142 KB | ✅ S2 card | 🔴 REPLACE — SVG icon should be < 5 KB |
| ico-monitoring.svg | 142 KB | ✅ S2 card | 🔴 REPLACE — SVG icon should be < 5 KB |
| ico-ecosystem.svg | 142 KB | ❌ Not on homepage | 🟡 Same issue |
| ico-proposal.svg | 142 KB | ❌ Not on homepage | 🟡 Same issue |
| ico-satellite-3d.svg | 142 KB | ❌ Not on homepage | 🟡 Same issue |
| Gemini_*.png (6 files) | 6.8–11 MB each | ❌ Not used | 🟡 Repo bloat — move to separate storage |
| *.mp4 (2 files) | 2.6–2.7 MB each | ❌ Not used | 🟡 Consider using hero video loop |

### Gemini Enhancement Opportunity

The following assets could be **regenerated via Gemini** for better quality + smaller size:

| Asset ID | Current | Recommendation | Gemini Prompt Needed? |
|----------|---------|----------------|----------------------|
| IMG-01 | hero-bg-aurora.png (4.6 MB, likely AI-gen) | Regenerate as optimized hero bg — teal aurora gradient, solar panel pattern, 1920×1080, WebP | ✅ Yes — after Rajat approval |
| IMG-02 | eco-diagram.png (901 KB) | Could be a **code-generated SVG diagram** instead of raster — cleaner, smaller, interactive | No — build as SVG |
| IMG-03 | img-3d-photogrammetry.png (1.1 MB) | Regenerate as cleaner process diagram — or build as code | ✅ Yes — if keeping raster |
| IMG-04 | pat-pvnxt.png (2.9 MB) | Should be a tiny SVG repeating pattern — 40×40px tile. Regenerate as code | No — build as CSS/SVG |

---

## Accessibility Quick Check (WCAG 2.2 AA)

| Check | Status |
|-------|--------|
| Skip-to-content link | ✅ Present |
| Color contrast (primary text on white) | ✅ ink #0f1720 on white = 15.8:1 |
| Color contrast (muted on white) | ⚠️ #5b6b73 on white = 5.2:1 — passes AA for normal text (4.5:1) but borderline |
| Color contrast (pvnxt-dark buttons on white) | ✅ #047a88 on white = 4.8:1 — passes AA |
| Alt text on images | ✅ Descriptive alt text present |
| Focus indicators | ✅ btn-primary has focus-visible ring |
| Reduced motion | ✅ SolarHeroCanvas respects prefers-reduced-motion |
| `lang="en"` on html | ✅ Present |
| ARIA labels | ✅ PatternBg and SolarHeroCanvas have aria-hidden |
| Keyboard navigation for Products dropdown | ⚠️ No keyboard support — dropdown opens on click only, no Escape to close |

---

## Priority Fix List (what to address first)

| Priority | Fix | Effort |
|----------|-----|--------|
| 🔴 P0 | Fix hero image ref: `.webp` → `.png` (or create .webp) | 1 line |
| 🔴 P0 | Compress hero-bg-aurora.png (4.6 MB → < 200 KB) | Asset work |
| 🔴 P1 | Add real metrics to StatBand or remove the duplicate hero bullets | Content + code |
| 🔴 P1 | Merge redundant sections (S2 + S5 + S7 → 1 strong section) | Restructure |
| 🔴 P1 | Add social proof section (even 2–3 logos) | Design + asset |
| 🟡 P2 | Compress pat-pvnxt.png (2.9 MB → CSS pattern or tiny SVG) | Asset work |
| 🟡 P2 | Replace 142 KB SVG icons with < 5 KB clean SVGs | Asset work |
| 🟡 P2 | Fix `font-[600]` → `font-semibold` in ProductCard + CTASection | Code |
| 🟡 P2 | Fix CTASection inline fontFamily → `font-sora` class | Code |
| 🟡 P2 | Expand "How it Works" to cover full suite, not just design | Content + code |
| 🟡 P3 | Remove Glossary from homepage, move elsewhere | Code |
| 🟡 P3 | Add connecting arrows/lines to 4-step flow | Code |
| 🟡 P3 | Differentiate status badge colors (Live/Internal/In progress) | Code |
| 🟢 P4 | Consider hero video loop using existing MP4 assets | Design + code |
| 🟢 P4 | Add mobile visual to hero | Design + code |
| 🟢 P4 | Keyboard nav for Products dropdown | Code |

---

## Summary

The homepage is **structurally complete** but **not conversion-optimized**. Key problems:

1. **Trust gap** — zero social proof, no real metrics, no client validation
2. **Redundancy** — same "connected suite / roles" message repeated 3×
3. **Performance** — 4.6 MB hero image, 142 KB "icons", broken .webp reference
4. **Incomplete story** — "How it Works" only shows design, not monitoring/O&M
5. **Code inconsistencies** — `font-[600]`, inline fontFamily, not following M3 fix

**If I were a lead, I would NOT convert on this page.** I'd understand the product but wouldn't trust it enough to share my email. Fix the trust gap + redundancy, and this becomes a strong B2B lead-gen page.

---

*End of Homepage Audit — awaiting Rajat's direction on which fixes to prioritize as micro-prompts.*
