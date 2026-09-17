'use client';

import { useCallback, useRef, useState } from 'react';
import { THEMES } from '@/lib/data/themes';
import ThemeIcon from './ThemeIcon';

export default function ThemeExplorer({ initialId }: { initialId?: string }) {
  const startIndex = Math.max(
    0,
    THEMES.findIndex((t) => t.id === initialId),
  );
  const [index, setIndex] = useState(startIndex);
  const tabsRef = useRef<HTMLDivElement>(null);
  const theme = THEMES[index];

  const move = useCallback((next: number, focusTab = false) => {
    const wrapped = (next + THEMES.length) % THEMES.length;
    setIndex(wrapped);
    if (focusTab) {
      const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>('.chip');
      tabs?.[wrapped]?.focus();
    }
  }, []);

  return (
    <>
      <div className="selector" role="tablist" aria-label="Themes" ref={tabsRef}>
        {THEMES.map((t, i) => (
          <button
            key={t.id}
            className="chip"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={i === index}
            aria-controls="theme-panel"
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                move(index + 1, true);
              }
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                move(index - 1, true);
              }
            }}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div
        className="detail"
        id="theme-panel"
        role="tabpanel"
        aria-labelledby={`tab-${theme.id}`}
        tabIndex={0}
        key={theme.id}
      >
        <div className="detail__head">
          <ThemeIcon name={theme.key} />
          <h3>{theme.name}</h3>
          <i>{theme.line}</i>
        </div>

        <p className="lede" style={{ fontSize: '16.5px', marginBottom: 22 }}>
          {theme.blurb}
        </p>

        <p className="label">Starting points</p>
        <ul>
          {theme.prompts.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className="pager">
          <b>
            {String(index + 1).padStart(2, '0')} of {String(THEMES.length).padStart(2, '0')}
          </b>
          <button className="cta cta--ghost" onClick={() => move(index - 1)}>
            Previous
          </button>
          <button className="cta cta--ghost" onClick={() => move(index + 1)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
