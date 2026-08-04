"use client";

import { useRef } from "react";

// TODO: remplacer par vos vrais produits mis en avant (nom, image/icône, prix réel)
const FEATURED = [
  {
    title: "Template e-commerce",
    tag: "Gratuit",
    highlighted: true,
    tileClass: "bg-gradient-to-br from-[#1E499B] to-[#3a6bd6]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 21h8" />
        <path d="M12 18v3" />
      </svg>
    ),
  },
  {
    title: "CRM Maatics",
    tag: "Payant",
    highlighted: false,
    tileClass: "bg-slate-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </svg>
    ),
  },
  {
    title: "Guide transformation digitale",
    tag: "Gratuit",
    highlighted: false,
    tileClass: "bg-emerald-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
      </svg>
    ),
  },
  {
    title: "Outil de facturation",
    tag: "Payant",
    highlighted: false,
    tileClass: "bg-violet-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h4" />
      </svg>
    ),
  },
  {
    title: "Template dashboard admin",
    tag: "Payant",
    highlighted: false,
    tileClass: "bg-sky-700",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden="true">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
];

export default function FeaturedSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section className="bg-[#0d1117] py-12 sm:py-14" aria-label="Logiciels du moment">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#store" className="inline-flex items-center gap-1.5 text-lg font-semibold text-white transition-colors hover:text-white/80 sm:text-xl">
            Les incontournables du moment
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByAmount(-1)}
              aria-label="Précédent"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(1)}
              aria-label="Suivant"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-6 flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {FEATURED.map((item) => (
            <a
              key={item.title}
              href="#store"
              className={`flex w-44 shrink-0 flex-col rounded-lg p-4 transition-transform hover:-translate-y-1 sm:w-48 ${
                item.highlighted ? "bg-[#1E499B]" : "bg-[#161b22] border border-[#30363d]"
              }`}
            >
              <div className={`flex aspect-square items-center justify-center rounded-md text-white ${item.tileClass}`}>
                {item.icon}
              </div>
              <span className="mt-3 text-sm font-semibold leading-snug text-white">
                {item.title}
              </span>
              <span className="mt-3 inline-flex w-fit items-center rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white">
                {item.tag}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
