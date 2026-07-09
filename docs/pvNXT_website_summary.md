# pvNXT Website — Complete Project Summary

> **Purpose:** Give this file to any AI agent in a new chat. It will understand exactly what we're building, what's done, and what remains.
> **Git:** https://github.com/rmcool26/pvNXT_Website.git
> **Active Branch:** `v3-main`
> **Base:** terranxt-website HTML (premium static HTML/CSS/JS, no Next.js)

---

## 0. WHAT IS pvNXT?

pvNXT is a **connected solar workflow suite** by **Terranxt** (IIT Delhi-FITT incubated). It replaces manual solar operations with **6 connected portals on one shared data layer** — from satellite-based 3D design to plant monitoring.

**Key products:** Atlas (satellite→3D), Field App, Connect (consumer), Studio (EPC), Proposal System, Go (installer), SCADA (monitoring).

**Flow:** ATLAS → FIELD APP → CONNECT → STUDIO → PROPOSAL → GO → SCADA

**Tagline:** "Solar operations, connected."
**Brand Color:** #069fb1 (teal)
**Font:** Inter (body), 800 weight headings

Full details in `/home/user/pvNXT_overview.md`

---

## 1. PROJECT STATE

We are building the **pvNXT marketing website** as a premium static HTML/CSS/JS site. The base was copied from `terranxt-website` (stage branch) — a polished, agency-level design with Lenis smooth scroll, GSAP animations, page loader, glow effects, and a clean corporate aesthetic.

**Current branch:** `v3-main`
**Live preview:** `index.html` (homepage)
**Key files:**

| File | Purpose | State |
|------|---------|-------|
| `index.html` | Homepage (main page) | 🔧 Being revamped |
| `home.html` | Same as index (symlink/copy) | Same |
| `assets/css/style.css` | Global styles + design system | ✅ Complete |
| `assets/css/pages/home.css` | Homepage-specific CSS | 🔧 Adding new section styles |
| `assets/css/pages/about.css` | About page CSS | ✅ Exists |
| `assets/css/pages/contact.css` | Contact page CSS | ✅ Exists |
| `assets/css/pages/services.css` | Services/platform page CSS | ✅ Exists |
| `components/header.html` | Global header (JS-loaded) | 🔧 Needs pvNXT nav update |
| `components/footer.html` | Global footer (JS-loaded) | 🔧 Needs pvNXT links update |
| `about.html` | About page | ⏳ Not yet revamped |
| `contact.html` | Contact page | ⏳ Not yet revamped |
| `services.html` | Old platform page | ⏳ Will be replaced by product pages |
| `assets/js/main.js` | Global JavaScript | ✅ Complete |
| `assets/images/` | Visual assets | ✅ Has GIFs, SVGs, videos |

---

## 2. DESIGN SYSTEM (CRITICAL — Never Change)

### CSS Variables (from style.css):
```
--brand: #069fb1
--brand-dark: #047f8e
--ink: #091d2c
--muted: #5d6f7e
--paper: #ffffff
--mist: #f6fafb
--line: #dce9ed
--night: #071824
--radius-xl: 34px
--radius-lg: 24px
--radius-md: 16px
```

### Key Classes:
`.overline` — small uppercase label with teal left bar
`.section` — standard section padding (118px)
`.container` — max-width container
`h1, h2, h3` — bold 800 weight, tight line-height
`.lead`, `.hero-lead` — muted subtext
`.btn-primary` — teal pill button
`.btn-secondary` — white pill with teal border
`.text-link` — inline link with animated arrow
`.section-soft` — gradient bg section
`.proof-section` — authority section with radial gradient

### Key Features (NEVER remove):
- Lenis smooth scroll
- Page loader (animated orbit)
- GSAP ScrollTrigger animations
- Header with scroll detection + progress bar
- Mobile hamburger menu
- Skip-link accessibility
- prefers-reduced-motion support
- WhatsApp floating button
- Portal login dropdown in header

---

## 3. HOMEPAGE PLAN — 7 Sections

**Narrative Arc:** HERO → STORY → MAGIC → PRODUCTS → WHO → PROOF → CTA

```
Visitor journey: "What is this?" → "Why care?" → "How does it work?" → "What's inside?" → "Is it for me?" → "Can I trust this?" → "Let's talk."
```

### S1: HERO + TRUST STRIP ✅ DONE
- Hero: Orbital rings, 3D Analysis GIF, floating signal badges
- H1: "Solar operations, connected."
- CTAs: "Request a Demo" + "How it works"
- Trust strip: 4 indicators (IIT Delhi, AI Design, Zero Site Visit, BOQ)

### S2: THE STORY ⏳ PROMPT SENT TO GEMMA (Awaiting Result)
- Replaces old "Workflow" section
- "Solar shouldn't be this hard." — editorial narrative
- Left: punchy paragraphs about the manual chaos problem
- Right: illustration placeholder (chaos icons → organized hub)
- Design: editorial spread feel, NOT comparison cards

### S3: THE MAGIC — "From satellite to solar." ⏳ NEXT
- PART A: Atlas pipeline illustration (satellite → 3D model, 3 stages)
- PART B: Hub-and-spoke ecosystem diagram (7 products around Project Data)
- This is the WOW section — immersive, illustration-led
- Two custom illustrations needed (placeholder specs in plan)

### S4: PRODUCTS — "6 products. One data layer." ⏳
- 6 cards in 3x2 grid with lucide icons
- Status badges (Live/Internal/In progress)
- "ONE DATA LAYER" banner below grid

### S5: WHO IT'S FOR ⏳
- NOT cards. Role selector lanes.
- 4 horizontal rows: EPC | Installer | Homeowner | O&M
- Each: icon + role name + subtitle + "Explore →" link

### S6: REAL RESULTS ⏳
- 4 big floating numbers (90%, 0, 3x, 40%)
- Pure typography, no cards
- 3 supporting points

### S7: CTA ⏳
- Keep existing terranxt CTA section
- Update text: "See pvNXT in action."

---

## 4. SECTION STATUS TRACKER

| Section | File | Status |
|---------|------|--------|
| S1 Hero | index.html | ✅ COMPLETE (verified) |
| S2 Story | index.html, home.css | ⏳ Prompt sent, awaiting Gemma |
| S3 Magic | index.html, home.css | 🔜 Next |
| S4 Products | index.html, home.css | 🔜 |
| S5 Who | index.html, home.css | 🔜 |
| S6 Results | index.html, home.css | 🔜 |
| S7 CTA | index.html | 🔜 |
| Header | components/header.html | 🔜 |
| Footer | components/footer.html | 🔜 |

---

## 5. WORKING METHOD

For each section:
1. I give a detailed Gemma prompt with exact HTML + CSS to add
2. Rajat copy-pastes to Gemma
3. Gemma edits the files and pushes to v3-main
4. Rajat replies "TASK FINISHED SUCCESSFULLY"
5. I verify the changes on GitHub raw URL
6. We move to the next section

---

## 6. CRITICAL RULES (Never Violate)

1. **Do NOT change existing CSS** — only ADD new styles to the appropriate CSS file
2. **Do NOT change header, footer, or JS** — unless explicitly told
3. **Use existing CSS classes** where possible (`.section`, `.container`, `.overline`, `.lead`, `.text-link`, `.btn-primary`, etc.)
4. **Use CSS variables** (var(--brand), var(--ink), var(--muted), var(--line), etc.) — never hardcode colors
5. **New sections go between existing sections** — maintain page flow
6. **DO NOT touch** the hero section, trust strip, page loader, or Lenis scroll
7. **Mobile responsive** — test `@media (max-width: 860px)` breakpoints
8. **Match the existing design language** — bold 800 weight headings, tight letter-spacing, generous whitespace
9. **No dark/light split screen** — it looked bad, rejected
10. **Headlines max 4-5 words**, short paragraphs (2-4 lines)
11. **Every section is visually distinct** — no card-card-box-box repetition

---

## 7. REMAINING PAGES (After Homepage)

| Page | File | Content |
|------|------|---------|
| Studio | `products/studio.html` | Dedicated product page |
| Connect | `products/connect.html` | Dedicated product page |
| Go | `products/go.html` | Dedicated product page |
| Proposal | `products/proposal.html` | Dedicated product page |
| Field App | `products/field-app.html` | Dedicated product page |
| SCADA | `products/scada.html` | Dedicated product page |
| About | `about.html` | Revamp for pvNXT |
| Contact | `contact.html` | Minor updates |

Each product page: What it is, Who it's for, Features (brief list), Before vs After, Outcome, Live portal link, Demo CTA.

---

## 8. HOW TO CONTINUE (For New AI Chat)

1. Read this entire file
2. Go to https://github.com/rmcool26/pvNXT_Website/tree/v3-main
3. Read the current `index.html` to understand the latest state
4. Read `pvNXT_overview.md` for full product context
5. Read `pvNXT_homepage_plan_v2.md` for the detailed homepage plan
6. Identify which section is next (check Section Status Tracker above)
7. Ask Rajat: "The last completed section was ___. Should I continue with ___?"
8. Provide ONE Gemma prompt per section. Do NOT batch multiple sections.
9. Verify each section via GitHub raw URL after Gemma reports completion.
10. Proceed section by section.

---

**Last Updated:** 9 July 2026
**Last Completed:** S1 (Hero + Trust Strip)
**Next:** Verify S2 (The Story) — then proceed to S3 (The Magic)
