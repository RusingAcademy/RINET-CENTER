import type { Locale } from '@/i18n/config';

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

// Placeholder testimonials, designed to be replaced with real voices
// from the RINET community before launch.
const testimonials: Record<Locale, Testimonial[]> = {
  en: [
    {
      quote:
        'RINET Center gave me the network and confidence I needed to register my first business in Ottawa. The mentorship made the difference.',
      author: 'Founder, Business Launch alumna',
      role: 'Ottawa, ON',
    },
    {
      quote:
        'Partnering with RINET Center means reaching Francophone immigrant entrepreneurs we would not otherwise meet. The team is rigorous and community-driven.',
      author: 'Partner organization',
      role: 'National Capital Region',
    },
    {
      quote:
        'As a newcomer, I needed more than a workshop. RINET gave me a community, mentors who understood my reality, and a launchpad for my idea.',
      author: 'Startup Acceleration participant',
      role: 'Gatineau, QC',
    },
  ],
  fr: [
    {
      quote:
        'Le Centre RINET m’a apporté le réseau et la confiance dont j’avais besoin pour enregistrer ma première entreprise à Ottawa. Le mentorat a tout changé.',
      author: 'Fondatrice, alumna du Programme de lancement',
      role: 'Ottawa, ON',
    },
    {
      quote:
        'Être partenaire du Centre RINET, c’est rejoindre des entrepreneurs immigrants francophones que nous ne rencontrerions pas autrement. Une équipe rigoureuse et profondément communautaire.',
      author: 'Organisation partenaire',
      role: 'Région de la capitale nationale',
    },
    {
      quote:
        'En tant que nouvelle arrivante, j’avais besoin de plus qu’un atelier. RINET m’a offert une communauté, des mentors qui comprenaient ma réalité et un tremplin pour mon projet.',
      author: 'Participante au Programme d’accélération',
      role: 'Gatineau, QC',
    },
  ],
};

export function getTestimonials(locale: Locale): Testimonial[] {
  return testimonials[locale];
}
