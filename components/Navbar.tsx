"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { NAV_LINKS } from "@/constants/navigation";
import { useQuoteModal } from "@/components/QuoteModalProvider";
import Image from "next/image";
export default function Navbar() {
  const { openModal } = useQuoteModal();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="relative z-110 border-b border-slate-200 bg-white" aria-label="Navigation principale">
      <div className="mx-auto flex  w-auto max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <Link
          href="/"
          className="flex items-center  gap-2.5 justify-self-start text-base font-semibold tracking-tight text-slate-900"
          onClick={closeMenu}
        >
          <Image src="/images/logo.png" alt="Maatics logo" width={60} height={60} className="h-10 w-auto sm:h-15" style={{ width: "auto" }} />
        </Link>

        <div className="hidden h-full justify-self-center lg:flex">
          <ul className="flex h-full items-stretch">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === pathname || (link.href === "/" && pathname === "/");
              return (
                <li key={link.label} className="flex">
                  <Link
                    href={link.href}
                    className={`flex h-full items-center px-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#1E499B] text-[#f2f2f3]"
                        : "text-slate-700 hover:bg-[#1E499B] hover:text-[#f2f5fa]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden justify-self-end lg:flex">
          <button
            className="rounded-md border border-[#1E499B] px-4 py-3 text-sm font-medium text-[#1E499B] transition-colors hover:bg-[#1E499B] hover:text-white"
            onClick={() => openModal()}
          >
            Demander un devis
          </button>
        </div>

        <button
          className="relative z-130 rounded-md border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {mobileMenuOpen &&
        createPortal(
          <div
            className={`fixed inset-0 z-9999 flex flex-col bg-white transition-transform duration-300 ease-in-out lg:hidden ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            {/* En-tête */}
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
              <span className="text-base font-semibold tracking-tight text-slate-900">Maatics</span>
              <button
                className="rounded-md border border-slate-200 p-2 text-slate-700"
                onClick={closeMenu}
                aria-label="Fermer le menu"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            {/* Liens grand format, numérotés */}
            <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6">
              <ul className="flex flex-col divide-y divide-slate-100">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === pathname || (link.href === "/" && pathname === "/");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block py-3.5 text-lg font-semibold tracking-tight transition-colors ${
                          isActive ? "text-[#1E499B]" : "text-slate-900 hover:text-[#1E499B]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <button
                className="mt-8 w-full rounded-md bg-[#1E499B] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#173a7a]"
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                Demander un devis
              </button>
            </div>

            {/* Pied : contact + réseaux */}
            <div className="border-t border-slate-200 px-6 py-5">
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
                <a href="mailto:contact@matiq.fr" className="transition-colors hover:text-[#1E499B]">
                  contact@maatics.com
                </a>
                <span className="text-slate-300">|</span>
                {/* <a href="#contact" onClick={closeMenu} className="transition-colors hover:text-[#1E499B]">
                  Se connecter / Créer un compte
                </a> */}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                <span>Langue : FR</span>
                <div className="flex items-center gap-2" aria-label="Réseaux sociaux">
                  <a href="#contact" onClick={closeMenu} aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold transition-colors hover:bg-[#1E499B] hover:text-white">
                    in
                  </a>
                  <a href="#contact" onClick={closeMenu} aria-label="X" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold transition-colors hover:bg-[#1E499B] hover:text-white">
                    X
                  </a>
                  <a href="#contact" onClick={closeMenu} aria-label="Facebook" className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold transition-colors hover:bg-[#1E499B] hover:text-white">
                    f
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
}