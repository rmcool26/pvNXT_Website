Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
Header and footer are not loading on any page. The issue: `assets/js/global-components.js` has EMPTY templates. Only index.html loads this script. We need to fix the JS file AND add the script tag to all remaining pages.

DO NOT touch style.css, main.js, any CSS file, or any section content.

---

TASK: Fix global header/footer across ALL 9 pages. Three parts.

---

PART A: POPULATE global-components.js with real header + footer HTML

STEP A1: Read the COMPLETE content of `components/header.html` (78 lines).

STEP A2: Read the COMPLETE content of `components/footer.html` (92 lines).

STEP A3: In `assets/js/global-components.js`, find the two EMPTY template strings:

var headerTemplate = ``;  ← this is EMPTY
var footerTemplate = ``;  ← this is EMPTY

STEP A4: PASTE the FULL HTML from header.html into the headerTemplate variable, and the FULL HTML from footer.html into the footerTemplate variable.

IMPORTANT — Escape backticks properly. If the HTML contains backtick characters (`), replace them with \` inside the template literal. If the HTML contains ${ (dollar-brace), escape the $ as \$.

The result should look like:

var headerTemplate = `<header class="site-header" data-header>...[FULL HEADER HTML]...</header>`;
var footerTemplate = `<footer class="site-footer" data-footer>...[FULL FOOTER HTML]...</footer>`;

DO NOT modify the HTML content itself. Just embed it inside the template strings.

---

PART B: ADD global-components.js SCRIPT to 8 missing pages

STEP B1: For ABOUT and CONTACT (root-level pages), find `</body>` tag. ADD this line BEFORE `</body>`:

<script defer src="assets/js/global-components.js"></script>

STEP B2: For ALL 6 product pages (products/studio.html, connect.html, go.html, proposal.html, field-app.html, scada.html), find `</body>` tag. ADD this line BEFORE `</body>`:

<script defer src="../assets/js/global-components.js"></script>

(Note the ../ prefix because product pages are in the products/ subdirectory)

---

PART C: FIX duplicate </body> in index.html

STEP C1: Open index.html. Find the duplicate `</body>` on the last lines. There should be only ONE `</body>` tag. Remove the extra one. Keep the tag that is followed by `</html>`.

---

CRITICAL RULES:
- DO NOT modify the HTML inside header.html or footer.html — only EMBED it into the JS template strings
- DO NOT touch style.css, main.js, or any CSS file
- DO NOT modify any page's content sections
- For product pages, use `../assets/js/global-components.js` (relative path from products/ folder)
- For root pages (about, contact), use `assets/js/global-components.js` (no ../ prefix)
- index.html already has the script — just fix the duplicate </body>
- After this fix, ALL 9 pages will load header + footer automatically

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. global-components.js now has full header + footer HTML templates
2. Script tag added to: about.html, contact.html, and all 6 product pages
3. Duplicate </body> removed from index.html
4. No other files or sections modified
