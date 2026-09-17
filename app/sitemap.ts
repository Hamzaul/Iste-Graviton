import type { MetadataRoute } from 'next';
import { EVENT } from '@/lib/data/event';
import { NAV } from '@/lib/data/nav';

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((item) => ({
    url: new URL(item.href, EVENT.siteUrl).toString(),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: item.href === '/' ? 1 : 0.7,
  }));
}
