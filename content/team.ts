import type { Locale } from '@/i18n/config';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
};

// Team members and photos sourced from the current rinetcenter.com.
// Roles are placeholders to be confirmed by RINET Center — update once
// official titles are received from the team.
const team: Record<Locale, TeamMember[]> = {
  en: [
    {
      slug: 'steven-barholere',
      name: 'Steven Barholere',
      role: 'Founder & Executive Director',
      photo: '/images/team/steven-barholere.png',
    },
    {
      slug: 'yvette-ashiri',
      name: 'Yvette Ashiri',
      role: 'Team member',
      photo: '/images/team/yvette-ashiri.png',
    },
    {
      slug: 'aime-bisimwa',
      name: 'Aimé Bisimwa',
      role: 'Team member',
      photo: '/images/team/aime-bisimwa.png',
    },
    {
      slug: 'frederic-buyana',
      name: 'Frederic Buyana',
      role: 'Team member',
      photo: '/images/team/frederic-buyana.png',
    },
    {
      slug: 'victor-amisi',
      name: 'Victor Amisi',
      role: 'Team member',
      photo: '/images/team/victor-amisi.png',
    },
    {
      slug: 'blaise-biringanine',
      name: 'Blaise Biringanine',
      role: 'Team member',
      photo: '/images/team/blaise-biringanine.png',
    },
    {
      slug: 'bertin-bahati',
      name: 'Bertin Bahati',
      role: 'Team member',
      photo: '/images/team/bertin-bahati.png',
    },
    {
      slug: 'michel-sulubika',
      name: 'Michel Sulubika',
      role: 'Team member',
      photo: '/images/team/michel-sulubika.png',
    },
    {
      slug: 'aurelia-matingu',
      name: 'Aurelia Matingu',
      role: 'Team member',
      photo: '/images/team/aurelia-matingu.png',
    },
    {
      slug: 'rachel-bahati',
      name: 'Rachel Bahati',
      role: 'Team member',
      photo: '/images/team/rachel-bahati.png',
    },
    {
      slug: 'jonnahs-ammisih',
      name: 'Dr. Jonnahs Ammisih',
      role: 'Team member',
      photo: '/images/team/jonnahs-ammisih.png',
    },
    {
      slug: 'merel-rusinga-nijs',
      name: 'Merel Rusinga-Nijs',
      role: 'Team member',
      photo: '/images/team/merel-rusinga-nijs.png',
    },
  ],
  fr: [
    {
      slug: 'steven-barholere',
      name: 'Steven Barholere',
      role: 'Fondateur et directeur exécutif',
      photo: '/images/team/steven-barholere.png',
    },
    {
      slug: 'yvette-ashiri',
      name: 'Yvette Ashiri',
      role: 'Membre de l’équipe',
      photo: '/images/team/yvette-ashiri.png',
    },
    {
      slug: 'aime-bisimwa',
      name: 'Aimé Bisimwa',
      role: 'Membre de l’équipe',
      photo: '/images/team/aime-bisimwa.png',
    },
    {
      slug: 'frederic-buyana',
      name: 'Frederic Buyana',
      role: 'Membre de l’équipe',
      photo: '/images/team/frederic-buyana.png',
    },
    {
      slug: 'victor-amisi',
      name: 'Victor Amisi',
      role: 'Membre de l’équipe',
      photo: '/images/team/victor-amisi.png',
    },
    {
      slug: 'blaise-biringanine',
      name: 'Blaise Biringanine',
      role: 'Membre de l’équipe',
      photo: '/images/team/blaise-biringanine.png',
    },
    {
      slug: 'bertin-bahati',
      name: 'Bertin Bahati',
      role: 'Membre de l’équipe',
      photo: '/images/team/bertin-bahati.png',
    },
    {
      slug: 'michel-sulubika',
      name: 'Michel Sulubika',
      role: 'Membre de l’équipe',
      photo: '/images/team/michel-sulubika.png',
    },
    {
      slug: 'aurelia-matingu',
      name: 'Aurelia Matingu',
      role: 'Membre de l’équipe',
      photo: '/images/team/aurelia-matingu.png',
    },
    {
      slug: 'rachel-bahati',
      name: 'Rachel Bahati',
      role: 'Membre de l’équipe',
      photo: '/images/team/rachel-bahati.png',
    },
    {
      slug: 'jonnahs-ammisih',
      name: 'Dr Jonnahs Ammisih',
      role: 'Membre de l’équipe',
      photo: '/images/team/jonnahs-ammisih.png',
    },
    {
      slug: 'merel-rusinga-nijs',
      name: 'Merel Rusinga-Nijs',
      role: 'Membre de l’équipe',
      photo: '/images/team/merel-rusinga-nijs.png',
    },
  ],
};

export function getTeam(locale: Locale): TeamMember[] {
  return team[locale];
}
