# RINET Center — Website

A modern, bilingual (EN/FR), responsive, and accessible website for **RINET Center** — a Francophone immigrant entrepreneurship and integration hub based in Ottawa, Canada.

Live: https://www.rinetcenter.com

> **Positioning**
> - 🇬🇧 *A Francophone Immigrant Entrepreneurship & Integration Hub in Canada*
> - 🇫🇷 *Un pôle d'entrepreneuriat et d'intégration économique pour les immigrants francophones au Canada*

The site is designed to answer three questions in under 10 seconds:
1. **Who** RINET helps
2. **How** RINET helps
3. **What action** the visitor should take next

---

## ✨ Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSR + static generation, file-based routing, strong SEO defaults, Vercel-friendly. |
| Language | **TypeScript 5** | Type-safe content and component contracts. |
| Styling | **Tailwind CSS 3.4** | Consistent design system, zero runtime, easy to maintain. |
| i18n | **Built-in `[locale]` routing** | No extra dependency; FR/EN paths under `/en` and `/fr`. |
| Lint | **ESLint (next/core-web-vitals)** | Catches accessibility and React issues. |
| Deploy target | **Railway** | Matches the Rusinga production ecosystem and uses the included `railway.json`. |

> No CMS dependency: all content lives in `/content/*.ts`, editable by anyone comfortable with text.

---

## 🗂 Project structure

```
RINET-CENTER/
├── app/
│   ├── layout.tsx               # Minimal root (delegates html/body to [locale])
│   ├── page.tsx                 # Root → redirects to /en
│   ├── globals.css              # Tailwind base + global resets
│   ├── sitemap.ts               # Bilingual sitemap
│   ├── robots.ts                # robots.txt
│   └── [locale]/
│       ├── layout.tsx           # Sets <html lang> + Header/Footer
│       ├── page.tsx             # Home
│       ├── about/page.tsx
│       ├── programs/page.tsx
│       ├── impact/page.tsx
│       ├── events/page.tsx
│       ├── get-involved/page.tsx
│       ├── donate/page.tsx
│       └── contact/page.tsx
├── components/                  # 16 reusable UI components
├── content/                     # Centralized bilingual content
│   ├── site.ts                  # Dictionaries (EN/FR) for nav, hero, sections
│   ├── programs.ts              # 6 programs in EN/FR
│   ├── impact.ts                # Impact stats (placeholders)
│   ├── partners.ts              # Partner organizations
│   ├── testimonials.ts          # Placeholder testimonials
│   └── events.ts                # Past + signature events
├── i18n/config.ts               # Locales: en (default), fr
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── AUDIT.md                     # Audit of the current live site + decisions
└── CHANGELOG_OPTIMIZATION.md    # What was created, improved, and what's next
```

---

## 🚀 Getting started

Requires **Node.js 22**.

```bash
# 1. Install
npm install

# 2. Run locally
npm run dev          # http://localhost:3000  (redirects to /en)

# 3. Build for production
npm run build
npm run start

# 4. Lint
npm run lint
```

---

## 🌍 Bilingual architecture

- Both languages live under locale-prefixed routes: `/en/...` and `/fr/...`.
- The root URL `/` redirects to `/en`.
- The language switcher (in the header) preserves the current page when switching locales.
- All copy is centralized in `content/site.ts` (UI strings) and the typed data modules (`programs.ts`, `impact.ts`, etc.).
- Adding a third language = add it to `i18n/config.ts` and provide its translations in the dictionaries.

`hreflang` alternates and per-locale Open Graph metadata are automatically generated in `app/[locale]/layout.tsx`.

---

## 📝 Content to validate

Some content is intentionally placeholder-quality and **must be confirmed by the RINET Center team before going live**:

- **Impact numbers** in `content/impact.ts` are working estimates (50+ entrepreneurs supported, 20+ workshops, 10+ partners, 3+ years). Replace with verified figures from your records.
- **Testimonials** in `content/testimonials.ts` are illustrative — replace with real quotes (with author consent).
- **Team member titles** in `content/team.ts` — 12 portraits are in place; the *role* field is currently a generic placeholder ("Team member" / "Membre de l'équipe"). Each person should confirm their official title.
- **Donation processing**: the Donate page currently routes donors to `contact@rinet.center`. Wire Stripe / Donorbox / CanadaHelps when ready.
- **Contact form**: submits to client-side state only. Connect to a real backend (Formspree, Resend, n8n, Mailchimp, your CRM) before launch.
- **Charitable status**: the Donate FAQ says status is pending — update when confirmed.

Search the codebase for the word `TODO`, `placeholder`, or `working` to find every spot.

---

## 🎨 Brand & design

| Token | Hex | Usage |
|---|---|---|
| `brand-navy` | `#0B2545` | Primary brand color, headers |
| `brand-blue` | `#13315C` | Hover / depth |
| `brand-accent` | `#1E5AA8` | Interactive accents, CTAs |
| `brand-red` | `#C8102E` | Donate CTA, "Canada" accent |
| `brand-gold` | `#E0A800` | Entrepreneurial accents |
| `brand-green` | `#1F7A5C` | Social impact accents |
| `brand-surface` | `#F6F8FB` | Section backgrounds |
| `brand-line` | `#E5E9F0` | Borders |

Typography uses system + display fallback (`Plus Jakarta Sans` if available locally; falls back gracefully). To self-host a font, add it to `app/layout.tsx` via `next/font/google` or `next/font/local`.

---

## ♿ Accessibility

- Skip-to-content link on every page
- Visible focus rings (`focus-visible:ring`) on all interactive elements
- ARIA labels on icon buttons, language switcher, navigation, and sections
- Semantic landmarks: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` with `aria-labelledby`
- Form labels properly associated; `aria-describedby` on the form helper text
- `prefers-reduced-motion` honoured in `globals.css`
- Color contrast meets WCAG AA on all text/background pairs

Target Lighthouse Accessibility score: **95+**.

---

## 🔎 SEO

- Per-page `title` + `description` via `generateMetadata`
- `metadataBase` set to `https://www.rinetcenter.com`
- `sitemap.xml` and `robots.txt` generated by Next.js routes
- `hreflang` alternates for `en`, `fr`, `x-default`
- Open Graph + Twitter card defaults
- Semantic heading hierarchy (one `<h1>` per page, nested `<h2>`/`<h3>`)
- Clean, descriptive URLs

---

## 🚢 Deployment

### Railway (this project's target)

The Rusinga ecosystem (and this project) ship on **Railway**. The repo includes the config Railway needs out of the box:

- [`railway.json`](railway.json) — Nixpacks builder, `npm run start` as the start command, healthcheck on `/en`, automatic retry on failure.
- [`.nvmrc`](.nvmrc) — pins Node 22 to match the rest of the Rusinga stack.
- `package.json` — `engines.node 22.x`, and `next start` honours Railway's injected `PORT` env var automatically.

**To deploy on Railway:**

1. In your Railway project, **New → Deploy from GitHub repo → `RusingAcademy/RINET-CENTER`**.
2. Railway auto-detects Next.js via Nixpacks. No env vars are required for v1.
3. Add a domain: bind `www.rinetcenter.com` (and optionally `rinetcenter.com`) in Settings → Networking.
4. Railway will build (`npm install` → `npm run build`) and start (`npm run start`) automatically on every push to `main`.

> **Healthcheck:** set to `/en` (the default English homepage). The root `/` is a 307 redirect to `/en`, so Railway's HTTP healthcheck needs the explicit path.

### Self-host (any Node host)

```bash
npm run build
PORT=3000 npm run start
```

Put a reverse proxy (Nginx, Caddy) in front, terminating TLS.

### Vercel (alternative, not the chosen target)

Works out of the box — import the repo at [vercel.com/new](https://vercel.com/new) and pick the Next.js preset. Kept here only as a fallback option; **Railway is the production target for this project**.

---

## 🧭 Next milestones

See `CHANGELOG_OPTIMIZATION.md` for the full punch list — highlights:

- Wire the contact form to a real backend
- Add real donation processing (Stripe / Donorbox / CanadaHelps)
- Replace placeholder impact numbers with verified data
- Add real photos & video to the home hero
- Publish the team and partner logos with consent
- Set up Plausible / GA4 (privacy-respecting analytics)

---

## 📜 License

© RINET Center. All rights reserved.
