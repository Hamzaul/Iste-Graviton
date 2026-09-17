import type { Metadata } from 'next';
import SectionRule from '@/components/SectionRule';
import Reveal from '@/components/Reveal';
import { RULES } from '@/lib/data/rules';

export const metadata: Metadata = {
  title: 'Rules',
  description: 'Eligibility, team size, submissions and judging rules for Graviton 2026.',
  alternates: { canonical: '/rules' },
};

export default function RulesPage() {
  return (
    <section className="section wrap page-top">
      <SectionRule label="Rules" />
      <h2>Eleven rules. All of them enforced.</h2>
      <p className="lede" style={{ margin: '18px 0 40px' }}>
        Read these before you register. Anything not covered here is decided by the organising
        team on the day.
      </p>

      <div>
        {RULES.map((rule, i) => (
          <Reveal key={rule.title}>
            <div className="rule-item">
              <i>Rule {String(i + 1).padStart(2, '0')}</i>
              <p>
                <b>{rule.title}.</b> {rule.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
