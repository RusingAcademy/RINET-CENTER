import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { getPastEvents, getSignatureEvents, getUpcomingEvents } from '@/content/events';
import { SectionHeader } from '@/components/SectionHeader';
import { EventCard } from '@/components/EventCard';
import { CTASection } from '@/components/CTASection';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.events.title, description: d.events.lead };
}

export default function EventsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);
  const upcoming = getUpcomingEvents(locale);
  const past = getPastEvents(locale);
  const signature = getSignatureEvents(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.events}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.events.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.events.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.events.upcomingTitle} />
          {upcoming.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-dashed border-brand-line bg-brand-surface p-6 text-sm text-brand-muted">
              {d.events.upcomingEmpty}
            </p>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((e) => (
                <EventCard
                  key={e.name}
                  event={e}
                  status="upcoming"
                  statusLabel={locale === 'fr' ? 'À venir' : 'Upcoming'}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.events.signatureTitle} subtitle={d.events.signatureLead} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {signature.map((e) => (
              <EventCard
                key={e.name}
                event={e}
                status="signature"
                statusLabel={locale === 'fr' ? 'Signature' : 'Signature'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.events.pastTitle} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((e) => (
              <EventCard
                key={e.name}
                event={e}
                status="past"
                statusLabel={locale === 'fr' ? 'Passé' : 'Past'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.events.typesTitle} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {d.events.types.map((t) => (
              <li
                key={t}
                className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-navy"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={d.home.finalCta.title}
        primary={{ label: d.common.contactUs, href: `/${locale}/contact` }}
        secondary={{ label: d.home.finalCta.secondary, href: `/${locale}/get-involved` }}
        tertiary={{ label: d.home.finalCta.tertiary, href: `/${locale}/donate` }}
      />
    </>
  );
}
