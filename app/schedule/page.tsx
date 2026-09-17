import type { Metadata } from 'next';
import Marquee from '@/components/Marquee';
import PinnedTimeline from '@/components/PinnedTimeline';
import RegisterBand from '@/components/RegisterBand';
import Reveal from '@/components/Reveal';
import { EVENT } from '@/lib/data/event';
import { SCHEDULE } from '@/lib/data/schedule';

export const metadata: Metadata = {
  title: 'Schedule',
  description: `The full 24-hour run sheet for Graviton, ${EVENT.dates} at ${EVENT.venue}.`,
  alternates: { canonical: '/schedule' },
};

export default function SchedulePage() {
  return (
    <>
      <div style={{ paddingTop: 70 }}>
        <Marquee durationSeconds={44} />
      </div>

      <section className="section wrap" style={{ paddingBottom: 0 }}>
        <p className="label">{EVENT.duration} · all times IST</p>
        <h2>The run sheet</h2>
        <p className="lede" style={{ margin: '16px 0 10px' }}>
          {EVENT.dates} at {EVENT.venue}. Scroll to travel the timeline.
        </p>
        <p className="note">
          Session times are provisional and confirmed with registered teams before the event.
        </p>
      </section>

      <PinnedTimeline entries={SCHEDULE} title="Event schedule" />

      <section className="section wrap">
        <Reveal>
          <RegisterBand />
        </Reveal>
      </section>
    </>
  );
}
