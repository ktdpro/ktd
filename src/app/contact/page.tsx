import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact | KT Design",
  description:
    "Have a question or need an estimate? Get in touch and I’ll reply with clear next steps.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-8">Contact</h1>
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
