"use client";

import { type FormEvent, useEffect, useState } from "react";

export const SERVICE_OPTIONS = [
  "Développement web",
  "Application mobile",
  "Solutions SaaS",
  "Vidéosurveillance",
  "Panneaux solaires intelligents",
  "Autre / projet sur mesure",
] as const;

type QuoteFormProps = {
  initialService?: string;
  hideServiceSelection?: boolean;
  onSuccess?: () => void;
};

type QuoteStatus = "idle" | "submitting" | "success";

export default function QuoteForm({ initialService, hideServiceSelection = false, onSuccess }: QuoteFormProps) {
  const preselectedService =
    initialService && SERVICE_OPTIONS.includes(initialService as (typeof SERVICE_OPTIONS)[number])
      ? initialService
      : "";

  const [service, setService] = useState<string>(preselectedService);
  const [name, setName] = useState("");

  useEffect(() => {
    setService(preselectedService);
  }, [preselectedService]);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<QuoteStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!service) {
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, name, company, email, phone, message }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E499B]/10 text-[#1E499B]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Demande envoyée</h2>
        <p className="max-w-lg text-sm leading-6 text-slate-600">
          Merci {name || ""}, votre demande de devis pour « {service} » a bien été reçue.
          Notre équipe revient vers vous sous 48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="text-sm font-medium text-slate-900">Service concerné</p>
        {hideServiceSelection ? (
          <div className="mt-3 rounded-sm border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            {service || "Sélectionnez un service depuis la colonne de gauche."}
          </div>
        ) : (
          <>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setService(option)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    service === option
                      ? "bg-[#1E499B] text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#1E499B] hover:text-[#1E499B]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {preselectedService ? (
              <p className="mt-2 text-xs text-slate-500">Pré-rempli depuis votre sélection — modifiable si besoin.</p>
            ) : (
              <p className="mt-2 text-xs text-slate-500">Choisissez le service qui correspond à votre projet.</p>
            )}
          </>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Nom complet</span>
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Votre nom"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B] focus:ring-2 focus:ring-[#1E499B]/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Entreprise <span className="text-slate-400">(optionnel)</span></span>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="Nom de l'entreprise"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B] focus:ring-2 focus:ring-[#1E499B]/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Email</span>
          <input
            id="quote-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="vous@exemple.com"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B] focus:ring-2 focus:ring-[#1E499B]/10"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Téléphone</span>
          <input
            id="quote-phone"
            type="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+237 6XX XXX XXX"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B] focus:ring-2 focus:ring-[#1E499B]/10"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Décrivez votre besoin <span className="text-slate-400">(optionnel)</span></span>
        <textarea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Contexte, délais, budget estimé..."
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-[#1E499B] focus:ring-2 focus:ring-[#1E499B]/10"
        />
      </label>

      {error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || service === ""}
        className="inline-flex w-full items-center justify-center rounded-2xl bg-[#1E499B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#173a7a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
