import type { Theme } from '@/lib/data/themes';

const PATHS: Record<Theme['key'], React.ReactNode> = {
  fintech: (
    <>
      <path d="M4 20 L10 12 L15 16 L28 5" />
      <path d="M21 5h7v7" />
      <circle cx="10" cy="12" r="1.6" />
      <circle cx="15" cy="16" r="1.6" />
    </>
  ),
  health: (
    <>
      <path d="M16 27C9 22 3 18 3 12.5A6.5 6.5 0 0 1 16 9a6.5 6.5 0 0 1 13 3.5C29 18 23 22 16 27Z" />
      <path d="M5 15h6l2-4 3 8 2.5-5H27" />
    </>
  ),
  agri: (
    <>
      <path d="M26 6C13 6 6 12 6 22c0 2 .4 3.4.4 3.4S16 27 22 21s4-15 4-15Z" />
      <path d="M6 26C10 19 15 15 22 12" />
    </>
  ),
  urban: (
    <>
      <path d="M4 28V13l8-4v19" />
      <path d="M12 28V6l10 4v18" />
      <path d="M22 28V16l6 3v9" />
      <path d="M7 17h2M7 21h2M16 13h2M16 18h2M16 23h2" />
    </>
  ),
  edtech: (
    <>
      <path d="M2 12 16 6l14 6-14 6L2 12Z" />
      <path d="M7 15v7c0 2 4 4 9 4s9-2 9-4v-7" />
      <path d="M29 12v8" />
    </>
  ),
  open: (
    <>
      <path d="M12 25h8" />
      <path d="M13 28h6" />
      <path d="M16 4a9 9 0 0 0-5 16.5V22h10v-1.5A9 9 0 0 0 16 4Z" />
    </>
  ),
};

export default function ThemeIcon({ name }: { name: Theme['key'] }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  );
}
