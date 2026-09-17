'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Fades content in once, the first time it enters the viewport. */
export default function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '-40px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [shown]);

  return (
    <div ref={ref} className={`reveal${shown ? ' is-in' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
