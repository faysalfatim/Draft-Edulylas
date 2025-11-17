# Draft-Edulylas

This is a single-page community showcase for the EduLylas platform. Everything is client-side and powered by Tailwind CSS + vanilla JavaScript.

## Run the demo
1. Install no dependencies—just open `index.html` in any modern desktop or mobile browser. For local network previews you can also run `npx serve .` (or `python -m http.server`) from the repo root and visit the printed URL.
2. The layout is responsive, so try resizing the browser or testing on mobile to see the condensed navigation and stacked cards.
3. The experience ships in a single light theme, so what you preview locally is exactly what will ship.

## What’s included
- Fixed navbar with brand badge, live search, notifications, and user dropdown actions (Create, Profile, My Resources, Settings, Theme, Logout).
- Scrollable left sidebar summarizing navigation links plus recent, enrolled, and recommended playbooks.
- Full-width hero, weekly drop carousel, and a large community grid of free, paid, and hybrid playbooks seeded with global demo data.
- Clickable cards that hydrate the single-playbook detail panel so you can preview modules, access level, and metadata without leaving the page.
- Notification feed, search suggestion dropdown, and animated metrics to help illustrate how the experience could work with a real backend.

## Customizing the data
All sample content is defined near the bottom of `index.html` inside the `playbooks`, `weeklyDrop`, and sidebar list arrays. Edit or append entries, save the file, and reload the browser to see your changes immediately.
