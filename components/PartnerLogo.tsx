type Props = {
  name: string;
  href?: string;
};

export function PartnerLogo({ name, href }: Props) {
  const inner = (
    <div className="flex h-20 w-full items-center justify-center rounded-xl border border-brand-line bg-white px-4 text-center font-display text-sm font-semibold text-brand-navy transition hover:border-brand-accent hover:text-brand-accent">
      {name}
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}
