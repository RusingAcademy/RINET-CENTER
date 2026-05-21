import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { SectionHeader } from '@/components/SectionHeader';
import { ValueCard } from '@/components/ValueCard';
import { CTASection } from '@/components/CTASection';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.about.title, description: d.about.lead };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.about}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.about.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.about.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-2xl border border-brand-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {d.about.mission.title}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-brand-navy">{d.about.mission.body}</p>
          </article>
          <article className="rounded-2xl border border-brand-line bg-brand-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
              {d.about.vision.title}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-brand-navy">{d.about.vision.body}</p>
          </article>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.about.valuesTitle} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.about.values.map((v, i) => (
              <ValueCard key={v.title} title={v.title} description={v.description} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.about.whyTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {d.about.whyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl border border-brand-line bg-white p-4 text-sm text-brand-navy"
              >
                <span
                  aria-hidden
                  className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand-accent"
                />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.about.teamTitle} subtitle={d.about.teamNote} />
        </div>
      </section>

      <CTASection
        title={d.about.ctaTitle}
        subtitle={d.about.ctaSubtitle}
        primary={{ label: d.common.contactUs, href: `/${locale}/contact` }}
        secondary={{ label: d.common.partnerWithUs, href: `/${locale}/get-involved` }}
      />
    </>
  );
}
