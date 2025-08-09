'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const servicesBtnRef = useRef<HTMLButtonElement | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  // close services dropdown on outside click (desktop)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!openServices) return;
      const t = e.target as Node;
      if (
        servicesBtnRef.current &&
        servicesMenuRef.current &&
        !servicesBtnRef.current.contains(t) &&
        !servicesMenuRef.current.contains(t)
      ) {
        setOpenServices(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [openServices]);

  return (
    <header className="bg-dark-bg/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-700">
      <div className="mx-auto max-w-6xl px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-brand-blue-500 rounded-md" aria-label="KT Design Logo" />
          <span className="text-xl font-bold text-white">KT Design</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              ref={servicesBtnRef}
              type="button"
              className="text-gray-300 hover:text-brand-blue-500 inline-flex items-center gap-1"
              aria-haspopup="menu"
              aria-expanded={openServices}
              onClick={() => setOpenServices((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setOpenServices(false);
              }}
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${openServices ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.17l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.4a.75.75 0 0 1 .02-1.19Z" />
              </svg>
            </button>
            {openServices && (
              <div
                ref={servicesMenuRef}
                role="menu"
                className="absolute right-0 mt-4 w-64 rounded-lg border border-gray-700 bg-light-bg shadow-lg overflow-hidden"
              >
                <Link
                  href="/#services"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50"
                  role="menuitem"
                  onClick={() => setOpenServices(false)}
                >
                  All Services
                </Link>
                <Link
                  href="/local-seo-design"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700/50"
                  role="menuitem"
                  onClick={() => setOpenServices(false)}
                >
                  Local SEO Design
                </Link>
              </div>
            )}
          </div>
          <Link href="/portfolio" className="text-gray-300 hover:text-brand-blue-500">
            Portfolio
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-brand-blue-500">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-brand-blue-500">
            Blog
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-brand-blue-500">
            Contact
          </Link>
          <Link
            href="/#contact"
            className="bg-brand-blue-500 text-white px-5 py-2 rounded-lg hover:bg-brand-blue-600 shadow-md"
          >
            Get a Free Audit
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          className="md:hidden text-gray-300"
          onClick={() => setOpenMobile((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {openMobile && (
        <div className="md:hidden bg-dark-bg border-t border-gray-700">
          <Link
            href="/#services"
            className="block py-3 px-6 text-gray-300 hover:bg-light-bg"
            onClick={() => setOpenMobile(false)}
          >
            Services
          </Link>
          <div className="py-2">
            <Link
              href="/local-seo-design"
              className="block py-2 pl-10 pr-6 text-gray-300 hover:bg-light-bg"
              onClick={() => setOpenMobile(false)}
            >
              Local SEO Design
            </Link>
          </div>
          <Link
            href="/portfolio"
            className="block py-3 px-6 text-gray-300 hover:bg-light-bg"
            onClick={() => setOpenMobile(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/pricing"
            className="block py-3 px-6 text-gray-300 hover:bg-light-bg"
            onClick={() => setOpenMobile(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="block py-3 px-6 text-gray-300 hover:bg-light-bg"
            onClick={() => setOpenMobile(false)}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className="block py-3 px-6 text-gray-300 hover:bg-light-bg"
            onClick={() => setOpenMobile(false)}
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            className="block py-3 px-6 text-gray-100 bg-brand-blue-600 hover:bg-brand-blue-500"
            onClick={() => setOpenMobile(false)}
          >
            Get a Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}
