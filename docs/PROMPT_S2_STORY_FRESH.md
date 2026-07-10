Read and strictly follow the instructions in `docs/agent.md` (project context + behavior rules). Those rules apply to this task.

PROJECT CONTEXT:
We are redesigning `index.html` — the homepage of pvNXT (connected solar workflow suite by Terranxt, IIT Delhi-incubated). The current design feels crowded (spacing issues) and lacks a "wow" factor. We need a FRESH, premium dark-theme design while keeping the teal (#069fb1) branding.

The design system CSS is in `assets/css/style.css` and `assets/css/pages/home.css`. Use existing CSS variables (--brand, --night, --ink, etc.). Add NEW styles ONLY at the END of `assets/css/pages/home.css`.

This is a REDESIGN task. We will CREATE NEW SECTIONS (with better spacing + modern layout) and REPLACE the current ones.

---

TASK: Fresh homepage redesign — modern dark theme with premium spacing.

STEP 1: Create a NEW "S2: The Story" section (fresh design, better spacing).

REPLACE the current S2 section (class="story-section") with this NEW design:

```html
<!-- ===== S2: THE STORY (FRESH) ===== -->
<section class="section story-fresh" id="story">
  <div class="container">
    <div class="story-grid-fresh">

      <!-- LEFT: Big Typography -->
      <div class="story-big-text reveal">
        <p class="overline"><span></span>The problem</p>
        <h2 class="story-headline">Solar shouldn't be<br>this <em>hard</em>.</h2>
        <p class="story-lead">Today, solar projects run on WhatsApp groups, Excel sheets, and manual CAD. Leads get lost in chats. Designs take days. Proposals have pricing errors from copy-paste.</p>
      </div>

      <!-- RIGHT: Visual Illustration (floating cards) -->
      <div class="story-visual-fresh reveal" aria-label="Disconnected tools vs Connected ecosystem">
        <div class="chaos-cards">
          <div class="chaos-card card-1">📱 WhatsApp</div>
          <div class="chaos-card card-2">📊 Excel</div>
          <div class="chaos-card card-3">✏️ CAD</div>
          <div class="chaos-card card-4">📍 PDF</div>
        </div>
        <div class="arrow-transform">→</div>
        <div class="clarity-card">
          <div class="clarity-icon">pvNXT</div>
          <div class="clarity-text">Connected workflow</div>
        </div>
      </div>

    </div>
  </div>
</section>
```

STEP 2: Add CSS for this NEW section at the END of `assets/css/pages/home.css`:

```css
/* ===== S2: THE STORY (FRESH) ===== */

.story-fresh {
  padding: clamp(100px, 12vh, 180px) 0; /* Dynamic padding */
  background: linear-gradient(180deg, #f8fcfd 0%, #fff 100%);
  overflow: hidden; /* For floating elements */
}

.story-grid-fresh {
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* Asymmetrical */
  gap: clamp(40px, 6vw, 120px); /* Responsive gap */
  align-items: center;
}

/* LEFT: Big Typography */
.story-big-text {
  max-width: 600px;
}

.story-headline {
  font-size: clamp(2.2rem, 4.5vw, 3.8rem); /* Bigger headline */
  line-height: 1.1;
  letter-spacing: -0.03em; /* Tighter */
  margin-bottom: 24px;
}

.story-headline em {
  font-style: normal;
  color: var(--brand); /* Teal accent */
}

.story-lead {
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.8;
  color: var(--muted);
  margin-bottom: 32px; /* More breathing room */
}

/* RIGHT: Visual Illustration */
.story-visual-fresh {
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chaos-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 24px;
  background: rgba(255,255,255,0.6); /* Glassmorphism */
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(6,159,177,0.15);
  box-shadow: 0 20px 60px rgba(6,159,177,0.1);
}

.chaos-card {
  padding: 16px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Arrow */
.arrow-transform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: var(--brand);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 8px 30px rgba(6,159,177,0.3);
  z-index: 2;
}

/* Clarity side (pvNXT) */
.clarity-card {
  position: absolute;
  right: -20px;
  bottom: -20px;
  padding: 20px 28px;
  background: var(--night); /* Dark teal */
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  gap: 14px;
}

.clarity-icon {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--brand);
}

.clarity-text {
  font-size: 0.85rem;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 860px) {
  .story-grid-fresh {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .story-big-text {
    max-width: 100%;
  }

  .story-visual-fresh {
    min-height: 300px;
  }

  .clarity-card {
    position: static;
    margin-top: 24px;
  }
}
```

STEP 3: Find the current S2 section in `index.html` and REPLACE it with the NEW HTML from STEP 1.

The current S2 section starts with:
```html
<section class="section story-section" id="story">
```

DELETE everything from that opening tag to the closing `</section>` tag, and PASTE the new HTML.

---

CRITICAL RULES:
- Use EXACT colors: teal (#069fb1), dark teal (#071824 = var(--night)), white (#fff)
- Maintain "Dark → Light → Light → Dark" alternation pattern
- ALL new CSS goes to END of `assets/css/pages/home.css` (DO NOT touch style.css)
- Use existing utility classes where possible (.section, .container, .overline, .reveal)
- Test on mobile (560px, 860px breakpoints)
- The "arrow" and "clarity card" should be visually distinct (premium feel)

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. S2 section redesigned with asymmetrical grid + glassmorphism
2. Spacing improved (dynamic padding with clamp())
3. New CSS added to END of home.css
4. No existing content modified (only S2 replaced)
5. Mobile responsive (tested at 560px and 860px)
