import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trucking Website Design | KT Design",
  description:
    "Websites for trucking and logistics companies: fast loads, driver recruiting funnels, and local SEO that rings the phone.",
};

export default function TruckingWebsiteDesignPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-16 bg-gradient-to-b from-[--color-light-bg] to-transparent">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-4">Trucking Website Design</h1>
            <p className="text-gray-300 max-w-3xl mb-8">
              Built for logistics and trucking companies in Mid‑Michigan: clear service pages, fast performance,
              and calls‑to‑action that convert. Driver recruiting funnels, equipment highlights, and service area pages
              that rank.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-200 mb-10">
              {[
                "Driver recruiting forms (w/ screening)",
                "Service area + lane pages for SEO",
                "Equipment galleries & specs",
                "Quote & dispatch contact flows",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-blue-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link href="/website-quote" className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">
                Get a trucking website quote
              </Link>
              <Link href="/portfolio" className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-700/30 text-white/90">
                See related work
              </Link>
            </div>
          </div>
        </section>

        {/* Show work grid under a light band for contrast */}
        <section className="py-16 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg] border-y border-gray-800">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Logistics & Service Work</h2>
            <Work />
          </div>
        </section>

        {/* Mini FAQ placeholder (you can swap in your real FAQ) */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-white mb-4">Trucking Website FAQ</h2>
            <div className="space-y-4 text-gray-300">
              <details className="rounded-lg border border-gray-700 p-4">
                <summary className="cursor-pointer font-semibold text-white">How fast can we launch?</summary>
                <p className="mt-2">Simple sites in 2–4 weeks; larger builds 4–8 weeks depending on content and approvals.</p>
              </details>
              <details className="rounded-lg border border-gray-700 p-4">
                <summary className="cursor-pointer font-semibold text-white">Do you handle copy and photos?</summary>
                <p className="mt-2">Yes—basic copy polish is included. We can also help source relevant imagery.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
