export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 border-t border-gray-700">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-sm">
        <div>© {new Date().getFullYear()} KT Design</div>
        <div className="opacity-80">Shepherd, MI · Serving Mid‑Michigan</div>
      </div>
    </footer>
  );
}
