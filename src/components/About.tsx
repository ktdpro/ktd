export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 bg-gradient-to-br from-brand-blue-600/20 to-light-bg"
    >
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-xl bg-brand-blue-600/60 aspect-[16/10] md:aspect-[4/3] grid place-items-center text-white/70">
          Your Photo
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-gray-400/80 mb-2">About KT Design</div>
          <h2 className="text-3xl font-bold text-white mb-4">I’m a Business Owner, Too.</h2>
          <p className="text-gray-300 mb-4">
            I grew up on a farm in Shepherd, MI and spent 15 years running and marketing a local business. That experience
            shapes how I build: real-world messaging, fast sites, clear calls to action, and zero fluff.
          </p>
          <ul className="space-y-2 text-gray-300 list-disc list-inside">
            <li>Local SEO that actually moves the phone.</li>
            <li>Performance-first dev: Next.js, Tailwind, clean markup.</li>
            <li>Simple, honest maintenance plans you can understand.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
