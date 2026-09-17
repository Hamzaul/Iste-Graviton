export type Theme = {
  id: string;
  key: 'fintech' | 'health' | 'agri' | 'urban' | 'edtech' | 'open';
  name: string;
  line: string;
  blurb: string;
  prompts: string[];
};

export const THEMES: Theme[] = [
  {
    id: 'T-1',
    key: 'fintech',
    name: 'Fintech',
    line: 'Empower financial freedom',
    blurb:
      'Money moves badly for the people who have least of it. Build tools that make saving, borrowing, paying and understanding money simpler for real users, not for spreadsheets.',
    prompts: [
      'Credit and savings for people with thin financial histories',
      'Shared expenses and settlement for households, hostels and small businesses',
      'Fraud and scam detection a non-technical user can actually read',
      'Financial literacy that teaches by doing, not by lecturing',
    ],
  },
  {
    id: 'T-2',
    key: 'health',
    name: 'Healthtech',
    line: 'Innovate for healthier lives',
    blurb:
      'Care fails in the gaps: between appointments, between languages, between a symptom and a diagnosis. Close one gap well.',
    prompts: [
      'Triage and follow-up support for clinics running at capacity',
      'Medication adherence and chronic-condition tracking',
      'Mental health tools that respect privacy and avoid diagnosis',
      'Accessibility-first interfaces for patients and caregivers',
    ],
  },
  {
    id: 'T-3',
    key: 'agri',
    name: 'Agritech',
    line: 'Cultivate a sustainable tomorrow',
    blurb:
      "A farmer's decisions are data problems with weather, soil, price and labour as inputs — and almost none of it reaches them in time.",
    prompts: [
      'Crop, irrigation and pest advisory from low-cost sensing or imagery',
      'Price discovery and direct market access for small landholders',
      'Post-harvest loss, cold chain and storage visibility',
      'Climate-resilient planning tools in regional languages',
    ],
  },
  {
    id: 'T-4',
    key: 'urban',
    name: 'Urbantech',
    line: 'Smart cities, stronger communities',
    blurb:
      'Cities already generate the data. What they lack is a way for residents to act on it.',
    prompts: [
      'Civic reporting and resolution tracking that closes the loop',
      'Mobility, parking and last-mile transit for dense neighbourhoods',
      'Waste, water and energy visibility at building or ward level',
      'Safety and emergency response for people moving at night',
    ],
  },
  {
    id: 'T-5',
    key: 'edtech',
    name: 'Edtech',
    line: 'Learn beyond boundaries',
    blurb:
      'Content is no longer scarce. Attention, feedback and a path through it all are.',
    prompts: [
      "Practice and feedback loops that adapt to a learner's pace",
      'Tools for teachers: assessment, grading, lesson planning',
      'Skill-to-job mapping for first-generation learners',
      'Learning that works offline, on low-end devices, in any language',
    ],
  },
  {
    id: 'T-6',
    key: 'open',
    name: 'Open Innovation',
    line: 'Bring your boldest ideas',
    blurb:
      'If your idea does not fit a theme, it belongs here. Judged on the same bar: a real problem, a working build, an honest demo.',
    prompts: [
      'Anything with a clearly stated user and problem',
      'Hardware, AI, developer tooling, accessibility, climate, culture',
      'Wild ideas welcome if you can demo them in 24 hours',
      'Bring evidence that someone other than you wants this',
    ],
  },
];
