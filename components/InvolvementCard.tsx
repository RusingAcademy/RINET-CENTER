import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  benefit: string;
  ctaLabel: string;
  href: string;
};

export function InvolvementCard({ title, description, benefit, ctaLabel, href }: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-soft">
      <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-muted">{description}</p>
      <p className="mt-4 rounded-lg bg-brand-surface px-3 py-2 text-xs font-medium text-brand-accent">
        {benefit}
      </p>
      <div className="flex-1" />
      <Link
        href={href}
        className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent"
      >
        {ctaLabel}
        <span aria-hidden className="ml-2">→</span>
      </Link>
    </article>
  );
}
