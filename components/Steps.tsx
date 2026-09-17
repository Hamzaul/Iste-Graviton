import { STEPS } from '@/lib/data/steps';

export default function Steps() {
  return (
    <div className="steps">
      {STEPS.map((step) => (
        <div key={step.title}>
          <i>{step.n}</i>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </div>
      ))}
    </div>
  );
}
