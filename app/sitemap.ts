import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const SITE = 'https://www.rinetcenter.com';

const routes = ['', '/about', '/programs', '/impact', '/events', '/get-involved', '/donate', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE}/${locale}${route}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.7,
      });
    }
  }
  return entries;
}
