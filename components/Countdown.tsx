'use client';

import { useEffect, useState } from 'react';

type Parts = { d: number; h: number; m: number; s: number } | null;

function split(ms: number): Parts {
  if (ms <= 0) return null;
  const total = Math.floor(ms / 1000);
  return {
    d: Math.floor(total / 86400),
    h: Math.floor((total % 86400) / 3600),
    m: Math.floor((total % 3600) / 60),
    s: total % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

/** Counts down to `target`. Renders placeholders until mounted, so the
 *  server and client markup match and hydration stays clean. */
export default function Countdown({ target }: { target: string }) {
  const [parts, setParts] = useState<Parts>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => setParts(split(end - Date.now()));
    setMounted(true);
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells: [string, string][] = [
    ['Days', parts ? pad(parts.d) : '—'],
    ['Hours', parts ? pad(parts.h) : '—'],
    ['Minutes', parts ? pad(parts.m) : '—'],
    ['Seconds', parts ? pad(parts.s) : '—'],
  ];

  return (
    <div className="countdown">
      {cells.map(([label, value]) => (
        <div key={label}>
          <b>{mounted ? value : '—'}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
