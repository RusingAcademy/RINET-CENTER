'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/i18n/config';
import { getDictionary, buildNav, site } from '@/content/site';
import { LanguageSwitcher } from './LanguageSwitcher';

type Props = { locale: Locale };

export function Header({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const d = getDictionary(locale);
  const nav = buildNav(locale);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-brand-navy focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        {d.nav.skipToContent}
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2" aria-label={site.name}>
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-md bg-brand-navy font-display text-lg font-bold text-white"
          >
            R
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-brand-navy">RINET</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-navy transition hover:text-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={locale} />
          <Link
            href={`/${locale}/donate`}
            className="inline-flex items-center rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
          >
            {d.common.donate}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? d.nav.menuClose : d.nav.menuOpen}
        >
          <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-brand-line bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-brand-navy hover:bg-brand-surface"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-brand-line pt-3">
              <LanguageSwitcher current={locale} />
              <Link
                href={`/${locale}/donate`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-brand-red px-4 py-2 text-sm font-semibold text-white shadow-soft"
              >
                {d.common.donate}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
