"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  return (
    <main className="bg-white">
      {/* Bannière (même style que About.tsx / Store.tsx) */}
      <section className="relative isolate flex min-h-70 items-center overflow-hidden sm:min-h-85" aria-label="Bannière Contact">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1664575603992-0f17b771dd91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E499B]/85" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Fil d'ariane" className="text-sm text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Accueil</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact.
          </h1>
          <p className="mt-3 max-w-lg mx-auto text-sm text-white/80 sm:text-base">
            Une question, un projet ? Notre équipe vous répond sous 48h.
          </p>
        </div>
      </section>

      {/* Formulaire + coordonnées */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Infos de contact */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Parlons de votre projet
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Que ce soit pour un site web, une application, une solution SaaS ou une
              installation technique, notre équipe est à votre écoute.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E499B]/10 text-[#1E499B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-slate-900">Email</span>
                  <a href="mailto:contact@maatics.com" className="text-sm text-slate-600 hover:text-[#1E499B]">
                    contact@maatics.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E499B]/10 text-[#1E499B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-slate-900">Téléphone</span>
                  <a href="tel:+237600000000" className="text-sm text-slate-600 hover:text-[#1E499B]">
                    +237 691702880
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E499B]/10 text-[#1E499B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-slate-900">Adresse</span>
                  <span className="text-sm text-slate-600">Yaoundé, Cameroun</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1E499B]/10 text-[#1E499B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-slate-900">Horaires</span>
                  <span className="text-sm text-slate-600">Lun–Ven, 8h–18h</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Formulaire */}
          <div className="rounded-xl border border-slate-200 p-6 shadow-sm sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E499B]/10 text-[#1E499B]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Message envoyé</h3>
                <p className="max-w-sm text-sm text-slate-600">
                  Merci {name || ""}, nous revenons vers vous sous 48h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-slate-900">
                      Nom complet
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B]"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-slate-900">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B]"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-sm font-medium text-slate-900">
                    Sujet
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="mt-1.5 w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B]"
                    placeholder="Objet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-slate-900">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="mt-1.5 w-full resize-none rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B]"
                    placeholder="Votre message..."
                  />
                </div>

                {error && (
                  <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-md bg-[#1E499B] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#173a7a] disabled:opacity-60 sm:w-auto"
                >
                  {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Localisation (image de carte) */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Nous trouver
          </h2>
          <div className="relative mt-6 aspect-16/6 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=600&fit=crop"
              alt="Carte de localisation de Maatics"
              fill
              className="object-cover grayscale"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/10" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E499B] text-white shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
              </div>
              <span className="mt-1 block whitespace-nowrap rounded-md bg-white px-2 py-1 text-center text-xs font-medium text-slate-900 shadow-sm">
                Yaoundé, Cameroun
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
