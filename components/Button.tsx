import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const base =
  'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-accent text-white hover:bg-brand-blue shadow-soft',
  secondary:
    'bg-white text-brand-navy ring-1 ring-brand-line hover:ring-brand-accent hover:text-brand-accent',
  ghost: 'text-brand-navy hover:text-brand-accent',
  outline:
    'border border-white/70 text-white hover:bg-white hover:text-brand-navy',
};

export function Button({ href, children, variant = 'primary', className = '', ariaLabel }: Props) {
  return (
    <Link href={href} aria-label={ariaLabel} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
