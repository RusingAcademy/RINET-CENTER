type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  id?: string;
};

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', id }: Props) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-display text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-brand-muted">{subtitle}</p> : null}
    </div>
  );
}
