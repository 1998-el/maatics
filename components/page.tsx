import Image from "next/image";

export default function MentionsLegales() {
  return (
    <main className="bg-white">
      {/* Bannière (même style que les autres pages) */}
      <section className="relative isolate flex min-h-[220px] items-center overflow-hidden sm:min-h-[260px]" aria-label="Bannière Mentions légales">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=600&fit=crop"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="text-sm text-white/70">
            <a href="/" className="transition-colors hover:text-white">Accueil</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Mentions légales</span>
          </nav>
          <h1 className="mt-4 text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
            Mentions légales.
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-slate-500">
            Dernière mise à jour : [à compléter]
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-slate-700 sm:text-base">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">1. Éditeur du site</h2>
              <p className="mt-3">
                Le présent site est édité par <strong>Maatics</strong>
                {" "}[forme juridique, ex : SARL / Entreprise individuelle], au capital de
                {" "}[montant à compléter], immatriculée sous le numéro RCCM
                {" "}[numéro à compléter], dont le siège social est situé à
                {" "}[adresse complète à compléter], Yaoundé, Cameroun.
              </p>
              <p className="mt-3">
                Numéro de contribuable (NIU) : [à compléter]
                <br />
                Directeur de la publication : [nom à compléter]
                <br />
                Email : <a href="mailto:contact@maatics.com" className="text-[#1E499B] hover:underline">contact@maatics.com</a>
                <br />
                Téléphone : [numéro à compléter]
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">2. Hébergement</h2>
              <p className="mt-3">
                Le site est hébergé par [nom de l&apos;hébergeur à compléter], dont le siège
                social est situé à [adresse de l&apos;hébergeur à compléter].
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">3. Propriété intellectuelle</h2>
              <p className="mt-3">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos,
                icônes, mise en page, code source) est la propriété exclusive de Maatics,
                sauf mention contraire. Toute reproduction, représentation, modification,
                publication ou adaptation de tout ou partie des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite
                préalable.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">4. Données personnelles</h2>
              <p className="mt-3">
                Les informations recueillies via les formulaires de ce site (contact, demande
                de devis, newsletter) sont destinées exclusivement à Maatics et sont utilisées
                pour répondre à vos demandes, assurer le suivi commercial et, le cas échéant,
                vous adresser des communications si vous y avez consenti.
              </p>
              <p className="mt-3">
                Conformément à la réglementation applicable en matière de protection des
                données personnelles, vous disposez d&apos;un droit d&apos;accès, de
                rectification et de suppression des données vous concernant. Pour exercer ce
                droit, contactez-nous à l&apos;adresse{" "}
                <a href="mailto:contact@maatics.com" className="text-[#1E499B] hover:underline">
                  contact@maatics.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">5. Cookies</h2>
              <p className="mt-3">
                Ce site peut utiliser des cookies nécessaires à son bon fonctionnement ainsi
                que des cookies de mesure d&apos;audience. Vous pouvez configurer votre
                navigateur pour refuser les cookies ; certaines fonctionnalités du site
                pourraient alors être limitées.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">6. Limitation de responsabilité</h2>
              <p className="mt-3">
                Maatics s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site, mais ne peut garantir l&apos;exhaustivité
                ou l&apos;absence d&apos;erreurs. Maatics ne saurait être tenue responsable des
                dommages directs ou indirects résultant de l&apos;accès ou de
                l&apos;utilisation de ce site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">7. Liens hypertextes</h2>
              <p className="mt-3">
                Ce site peut contenir des liens vers d&apos;autres sites. Maatics n&apos;exerce
                aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur
                contenu.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">8. Droit applicable</h2>
              <p className="mt-3">
                Les présentes mentions légales sont soumises au droit camerounais. En cas de
                litige, et à défaut de résolution amiable, les tribunaux compétents seront
                ceux du ressort du siège social de Maatics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}