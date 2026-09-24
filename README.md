# Kelston OMODA | JAECOO V2 Mockup

Open `index.html` to view the website.
Open `admin.html` to manage the mock vehicle inventory.

## New in V2
- Larger KELSTON branding
- Sharper/higher-resolution mockup vehicle imagery
- Clickable vehicle cards with full detail modal
- Vehicle specs and feature lists
- Admin panel to add, edit and delete vehicles
- Admin changes instantly affect the main website in the same browser
- LocalStorage persistence for the mockup
- Cleaner Cloudflare deployment structure: files are at the ZIP root

## Important
This is still a front-end mockup. The admin panel uses browser LocalStorage, not a real database, so changes are only saved on the browser/device where they were made. A production version would connect the admin panel to a database such as Cloudflare D1 and add proper authentication.

Vehicle images are online mockup assets. Replace them with OEM-approved media before production.

## Admin mockup login
- URL: `login.html`
- Username: `admin`
- Password: `Kelston2026`

This login is front-end mockup protection only. Do not use these hardcoded credentials for a production website.
