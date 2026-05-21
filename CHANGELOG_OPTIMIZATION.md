# CHANGELOG — Optimization

This is the build log for the initial bilingual relaunch of rinetcenter.com.
Format: every entry tied to a concrete file or measurable improvement.

---

## v1.1.0 — Authentic photography & team (2026-05-20)

### 📁 Assets added (`/public/images/`)

- `brand/logo.jpg` — official RINET Center logo (used in Header and Footer).
- `hero/hero-banner.jpg` — home page hero background (gradient overlay tuned for legibility).
- `team/*.png` — 12 team portraits at 400×400, sourced from the current rinetcenter.com.
- `partners/*.{jpg,png}` — Scotiabank, RBC, Government of Ontario, Rusinga Academy logos.
- `context/*.jpg` — 5 context photographs (business meeting, team, conference, etc.) used as section accents.

All images were resized via Wix CDN parameters before saving to keep the repo lean (total ~5 MB).

### 🧱 Content modules

- New `content/team.ts` — bilingual list of 12 team members with name, role (placeholder, to be confirmed), photo path, and slug.
- `content/partners.ts` — extended with `logo` field; `PartnerLogo` component now renders the actual image with optimization via `next/image`.

### 🧩 Components

- New `TeamMemberCard` — accessible portrait card with `next/image` and hover treatment.
- `Header` and `Footer` — replaced placeholder "R" mark with the real RINET logo.
- `Hero` — accepts an optional `backgroundImage` + alt, layered behind a brand-tinted gradient.
- `PartnerLogo` — image-aware; falls back to text wordmark when no logo is provided.

### 🖼 Page updates

- Home (`/`) — hero now uses `hero-banner.jpg`; partners grid renders real logos.
- About — hero uses `context/business-team.jpg` behind the navy overlay; a new 4-column grid renders all 12 team members.

### ⚠️ Still to validate

- Team member **roles/titles** in `content/team.ts` — currently set to "Team member" / "Membre de l'équipe" as a respectful placeholder. Each member should confirm their official title.
- Photo licensing / usage rights — the photos were sourced from the publicly visible rinetcenter.com (Wix CDN). RINET Center should confirm rights to redistribute them on this new site.

---

## v1.0.0 — Initial bilingual relaunch (2026-05-20)

### 📁 Files created

**Project configuration**
- `package.json` — Next.js 14 + TypeScript + Tailwind dependencies, scripts.
- `tsconfig.json` — strict TS, `@/*` path alias.
- `next.config.mjs` — strict React mode, AVIF/WebP, no `x-powered-by`.
- `tailwind.config.ts` — brand palette + typography + container.
- `postcss.config.mjs`, `.eslintrc.json`, `.gitignore`, `next-env.d.ts`.

**Routing & layout**
- `app/layout.tsx` — root pass-through; metadata defaults.
- `app/page.tsx` — `/` → `/en` redirect.
- `app/globals.css` — Tailwind base, selection, reduced-motion.
- `app/[locale]/layout.tsx` — `<html lang={locale}>`, hreflang alternates, OG locale.
- `app/sitemap.ts` — bilingual sitemap (16 routes).
- `app/robots.ts` — allow-all + sitemap reference.

**Pages (8 × 2 locales = 16 rendered pages)**
- `app/[locale]/page.tsx` — Home (hero, who we help, programs, impact, partners, testimonials, final CTA).
- `app/[locale]/about/page.tsx` — Mission, vision, values, why RINET, team note.
- `app/[locale]/programs/page.tsx` — Six detailed program articles with outcomes.
- `app/[locale]/impact/page.tsx` — Stats, areas served, impact pillars, reports.
- `app/[locale]/events/page.tsx` — Upcoming / signature / past, event types.
- `app/[locale]/get-involved/page.tsx` — Six engagement paths.
- `app/[locale]/donate/page.tsx` — Why, where it goes, transparency, CTA, FAQ.
- `app/[locale]/contact/page.tsx` — Profile-aware form + direct reach.

**Content (centralized, bilingual)**
- `content/site.ts` — Master dictionary EN/FR (nav, common, home, about, programs, impact, events, get-involved, donate, contact, footer).
- `content/programs.ts` — Six programs in EN/FR.
- `content/impact.ts` — Four headline stats EN/FR (placeholders).
- `content/partners.ts` — Five partners with URLs.
- `content/testimonials.ts` — Three placeholder testimonials EN/FR.
- `content/events.ts` — Past, signature, upcoming event lists (typo-corrected).

**Components (16 reusable)**
- `Container`, `Button`, `SectionHeader`, `LanguageSwitcher`
- `Header`, `Footer`
- `Hero`, `CTASection`
- `ProgramCard`, `ImpactStat`, `PartnerLogo`, `TestimonialCard`
- `ValueCard`, `InvolvementCard`, `EventCard`, `ContactForm`

**i18n**
- `i18n/config.ts` — locale list, default, type guard.

**Documentation**
- `README.md` — full operations guide.
- `AUDIT.md` — audit of current live site + decisions.
- `CHANGELOG_OPTIMIZATION.md` — this file.

---

### 🛠 UX improvements vs. current rinetcenter.com

- One H1 per page; clear visual hierarchy.
- Single, action-oriented hero ("Helping Francophone immigrant entrepreneurs launch, grow, and thrive in Canada") with three explicit CTAs.
- Consolidated About page (replaces 3 separate Who We Are sub-pages).
- New Programs index page — six comparable cards, deep-link anchors.
- New Impact page — stats + pillars + areas + reports placeholder.
- Events split into upcoming / signature / past, with explicit empty-state copy when no upcoming events are confirmed.
- Get Involved hub with six clear paths (Mentor / Volunteer / Partner / Sponsor / Donate / Event).
- Donate page with why, allocation, transparency, FAQ — and a working `mailto:` interim path.
- Contact form segmented by visitor profile (entrepreneur, partner, donor, volunteer, media).
- Donate CTA pinned in the header, repeated in every page's final-CTA strip, and in the footer.
- Sticky, accessible header with skip-link and visible focus rings.

### 🔎 SEO improvements

- `generateMetadata` per page: locale-aware title and description.
- `metadataBase` set to `https://www.rinetcenter.com`.
- `app/sitemap.ts` — 16 URLs (8 pages × 2 locales), priority-tuned.
- `app/robots.ts` — clean robots policy with sitemap reference.
- `hreflang` alternates: `en`, `fr`, `x-default`.
- Open Graph + Twitter card defaults at the root.
- Targeted, naturally placed keywords in headings and body copy.
- Clean, descriptive URLs in both locales.

### ♿ Accessibility improvements

- Skip-to-content link in `Header` (sr-only → focus visible).
- WCAG-AA color contrast across the entire palette (navy on white, white on navy, accent blue on white).
- Visible `focus-visible` rings on every interactive element.
- ARIA labels on icon-only controls (mobile menu, language switcher, partner logos).
- Semantic landmarks: `<header>`, `<main id="main">`, `<footer>`, `<nav aria-label>`, `<section aria-labelledby>`.
- Form labels properly associated; helper text via `aria-describedby`.
- `prefers-reduced-motion` honoured globally.
- Mobile menu uses `aria-expanded` + `aria-controls`.

### ⚡ Performance posture

- Tailwind purges unused styles → very small CSS bundle.
- Server components by default; only `Header`, `LanguageSwitcher`, and `ContactForm` are client.
- Static generation via `generateStaticParams` over all locales.
- No third-party JS in v1.
- Images can drop in via `next/image` (AVIF/WebP enabled in `next.config.mjs`) once final assets land.

### 🌍 Bilingual improvements

- True parity: every page exists in `/en` and `/fr`.
- Centralized dictionary — translators can edit a single file per data type.
- Locale-aware language switcher that preserves the current path.
- `<html lang>` set dynamically; OG locale and hreflang correct.

### 🧹 Content hygiene

- Event names corrected:
  - `Merry-Canada 2022_Event` → **Merry Canada 2022**
  - `Zebra dance Festival _2022` → **Zebra Dance Festival 2022**
- "Who We Are" multi-level dropdown removed; merged into **About**.
- Each section now explicitly answers *who, how, what's next*.

---

## 🔜 Next steps (post-v1.0)

| Priority | Item | Owner |
|---|---|---|
| P0 | Validate impact numbers in `content/impact.ts` | RINET team |
| P0 | Replace placeholder testimonials with real, consented quotes | RINET team |
| P0 | Wire the contact form to a real backend (Resend / Formspree / CRM) | Dev |
| P0 | Wire donation processing (Stripe / Donorbox / CanadaHelps) | Dev |
| P1 | Add hero photo/video and partner logos (with permission) | RINET team |
| P1 | Add team bios + photos to the About page | RINET team |
| P1 | Confirm charitable status text on the Donate FAQ | RINET team |
| P1 | Wire privacy-respecting analytics (Plausible recommended) | Dev |
| P2 | Add a `team.ts` content module if individual profiles are added | Dev |
| P2 | Publish first annual report on the Impact page | RINET team |
| P2 | Add a `/en/blog` or `/en/news` section if RINET wants editorial publishing | Dev |
| P3 | OG image generation per page via `opengraph-image.tsx` | Dev |
| P3 | Schema.org `Organization` + `Event` structured data | Dev |
