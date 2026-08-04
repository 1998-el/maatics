"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { NAV_LINKS } from "@/constants/navigation";

const SOCIALS = [
  { label: "LinkedIn", href: "#", initials: "in" },
  { label: "X", href: "#", initials: "X" },
  { label: "Facebook", href: "#", initials: "f" },
  { label: "Instagram", href: "#", initials: "ig" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;
    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1E499B] text-white">
      {/* Bandeau "un projet en tête ?" */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/images/logo1.png" alt="Logo Maatics" width={40} height={40} className="h-14 w-auto"/>
          </div>
          <p className="text-sm text-white/80 sm:text-base">
            Un projet en tête ?{" "}
            <Link href="/contact" className="font-semibold text-white underline underline-offset-4 hover:text-white/90">
              Discutons-en
            </Link>
          </p>
          <div className="flex items-center gap-3" aria-label="Réseaux sociaux">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition-colors hover:bg-white/20"
              >
                {social.initials}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Colonnes principales */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo1.png" alt="Logo Maatics" width={36} height={36}  className="h-14 w-auto"/>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Votre partenaire digital et technologique tout-en-un : développement, sécurité et énergie intelligente.
            </p>

            <div className="mt-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                Newsletter
              </span>
              {error && (
                <p className="mt-2 text-sm text-red-300">{error}</p>
              )}
              {subscribed ? (
                <p className="mt-3 text-sm text-white/90">
                  Merci, vous êtes inscrit·e !
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Votre email
                  </label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Votre email"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/50"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#1E499B] transition-colors hover:bg-slate-100 disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-1.5">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        Envoi…
                      </span>
                    ) : (
                     "S'abonner"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Navigation
            </span>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </span>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/80">
              <li>
                <a href="mailto:contact@maatics.com" className="transition-colors hover:text-white">
                  contact@maatics.com
                </a>
              </li>
              <li>
                <a href="tel:+237000000000" className="transition-colors hover:text-white">
                  +237 691702880
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Adresse
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Yaoundé, Cameroun
            </p>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <span>© Maatics 2026. Tous droits réservés.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            <span aria-hidden="true">·</span>
            <Link href="/boutique" className="transition-colors hover:text-white">Store</Link>
            <span aria-hidden="true">·</span>
            <Link href="/mentions-legales" className="transition-colors hover:text-white">Mentions légales</Link>
          </div>
        </div>
      </div>

      {/* Popup succès */}
      {subscribed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" role="dialog" aria-modal="true" aria-label="Inscription confirmée">
          <div className="mx-4 max-w-sm rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Inscription confirmée</h3>
            <p className="mt-2 text-sm text-slate-600">
              Merci pour votre inscription à la newsletter. Vous recevrez nos dernières actualités directement dans votre boîte mail.
            </p>
            <button
              type="button"
              onClick={() => setSubscribed(false)}
              className="mt-5 inline-flex items-center rounded-md bg-[#1E499B] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#173a7a]"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </footer>
    
  )}