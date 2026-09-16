# For Yunji ❤️🍀 — 3 Year Anniversary Invite

A tiny interactive "gift" web app. No build step, no backend: `index.html` + `style.css` + `app.js`.

## Edit the content

Everything personal lives in the `CONFIG` block at the top of `app.js`:
names, emails, date text, the start-time options, the six itinerary chapters (2 options each),
the locked Lawry's dinner, the closing line, and the secret-heart message.

- Drop a photo named `photo.jpg` in this folder to show it in the secret-heart modal (tap the 💗 in the corner 3 times).
- `favorite: true` on an option is where "🎲 pick for me" lands.
- `decoy: true` makes a fake choice that snaps back to the `locked` option.

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173. Add `?reset` to the URL to wipe saved progress
(or tap the "made with ❤️" footer 5 times).

## Deploy to GitHub Pages

1. Create a new repo on GitHub (public on a free plan; Pages on private repos needs GitHub Pro).
2. In this folder:
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. After a minute the site is live at `https://<you>.github.io/<repo>/`.

Every later change is just `git add -A && git commit -m "tweak" && git push`.

## Make it feel like an app on her iPhone

Open the link in Safari → Share → **Add to Home Screen**. It gets its own icon
(`icon-512.png`) and opens full-screen without the browser bar.

## How you get her answers

When she taps **RSVP: yes!!** the ticket appears with two buttons:
- **save ticket** downloads the ticket as a PNG.
- **send to Jessup** opens her mail app with the full itinerary pre-filled to `yourEmail` in CONFIG
  (cc'd to her if she typed her email).

If you later want it fully automatic (no mail app), swap the `btn-send` handler for a
`fetch()` POST to a free [Formspree](https://formspree.io) endpoint.
