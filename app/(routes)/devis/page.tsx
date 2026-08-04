"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import QuoteForm from "../../../components/QuoteForm";

function DevisContent() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") ?? undefined;
  return <QuoteForm initialService={service} />;
}

export default function DevisPage() {
  return (
    <main className="bg-white">
      <section className="relative isolate flex min-h-55 items-center overflow-hidden bg-[#1E499B] sm:min-h-65" aria-label="Bannière Devis">
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-slate-900/40 via-transparent to-transparent" />
        <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Devis</span>
          </nav>
          <h1 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl">
            Demander un devis.
          </h1>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Décrivez votre projet, nous revenons vers vous sous 48h avec une proposition gratuite.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <Suspense fallback={null}>
            <DevisContent />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
