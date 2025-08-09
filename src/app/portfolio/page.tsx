import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Portfolio | KT Design — Recent Work",
  description:
    "Hand‑picked website projects across Mid‑Michigan industries: local service, eCommerce, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-20 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg] border-y border-gray-800">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-8">Portfolio</h1>
            <Work />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
