import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section wrap page-top">
      <p className="label">Error 404</p>
      <h2>Off course.</h2>
      <p className="lede" style={{ margin: '18px 0 30px' }}>
        That page is not part of the mission. Head back to the launchpad or jump straight to the
        themes.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link className="cta cta--lg" href="/">
          Back home
        </Link>
        <Link className="cta cta--lg cta--ghost" href="/themes">
          See the themes
        </Link>
      </div>
    </section>
  );
}
