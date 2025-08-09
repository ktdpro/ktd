import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Maintenance from "@/components/Maintenance";

export const metadata: Metadata = {
  title: "Website Maintenance | KT Design",
  description:
    "Affordable maintenance plans: updates, backups, security, and small content changes—built for local businesses.",
};

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pt-32 pb-20 bg-light-bg border-y border-gray-800">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold text-white mb-8">Website Maintenance</h1>
            <Maintenance />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
