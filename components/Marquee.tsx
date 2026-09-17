import { MARQUEE_ITEMS } from '@/lib/data/event';

/**
 * Infinite text marquee. The item list is rendered twice and the track is
 * translated by exactly -50%, so the loop is seamless with no JS.
 * Hover or keyboard focus pauses it; reduced motion turns it into a
 * horizontally scrollable strip instead.
 */
export default function Marquee({
  items = MARQUEE_ITEMS,
  durationSeconds = 38,
}: {
  items?: string[];
  durationSeconds?: number;
}) {
  const group = (hidden: boolean) => (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="marquee"
      style={{ ['--marquee-duration' as string]: `${durationSeconds}s` }}
    >
      <div className="marquee__track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}
