export type Sponsor = {
  name: string;
  monogram: string;
  category: string;
  blurb: string;
};

/**
 * Brands that have backed CGC University events in previous editions.
 * Text-only cards by design — no third-party logos are reproduced here.
 */
export const PAST_SPONSORS: Sponsor[] = [
  { name: 'Monster Energy', monogram: 'ME', category: 'Beverage partner', blurb: 'Kept the overnight shift awake at past campus festivals.' },
  { name: 'Red Bull', monogram: 'RB', category: 'Beverage partner', blurb: 'On-ground activation and energy for long-format events.' },
  { name: 'Acer', monogram: 'AC', category: 'Technology partner', blurb: 'Hardware presence and product showcases on campus.' },
  { name: 'Unstop', monogram: 'UN', category: 'Platform partner', blurb: 'Registrations, listings and reach across student India.' },
  { name: 'GeeksforGeeks', monogram: 'GG', category: 'Learning partner', blurb: 'Developer content, workshops and contest support.' },
  { name: 'Nodwin Gaming', monogram: 'NG', category: 'Esports partner', blurb: 'Competitive gaming production at campus scale.' },
  { name: 'Him Pani', monogram: 'HP', category: 'Hydration partner', blurb: 'Kept thousands of attendees watered across multi-day events.' },
  { name: 'EBG Group', monogram: 'EB', category: 'Associate sponsor', blurb: 'Long-running associate of CGC University programming.' },
  { name: 'Biottica', monogram: 'BI', category: 'Innovation partner', blurb: 'Backed science and innovation tracks on campus.' },
  { name: 'Carlton', monogram: 'CA', category: 'Lifestyle partner', blurb: 'Merchandise and prize support for winning teams.' },
  { name: 'Devorious Technologies', monogram: 'DT', category: 'Technology partner', blurb: 'Engineering mentorship and internship pipelines.' },
  { name: 'Pitstop Motorsports', monogram: 'PM', category: 'Experience partner', blurb: 'On-campus experiential activations.' },
  { name: 'Natuf', monogram: 'NA', category: 'Wellness partner', blurb: 'Refreshment and wellness presence across festival days.' },
  { name: 'Tarzan', monogram: 'TZ', category: 'Consumer partner', blurb: 'Consumer brand activation for large student audiences.' },
  { name: 'Uncle Fab', monogram: 'UF', category: 'Merchandise partner', blurb: 'Event merchandise and custom kit.' },
  { name: 'CRUD Studio', monogram: 'CR', category: 'Studio partner', blurb: 'Design and production support for campus events.' },
];

export type Tier = {
  name: string;
  summary: string;
  benefits: string[];
};

/** Tier ladder as published in the Graviton sponsorship proposal. */
export const TIERS: Tier[] = [
  {
    name: 'Bronze',
    summary: 'Presence across the event surface.',
    benefits: ['Website branding', 'Social media visibility', 'Venue branding'],
  },
  {
    name: 'Silver',
    summary: 'Everything in Bronze, plus a physical footprint.',
    benefits: [
      'Logo on event creatives',
      'Certificate / merchandise branding',
      'Dedicated social media post',
      'Brand stall / activation zone',
      'Stage mentions and shoutouts',
    ],
  },
  {
    name: 'Gold',
    summary: 'Everything in Silver, plus direct access to participants.',
    benefits: [
      'Participant engagement activity',
      'Product showcase / demo',
      'Sponsored challenge / contest',
      'Speaker or guest session',
      'Talent engagement opportunity',
      'Dedicated brand activation',
      'Category exclusivity',
    ],
  },
  {
    name: 'Title',
    summary: 'Everything in Gold, with the event carrying your name.',
    benefits: ['Event naming rights', 'Top billing on every creative and surface', 'First position in all announcements'],
  },
];

export const TIER_MATRIX: { benefit: string; tiers: [boolean, boolean, boolean, boolean] }[] = [
  { benefit: 'Logo on event creatives', tiers: [false, true, true, true] },
  { benefit: 'Website branding', tiers: [true, true, true, true] },
  { benefit: 'Social media visibility', tiers: [true, true, true, true] },
  { benefit: 'Venue branding', tiers: [true, true, true, true] },
  { benefit: 'Certificate / merchandise branding', tiers: [false, true, true, true] },
  { benefit: 'Dedicated social media post', tiers: [false, true, true, true] },
  { benefit: 'Brand stall / activation zone', tiers: [false, true, true, true] },
  { benefit: 'Stage mention / shoutouts', tiers: [false, true, true, true] },
  { benefit: 'Participant engagement activity', tiers: [false, false, true, true] },
  { benefit: 'Product showcase / demo', tiers: [false, false, true, true] },
  { benefit: 'Sponsored challenge / contest', tiers: [false, false, true, true] },
  { benefit: 'Speaker / guest session', tiers: [false, false, true, true] },
  { benefit: 'Talent engagement opportunity', tiers: [false, false, true, true] },
  { benefit: 'Dedicated brand activation', tiers: [false, false, true, true] },
  { benefit: 'Category exclusivity', tiers: [false, false, true, true] },
  { benefit: 'Event naming rights', tiers: [false, false, true, true] },
];

export const REACH = [
  { value: '146K+', label: 'CGC Instagram followers', note: 'A highly engaged audience of students and young professionals.' },
  { value: '2.8M+', label: 'Content views, last 30 days', note: 'Reels, posts and stories reaching across campus and beyond.' },
  { value: '1.9M+', label: 'Accounts reached, last 30 days', note: 'Your brand, seen by thousands of students and creators.' },
  { value: '25K+', label: 'Students at CGC University', note: 'A diverse and dynamic student community.' },
  { value: '16+', label: 'Departments and streams', note: 'From engineering to management, science to design.' },
  { value: '10.8%', label: 'Engagement rate', note: 'Likes, comments, shares and saves combined.' },
];

export const WHY_SPONSOR = [
  { title: 'Brand visibility', body: 'Place your brand in front of a highly engaged audience of students, innovators and technology enthusiasts.' },
  { title: 'Access to talent', body: 'Connect directly with skilled students and discover potential interns, employees and future collaborators.' },
  { title: 'Product discovery', body: 'Introduce your products, platforms and technologies to the next generation of builders.' },
  { title: 'Community engagement', body: 'Reach participants through workshops, challenges, mentorship and interactive brand experiences.' },
  { title: 'Innovation partnership', body: 'Associate your organisation with a platform focused on technology, entrepreneurship and problem-solving.' },
];
