import type { Metadata, Viewport } from 'next';
import { Sora, IBM_Plex_Sans } from 'next/font/google';
import { EVENT } from '@/lib/data/event';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const display = Sora({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(EVENT.siteUrl),
  title: {
    default: `${EVENT.name} — ${EVENT.tagline} | CGC University, Mohali`,
    template: `%s — ${EVENT.name}`,
  },
  description: `${EVENT.name} is a 24-hour hackathon at ${EVENT.venue} on ${EVENT.dates}. Teams of ${EVENT.teamSize}. Prize pool ${EVENT.prizePool}.`,
  keywords: ['hackathon', 'Graviton', 'CGC University', 'Mohali', 'ISTE', 'student hackathon', 'Punjab'],
  openGraph: {
    type: 'website',
    siteName: EVENT.name,
    title: `${EVENT.name} — ${EVENT.tagline}`,
    description: `A 24-hour hackathon at ${EVENT.venue}. ${EVENT.dates}. Prize pool ${EVENT.prizePool}.`,
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${EVENT.name} — ${EVENT.tagline}`,
    description: `A 24-hour hackathon at ${EVENT.venue}. ${EVENT.dates}.`,
  },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: '#06070a',
  colorScheme: 'dark',
};

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: `${EVENT.name} — ${EVENT.tagline}`,
  startDate: '2026-10-31T09:00:00+05:30',
  endDate: '2026-11-01T19:00:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: EVENT.venue,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mohali',
      addressRegion: 'Punjab',
      addressCountry: 'IN',
    },
  },
  organizer: { '@type': 'Organization', name: EVENT.host },
  description: EVENT.about[0],
  url: EVENT.siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </body>
    </html>
  );
}
