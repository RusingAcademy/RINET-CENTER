import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rinetcenter.com'),
  title: {
    default: 'RINET Center | Francophone Immigrant Entrepreneurship Incubator in Ottawa',
    template: '%s · RINET Center',
  },
  description:
    'RINET Center supports Francophone immigrant entrepreneurs in Ottawa and beyond through mentorship, business training, startup acceleration, newcomer integration, and community partnerships.',
  keywords: [
    'Francophone immigrant entrepreneurship Ottawa',
    'Business incubator for immigrants Ottawa',
    'Newcomer entrepreneur support Canada',
    'Entrepreneurship programs for newcomers',
    'Black francophone entrepreneurs Ottawa',
    'African Great Lakes community Canada',
    'Women entrepreneurs immigrant support',
  ],
  openGraph: {
    type: 'website',
    siteName: 'RINET Center',
    locale: 'en_CA',
    alternateLocale: 'fr_CA',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@RinetCenter',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
