import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { getImpactStats } from '@/content/impact';
import { SectionHeader } from '@/components/SectionHeader';
import { ImpactStat } from '@/components/ImpactStat';
import { ValueCard } from '@/components/ValueCard';
import { CTASection } from '@/components/CTASection';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.impact.title, description: d.impact.lead };
}

export default function ImpactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);
  const stats = getImpactStats(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.impact}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.impact.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.impact.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <ImpactStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <p className="mt-6 text-xs text-brand-muted">{d.home.impact.note}</p>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.impact.areasTitle} />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {d.impact.areas.map((a) => (
              <article key={a.name} className="rounded-2xl border border-brand-line bg-white p-6">
                <h3 className="font-display text-xl font-bold text-brand-navy">{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.impact.pillarsTitle} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.impact.pillars.map((p, i) => (
              <ValueCard key={p.title} title={p.title} description={p.description} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.impact.reportTitle} subtitle={d.impact.reportBody} />
        </div>
      </section>

      <CTASection
        title={d.home.finalCta.title}
        primary={{ label: d.home.finalCta.primary, href: `/${locale}/programs` }}
        secondary={{ label: d.home.finalCta.secondary, href: `/${locale}/get-involved` }}
        tertiary={{ label: d.home.finalCta.tertiary, href: `/${locale}/donate` }}
      />
    </>
  );
}
