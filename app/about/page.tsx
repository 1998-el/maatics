import Image from "next/image";
import Link from "next/link";

// TODO: remplacer par les vrais fondateurs / dirigeants de Maatics
const LEADERSHIP = [
  {
    name: "Mounkam Charly Pierre",
    role: "Fondateur & CEO",
    bio: "Ingénieur logiciel et entrepreneur, Charly conçoit des plateformes SaaS modernes qui aident les organisations à gagner en efficacité grâce à l'automatisation, à la centralisation des données et à une expérience utilisateur de qualité. Avec MAATICS, il ambitionne de devenir une référence africaine des logiciels de gestion intelligents.",
    image: "/images/charly.jpeg",
  },
  {
    name: "Nkouamou Franck Chrispain",
    role: "Co-fondateur & Chief Technology Officer (CTO)",
    bio: "Expert en développement Full Stack et en architecture logicielle, Franck supervise la stratégie technologique de MAATICS. Il conçoit des infrastructures robustes, évolutives et sécurisées afin d'offrir une expérience utilisateur moderne et des solutions SaaS fiables adaptées au marché africain.",
    image: "/images/franck.jpeg",
  },
  // {
  //   name: "Moukouri Prisca",
  //   role: "Responsable Marketing & Clientèle",
  //   bio: "Passionnée par le relationnel client et le marketing digital, Prisca gère la stratégie commerciale et le suivi des partenaires de Maatics. Elle veille à maintenir un lien étroit avec chaque client, de la première prise de contact jusqu'au support post-livraison.",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  // },
];

const VALUES = [
  {
    title: "Un seul partenaire",
    description: "Digital et technique réunis, pour ne plus jongler entre prestataires.",
  },
  {
    title: "Exigence",
    description: "Le même niveau de rigueur pour une ligne de code ou une installation terrain.",
  },
  {
    title: "Proximité",
    description: "Un interlocuteur unique, du cadrage jusqu'au support après livraison.",
  },
  {
    title: "Impact durable",
    description: "Des solutions pensées pour durer, pas seulement pour être livrées.",
  },
];

const STATS = [
  { value: "40+", label: "entreprises équipées" },
  { value: "99,4%", label: "de disponibilité" },
  { value: "2h", label: "délai de réponse" },
  { value: "5", label: "domaines d'expertise" },
];

export default function About() {
  return (
    <main className="bg-white">
      {/* Bannière */}
      <section className="relative isolate flex min-h-[320px] items-center overflow-hidden sm:min-h-[400px]" aria-label="Bannière À propos">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&h=800&fit=crop"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">À propos</span>
          </nav>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            À propos.
          </h1>
        </div>
      </section>

      {/* Déclaration de mission, grand format */}
      <section id="about" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Nous pensons que le digital et la technique ne devraient jamais être des
            chantiers séparés. <span className="text-[#1E499B]">Maatics réunit les deux</span>,
            pour que vos projets avancent sans friction.
          </p>
          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Maatics accompagne les organisations qui veulent digitaliser leurs opérations
              tout en sécurisant leurs sites : développement web et mobile, solutions SaaS,
              vidéosurveillance et énergie solaire intelligente réunis autour d&apos;un seul
              partenaire.
            </p>
          </div>
        </div>
      </section>

      {/* Image pleine largeur */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto aspect-[16/7] max-w-7xl overflow-hidden rounded-xl bg-slate-100">
          <Image
            src="/images/maatics.png"
            alt="Équipe Maatics au travail"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Valeurs */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Ce qui nous guide
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="border-t-2 border-[#1E499B] pt-4">
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / fondateurs */}
      <section id="team" className="bg-[#f7f8fa] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              L&apos;équipe fondatrice
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              Les personnes à l&apos;origine de Maatics.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full bg-slate-200 sm:w-48">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{person.name}</h3>
                <p className="text-sm font-medium text-[#1E499B]">{person.role}</p>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-4xl font-black text-[#1E499B] sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs text-slate-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/1200x/8d/21/7c/8d217cd13510874830f264806d32d7ba.jpg"
            alt="Travaillez avec nous"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/80" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Travaillons ensemble
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-100/90 sm:text-base">
            Un projet en tête ? Parlons-en.
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