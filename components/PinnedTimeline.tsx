'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { ScheduleEntry } from '@/lib/data/schedule';

const clamp = (n: number, min = 0, max = 1) => Math.min(max, Math.max(min, n));

/**
 * Pinned timeline. The stage sticks to the viewport while the page scrolls,
 * and that scroll distance is converted into horizontal movement of the card
 * track — so the schedule reads as a journey rather than a list.
 *
 * Falls back to a plain vertical timeline on narrow screens and whenever the
 * visitor asks for reduced motion; both paths render the same data.
 */
export default function PinnedTimeline({
  entries,
  title,
  intro,
}: {
  entries: ScheduleEntry[];
  title: string;
  intro?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);

  // Decide once, and again on resize, whether the pinned behaviour applies.
  useEffect(() => {
    const wide = window.matchMedia('(min-width: 861px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPinned(wide.matches && !reduced.matches);
    update();
    wide.addEventListener('change', update);
    reduced.addEventListener('change', update);
    return () => {
      wide.removeEventListener('change', update);
      reduced.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!pinned) return;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;

      const scrollable = wrap.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const progress = clamp(-wrap.getBoundingClientRect().top / scrollable);

      // The viewport is inset from the left so the first card lines up with the
      // page gutter; that inset has to be added back when measuring how far the
      // track still has to travel.
      const viewport = viewportRef.current;
      const inset = viewport ? parseFloat(getComputedStyle(viewport).paddingLeft) : 0;
      const visible = (viewport?.clientWidth ?? window.innerWidth) - inset;
      const distance = Math.max(0, track.scrollWidth - visible + inset * 0.5);

      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;

      const next = Math.round(progress * (entries.length - 1));
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pinned, entries.length]);

  // Group by phase for the vertical fallback.
  const grouped = useMemo(() => {
    const map = new Map<string, ScheduleEntry[]>();
    entries.forEach((entry) => {
      const list = map.get(entry.phase) ?? [];
      list.push(entry);
      map.set(entry.phase, list);
    });
    return [...map.entries()];
  }, [entries]);

  if (!pinned) {
    return (
      <div className="wrap">
        <h2>{title}</h2>
        {intro ? <p className="lede" style={{ margin: '14px 0 32px' }}>{intro}</p> : null}
        <div className="tl-list">
          {grouped.map(([phase, items]) => (
            <div key={phase}>
              <p className="tl-list__phase">{phase}</p>
              {items.map((item) => (
                <div className="tl-list__item" key={`${item.phase}-${item.title}`}>
                  <time>{item.time}</time>
                  <div>
                    <b>{item.title}</b>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="pinned"
      ref={wrapRef}
      style={{ height: `calc(100svh + ${entries.length * 34}vh)` }}
    >
      <div className="pinned__stage">
        <div className="pinned__head">
          <p className="label">Scroll to travel the timeline</p>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <div className="pinned__viewport" ref={viewportRef}>
          <div className="pinned__track" ref={trackRef}>
            {entries.map((entry, i) => (
              <article
                className={`tl-card${i === active ? ' is-active' : ''}`}
                key={`${entry.phase}-${entry.title}`}
                aria-current={i === active ? 'step' : undefined}
              >
                <div className="tl-card__top">
                  <span>{entry.phase}</span>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="tl-card__dot" aria-hidden="true" />
                <time>
                  {entry.date} · {entry.time}
                </time>
                <h3>{entry.title}</h3>
                <p>{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="pinned__progress">
          <div className="pinned__bar" aria-hidden="true">
            <span ref={barRef} style={{ transform: 'scaleX(0)' }} />
          </div>
          <p className="pinned__count">
            {String(active + 1).padStart(2, '0')} / {String(entries.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
}
