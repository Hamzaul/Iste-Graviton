import { EVENT } from '@/lib/data/event';
import Countdown from './Countdown';

const ROWS: [string, string][] = [
  ['Event', `${EVENT.name} · ${EVENT.tagline}`],
  ['Window', `${EVENT.dates} · ${EVENT.duration}`],
  ['Team size', EVENT.teamSize],
  ['Venue', EVENT.venue],
  ['Prize pool', EVENT.prizePool],
  ['Entry fee', EVENT.entryFee],
];

export default function StatusPanel() {
  return (
    <div className="status">
      <div className="status__head">
        <i className="pulse" aria-hidden="true" />
        <b>Registration open</b>
        <em>Launch window</em>
      </div>

      <Countdown target={EVENT.startsAt} />

      <dl className="manifest">
        {ROWS.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
