'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAV } from '@/lib/data/nav';
import { EVENT } from '@/lib/data/event';

export default function SiteHeader() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock the page behind the drawer and return focus on close.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) drawerRef.current?.querySelector('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={`header${solid ? ' is-solid' : ''}`}>
        <div className="wrap header__bar">
          <Link className="brandmark" href="/" aria-label={`${EVENT.name}, home`}>
            {EVENT.name} <small>{EVENT.tagline}</small>
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            className="cta"
            href={EVENT.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>

          <button
            ref={burgerRef}
            className="burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            <i />
          </button>
        </div>
      </header>

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
      >
        {NAV.map((item, i) => (
          <Link key={item.href} href={item.href}>
            {item.label}
            <span>{String(i + 1).padStart(2, '0')}</span>
          </Link>
        ))}
        <a
          className="cta cta--lg"
          href={EVENT.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Register on Unstop
        </a>
      </div>
    </>
  );
}
