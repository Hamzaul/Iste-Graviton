export type ScheduleEntry = {
  phase: string;
  date: string;
  time: string;
  title: string;
  detail: string;
};

/**
 * Provisional run sheet. Times are confirmed with registered teams before
 * the event; change them here and every view updates.
 */
export const SCHEDULE: ScheduleEntry[] = [
  { phase: 'Pre-event', date: 'Open now', time: 'Unstop', title: 'Registration open', detail: 'Teams of three or four register on Unstop with a single team entry.' },
  { phase: 'Pre-event', date: 'Before 31 Oct', time: 'TBC', title: 'Registration closes', detail: 'The exact deadline is announced on Unstop and on the event Instagram.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '09:00', title: 'Reporting and check-in', detail: 'Team verification at the venue desk. Carry your college ID.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '10:00', title: 'Opening ceremony', detail: 'Theme briefing, judging criteria and a walkthrough of the rules.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '11:00', title: 'Hacking begins', detail: 'The 24-hour clock starts. Repositories are initialised from empty.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '13:00', title: 'Lunch', detail: 'Served at the venue for all registered participants.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '17:00', title: 'Mentor round', detail: 'Mentors circulate, review progress and unblock teams.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '20:00', title: 'Dinner', detail: 'Served at the venue.' },
  { phase: 'Day 1 · 31 Oct', date: '31 October 2026', time: '23:00', title: 'Midnight checkpoint', detail: 'Short progress check, plus an informal night activity for teams that need air.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '09:00', title: 'Breakfast', detail: 'Last meal before code freeze.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '11:00', title: 'Code freeze', detail: 'Repositories locked and submissions closed. Late pushes are not evaluated.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '12:00', title: 'Project presentations', detail: 'Timed demos to the judging panel, theme by theme.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '16:00', title: 'Final evaluation', detail: 'Judges deliberate across all shortlisted teams.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '17:00', title: 'Results', detail: 'Winners announced across categories.' },
  { phase: 'Day 2 · 1 Nov', date: '1 November 2026', time: '18:00', title: 'Prize ceremony', detail: 'Certificates, prize distribution and closing note.' },
];
