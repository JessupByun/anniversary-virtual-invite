# Anniversary Virtual Invite

A personal project: an interactive, mobile-first invitation I built for our anniversary date. It plays like a small app on her phone. She opens a gift, receives an animated bouquet, swipes through a photo album, opens an envelope, picks a departure time, and then "plans" the day chapter by chapter. Most of the stops were already booked, so the choices are an illusion; picking the alternative shakes the card and confirms the real plan with a teasing message. One chapter is a genuine choice. The result is assembled into a ticket she can save as an image or email back to me.

Built from scratch in plain HTML, CSS and JavaScript over a few evenings. No framework, no build step, no backend. Hosted on GitHub Pages for the day of the invite and taken down afterwards.

> The personal content (names, photos, captions, itinerary) is not in this repository. The code loads it from a git-ignored `config.js`; a placeholder `config.example.js` is included so the project runs end to end.

## Technical highlights

- **Vanilla stack.** Three files. One external library (html2canvas from a CDN) for the save-as-PNG export.
- **Content-driven.** All copy, options, decoys, photos and captions live in a single `CONFIG` object. Chapters, options and the ticket render from data, so changing the plan means editing the config, not the markup.
- **Screen router.** A small `go()` state machine swaps `<section>` screens with enter/leave animations, guards against double-taps mid-transition, and persists progress to `localStorage` so a closed tab resumes where it left off.
- **Procedural SVG bouquet.** Tulips, peonies, ranunculus, daisies, delphinium, baby's breath, eucalyptus and a kraft-paper wrap are generated in JavaScript from path and gradient primitives. Stems draw in with `stroke-dashoffset`, blooms scale in on a staggered timeline, and every flower is tappable.
- **Canvas particles.** Confetti and fireworks on a fixed `<canvas>` with a `requestAnimationFrame` loop that stops itself when idle.
- **The "no" button.** Re-parented to `<body>` on first hover so no ancestor transform can affect it, then moved with a clamped spring so it always lands inside the viewport, hopping away from the cursor.
- **Envelope reveal.** An SVG stroke draws through the wrong date and a handwritten correction pops in, sequenced with CSS keyframes.
- **Design.** Fraunces + DM Sans, a warm paper palette with drifting color washes and a grain overlay, a ticket layout with tear lines. Mobile-first: safe-area insets, `100dvh`, scroll-snap album, iPhone "Add to Home Screen" via a web manifest.
- **Link preview.** Open Graph tags so the link unfurls as a card in iMessage.

## Structure

```
index.html            screens (sections)
style.css             design tokens, layout, animations
app.js                router, bouquet generator, particles, chapter logic, ticket
config.example.js     placeholder content (copy to config.js)
manifest.webmanifest  PWA manifest
icon.svg / icon-512   app icon
```

Ignored: `config.js`, `img/album/`, `img/places/`, `photos/`, `og.jpg`.

## Run locally

```bash
cp config.example.js config.js   # then edit
python3 -m http.server 5173
```

Open http://localhost:5173. Append `?reset` to clear saved progress.

## Deploy

GitHub Pages, deploy-from-branch. Because the images and `config.js` are ignored, deploying from this repo alone serves the placeholder version. For the real thing, the full folder was pushed from a private branch for the day and removed afterwards.

## Credits

A few placeholder venue photos were sourced from Wikimedia Commons under CC licenses.
