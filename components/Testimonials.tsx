"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "M. Jean-Pierre Bekono (Douala)",
    quote:
      "Installation solaire terminée en 2 jours sur notre entrepôt de Bonabéri. Depuis, plus de coupures pendant les pics de chaleur. Économie de 65 % sur la facture Eneo.",
  },
  {
    name: "Mme Carine Essomba (Yaoundé)",
    quote:
      "Notre application de gestion de micro-crédit a été livrée en 4 semaines. L'équipe maîtrise parfaitement l'environnement Orange Money et MTN Mobile Money. Un vrai gain de temps.",
  },
  {
    name: "Dr. Samuel Fouda (Garoua)",
    quote:
      "Ils ont installé la vidéosurveillance dans notre clinique en une demi-journée. Explications en français et en fulfuldé pour nos agents de sécurité. Très professionnels.",
  },
  {
    name: "M. Rostand Nana (Bafoussam)",
    quote:
      "Notre SaaS de gestion agricole a été conçu avec nous, pas pour nous. Interface simple, rapports adaptés aux coopératives locales. L'accompagnement terrain a fait la différence.",
  },
  {
    name: "Mme Sylvie Mendouga (Bertoua)",
    quote:
      "Nous avons digitalisé notre boutique de matériaux avec leur solution e-commerce + paiement mobile. Résultat : +35 % de ventes hors de Bertoua en 3 mois.",
  },
  {
    name: "Pr. Emmanuel Ngono (Ngoundéré)",
    quote:
      "Leur système solaire hybride alimente notre laboratoire de recherche en continu. L'équipe est venue jusqu'ici, a formé nos techniciens et assure un suivi à distance fiable.",
  },
  {
    name: "M. Hervé Tchoffo (Kribi)",
    quote:
      "Installation rapide des caméras de surveillance sur notre site portuaire. Interface intuitive et alarmes en temps réel sur nos téléphones. Sérénité totale.",
  },
  {
    name: "Mme Chantal Njoya (Dschang)",
    quote:
      "Ils ont repris notre site web et notre CRM en 2 semaines. Aujourd'hui, nous gérons nos 200 clients étudiants sans stress. Disponibles même le week-end.",
  },
];
const SLIDE_DURATION = 4500;

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1E499B]/10 text-sm font-semibold text-[#1E499B]">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="overflow-hidden bg-[#1E499B] py-16 sm:py-24">
      <style>{`
        @keyframes testimonialSlideIn {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .testimonial-slide {
          animation: testimonialSlideIn 0.5s ease-out;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* Colonne gauche */}
          <div>
            <span className="font-serif text-7xl leading-none text-white/25" aria-hidden="true">
              &ldquo;
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Témoignages
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              Ce que nos clients retiennent de leur accompagnement, du développement web à l&apos;installation technique.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1E499B] transition-colors hover:bg-slate-100"
            >
              Nous contacter
            </a>
          </div>

          {/* Colonne droite : témoignage animé */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            tabIndex={0}
            role="group"
            aria-label="Témoignages clients"
          >
            <div
              key={activeIndex}
              className="testimonial-slide relative min-h-[150px] rounded-xl bg-white p-5 shadow-xl lg:ml-16"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Avatar name={active.name} />
                  <span className="text-sm font-semibold text-slate-900">
                    {active.name}
                  </span>
                </div>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 shrink-0 text-[#1E499B]/20" aria-hidden="true">
                  <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.34a2.83 2.83 0 0 1 2.83-2.83V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83h-4.49a2.83 2.83 0 0 1 2.83-2.83V6z" />
                </svg>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {active.quote}
              </p>
            </div>

            {/* Indicateurs (pas de flèches, juste la progression) */}
            <div className="mt-5 flex justify-center gap-2 lg:ml-16 lg:justify-start">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Afficher le témoignage de ${testimonial.name}`}
                  aria-current={index === activeIndex}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}