// src/components/Layout.jsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { BRAND, CONTACTS } from "../data/company.js";
import { cn, formatMailTo, formatPhoneForTel } from "../lib/utils.js";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const nav = useMemo(
    () => [
      { to: "/", label: "Accueil" },
      { to: "/presentation", label: "Présentation" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  const quickEmailSubject = `Demande de devis — ${BRAND.name}`;
  const quickEmailBody =
    "Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour un projet de BTP.%0D%0A%0D%0AType de projet : %0D%0ALieu : %0D%0ADélai : %0D%0A%0D%0AMerci.%0D%0A";

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-80 bg-gradient-to-b from-slate-950 via-slate-950/40 to-transparent" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          {/* BRAND + LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            {BRAND.logo ? (
              <img
                src={BRAND.logo}
                alt="Logo MJS Construction"
                className="h-10 w-auto rounded-xl bg-white p-1 shadow-sm"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm">
                <span className="text-sm font-black">MJS</span>
              </div>
            )}

            <div className="leading-tight">
              <div className="text-sm font-extrabold text-white">{BRAND.name}</div>
              <div className="text-xs text-white/60">{BRAND.tagline}</div>
            </div>
          </NavLink>

          {/* NAV desktop */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <Button href={formatMailTo("contact@mjsconstruction.org", quickEmailSubject, quickEmailBody)} variant="ghost">
              Demander un devis <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href={formatPhoneForTel(CONTACTS.pdg.phones[0])} variant="primary">
              Appeler <Icon name="phone" className="h-4 w-4" />
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-white/80 hover:bg-white/10 md:hidden"
            aria-label="Menu"
          >
            <Icon name={mobileOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </Container>

        {/* NAV mobile */}
        {mobileOpen ? (
          <div className="border-t border-white/10 bg-slate-950 md:hidden">
            <Container className="py-3">
              <div className="flex flex-col gap-1">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "rounded-xl px-3 py-2 text-left text-sm font-semibold transition",
                        isActive ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <div className="mt-2 flex gap-2">
                  <Button
                    href={formatMailTo("contact@mjsconstruction.org", quickEmailSubject, quickEmailBody)}
                    variant="ghost"
                    className="w-full"
                  >
                    Devis
                  </Button>
                  <Button href={formatPhoneForTel(CONTACTS.pdg.phones[0])} variant="primary" className="w-full">
                    Appeler
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-slate-950">
        <Container className="py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-3">
              {/* Logo footer (optionnel) */}
              {BRAND.logo ? (
                <img
                  src={BRAND.logo}
                  alt="Logo MJS Construction"
                  className="h-10 w-auto rounded-xl bg-white p-1"
                />
              ) : null}

              <div>
                <div className="text-sm font-extrabold text-white">{BRAND.name}</div>
                <div className="mt-2 text-sm text-white/70">{BRAND.tagline}</div>
                <div className="mt-3 text-xs text-white/50">
                  © {new Date().getFullYear()} — Tous droits réservés.
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">Pages</div>
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <NavLink key={item.to} to={item.to} className="text-sm text-white/70 hover:text-white">
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">Contact</div>
              <div className="flex flex-col gap-2">
                <a
                  href={formatMailTo("contact@mjsconstruction.org", quickEmailSubject, quickEmailBody)}
                  className="text-sm text-white/70 hover:text-white"
                >
                  contact@mjsconstruction.org
                </a>
                <a href={formatPhoneForTel(CONTACTS.pdg.phones[0])} className="text-sm text-white/70 hover:text-white">
                  {CONTACTS.pdg.phones[0]}
                </a>
                <a href={formatPhoneForTel(CONTACTS.pdg.phones[1])} className="text-sm text-white/70 hover:text-white">
                  {CONTACTS.pdg.phones[1]}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
