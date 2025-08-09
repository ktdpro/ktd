'use client';

const projects = [
  { title: 'Trucking Website', tag: 'Logistics & Trucking Co.', img: 'https://placehold.co/640x360/111827/94a3b8?text=Trucking' },
  { title: 'eCommerce Store', tag: 'Online Fashion Retailer', img: 'https://placehold.co/640x360/111827/94a3b8?text=eCommerce' },
  { title: 'Restaurant',      tag: 'Local Restaurant & Bar', img: 'https://placehold.co/640x360/111827/94a3b8?text=Restaurant' },
  { title: 'Contractor',      tag: 'Construction & Contractors', img: 'https://placehold.co/640x360/111827/94a3b8?text=Contractor' },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20 bg-light-bg border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Our Mid‑Michigan Work Portfolio</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">See The Quality For Yourself</h2>

        {/* group + image zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card-bg rounded-xl border border-gray-600 hover:border-brand-blue-500 transition-colors overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4">
                <div className="text-xs uppercase tracking-wide text-gray-400">{p.tag}</div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
