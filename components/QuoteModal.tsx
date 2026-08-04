"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import QuoteForm, { SERVICE_OPTIONS } from "./QuoteForm";

interface QuoteModalProps {
  open: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ open, onClose, initialService }: QuoteModalProps) {
  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(initialService ?? SERVICE_OPTIONS[0]);

  useEffect(() => {
    if (!open) return;
    setSelectedService(initialService ?? SERVICE_OPTIONS[0]);
    setVisible(false);
    requestAnimationFrame(() => setVisible(true));
  }, [open, initialService]);

  if (!open) return null;

  const handleClose = () => {
    setVisible(false);
    window.setTimeout(onClose, 250);
  };

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-start justify-center overflow-y-auto bg-slate-900/90 px-4 py-6 sm:items-center sm:px-6">
      <div className="absolute inset-0" onClick={handleClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Demande de devis"
        className={`relative z-10000 w-full max-w-5xl transform overflow-hidden rounded-sm bg-white shadow-2xl transition-all duration-300 ease-out ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Demander un devis</h2>
            <p className="mt-1 text-sm text-slate-500">Réponse sous 48h, sans engagement.</p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fermer"
            className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-4 border-r border-slate-200 bg-slate-50 p-6">
            <div>
              {/* <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Services</p> */}
              <p className="mt-3 text-sm text-slate-600">Sélectionnez le service qui correspond à votre besoin.</p>
            </div>
            <div className="space-y-3">
              {SERVICE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedService(option)}
                  className={`w-full rounded-sm border p-4 text-left transition-all ${
                    selectedService === option
                      ? "border-[#1E499B] bg-[#1E499B]/10 text-slate-900 shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#1E499B] hover:bg-[#F8FAFF]"
                  }`}
                >
                  <span className="block text-sm font-semibold">{option}</span>
                  <span className="mt-2 block text-xs text-slate-500">Cliquez pour pré-remplir le formulaire.</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="p-6 sm:p-8">
            <QuoteForm initialService={selectedService} hideServiceSelection onSuccess={() => setTimeout(onClose, 2500)} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
