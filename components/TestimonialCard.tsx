type Props = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: Props) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6">
      <svg aria-hidden width="28" height="28" viewBox="0 0 24 24" className="text-brand-accent" fill="currentColor">
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17v6.66h6.66V11.17H5.34A1.83 1.83 0 0 1 7.17 9.34V6Zm10 0A5.17 5.17 0 0 0 12 11.17v6.66h6.66V11.17h-3.33a1.83 1.83 0 0 1 1.84-1.83V6Z" />
      </svg>
      <blockquote className="mt-4 text-base leading-relaxed text-brand-navy">“{quote}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="block font-semibold text-brand-navy">{author}</span>
        <span className="block text-brand-muted">{role}</span>
      </figcaption>
    </figure>
  );
}
