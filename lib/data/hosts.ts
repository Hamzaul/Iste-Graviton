export type Host = {
  name: string;
  role: string;
  note: string;
  logo: string;
  /** Rendered logo width in px at desktop size. */
  width: number;
  height: number;
  url?: string;
  /** Anchor host, rendered in the centre of the row. */
  primary?: boolean;
};

export const HOSTS: Host[] = [
  {
    name: "ISTE Students' Chapter",
    role: 'Organising chapter',
    note: 'Indian Society for Technical Education, CGC University Mohali.',
    logo: '/logos/iste.png',
    width: 120,
    height: 120,
    url: 'https://www.instagram.com/cgcuniversity_iste/',
  },
  {
    name: 'CGC University',
    role: 'Host campus',
    note: 'Venue, infrastructure and institutional backing in Mohali, Punjab.',
    logo: '/logos/cgc.webp',
    width: 210,
    height: 84,
    url: 'https://www.cgcuniversity.in/',
    primary: true,
  },
  {
    name: 'D4 Community',
    role: 'In collaboration with',
    note: 'Discite. Develop. Debug. Deploy — community partner for mentors and outreach.',
    logo: '/logos/d4.png',
    width: 150,
    height: 88,
  },
];
