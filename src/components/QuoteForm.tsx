'use client';
import React, { useState } from 'react';

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
type Lead = { name: string; email: string; message?: string };

type Selections = {
  'step-1': Choice | null;
  'step-new-2': Choice | null;
  'step-redesign-2': { url: string };
  'step-redesign-3': Choice[];
  'step-other-2': Choice | null;
  'step-other-seo': Choice | null;
  'step-other-ads': Choice | null;
  'step-other-ai': Choice | null;
  'step-features': Choice[];
  'step-ecomm': Choice | null;
  'step-timeline': Choice | null;
  'step-lead-capture': Lead | null;
  'step-estimate': null;
  'step-final': null;
};


export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState<StepId>('step-1');

  const [selections, setSelections] = useState<Selections>({
    'step-1': null,
    'step-new-2': null,
    'step-redesign-2': { url: '' },
    'step-redesign-3': [],
    'step-other-2': null,
    'step-other-seo': null,
    'step-other-ads': null,
    'step-other-ai': null,
    'step-features': [],
    'step-ecomm': null,
    'step-timeline': null,
    'step-lead-capture': null,
    'step-estimate': null,
    'step-final': null,
  });

  const [explanation, setExplanation] = useState('');
  const [explaining, setExplaining] = useState(false);

  const stepSequence = (): StepId[] => {
    const type = selections['step-1']?.value;
    const seq: StepId[] = ['step-1'];
    if (type === 'new') {
      seq.push('step-new-2', 'step-features');
      if (selections['step-features'].some((f) => f.value === 'ecommerce')) seq.push('step-ecomm');
      seq.push('step-lead-capture', 'step-estimate', 'step-timeline', 'step-final');
    } else if (type === 'redesign') {
      seq.push('step-redesign-2', 'step-redesign-3', 'step-features');
      if (selections['step-features'].some((f) => f.value === 'ecommerce')) seq.push('step-ecomm');
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
    if (step === 'step-redesign-2') return Boolean(selections['step-redesign-2']?.url.trim());
    if (step === 'step-redesign-3') return selections['step-redesign-3'].length > 0;
    if (step === 'step-other-2') return !!selections['step-other-2'];
    if (step === 'step-other-seo') return !!selections['step-other-seo'];
    if (step === 'step-other-ads') return !!selections['step-other-ads'];
    if (step === 'step-other-ai') return !!selections['step-other-ai'];
    if (step === 'step-ecomm') return !!selections['step-ecomm'];
    if (step === 'step-timeline') return !!selections['step-timeline'];
    if (step === 'step-lead-capture')
      return Boolean(selections['step-lead-capture']?.name && selections['step-lead-capture']?.email);
    return true;
  };

  const go = (direction: 1 | -1) => {
    const seq = stepSequence();
    const idx = seq.indexOf(currentStep);
    const nextIdx = idx + direction;
    if (
      nextIdx >= 0 &&
      nextIdx < seq.length &&
      (direction === -1 || isStepComplete(currentStep))
    ) {
      setCurrentStep(seq[nextIdx]);
    }
  };

  const reset = () => {
    setSelections({
      'step-1': null,
      'step-new-2': null,
      'step-redesign-2': { url: '' },
      'step-redesign-3': [],
      'step-other-2': null,
      'step-other-seo': null,
      'step-other-ads': null,
      'step-other-ai': null,
      'step-features': [],
      'step-ecomm': null,
      'step-timeline': null,
      'step-lead-capture': null,
      'step-estimate': null,
      'step-final': null,
    });
    setExplanation('');
    setCurrentStep('step-1');
  };

  const MULTI_STEPS = new Set<StepId>(['step-features', 'step-redesign-3']);
  const pick = (step: StepId, choice: Choice, options?: { checkbox?: boolean }) => {
    setSelections((prev) => {
      const next: Selections = { ...prev };
      if (options?.checkbox && MULTI_STEPS.has(step)) {
        const key = step as 'step-features' | 'step-redesign-3';
        const exists = next[key].some((c) => c.value === choice.value);
        next[key] = exists ? next[key].filter((c) => c.value !== choice.value) : [...next[key], choice];
        if (key === 'step-features' && choice.value === 'ecommerce' && exists) {
          next['step-ecomm'] = null;
        }
      } else {
        const key = step as
          | 'step-1'
          | 'step-new-2'
          | 'step-other-2'
          | 'step-other-seo'
          | 'step-other-ads'
          | 'step-other-ai'
          | 'step-ecomm'
          | 'step-timeline';
        next[key] = choice;
      }
      return next;
    });
  };

  const submitLead = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '');
    const email = String(fd.get('email') || '');
    const message = String(fd.get('message') || '');
    if (name && email) {
      setSelections((prev) => ({
        ...prev,
        'step-lead-capture': { name, email, message: message || undefined },
      }));
      go(1);
    }
  };

  const estimateRange = () => {
    const s = selections;
    let total = 0;
    if (s['step-1']?.value === 'new') total += s['step-new-2']?.cost || 0;
    if (s['step-1']?.value === 'redesign') s['step-redesign-3'].forEach((g) => (total += g.cost || 0));
    s['step-features'].forEach((f) => (total += f.cost || 0));
    if (s['step-ecomm']?.cost) total += s['step-ecomm'].cost;
    const max = Math.round(total * 1.35);
    return { min: total, max };
  };

  const buildSummary = () => {
    const s = selections;
    const items: string[] = [];
    if (s['step-1']) items.push(`Project Type: ${s['step-1'].text}`);
    if (s['step-new-2']) items.push(`Pages: ${s['step-new-2'].text}`);
    if (s['step-redesign-3'].length) items.push(`Goals: ${s['step-redesign-3'].map((g) => g.text).join(', ')}`);
    if (s['step-other-2']) items.push(`Inquiry: ${s['step-other-2'].text}`);
    if (s['step-other-seo']) items.push(`SEO Goal: ${s['step-other-seo'].text}`);
    if (s['step-other-ads']) items.push(`Ad Budget: ${s['step-other-ads'].text}`);
    if (s['step-other-ai']) items.push(`AI Goal: ${s['step-other-ai'].text}`);
    if (s['step-features'].length) items.push(`Features: ${s['step-features'].map((f) => f.text).join(', ')}`);
    if (s['step-ecomm']) items.push(`Products: ${s['step-ecomm'].text}`);
    if (s['step-timeline']) items.push(`Start: ${s['step-timeline'].text}`);
    return items;
  };

  const getExplanation = async () => {
    setExplaining(true);
    setExplanation('');
    try {
      const { min, max } = estimateRange();
      const summary = buildSummary().join('; ');
      const res = await fetch('/api/quote/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ summary, min, max }),
      });
      if (!res.ok) throw new Error('Explain API failed');
      const data: { text?: string } = await res.json();
      setExplanation(data.text || 'This estimate reflects the scope and the value these features deliver.');
    } catch {
      setExplanation('There was an issue generating the explanation, but the range reflects complexity and value.');
    } finally {
      setExplaining(false);
    }
  };

  const seq = stepSequence();
  const progressPct = (seq.indexOf(currentStep) / Math.max(seq.length - 1, 1)) * 100;

  const OptionCard = ({
    step,
    option,
    selected,
    checkbox,
  }: {
    step: StepId;
    option: Choice;
    selected: boolean;
    checkbox?: boolean;
  }) => (
    <button
      type="button"
      onClick={() => pick(step, option, { checkbox })}
      className={[
        'option-card rounded-lg px-4 py-3 text-sm flex items-center text-gray-200',
        selected ? 'selected' : '',
      ].join(' ')}
    >
      {checkbox && (
        <input type="checkbox" checked={selected} readOnly className="h-4 w-4 mr-2 pointer-events-none" />
      )}
      <span className="flex-1 text-left">{option.text}</span>
    </button>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 'step-1':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What type of project is this?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'new', text: 'New Website', cost: 0 },
                { value: 'redesign', text: 'Redesign', cost: 0 },
                { value: 'other', text: 'Other', cost: 0 },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-1"
                  option={opt}
                  selected={selections['step-1']?.value === opt.value}
                />
              ))}
            </div>
          </div>
        );
      case 'step-new-2':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">Roughly how many pages will you need?</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: '1-3', text: 'Starter (1-3 pages)', cost: 1500 },
                { value: '4-8', text: 'Business (4-8 pages)', cost: 3000 },
                { value: '8+', text: 'Premium (8+ pages)', cost: 5000 },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-new-2"
                  option={opt}
                  selected={selections['step-new-2']?.value === opt.value}
                />
              ))}
            </div>
          </div>
        );
      case 'step-redesign-2':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What is your current website URL?</p>
            <input
              type="url"
              value={selections['step-redesign-2'].url}
              onChange={(e) =>
                setSelections((prev) => ({ ...prev, 'step-redesign-2': { url: e.target.value } }))
              }
              className="form-input w-full rounded-md px-3 py-2"
              placeholder="https://example.com"
            />
          </div>
        );
      case 'step-redesign-3':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What are your main goals for the redesign?</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'modern', text: 'Modernize the Design', cost: 1000 },
                { value: 'mobile', text: 'Improve Mobile Experience', cost: 800 },
                { value: 'leads', text: 'Increase Leads/Sales', cost: 1500 },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-redesign-3"
                  option={opt}
                  checkbox
                  selected={selections['step-redesign-3'].some((c) => c.value === opt.value)}
                />
              ))}
            </div>
          </div>
        );
      case 'step-other-2':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">How can I help you?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'seo', text: 'SEO Services' },
                { value: 'ads', text: 'Google Ads' },
                { value: 'ai', text: 'AI / Automation' },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-other-2"
                  option={opt}
                  selected={selections['step-other-2']?.value === opt.value}
                />
              ))}
            </div>
          </div>
        );
      case 'step-other-seo':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What is your main SEO goal?</p>
            <OptionCard
              step="step-other-seo"
              option={{ value: 'local-traffic', text: 'Increase local traffic' }}
              selected={selections['step-other-seo']?.value === 'local-traffic'}
            />
          </div>
        );
      case 'step-other-ads':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What is your estimated monthly budget?</p>
            <OptionCard
              step="step-other-ads"
              option={{ value: 'under-1k', text: 'Under $1,000/mo' }}
              selected={selections['step-other-ads']?.value === 'under-1k'}
            />
          </div>
        );
      case 'step-other-ai':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">What would you like to automate?</p>
            <OptionCard
              step="step-other-ai"
              option={{ value: 'support', text: 'Customer Support' }}
              selected={selections['step-other-ai']?.value === 'support'}
            />
          </div>
        );
      case 'step-features':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">Any additional features? (Optional)</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: 'ecommerce', text: 'eCommerce / Online Store', cost: 2000 },
                { value: 'seo', text: 'Initial SEO Setup', cost: 500 },
                { value: 'logo', text: 'Logo Design / Branding', cost: 400 },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-features"
                  option={opt}
                  checkbox
                  selected={selections['step-features'].some((c) => c.value === opt.value)}
                />
              ))}
            </div>
          </div>
        );
      case 'step-ecomm':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">How many products will you sell?</p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { value: '1-10', text: 'Starter Store (1-10 Products)', cost: 500 },
                { value: '11-50', text: 'Growing Store (11-50 Products)', cost: 1000 },
                { value: '50+', text: 'Large Store (50+ Products)', cost: 2000 },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-ecomm"
                  option={opt}
                  selected={selections['step-ecomm']?.value === opt.value}
                />
              ))}
            </div>
          </div>
        );
      case 'step-lead-capture': {
        const isOther = selections['step-1']?.value === 'other';
        return (
          <form onSubmit={submitLead} className="space-y-4">
            {isOther && (
              <div>
                <label className="block text-sm text-gray-100 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  className="form-input w-full rounded-md px-3 py-2"
                  placeholder="Please provide some details..."
                />
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-100 mb-1">Name *</label>
                <input name="name" className="form-input w-full rounded-md px-3 py-2" required />
              </div>
              <div>
                <label className="block text-sm text-gray-100 mb-1">Email *</label>
                <input
                  name="email"
                  type="email"
                  className="form-input w-full rounded-md px-3 py-2"
                  required
                />
              </div>
            </div>
            <button className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">
              {isOther ? 'Send Inquiry' : 'See My Estimate →'}
            </button>
          </form>
        );
      }
      case 'step-estimate': {
        const { min, max } = estimateRange();
        return (
          <div className="space-y-4 text-center">
            <div className="p-4 border border-gray-600 rounded-lg text-left">
              <h4 className="text-white font-semibold mb-2">Your Project Outline:</h4>
              <ul className="list-disc list-inside text-gray-100 space-y-1">
                {buildSummary().map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-200 text-3xl">
              ${min.toLocaleString()} - ${max.toLocaleString()}
            </p>
            <button
              onClick={getExplanation}
              className="text-sm text-brand-blue-500 hover:text-brand-blue-400"
              disabled={explaining}
            >
              {explaining ? 'Explaining…' : 'Why this price?'}
            </button>
            {explanation && <p className="text-gray-100 text-sm">{explanation}</p>}
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <button
                type="button"
                className="w-full bg-card-bg text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
                onClick={reset}
              >
                Adjust My Options
              </button>
              <button
                type="button"
                className="w-full bg-brand-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-600"
                onClick={() => go(1)}
              >
                Looks Good, What&apos;s Next?
              </button>
            </div>
          </div>
        );
      }
      case 'step-timeline':
        return (
          <div className="space-y-4">
            <p className="text-gray-100">Great! How soon would you like to start?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { value: 'now', text: 'Immediately' },
                { value: '1-2w', text: 'In 1-2 Weeks' },
                { value: 'month', text: 'Within a Month' },
                { value: 'browsing', text: 'Just Browsing' },
              ].map((opt) => (
                <OptionCard
                  key={opt.value}
                  step="step-timeline"
                  option={opt}
                  selected={selections['step-timeline']?.value === opt.value}
                />
              ))}
            </div>
          </div>
        );
      case 'step-final': {
        const name = selections['step-lead-capture']?.name.split(' ')[0] || '';
        const isOther = selections['step-1']?.value === 'other';
        return (
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white">
              {isOther ? `Thank you, ${name}!` : 'Thank you!'}
            </h3>
            <p className="text-gray-400">
              {isOther
                ? "Your inquiry has been sent. I'll be in touch with you shortly."
                : 'Your estimate has been saved. I will reach out with a formal proposal soon.'}
            </p>
          </div>
        );
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-[1px] rounded-xl bg-gradient-to-br from-brand-blue-600 to-brand-blue-500 shadow-2xl">
      <div className="bg-light-bg p-6 md:p-8 rounded-xl">
        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-6">
          <div className="h-full bg-brand-blue-500" style={{ width: `${progressPct}%` }} />
        </div>

        {renderStep()}

        {!['step-estimate', 'step-final'].includes(currentStep) && (
          <div className="flex items-center justify-between pt-6">
            <button
              type="button"
              onClick={() => go(-1)}
              className="text-sm text-gray-400 hover:text-white disabled:opacity-40"
              disabled={seq.indexOf(currentStep) <= 0}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg disabled:opacity-60"
              disabled={!isStepComplete(currentStep)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
