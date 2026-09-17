import type { Metadata } from 'next';
import SectionRule from '@/components/SectionRule';
import FaqAccordion from '@/components/FaqAccordion';
import { FAQ } from '@/lib/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers about dates, teams, fees, prizes and what to bring to Graviton 2026.',
  alternates: { canonical: '/faq' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <section className="section wrap page-top">
      <SectionRule label="Questions" />
      <h2>Answers before you ask.</h2>
      <div style={{ marginTop: 38 }}>
        <FaqAccordion />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
