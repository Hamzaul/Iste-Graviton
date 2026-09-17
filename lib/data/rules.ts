export type Rule = { title: string; body: string };

export const RULES: Rule[] = [
  { title: 'Eligibility', body: 'Open to students with a valid college or university ID. Carry it to the venue.' },
  { title: 'Team size', body: 'Teams of three to four. Solo entries and teams of two are not accepted.' },
  { title: 'One team, one theme', body: 'Pick a single theme at registration. You may reframe the problem inside it, not switch out of it.' },
  { title: 'Original work', body: 'Code written before the event does not qualify as your submission. Open-source libraries, public APIs and frameworks do.' },
  { title: 'AI tools', body: 'Allowed and expected. You must be able to explain every part of what you submit.' },
  { title: 'Working prototype', body: 'Slides alone do not qualify. Judges need something that runs, even if parts are stubbed.' },
  { title: 'Submission', body: 'Push to a public repository and submit the link before code freeze. Late pushes are not evaluated.' },
  { title: 'Judging', body: 'Problem clarity, working build, technical depth, usability and the quality of your demo. The panel\u2019s decision is final.' },
  { title: 'Conduct', body: 'Harassment, plagiarism or tampering with another team\u2019s work means immediate disqualification.' },
  { title: 'On campus', body: 'The event runs overnight. Participants stay on the venue premises for the full 24 hours.' },
  { title: 'Communication', body: 'Registered team leads receive all updates through the channel shared after registration.' },
];
