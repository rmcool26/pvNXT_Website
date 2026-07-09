# Gemma Prompt Writing Guide

> **For the planning AI:** Har product page ka prompt tum likhoge. Yeh guide follow karo taaki har prompt same quality aur format mein aaye.

---

## Tumhara Prompt Mera Prompt Jaisa Kaise Banega

Jo prompt tumne Connect ke liye banaya tha, usmein 3 problems thi. Yeh fix karo:

---

### Problem 1: Extra heading mat lagao

```
TUMNE LIKHA THA:
## INSTRUCTIONS FOR GEMMA

SAHI FORMAT:
Direct prompt start karo. Koi markdown heading nahi.
Pehla line: "Read and strictly follow the instructions..."
```

---

### Problem 2: Product data do baar mat do

```
TUMNE LIKHA THA:
Prompt ke end mein alag se "PRODUCT DATA FOR CONNECT" section

SAHI FORMAT:
Jo bhi data chahiye, vo HTML ke andar hi daal do. 
Alag se section mat banao. Gemma HTML padh lega.
```

---

### Problem 3: Before vs After mein exact data use karo

```
TUMNE LIKHA THA:
"Leads scattered on WhatsApp and missed follow-ups"
(Yeh generic hai, project resume mein jo likha hai vo nahi)

SAHI DATA (pvNXT_PROJECT_RESUME.md Section 6 se):
CONNECT ke liye Before items:
  "Leads scattered across WhatsApp and spreadsheets"
  "Follow-ups missed or forgotten"  
  "No visibility into conversion rates"

CONNECT ke liye After items:
  "Every lead tracked automatically"
  "Automated follow-up reminders, nothing slips through"
  "Full pipeline visibility with clear conversion data"

HAMESHA project resume mein diya hua exact data use karo.
Apna man se mat banao.
```

---

## Prompt Structure — Exactly Follow Karna

Har prompt ka structure yeh hona chahiye:

```
1. Read and strictly follow... (yeh line hamesha first)
2. PROJECT CONTEXT (3-4 lines)
3. --- separator
4. TASK: [one line]
5. STEP 1: [kya karna hai]
6. [COMPLETE HTML BLOCK]
7. STEP 2: [CSS ke liye instructions]
8. --- separator
9. CRITICAL RULES (bullet points)
10. When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
```

---

## Content Checklist — Prompt Dene Se Pehle

```
[ ] PROJECT CONTEXT mein bataya ki kaunsi files exist karti hain
[ ] TASK ek line mein clear hai
[ ] HTML COMPLETE hai — koi placeholder text nahi
[ ] Before/After data EXACTLY project resume se liya hai
[ ] Outcome/Impact text EXACTLY project resume se liya hai  
[ ] Features list EXACTLY project resume se li hai
[ ] Live portal URL sahi hai
[ ] Koi extra section nahi (like "PRODUCT DATA FOR...")
[ ] CRITICAL RULES mein likha hai "DO NOT touch style.css"
[ ] CRITICAL RULES mein likha hai "DO NOT modify existing files"
[ ] CSS file ke liye sahi instruction: "use existing product.css" ya "create new"
[ ] Response format bataya: "TASK FINISHED SUCCESSFULLY" + confirmations
```

---

## Example — Studio Prompt Ka Structure Dekho

Jo Studio prompt maine banaya tha, uska format exactly aisa tha:

```
Read and strictly follow...
PROJECT CONTEXT: [3-4 lines about project]
---
TASK: Create products/studio.html
STEP 1: Create file with HTML
[COMPLETE HTML — 10 sections]
STEP 2: Create CSS file
[COMPLETE CSS]
---
CRITICAL RULES:
- DO NOT...
- Use existing...
When done, reply "TASK FINISHED SUCCESSFULLY"
```

Yahi format copy karo har product page ke liye. Sirf content badlo.

---

## Pages Remaining — Data Already Ready

Project resume (pvNXT_PROJECT_RESUME.md) ke Section 6 mein sab data hai:

| Page | Status |
|------|--------|
| studio.html | ✅ Done |
| connect.html | ⏳ Tum prompt doge |
| go.html | ⏳ Tum prompt doge |
| proposal.html | ⏳ Tum prompt doge |
| field-app.html | ⏳ Tum prompt doge |
| scada.html | ⏳ Tum prompt doge |

---

## Important

- Prompt short rakho, clean rakho
- Jo likha hai sirf vahi likho, apna kuch mat jodo
- Mere format se deviate mat karo
- Har prompt end mein "TASK FINISHED SUCCESSFULLY" confirmations do
