import Image from 'next/image';
import Link from 'next/link';
import { EVENT } from '@/lib/data/event';

const LETTERS = EVENT.name.toUpperCase().split('');

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          src="/hero.jpg"
          alt="An astronaut standing on a grey ridge, looking towards a planet's lit horizon."
          fill
          priority
          sizes="100vw"
          quality={82}
        />
      </div>

      <div className="hero__top">
        <div className="lockup">
          <svg className="orbit" viewBox="0 0 900 520" aria-hidden="true" preserveAspectRatio="none">
            <path d="M 250 470 C 60 380 120 170 400 110 C 660 55 860 150 800 260 C 745 362 470 420 330 350 C 210 290 250 175 400 140" />
          </svg>

          <p className="lockup__eyebrow">{EVENT.host} presents</p>

          <h1 className="wordmark">
            {LETTERS.map((letter, i) => (
              <span key={`${letter}-${i}`} style={{ animationDelay: `${0.25 + i * 0.07}s` }}>
                {letter}
              </span>
            ))}
          </h1>

          <p className="lockup__tagline">{EVENT.tagline}</p>
        </div>
      </div>

      <div className="hero__foot wrap">
        <div className="hero__actions">
          <a
            className="cta cta--lg"
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register on Unstop
          </a>
          <Link className="cta cta--lg cta--ghost" href="/themes">
            See the themes
          </Link>
        </div>

        <dl className="facts">
          <div>
            <dt>Dates</dt>
            <dd>
              {EVENT.datesShort}
              <small>{EVENT.duration} on campus</small>
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>
              {EVENT.teamSize}
              <small>Students, any college</small>
            </dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>
              CGC University
              <small>Mohali, Punjab</small>
            </dd>
          </div>
          <div>
            <dt>Prize pool</dt>
            <dd>
              {EVENT.prizePool}
              <small>Across categories</small>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
