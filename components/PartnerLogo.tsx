import Image from 'next/image';

type Props = {
  name: string;
  href?: string;
  logo?: string;
};

export function PartnerLogo({ name, href, logo }: Props) {
  const inner = (
    <div className="flex h-20 w-full items-center justify-center rounded-xl border border-brand-line bg-white px-4 text-center transition hover:border-brand-accent">
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={160}
          height={64}
          className="max-h-12 w-auto object-contain"
        />
      ) : (
        <span className="font-display text-sm font-semibold text-brand-navy">{name}</span>
      )}
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
