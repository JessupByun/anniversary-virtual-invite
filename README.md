# For Yunji ❤️🍀 — Year 3 Anniversary Invite

A small interactive invite. No build step, no backend: `index.html` + `style.css` + `app.js`.

## Flow

gift box → bouquet → photo album → envelope (Oct ~~20~~ 16) → "when should we leave?" → loading bar → 8 chapters → ticket → RSVP.

Every chapter except dessert is locked: tapping the alternative shakes the card, shows a message, and confirms the real stop. Dessert is a genuine three-way pick.

## Edit the content

Everything personal lives in the `CONFIG` block at the top of `app.js`: names, email, the date, the start-time options, the album (order + captions), the chapters (stops, decoys, blurbs, teasing lines), the loader lines, the closing line, and the secret-heart photo.

- **Album photos** are web-sized copies in `img/album/`. Originals stay in `photos/` (git-ignored).
- **Place photos** are `img/places/<option id>.jpg`. Drop in a new file with the same name to replace one. Credits for the few Wikimedia Commons shots are in `img/places/CREDITS.md`.
- After editing, bump the `?v=` number on the `app.js` / `style.css` links in `index.html` so phones don't keep the old version cached.

To add a photo: put the original in `photos/`, then

```bash
python3 -c "from PIL import Image, ImageOps; im=ImageOps.exif_transpose(Image.open('photos/NAME.jpg')).convert('RGB'); im.thumbnail((1400,1400)); im.save('img/album/NAME.jpg', quality=78)"
```

## Run locally

```bash
python3 -m http.server 5173
```

Open http://localhost:5173. Add `?reset` to the URL to start over (or tap the footer 5 times).

## Deploy (GitHub Pages)

Repo: https://github.com/JessupByun/anniversary-virtual-invite

Settings → Pages → Source: "Deploy from a branch" → `main` / `/ (root)` → Save.
Live at https://jessupbyun.github.io/anniversary-virtual-invite/ about a minute later. Every `git push` redeploys.

## On her phone

Open the link in Safari → Share → **Add to Home Screen**. It gets its own icon and opens full-screen.

## Her answers

After RSVP: **save ticket** downloads the ticket as a PNG; **send to Jessup** opens her mail app with the itinerary pre-filled to `yourEmail` in CONFIG.
