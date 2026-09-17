import type { MetadataRoute } from 'next';
import { EVENT } from '@/lib/data/event';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', EVENT.siteUrl).toString(),
  };
}
