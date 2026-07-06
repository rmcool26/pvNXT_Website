# pvNXT — Website Project Brief

**Prepared by:** _[Your name]_ · **For client:** Terranxt
**Product:** pvNXT (Solar Workflow Suite) · **Date:** 05 Jul 2026
**Status:** Ready for client sign-off

> **Ek line mein pvNXT kya hai:**
> pvNXT ek *connected solar workflow suite* hai (by **Terranxt**) jo solar EPC industry ke bikhre hue manual kaam — calls, WhatsApp, Excel, alag-alag tools aur baar-baar site visits — ko ek jude hue system mein badal deta hai, jahan **har role ka apna workspace** hota hai lekin **project data connected** rehta hai.

---

## 0. Website ka core mission (sabse important)

Website padhne ke baad user ko **3 cheezein** clearly samajh aani chahiye:

1. **pvNXT hai kya** — ek solar operations ko automate karne wala product ecosystem.
2. **Kaunse products hain** — 6 products, har ek ka apna dedicated page.
3. **Har product kaise helpful hai** — pehle kaunsa manual process tha, pvNXT ne use kaise automate/khatam kiya, aur usse kya faayda hua.

Har product page ka narrative same formula follow karega:
**Problem (manual mess) → Solution (pvNXT ne kya diya) → Impact (kya khatam / automate hua)**.

---

## 1. Client name / industry

| Field | Detail |
|---|---|
| **Brand / Company** | Terranxt |
| **Product being marketed** | pvNXT (solar workflow product suite) |
| **Industry** | Solar / CleanTech — EPC operations, consumer solar, O&M monitoring |
| **Backing / Credibility** | FITT · IIT Delhi incubated |
| **Nature of product** | B2B + B2B2C SaaS (web portals + mobile apps) |
| **Current traction** | Project tracking, Satellite-based 3D roof modeling • Shadow analysis – accurate site data • BOQ + proposal – auto-generated 10–15 min roof analysis |

---

## 2. Old website URL (if redesign)

- **Yeh redesign nahi, naya product marketing website hai** (fresh build).
- Reference / existing live product portals (marketing site inke andar deep-link karegi, replace nahi karegi):
  - EPC (Studio): `https://epc.pvnxt.com/`
  - Consumer (Connect): `https://consumer.pvnxt.com/`
  - Installer (Go): `https://installer.pvnxt.com/`
  - SCADA: `https://scada.pvnxt.com/`
- Case-study reference (source of truth for content): `https://rmcool26.netlify.app/case/terranxt`

> **Note:** Marketing website in live portals se alag hai. Website ka kaam hai *samjhaana + lead laana*; portals actual product hain jahan login karke kaam hota hai.

---

## 3. Goal

**Primary goal: Branding + Leads (dono).**

| Priority | Goal | On-page action |
|---|---|---|
| 1 | **Branding / product clarity** | Har product ko story ke saath samjhaana (problem → solution → impact) |
| 2 | **Lead generation** | Primary CTA: **"Request a Demo"** (EPC/business ke liye lead form) |
| 3 | Secondary | "Talk to us" / contact, aur live portals tak deep-link |

- **Primary CTA (poori site pe):** `Request a Demo`
- **Secondary CTAs:** `See how it works`, `Explore products`, `Contact us`
- **Lead form fields (suggested):** Name, Company/EPC name, Role (EPC / Installer / Homeowner / O&M), Email, Phone, Message.

---

## 4. Target audience / location

| Audience | Kaun | Kya dhundh rahe hain | Kaunsa product |
|---|---|---|---|
| **EPC teams / solar businesses** (primary) | Design, sales, project managers | Ek jagah pe layout→proposal→tracking | Studio, Proposal, SCADA |
| **Homeowners / consumers** | Ghar pe solar lagwane wale | Bina jargon ke cost, feasibility, tracking | Connect |
| **Installers / site teams** | On-ground crew | Site task, photo proof, progress update | Go, Field App |
| **O&M / plant owners** | Plant monitoring, alerts | Accountable alerts, work orders | SCADA |

- **Location:** Primary **India/UAE** (English simple). Solar EPC + urban/semi-urban homeowners.
- **Decision-maker for demo:** EPC business owners / managers — inhi ke liye CTA sabse strong hona chahiye.

---

## 5. Brand assets: logo, colors, fonts, photos

### Logo
- **Koi alag graphic logo nahi.** Logo hi text hai → **`pvNXT`** (wordmark).
- Style suggestion: `pv` normal weight, `NXT` bold/accent — accent color primary brand color mein.
- Parent brand naam **Terranxt** footer/about mein mention hoga ("pvNXT is a product by Terranxt").

### Colors
| Role | Color | Use |
|---|---|---|
| **Primary** | `#069fb1` (teal) | CTA, links, highlights, `NXT` accent, headings accent |
| Primary dark (suggested) | `#047a88` | hover states, gradients |
| Primary tint (suggested) | `#e6f7f9` | section backgrounds, cards |
| Ink / text (suggested) | `#0f1720` | body headings |
| Muted text (suggested) | `#5b6b73` | secondary text |
| Surface / white | `#ffffff` | cards, base |

> Sirf `#069fb1` confirmed hai; baaki shades suggestions hain — client approve kare toh use karein.

### Fonts (suggested — clean, modern, readable)
- **Headings:** Poppins / Sora / Space Grotesk (jo bhi approve ho).
- **Body:** Inter / Manrope.
- Tone: simple, clean, techy-but-friendly (jargon-free).

### Photos / Visuals
- **AI-generated images NAHI** use karni.
- Jahan product ke **portal / dashboard screenshots** chahiye, wahan **clear labelled placeholders** rakhne hain — client apne asli portal screens baad mein daal dega.
  - Placeholder pe likha ho: e.g. `[ pvNXT Studio — layout & BOQ screen | client screenshot yaha aayega | ratio 16:9 ]`.
- Non-portal visuals ke liye (hero, background, icons): clean **abstract SVG / vector illustrations, geometric shapes, line icons** — no AI photos.
- Real solar photos (rooftops/panels) chahiye ho toh client se ya licensed stock se — AI se nahi.

---

## 6. Must-have pages / sections

### Global (har page pe)
- **Header:** `pvNXT` wordmark + nav (Products dropdown, How it works, About/Terranxt, Contact) + `Request a Demo` button.
- **Footer:** short pvNXT + Terranxt line, product links, live portal links, contact, LinkedIn/email.

### 6.1 Home page (sections order)
1. **Hero** — one-liner: *"Solar operations, connected."* + sub-line (manual mess → one connected suite) + `Request a Demo` / `Explore products`.
2. **The mess before pvNXT** — 6 pain points (leads on calls, site details on WhatsApp, analysis in separate tools, manual proposals, phone-call progress updates, no single project view).
3. **The connected system** — ek diagram/visual: har role ka apna workspace, data connected.
4. **Products grid (6 cards)** — har card: naam + one-line + "Explore →" (dedicated page pe le jaaye).
5. **How it works** — 4 steps: Decode workflow → Structure system → Design product → Ship with team. (Ya user-journey: Lead → Analysis → Proposal → Install → Monitor.)
6. **Impact / proof** — stats: Project tracking, Satellite-based 3D roof modeling • Shadow analysis – accurate site data • BOQ + proposal – auto-generated 10–15 min roof analysis · IIT Delhi incubated.
7. **Glossary (Solar terms, plain English)** — EPC, Consumer, Installer, O&M, SCADA.
8. **Final CTA band** — "Messy solar workflows, made usable." + `Request a Demo`.

### 6.2 Product pages (6 dedicated pages) — **ye main focus hai**
Har page **same template**, alag content:
- Hero: product naam + one-line + status badge (Live / In progress / Internal).
- **Problem** (jo manual mess tha).
- **Solution / What it does** (pvNXT ne kya diya).
- **Impact** (kya khatam / automate hua).
- **Key features** (bullet list).
- **Who it's for** (users).
- **Screenshot placeholder(s)** (client ke asli portal screens ke liye).
- CTA: `Request a Demo` + (agar live ho) `Visit live portal`.

Product page list:
1. `/products/studio` — **pvNXT Studio**
2. `/products/connect` — **pvNXT Connect**
3. `/products/go` — **pvNXT Go**
4. `/products/proposal` — **Proposal System**
5. `/products/field-app` — **Field App**
6. `/products/scada` — **SCADA Monitoring**

### 6.3 Supporting pages
- **About / Terranxt** — brand story, IIT Delhi FITT incubation, mission (manual ko automate karna).
- **Contact / Request a Demo** — form + email + LinkedIn.

---

## 7. Product content (ready-to-use copy for each dedicated page)

> Tone: simple English, no heavy jargon. Formula: **Problem → Solution → Impact → Features → Users**.

### 7.1 pvNXT Studio — *"From rooftop to proposal, in one workspace."*
- **For:** EPC designers, sales teams, solar businesses · **Status:** Live (used by 4+ EPCs)
- **Problem:** EPC teams layouts, shadow checks, proposals, reports aur BOQ ke liye alag-alag tools mein jump kar rahe the — project flow slow aur bikhra hua.
- **Solution:** Ek EPC workspace jahan se design, analysis, estimate aur project outputs (layout, BOQ, report, proposal-ready design) sab ek jagah bante hain.
- **Impact:** Team ab site data se seedha proposal tak ek hi workflow mein pahunch jaati hai. Manual tool-switching khatam.
- **Key features:** Solar layout creation · Shadow/roof analysis · BOQ · Reports · Proposal-ready output · Project tracking.
- **Placeholder:** `[ Studio — layout + BOQ dashboard | client screenshot | 16:9 ]`

### 7.2 pvNXT Connect — *"Solar, minus the jargon."*
- **For:** Homeowners, solar customers · **Status:** Live
- **Problem:** Homeowners ko cost, feasibility aur order progress samajhne ke liye calls, PDF quotes aur baar-baar follow-ups pe depend karna padta tha.
- **Solution:** Ek simple consumer portal — feasibility, ROI estimate, quote, installation tracking aur plant monitoring, bina EPC-heavy jargon ke.
- **Impact:** Consumer poore solar journey ko khud track kar sakta hai — calls pe update chase karna khatam.
- **Key features:** Feasibility check · Cost & ROI estimate · Quote compare · Order/installation tracking · Plant monitoring.
- **Placeholder:** `[ Connect — homeowner journey screen | client screenshot | 16:9 ]`

### 7.3 pvNXT Go — *"Built for rooftops, not desks."*
- **For:** Installers, site teams, EPC managers · **Status:** Live
- **Problem:** Installers paper checklists, WhatsApp photos aur bikhre updates se kaam kar rahe the; delay ka reason clear nahi tha; EPC ko har site chase karni padti thi.
- **Solution:** Field-first installer portal — site assignment, rooftop analysis, work status, photo-proof upload, verification aur reason-based delay updates.
- **Impact:** EPC ko real-time site progress dikhta hai; installer turant bata deta hai aaj kya hua aur delay kyun hua. WhatsApp follow-ups khatam.
- **Key features:** Site task assignment · Daily photo proof · Status updates · Delay-reason (weather/human/site) · Verification.
- **Placeholder:** `[ Go — installer daily update screen | client screenshot | 16:9 or 9:16 mobile ]`

### 7.4 Proposal System — *"A proposal customers actually understand."*
- **For:** EPC → customer · **Status:** Live (generated from Studio)
- **Problem:** Customers ko rough manual cost-sheet milti thi jo samajhna mushkil tha aur trust nahi banata tha.
- **Solution:** Studio ke real project data se generate hone wala clean proposal — system details, cost, subsidy, savings aur solar impact ke saath.
- **Impact:** Rough manual proposals ki jagah ek clear, trustworthy document jo customer samajh sake. Manual proposal-making khatam.
- **Key features:** Auto-generated from project data · System summary · Cost + subsidy + savings tables · Solar impact · Customer-friendly layout.
- **Placeholder:** `[ Proposal — sample proposal document | client screenshot | A4/portrait ]`

### 7.5 Field App — *"One visit, complete site capture."*
- **For:** Field survey teams · **Status:** Internal (in use)
- **Problem:** Site visits se adhoore handoff milte the — design team ko baad mein missing details maangni padti thi.
- **Solution:** Field capture app — site data, roof details, keepouts, measurements, photos aur handoff notes ek hi visit mein capture.
- **Impact:** Ek site visit se cleaner handoff banta hai, missing details kam hoti hain, proposals fast move karte hain.
- **Key features:** Site data capture · Roof details & keepouts · Measurements · Photos · Structured handoff notes.
- **Placeholder:** `[ Field App — site survey capture | client screenshot | 9:16 mobile ]`

### 7.6 SCADA Monitoring — *"Every alert, accountable."*
- **For:** EPC managers, plant owners, field techs, O&M owners · **Status:** In progress (used for audits + by Aston Greens EPC)
- **Problem:** O&M teams manual checks, scattered screenshots, delayed alerts aur unclear issue ownership se jujh rahi thi.
- **Solution:** Role-based monitoring dashboard — plant visibility, alerts, inverter/string issues, work orders, assignments aur activity logs ek flow mein.
- **Impact:** Team reactive checking se hatke ek visible, accountable operations flow pe aa gayi — har alert ka owner clear.
- **Key features:** Role-based views (Manager/Owner/Tech/O&M) · Live alerts · Work orders & assignment · Activity history · Plant-level monitoring.
- **Placeholder:** `[ SCADA — monitoring dashboard | client screenshot | 16:9 ]`

---

## 8. Competitors / inspiration links

- **Content source of truth:** `https://rmcool26.netlify.app/case/terranxt` (case study) + product pages under `/work/...`.
- **Live product portals (deep-link + screenshot reference):** epc / consumer / installer / scada `.pvnxt.com`.
- **Inspiration (structure/tone — please confirm/replace):** modern SaaS product sites jaise Linear, Notion, Zoho-suite style product-grid layouts. _(Client: agar koi specific reference site pasand hai toh bata dein.)_
- **Direct solar competitors:** _[client se confirm — e.g. Aurora Solar, OpenSolar — abhi TBD]_

---

## 9. Tone preference

- **English simple** — jargon-free, plain, confident.
- Har product ka narrative: pehle "yeh problem thi", phir "pvNXT ne yeh diya", phir "yeh automate/khatam hua".
- Consumer-facing text (Connect) extra friendly; EPC/O&M text (Studio/SCADA) thoda professional but still simple.
- Short sentences, scannable bullets, no fluff.

---

## 10. Tech constraint / stack for THIS project

- **Frontend framework:** **React** (component-based). _[Note: aapne "Gemma stack" likha tha — confirm karein: Gemma = kaunsa exact stack/tooling? Abhi React assume kiya hai. Recommended: **Next.js + React** for routing + SEO of product pages.]_
- **Styling:** Tailwind CSS (fast, consistent with brand tokens) ya CSS Modules — client preference.
- **Design tokens:** primary `#069fb1` + suggested shades (section 5) ko CSS variables/theme mein rakhein.
- **Structure:** Reusable components — `ProductCard`, `ProductPageTemplate`, `StatBand`, `CTASection`, `Header`, `Footer` (kyunki 6 product pages same template use karenge).
- **Routing:** `/`, `/products/:slug` (6), `/about`, `/contact`.
- **SEO:** har product page ka apna title/meta (products discoverable ho).
- **Hosting:** Netlify (existing portfolio Netlify pe hai) — deploy easy.
- **Images:** static assets folder; portal images ki jagah labelled placeholder components (client baad mein replace kare).
- **Forms:** demo/contact form — simple submit (Netlify Forms / Formspree / email) — client se endpoint confirm.

---

## 11. Image / Video preference

- **AI images: NAHI.**
- **Portal/dashboard visuals:** har jagah **clear, labelled placeholder** (aspect ratio + kya screen aayega, likha hua) — **client asli screenshot banakar dega**.
- **Non-portal visuals:** clean vector/SVG illustrations, geometric shapes, line icons — subtle, brand-color accented.
- **Real solar photos** (agar chahiye): client-provided ya licensed stock — AI se nahi.
- **Video:** phase 1 mein optional; agar client short product walkthrough de toh product pages pe embed kar sakte hain.

---

## 12. Other info / Add-ons (mere suggestions)

1. **Reusable product-page template** — 6 pages ek hi component se; naye product add karna aasaan.
2. **"Before vs After" comparison** — har product page pe chhota block: *Pehle (manual)* vs *Ab (pvNXT)* — impact turant dikhta hai. (Ye tumhare "har manual process ko automate kiya" wale focus ko strongly serve karega.)
3. **Ecosystem diagram** on home + about — dikhaye kaise 6 products ek connected suite hain (data connected, roles alag).
4. **Glossary component** (EPC, Consumer, Installer, O&M, SCADA) — non-expert visitors ke liye.
5. **Sticky "Request a Demo"** button (mobile pe bottom bar) — leads ke liye.
6. **Role-based entry on home** — "I am an EPC / Homeowner / Installer / O&M" → relevant product pe le jaaye.
7. **SEO + Open Graph** — har product ka apna preview card jab share ho.
8. **Accessibility** — `#069fb1` pe white text contrast theek karein (buttons pe check kar liya jaye), alt text placeholders pe bhi.
9. **Trust strip** — "Incubated at IIT Delhi (FITT)" + stats, hero ke neeche.
10. **Analytics** — demo-form conversions track karne ke liye (GA / Plausible) — leads goal measure ho.

---

## 13. Open questions (client / tumse confirm chahiye)

1. **"Gemma stack" se exact matlab kya hai?** (React confirm hai, but Gemma = specific tooling/boilerplate?)
2. Fonts final — Poppins/Inter chalega ya brand ke apne fonts hain?
3. Demo form ka submission kaha jaana chahiye (email / CRM / Formspree)?
4. Koi specific competitor/inspiration site jo client ko pasand ho?
5. Terranxt ka koi tagline / about paragraph client dega ya main draft karun?
6. Live portals ko "Login" ke roop me header me dikhana hai ya sirf product pages se link?

---

*Next step: is brief pe sign-off milte hi, React (Next.js suggested) me home + 6 product pages ka structure + reusable components ban jayenge, primary color `#069fb1` aur `pvNXT` wordmark ke saath. Portal images ki jagah clear placeholders rahenge.*
