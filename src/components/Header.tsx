"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/website-maintenance", label: "Maintenance" },
    { href: "/trucking-website-design", label: "Trucking Websites" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-gray-700">
      <div className="mx-auto max-w-6xl px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg">
          KT Design
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-bg border-t border-gray-700 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
