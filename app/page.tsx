import Link from 'next/link';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import SectionRule from '@/components/SectionRule';
import StatusPanel from '@/components/StatusPanel';
import ThemeGrid from '@/components/ThemeGrid';
import Steps from '@/components/Steps';
import PinnedTimeline from '@/components/PinnedTimeline';
import SponsorSlider from '@/components/SponsorSlider';
import Hosts from '@/components/Hosts';
import RegisterBand from '@/components/RegisterBand';
import Reveal from '@/components/Reveal';
import { EVENT } from '@/lib/data/event';
import { SCHEDULE } from '@/lib/data/schedule';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="section wrap">
        <SectionRule label="Mission brief" />
        <div className="two-col">
          <Reveal>
            <h2>Twenty-four hours, one working build.</h2>
            <div style={{ marginTop: 20 }}>
              {EVENT.about.map((paragraph) => (
                <p className="lede" key={paragraph.slice(0, 24)} style={{ marginBottom: 16 }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <p style={{ color: 'var(--fg-dim)', maxWidth: '60ch' }}>
              Hosted by the {EVENT.host}, in collaboration with {EVENT.collaborator}.
            </p>
          </Reveal>
          <Reveal>
            <StatusPanel />
          </Reveal>
        </div>
      </section>

      <section className="section wrap">
        <SectionRule label="Themes" />
        <ThemeGrid />
        <p className="note" style={{ marginTop: 22 }}>
          Six themes, one per team, chosen at registration.{' '}
          <Link href="/themes" style={{ borderBottom: '1px solid var(--line)' }}>
            Read the full briefs
          </Link>
          .
        </p>
      </section>

      <section className="section wrap">
        <SectionRule label="How it runs" />
        <Reveal>
          <Steps />
        </Reveal>
      </section>

      <PinnedTimeline
        entries={SCHEDULE}
        title="Event schedule"
        intro={`${EVENT.dates} at ${EVENT.venue}. Times are IST and confirmed with registered teams before the event.`}
      />

      <section className="section wrap">
        <Reveal>
          <RegisterBand />
        </Reveal>
      </section>

      <section className="section wrap" id="sponsors">
        <SectionRule label="Hosts and sponsors" />
        <Hosts />
        <div style={{ marginTop: 'clamp(40px,6vw,72px)' }}>
          <SponsorSlider />
        </div>
      </section>
    </>
  );
}
