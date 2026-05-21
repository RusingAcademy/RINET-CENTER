import type { Locale } from '@/i18n/config';

// IMPORTANT: These numbers are working placeholders.
// They should be validated and updated by the RINET Center team
// before public launch and refreshed annually.
export type ImpactStat = { value: string; label: string };

const stats: Record<Locale, ImpactStat[]> = {
  en: [
    { value: '50+', label: 'Entrepreneurs supported' },
    { value: '20+', label: 'Workshops & events' },
    { value: '10+', label: 'Community partners' },
    { value: '3+', label: 'Years of community impact' },
  ],
  fr: [
    { value: '50+', label: 'Entrepreneurs accompagnés' },
    { value: '20+', label: 'Ateliers et événements' },
    { value: '10+', label: 'Partenaires communautaires' },
    { value: '3+', label: 'Années d’impact communautaire' },
  ],
};

export function getImpactStats(locale: Locale): ImpactStat[] {
  return stats[locale];
}
