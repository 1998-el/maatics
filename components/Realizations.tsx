"use client";

import Image from "next/image";
import { useState } from "react";

const FILTERS = ["Tous", "Web", "Mobile", "Sécurité", "Solaire"];

const PROJECTS = [
  {
    category: "Web",
    title: "Plateforme e-commerce",
    image: "https://i.pinimg.com/1200x/bc/7c/2e/bc7c2e2d639757bff16460485c0222f1.jpg",
    description: "Solution complète de vente en ligne"
  },
  {
    category: "Mobile",
    title: "Application de livraison",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Suivi en temps réel des livreurs"
  },
  {
    category: "Sécurité",
    title: "Vidéosurveillance  site industriel",
    image: "https://i.pinimg.com/1200x/d3/22/79/d3227972ea2dee89ea5a0ebf89d241c7.jpg",
    description: "Supervision 24/7 avec détection d'intrusion"
  },
  {
    category: "Solaire",
    title: "Installation solaire connectée",
    image: "/images/solar1.jpeg",
    description: "Panneaux photovoltaïques avec monitoring"
  },
];

export default function Realizations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="realizations" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1E499B]">
            Nos réalisations
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Des projets qui parlent pour nous
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Un aperçu de projets menés pour nos clients, digitaux comme techniques.
          </p>
        </div>

        {/* Filtres */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#1E499B] text-white"
                  : "border border-slate-200 text-slate-600 hover:border-[#1E499B] hover:text-[#1E499B]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <a
              key={project.title}
              href="#realizations"
              className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[#1E499B]/40 hover:shadow-lg hover:shadow-slate-200/60"
            >
              {/* Image avec overlay */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Catégorie en badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1E499B] backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Overlay au hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1E499B]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                    Voir le projet
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Infos */}
              <div className="p-4">
                <span className="text-xs font-medium uppercase tracking-wide text-[#1E499B]">
                  {project.category}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-slate-900 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProjects.length === 0 && (
          <div className="mt-10 text-center text-slate-500">
            Aucun projet trouvé pour cette catégorie.
          </div>
        )}
      </div>
    </section>
  );
}