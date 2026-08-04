"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "../../../components/QuoteModalProvider";

const SERVICES = [
  {
    title: "Développement web",
    description:
      "Sites vitrines, e-commerce et plateformes sur mesure, pensés pour convertir et faciliter la gestion au quotidien.",
    features: [
      "Sites vitrines et e-commerce",
      "Plateformes web sur mesure",
      "Maintenance et évolutions",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=700&fit=crop",
  },
  {
    title: "Application mobile",
    description:
      "Applications iOS et Android natives ou cross-platform, conçues pour vos usages métier et vos clients.",
    features: [
      "iOS, Android et cross-platform",
      "Applications métier internes",
      "Publication sur les stores",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=700&fit=crop",
  },
  {
    title: "Solutions SaaS",
    description:
      "Plateformes en abonnement, évolutives et hébergées, pour digitaliser un processus métier complet.",
    features: [
      "Plateformes multi-utilisateurs",
      "Hébergement et supervision inclus",
      "Évolutions selon vos besoins",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.3-1.6A4 4 0 0 0 6 16" />
        <path d="M17.5 19H8" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=700&fit=crop",
  },
  {
    title: "Vidéosurveillance",
    description:
      "Caméras IP et systèmes de sécurité connectés, installés, configurés et supervisés à distance.",
    features: [
      "Caméras IP haute définition",
      "Supervision et alertes à distance",
      "Installation et maintenance",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M15 8a5 5 0 0 1 5 5v6h-3" />
        <path d="M17 21H2v-4a5 5 0 0 1 5-5h1" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=1600&h=700&fit=crop",
  },
  {
    title: "Panneaux solaires intelligents",
    description:
      "Installation et pilotage énergétique connecté pour réduire et optimiser votre consommation électrique.",
    features: [
      "Étude et installation sur site",
      "Monitoring de la production",
      "Suivi de la consommation en temps réel",
    ],
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
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=700&fit=crop",
  },
];

const SLIDES: Array<{
    type: "welcome" | "service";
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
  }> = [
  {
    type: "welcome",
    title: "Nos services.",
    subtitle: "Du développement digital à l'installation technique, un seul partenaire pour tous vos projets.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=700&fit=crop",
  },
  ...SERVICES.map((s) => ({
    type: "service" as const,
    title: s.title,
    description: s.description,
    image: s.image,
  })),
];

export default function ServicesPage() {
  const { openModal } = useQuoteModal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrent(index);

  return (
    <main className="bg-white">
      {/* Carrousel bannière */}
      <section className="relative isolate overflow-hidden" aria-label="Carrousel Services">
        <div className="relative h-[60vh] w-full sm:aspect-[16/5] md:aspect-[16/6]">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 -z-10">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[#1E499B]/85" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              </div>

              <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <nav aria-label="Fil d'ariane" className="text-xs text-white/70 sm:text-sm">
                    <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
                    <span className="mx-2" aria-hidden="true">/</span>
                    <span className="text-white">{slide.type === "welcome" ? "Services" : slide.title}</span>
                  </nav>
                  <h1 className="mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl sm:mt-4 lg:text-6xl">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="mx-auto mt-2 max-w-lg text-xs text-white/80 sm:text-sm sm:mt-3">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.type === "service" && (
                    <p className="mt-3 text-xs leading-relaxed text-white/80 sm:text-sm">
                      {SERVICES.find((s) => s.title === slide.title)?.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Points de navigation */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Navigation du carrousel">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Aller au slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Grille des services */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-[#1E499B]/40 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1E499B]/10 text-[#1E499B]">
                  {service.icon}
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>

                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-[#1E499B]" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openModal(service.title)}
                  className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-medium text-[#1E499B] transition-all hover:gap-2"
                >
                  Demander un devis
                  <span aria-hidden="true">→</span>
                </button>
                <Link
                  href={`/devis?service=${encodeURIComponent(service.title)}`}
                  className="mt-3 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                >
                  Ou page de devis dédiée
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travaillez avec nous"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/80" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Un projet en tête ?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-100/90 sm:text-base">
            Décrivez-nous votre besoin, nous revenons vers vous avec un devis gratuit sous 48h.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1E499B] transition-colors hover:bg-slate-100"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
}

