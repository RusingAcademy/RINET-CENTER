import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { getPrograms } from '@/content/programs';
import { getImpactStats } from '@/content/impact';
import { partners } from '@/content/partners';
import { getTestimonials } from '@/content/testimonials';
import { Hero } from '@/components/Hero';
import { SectionHeader } from '@/components/SectionHeader';
import { ValueCard } from '@/components/ValueCard';
import { ProgramCard } from '@/components/ProgramCard';
import { ImpactStat } from '@/components/ImpactStat';
import { PartnerLogo } from '@/components/PartnerLogo';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CTASection } from '@/components/CTASection';

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);
  const programs = getPrograms(locale).slice(0, 6);
  const stats = getImpactStats(locale);
  const testimonials = getTestimonials(locale);

  return (
    <>
      <Hero
        eyebrow={d.home.hero.eyebrow}
        title={d.home.hero.title}
        subtitle={d.home.hero.subtitle}
        ctaPrimary={{ label: d.home.hero.ctaPrimary, href: `/${locale}/programs` }}
        ctaSecondary={{ label: d.home.hero.ctaSecondary, href: `/${locale}/get-involved` }}
        ctaTertiary={{ label: d.home.hero.ctaTertiary, href: `/${locale}/donate` }}
        highlights={d.home.hero.highlights}
        backgroundImage="/images/hero/hero-banner.jpg"
        backgroundAlt=""
      />

      <section className="bg-brand-surface py-16 sm:py-20" aria-labelledby="who-we-help-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="who-we-help-title"
            eyebrow={locale === 'fr' ? 'Public servi' : 'Who we serve'}
            title={d.home.whoWeHelp.title}
            subtitle={d.home.whoWeHelp.subtitle}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.home.whoWeHelp.items.map((item, i) => (
              <ValueCard key={item.title} title={item.title} description={item.description} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="what-we-offer-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              id="what-we-offer-title"
              eyebrow={locale === 'fr' ? 'Programmes' : 'Programs'}
              title={d.home.whatWeOffer.title}
              subtitle={d.home.whatWeOffer.subtitle}
            />
            <a
              href={`/${locale}/programs`}
              className="text-sm font-semibold text-brand-accent hover:text-brand-blue"
            >
              {d.common.seeAllPrograms} <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <ProgramCard
                key={p.slug}
                program={p}
                audienceLabel={d.programs.audienceLabel}
                ctaLabel={d.common.learnMore}
                href={`/${locale}/programs#${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20" aria-labelledby="impact-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="impact-title"
            eyebrow={locale === 'fr' ? 'Notre impact' : 'Our impact'}
            title={d.home.impact.title}
            subtitle={d.home.impact.subtitle}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <ImpactStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-muted">{d.home.impact.note}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="partners-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="partners-title"
            eyebrow={locale === 'fr' ? 'Partenaires' : 'Partners'}
            title={d.home.partners.title}
            subtitle={d.home.partners.subtitle}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((p) => (
              <PartnerLogo key={p.name} name={p.name} href={p.url} logo={p.logo} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20" aria-labelledby="testimonials-title">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="testimonials-title"
            eyebrow={locale === 'fr' ? 'Témoignages' : 'Testimonials'}
            title={d.home.testimonials.title}
            subtitle={d.home.testimonials.subtitle}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.author} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={d.home.finalCta.title}
        subtitle={d.home.finalCta.subtitle}
        primary={{ label: d.home.finalCta.primary, href: `/${locale}/programs` }}
        secondary={{ label: d.home.finalCta.secondary, href: `/${locale}/get-involved` }}
        tertiary={{ label: d.home.finalCta.tertiary, href: `/${locale}/donate` }}
      />
    </>
  );
}
