import type { Metadata } from 'next';
import SectionRule from '@/components/SectionRule';
import ThemeExplorer from '@/components/ThemeExplorer';
import RegisterBand from '@/components/RegisterBand';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Themes',
  description:
    'Six themes for Graviton 2026: fintech, healthtech, agritech, urbantech, edtech and open innovation.',
  alternates: { canonical: '/themes' },
};

export default async function ThemesPage({
  searchParams,
}: {
  searchParams: Promise<{ t?: string }>;
}) {
  const { t } = await searchParams;

  return (
    <>
      <section className="section wrap page-top">
        <SectionRule label="Themes" />
        <h2>Six directions. Pick one.</h2>
        <p className="lede" style={{ margin: '18px 0 34px' }}>
          Each theme is a problem space, not a spec. The prompts are starting points — a sharper
          problem of your own inside the same space scores better than a literal reading of ours.
        </p>
        <ThemeExplorer initialId={t} />
      </section>

      <section className="section section--tight wrap">
        <Reveal>
          <RegisterBand />
        </Reveal>
      </section>
    </>
  );
}
