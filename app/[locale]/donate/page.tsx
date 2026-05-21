import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDictionary, site } from '@/content/site';
import { SectionHeader } from '@/components/SectionHeader';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  return { title: d.donate.title, description: d.donate.lead };
}

export default function DonatePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const d = getDictionary(locale);

  return (
    <>
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
            {d.nav.donate}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{d.donate.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85">{d.donate.lead}</p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader title={d.donate.whyTitle} />
            <ul className="mt-8 space-y-3">
              {d.donate.whyPoints.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-xl border border-brand-line bg-white p-4 text-sm text-brand-navy"
                >
                  <span aria-hidden className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-brand-red" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title={d.donate.useTitle} />
            <ul className="mt-8 grid gap-3">
              {d.donate.useItems.map((u) => (
                <li
                  key={u.label}
                  className="rounded-xl border border-brand-line bg-brand-surface p-4 text-sm text-brand-navy"
                >
                  <span className="block font-semibold">{u.label}</span>
                  <span className="mt-1 block text-brand-muted">{u.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.donate.transparencyTitle} subtitle={d.donate.transparencyBody} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-line bg-brand-navy p-8 text-white">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{d.donate.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/85">{d.donate.ctaBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent('Donation inquiry — RINET Center')}`}
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-soft hover:opacity-90"
              >
                {locale === 'fr' ? 'Écrire pour faire un don' : 'Email us to give'}
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-navy"
              >
                {d.common.contactUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={d.donate.faqTitle} />
          <dl className="mt-8 space-y-4">
            {d.donate.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-brand-line bg-white p-6">
                <dt className="font-display text-lg font-bold text-brand-navy">{item.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-brand-muted">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
