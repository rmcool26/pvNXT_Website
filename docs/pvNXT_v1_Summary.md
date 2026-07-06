# pvNXT Website — Full Chat Summary & v1 Continuation Guide

> Purpose: Continue in a NEW chat. This summary captures the project, what was broken, the working method (micro-prompts + `docs/agent.md`), exact status of every step, locked decisions, and what testing-based fixes to drive on your end for v1.

---

## 1. Project Identity
- **What:** pvNXT marketing website — a connected solar workflow suite by **Terranxt** (IIT Delhi FITT incubated). B2B + B2B2C SaaS for solar EPC / installers / homeowners / O&M.
- **Repo:** `github.com/rmcool26/pvNXT_Website`
- **Stack:** Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS 3. Hosting: **Netlify**.
- **Structure:** `app/` routes — `/`, `/about`, `/contact`, `/products/{studio,connect,go,proposal,field-app,scada}`; `components/`; `lib/`; `public/assets/` (static images/icons served at `/assets/...`).
- **Brand tokens (Tailwind):** `pvnxt` #069fb1, `pvnxt-dark` #047a88, `pvnxt-tint` #e6f7f9, `ink` #0f1720, `muted` #5b6b73, `line` #dbe8ea.
- **Fonts:** Sora (headings) + Inter (body) via `next/font` as CSS vars `--font-sora` / `--font-inter`; use classes `font-sora` / `font-inter` (NEVER literal "Sora"/"Inter").
- **6 products:** Studio, Connect, Go, Proposal, Field App, SCADA. Data in `lib/products.ts`.
- **Rules from brief:** Product "screenshot" areas use labelled `<PlaceholderBox>` for the client's REAL portal screens — do NOT fill with AI/decorative images. Decorative AI images (Gemini_*.png, videos) may be used only for hero/background and must be compressed.

---

## 2. Original Broken State (what was wrong)
| # | Issue | Fix route |
|---|-------|-----------|
| B1 | No `public/` → all `/assets/...` images 404 (site looked broken) | User manually moved `assets/` → `public/assets/` on their PC |
| B2 | Fonts (Sora/Inter) not applied | M1 (tailwind) + M2 (home h1) |
| B3 | Invalid `font-600` / `font-500` Tailwind classes | M3 |
| B4 | 6 pages were "Coming in Phase 4" placeholders (about, contact, go, proposal, field-app, scada) | M5–M9 |
| B5 | `lib/products.ts` had only 4/6 products | M4 |

`npm run build` always compiled fine — the problems were 100% runtime/visual.

---

## 3. What Worked (the method)
- **Big prompts (PROMPT 0–4) FAILED** — Gemma halted on large agentic prompts that included shell commands (`mkdir`, `mv`) which don't work cleanly on the user's Windows PC; Gemma also just output a "plan" and stopped.
- **Switched to MICRO-PROMPTS** — one tiny task per prompt, NO shell commands, scoped to a single file/change.
- **Created `docs/agent.md`** — the agent behavior manual with: (1) **scope lock** ("do ONLY what I ask; do not change anything not explicitly asked"), (2) **"TASK FINISHED SUCCESSFULLY" + summary** required after every task, (3) corporate/non-AI tone rule, (4) no terminal commands unless asked, (5) smallest safe change.
- **Every micro-prompt starts with:** *"Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task."*

---

## 4. Micro-Prompt Status (M1–M10)
| Step | Task | Status |
|------|------|--------|
| M1 | Fonts in `tailwind.config.ts` → CSS vars | ✅ done |
| M2 | Home `<h1>` → `font-sora` class | ✅ done |
| M3 | `font-600`→`font-semibold`, `font-500`→`font-medium` (global) | ✅ done |
| M4 | `lib/products.ts`: add `before?`/`after?` + `field-app` + `scada` (6 total) | ✅ done |
| M5 | Create `components/ProductPageTemplate.tsx` (reusable, Server Component) | ✅ done |
| M6 | Refactor `studio` + `connect` pages to use template (keep metadata) | ✅ done |
| M7 | Replace `go`/`proposal`/`field-app`/`scada` placeholders with template | ✅ done |
| M8 | Build `about` page (approved corporate copy, verbatim) | ✅ done |
| M9 | Build `contact` page (dummy form + thank-you, no backend) | ✅ done |
| M10 | Home polish: add Role-based entry + Glossary; verify links | ⏳ JUST ISSUED — awaiting `TASK FINISHED SUCCESSFULLY` |

**Phase 1 = M1–M10 — COMPLETE.** ✅ All 6 product pages + About + Contact + Home built/fixed. Next steps: run `npm run build` (fix any errors), then deploy to Netlify. After deploy, run the v1 testing pass (§7) and drive any fixes as micro-prompts.

---

## 5. Locked Decisions
- **Q1 Form:** DUMMY for now (UI + thank-you, no backend; `// TODO: connect form endpoint` left).
- **Q2 Fonts:** Keep Sora+Inter; wiring fixed (M1/M2).
- **Q3 About copy:** Drafted by assistant, approved by user, implemented verbatim in M8.
- **Q4 Header portals:** Linked only from product pages (no header "Login" links).

---

## 6. Asset Notes
- User manually created `public/` and moved `assets/` → `public/assets/` on their Windows PC (assets include the original files PLUS 6 `Gemini_*.png` AI images + 2 `.mp4` videos).
- **Verify structure:** files must be at `public/assets/eco-diagram.png` etc. If they ended up at `public/eco-diagram.png` (root), the move was wrong and images still 404.
- Gemini images = decorative/hero only; compress before use; do NOT replace product screenshot placeholders.
- **6 Gemini image content mapping is NOT done yet** (user never described what each shows) — needed for Phase 2.

---

## 7. ⚠️ v1 TESTING — fixes to drive from your end
Once M10 is done, run `npm run build` then `npm run dev` (or deploy to Netlify) and TEST. For every issue you find, give Gemma a NEW micro-prompt (same format: `docs/agent.md` header + exact task + "TASK FINISHED SUCCESSFULLY" reply). Likely test areas + example prompts:

**A. Build / deploy**
- Run `npm run build`. If it fails, paste the error to Gemma as a micro-prompt: *"Read docs/agent.md. Build failed with: <error>. Fix ONLY the reported error in the named file. TASK FINISHED SUCCESSFULLY + summary."*

**B. Visual / asset check**
- Open the site; confirm hero bg, ecosystem diagram, photogrammetry image, pattern bg, and all icons actually LOAD (not 404). If blank → `public/assets/` structure is wrong (see §6). Micro-prompt to Gemma won't fix a wrong folder move — you fix the folder; Gemma only edits code.

**C. Fonts & weights**
- Confirm headings render in Sora and `font-semibold`/`font-medium` text is actually bold. If not, re-run M1/M2/M3 micro-prompts.

**D. Product pages (6)**
- Click each: Studio, Connect, Go, Proposal, Field App, SCADA. Check: hero, "What is / does", **Before vs After** block, Key features grid, Who-it-for chips, suite nav, final CTA.
- Verify **status badges**: Studio/Connect/Go/Proposal = Live, Field App = Internal, SCADA = In progress.
- Note any layout bug → micro-prompt describing the exact file + section.

**E. About & Contact**
- About: copy correct, trust strip, CTA works.
- Contact: form validation works, submit shows "Thanks — we'll be in touch.", contact details correct (support@terranxt.com, +91-8447444157, Gurugram address).

**F. Links & 404s**
- Click every internal link (header, footer, product grid, suite nav, role-based entry, CTA). No link should hit a missing page.

**G. Responsive**
- Test mobile / tablet / desktop widths. Report any broken layout as a micro-prompt with the specific page + breakpoint.

**Rule for all fixes:** one issue = one tiny scoped prompt. Never a big rewrite. Always start with the `docs/agent.md` line.

---

## 8. Phase 2 (Revamp) — after v1 is live
- New design direction, content rephrase, and **visual-generation prompts + ideas** (what to show on hero/product/about).
- Requires: user describes what each of the 6 Gemini images depicts (mapping), then those are placed in correct slots.
- Starts ONLY after v1 is deployed/live.

---

## 9. Key Files (in workspace)
- `docs/agent.md` — agent behavior rules (reference in EVERY prompt).
- `pvNXT-website-brief.md` — original brief (source of truth for copy/design).
- `pvNXT_Gemma_Prompts.md` — earlier big prompts (context; superseded by micro method).
- `pvNXT_v1_Summary.md` — this file.

## 10. How to continue in a new chat
Paste this summary, then continue issuing micro-prompts. Standard prompt shape:
```
Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this and every task.
PROJECT (quick ref): Next.js 14 App Router + React 18 + TS + Tailwind 3, Netlify. Brand tokens: pvnxt #069fb1, pvnxt-dark #047a88, pvnxt-tint #e6f7f9, ink #0f1720, muted #5b6b73, line #dbe8ea. Fonts Sora+Inter via next/font CSS vars (font-sora/font-inter).
TASK: <one specific, scoped change>
When done, reply "TASK FINISHED SUCCESSFULLY" + summary.
```
