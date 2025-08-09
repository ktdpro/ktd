import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | KT Design",
  description: "Insights and tips on SEO-focused web design and performance.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-32 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-gray-300">Articles and case studies coming soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

