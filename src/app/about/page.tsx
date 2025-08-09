import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | KT Design — Mid‑Michigan Web Designer",
  description:
    "Owner‑led web design in Shepherd, MI. Since 2010, building fast, clear, results‑driven websites for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Intro */}
        <section className="pt-32 pb-14">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-3">About KT Design</h1>
            <p className="text-gray-400 max-w-2xl">
              I’m <span className="text-white">Kyle</span> — a business owner and web designer based in Shepherd, MI.
              Since 2010 I’ve been building sites that speak plainly, load fast, and actually move the phone.
            </p>
          </div>
        </section>

        {/* Story / Hero block */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
            {/* Image / Headshot */}
            <div className="rounded-xl bg-brand-blue-600/15 border border-gray-700 aspect-[16/10] md:aspect-[4/3] grid place-items-center text-white/70">
              {/* Replace with an <img/> when you have a headshot or workspace photo */}
              Your Photo / Workspace
            </div>

            {/* Copy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">My Journey into Website Design</h2>
              <p className="text-gray-300 mb-4">
                I bring creativity, technical depth, and owner‑to‑owner practicality to every build. Over the last
                decade I’ve refined a process that makes websites not just look great, but convert — clear messaging,
                fast performance, and calls‑to‑action where they belong.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you need a brand‑new site or a redesign, I take a personalized, goal‑first approach so your
                site aligns with how your business actually wins customers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-700 bg-card-bg p-4">
                  <div className="text-sm uppercase tracking-widest text-gray-400/80 mb-1">Focus</div>
                  <p className="text-gray-200">Local SEO + performance. Clear structure, fast pages, honest content.</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-card-bg p-4">
                  <div className="text-sm uppercase tracking-widest text-gray-400/80 mb-1">Process</div>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    {["Discovery (20–30 min)", "Scope & estimate", "Build & review", "Launch & support"].map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue-400 inline-block" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-white mb-4">Industries I’ve Worked With</h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              Every sector has its quirks — I adapt content, structure, and conversions to match how your customers buy.
            </p>

            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
              {[
                "Transportation & Trucking",
                "Industrial & Manufacturing",
                "Salons & Spas",
                "Farming & Agriculture",
                "Oil & Gas Supply",
                "Renewable Energy",
                "eCommerce / Online Stores",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue-400 inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education / Training (light band) */}
        <section className="py-16 bg-light-bg border-y border-gray-800">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Professional Education & Training</h2>

            <div className="grid md:grid-cols-3 gap-6">
                 <article className="rounded-lg border border-gray-700 bg-card-bg p-5">
                <div className="text-sm uppercase tracking-widest text-gray-400/80 mb-1">eClasses.org</div>
                <h3 className="text-white font-semibold mb-1">Web Business & Web Technologies (2010–2012)</h3>
                <p className="text-gray-300 text-sm">
                  Instructor‑led courses in web design, programming, IT, and business fundamentals.
                </p>
              </article>
              <article className="rounded-lg border border-gray-700 bg-card-bg p-5">
                <div className="text-sm uppercase tracking-widest text-gray-400/80 mb-1">
                  Sessions College
                </div>
                <h3 className="text-white font-semibold mb-1">A.O.S. in Web Design - Tempe, Arizona (2013–2015)</h3>
                <p className="text-gray-300 text-sm">
                  Project‑based, industry‑relevant design education focused on real‑world outcomes.
                </p>
              </article>
              <article className="rounded-lg border border-gray-700 bg-card-bg p-5">
                <div className="text-sm uppercase tracking-widest text-gray-400/80 mb-1">Search Engine News</div>
                <h3 className="text-white font-semibold mb-1">Local Search, Advanced SEO & Analytics (2015–2016)</h3>
                <p className="text-gray-300 text-sm">
                  Practical SEO training geared toward measurable improvements and clear reporting.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-xl border border-gray-700 bg-card-bg p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Let’s talk about your website</h2>
                <p className="text-gray-300">
                  1–2 day discovery turnaround. Clear scope. No mystery fees.
                </p>
              </div>
              <div className="flex gap-3">
                <a href="/website-quote" className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white px-5 py-2 rounded-lg">
                  Request a Quote
                </a>
                <a href="/portfolio" className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-700/30 text-white/90">
                  See Recent Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
