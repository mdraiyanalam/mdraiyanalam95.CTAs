# raiyan.contact

A tap-to-call contact hub for Md Raiyan Alam — an alternative to [linktr.ee/raiyan_contact](https://linktr.ee/raiyan_contact).

A visitor can start a call with a tap on the **Call me** button. There is no need to copy or type the number. WhatsApp, email, and other profiles work the same way — one touch.

Live: [mdraiyanalam.github.io/mdraiyanalam95.CTAs](https://mdraiyanalam.github.io/mdraiyanalam95.CTAs/)

This is **not** a portfolio. It is only a contact / link hub. The portfolio is [mdraiyanalam.github.io/mdraiyanalam](https://mdraiyanalam.github.io/mdraiyanalam/).

## Tech

- [Next.js](https://nextjs.org/) (App Router) + TypeScript, exported as a static site
- Icons from `react-icons` (Font Awesome 6), fonts via `next/font` (Inter, Noto Naskh Arabic, Noto Sans Bengali)
- Plain CSS in `app/globals.css` — brand color `#9f51f0`, lavender-to-white gradient

## Buttons

| Button | Opens |
| --- | --- |
| Call me | Phone dialer (`tel:+8801722465849`) |
| WhatsApp | Username `@mdraiyanalam95` |
| Email | `mdraiyanalam95@gmail.com` |
| LinkedIn | linkedin.com/in/mdraiyanalam |
| GitHub | github.com/mdraiyanalam |
| Portfolio | mdraiyanalam.github.io/mdraiyanalam |
| Fiverr | fiverr.com/users/mdraiyanalam |
| Spark.Play | facebook.com/sparks.play.bd |

To change a link, edit `app/links.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/mdraiyanalam95.CTAs/

`npm run build` writes the static site to `out/`.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site lives under `/mdraiyanalam95.CTAs/`. To host it somewhere else, set `NEXT_PUBLIC_BASE_PATH` (use an empty string for a root domain).

## Notes

- Tab icon is the “R” mark in `app/icon.svg`.
- If `https://wa.me/mdraiyanalam95` does not open, use `https://wa.me/8801722465849`.
