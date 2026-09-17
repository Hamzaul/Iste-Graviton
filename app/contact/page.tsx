import type { Metadata } from 'next';
import SectionRule from '@/components/SectionRule';
import RegisterBand from '@/components/RegisterBand';
import Reveal from '@/components/Reveal';
import { EVENT } from '@/lib/data/event';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach the Graviton organising team at ${EVENT.email} or call the coordinators.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="section wrap page-top">
        <SectionRule label="Ground control" />
        <h2>Call someone who knows.</h2>
        <p className="lede" style={{ margin: '18px 0 40px' }}>
          One inbox and two coordinators handle everything: registration, teams, travel and the
          things this site does not answer.
        </p>

        <Reveal>
          <div className="cells">
            <div className="cell">
              <h3>Email</h3>
              <p>For sponsorship, press and anything in writing.</p>
              <a className="link" href={`mailto:${EVENT.email}`}>
                {EVENT.email}
              </a>
            </div>

            {EVENT.contacts.map((contact) => (
              <div className="cell" key={contact.phone}>
                <h3>{contact.name}</h3>
                <p>{contact.role}</p>
                <a className="link" href={`tel:+91${contact.phone}`}>
                  +91 {contact.phone}
                </a>
              </div>
            ))}

            <div className="cell" id="venue">
              <h3>Venue</h3>
              <p>{EVENT.venueFull}</p>
              <a className="link" href={EVENT.mapUrl} target="_blank" rel="noopener noreferrer">
                Open in Maps
              </a>
            </div>

            <div className="cell">
              <h3>Instagram</h3>
              <p>Announcements, reminders and results.</p>
              <a
                className="link"
                href={EVENT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{EVENT.instagram}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section section--tight wrap">
        <Reveal>
          <RegisterBand />
        </Reveal>
      </section>
    </>
  );
}
