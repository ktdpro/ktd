'use client';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500+',
    blurb: 'Single-page or simple brochure site built to convert.',
    features: ['Up to 5 sections', 'Copy polish', 'Basic SEO + schema', 'Launch checklist'],
  },
  {
    name: 'Business',
    price: '$3,500+',
    blurb: 'Multi-page site with blog or services, tuned for Local SEO.',
    features: ['Up to 10 pages', 'Blog setup', 'Lead forms + automations', 'On-page SEO'],
    highlighted: true,
  },
  {
    name: 'Commerce',
    price: '$6,000+',
    blurb: 'Conversion-focused storefront with product strategy.',
    features: ['Shopify/Woo build', 'Payment/shipping/tax', 'Email capture + analytics', 'Training session'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Transparent, Honest Pricing</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-10">Find the Perfect Plan for Your Business</h2>

        {/* equal heights via items-stretch, align CTAs using flex-col + mt-auto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                'rounded-xl border p-6 flex flex-col transition-transform',
                t.highlighted ? 'border-2 border-brand-blue-500 bg-light-bg lg:scale-105' : 'border-gray-700 bg-card-bg',
              ].join(' ')}
            >
              {t.highlighted && (
                <div className="mb-2">
                  <span className="inline-block text-[11px] font-semibold text-white bg-brand-blue-600/20 border border-brand-blue-600/40 px-2 py-0.5 rounded">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-sm uppercase tracking-wide text-gray-400 mb-1">{t.name}</div>
              <div className="text-3xl font-extrabold text-white mb-2">{t.price}</div>
              <p className="text-gray-300 mb-4">{t.blurb}</p>

              <ul className="text-sm text-gray-300 space-y-2 mb-6 list-disc list-inside">
                {t.features.map((f) => <li key={f}>{f}</li>)}
              </ul>

              <div className="mt-auto">
                <a href="#contact" className="inline-block bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">
                  Request quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
