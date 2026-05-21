import type { Locale } from '@/i18n/config';

export type EventItem = {
  name: string;
  description: string;
  year?: string;
  location?: string;
};

// Past events are derived from the current rinetcenter.com site,
// with spelling and capitalization corrected for the new site.
const past: Record<Locale, EventItem[]> = {
  en: [
    {
      name: 'Merry Canada 2022',
      description:
        'A football match bringing together Indigenous communities of Manitoba and Black communities of Ottawa around dialogue, sport, and the fight against racism.',
      year: '2022',
      location: 'Ottawa, ON',
    },
    {
      name: 'Zebra Dance Festival 2022',
      description:
        'A traditional dance festival celebrating the diversity of Canadian communities and standing against racism through culture and performance.',
      year: '2022',
      location: 'Ottawa, ON',
    },
  ],
  fr: [
    {
      name: 'Merry Canada 2022',
      description:
        'Un match de football réunissant les communautés autochtones du Manitoba et les communautés noires d’Ottawa autour du dialogue, du sport et de la lutte contre le racisme.',
      year: '2022',
      location: 'Ottawa, ON',
    },
    {
      name: 'Zebra Dance Festival 2022',
      description:
        'Un festival de danse traditionnelle célébrant la diversité des communautés canadiennes et luttant contre le racisme par la culture et la performance.',
      year: '2022',
      location: 'Ottawa, ON',
    },
  ],
};

const signature: Record<Locale, EventItem[]> = {
  en: [
    {
      name: 'Merry Canada (annual)',
      description: 'An annual community gathering of sport and dialogue against racism.',
    },
    {
      name: 'Zebra Dance Festival (annual)',
      description: 'A celebration of cultural diversity through traditional dance.',
    },
  ],
  fr: [
    {
      name: 'Merry Canada (annuel)',
      description: 'Un rassemblement communautaire annuel autour du sport et du dialogue contre le racisme.',
    },
    {
      name: 'Zebra Dance Festival (annuel)',
      description: 'Une célébration de la diversité culturelle à travers la danse traditionnelle.',
    },
  ],
};

// Upcoming events are intentionally empty until the team confirms dates.
const upcoming: Record<Locale, EventItem[]> = {
  en: [],
  fr: [],
};

export function getPastEvents(locale: Locale): EventItem[] {
  return past[locale];
}
export function getSignatureEvents(locale: Locale): EventItem[] {
  return signature[locale];
}
export function getUpcomingEvents(locale: Locale): EventItem[] {
  return upcoming[locale];
}
