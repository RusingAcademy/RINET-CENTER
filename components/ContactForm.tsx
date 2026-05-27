'use client';

import { useState } from 'react';
import type { Locale } from '@/i18n/config';
import { getDictionary, site } from '@/content/site';

type Props = { locale: Locale };

export function ContactForm({ locale }: Props) {
  const d = getDictionary(locale);
  const [submitted, setSubmitted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const profile = formData.get('profile')?.toString() ?? '';
        const name = formData.get('name')?.toString() ?? '';
        const email = formData.get('email')?.toString() ?? '';
        const organization = formData.get('organization')?.toString() ?? '';
        const message = formData.get('message')?.toString() ?? '';
        const subject =
          locale === 'fr'
            ? `Demande RINET Center - ${name || 'Nouveau contact'}`
            : `RINET Center inquiry - ${name || 'New contact'}`;
        const body = [
          locale === 'fr' ? 'Profil' : 'Profile',
          profile,
          '',
          locale === 'fr' ? 'Nom' : 'Name',
          name,
          '',
          locale === 'fr' ? 'Courriel' : 'Email',
          email,
          '',
          locale === 'fr' ? 'Organisation' : 'Organization',
          organization || '-',
          '',
          locale === 'fr' ? 'Message' : 'Message',
          message,
        ].join('\n');
        const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setMailtoHref(href);
        setSubmitted(true);
        window.location.href = href;
      }}
      className="space-y-5"
      aria-describedby="form-note"
    >
      <div>
        <label htmlFor="profile" className="block text-sm font-medium text-brand-navy">
          {d.contact.profileLabel}
        </label>
        <select
          id="profile"
          name="profile"
          className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          {d.contact.profiles.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-navy">
            {d.contact.form.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-navy">
            {d.contact.form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-brand-navy">
          {d.contact.form.organization}
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
          {d.contact.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
      >
        {d.contact.form.submit}
      </button>

      <p id="form-note" className="text-xs text-brand-muted">
        {d.contact.form.note}
      </p>

      {submitted ? (
        <div role="status" className="rounded-lg border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-navy">
          <p className="font-semibold">{locale === 'fr' ? 'Votre courriel est prêt.' : 'Your email is ready.'}</p>
          <p className="mt-1 text-brand-muted">
            {locale === 'fr'
              ? 'Si votre application courriel ne s’est pas ouverte, utilisez le lien ci-dessous.'
              : 'If your email app did not open, use the link below.'}
          </p>
          <a
            href={mailtoHref}
            className="mt-2 inline-flex font-semibold text-brand-accent underline underline-offset-4 hover:text-brand-blue"
          >
            {locale === 'fr' ? 'Ouvrir le courriel' : 'Open email'}
          </a>
        </div>
      ) : null}
    </form>
  );
}
