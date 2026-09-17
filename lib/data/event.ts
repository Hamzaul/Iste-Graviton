export const EVENT = {
  name: 'Graviton',
  tagline: 'Hack the Orbit',
  edition: '2026',
  host: "ISTE Student Chapter, CGC University Mohali",
  collaborator: 'D4 Community',
  dates: '31 Oct – 1 Nov 2026',
  datesShort: '31 Oct – 1 Nov',
  /** Reporting time on day one, IST. Drives the countdown. */
  startsAt: '2026-10-31T09:00:00+05:30',
  duration: '24 hours',
  teamSize: '3–4 members',
  venue: 'CGC University, Mohali',
  venueFull: 'CGC University, Mohali, Punjab, India',
  mapUrl: 'https://maps.google.com/?q=CGC+University+Mohali',
  prizePool: '₹1,35,000+',
  entryFee: 'To be confirmed',
  expectedParticipants: '2000+',
  registerUrl:
    'https://unstop.com/o/ue9CY0y?lb=m1pLlIw4&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Vashupan45269',
  email: 'cgcuniversityiste@gmail.com',
  instagram: 'cgcuniversity_iste',
  instagramUrl: 'https://www.instagram.com/cgcuniversity_iste/',
  siteUrl: 'https://graviton.example',
  about: [
    'Graviton is a hackathon designed to bring together 2000+ ambitious minds to transform ideas into meaningful solutions for real-world challenges.',
    'Across technology, sustainability, healthcare, finance, education and urban development, participants will collaborate, innovate and build solutions that have the potential to create meaningful impact.',
    'Graviton provides a platform where ideas move beyond imagination — into execution.',
  ],
  contacts: [
    { name: 'Hrithik', role: 'President, ISTE Students\u2019 Chapter', phone: '9007924535' },
    { name: 'Vishwas Panwar', role: 'Core member', phone: '9548901274' },
  ],
} as const;

/** Strings for the scrolling marquee under the header. */
export const MARQUEE_ITEMS: string[] = [
  `${EVENT.duration} · ${EVENT.datesShort} 2026`,
  `Team size: ${EVENT.teamSize}`,
  `Prize pool: ${EVENT.prizePool}`,
  'Six themes · one build',
  `Venue: ${EVENT.venue}`,
  'Registration open on Unstop',
  `${EVENT.expectedParticipants} builders expected`,
];
