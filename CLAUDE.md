# CLAUDE.md

The public website for Mangiapane Brothers Lawn and Snow LLC (Livonia and Westland, MI) at https://mangbrothers.com. The site has one job: get homeowners to call (734) 450-2400. Read `PRODUCT.md` for the users, positioning and constraints.

## Stack
- **Astro** (static output) plus `@astrojs/sitemap`. There is no UI framework; use plain `.astro` components with scoped CSS and minimal vanilla JS.
- **Hosting:** GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`.
- **Custom domain:** `public/CNAME` must always contain `mangbrothers.com`.
- **Commands:**
  - `npm run dev`: local dev server
  - `npm run build`: build into `dist/`
  - `npm run preview`: serve the built site

## Design sources (read these before any UI work)
- `design/HANDOFF.md`: the build spec. It covers the components, the phone layout at 760px and below, motion, the content table, and the pre-launch steps.
- `design/home-reference.html`: the final approved design. Match it exactly, at desktop and phone widths. Its inline styles are canvas output; rebuild them as clean components and shared variables rather than copying them.
- `design/design-system/README.md` and `tokens.json`: the brand rules, palette and type.
  - **Web type:** Newsreader at weight 300 with optical sizing for headlines; Libre Franklin at 300 for body text and 500 for labels and buttons.
  - Any tokens.json weight that conflicts with this is a print value.

## Rules
- **Reuse components.** Build the shared pieces once in `src/components/`: Button, Header, CallBar, ServiceRow, and the rest. Before writing new markup, check whether a component already covers it. Put colors, type and spacing in CSS custom properties in `src/styles/global.css`; never hard-code hex values in components.
- **Images:** put them in `src/assets/` and render them with `astro:assets` (`<Image>` or `<Picture>`), giving each width, height and responsive sizes. Photos must be real; never use stock or AI-generated images.
- **Copy** follows Russel's voice: plain and direct, with no contractions, no em dashes and no exclamation points. Never invent reviews, ratings or awards. Keep prices and service details in one data file (`src/data/services.ts`).
- **Calls first.** Every page keeps the tel: link easy to reach, and the phone call bar must stay working.
- **Accessibility:** tap targets of at least 44px, visible focus states, and a `prefers-reduced-motion` path for every animation.
- **Commits:** commit after each working step. Only push to `main` when the build passes, because whatever is pushed to `main` goes live.
- **DNS:** never touch the MX, autodiscover, SPF or DKIM records at GoDaddy. Only the root A records and the `www` CNAME point at GitHub Pages. `apps.mangbrothers.com` is a separate service; leave it alone.
