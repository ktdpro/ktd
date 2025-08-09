'use client';
import React, { useState, useEffect, useRef } from 'react';

type StepId =
  | 'step-1'
  | 'step-new-2'
  | 'step-redesign-2'
  | 'step-redesign-3'
  | 'step-other-2'
  | 'step-other-seo'
  | 'step-other-ads'
  | 'step-other-ai'
  | 'step-features'
  | 'step-ecomm'
  | 'step-lead-capture'
  | 'step-estimate'
  | 'step-timeline'
  | 'step-final';

type Choice = { value: string; cost?: number; text: string };

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({
  id,
  className = '',
  children,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref as any}
      className={[
        'py-20 lg:py-28 transition-opacity transition-transform duration-700 ease-out will-change-transform',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  );
};

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState<StepId>('step-1');
  const [selections, setSelections] = useState<Record<string, any>>({
    'step-1': null,
    'step-new-2': null,
    'step-redesign-2': { url: '' },
    'step-redesign-3': [] as Choice[],
    'step-other-2': null,
    'step-other-seo': null,
    'step-other-ads': null,
    'step-other-ai': null,
    'step-features': [] as Choice[],
    'step-ecomm': null,
    'step-timeline': null,
    lead: null,
  });

  const [explanation, setExplanation] = useState('');
  const [explaining, setExplaining] = useState(false);

  const stepSequence = (): StepId[] => {
    const type = selections['step-1']?.value;
    const seq: StepId[] = ['step-1'];
    if (type === 'new') {
      seq.push('step-new-2', 'step-features');
      if ((selections['step-features'] as Choice[] | null)?.some?.((f) => f.value === 'ecommerce')) seq.push('step-ecomm');
      seq.push('step-lead-capture', 'step-estimate', 'step-timeline', 'step-final');
    } else if (type === 'redesign') {
      seq.push('step-redesign-2', 'step-redesign-3', 'step-features');
      if ((selections['step-features'] as Choice[] | null)?.some?.((f) => f.value === 'ecommerce')) seq.push('step-ecomm');
      seq.push('step-lead-capture', 'step-estimate', 'step-timeline', 'step-final');
    } else if (type === 'other') {
      seq.push('step-other-2');
      const otherType = selections['step-other-2']?.value;
      if (otherType === 'seo') seq.push('step-other-seo');
      if (otherType === 'ads') seq.push('step-other-ads');
      if (otherType === 'ai') seq.push('step-other-ai');
      seq.push('step-lead-capture', 'step-final');
    }
    return seq;
  };

  const isStepComplete = (step: StepId) => {
    if (step === 'step-1') return !!selections['step-1'];
    if (step === 'step-new-2') return !!selections['step-new-2'];
    if (step === 'step-redesign-2') return Boolean(selections['step-redesign-2']?.url?.trim());
    if (step === 'step-redesign-3') return (selections['step-redesign-3'] as Choice[]).length > 0;
    if (step === 'step-other-2') return !!selections['step-other-2'];
    if (step === 'step-other-seo') return !!selections['step-other-seo'];
    if (step === 'step-other-ads') return !!selections['step-other-ads'];
    if (step === 'step-other-ai') return !!selections['step-other-ai'];
    if (step === 'step-ecomm') return !!selections['step-ecomm'];
    if (step === 'step-timeline') return !!selections['step-timeline'];
    if (step === 'step-lead-capture') return !!selections.lead?.name && !!selections.lead?.email;
    return true;
  };

  const go = (direction: 1 | -1) => {
    const seq = stepSequence();
    const idx = Math.max(0, seq.indexOf(currentStep));
    const nextIdx = idx + direction;
    if (nextIdx >= 0 && nextIdx < seq.length && isStepComplete(seq[idx])) {
      setCurrentStep(seq[nextIdx]);
    }
  };

  const pick = (step: StepId, choice: Choice, options?: { checkbox?: boolean }) => {
    setSelections((prev) => {
      const next = { ...prev };
      if (options?.checkbox) {
        const arr: Choice[] = Array.isArray(next[step]) ? next[step] : [];
        const exists = arr.some((x) => x.value === choice.value);
        next[step] = exists ? arr.filter((x) => x.value !== choice.value) : [...arr, choice];
        if (step === 'step-features' && choice.value === 'ecommerce' && exists) {
          next['step-ecomm'] = null;
        }
      } else {
        next[step] = choice;
      }
      return next;
    });
  };

  const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '');
    const email = String(fd.get('email') || '');
    if (name && email) {
      setSelections((prev) => ({ ...prev, lead: { name, email } }));
      go(1);
    }
  };

  const estimateRange = () => {
    const s = selections;
    let total = 0;
    if (s['step-1']?.value === 'new') total += s['step-new-2']?.cost || 0;
    if (s['step-1']?.value === 'redesign') (s['step-redesign-3'] as Choice[]).forEach((f) => (total += f.cost || 0));
    (s['step-features'] as Choice[])?.forEach?.((f) => (total += f.cost || 0));
    if (s['step-ecomm']?.cost) total += s['step-ecomm'].cost;
    const max = Math.round(total * 1.35);
    return { min: total, max };
  };

  const getExplanation = async () => {
    setExplaining(true);
    setExplanation('');
    try {
      const { min, max } = estimateRange();
      const summary = Object.values(selections)
        .filter(Boolean)
        .map((val) => (typeof val === 'object' && 'text' in val ? val.text : ''))
        .join('; ');
      const res = await fetch('/api/quote/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ summary, min, max }),
      });
      if (!res.ok) throw new Error('Explain API failed');
      const data = await res.json();
      setExplanation(data.text || 'This estimate reflects the scope and the value these features deliver.');
    } catch {
      setExplanation('There was an issue generating the explanation, but the range reflects complexity and value.');
    } finally {
      setExplaining(false);
    }
  };

  const seq = stepSequence();
  const progressPct = ((seq.indexOf(currentStep) + 1) / Math.max(seq.length, 1)) * 100;

  return (
    <Section id="quote" className="bg-brand-blue-600/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get an Instant Estimate</h2>
          <p className="text-lg text-blue-200 mt-2 max-w-2xl mx-auto">
            Answer a few questions to get a real-time price range for your project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-light-bg border border-gray-700 p-6 md:p-8 rounded-xl shadow-2xl">
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-6">
            <div className="h-full bg-brand-blue-500" style={{ width: `${progressPct}%` }} />
          </div>

          {/* Example step: project type */}
          {currentStep === 'step-1' && (
            <div className="space-y-4">
              <p className="text-gray-300">What type of project is this?</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'new', text: 'New Website', cost: 1200 },
                  { value: 'redesign', text: 'Redesign', cost: 800 },
                  { value: 'other', text: 'Other / Help', cost: 0 },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      pick('step-1', opt);
                      setTimeout(() => go(1), 150);
                    }}
                    className={[
                      'option-card rounded-lg px-4 py-3 text-sm',
                      selections['step-1']?.value === opt.value ? 'selected' : '',
                    ].join(' ')}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Lead capture step */}
          {currentStep === 'step-lead-capture' && (
            <form onSubmit={submitLead} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Name *</label>
                  <input name="name" className="form-input w-full rounded-md px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email *</label>
                  <input name="email" type="email" className="form-input w-full rounded-md px-3 py-2" required />
                </div>
              </div>
              <button className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">Continue</button>
            </form>
          )}

          {/* Estimate step */}
          {currentStep === 'step-estimate' && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Estimated Range</h3>
              <p className="text-gray-200 text-xl">
                {(() => {
                  const { min, max } = estimateRange();
                  return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
                })()}
              </p>

              <button
                onClick={getExplanation}
                className="text-sm text-brand-blue-500 hover:text-brand-blue-400"
                disabled={explaining}
              >
                {explaining ? 'Explaining…' : 'Why this price?'}
              </button>

              {explanation && <p className="text-gray-300">{explanation}</p>}
            </div>
          )}

          {/* Nav */}
          <div className="flex items-center justify-between pt-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="text-sm text-gray-400 hover:text-white"
              disabled={seq.indexOf(currentStep) <= 0}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg disabled:opacity-60"
              disabled={!isStepComplete(currentStep) || seq.indexOf(currentStep) >= seq.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
