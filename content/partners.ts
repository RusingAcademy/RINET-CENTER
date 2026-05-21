export type Partner = {
  name: string;
  category: 'financial' | 'community' | 'government' | 'ecosystem';
  url?: string;
};

export const partners: Partner[] = [
  { name: 'Scotiabank', category: 'financial', url: 'https://www.scotiabank.com' },
  { name: 'RBC', category: 'financial', url: 'https://www.rbc.com' },
  { name: 'Government of Ontario', category: 'government', url: 'https://www.ontario.ca' },
  { name: 'Etsy Team', category: 'ecosystem', url: 'https://www.etsy.com' },
  { name: 'Rusinga Academy', category: 'ecosystem', url: 'https://rusingacademy.ca' },
];
