Read `docs/agent.md`. Then do exactly this:

---

## TASK: Fix S1 Hero + Trust Strip responsive behavior. Standardize ALL home.css breakpoints to 860px + 560px.

---

## STEP 1: OPEN `assets/css/pages/home.css`

---

## STEP 2: FIND the global @media block near the bottom of home.css

Find the block starting with `@media (max-width: 700px)` that contains `.results-stats`, `.results-points`, `.who-lane-arrow`. Also find `@media (max-width: 500px)` that contains `.who-lane`, `.who-lane-body`.

COMBINE these into ONE block with proper breakpoints. REPLACE both blocks with:

```
@media (max-width: 860px) {
  .results-stats { grid-template-columns: repeat(2, 1fr); gap: 40px 24px; }
  .results-points { grid-template-columns: 1fr; gap: 16px; }
  .who-lane-arrow { opacity: .6; transform: translateX(0); font-size: .75rem; }
  .who-lane { flex-wrap: wrap; gap: 12px; }
  .who-lane-body { flex: 1 1 100%; }
  .result-point p { font-size: .86rem; }
}
```

This standardizes all responsive behavior in home.css to `max-width: 860px` and `max-width: 560px`.

---

## STEP 3: FIND the S5 @media block

The S5 `@media (max-width: 860px)` block wraps the `.who-grid` rules. This ALREADY uses 860px — good. Leave it as-is.

---

## STEP 4: FIND the S4 products @media block

The S4 block uses `@media (max-width: 860px)` for 2 columns. ADD a new block below it for single column on mobile:

```
@media (max-width: 560px) {
  .products-grid-new { grid-template-columns: 1fr; }
  .product-card-new { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; padding: 20px 22px; }
  .product-card-info { flex: 1; min-width: 0; }
  .product-card-arrow { opacity: .6; transform: translateX(0); }
  .datalayer-inner { flex-direction: column; gap: 10px; }
  .datalayer-line { max-width: 60px; }
}
```

---

## STEP 5: ADD S1 Hero + Trust Strip responsive rules

At the END of home.css, ADD:

```
/* ===== RESPONSIVE: S1 HERO + TRUST STRIP ===== */
@media (max-width: 860px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .hero-visual { min-height: auto; }
  .floating-signal { display: none; }
  .orbital-rings { opacity: .5; }
  .trust-strip-section { margin-top: 0; }
}

@media (max-width: 560px) {
  .hero-home { min-height: auto; padding: 100px 0 60px; }
  .hero-copy h1 { font-size: clamp(2rem, 8vw, 2.5rem); }
  .trust-strip { grid-template-columns: 1fr; }
  .trust-strip div { border-right: none; border-bottom: 1px solid var(--line); }
  .trust-strip div:last-child { border-bottom: none; }
  .smart-cta { flex-direction: column; }
  .smart-cta .btn { width: 100%; }
  .hero-proof-row { font-size: .82rem; gap: 6px 14px; }
}
```

---

## STEP 6: FIX the S3 @media connectors

Find the S3 `@media (max-width: 860px)` block. The `atlas-connector` uses `transform: rotate(90deg)`. This is fine for tablet. For small phones, ADD at 560px:

Inside the S3 `@media (max-width: 860px)` block (or add a new 560px block), add:
```
@media (max-width: 560px) {
  .magic-header h2 { font-size: clamp(1.5rem, 7vw, 2rem); }
  .atlas-caption { font-size: .76rem; }
  .ecosystem-caption { font-size: .82rem; }
}
```

---

## STEP 7: FIX the S6 results for 560px

Find the S6 `@media (max-width: 860px)` block that was moved in STEP 2. The `.results-stats { grid-template-columns: repeat(2, 1fr) }` is in that 860px block. For tiny phones, add a NEW block:

```
@media (max-width: 560px) {
  .results-header h2 { font-size: clamp(1.5rem, 7vw, 2rem); }
  .result-value { font-size: clamp(2rem, 8vw, 3rem); }
}
```

---

## STEP 8: SAVE home.css. Reply: "DONE. Standardized to 860px + 560px breakpoints."

---

## CRITICAL RULES:
- DO NOT change any HTML
- DO NOT touch style.css, main.js, or any other file
- ADD new CSS at END of home.css
- COMBINE the old 700px + 500px blocks into one 860px block
- Standardize ALL new media queries to `860px` and `560px`
- Keep all existing desktop CSS exactly as-is
