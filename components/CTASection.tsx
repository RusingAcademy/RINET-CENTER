import { Button } from './Button';

type CTA = { label: string; href: string };

type Props = {
  title: string;
  subtitle?: string;
  primary: CTA;
  secondary?: CTA;
  tertiary?: CTA;
};

export function CTASection({ title, subtitle, primary, secondary, tertiary }: Props) {
  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20" aria-labelledby="cta-title">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 id="cta-title" className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle ? <p className="mt-4 max-w-xl text-white/85">{subtitle}</p> : null}
          </div>
          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            <Button href={primary.href} variant="primary">
              {primary.label}
            </Button>
            {secondary ? (
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            ) : null}
            {tertiary ? (
              <Button href={tertiary.href} variant="ghost" className="text-white hover:text-brand-gold">
                {tertiary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
