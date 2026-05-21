# AUDIT — rinetcenter.com (current live site)

> Audit conducted to inform the new bilingual, optimized RINET Center website.
> Date: 2026-05-20. Source: live content fetched from https://www.rinetcenter.com.

---

## 1. Summary of the current site

The current rinetcenter.com is a brochure site for a community-driven incubator in Ottawa supporting Francophone immigrant entrepreneurs — with a strong focus on newcomers from the African Great Lakes region. The site presents six core programs, a list of partners, two annual events, and basic contact information.

**Pages identified:**
- Home
- Who We Are (with sub-pages: Why RINET Center, Mission/Vision/Values, Meet Our Team)
- What We Do (with sub-pages per program)
- Where We Work (Canada, African Great Lakes Region)
- Events
- Get Involved

**Partners detected:** Scotiabank, RBC, Government of Ontario, Rusinga Academy, Etsy Team.

**Languages:** primarily English on public pages; some French content scattered.

**Contact:** contact@rinet.center, Ottawa, ON.

---

## 2. Strengths

- ✅ Clear, mission-driven positioning anchored in a real community need.
- ✅ Six well-named programs covering the entrepreneurial journey.
- ✅ Reputable financial partners (Scotiabank, RBC) visible.
- ✅ Active social presence (Instagram, Facebook, Twitter/X, YouTube, TikTok).
- ✅ Distinctive signature events (Merry Canada, Zebra Dance Festival).

---

## 3. Weaknesses

### Content & messaging
- ❌ Headline ("Inspiring Growth and Excellence for Francophone Immigrants...") is aspirational but does **not** explicitly say *what* RINET does or *how* a visitor takes action.
- ❌ No bilingual experience: French speakers — the **primary audience** — encounter a mostly English site.
- ❌ Impact numbers absent or unclear.
- ❌ Testimonials missing.
- ❌ Team page exists but key roles/photos are not surfaced.
- ❌ Event names contain typos and odd capitalization (`Merry-Canada 2022_Event`, `Zebra dance Festival _2022`).

### UX & architecture
- ❌ Navigation is over-deep (multi-level dropdowns) for what is essentially 8 pages of content.
- ❌ Sub-pages under "Who We Are" (Why, Mission/Vision/Values, Team) should be **one consolidated About page**.
- ❌ No single "Programs" overview page with comparable cards.
- ❌ No clear primary CTA above the fold.
- ❌ Donate is buried; should be top-right + footer + final-CTA on every page.

### Visual & UI
- ❌ Visual language is generic — does not yet convey "credible incubator partnered with major banks."
- ❌ Inconsistent typography and spacing across pages.
- ❌ Images are decorative rather than narrative.

### SEO
- ❌ Title tags and meta descriptions are weak or duplicated.
- ❌ No hreflang or bilingual sitemap.
- ❌ Heading hierarchy is inconsistent (multiple H1s on some pages).
- ❌ No structured data.

### Accessibility
- ❌ Color contrast issues on dark-on-color text.
- ❌ Some interactive elements lack labels.
- ❌ No skip link.
- ❌ Mobile menu is functional but cramped.

### Conversion
- ❌ The three target actions — *apply, partner, donate* — are not visible as a triad anywhere.
- ❌ Forms (contact, application) are not segmented by visitor profile.

---

## 4. Recommendations (delivered in the new site)

### Information architecture
- Collapse "Who We Are" multi-level menu into a single **About** page with sections (Mission, Vision, Values, Why RINET, Team).
- Add a dedicated **Programs** overview page with one card per program.
- Add a dedicated **Impact** page.
- Add **Get Involved** as a hub for Mentor / Volunteer / Partner / Sponsor / Donate / Event.
- Make **Donate** a first-class destination linked from the header, footer, every CTA section, and the Get Involved page.

### Hero & messaging
- Replace generic headline with the new action-oriented one:
  *"Helping Francophone Immigrant Entrepreneurs Launch, Grow, and Thrive in Canada"*
- Add a one-sentence subtitle explaining *how* (mentorship, training, integration, partners).
- Display three primary CTAs above the fold: **Apply to a Program / Become a Partner / Support Our Mission**.

### Bilingual experience
- Full FR/EN parity under `/fr/*` and `/en/*` routes.
- Visible language switcher in the header.
- `hreflang` alternates and per-locale metadata.

### Event hygiene
- Rename `Merry-Canada 2022_Event` → **Merry Canada 2022**.
- Rename `Zebra dance Festival _2022` → **Zebra Dance Festival 2022**.
- Section events into **Upcoming / Past / Signature**.
- Show the explicit empty-state copy when no upcoming events are confirmed (no fake placeholders).

### Trust & credibility
- Surface partners (Scotiabank, RBC, Ontario, Etsy Team, Rusinga Academy) as logo tiles.
- Add 2–3 testimonial slots (placeholders today, real voices before launch).
- Add an Impact section with 4 headline numbers (placeholder, easy to update).

### SEO
- Per-page metadata via Next.js `generateMetadata`.
- Bilingual `sitemap.xml`, `robots.txt`, `hreflang`.
- Clean URLs and one H1 per page.
- Targeted keywords woven into copy: *Francophone immigrant entrepreneurship Ottawa, business incubator for immigrants, newcomer entrepreneur support Canada, women entrepreneurs immigrant support, African Great Lakes community Canada*.

### Accessibility
- WCAG AA color contrast across the palette.
- Skip-to-content, visible focus rings, ARIA labels, proper form labels, semantic landmarks.
- `prefers-reduced-motion` respected.

### Performance
- Tailwind purges unused CSS.
- No external JS for the hero/animations.
- Static generation for every page via `generateStaticParams`.
- Images can be added through `next/image` later for AVIF/WebP automatically.

---

## 5. Proposed structure for the new version

```
/en (default)             /fr
├── /en                   ├── /fr
├── /en/about             ├── /fr/about
├── /en/programs          ├── /fr/programs
├── /en/impact            ├── /fr/impact
├── /en/events            ├── /fr/events
├── /en/get-involved      ├── /fr/get-involved
├── /en/donate            ├── /fr/donate
└── /en/contact           └── /fr/contact
```

Same slugs both languages, content swapped via the locale dictionary.

---

## 6. Priorities (sequence)

1. **Ship the new shell** — bilingual layout, header, footer, navigation, brand. *(done)*
2. **Replace placeholder content** — impact numbers, testimonials, team bios. *(team)*
3. **Wire forms & donations** — contact form backend + donation processor. *(dev)*
4. **Add imagery** — hero photo/video, partner logos, event photos. *(team)*
5. **Launch analytics** — Plausible or GA4, set up goals on Apply / Donate / Partner. *(dev)*
6. **First annual report** — publish on the Impact page. *(team)*

---

## 7. Decisions made

| Decision | Rationale |
|---|---|
| Use Next.js App Router with `/[locale]/*` | Native i18n routing, SSG by default, best-in-class SEO. |
| No CMS in v1 | Editorial volume is low; TypeScript content files are version-controlled and reviewable. |
| Tailwind, no UI library | Faster to maintain than Material/Chakra, full control of accessible markup. |
| Empty-state copy for events | Honesty beats stale or fake "upcoming" placeholders. |
| Donate page routes to email until processor is wired | Avoids a broken checkout; preserves donor confidence. |
| Placeholder testimonials marked as such | Avoids inventing quotes; flagged for replacement before launch. |
