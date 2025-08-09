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
      <main id="main-content">
        <section className="pt-32 pb-20 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-8">Contact</h1>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
