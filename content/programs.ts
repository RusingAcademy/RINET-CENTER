import type { Locale } from '@/i18n/config';

export type Program = {
  slug: string;
  name: string;
  audience: string;
  shortDescription: string;
  outcomes: string[];
  duration?: string;
};

const programs: Record<Locale, Program[]> = {
  en: [
    {
      slug: 'business-launch',
      name: 'Business Launch Program',
      audience: 'First-time founders ready to start a business in Canada.',
      shortDescription:
        'An intensive program that walks aspiring entrepreneurs from idea to registered, market-ready business — with mentors, templates, and a launch plan.',
      outcomes: [
        'A validated business idea and lean business model',
        'A go-to-market plan and first customer pipeline',
        'A registered business and the basics of running it in Canada',
      ],
      duration: '6 months',
    },
    {
      slug: 'women-entrepreneurs-support',
      name: 'Women Entrepreneurs Support Program',
      audience: 'Women launching or growing a business while navigating new realities.',
      shortDescription:
        'A gender-responsive program offering mentorship, peer cohorts, and resources tailored to women immigrant entrepreneurs.',
      outcomes: [
        'A peer cohort and mentor network',
        'A clear growth plan and financial roadmap',
        'Visibility within partner and funding networks',
      ],
    },
    {
      slug: 'startup-acceleration',
      name: 'Startup Acceleration Program',
      audience: 'Early-stage founders with traction and ambition to scale.',
      shortDescription:
        'A focused acceleration sprint to sharpen positioning, unlock growth channels, and prepare founders for capital and partnerships.',
      outcomes: [
        'A refined value proposition and growth engine',
        'A pitch ready for investors, partners, and grant juries',
        'Connections to capital, partners, and customers',
      ],
      duration: '3 months',
    },
    {
      slug: 'newcomers-integration',
      name: 'Newcomers Integration Support',
      audience: 'Newcomers seeking to integrate socially and economically.',
      shortDescription:
        'Practical orientation, peer support, and pathways into employment or entrepreneurship for recent arrivals.',
      outcomes: [
        'A personal integration plan',
        'Knowledge of key systems (banking, taxes, healthcare, work, business)',
        'A first community network in Ottawa',
      ],
    },
    {
      slug: 'social-entrepreneurship-development',
      name: 'Social Entrepreneurship Development Program',
      audience: 'Founders building ventures that solve social or community challenges.',
      shortDescription:
        'Helps mission-driven founders design ventures that combine financial sustainability with measurable social impact.',
      outcomes: [
        'A theory of change and impact model',
        'A sustainable revenue model aligned with mission',
        'Access to a network of social finance partners',
      ],
    },
    {
      slug: 'post-incubation-support',
      name: 'Post-Incubation Support Program',
      audience: 'Alumni and businesses that have completed an incubation program.',
      shortDescription:
        'Continued mentorship, peer learning, and growth support for founders who have launched and are scaling their businesses.',
      outcomes: [
        'Ongoing mentor and peer support',
        'Tools to manage hiring, financing, and operations',
        'Continued visibility within the RINET partner network',
      ],
    },
  ],
  fr: [
    {
      slug: 'business-launch',
      name: 'Programme de lancement d’entreprise',
      audience: 'Fondateurs et fondatrices qui démarrent leur première entreprise au Canada.',
      shortDescription:
        'Un programme intensif qui mène les aspirants entrepreneurs de l’idée à une entreprise enregistrée et prête pour le marché — avec mentors, outils et plan de lancement.',
      outcomes: [
        'Une idée d’affaires validée et un modèle d’affaires lean',
        'Un plan de mise en marché et un premier portefeuille de clients',
        'Une entreprise enregistrée et les bases de la gestion au Canada',
      ],
      duration: '6 mois',
    },
    {
      slug: 'women-entrepreneurs-support',
      name: 'Programme d’appui aux femmes entrepreneures',
      audience: 'Femmes qui lancent ou développent leur entreprise en contexte d’immigration.',
      shortDescription:
        'Un programme adapté offrant mentorat, cohortes de pairs et ressources sur mesure pour les femmes entrepreneures immigrantes.',
      outcomes: [
        'Une cohorte de pairs et un réseau de mentors',
        'Un plan de croissance et une feuille de route financière clairs',
        'Une visibilité au sein des réseaux de partenaires et de financement',
      ],
    },
    {
      slug: 'startup-acceleration',
      name: 'Programme d’accélération de startup',
      audience: 'Fondateurs en phase de démarrage avec traction et ambition de croissance.',
      shortDescription:
        'Un sprint d’accélération ciblé pour affiner le positionnement, débloquer les canaux de croissance et préparer les fondateurs au financement et aux partenariats.',
      outcomes: [
        'Une proposition de valeur affinée et un moteur de croissance',
        'Un pitch prêt pour investisseurs, partenaires et jurys de subventions',
        'Des connexions avec du capital, des partenaires et des clients',
      ],
      duration: '3 mois',
    },
    {
      slug: 'newcomers-integration',
      name: 'Soutien à l’intégration des nouveaux arrivants',
      audience: 'Nouveaux arrivants qui cherchent à s’intégrer socialement et économiquement.',
      shortDescription:
        'Orientation pratique, soutien par les pairs et accès à l’emploi ou à l’entrepreneuriat pour les personnes récemment arrivées.',
      outcomes: [
        'Un plan d’intégration personnel',
        'Une connaissance des systèmes clés (banque, impôts, santé, travail, entreprise)',
        'Un premier réseau communautaire à Ottawa',
      ],
    },
    {
      slug: 'social-entrepreneurship-development',
      name: 'Programme de développement en entrepreneuriat social',
      audience: 'Fondateurs qui bâtissent des entreprises répondant à des enjeux sociaux ou communautaires.',
      shortDescription:
        'Accompagne les fondateurs portés par une mission à concevoir des entreprises alliant viabilité financière et impact social mesurable.',
      outcomes: [
        'Une théorie du changement et un modèle d’impact',
        'Un modèle de revenus durable, aligné sur la mission',
        'L’accès à un réseau de partenaires de finance sociale',
      ],
    },
    {
      slug: 'post-incubation-support',
      name: 'Programme de soutien post-incubation',
      audience: 'Alumni et entreprises qui ont terminé un programme d’incubation.',
      shortDescription:
        'Mentorat continu, apprentissage par les pairs et soutien à la croissance pour les fondateurs qui ont lancé et développent leur entreprise.',
      outcomes: [
        'Un soutien continu par les mentors et les pairs',
        'Des outils pour gérer l’embauche, le financement et les opérations',
        'Une visibilité continue dans le réseau de partenaires RINET',
      ],
    },
  ],
};

export function getPrograms(locale: Locale): Program[] {
  return programs[locale];
}

export function getProgram(locale: Locale, slug: string): Program | undefined {
  return programs[locale].find((p) => p.slug === slug);
}
