export default function UtilityBar() {
  return (
    <div className="hidden bg-[var(--blue)] text-slate-100 lg:block">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-2 sm:min-h-[44px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium sm:justify-start sm:gap-3 sm:text-sm">
          <a href="mailto:contact@matiq.fr" className="transition-colors hover:text-white">
            contact@maatics.com
          </a>
          <span className="hidden text-slate-300/70 sm:inline">|</span>
          {/* <a
            href="#contact"
            aria-label="Se connecter ou créer un compte"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4 sm:hidden"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="hidden sm:inline">Se connecter / Créer un compte</span>
          </a> */}
        </div>

        <div className="flex items-center gap-3 text-xs sm:gap-4 sm:text-sm">
          <span className="hidden text-slate-200 sm:inline">Langue : FR</span>
          <div className="flex items-center gap-2" aria-label="Réseaux sociaux">
            <a href="#contact" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition-colors hover:bg-white/20 hover:text-white sm:h-7 sm:w-7 sm:text-[11px]">
              in
            </a>
            <a href="https://x.com/maatics_cm" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition-colors hover:bg-white/20 hover:text-white sm:h-7 sm:w-7 sm:text-[11px]">
              X
            </a>
            <a href="#contact" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition-colors hover:bg-white/20 hover:text-white sm:h-7 sm:w-7 sm:text-[11px]">
              f
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}