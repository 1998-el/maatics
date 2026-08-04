"use client";

import Image from "next/image";
import Link from "next/link";

import { useQuoteModal } from "@/components/QuoteModalProvider";

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const { openModal } = useQuoteModal();
  return (
    <section className="relative isolate overflow-hidden" aria-label="Présentation">
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.pinimg.com/1200x/c5/f5/19/c5f5191cb2deff9a62f988cfd5c59196.jpg"
          alt="Bureau Matiq"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1117]/95 via-[#0d1117]/80 to-[#0d1117]/60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d1117]/50 via-transparent to-transparent" />
      </div>

     


      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          {/* Titre */}
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Le digital et la technique,{" "}
            <span className="text-[#58a6ff]">réunis sous un même toit</span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-[#c9d1d9] sm:mt-6 sm:text-base lg:text-lg">
            Matiq conçoit votre site web, votre application mobile, votre SaaS, votre vidéosurveillance et vos panneaux solaires intelligents, avec un seul partenaire à votre écoute.
          </p>

          {/* Boutons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              className="w-full rounded-md bg-[#58a6ff] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f6feb] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2 focus:ring-offset-[#0d1117] sm:w-auto"
              onClick={() => openModal()}
            >
              Demander un devis
            </button>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-md border border-[#30363d] px-6 py-3 text-sm font-medium text-[#c9d1d9] transition-colors hover:border-[#8b949e] hover:text-white sm:w-auto"
            >
              Nous contacter
            </Link>
          </div>

          {/* Statistiques rapides */}
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[#30363d] pt-6 sm:mt-12 sm:flex sm:flex-wrap sm:gap-8 sm:pt-8">
            <div>
              <span className="block font-mono text-xl font-semibold text-white sm:text-2xl">40<span className="text-[#58a6ff]">+</span></span>
              <span className="text-xs text-[#8b949e] sm:text-sm">Entreprises équipées</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-semibold text-white sm:text-2xl">99,4<span className="text-[#58a6ff]">%</span></span>
              <span className="text-xs text-[#8b949e] sm:text-sm">Disponibilité</span>
            </div>
            <div>
              <span className="block font-mono text-xl font-semibold text-white sm:text-2xl">4<span className="text-[#58a6ff]">h</span></span>
              <span className="text-xs text-[#8b949e] sm:text-sm">Délai de réponse</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}