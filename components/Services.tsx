const SERVICES = [
  {
    title: "Développement web",
    description: "Sites vitrines, e-commerce et plateformes sur mesure, pensés pour convertir.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </svg>
    ),
  },
  {
    title: "Application mobile",
    description: "Applications iOS et Android natives ou cross-platform, taillées pour vos usages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
  },
  {
    title: "Solutions SaaS",
    description: "Plateformes en abonnement, évolutives, hébergées et maintenues pour vous.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-1.6A4 4 0 0 0 6 16" />
        <path d="M17.5 19H8" />
      </svg>
    ),
  },
  {
    title: "Vidéosurveillance",
    description: "Caméras IP et systèmes de sécurité connectés, installés et supervisés.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M15 8a5 5 0 0 1 5 5v6h-3" />
        <path d="M17 21H2v-4a5 5 0 0 1 5-5h1" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Panneaux solaires intelligents",
    description: "Installation et pilotage énergétique connecté pour optimiser votre consommation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.9 4.9l1.4 1.4" />
        <path d="M17.7 17.7l1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M4.9 19.1l1.4-1.4" />
        <path d="M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f8fa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Nos services
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Un seul partenaire pour développer vos outils numériques et sécuriser vos installations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const isHighlighted = index === 0;
            return (
              <div
                key={service.title}
                className={`flex flex-col rounded-xl p-8 transition-all ${
                  isHighlighted
                    ? "bg-[#1E499B] shadow-lg shadow-[#1E499B]/25"
                    : "border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-mono text-3xl font-semibold ${
                      isHighlighted ? "text-white/40" : "text-slate-200"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={isHighlighted ? "text-white" : "text-[#1E499B]"}>
                    {service.icon}
                  </div>
                </div>

                <h3
                  className={`mt-6 text-lg font-semibold ${
                    isHighlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isHighlighted ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>

                <a
                  href="/contact"
                  className={`mt-6 inline-flex w-fit items-center rounded-md border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isHighlighted
                      ? "border-white/40 text-white hover:bg-white hover:text-[#1E499B]"
                      : "border-slate-300 text-slate-700 hover:border-[#1E499B] hover:text-[#1E499B]"
                  }`}
                >
                  En savoir plus
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}