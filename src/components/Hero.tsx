export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Expert <span className="bg-gradient-to-r from-brand-blue-500 to-blue-400 bg-clip-text text-transparent">Web Design</span><br />
          in Mid-Michigan
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          I build high-converting websites for businesses in our local community and beyond, turning visitors into paying customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#contact" className="bg-brand-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            Get My Free Estimate →
          </a>
          <a href="#schedule" className="px-8 py-4 rounded-lg font-semibold text-white/90 border border-gray-700 hover:bg-gray-700/30 text-lg">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
