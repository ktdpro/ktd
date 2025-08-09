const plans = [
  {
    name: 'Basic Care',
    price: '$99/mo',
    features: ['Updates, backups, uptime', 'Malware monitoring', 'Daily backups', 'Security hardening', 'Minor updates'],
  },
  {
    name: 'Growth Plan',
    price: '$249/mo',
    badge: 'Includes Growth',
    features: ['Everything in Basic', 'Monthly SEO tweaks', 'Reports + KPIs', 'Priority support', '2 hrs content updates'],
  },
];

export default function Maintenance() {
  return (
    <section
      id="maintenance"
      className="scroll-mt-24 py-20 bg-gradient-to-br from-light-bg to-dark-bg border-y border-gray-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Ongoing Support</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">Website Upkeep & Maintenance Plans</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map(p => (
            <div key={p.name} className="rounded-xl border border-gray-700 bg-card-bg p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm uppercase tracking-wide text-gray-400">{p.name}</div>
                {p.badge && <span className="text-[11px] px-2 py-0.5 rounded border border-brand-blue-600/40 text-white/90">{p.badge}</span>}
              </div>
              <div className="text-2xl font-extrabold text-white mb-4">{p.price}</div>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-block bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">Choose plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
