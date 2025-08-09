"use client";
import Image from "next/image";

const projects = [
  {
    title: "Trucking Website",
    tag: "Logistics & Trucking Co.",
    img: "https://placehold.co/640x360/111827/94a3b8?text=Trucking",
    alt: "Screenshot of a trucking company website redesign",
    metric: "↑ 120% organic traffic",
  },
  {
    title: "eCommerce Store",
    tag: "Online Fashion Retailer",
    img: "https://placehold.co/640x360/111827/94a3b8?text=eCommerce",
    alt: "Product grid of an eCommerce fashion site",
    metric: "↑ 35% conversion rate",
  },
  {
    title: "Restaurant",
    tag: "Local Restaurant & Bar",
    img: "https://placehold.co/640x360/111827/94a3b8?text=Restaurant",
    alt: "Homepage of a restaurant showing featured dishes",
    metric: "↑ 50% reservations",
  },
  {
    title: "Contractor",
    tag: "Construction & Contractors",
    img: "https://placehold.co/640x360/111827/94a3b8?text=Contractor",
    alt: "Construction contractor site with project gallery",
    metric: "↑ 78% quote requests",
  },
];

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg] border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Our Mid‑Michigan Work Portfolio</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">See The Quality For Yourself</h2>

        {/* group + image zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl p-[1px] bg-gradient-to-r from-brand-blue-500/40 to-brand-blue-700/40"
            >
              <div className="bg-card-bg rounded-[inherit] border border-gray-600 hover:border-brand-blue-500 transition-colors overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4">
                  <div className="text-xs uppercase tracking-wide text-gray-400">{p.tag}</div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{p.metric}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
