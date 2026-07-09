# pvNXT — Complete Overview

> **Give this file to any AI agent. It will understand exactly what pvNXT is.**

---

## 1. WHAT IS pvNXT? (One Line)

pvNXT is a **connected solar workflow suite** by **Terranxt** (IIT Delhi–FITT incubated) that replaces fragmented manual solar operations — calls, WhatsApp, Excel, CAD — with **6 connected portals on one shared data layer**, covering the entire solar project lifecycle from satellite-based site capture to plant monitoring.

---

## 2. THE PROBLEM IT SOLVES

The solar EPC industry today runs on:
- WhatsApp groups for lead management
- Manual CAD drawings that take days
- Word/Excel proposals with copy-paste errors
- Whiteboard project tracking
- Repeated physical site visits for every small update
- Manual handoffs between design, sales, and installation teams
- Days-to-weeks of delay at each step

Result: High soft costs, slow turnaround, lost leads, unhappy customers.

---

## 3. HOW pvNXT SOLVES IT

pvNXT replaces every manual step with a connected digital portal. Data enters once and flows across all 6 portals. No re-entry. No broken handoffs.

**Core innovation: pvNXT Atlas** — Satellite stereo imagery is processed via photogrammetry into an accurate 3D roof/site model. This eliminates 90% of physical site visits. Shadow analysis, layout design, and BOQ generation all happen on this 3D model.

---

## 4. THE 6 PRODUCTS (PORTALS)

### 1. pvNXT Atlas
**Tagline:** Satellite to 3D model. Zero visits.
**What:** Stereo satellite imagery → photogrammetry → accurate 3D roof/site model with shadow context, keepouts, and obstructions auto-detected.
**Users:** EPC designers, survey teams.
**Status:** Core technology (embedded in Studio workflow)

### 2. pvNXT Field App
**Tagline:** One visit, complete site capture.
**What:** Mobile app for site survey teams. Captures site data, roof details, keepouts, measurements, photos, and structured handoff notes — all in one visit.
**Users:** Field survey teams.
**Status:** Internal

### 3. pvNXT Connect
**Tagline:** Solar, minus the jargon.
**What:** Consumer-facing portal. Homeowners check feasibility, get cost/ROI estimates, compare quotes, track installation, and monitor their plant — no technical knowledge needed.
**Users:** Homeowners, solar customers.
**Live Portal:** consumer.pvnxt.com

### 4. pvNXT Studio
**Tagline:** EPC design and proposal workspace.
**What:** The core EPC workspace. Create solar layouts, run roof/shadow analysis, generate BOQ, reports, and proposal-ready design exports. All in one place.
**Users:** EPC designers, sales teams, solar businesses.
**Live Portal:** epc.pvnxt.com

### 5. Proposal System
**Tagline:** Automated customer proposals.
**What:** Auto-generates clear, customer-ready proposals from Studio project data. System details, cost breakdown, subsidy, savings, solar impact — all pulled automatically. No manual creation.
**Users:** EPC teams presenting to customers.

### 6. pvNXT Go
**Tagline:** Built for rooftops, not desks.
**What:** Installer field portal. Site task assignment, daily photo proof, work status updates, delay-reason tracking, and verification — all from the rooftop.
**Users:** Installers, site teams, EPC managers.
**Live Portal:** installer.pvnxt.com

### 7. SCADA Monitoring
**Tagline:** Every alert, accountable.
**What:** Role-based monitoring dashboard. Plant visibility, live alerts, inverter/string issues, work orders with assignments, and full activity history.
**Users:** EPC managers, plant owners, field techs, O&M owners.
**Live Portal:** scada.pvnxt.com
**Status:** In progress

---

## 5. HOW THE ECOSYSTEM WORKS (End-to-End Flow)

```
ATLAS → FIELD APP → CONNECT → STUDIO → PROPOSAL → GO → SCADA

1. ATLAS captures satellite imagery → 3D roof model (zero physical visit)
2. FIELD APP verifies site data in one visit
3. CONNECT lets consumer check feasibility and get a quote
4. STUDIO generates design, layout, shadow analysis, BOQ
5. PROPOSAL auto-generates from Studio data
6. GO tracks installation with photo proof and status updates
7. SCADA monitors the plant post-installation with alerts and work orders
```

All 7 portals read/write to **ONE shared project data layer**. No silos.

---

## 6. TARGET AUDIENCE

| Audience | What They Need | Which Portal |
|----------|---------------|-------------|
| EPC Companies / Solar Businesses | Design → Proposal → Tracking in one place | Studio, Proposal, SCADA |
| Homeowners / Consumers | Jargon-free feasibility, cost, tracking | Connect |
| Installers / Site Teams | On-site task management, photo proof | Go, Field App |
| O&M / Plant Owners | Monitoring, alerts, work orders | SCADA |

---

## 7. KEY DIFFERENTIATORS

1. **Satellite-based 3D modeling** — pvNXT Atlas eliminates physical site visits
2. **Connected data layer** — all portals share one source of truth
3. **Role-specific workspaces** — each user gets their own interface
4. **Auto BOQ + Proposal** — generated from design data, no manual work
5. **IIT Delhi–FITT incubated** — deep-tech credibility
6. **Pilot-proven** — used by Astron Green EPC, 4+ EPCs, live portals active

---

## 8. BRAND DETAILS

- **Parent Company:** Terranxt Pvt Ltd
- **Product:** pvNXT (solar workflow suite)
- **Backing:** IIT Delhi – FITT incubated
- **Primary Color:** #069fb1 (teal)
- **Dark:** #047a88 | **Deep:** #113f4a
- **Tint:** #e6f7f9 | **Ink:** #0f1720 | **Muted:** #5b6b73
- **Fonts:** Inter (body) + Sora/Manrope (headings)
- **Logo:** Text wordmark — `pv` normal weight, `NXT` bold teal
- **Tagline:** "Solar operations, connected."

---

## 9. KEY METRICS / RESULTS

- **90%** reduction in design time
- **0** unnecessary site visits
- **3x** faster proposal generation
- **40%** faster project delivery
- **4+** EPCs actively using the platform

---

## 10. WEBSITE STRUCTURE (What We're Building)

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — hero, trust, old way vs new, products, how it works, who uses, results, CTA |
| `about.html` | About pvNXT — mission, vision, team, how GIS + solar integrate |
| `contact.html` | Contact form with role-based routing (EPC/Consumer/Installer/O&M) |
| `studio.html` | pvNXT Studio — dedicated product page |
| `connect.html` | pvNXT Connect — dedicated product page |
| `go.html` | pvNXT Go — dedicated product page |
| `proposal.html` | Proposal System — dedicated product page |
| `field-app.html` | Field App — dedicated product page |
| `scada.html` | SCADA Monitoring — dedicated product page |

---

## 11. DESIGN PHILOSOPHY

- Clean, premium corporate aesthetic (Apple-level)
- Generous whitespace, restrained motion
- Max 4-5 word headlines
- No AI clichés, no hype words
- Every section visually distinct — no card-card-box-box repetition
- Real visuals over placeholders (product screenshots, GIFs, illustrations)
- Lenis smooth scroll, subtle glow effects
- Design reference: `final_terranxt_index.html` (v3-main branch)

---

**Prepared for:** Rajat / Terranxt
**Date:** 9 July 2026
