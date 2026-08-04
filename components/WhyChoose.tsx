const REASONS = [
  {
    title: "Expertise multi-domaines",
    description: "Digital et technique réunis sous un seul toit, du code à l'installation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
        <path d="M5 4H3v2a4 4 0 0 0 4 4" />
        <path d="M19 4h2v2a4 4 0 0 1-4 4" />
      </svg>
    ),
  },
  {
    title: "Support et SAV",
    description: "Une équipe disponible pour vous accompagner après la mise en service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M3 12a9 9 0 0 1 18 0" />
        <path d="M21 12v5a2 2 0 0 1-2 2h-1" />
        <rect x="3" y="12" width="4" height="6" rx="1" />
        <rect x="17" y="12" width="4" height="6" rx="1" />
      </svg>
    ),
  },
  {
    title: "Installateurs certifiés",
    description: "Des techniciens qualifiés pour vos systèmes de sécurité et solaires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Devis rapide et gratuit",
    description: "Une réponse sous 48h, sans engagement de votre part.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-[#f7f8fa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Pourquoi <span className="font-bold">nous choisir</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {REASONS.map((reason, index) => (
            <div key={reason.title} className="px-2 text-center lg:px-6">
              <span
                className="block font-mono text-6xl font-black leading-none tracking-tight text-[#1E499B] sm:text-7xl"
                style={{ opacity: 1 - index * 0.18 }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mx-auto mt-4 h-px w-10 bg-slate-300" />
              <h3 className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-900 sm:text-sm">
                {reason.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">
                {reason.description}
              </p>
              <div className="mt-5 flex justify-center text-slate-900">{reason.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}