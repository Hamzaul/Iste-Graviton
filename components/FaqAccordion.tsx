'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/data/faq';

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                className="faq-btn"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <i>{String(i + 1).padStart(2, '0')}</i>
                <span className="faq-btn__q">{item.q}</span>
                <span className="pm" aria-hidden="true" />
              </button>
            </h3>
            <div
              className={`faq-panel${isOpen ? ' is-open' : ''}`}
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
