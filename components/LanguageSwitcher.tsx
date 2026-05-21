'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';

type Props = {
  current: Locale;
};

export function LanguageSwitcher({ current }: Props) {
  const pathname = usePathname() || `/${current}`;

  const swap = (target: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return `/${target}`;
    segments[0] = target;
    return `/${segments.join('/')}`;
  };

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center rounded-full border border-brand-line bg-white p-0.5 text-sm font-semibold"
    >
      {locales.map((l) => {
        const isActive = l === current;
        return (
          <Link
            key={l}
            href={swap(l)}
            aria-current={isActive ? 'true' : undefined}
            className={`rounded-full px-3 py-1 transition ${
              isActive ? 'bg-brand-navy text-white' : 'text-brand-navy hover:text-brand-accent'
            }`}
          >
            {l.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
