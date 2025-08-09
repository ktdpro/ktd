import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Local SEO Design | KT Design",
  description:
    "SEO-friendly website design for local businesses. Fast, mobile-first pages that help you rank and convert nearby customers.",
};

export default function LocalSeoDesignPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-extrabold text-white mb-4">Local SEO Design</h1>
          <p className="text-gray-300 mb-4">
            Our local SEO design service builds a strong foundation so your business appears where it matters most—nearby
            searches. Pages are structured for search engines and humans alike, keeping your message clear and your site fast.
          </p>
          <p className="text-gray-300 mb-6">
            Ready to see how optimized design can grow your traffic?{' '}
            <Link href="/#contact" className="text-brand-blue-500 underline">
              Get a free audit
            </Link>{' '}
            and we’ll show you quick wins.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

