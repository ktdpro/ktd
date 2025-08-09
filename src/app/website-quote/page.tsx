import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Website Quote | KT Design",
  description:
    "Answer a few quick questions and get a ballpark website estimate tailored to your business.",
};

export default function WebsiteQuotePage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-4">Get a Website Quote</h1>
            <p className="text-gray-300 mb-8">
              I’ll follow up with options, timelines, and a clear price. No pressure.
            </p>
            <div className="max-w-2xl mx-auto bg-light-bg border border-gray-700 p-8 rounded-xl">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
