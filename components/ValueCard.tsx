type Props = {
  title: string;
  description: string;
  index?: number;
};

export function ValueCard({ title, description, index }: Props) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6">
      {typeof index === 'number' ? (
        <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-surface font-display text-sm font-bold text-brand-accent">
          {index.toString().padStart(2, '0')}
        </span>
      ) : null}
      <h3 className="font-display text-lg font-bold text-brand-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
    </article>
  );
}
