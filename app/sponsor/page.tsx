import type { Metadata } from 'next';
import Marquee from '@/components/Marquee';
import SectionRule from '@/components/SectionRule';
import SponsorSlider from '@/components/SponsorSlider';
import Hosts from '@/components/Hosts';
import Reveal from '@/components/Reveal';
import { EVENT } from '@/lib/data/event';
import { REACH, TIERS, TIER_MATRIX, WHY_SPONSOR } from '@/lib/data/sponsors';

export const metadata: Metadata = {
  title: 'Sponsor us',
  description:
    'Partner with Graviton 2026 at CGC University, Mohali. Reach, tiers and deliverables for Bronze, Silver, Gold and Title sponsors.',
  alternates: { canonical: '/sponsor' },
};

const TIER_NAMES = ['Bronze', 'Silver', 'Gold', 'Title'];

export default function SponsorPage() {
  return (
    <>
      <section className="section wrap page-top" style={{ paddingBottom: 0 }}>
        <SectionRule label="Sponsorship" />
        <h2>Put your brand in front of 2000+ builders.</h2>
        <p className="lede" style={{ margin: '18px 0 28px' }}>
          Graviton runs for 24 hours at CGC University, Mohali on {EVENT.dates}. Sponsors reach a
          student audience that is already paying attention — on campus, on stage and across the
          university&apos;s social channels.
        </p>
        <a className="cta cta--lg" href={`mailto:${EVENT.email}?subject=Graviton%202026%20sponsorship`}>
          Email us about sponsorship
        </a>
      </section>

      <section className="section wrap">
        <SectionRule label="Our reach" />
        <Reveal>
          <div className="reach">
            {REACH.map((item) => (
              <div key={item.label}>
                <b>{item.value}</b>
                <span>{item.label}</span>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="note" style={{ marginTop: 20 }}>
          Figures supplied by the organising team from the CGC University channels, as published in
          the Graviton sponsorship proposal.
        </p>
      </section>

      <Marquee durationSeconds={42} />

      <section className="section wrap">
        <SectionRule label="Why sponsor" />
        <Reveal>
          <div className="why">
            {WHY_SPONSOR.map((item, i) => (
              <div key={item.title}>
                <i>{String(i + 1).padStart(2, '0')}</i>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section wrap">
        <SectionRule label="Tiers" />
        <Reveal>
          <div className="tiers">
            {TIERS.map((tier) => (
              <div
                className={`tier${tier.name === 'Title' ? ' tier--title' : ''}`}
                key={tier.name}
              >
                <h3>{tier.name}</h3>
                <p>{tier.summary}</p>
                <ul>
                  {tier.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="matrix-scroll" style={{ marginTop: 40 }}>
          <table className="matrix">
            <caption className="sr">Sponsorship benefits by tier</caption>
            <thead>
              <tr>
                <th scope="col">Benefit</th>
                {TIER_NAMES.map((name) => (
                  <th scope="col" key={name}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIER_MATRIX.map((row) => (
                <tr key={row.benefit}>
                  <th scope="row" style={{ fontWeight: 400 }}>
                    {row.benefit}
                  </th>
                  {row.tiers.map((included, i) => (
                    <td key={TIER_NAMES[i]}>
                      {included ? (
                        <span aria-label={`Included in ${TIER_NAMES[i]}`}>✓</span>
                      ) : (
                        <span className="sr">Not included in {TIER_NAMES[i]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section wrap">
        <SectionRule label="Hosts and sponsors" />
        <Hosts />
        <div style={{ marginTop: 'clamp(40px,6vw,72px)' }}>
          <SponsorSlider />
        </div>
      </section>

      <section className="section section--tight wrap">
        <div className="band">
          <div className="band__body">
            <h2>Ready to back this edition?</h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Cash, prize, mentor, API credit and in-kind support are all welcome. Tell us what you
              want out of the event and we will build the package around it.
            </p>
            <a
              className="cta cta--lg"
              href={`mailto:${EVENT.email}?subject=Graviton%202026%20sponsorship`}
              style={{ marginTop: 24 }}
            >
              Email {EVENT.email}
            </a>
          </div>
          <div className="band__qr">
            <span>Core member</span>
            <p style={{ textAlign: 'center', margin: 0, color: 'var(--fg-mid)' }}>
              {EVENT.contacts[1].name}
              <br />
              <a href={`tel:+91${EVENT.contacts[1].phone}`}>+91 {EVENT.contacts[1].phone}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
