'use client';
import { useEffect, useRef } from 'react';

const reviews = [
  { avatar: 'https://placehold.co/48x48/a5b4fc/312e81?text=JM', name: 'Julie M.', source: 'Google',
    text: '“Knowledgeable, talented, efficient, affordable, & professional!...”' },
  { avatar: 'https://placehold.co/48x48/fbcfe8/831843?text=JL', name: 'Jody L.', source: 'Google',
    text: '“Kyle helped us enormously with our first website design… ranking at the top of Google.”' },
  { avatar: 'https://placehold.co/48x48/d9f99d/3f6212?text=ME', name: 'Michelle E.', source: 'Google',
    text: '“Kyle is a very creative and adaptive designer… nailed three very different sites quickly.”' },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('is-visible'));
    }, { threshold: 0.2 });
    node.querySelectorAll('.fade-in-section').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-24 py-16 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg] border-y border-gray-800">
      <div className="mx-auto max-w-6xl px-6" ref={sectionRef}>
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Trusted By Mid‑Michigan Businesses</div>
        </div>

        {/* grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="bg-card-bg p-6 rounded-lg border border-gray-600 hover:border-brand-blue-500 transition-colors duration-300 flex flex-col fade-in-section"
            >
              <div className="flex items-center mb-4">
                <img src={r.avatar} alt={`${r.name} avatar`} width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold text-white">{r.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                    <span>via {r.source}</span>
                  </div>
                </div>
              </div>
              <Stars />
              <p className="text-gray-300 mt-4">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}
