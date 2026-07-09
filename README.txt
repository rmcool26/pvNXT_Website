Terranxt PREMIUM STATIC WEBSITE

Open home.html or home.html in a browser to preview the site.

Folder structure:
- home.html
- home.html
- about.html
- services.html
- contact.html
- assets/css/style.css
- assets/css/pages/home.css
- assets/css/pages/about.css
- assets/css/pages/services.css
- assets/css/pages/contact.css
- assets/js/main.js
- assets/images/logo.png
- assets/images/IMAGE-SOURCES.txt
- README.txt
- QA-CHECKLIST.txt

Implementation notes:
- home.html and home.html share the same home page markup so the project works whether opened from the root file or the explicit Home file.
- services.html contains both the core pvNXT ecosystem and Beyond Solar sections because the requested file structure does not include separate platform.html or beyond.html files.
- Portal Login, App Store and Google Play badges route to role-specific contact journeys until official portal/store URLs are supplied.
- Contact form validation is implemented client-side in assets/js/main.js. Connect it to your CRM, form backend or email service before production launch.
- Social links route to the contact form until official Terranxt profile URLs are supplied.
