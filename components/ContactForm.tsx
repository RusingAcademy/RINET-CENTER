'use client';

import { useState } from 'react';
import type { Locale } from '@/i18n/config';
import { getDictionary } from '@/content/site';

type Props = { locale: Locale };

export function ContactForm({ locale }: Props) {
  const d = getDictionary(locale);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
          className="mt-1 block w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
            className="mt-1 block w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
            className="mt-1 block w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
          className="mt-1 block w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
          className="mt-1 block w-full rounded-md border border-brand-line bg-white px-3 py-2 text-sm text-brand-navy focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
        <p role="status" className="rounded-md bg-brand-surface px-3 py-2 text-sm text-brand-navy">
          {locale === 'fr'
            ? 'Merci ! Votre message a été préparé. Veuillez envoyer un courriel à contact@rinet.center pour finaliser.'
            : 'Thank you! Your message has been prepared. Please send an email to contact@rinet.center to finalize.'}
        </p>
      ) : null}
    </form>
  );
}
