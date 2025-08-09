'use client';

import React from 'react';

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  bg: string;
  icon: React.ReactNode;
  href?: string;
};


const services: Service[] = [
  {
    title: 'Custom Websites',
    desc: 'Fast, accessible, and SEO‑friendly sites built with modern frameworks.',
    bullets: ['Next.js / WordPress', 'Core Web Vitals', 'ADA‑conscious UX'],
    bg: 'bg-[color:var(--color-light-bg)]', // #1f2937
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    href: '#work',
  },
  {
    title: 'eCommerce',
    desc: 'Conversion‑focused stores with clean architecture and checkout.',
    bullets: ['Shopify / WooCommerce', 'Payments & tax', 'Email + analytics'],
    bg: 'bg-[#232c3d]', // subtle blue-tinted slate
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.5 19h9m-8-6l1.5 6m5.5-6l-1.5 6"/>
      </svg>
    ),
    href: '#pricing',
  },
  {
    title: 'SEO & Local',
    desc: 'Rank for the right terms and convert with honest, readable content.',
    bullets: ['On‑page SEO', 'Schema & GMB', 'Content strategy'],
    bg: 'bg-[#1a2535]', // darker blue-toned panel
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"/>
      </svg>
    ),
    href: '#contact',
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* subtle divider to connect from testimonials */}
        <div className="h-px bg-gray-800/60 mb-12 md:mb-14" />

        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">
            Web Design Services for Mid‑Michigan
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          A Website That Works as Hard as You Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className={[
                'relative rounded-xl border transition-all p-5',
                s.bg,
                'border-transparent ring-1 ring-gray-800/80 hover:ring-brand-blue-500/40 hover:border-gray-700',
              ].join(' ')}
            >
              {/* icon in brand circle */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue-500 text-white mb-4 shadow-sm">
                {s.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300 mb-5">{s.desc}</p>

              <ul className="text-sm text-gray-200 space-y-2 mb-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              {s.href && (
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-brand-blue-500 hover:text-brand-blue-400 transition-colors"
                >
                  Learn more
                  <span className="inline-block translate-x-0 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
