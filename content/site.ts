// Centralized bilingual content for the RINET Center website.
// All editorial copy, program details, impact stats, partners, and CTAs live here.
// Numbers marked with "// TODO" are placeholders to be validated by RINET Center.

import type { Locale } from '@/i18n/config';

export const site = {
  name: 'RINET Center',
  url: 'https://www.rinetcenter.com',
  email: 'contact@rinet.center',
  location: {
    city: 'Ottawa',
    region: 'Ontario',
    country: 'Canada',
  },
  social: {
    instagram: 'https://www.instagram.com/rinetcenter',
    facebook: 'https://www.facebook.com/RinetCenter',
    twitter: 'https://twitter.com/RinetCenter',
    youtube: 'https://www.youtube.com/@RINETCENTER',
    tiktok: 'https://www.tiktok.com/@rinetcenter',
  },
} as const;

export type NavItem = { href: string; label: string };

export const dictionary = {
  en: {
    meta: {
      siteTitle: 'RINET Center | Francophone Immigrant Entrepreneurship Incubator in Ottawa',
      siteDescription:
        'RINET Center supports Francophone immigrant entrepreneurs in Ottawa and beyond through mentorship, business training, startup acceleration, newcomer integration, and community partnerships.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      impact: 'Impact',
      events: 'Events',
      getInvolved: 'Get Involved',
      donate: 'Donate',
      contact: 'Contact',
      skipToContent: 'Skip to main content',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    common: {
      learnMore: 'Learn more',
      applyNow: 'Apply now',
      readMore: 'Read more',
      partnerWithUs: 'Partner with us',
      donate: 'Donate',
      contactUs: 'Contact us',
      seeAllPrograms: 'See all programs',
      seeAllEvents: 'See all events',
      brandTagline: 'Francophone immigrant entrepreneurship hub',
    },
    home: {
      hero: {
        eyebrow: 'A Francophone Immigrant Entrepreneurship & Integration Hub in Canada',
        title: 'Helping Francophone Immigrant Entrepreneurs Launch, Grow, and Thrive in Canada',
        subtitle:
          'Based in Ottawa, RINET Center provides mentorship, entrepreneurship training, newcomer integration support, and access to a growing network of partners for emerging entrepreneurs and community leaders.',
        ctaPrimary: 'Apply to a Program',
        ctaSecondary: 'Become a Partner',
        ctaTertiary: 'Support Our Mission',
      },
      whoWeHelp: {
        title: 'Who We Help',
        subtitle: 'Tailored support for the people who power inclusive, local economies.',
        items: [
          {
            title: 'Francophone immigrant entrepreneurs',
            description:
              'Founders building businesses in French while navigating a new economic, legal, and cultural environment.',
          },
          {
            title: 'Newcomers',
            description:
              'Recent arrivals seeking the tools, networks, and confidence to integrate socially and economically.',
          },
          {
            title: 'Women entrepreneurs',
            description:
              'Women launching or scaling ventures with mentorship, peer cohorts, and gender-responsive resources.',
          },
          {
            title: 'Youth and emerging leaders',
            description:
              'Young changemakers turning ideas into businesses, social ventures, and community projects.',
          },
        ],
      },
      whatWeOffer: {
        title: 'What We Offer',
        subtitle: 'Programs designed to move you from idea to impact.',
      },
      impact: {
        title: 'Our Impact',
        subtitle: 'Real outcomes, real businesses, real community.',
        note: 'Numbers shown are working estimates. Final figures will be confirmed in our next annual report.',
      },
      partners: {
        title: 'Our Partners',
        subtitle:
          'We collaborate with financial institutions, community organizations, entrepreneurship networks, and local leaders to support immigrant-led businesses.',
      },
      testimonials: {
        title: 'Voices from the community',
        subtitle: 'What entrepreneurs, mentors, and partners say about RINET Center.',
      },
      finalCta: {
        title: 'Ready to start your entrepreneurial journey?',
        subtitle:
          'Join a program, partner with us, or fund our mission — every action helps immigrant entrepreneurs build a stronger Canada.',
        primary: 'Apply Now',
        secondary: 'Partner With Us',
        tertiary: 'Donate',
      },
    },
    about: {
      title: 'About RINET Center',
      lead:
        'Founded in 2021 in Ottawa, RINET Center is a community-driven incubator helping Francophone immigrants — and particularly newcomers from the African Great Lakes region — turn ideas into sustainable businesses and lead the integration of their communities.',
      mission: {
        title: 'Our Mission',
        body:
          'To promote entrepreneurship and socio-economic integration through mentorship, practical training, an extensive partner network, and collaborative workspaces.',
      },
      vision: {
        title: 'Our Vision',
        body:
          'Strong, prosperous Francophone immigrant communities whose economic, social, and cultural contributions are recognized and valued across Canada.',
      },
      valuesTitle: 'Our Values',
      values: [
        {
          title: 'Diversity, Equity & Inclusion',
          description:
            'We design every program with cultural humility and equitable access for newcomers, women, and youth.',
        },
        {
          title: 'Entrepreneurial mindset',
          description:
            'We treat every idea as a seed and every founder as a leader — capable, accountable, and resourceful.',
        },
        {
          title: 'Community first',
          description:
            'We grow alongside the Francophone diaspora, our partners, and the broader Ottawa community.',
        },
        {
          title: 'Practical excellence',
          description:
            'We favour clear tools, action, and measurable results over theory.',
        },
      ],
      whyTitle: 'Why RINET Center',
      whyPoints: [
        'A trusted entry point for Francophone newcomers who face language, financial, and cultural barriers.',
        'Programs delivered in French and English, designed for immigrant realities.',
        'A growing network of mentors, partners, and alumni who open doors and share opportunities.',
        'Strong roots in Ottawa, with the ambition to serve communities across Canada and the African Great Lakes.',
      ],
      teamTitle: 'Our Team',
      teamNote:
        'Our leadership, staff, and mentor network bring together expertise in entrepreneurship, settlement, public policy, and community development. The full team will be introduced here — please check back soon.',
      ctaTitle: 'Want to know more about our work?',
      ctaSubtitle: 'Reach out to our team — we would love to hear from you.',
    },
    programs: {
      title: 'Programs',
      lead:
        'Six programs covering the full entrepreneurial journey — from first idea to scaling — and the integration support that makes it possible.',
      audienceLabel: 'For',
      outcomeLabel: 'You will leave with',
      ctaLabel: 'Apply or learn more',
    },
    impact: {
      title: 'Our Impact',
      lead:
        'RINET Center exists to move people — entrepreneurs, families, and communities — forward. Here is a snapshot of what we are building together.',
      areasTitle: 'Where we work',
      areas: [
        {
          name: 'Canada — National Capital Region',
          description:
            'Our home base. We support Francophone immigrant entrepreneurs in Ottawa, Gatineau, and surrounding communities.',
        },
        {
          name: 'African Great Lakes Region',
          description:
            'We design international cooperation projects connecting Canadian and African Great Lakes communities through entrepreneurship.',
        },
      ],
      pillarsTitle: 'How we create impact',
      pillars: [
        {
          title: 'Entrepreneurship',
          description: 'Coaching, training, and incubation that turns ideas into revenue-generating businesses.',
        },
        {
          title: 'Integration',
          description: 'Practical newcomer support — navigating systems, building networks, and finding belonging.',
        },
        {
          title: 'Economic autonomy',
          description: 'Pathways to income, assets, and ownership for women, youth, and newcomer families.',
        },
        {
          title: 'Mentorship',
          description: 'Long-term relationships with mentors who understand immigrant realities.',
        },
        {
          title: 'Community leadership',
          description: 'Developing the next generation of leaders in Francophone diaspora communities.',
        },
      ],
      reportTitle: 'Annual & impact reports',
      reportBody:
        'Detailed impact reports will be published here as our measurement framework matures. To receive the next report by email, contact us.',
    },
    events: {
      title: 'Events',
      lead:
        'Workshops, networking nights, signature celebrations — moments where the community comes together to build, learn, and connect.',
      upcomingTitle: 'Upcoming events',
      upcomingEmpty:
        'There are currently no upcoming events. Please check back soon or subscribe to receive updates.',
      pastTitle: 'Past events',
      signatureTitle: 'Signature events',
      signatureLead:
        'Annual events that celebrate community, culture, and entrepreneurial achievement.',
      typesTitle: 'Types of events we host',
      types: [
        'Entrepreneurship workshops & training',
        'Networking and mentorship meetups',
        'Community building events',
        'Pitch competitions & demo days',
        'Women in Business leadership series',
        'Youth entrepreneurship camps',
      ],
    },
    getInvolved: {
      title: 'Get Involved',
      lead:
        'There is a place for you at RINET Center — whatever your skills, role, or budget. Choose the path that fits you best.',
      paths: [
        {
          title: 'Become a Mentor',
          description: 'Share your expertise with founders building their first business in Canada.',
          benefit: 'Give back, grow your network, and develop coaching skills.',
          cta: 'Apply to mentor',
        },
        {
          title: 'Volunteer',
          description: 'Support events, workshops, and community programs.',
          benefit: 'Gain experience and connect with a vibrant entrepreneurial community.',
          cta: 'Sign up',
        },
        {
          title: 'Become a Partner',
          description: 'Co-design programs, contribute resources, and amplify impact together.',
          benefit: 'Reach immigrant entrepreneurs and align with an inclusive growth agenda.',
          cta: 'Start a conversation',
        },
        {
          title: 'Sponsor a Program',
          description: 'Underwrite a cohort, scholarship, or signature event.',
          benefit: 'Direct, measurable impact on a specific program or population.',
          cta: 'Discuss sponsorship',
        },
        {
          title: 'Donate',
          description: 'Fund mentorship, training, and newcomer integration.',
          benefit: 'Every dollar goes back into programs serving immigrant entrepreneurs.',
          cta: 'Make a gift',
        },
        {
          title: 'Join an Event',
          description: 'Attend a workshop, networking night, or signature event.',
          benefit: 'Meet founders, mentors, and partners face to face.',
          cta: 'See events',
        },
      ],
    },
    donate: {
      title: 'Support our mission',
      lead:
        'Your contribution helps immigrant entrepreneurs access mentorship, training, business resources, and community support.',
      whyTitle: 'Why your gift matters',
      whyPoints: [
        'Francophone newcomers face combined language, financial, and network barriers when launching a business.',
        'Most general-purpose programs are not designed for their realities — RINET Center is.',
        'Every dollar you give translates into mentorship hours, workshop seats, and direct support for founders.',
      ],
      useTitle: 'Where your gift goes',
      useItems: [
        { label: 'Mentorship & coaching', description: 'Hours of one-to-one support for immigrant founders.' },
        { label: 'Workshops & training', description: 'Practical sessions on business, finance, and integration.' },
        { label: 'Community events', description: 'Networking and signature events that build trust and visibility.' },
        { label: 'Operations & accessibility', description: 'Keeping our programs free or affordable for newcomers.' },
      ],
      transparencyTitle: 'Transparency',
      transparencyBody:
        'We are committed to reporting how donations are used. Detailed financial and impact reports will be made available to our donor community.',
      ctaTitle: 'Ready to make a gift?',
      ctaBody:
        'Donation processing is being finalized. To give today or discuss a major gift, please contact us directly — we will personally walk you through the options.',
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          question: 'Is RINET Center a registered charity?',
          answer:
            'RINET Center operates as a community organization in Ottawa. Charitable status and tax receipt eligibility will be confirmed on this page as our paperwork is finalized.',
        },
        {
          question: 'Can my company sponsor a program?',
          answer:
            'Yes. Corporate sponsors can underwrite cohorts, scholarships, or signature events. Contact us to design the partnership.',
        },
        {
          question: 'Can I donate goods or services in kind?',
          answer:
            'Absolutely. Pro bono legal, accounting, marketing, or technology services are especially welcome.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      lead:
        'Tell us a bit about you and we will route your message to the right person. Most messages receive a reply within two business days.',
      profileLabel: 'I am reaching out as a…',
      profiles: [
        { value: 'entrepreneur', label: 'Entrepreneur or aspiring founder' },
        { value: 'partner', label: 'Partner organization' },
        { value: 'donor', label: 'Donor or sponsor' },
        { value: 'volunteer', label: 'Volunteer or mentor' },
        { value: 'media', label: 'Media or institution' },
      ],
      form: {
        name: 'Full name',
        email: 'Email',
        organization: 'Organization (optional)',
        message: 'How can we help?',
        submit: 'Send message',
        note: 'This form will be wired to your email or CRM. For now, please email us directly at contact@rinet.center.',
      },
      reach: {
        title: 'Reach us directly',
        emailLabel: 'Email',
        locationLabel: 'Location',
        socialLabel: 'Follow us',
      },
    },
    footer: {
      tagline: 'Inspiring growth and excellence for Francophone immigrants in Canada and beyond.',
      rights: 'All rights reserved.',
      builtWith: 'Site built for impact, accessibility, and clarity.',
      sections: {
        explore: 'Explore',
        engage: 'Engage',
        contact: 'Contact',
      },
    },
  },
  fr: {
    meta: {
      siteTitle: 'Centre RINET | Incubateur d’entrepreneuriat pour immigrants francophones à Ottawa',
      siteDescription:
        'Le Centre RINET accompagne les entrepreneurs immigrants francophones à Ottawa et au-delà grâce au mentorat, à la formation entrepreneuriale, à l’accélération de startups, à l’intégration des nouveaux arrivants et à des partenariats communautaires.',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      programs: 'Programmes',
      impact: 'Impact',
      events: 'Événements',
      getInvolved: 'S’impliquer',
      donate: 'Faire un don',
      contact: 'Contact',
      skipToContent: 'Aller au contenu principal',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
    },
    common: {
      learnMore: 'En savoir plus',
      applyNow: 'Postuler maintenant',
      readMore: 'Lire la suite',
      partnerWithUs: 'Devenir partenaire',
      donate: 'Faire un don',
      contactUs: 'Nous contacter',
      seeAllPrograms: 'Voir tous les programmes',
      seeAllEvents: 'Voir tous les événements',
      brandTagline: 'Pôle d’entrepreneuriat immigrant francophone',
    },
    home: {
      hero: {
        eyebrow: 'Un pôle d’entrepreneuriat et d’intégration économique pour les immigrants francophones au Canada',
        title:
          'Nous accompagnons les entrepreneurs immigrants francophones à lancer, structurer et développer leur entreprise au Canada.',
        subtitle:
          'Basé à Ottawa, le Centre RINET offre du mentorat, des formations entrepreneuriales, un soutien à l’intégration des nouveaux arrivants et un accès à un réseau de partenaires engagés.',
        ctaPrimary: 'Postuler à un programme',
        ctaSecondary: 'Devenir partenaire',
        ctaTertiary: 'Soutenir notre mission',
      },
      whoWeHelp: {
        title: 'À qui nous nous adressons',
        subtitle: 'Un accompagnement sur mesure pour celles et ceux qui font vivre l’économie locale.',
        items: [
          {
            title: 'Entrepreneurs immigrants francophones',
            description:
              'Des fondateurs et fondatrices qui bâtissent leur entreprise en français dans un nouvel environnement économique, juridique et culturel.',
          },
          {
            title: 'Nouveaux arrivants',
            description:
              'Des personnes récemment arrivées qui cherchent des outils, un réseau et la confiance nécessaire pour s’intégrer.',
          },
          {
            title: 'Femmes entrepreneures',
            description:
              'Des femmes qui lancent ou développent leur entreprise grâce au mentorat, à des cohortes de pairs et à des ressources adaptées.',
          },
          {
            title: 'Jeunes leaders émergents',
            description:
              'Des jeunes qui transforment leurs idées en entreprises, en projets sociaux et en initiatives communautaires.',
          },
        ],
      },
      whatWeOffer: {
        title: 'Ce que nous offrons',
        subtitle: 'Des programmes conçus pour passer de l’idée à l’impact.',
      },
      impact: {
        title: 'Notre impact',
        subtitle: 'Des résultats concrets, des entreprises réelles, une communauté forte.',
        note: 'Les chiffres présentés sont des estimations de travail. Les chiffres définitifs seront confirmés dans notre prochain rapport annuel.',
      },
      partners: {
        title: 'Nos partenaires',
        subtitle:
          'Nous collaborons avec des institutions financières, des organismes communautaires, des réseaux entrepreneuriaux et des leaders locaux afin de soutenir les entreprises portées par les immigrants.',
      },
      testimonials: {
        title: 'Voix de la communauté',
        subtitle: 'Ce que disent les entrepreneurs, les mentors et les partenaires du Centre RINET.',
      },
      finalCta: {
        title: 'Prêt à commencer votre parcours entrepreneurial ?',
        subtitle:
          'Rejoignez un programme, devenez partenaire ou financez notre mission — chaque geste aide les entrepreneurs immigrants à bâtir un Canada plus fort.',
        primary: 'Postuler maintenant',
        secondary: 'Devenir partenaire',
        tertiary: 'Faire un don',
      },
    },
    about: {
      title: 'À propos du Centre RINET',
      lead:
        'Fondé en 2021 à Ottawa, le Centre RINET est un incubateur communautaire qui aide les immigrants francophones — en particulier les nouveaux arrivants de la région des Grands Lacs africains — à transformer leurs idées en entreprises durables et à porter l’intégration de leurs communautés.',
      mission: {
        title: 'Notre mission',
        body:
          'Promouvoir l’entrepreneuriat et l’intégration socio-économique grâce au mentorat, à des formations pratiques, à un large réseau de partenaires et à des espaces de travail collaboratifs.',
      },
      vision: {
        title: 'Notre vision',
        body:
          'Des communautés immigrantes francophones fortes et prospères, dont les contributions économiques, sociales et culturelles sont reconnues partout au Canada.',
      },
      valuesTitle: 'Nos valeurs',
      values: [
        {
          title: 'Diversité, équité et inclusion',
          description:
            'Chaque programme est conçu avec humilité culturelle et un accès équitable pour les nouveaux arrivants, les femmes et les jeunes.',
        },
        {
          title: 'Esprit entrepreneurial',
          description:
            'Chaque idée est une graine, chaque fondateur est un leader — compétent, responsable et débrouillard.',
        },
        {
          title: 'La communauté d’abord',
          description:
            'Nous grandissons aux côtés de la diaspora francophone, de nos partenaires et de la communauté d’Ottawa.',
        },
        {
          title: 'Excellence pratique',
          description:
            'Nous privilégions des outils clairs, l’action et des résultats mesurables plutôt que la théorie.',
        },
      ],
      whyTitle: 'Pourquoi le Centre RINET',
      whyPoints: [
        'Un point d’entrée de confiance pour les nouveaux arrivants francophones confrontés à des barrières linguistiques, financières et culturelles.',
        'Des programmes offerts en français et en anglais, adaptés aux réalités immigrantes.',
        'Un réseau croissant de mentors, de partenaires et d’anciens qui ouvrent des portes et partagent des opportunités.',
        'Des racines solides à Ottawa et l’ambition de servir les communautés à travers le Canada et la région des Grands Lacs africains.',
      ],
      teamTitle: 'Notre équipe',
      teamNote:
        'Notre direction, notre équipe et notre réseau de mentors réunissent une expertise en entrepreneuriat, en accueil des nouveaux arrivants, en politiques publiques et en développement communautaire. L’équipe complète sera présentée ici — revenez bientôt.',
      ctaTitle: 'Vous voulez en savoir plus sur notre travail ?',
      ctaSubtitle: 'Écrivez à notre équipe — nous serons heureux d’échanger avec vous.',
    },
    programs: {
      title: 'Programmes',
      lead:
        'Six programmes qui couvrent le parcours entrepreneurial complet — de la première idée à la croissance — et le soutien à l’intégration qui rend tout cela possible.',
      audienceLabel: 'Pour',
      outcomeLabel: 'Ce que vous repartirez avec',
      ctaLabel: 'Postuler ou en savoir plus',
    },
    impact: {
      title: 'Notre impact',
      lead:
        'Le Centre RINET existe pour faire avancer des personnes — entrepreneurs, familles et communautés. Voici un aperçu de ce que nous bâtissons ensemble.',
      areasTitle: 'Où nous intervenons',
      areas: [
        {
          name: 'Canada — région de la capitale nationale',
          description:
            'Notre base. Nous accompagnons les entrepreneurs immigrants francophones d’Ottawa, de Gatineau et des environs.',
        },
        {
          name: 'Région des Grands Lacs africains',
          description:
            'Nous menons des projets de coopération internationale reliant les communautés canadiennes et celles des Grands Lacs africains par l’entrepreneuriat.',
        },
      ],
      pillarsTitle: 'Comment nous créons de l’impact',
      pillars: [
        {
          title: 'Entrepreneuriat',
          description: 'Coaching, formation et incubation pour transformer une idée en entreprise viable.',
        },
        {
          title: 'Intégration',
          description: 'Un soutien concret aux nouveaux arrivants : systèmes, réseau, sentiment d’appartenance.',
        },
        {
          title: 'Autonomie économique',
          description: 'Des parcours vers le revenu, le patrimoine et la propriété pour les femmes, les jeunes et les familles.',
        },
        {
          title: 'Mentorat',
          description: 'Des relations durables avec des mentors qui comprennent les réalités immigrantes.',
        },
        {
          title: 'Leadership communautaire',
          description: 'Former la prochaine génération de leaders au sein de la diaspora francophone.',
        },
      ],
      reportTitle: 'Rapports annuels et rapports d’impact',
      reportBody:
        'Des rapports d’impact détaillés seront publiés ici à mesure que notre cadre de mesure évolue. Pour recevoir le prochain rapport par courriel, écrivez-nous.',
    },
    events: {
      title: 'Événements',
      lead:
        'Ateliers, soirées de réseautage, événements signatures — des moments où la communauté se rassemble pour bâtir, apprendre et se connecter.',
      upcomingTitle: 'Événements à venir',
      upcomingEmpty:
        'Aucun événement à venir n’est actuellement confirmé. Revenez bientôt ou inscrivez-vous pour recevoir nos prochaines annonces.',
      pastTitle: 'Événements passés',
      signatureTitle: 'Événements signatures',
      signatureLead:
        'Des rendez-vous annuels qui célèbrent la communauté, la culture et la réussite entrepreneuriale.',
      typesTitle: 'Les types d’événements que nous organisons',
      types: [
        'Ateliers et formations en entrepreneuriat',
        'Rencontres de réseautage et de mentorat',
        'Événements de rapprochement communautaire',
        'Concours de pitch et demo days',
        'Série de leadership « Women in Business »',
        'Camps d’entrepreneuriat pour les jeunes',
      ],
    },
    getInvolved: {
      title: 'S’impliquer',
      lead:
        'Il y a une place pour vous au Centre RINET — quelles que soient vos compétences, votre rôle ou votre budget. Choisissez la voie qui vous correspond.',
      paths: [
        {
          title: 'Devenir mentor',
          description: 'Partagez votre expertise avec des fondateurs qui bâtissent leur première entreprise au Canada.',
          benefit: 'Redonner, élargir votre réseau et développer vos compétences en coaching.',
          cta: 'Postuler comme mentor',
        },
        {
          title: 'Faire du bénévolat',
          description: 'Soutenez les événements, les ateliers et les programmes communautaires.',
          benefit: 'Gagnez en expérience et rejoignez une communauté entrepreneuriale vibrante.',
          cta: 'M’inscrire',
        },
        {
          title: 'Devenir partenaire',
          description: 'Co-construisez des programmes, partagez des ressources et amplifiez l’impact.',
          benefit: 'Rejoignez les entrepreneurs immigrants et un agenda de croissance inclusive.',
          cta: 'Démarrer la conversation',
        },
        {
          title: 'Commanditer un programme',
          description: 'Financez une cohorte, une bourse ou un événement signature.',
          benefit: 'Un impact direct et mesurable sur un programme ou une population.',
          cta: 'Discuter d’une commandite',
        },
        {
          title: 'Faire un don',
          description: 'Financez le mentorat, la formation et l’intégration des nouveaux arrivants.',
          benefit: 'Chaque dollar retourne aux programmes qui servent les entrepreneurs immigrants.',
          cta: 'Donner',
        },
        {
          title: 'Participer à un événement',
          description: 'Assistez à un atelier, une soirée de réseautage ou un événement signature.',
          benefit: 'Rencontrez des fondateurs, des mentors et des partenaires en personne.',
          cta: 'Voir les événements',
        },
      ],
    },
    donate: {
      title: 'Soutenir notre mission',
      lead:
        'Votre contribution aide des entrepreneurs immigrants à accéder au mentorat, à la formation, aux ressources d’affaires et au soutien communautaire.',
      whyTitle: 'Pourquoi votre don compte',
      whyPoints: [
        'Les nouveaux arrivants francophones cumulent des barrières linguistiques, financières et de réseau au moment de lancer leur entreprise.',
        'La plupart des programmes généralistes ne sont pas conçus pour leurs réalités — le Centre RINET, oui.',
        'Chaque dollar que vous donnez se traduit en heures de mentorat, en places d’atelier et en soutien direct aux fondateurs.',
      ],
      useTitle: 'Où va votre don',
      useItems: [
        { label: 'Mentorat et coaching', description: 'Des heures de soutien individuel pour les fondateurs immigrants.' },
        { label: 'Ateliers et formations', description: 'Des sessions pratiques sur l’entreprise, les finances et l’intégration.' },
        { label: 'Événements communautaires', description: 'Réseautage et événements signatures qui bâtissent confiance et visibilité.' },
        { label: 'Opérations et accessibilité', description: 'Maintenir nos programmes gratuits ou abordables pour les nouveaux arrivants.' },
      ],
      transparencyTitle: 'Transparence',
      transparencyBody:
        'Nous nous engageons à rendre compte de l’usage des dons. Des rapports financiers et d’impact détaillés seront mis à la disposition de notre communauté de donateurs.',
      ctaTitle: 'Prêt à faire un don ?',
      ctaBody:
        'Le traitement des dons est en cours de finalisation. Pour donner aujourd’hui ou discuter d’un don majeur, contactez-nous directement — nous vous guiderons personnellement.',
      faqTitle: 'Questions fréquentes',
      faq: [
        {
          question: 'Le Centre RINET est-il un organisme de bienfaisance enregistré ?',
          answer:
            'Le Centre RINET opère comme organisme communautaire à Ottawa. Le statut d’organisme de bienfaisance et l’admissibilité aux reçus fiscaux seront confirmés sur cette page une fois les démarches finalisées.',
        },
        {
          question: 'Mon entreprise peut-elle commanditer un programme ?',
          answer:
            'Oui. Les commanditaires corporatifs peuvent financer des cohortes, des bourses ou des événements signatures. Contactez-nous pour concevoir le partenariat.',
        },
        {
          question: 'Puis-je donner des biens ou des services en nature ?',
          answer:
            'Tout à fait. Les services pro bono en droit, comptabilité, marketing ou technologie sont particulièrement bienvenus.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      lead:
        'Parlez-nous brièvement de vous et nous transmettrons votre message à la bonne personne. La plupart des messages reçoivent une réponse en deux jours ouvrables.',
      profileLabel: 'Je vous écris en tant que…',
      profiles: [
        { value: 'entrepreneur', label: 'Entrepreneur ou aspirant fondateur' },
        { value: 'partner', label: 'Organisation partenaire' },
        { value: 'donor', label: 'Donateur ou commanditaire' },
        { value: 'volunteer', label: 'Bénévole ou mentor' },
        { value: 'media', label: 'Média ou institution' },
      ],
      form: {
        name: 'Nom complet',
        email: 'Courriel',
        organization: 'Organisation (facultatif)',
        message: 'Comment pouvons-nous aider ?',
        submit: 'Envoyer le message',
        note: 'Ce formulaire sera connecté à votre courriel ou CRM. Pour l’instant, écrivez-nous directement à contact@rinet.center.',
      },
      reach: {
        title: 'Nous joindre directement',
        emailLabel: 'Courriel',
        locationLabel: 'Emplacement',
        socialLabel: 'Suivez-nous',
      },
    },
    footer: {
      tagline: 'Inspirer la croissance et l’excellence des immigrants francophones au Canada et au-delà.',
      rights: 'Tous droits réservés.',
      builtWith: 'Site conçu pour l’impact, l’accessibilité et la clarté.',
      sections: {
        explore: 'Explorer',
        engage: 'Agir',
        contact: 'Contact',
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}

export function buildNav(locale: Locale): NavItem[] {
  const d = dictionary[locale];
  return [
    { href: `/${locale}`, label: d.nav.home },
    { href: `/${locale}/about`, label: d.nav.about },
    { href: `/${locale}/programs`, label: d.nav.programs },
    { href: `/${locale}/impact`, label: d.nav.impact },
    { href: `/${locale}/events`, label: d.nav.events },
    { href: `/${locale}/get-involved`, label: d.nav.getInvolved },
    { href: `/${locale}/donate`, label: d.nav.donate },
    { href: `/${locale}/contact`, label: d.nav.contact },
  ];
}
