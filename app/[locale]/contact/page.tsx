import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary, site } from '@/content/site';
import { ContactForm } from '@/components/ContactForm';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.contact.title, description: d.contact.lead };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.contact}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.contact.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.contact.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2 rounded-2xl border border-brand-line bg-white p-6 sm:p-8">
            <ContactForm locale={locale} />
          </div>
          <aside className="lg:col-span-1 rounded-2xl border border-brand-line bg-brand-surface p-6">
            <h2 className="font-display text-lg font-bold text-brand-navy">{d.contact.reach.title}</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                  {d.contact.reach.emailLabel}
                </dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-brand-navy underline underline-offset-4 hover:text-brand-accent"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                  {d.contact.reach.locationLabel}
                </dt>
                <dd className="text-brand-navy">
                  {site.location.city}, {site.location.region}, {site.location.country}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                  {d.contact.reach.socialLabel}
                </dt>
                <dd className="flex flex-wrap gap-x-3 gap-y-1 text-brand-navy">
                  <a className="hover:text-brand-accent" href={site.social.instagram}>Instagram</a>
                  <a className="hover:text-brand-accent" href={site.social.facebook}>Facebook</a>
                  <a className="hover:text-brand-accent" href={site.social.twitter}>Twitter</a>
                  <a className="hover:text-brand-accent" href={site.social.youtube}>YouTube</a>
                  <a className="hover:text-brand-accent" href={site.social.tiktok}>TikTok</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
