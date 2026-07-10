Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are applying dark theme rhythm to the About page and Contact page. About page uses `assets/css/pages/about.css`. Contact page uses `assets/css/pages/contact.css`. We will make specific sections dark using CSS only. ZERO HTML changes. Modify existing CSS in-place.

DO NOT touch header.html, footer.html, main.js, style.css, or any other file.

---

TASK: Add dark theme to 2 sections on About page + 1 section on Contact page.

---

PART A: ABOUT PAGE — The Solution section

STEP A1: FIND the "The Solution" section in about.html.
It has id="solution" and contains the 7-product flow (ATLAS → FIELD APP → STUDIO...). The section has class="section section-soft".

STEP A2: ADD this at the END of `assets/css/pages/about.css`:

/* ===== DARK: The Solution Section ===== */
#solution { background: radial-gradient(circle at 50% 30%, rgba(6,159,177,.12), transparent 55%), linear-gradient(135deg, #031d2a, #082b3b) !important; position: relative; overflow: hidden; }
#solution::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#solution .overline { color: #84e6ee; position: relative; z-index: 1; }
#solution .overline span { background: #84e6ee; }
#solution h2 { color: #fff; position: relative; z-index: 1; }
#solution .lead, #solution p { color: rgba(255,255,255,.7); position: relative; z-index: 1; }
#solution .container { position: relative; z-index: 1; }
#solution strong, #solution h3 { color: #fff; }

---

PART B: ABOUT PAGE — Backed By section

STEP B1: FIND the "Backed By" section in about.html.
It has id="backed-by" and contains the Terranxt story with IIT Delhi-FITT mention and research-to-execution text. The section has class="section section-soft".

STEP B2: ADD this at the END of `assets/css/pages/about.css`:

/* ===== DARK: Backed By Section ===== */
#backed-by { background: radial-gradient(circle at 20% 50%, rgba(6,159,177,.1), transparent 55%), linear-gradient(135deg, #082b3b, #031d2a); position: relative; overflow: hidden; }
#backed-by::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#backed-by .overline { color: rgba(255,255,255,.5); position: relative; z-index: 1; }
#backed-by .overline span { background: rgba(255,255,255,.5); }
#backed-by h2 { color: #fff; position: relative; z-index: 1; }
#backed-by h3 { color: #fff; position: relative; z-index: 1; }
#backed-by .lead, #backed-by p { color: rgba(255,255,255,.65); position: relative; z-index: 1; }
#backed-by .container { position: relative; z-index: 1; }

---

PART C: CONTACT PAGE — Select Your Role section

STEP C1: FIND the "Select Your Role" section in contact.html.
It has the heading "What describes you best?" and 5 role cards (Consumer, EPC, Installer, O&M, Investor). This section currently has light-theme styling.

STEP C2: ADD this at the END of `assets/css/pages/contact.css`:

/* ===== DARK: Select Your Role Section ===== */
#role-section { background: radial-gradient(circle at 50% 30%, rgba(6,159,177,.12), transparent 55%), linear-gradient(135deg, #031d2a, #082b3b) !important; position: relative; overflow: hidden; }
#role-section::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 58px 58px; mask-image: linear-gradient(to right, transparent, #000 20%, #000 80%, transparent); pointer-events: none; z-index: 0; }
#role-section .overline { color: #84e6ee; position: relative; z-index: 1; }
#role-section .overline span { background: #84e6ee; }
#role-section h2 { color: #fff; position: relative; z-index: 1; }
#role-section h3 { color: #fff; position: relative; z-index: 1; }
#role-section .lead, #role-section p { color: rgba(255,255,255,.7); position: relative; z-index: 1; }
#role-section .container { position: relative; z-index: 1; }
#role-section a, #role-section .role-card { background: rgba(255,255,255,.04); border: 1px solid rgba(6,159,177,.15); color: #fff; }
#role-section a:hover, #role-section .role-card:hover { background: rgba(6,159,177,.08); border-color: rgba(6,159,177,.3); box-shadow: 0 8px 30px rgba(6,159,177,.12); }

IF the role section doesn't have id="role-section" in the HTML, check what the actual section wrapper is — it may be a div or section with a different id or class. Use that actual selector instead. If there's no id, look for a unique class or structure.

---

STEP D: CHECK that both contact.html and about.html have these section IDs in their HTML. 

If the sections DON'T have the IDs (solution, backed-by, role-section), you need to ADD the IDs to the HTML elements. For example:

In about.html, find the Solution section wrapper and add id="solution" to it.
In about.html, find the Backed By section wrapper and add id="backed-by" to it.
In contact.html, find the Role section wrapper and add id="role-section" to it.

ONLY add the id attribute — change nothing else about these elements.

---

CRITICAL RULES:
- ADD CSS at the END of about.css and contact.css
- ADD id attributes to HTML sections ONLY if they don't already exist
- Use !important ONLY where section-soft class conflicts (solution section)
- DO NOT touch any other CSS files
- DO NOT change any other HTML content
- DO NOT touch header.html, footer.html, main.js, style.css

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. Dark CSS added for #solution and #backed-by in about.css
2. Dark CSS added for #role-section in contact.css
3. HTML ids added where missing (list which ones)
4. No other files modified
