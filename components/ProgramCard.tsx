import Link from 'next/link';
import type { Program } from '@/content/programs';

type Props = {
  program: Program;
  audienceLabel: string;
  ctaLabel: string;
  href: string;
};

export function ProgramCard({ program, audienceLabel, ctaLabel, href }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-bold text-brand-navy">{program.name}</h3>
        {program.duration ? (
          <span className="rounded-full bg-brand-surface px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-accent">
            {program.duration}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-sm font-medium text-brand-accent">
        <span className="text-brand-muted">{audienceLabel}:</span> {program.audience}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-brand-muted">{program.shortDescription}</p>
      <div className="mt-6 flex-1" />
      <Link
        href={href}
        className="mt-4 inline-flex items-center text-sm font-semibold text-brand-accent transition group-hover:translate-x-0.5"
      >
        {ctaLabel}
        <span aria-hidden className="ml-2">→</span>
      </Link>
    </article>
  );
}
