# How to edit this website (read me first)

This is the website for **Kyal Neil Currant** — live at **https://www.kyalncurrant.com**.

If you are an AI agent (Manus, Claude Code, or similar) asked to make a simple
content change, follow this file exactly. It keeps changes safe and the site online.

---

## How deploying works (important)

- Hosting is **Cloudflare Pages**. A commit to the **`main`** branch automatically
  rebuilds and publishes the site — live in about **2–3 minutes**.
- **Do NOT run any build or deploy commands yourself** (no `wrangler`, no manual
  Cloudflare steps). Just commit to `main` and the deploy happens on its own.
- If a build ever fails, the **previous version stays live** — a bad commit cannot
  take the site down. Nothing is lost.

---

## The four common edits — where each one lives

| Change | File | Exactly where |
|---|---|---|
| Home page wording | `client/index.html` | Any headline or paragraph on the landing page |
| Event page wording | `client/premierspeakerevent.html` | Any copy on the Premier Speaker Event page |
| The "Next event" date | `client/index.html` | The line containing `Next event:` |
| Eventbrite ticket link | `client/premierspeakerevent.html` | The **Reserve Your Seat** button (the `href` to `eventbrite.com.au`) |

Current values, for reference (verify against the file before editing):

- Date line reads: `Next event: Thursday 24 September · Held monthly · From $15 (Early Bird)`
- Ticket link points to: `https://www.eventbrite.com.au/e/the-premier-speaker-event-tickets-1996187721210`

---

## How to make the change

1. Open the correct file on the `main` branch.
2. Change **only** the exact words / date / link requested. Leave every HTML tag and
   everything else exactly as it is.
3. Commit that single change directly to `main` with a short, clear message.
4. Wait ~3 minutes, open https://www.kyalncurrant.com, and confirm the change shows.

---

## Rules — do not break these

- Change **text, dates, and links only**.
- **Never** touch build settings, config files (`vite.config.ts`, `package.json`,
  `functions/`, `_redirects`, `.gitignore`), file names, or the videos in
  `client/public/videos/`.
- **Never** edit anything in `client/src/` — those `.tsx` React files are unused,
  dead scaffold and are **not** part of the live site. Editing them does nothing.
- **Never** delete or move files. **Never** force-push or rewrite git history.
- If the live site shows an error or looks broken after committing, **STOP** and tell
  the site owner (Shaun Tucker). The previous version stays live, so recovery is instant.

---

## Project structure (for context)

- Pages are plain static HTML in `client/*.html`
  (`index.html`, `premierspeakerevent.html`, `podcast.html`, `client-wins.html`,
  `be-that-speaker.html`, `privacy.html`, `terms.html`).
- Shared styles: `client/styles.css` (with a duplicate at `client/public/styles.css` —
  if you ever change CSS, keep both in sync). Shared script: `client/site.js`
  (duplicated at `client/public/site.js`).
- Build command (run automatically by Cloudflare, not by you):
  `npx pnpm run build:railway` → output `dist/public`.
- Contact email used across the site: `kyalcurrantcoaching@gmail.com`.
