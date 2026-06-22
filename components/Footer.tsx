export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-dark border-t border-teal-500/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          &copy; {currentYear} Aroni. Built with{" "}
          <span className="text-teal-400">Next.js</span> &{" "}
          <span className="text-teal-400">Tailwind CSS</span>.
        </p>

        <p className="text-xs text-text-muted/60 font-mono">
          ありがとう &middot; Thanks for visiting
        </p>
      </div>
    </footer>
  );
}
