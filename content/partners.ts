export type Partner = {
  name: string;
  category: 'financial' | 'community' | 'government' | 'ecosystem';
  url?: string;
  logo?: string;
};

export const partners: Partner[] = [
  {
    name: 'Scotiabank',
    category: 'financial',
    url: 'https://www.scotiabank.com',
    logo: '/images/partners/scotiabank.jpg',
  },
  {
    name: 'RBC',
    category: 'financial',
    url: 'https://www.rbc.com',
    logo: '/images/partners/rbc.png',
  },
  {
    name: 'Government of Ontario',
    category: 'government',
    url: 'https://www.ontario.ca',
    logo: '/images/partners/ontario.png',
  },
  {
    name: 'Rusinga Academy',
    category: 'ecosystem',
    url: 'https://rusingacademy.ca',
    logo: '/images/partners/rusinga-academy.png',
  },
  {
    name: 'Etsy Team',
    category: 'ecosystem',
    url: 'https://www.etsy.com',
  },
];
