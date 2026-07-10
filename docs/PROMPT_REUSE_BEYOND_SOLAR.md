Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are editing `index.html` — the homepage of pvNXT (connected solar workflow suite by Terranxt, IIT Delhi-incubated). The page design system is already premium (CSS variables, .overline, .section, h1/h2/h3, .lead, .btn, .text-link, etc.). We must maintain this design language for all sections.

The design system CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS classes wherever possible. For new styles, add them to `assets/css/pages/home.css`.

---

TASK: Replace the "Products" section (S4) with the "Beyond Solar" design from `services.html`.

STEP 1: Find and DELETE the existing S4 section.

Find the section with class `section` and id `products` (it has a heading "6 products. One data layer." and 6 product cards). DELETE this entire section from the opening `<section>` tag to its closing `</section>` tag.

STEP 2: Insert the new "Beyond Solar" design in its place. Insert at that EXACT location — between the closing of the "How it works" section and the opening of the "Who it's for" section.

Insert this HTML:

```html
<!-- ===== S4: PRODUCTS (REPLACED with Beyond Solar Design) ===== -->
<section class="section output-section" id="products">
  <div class="container output-shell reveal">
    
    <div class="output-copy">
      <p class="overline"><span></span>Our Products</p>
      <h2>6 products. One data layer.</h2>
      <p>Each product connects to shared project data — no silos, no double entry.</p>
    </div>

    <div class="output-columns" aria-label="pvNXT products">
      
      <article>
        <span>01</span>
        <h3>Studio</h3>
        <p>EPC design and proposal workspace</p>
        <a href="products/studio.html" class="text-link">Explore Studio →</a>
      </article>

      <article>
        <span>02</span>
        <h3>Connect</h3>
        <p>Consumer solar portal</p>
        <a href="products/connect.html" class="text-link">Explore Connect →</a>
      </article>

      <article>
        <span>03</span>
        <h3>Go</h3>
        <p>Installer field portal</p>
        <a href="products/go.html" class="text-link">Explore Go →</a>
      </article>

      <article>
        <span>04</span>
        <h3>Proposal</h3>
        <p>Automated customer proposals</p>
        <a href="products/proposal.html" class="text-link">Explore Proposal →</a>
      </article>

      <article>
        <span>05</span>
        <h3>Field App</h3>
        <p>Site survey capture</p>
        <a href="products/field-app.html" class="text-link">Explore Field App →</a>
      </article>

      <article>
        <span>06</span>
        <h3>SCADA</h3>
        <p>Plant operations monitoring</p>
        <a href="products/scada.html" class="text-link">Explore SCADA →</a>
      </article>

    </div>

  </div>
</section>
```

STEP 3: Add CSS at the END of `assets/css/pages/home.css`:

```css
/* ===== S4: PRODUCTS (Beyond Solar Design) ===== */

.output-section {
  padding: 100px 0;
  background: #fff;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.output-shell {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: start;
}

.output-copy {
  position: sticky;
  top: 118px; /* Matches .section padding */
  max-width: 400px;
}

.output-copy p:last-child {
  font-size: .95rem;
  color: var(--muted);
  line-height: 1.6;
  margin-top: 16px;
}

.output-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.output-columns article {
  padding: 28px 24px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  transition: border-color .25s ease, box-shadow .25s ease;
}

.output-columns article:hover {
  border-color: rgba(6,159,177,.3);
  box-shadow: 0 12px 36px rgba(6,159,177,.06);
}

.output-columns article span {
  display: block;
  font-size: .78rem;
  font-weight: 700;
  color: var(--brand-dark);
  text-transform: uppercase;
  letter-spacing: .06em;
  margin-bottom: 14px;
}

.output-columns article h3 {
  font-size: 1.08rem;
  margin-bottom: 10px;
}

.output-columns article p {
  font-size: .88rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 18px;
}

/* Responsive */
@media (max-width: 860px) {
  .output-shell {
    grid-template-columns: 1fr;
  }
  
  .output-copy {
    position: static;
    max-width: 100%;
  }
  
  .output-columns {
    grid-template-columns: 1fr;
  }
}
```

---

CRITICAL RULES:
- The new section must be placed at the EXACT location (between "How it works" and "Who it's for").
- DELETE the old products section completely (including the section with class `trust-strip-section` that follows it).
- Use existing CSS variables from style.css (--brand, --brand-dark, --ink, --muted, --line, --mist, --paper).
- Use existing utility classes: .section, .container, .overline, .lead, .text-link.
- The page shell (head, meta, fonts, loader, header placeholder, footer placeholder) must NOT be touched.
- DO NOT change: components/header.html, components/footer.html, assets/js/main.js, assets/css/style.css.
- All CSS goes into assets/css/pages/home.css — DO NOT edit style.css or other page CSS files.
- The sticky-left + scrollable-right layout is the KEY feature of this design. Test on desktop.

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. S4 section replaced with "Beyond Solar" design
2. Products now show as 2-column cards (not 3-column grid)
3. Left text is sticky, right cards scroll
4. CSS added to home.css (not style.css)
5. No other sections were modified
6. Mobile responsive (stacks vertically on <860px)
