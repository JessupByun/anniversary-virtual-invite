# Anniversary Virtual Invite

An interactive, mobile-first invitation built as a single static page. No framework, no build step, no backend: `index.html`, `style.css`, `app.js`.

**Live:** https://jessupbyun.github.io/anniversary-virtual-invite/

## What it does

A guided, one-screen-at-a-time flow. The recipient opens a gift, receives an animated bouquet, swipes through a photo album, opens an envelope, picks a departure time, sits through a fake loading bar, and then "builds" the date itinerary by choosing between options. Most stops are already decided; picking the alternative triggers a shake, a message, and the real stop is confirmed instead. One chapter is a genuine choice. The result is assembled into a ticket that can be saved as an image or emailed.

## Technical highlights

- **Vanilla stack.** Plain HTML/CSS/JS, one external library (html2canvas from a CDN) for the save-as-PNG export.
- **Content-driven.** All copy, options, decoys, photos, and captions live in one `CONFIG` object at the top of `app.js`. Chapters render from data, so adding a stop or a third option means editing the config, not the markup.
- **Screen router.** A small `go()` state machine swaps `<section>` screens with enter/leave animations, guards against double-taps mid-transition, and persists progress to `localStorage` so a closed tab resumes where it left off.
- **Procedural SVG bouquet.** Tulips, peonies, ranunculus, daisies, delphinium, baby's breath, eucalyptus and a kraft wrap are generated in JS from path/gradient primitives. Stems draw in with `stroke-dashoffset`, blooms scale in on a staggered timeline, and each flower is tappable.
- **Canvas particle system.** Confetti and fireworks run on a fixed `<canvas>` with a lightweight `requestAnimationFrame` loop that stops itself when idle.
- **"No" button that can't be caught.** Re-parented to `<body>` on first hover so no ancestor transform can affect it, then moved with a clamped JS spring so it always stays inside the viewport.
- **Envelope reveal with a scratched-out date.** An SVG stroke draws through the old date and a handwritten replacement pops in, sequenced with CSS keyframes.
- **Editorial design system.** Fraunces + DM Sans, a warm paper palette with drifting color washes, a grain overlay, and a ticket layout with tear lines. Mobile-first with safe-area insets, `100dvh`, and scroll-snap for the album.
- **PWA-ish.** Web manifest and Apple touch icon so "Add to Home Screen" opens it full-screen with its own icon.
- **Cache busting.** `?v=` query strings on the script and stylesheet so phones pick up new deploys immediately.

## Structure

```
index.html            screens (sections) + templates
style.css             design tokens, layout, animations
app.js                CONFIG, router, bouquet generator, particles, chapter logic, ticket
img/album/            web-sized photos for the album
img/places/           one photo per itinerary option (<option id>.jpg)
manifest.webmanifest  PWA manifest
icon.svg / icon-512   app icon
```

Original full-size photos are kept out of the repo (`photos/` is git-ignored); the web copies are resized with Pillow to a 1400px long edge.

## Run locally

```bash
python3 -m http.server 5173
```

Open http://localhost:5173. Append `?reset` to clear saved progress.

## Deploy

GitHub Pages, deploy-from-branch (`main`, root). Every push to `main` rebuilds the site.

## Credits

A few placeholder venue photos come from Wikimedia Commons under CC licenses; attributions are in `img/places/CREDITS.md`.
