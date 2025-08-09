'use client';
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">Get an Instant Estimate</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Answer a few questions to get a ballpark price
        </h2>

        {/* centered calculator card */}
        <div className="max-w-2xl mx-auto bg-light-bg border border-gray-700 p-8 rounded-xl">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
