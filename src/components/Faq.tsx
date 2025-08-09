import Link from "next/link";

export default function Faq() {
  return (
    <section
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      className="scroll-mt-24 py-20 bg-gradient-to-b from-[--color-light-bg] to-[--color-dark-bg] border-y border-gray-800"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-6">
          <div className="text-xs tracking-widest uppercase text-gray-400/80">FAQ</div>
        </div>
        <h2 className="text-3xl font-bold text-white text-center mb-8">SEO Design FAQ</h2>
        <div className="space-y-8">
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-white" itemProp="name">
              What is Local SEO design?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-gray-300 mt-2" itemProp="text">
                  Local SEO design optimizes your site’s structure and content so nearby customers can find you faster. <Link href="/local-seo-design" className="text-brand-blue-500 underline">Learn more about our Local SEO Design service</Link>.
                </p>
            </div>
          </div>
          <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-xl font-semibold text-white" itemProp="name">
              Do you offer free audits?
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-300 mt-2" itemProp="text">
                Yes, we provide a complimentary review highlighting quick wins to boost your search visibility and conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

