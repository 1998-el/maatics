const SECTIONS = [
  { id: "editeur", title: "Éditeur du site" },
  { id: "hebergement", title: "Hébergement" },
  { id: "propriete", title: "Propriété intellectuelle" },
  { id: "donnees", title: "Données personnelles" },
  { id: "cookies", title: "Cookies" },
  { id: "responsabilite", title: "Limitation de responsabilité" },
  { id: "liens", title: "Liens hypertextes" },
  { id: "droit", title: "Droit applicable" },
  { id: "contact", title: "Contact" },
];

export default function MentionsLegales() {
  return (
    <main className="bg-white">
      {/* En-tête minimal, sans bannière image — esprit pages légales Apple */}
      <section className="border-b border-slate-100 px-4 pb-10 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Fil d'ariane" className="text-xs text-slate-400">
            <a href="/" className="transition-colors hover:text-slate-600">Accueil</a>
            <span className="mx-1.5" aria-hidden="true">›</span>
            <span>Mentions légales</span>
          </nav>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Mentions légales
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Dernière mise à jour : 4 août 2026
          </p>
        </div>
      </section>

      {/* Contenu avec sommaire latéral sticky */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
          {/* Sommaire */}
          <nav aria-label="Sommaire" className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Sommaire
            </span>
            <ul className="mt-4 space-y-2.5 border-l border-slate-100 text-sm">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent pl-4 text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-16 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            <div id="editeur" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Éditeur du site</h2>
              <p className="mt-4">
                Le présent site est édité par <strong className="text-slate-900">Maatics</strong>,
                activité actuellement en cours de formalisation juridique. La structure est en
                voie d&apos;immatriculation ; les informations légales complètes (forme
                juridique, capital social, numéro RCCM, siège social) seront publiées sur cette
                page dès l&apos;immatriculation effective.
              </p>
              <p className="mt-4">
                Responsable de la publication : [nom à compléter]
                <br />
                Email :{" "}
                <a href="mailto:contact@maatics.com" className="text-[#1E499B] hover:underline">
                  contact@maatics.com
                </a>
                <br />
                Téléphone : [numéro à compléter]
              </p>
            </div>

            <div id="hebergement" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Hébergement</h2>
              <p className="mt-4">
                Le site est hébergé par <strong className="text-slate-900">LWS – Ligne Web Services SAS</strong>,
                filiale de Groupe LWS, société au capital de 500 000 €, immatriculée au RCS de
                Paris sous le numéro 851 993 683, dont le siège social est situé au 2 rue Jules
                Ferry, 88190 Golbey, France.
              </p>
              <p className="mt-4">
                Site web :{" "}
                <a href="https://www.lws.fr" target="_blank" rel="noopener noreferrer" className="text-[#1E499B] hover:underline">
                  www.lws.fr
                </a>
              </p>
            </div>

            <div id="propriete" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Propriété intellectuelle</h2>
              <p className="mt-4">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos,
                icônes, mise en page, code source) est la propriété exclusive de Maatics,
                sauf mention contraire. Toute reproduction, représentation, modification,
                publication ou adaptation de tout ou partie des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite
                préalable.
              </p>
            </div>

            <div id="donnees" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Données personnelles</h2>
              <p className="mt-4">
                Les informations recueillies via les formulaires de ce site (contact, demande
                de devis, newsletter) sont destinées exclusivement à Maatics et sont utilisées
                pour répondre à vos demandes, assurer le suivi commercial et, le cas échéant,
                vous adresser des communications si vous y avez consenti.
              </p>
              <p className="mt-4">
                Conformément à la réglementation applicable en matière de protection des
                données personnelles, vous disposez d&apos;un droit d&apos;accès, de
                rectification et de suppression des données vous concernant. Pour exercer ce
                droit, contactez-nous à l&apos;adresse{" "}
                <a href="mailto:contact@maatics.com" className="text-[#1E499B] hover:underline">
                  contact@maatics.com
                </a>.
              </p>
            </div>

            <div id="cookies" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Cookies</h2>
              <p className="mt-4">
                Ce site peut utiliser des cookies nécessaires à son bon fonctionnement ainsi
                que des cookies de mesure d&apos;audience. Vous pouvez configurer votre
                navigateur pour refuser les cookies ; certaines fonctionnalités du site
                pourraient alors être limitées.
              </p>
            </div>

            <div id="responsabilite" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Limitation de responsabilité</h2>
              <p className="mt-4">
                Maatics s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
                informations diffusées sur ce site, mais ne peut garantir l&apos;exhaustivité
                ou l&apos;absence d&apos;erreurs. Maatics ne saurait être tenue responsable des
                dommages directs ou indirects résultant de l&apos;accès ou de
                l&apos;utilisation de ce site.
              </p>
            </div>

            <div id="liens" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Liens hypertextes</h2>
              <p className="mt-4">
                Ce site peut contenir des liens vers d&apos;autres sites. Maatics n&apos;exerce
                aucun contrôle sur ces sites tiers et décline toute responsabilité quant à leur
                contenu.
              </p>
            </div>

            <div id="droit" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Droit applicable</h2>
              <p className="mt-4">
                Les présentes mentions légales sont soumises au droit camerounais. En cas de
                litige, et à défaut de résolution amiable, les tribunaux compétents seront
                ceux du ressort du siège social de Maatics.
              </p>
            </div>

            <div id="contact" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-4">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous
                contacter à{" "}
                <a href="mailto:contact@maatics.com" className="text-[#1E499B] hover:underline">
                  contact@maatics.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}