import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { getPrograms } from '@/content/programs';
import { SectionHeader } from '@/components/SectionHeader';
import { CTASection } from '@/components/CTASection';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.programs.title, description: d.programs.lead };
}

export default function ProgramsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);
  const programs = getPrograms(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.programs}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.programs.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.programs.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {programs.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="grid gap-6 rounded-2xl border border-brand-line bg-white p-6 sm:p-8 lg:grid-cols-3 scroll-mt-28"
              >
                <div className="lg:col-span-1">
                  <h2 className="font-display text-2xl font-bold text-brand-navy">{p.name}</h2>
                  {p.duration ? (
                    <span className="mt-3 inline-flex rounded-full bg-brand-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                      {p.duration}
                    </span>
                  ) : null}
                  <p className="mt-4 text-sm text-brand-muted">
                    <span className="font-semibold text-brand-navy">{d.programs.audienceLabel}:</span>{' '}
                    {p.audience}
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-base leading-relaxed text-brand-navy">{p.shortDescription}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                    {d.programs.outcomeLabel}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 text-sm text-brand-navy">
                        <span
                          aria-hidden
                          className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand-accent"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`/${locale}/contact`}
                      className="inline-flex items-center justify-center rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-blue"
                    >
                      {d.programs.ctaLabel}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={d.home.finalCta.title}
        subtitle={d.home.finalCta.subtitle}
        primary={{ label: d.home.finalCta.primary, href: `/${locale}/contact` }}
        secondary={{ label: d.home.finalCta.secondary, href: `/${locale}/get-involved` }}
        tertiary={{ label: d.home.finalCta.tertiary, href: `/${locale}/donate` }}
      />
    </>
  );
}
