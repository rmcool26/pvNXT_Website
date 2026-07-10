# pvNXT Website — Media Requirements List

**Date:** July 9, 2026  
**Branch:** v3-main  
**Status:** Awaiting media assets  

---

## 📋 **MEDIA REQUIREMENTS (All Pages)**

### **1. HOMEPAGE (`index.html`)**

| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **S1: Hero** | GIF/Video | 3D roof analysis animation | 1280x720px | ❌ Missing |
| **S1: Trust Strip** | Icons | 4 trust indicators (IIT Delhi, AI, Zero Visit, Output) | 48x48px | ❌ Missing |
| **S3: The Magic** | Diagram | Atlas pipeline flow (satellite → 3D → output) | 800x600px | ❌ Missing |
| **S4: Products** | Icons | 6 product icons (Studio, Connect, Go, etc.) | 64x64px | ❌ Missing |
| **S5: Who It's For** | Icons | 4 role icons (EPC, Installer, Homeowner, O&M) | 80x80px | ❌ Missing |
| **S6: Real Results** | Background | Floating stats background gradient | SVG pattern | ❌ Missing |

---

### **2. PRODUCT PAGES (`products/*.html`)**

#### **Studio Page (`products/studio.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | Studio dashboard — 3D roof model + BOQ sidebar | 1280x720px | ❌ Missing |
| **Capabilities** | Icons (6) | Solar layout, shadow analysis, BOQ, reports, export, tracking | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

#### **Connect Page (`products/connect.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | Consumer portal — feasibility check + ROI calculator | 1280x720px | ❌ Missing |
| **Capabilities** | Icons (6) | Feasibility, ROI, quote compare, tracking, monitoring, analytics | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

#### **Go Page (`products/go.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | Installer portal — mobile view with task list | 1280x720px (mobile mockup) | ❌ Missing |
| **Capabilities** | Icons (6) | Task assignment, photos, status, delay tracking, verification, dashboard | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

#### **Proposal Page (`products/proposal.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | Proposal document — sample view with system specs | 1280x720px | ❌ Missing |
| **Capabilities** | Icons (6) | Auto-generation, cost tables, system summary, impact, layout, workflow | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

#### **Field App Page (`products/field-app.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | Field App — mobile app with site capture view | 1280x720px (mobile mockup) | ❌ Missing |
| **Capabilities** | Icons (6) | Site data, roof details, measurements, photos, notes, checklist | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

#### **SCADA Page (`products/scada.html`)**
| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Screenshot | SCADA dashboard — role-based monitoring view | 1280x720px | ❌ Missing |
| **Capabilities** | Icons (6) | Role views, alerts, work orders, history, monitoring, reporting | 48x48px | ✅ Has SVG placeholders |
| **Before/After** | Background | Soft red/green tint backgrounds | CSS only | ✅ OK |

---

### **3. ABOUT PAGE (`about.html`)**

| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Background | Gradient or SVG pattern | CSS only | ✅ OK |
| **Problem** | Icons (4) | Consumer, EPC, Installer, O&M icons | 48x48px | ❌ Missing |
| **Principles** | Icons (4) | Clarity, Accuracy, Accountability, Scale icons | 48x48px | ✅ Has SVG placeholders |
| **Terranxt** | Logo | IIT Delhi-FITT incubation logo | 200x100px | ❌ Missing |

---

### **4. CONTACT PAGE (`contact.html`)**

| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Background | Gradient or SVG pattern | CSS only | ✅ OK |
| **Role Cards** | Icons (5) | Consumer, EPC, Installer, O&M, Investor icons | 48x48px | ❌ Missing |
| **Direct Links** | Background | Subtle pattern | CSS only | ✅ OK |

---

### **5. SERVICES PAGE (`services.html`)**

| Section | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Hero** | Animation | Ecosystem orbit (Consumer ↔ EPC ↔ Installer) | CSS/JS animation | ✅ OK |
| **Consumer** | Video | Consumer portal walkthrough | MP4 (16:9) | ✅ Has video |
| **EPC** | Video | EPC suite walkthrough | MP4 (16:9) | ✅ Has video |
| **Installer** | Video | Installer tools walkthrough | MP4 (16:9) | ✅ Has video |
| **Beyond Solar** | Icons | SCADA + arthaNXT icons | 64x64px | ❌ Missing |

---

### **6. HEADER/FOOTER (`components/header.html`, `footer.html`)**

| Element | Media Type | Description | Dimensions | Status |
|---------|------------|-------------|-------------|--------|
| **Header Logo** | SVG/Image | pvNXT text logo (teal color) | 120x32px | ✅ Has SVG |
| **Footer Logo** | SVG/Image | pvNXT text logo (smaller) | 100x28px | ✅ Has SVG |
| **Social Icons** | SVG | LinkedIn, X (Twitter), YouTube icons | 20x20px | ✅ Has SVG |

---

## 📊 **SUMMARY: MISSING MEDIA**

### **❌ High Priority (Screenshots)**
1. ❌ Studio dashboard screenshot
2. ❌ Connect portal screenshot
3. ❌ Go mobile view screenshot
4. ❌ Proposal document sample
5. ❌ Field App mobile screenshot
6. ❌ SCADA dashboard screenshot

### **❌ Medium Priority (Icons)**
7. ❌ Homepage — Trust strip icons (4)
8. ❌ Homepage — Product icons (6)
9. ❌ Homepage — Role icons (4)
10. ❌ About page — Problem icons (4)
11. ❌ Contact page — Role icons (5)
12. ❌ Services page — SCADA + arthaNXT icons

### **❌ Low Priority (Enhancements)**
13. ❌ Homepage hero GIF/video (3D roof analysis)
14. ❌ About page — IIT Delhi-FITT logo
15. ❌ Background patterns (SVG) for sections

---

## 📁 **FOLDER STRUCTURE (Recommended)**

```
assets/images/
├── screenshots/
│   ├── studio-dashboard.png
│   ├── connect-portal.png
│   ├── go-mobile.png
│   ├── proposal-sample.png
│   ├── fieldapp-mobile.png
│   └── scada-dashboard.png
├── icons/
│   ├── trust/
│   ├── products/
│   ├── roles/
│   └── problems/
├── logos/
│   ├── iit-delhi-fitt.png
│   └── terranxt-incubated.png
├── videos/
│   ├── consumer-portal.mp4
│   ├── epc-suite.mp4
│   └── installer-tools.mp4
└── patterns/
    ├── hero-pattern.svg
    ├── stats-float.svg
    └── cta-background.svg
```

---

## ✅ **NEXT STEPS**

1. **Collect screenshots** from pvNXT live portals (Studio, Connect, Go, etc.)
2. **Design icons** (or use stock icons from Feather, Heroicons, etc.)
3. **Create videos** (or use existing from `services.html`)
4. **Add to repository** in `assets/images/` folder
5. **Update HTML** to reference actual images (not placeholders)

---

**Ready to proceed with media collection?** 🎨
