# stanley-rv

Source for [claytonzo.github.io/stanley-rv](https://claytonzo.github.io/stanley-rv/) —
a public overview site for **Stanley**, a 2020 Winnebago Travato 59GL National Park
Edition, focused on its Home Assistant / smart-home setup.

Plain static HTML/CSS/JS, no build step. Deployed via GitHub Pages from `main` (root).

- `index.html` — page structure
- `css/style.css` — styling
- `js/main.js` — hotspot data, tooltip behavior, tech-card content, scroll reveal
- `images/` — hero photo + QR code

To preview locally:
```bash
python3 -m http.server 8000
```
then open `http://localhost:8000`.

Content intentionally stays high-level on security/network specifics (no MACs, IPs,
serials, camera placement, or arm/disarm schedules) since this page is meant to be
shared publicly.
