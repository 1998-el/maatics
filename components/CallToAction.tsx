"use client";

import Image from "next/image";
import Link from "next/link";

interface CallToActionProps {
  onContactClick?: () => void;
}

export default function CallToAction({ onContactClick }: CallToActionProps) {
  return (
    <section id="cta" className="relative isolate overflow-hidden py-20 sm:py-28" aria-label="Appel à l'action">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1E499B]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-slate-900/40" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
          Parlons de vos besoins, digitaux ou techniques — notre équipe vous répond sous 48h avec un devis gratuit.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#1E499B] transition-colors hover:bg-slate-100 sm:w-auto"
          >
            Nous contacter
          </Link>
          <a
            href="mailto:contact@maatics.com"
            className="w-full rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            contact@maatics.com
          </a>
        </div>
      </div>
    </section>
  );
}