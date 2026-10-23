# Mangiapane Brothers — MVP home page build handoff

**Goal:** a single home page live on mangbrothers.com tonight. Its job is to get people to call (734) 450-2400.
**Stack:** Astro, a static build hosted on GitHub Pages and deployed by a GitHub Action, with a custom domain over HTTPS.

## Source of truth
- `home-reference.html` is the final design: the desktop layout plus the phone layout at 760px and below, with all motion. Match it exactly. Its markup is inline-styled canvas output, so rebuild it as clean Astro components and shared variables rather than copying the inline styles.
- `tokens.json` holds the brand colors: oak #023A1D, cream #EADDC5, gold #C9A15A, brown #4E220C, charcoal #1A1C18, leaf #166B3B, paper #F4EDE0. **Ignore its font weights.** The website uses Newsreader at weight 300 for display text (letter-spacing -0.02em, optical sizing on) and Libre Franklin at weight 300 for body text and 500 for labels and buttons. Load both from Google Fonts or self-host them.
- `assets/`: hero-backyard.jpg (the bright dot is already removed), brothers.jpg, logo-horizontal-cream.svg and tree-cream.svg (the watermark).
- Design canvas: https://claude.ai/artifact/9LdzfpETvF6T2DFactwM5L (the "Home page" desktop and phone artboards).

## Components (build these first)
BaseLayout, Header (desktop nav plus phone dropdown), Hero, ServicesCard (with a ServiceRow component), About, ContactBand, Footer, CallBar (phone only), and Button (variants: call, ghost, call-light).

## Page order
1. **Hero**
   - Golden-hour photo with a rgba(26,28,24,.45) overlay.
   - Header: logo; nav with Home, Services, About and Partner With Us (https://apps.mangbrothers.com/connect/, same tab); then the phone link.
   - Text: eyebrow, h1, subline, then two buttons, the call button and "Our services" (which jumps to #services).
2. **Services** (#services)
   - An oak card that overlaps the hero by 60px.
   - Band of jump links to each service.
   - Sticky intro box on the left.
   - Five rows on the right, each with name, dotted leader, price, status and description.
3. **About** (#about): the photo frame (keep its crop values) beside the text and the signature.
4. **Contact band** (#contact): heading, the big gold phone number (a tel: link), "Send a text" (sms:), and the hours.
5. **Footer.**

## Hard-coded content (confirmed by Ethan)
Season statuses are hard-coded for the MVP; automating them is deferred to the redesign.

| Service | Price | Status | Note |
|---|---|---|---|
| Lawn care | From $55 | In season now | April to November |
| Fall cleanup | From $435 | In season now | Visits through November |
| Snow removal | From $550 | Booking now | Starts November 1 |
| Christmas lights | From $645 | Booking now | Installed in November |
| Landscaping | Free on-site quote | In season now | April to November |

Copy exactly as written in the reference. Russel's voice has no contractions, no em dashes and no exclamation points.

## Phone layout (760px and below)
- **Header:** logo plus a dropdown menu (built with `details`/`summary`). Close it with JavaScript after a link is tapped.
- **Hero:** 560px tall, text centered. On phones, paint the photo as a CSS background on the hero section rather than as an `<img>` with a zoom animation. Safari draws a bright green line at the edge of a scaled image layer. Also drop the blur from the hero text animation on phones. Hide the eyebrow and the "Our services" button; keep the call button.
- **Services card:** edge to edge, with rounded top corners and a -24px overlap. The intro shows only the heading and the "This season" note.
- **Service rows:** collapsible. Render them as `<details open>`, then remove `open` on phone widths when the page loads. On desktop, keep them open and take the summary out of keyboard focus (`tabindex=-1`) so they can't be collapsed.
- **About:** the photo goes full width.
- **Contact band:** the heading, the number and the hours only.
- **Footer:** logo, phone, email and service area only. Bottom padding is 120px so the call bar doesn't cover it.
- **Call bar:** fixed to the bottom with Call (twice as wide) and Text. It's hidden until the visitor scrolls past the hero; use a scroll-driven animation, or an IntersectionObserver fallback for browsers without it.

## Motion (all in the reference CSS under "/* motion */")
- **Hero arrival:** the photo scales down from 1.06 to 1 over 2.2s; the text rises in sequence, sharpening from a blur; the services card rises last.
- **Nav:** a gold underline draws in from the left. Home's underline draws in on load and retracts while another link is hovered.
- **Service rows:** on desktop hover, the name and price shift slightly and the leader turns gold. The "In season now" dots pulse.
- **Scroll reveals:** use `animation-timeline: view()` inside `@supports`, so content stays visible where it isn't supported.
- **Smooth scrolling:** `scroll-margin-top` is 80px on desktop and 48px on phones.
- **Reduced motion:** only the hero text fade remains.

## Pre-launch
- **Images:** export at web sizes (hero around 2400px wide plus a phone size, AVIF or WebP with a JPEG fallback), give every image width and height, and lazy-load the About photo.
- **Search and sharing:**
  - Page title: "Mangiapane Brothers Lawn & Snow | Livonia and Westland, MI".
  - A meta description.
  - A favicon made from the tree icon.
  - A sharing image made from the hero photo.
  - A sitemap.
- **Accessibility:** add a skip link. Tap targets must be at least 44px; the reference already sizes them.
- **Testing:** check on iOS Safari and on desktop, then run Lighthouse.
- **Domain:** lower the TTL at GoDaddy first, add the CNAME file, then switch DNS and turn on Enforce HTTPS.
- **Analytics (optional):** track clicks on tel: links.
