import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { InvolvementCard } from '@/components/InvolvementCard';
import { CTASection } from '@/components/CTASection';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.getInvolved.title, description: d.getInvolved.lead };
}

export default function GetInvolvedPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);

  const targetHref = (idx: number) => {
    // 0 mentor, 1 volunteer, 2 partner, 3 sponsor, 4 donate, 5 event
    if (idx === 4) return `/${locale}/donate`;
    if (idx === 5) return `/${locale}/events`;
    return `/${locale}/contact`;
  };

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.getInvolved}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.getInvolved.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.getInvolved.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.getInvolved.paths.map((path, i) => (
              <InvolvementCard
                key={path.title}
                title={path.title}
                description={path.description}
                benefit={path.benefit}
                ctaLabel={path.cta}
                href={targetHref(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={d.home.finalCta.title}
        primary={{ label: d.common.contactUs, href: `/${locale}/contact` }}
        secondary={{ label: d.home.finalCta.tertiary, href: `/${locale}/donate` }}
      />
    </>
  );
}
