Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are fixing the pvNXT website (static HTML/CSS/JS, v3-main branch). The header and footer files are updated with pvNXT branding, AND the JavaScript (`assets/js/main.js`) is fixed to load header/footer on ALL pages (root + products/ subdirectory). 

However, when testing the website, the **header/footer are NOT loading** on any page. The `header-placeholder` and `footer-placeholder` divs are present in the HTML, but the fetch() call is not working properly.

---

TASK: Debug and fix header/footer loading issue on ALL pages.

STEP 1: Check current state of `assets/js/main.js` (lines 97-130 approximately). The fetch code should look like this:

```javascript
// Header Load Karna (FIXED for root + products/ subdirectory)
const basePath = window.location.pathname.includes('/products/') ? '../' : './';

fetch(basePath + 'assets/components/header.html')
  .then(response => {
    if (!response.ok) throw new Error("Header not found");
    return response.text();
  })
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    
    // Dropdown functionality
    const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
    dropdownTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const dropdown = this.closest('[data-dropdown]');
        const isOpen = dropdown.getAttribute('data-open') === 'true';
        dropdown.setAttribute('data-open', isOpen ? 'false' : 'true');
      });
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('[data-dropdown]')) {
        document.querySelectorAll('[data-dropdown]').forEach(dd => {
          dd.setAttribute('data-open', 'false');
        });
      }
    });
  })
  .catch(error => console.error("Error loading header:", error));

// Footer Load Karna (FIXED for root + products/ subdirectory)
fetch(basePath + 'assets/components/footer.html')
  .then(response => {
    if (!response.ok) throw new Error("Footer not found");
    return response.text();
  })
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  })
  .catch(error => console.error("Error loading footer:", error));
```

**PROBLEM:** The header/footer are NOT loading. Possible causes:
1. **Path issue** — `basePath` calculation is wrong for GitHub Pages (baseURL `/pvNXT_Website/`)
2. **Fetch fails silently** — Error in console but not visible
3. **DOMContentLoaded event** — The fetch runs before DOM is ready
4. **Local testing vs GitHub Pages** — Paths work differently

---

STEP 2: FIX the issue by updating `assets/js/main.js` with ROBUST path detection:

```javascript
// Helper function to detect correct base path
function getBasePath() {
  const path = window.location.pathname;
  
  // For GitHub Pages (username.github.io/repo-name/)
  if (path.includes('/pvNXT_Website/')) {
    if (path.includes('/products/')) {
      return '../';  // products/*.html → go up to root
    } else {
      return '';  // root pages → same directory
    }
  }
  
  // For local development
  if (path.includes('/products/')) {
    return '../';
  } else {
    return './';
  }
}

const basePath = getBasePath();

// Header Load Karna
fetch(basePath + 'assets/components/header.html')
  .then(response => {
    if (!response.ok) throw new Error("Header not found: " + response.status);
    return response.text();
  })
  .then(data => {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.innerHTML = data;
      
      // Dropdown functionality
      const dropdownTriggers = document.querySelectorAll('[data-dropdown-trigger]');
      dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          const dropdown = this.closest('[data-dropdown]');
          const isOpen = dropdown.getAttribute('data-open') === 'true';
          dropdown.setAttribute('data-open', isOpen ? 'false' : 'true');
        });
      });
      
      // Close dropdown on outside click
      document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-dropdown]')) {
          document.querySelectorAll('[data-dropdown]').forEach(dd => {
            dd.setAttribute('data-open', 'false');
          });
        }
      });
      
      console.log('Header loaded successfully');
    }
  })
  .catch(error => console.error("Error loading header:", error));

// Footer Load Karna
fetch(basePath + 'assets/components/footer.html')
  .then(response => {
    if (!response.ok) throw new Error("Footer not found: " + response.status);
    return response.text();
  })
  .then(data => {
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
      placeholder.innerHTML = data;
      console.log('Footer loaded successfully');
    }
  })
  .catch(error => console.error("Error loading footer:", error));
```

---

STEP 3: After updating `main.js`, TEST on both local and GitHub Pages:

**Local test (http://127.0.0.1:5500/):**
- Open index.html → Check if header/footer loads
- Open products/studio.html → Check if header/footer loads

**GitHub Pages test (after push):**
- Open https://rmcool26.github.io/pvNXT_Website/ → Check header/footer
- Open https://rmcool26.github.io/pvNXT_Website/products/studio.html → Check header/footer

**Debug:** Open browser console (F12) and look for:
- "Header loaded successfully" message
- "Footer loaded successfully" message
- Any errors (red text)

---

CRITICAL RULES:
- ONLY modify `assets/js/main.js` (header/footer fetch logic)
- DO NOT change header.html or footer.html
- Test on BOTH root pages AND products/*.html pages
- Use browser console (F12 → Console) to debug
- If paths still fail, try hardcoded paths: `./assets/components/header.html` for root, `../assets/components/header.html` for products/
- The goal is: header/footer MUST load on ALL pages

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `assets/js/main.js` updated with robust path detection
2. Header/footer loads on root pages (index.html, about.html, etc.)
3. Header/footer loads on product pages (products/studio.html, etc.)
4. Dropdown menu works (click to open, click outside to close)
5. No console errors related to header/footer loading
6. Tested on both local server AND GitHub Pages (after push)