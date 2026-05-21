import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { getDictionary, site } from '@/content/site';

type Props = { locale: Locale };

export function Footer({ locale }: Props) {
  const d = getDictionary(locale);
  const year = new Date().getFullYear();

  const explore = [
    { href: `/${locale}/about`, label: d.nav.about },
    { href: `/${locale}/programs`, label: d.nav.programs },
    { href: `/${locale}/impact`, label: d.nav.impact },
    { href: `/${locale}/events`, label: d.nav.events },
  ];
  const engage = [
    { href: `/${locale}/get-involved`, label: d.nav.getInvolved },
    { href: `/${locale}/donate`, label: d.nav.donate },
    { href: `/${locale}/contact`, label: d.nav.contact },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Link href={`/${locale}`} className="flex items-center gap-2" aria-label={site.name}>
            <Image
              src="/images/brand/logo.jpg"
              alt={`${site.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold">RINET</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Center</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/80">{d.footer.tagline}</p>
          <p className="mt-6 text-sm text-white/80">
            {site.location.city}, {site.location.region}, {site.location.country}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-block text-sm font-medium text-white underline underline-offset-4 hover:text-brand-gold"
          >
            {site.email}
          </a>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {d.footer.sections.explore}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/90 hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {d.footer.sections.engage}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {engage.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/90 hover:text-brand-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {d.contact.reach.socialLabel}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm">
            <li>
              <a className="text-white/90 hover:text-brand-gold" href={site.social.instagram}>Instagram</a>
            </li>
            <li>
              <a className="text-white/90 hover:text-brand-gold" href={site.social.facebook}>Facebook</a>
            </li>
            <li>
              <a className="text-white/90 hover:text-brand-gold" href={site.social.twitter}>Twitter</a>
            </li>
            <li>
              <a className="text-white/90 hover:text-brand-gold" href={site.social.youtube}>YouTube</a>
            </li>
            <li>
              <a className="text-white/90 hover:text-brand-gold" href={site.social.tiktok}>TikTok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. {d.footer.rights}
          </p>
          <p>{d.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
