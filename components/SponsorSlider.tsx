'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PAST_SPONSORS, type Sponsor } from '@/lib/data/sponsors';

/**
 * Horizontal card slider for sponsors. Cards are text-only by design — no
 * third-party logos are reproduced. The rail is a native scroll container
 * with snap points, so touch, trackpad, keyboard and the arrow buttons all
 * work without a drag library.
 */
export default function SponsorSlider({
  sponsors = PAST_SPONSORS,
  label = 'Past sponsors',
}: {
  sponsors?: Sponsor[];
  label?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    sync();
    rail.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      rail.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const page = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>('.sponsor-card');
    const step = card ? card.offsetWidth + 16 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step * 2, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="slider__head">
        <div>
          <p className="label">{label}</p>
          <h3 style={{ fontSize: 'clamp(20px,2vw,28px)' }}>
            Brands that have backed CGC University events
          </h3>
          <p>
            Text-only cards: these are past partners of the campus, not confirmed Graviton
            sponsors. Your brand can take the first slot for this edition.
          </p>
        </div>

        <div className="slider__controls">
          <button
            className="slider__btn"
            onClick={() => page(-1)}
            disabled={atStart}
            aria-label="Previous sponsors"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 4 7 12l8 8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="slider__btn"
            onClick={() => page(1)}
            disabled={atEnd}
            aria-label="Next sponsors"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 4l8 8-8 8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="slider__rail"
        ref={railRef}
        tabIndex={0}
        role="group"
        aria-label={`${label}, scrollable`}
      >
        <article className="sponsor-card sponsor-card--open">
          <div className="sponsor-card__mono" aria-hidden="true">
            +
          </div>
          <h3>Your brand here</h3>
          <span>Open slot · 2026</span>
          <p>
            Title, Gold, Silver and Bronze tiers are open for this edition. Cash, prize,
            mentor, API and in-kind support all welcome.
          </p>
          <Link className="cta cta--ghost" href="/sponsor">
            Know more
          </Link>
        </article>

        {sponsors.map((sponsor) => (
          <article className="sponsor-card" key={sponsor.name}>
            <div className="sponsor-card__mono" aria-hidden="true">
              {sponsor.monogram}
            </div>
            <h3>{sponsor.name}</h3>
            <span>{sponsor.category}</span>
            <p>{sponsor.blurb}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
