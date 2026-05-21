import type { EventItem } from '@/content/events';

type Props = {
  event: EventItem;
  status?: 'past' | 'signature' | 'upcoming';
  statusLabel?: string;
};

export function EventCard({ event, status = 'past', statusLabel }: Props) {
  const tone =
    status === 'upcoming'
      ? 'bg-brand-green text-white'
      : status === 'signature'
      ? 'bg-brand-gold text-brand-ink'
      : 'bg-brand-surface text-brand-muted';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6">
      <div className="flex items-center gap-3">
        {statusLabel ? (
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tone}`}>
            {statusLabel}
          </span>
        ) : null}
        {event.year ? <span className="text-xs text-brand-muted">{event.year}</span> : null}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">{event.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{event.description}</p>
      {event.location ? <p className="mt-3 text-xs text-brand-muted">{event.location}</p> : null}
    </article>
  );
}
