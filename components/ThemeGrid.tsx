import Link from 'next/link';
import { THEMES } from '@/lib/data/themes';
import ThemeIcon from './ThemeIcon';

export default function ThemeGrid() {
  return (
    <div className="themes">
      {THEMES.map((theme) => (
        <Link className="theme" key={theme.id} href={`/themes?t=${theme.id}`}>
          <ThemeIcon name={theme.key} />
          <b>{theme.name}</b>
          <span>{theme.line}</span>
        </Link>
      ))}
    </div>
  );
}
