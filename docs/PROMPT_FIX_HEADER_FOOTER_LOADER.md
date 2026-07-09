Read and strictly follow the instructions in `docs/agent.md`. Those rules apply to this task.

PROJECT CONTEXT:
We are fixing the pvNXT website (static HTML/CSS/JS, v3-main branch). The header and footer are loaded via JavaScript (`assets/js/main.js`). Currently, the fetch paths are hardcoded as `assets/components/header.html`, which works for root pages but FAILS for product pages in `products/` subdirectory.

This is an EXISTING file: `assets/js/main.js`. We need to FIX the fetch paths to work for ALL pages (root + products/ subdirectory).

---

TASK: Fix `assets/js/main.js` — Make header/footer loading work for all pages.

STEP 1: Read the existing `assets/js/main.js` file. Find the lines that load header and footer (around line 97-115). They currently look like this:

```javascript
// Header Load Karna
fetch('assets/components/header.html')
.then(response => {
  if (!response.ok) throw new Error("Header not found");
  return response.text();
})
.then(data => {
  document.getElementById('header-placeholder').innerHTML = data;
})
.catch(error => console.error("Error loading header:", error));

// Footer Load Karna
fetch('assets/components/footer.html')
.then(response => {
  if (!response.ok) throw new Error("Footer not found");
  return response.text();
})
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error("Error loading footer:", error));
```

STEP 2: REPLACE the above code block with this FIXED version that detects the correct path:

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

STEP 3: The `basePath` detection logic:
- If URL contains `/products/` → use `../` (go up one directory)
- Otherwise → use `./` (current directory)

This ensures:
- **Root pages** (`index.html`, `about.html`, etc.) → `assets/components/header.html` ✅
- **Product pages** (`products/studio.html`, etc.) → `../assets/components/header.html` ✅

---

CRITICAL RULES:
- ONLY modify the fetch paths in `assets/js/main.js`
- DO NOT change any other JavaScript functionality (scroll, loader, form validation, etc.)
- Test that header/footer loads on BOTH root pages AND product pages
- The dropdown functionality is added inline (inside the `.then()` block) because the header HTML is loaded dynamically
- Use `data-open` attribute for dropdown state (not CSS hover) for better mobile support

When done, reply "TASK FINISHED SUCCESSFULLY" and confirm:
1. `assets/js/main.js` updated with `basePath` detection
2. Header/footer now loads on ALL pages (root + products/)
3. Dropdown menu works (click to open, click outside to close)
4. No other JavaScript functionality was broken
