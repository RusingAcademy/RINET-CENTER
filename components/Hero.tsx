import { Button } from './Button';

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  ctaTertiary?: { label: string; href: string };
};

export function Hero({ eyebrow, title, subtitle, ctaPrimary, ctaSecondary, ctaTertiary }: Props) {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy text-white"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 50% at 20% 20%, rgba(30,90,168,0.65), transparent 60%), radial-gradient(40% 40% at 90% 30%, rgba(224,168,0,0.25), transparent 60%), radial-gradient(50% 50% at 70% 90%, rgba(31,122,92,0.25), transparent 60%)',
        }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 ring-1 ring-white/20">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {eyebrow}
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={ctaPrimary.href} variant="primary">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} variant="outline">
              {ctaSecondary.label}
            </Button>
            {ctaTertiary ? (
              <Button href={ctaTertiary.href} variant="ghost" className="text-white hover:text-brand-gold">
                {ctaTertiary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
