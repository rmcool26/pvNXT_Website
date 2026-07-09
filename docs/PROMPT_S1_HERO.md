# S1 PROMPT — Hero + Trust Strip Content Update

> File to edit: `index.html` (v3-main branch)
> Changes: TEXT ONLY. No CSS, no HTML structure changes, no design changes.
> The existing design is perfect — just update the words to be pvNXT-focused.

---

## PROMPT (Copy-paste to Gemma):

```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT (a connected solar workflow suite by Terranxt, IIT Delhi-FITT incubated). The current page was originally built for Terranxt and needs content updated to focus on pvNXT. The existing CSS, animations, fonts, and design system are PERFECT and must NOT be changed. Only change TEXT content in the HTML.

The design system uses these key classes:
- .overline — small uppercase label with teal left bar
- .hero-home — hero section with radial gradient + grid overlay
- .hero-lead — subtext paragraph
- .hero-proof-row — 3 bullet points below subtext
- .smart-cta — CTA buttons container
- .trust-strip — 4-column grid below hero with border separators
- .btn-primary — teal pill button
- .btn-secondary — white pill button with border
- .floating-signal — floating badges on right side of hero

DO NOT change any CSS. DO NOT change HTML structure. ONLY change text content between tags.

---

## TASK 1: Update Hero Section Content

Find the hero section (section with class "hero-home"). Inside it, make these EXACT text replacements:

OLD OVERLINE TEXT: "IIT Delhi-incubated solar intelligence platform"
NEW OVERLINE TEXT: "IIT Delhi-incubated solar workflow suite"

OLD H1 TEXT: "Elevating Solar with AI & Geo-Spatial Tech"
NEW H1 TEXT: "Solar operations, connected."

OLD HERO-LEAD TEXT: "Terranxt acts as the digital backbone of the solar industry. Our flagship B2B2C SaaS platform, pvNXT, uses AI and satellite intelligence to eliminate soft costs and manual site visits."
NEW HERO-LEAD TEXT: "pvNXT replaces manual solar workflows with 6 connected portals on one shared data layer — from satellite-based 3D design to plant monitoring."

OLD HERO-PROOF-ROW (keep all 3 items, only update text slightly):
- "Remote property scan" → KEEP AS-IS
- "3D Shadow analysis" → KEEP AS-IS  
- "Auto BOQ in 15-20 minutes" → KEEP AS-IS

OLD CTA PRIMARY TEXT: "Get a free solar estimate"
NEW CTA PRIMARY TEXT: "Request a Demo"

OLD CTA PRIMARY HREF: "contact.html?role=consumer#contact-form"
NEW CTA PRIMARY HREF: "contact.html#contact-form"

OLD CTA SECONDARY TEXT: "Book EPC demo"
NEW CTA SECONDARY TEXT: "How it works"

OLD CTA SECONDARY HREF: "contact.html?role=epc#contact-form"  
NEW CTA SECONDARY HREF: "#how-it-works"

OLD FLOATING SIGNALS (keep as-is, they are perfect):
- "Geo-spatial scan → Active" — DO NOT CHANGE
- "Yield model → 15-20 min" — DO NOT CHANGE
- "Manual visit → Reduced" — DO NOT CHANGE

---

## TASK 2: Update Trust Strip Content

Find the trust-strip section (div with class "trust-strip-section"). Inside, make these EXACT text replacements:

ITEM 1: 
- mini-kicker: "Incubation" → KEEP AS-IS
- strong: "IIT Delhi Incubated" → KEEP AS-IS

ITEM 2:
- mini-kicker: "Core engine" → KEEP AS-IS
- strong: "AI + geo-spatial design" → KEEP AS-IS

ITEM 3:
- mini-kicker: "Workflow" → KEEP AS-IS
- OLD strong: "Zero-site-visit qualification"
- NEW strong: "Zero Site Visit"

ITEM 4:
- mini-kicker: "Output" → KEEP AS-IS
- strong: "Layouts, yields and BOQs" → KEEP AS-IS

---

## TASK 3: Update Page Title and Meta

OLD TITLE: "Terranxt | AI Solar Design & Zero Site Visit Solar Platform"
NEW TITLE: "pvNXT | Solar operations, connected."

OLD META DESCRIPTION: "Terranxt is an IIT Delhi-incubated deep-tech startup building the digital backbone of solar with AI, geo-spatial design, automated BOQs and role-specific workflows."
NEW META DESCRIPTION: "pvNXT is a connected solar workflow suite by Terranxt — IIT Delhi incubated. Satellite-based 3D design, auto BOQ, proposal automation, installer tracking and SCADA monitoring on one data layer."

---

CRITICAL RULES:
- DO NOT change any CSS files
- DO NOT change any class names, IDs, or HTML attributes
- DO NOT change the structure of any element
- DO NOT change any image src, alt text, or video elements
- DO NOT change any JavaScript
- DO NOT touch the header, footer, or any section below the trust strip
- ONLY change the TEXT CONTENT as specified above
- After making changes, verify that all existing CSS classes remain intact
- Keep the 3D Analysis GIF, orbital rings, floating signals, and all animations exactly as they are

When done, reply "TASK FINISHED SUCCESSFULLY" and list the 5 text items that were changed.
```
