import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Maintenance from "@/components/Maintenance";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Testimonials />
        <Services />
        <Work />
        <Pricing />
        <Maintenance />
        <About />
        <Faq />
        <Contact />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
