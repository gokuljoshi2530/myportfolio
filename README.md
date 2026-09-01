# Gokul Joshi — Video Editor Portfolio

A premium black-&-gold creative-agency portfolio for a professional video editor.
Built with **Next.js (App Router) · Tailwind CSS v4 · Framer Motion · Lenis**.

Includes: cinematic hero with background video, About, filterable Portfolio with a
drag-to-compare Before/After grade + video lightbox, animated Service cards, a
featured Showreel player, an auto-playing Testimonials carousel, animated stat
counters, and a Contact section (form + WhatsApp / Email / Call). Plus a loading
animation, custom cursor, scroll-progress bar, smooth scrolling, magnetic buttons
and animated text reveals.

> **Note:** the name **“Gokul Joshi”** was inferred from the contact email. If that's
> not right, change it in **one place** — `name` / `firstName` in `lib/data.js`.

---

## Run it locally

Requires **Node.js 18.18+** (Node 20+ recommended).

```bash
npm install      # first time only
npm run dev      # start the dev server
```

Open **http://localhost:3000**.

### Production build

```bash
npm run build
npm start
```

---

## Make it yours — edit `lib/data.js`

Almost all content lives in **`lib/data.js`**:

| What | Where |
| --- | --- |
| Name, role, email, phone, WhatsApp, location, site URL | `siteConfig` |
| Social links | `socials` |
| Hero / Showreel / About / Before-After media | `media` |
| Portfolio projects (title, category, client, thumbnail) | `portfolioItems` |
| Services | `services` |
| Stats / counters | `stats` |
| Testimonials | `testimonials` |
| About expertise list | `expertise` |

### Replacing images & videos

All placeholders are external (picsum.photos / pravatar / a sample MP4) so the site
looks complete out of the box. To use your own:

- **Easiest:** drop files into the **`public/`** folder and reference them with a
  leading slash, e.g. `"/videos/showreel.mp4"` or `"/portfolio/project-1.jpg"`.
- Or paste any direct image/video URL.

Key things to swap:
- `media.heroVideo` + `media.heroPoster` — the hero background reel.
- `media.showreelVideo` + `media.showreelPoster` — the featured showreel.
- `media.about` — your photo.
- `media.beforeAfter.before` / `.after` — the colour-grading comparison.
- Each `portfolioItems[].image` — project thumbnails.

> Plain `<img>`/`<video>` tags are used, so any URL or `/public` path works with no
> extra config.

---

## Contact form

The form has **no backend** — on submit it opens the visitor's email client
pre-filled to `gokuljoshi678@gmail.com` (via `mailto:`). To use a hosted form
service instead (e.g. Formspree), point the `<form>` in `components/Contact.js` at
your endpoint:

```jsx
<form action="https://formspree.io/f/your-id" method="POST">
```

…and remove the custom `onSubmit`.

---

## Deploy

Works anywhere Next.js runs. Easiest is **Vercel**:

1. Push this folder to a Git repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — no config needed.
3. Set your real domain and update `siteConfig.url` (used for SEO / sitemap).

---

## Tech & features

- **Next.js App Router** + **React 19**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** — reveals, carousel, counters, magnetic buttons, page loader
- **Lenis** — luxury inertia smooth scrolling
- **react-icons** — iconography
- SEO: metadata, Open Graph, Twitter card, JSON-LD Person schema, `sitemap.xml`,
  `robots.txt`
- Fully responsive, custom cursor (desktop), reduced-motion friendly
