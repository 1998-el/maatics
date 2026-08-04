import Image from "next/image";
import Link from "next/link";

export default function Store() {
  return (
    <main className="bg-white">
      {/* Bannière (même style que About.tsx) */}
      <section className="relative isolate flex min-h-[280px] items-center justify-center overflow-hidden sm:min-h-[340px]" aria-label="Bannière Store">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://i.pinimg.com/1200x/cb/aa/fd/cbaafdae42195ad1e5d0dbf8117e224c.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Store</span>
          </nav>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            Le store.
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/80 sm:text-base">
            Templates, logiciels et ressources prêts à l&apos;emploi pour avancer plus vite.
          </p>
        </div>
      </section>

      {/* État vide */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto flex max-w-md flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E499B]/10 text-[#1E499B]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h2 className="mt-5 text-lg font-semibold text-slate-900">
            Aucun produit disponible
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Ils seront bientôt disponibles ! Revenez prochainement pour découvrir nos templates,
            logiciels et livres numériques.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center rounded-md border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-[#1E499B] hover:text-[#1E499B]"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}