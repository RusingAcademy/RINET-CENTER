import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, isLocale, type Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const d = getDictionary(params.locale);
  const url = `https://www.rinetcenter.com/${params.locale}`;
  return {
    title: d.meta.siteTitle,
    description: d.meta.siteDescription,
    alternates: {
      canonical: url,
      languages: {
        en: 'https://www.rinetcenter.com/en',
        fr: 'https://www.rinetcenter.com/fr',
        'x-default': 'https://www.rinetcenter.com/en',
      },
    },
    openGraph: {
      title: d.meta.siteTitle,
      description: d.meta.siteDescription,
      url,
      locale: params.locale === 'fr' ? 'fr_CA' : 'en_CA',
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  return (
    <html lang={locale}>
      <body className="bg-white text-brand-ink antialiased">
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
