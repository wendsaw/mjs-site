import React from "react";
import Container from "../components/Container.jsx";
import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import { BRAND, CONTACTS } from "../data/company.js";
import { formatMailTo, formatPhoneForTel } from "../lib/utils.js";

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Icon name={icon} className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export default function Home() {
  const subject = `Demande de devis — ${BRAND.name}`;
  const body = `Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour un projet de BTP.%0D%0A%0D%0AType de projet : %0D%0ALieu : %0D%0ADélai : %0D%0A%0D%0AMerci.%0D%0A`;

  return (
    <>
      {/* HERO */}
      <section className="bg-slate-950">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                {["Bâtiments", "Pavetage", "Assainissement", "Éclairage public", "Routes"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Des ouvrages durables, livrés avec rigueur.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                {BRAND.description} Nous intervenons avec des équipes qualifiées, un suivi technique strict et une
                exigence constante de qualité.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={formatMailTo("contact@mjsconstruction.org", subject, body)} variant="primary">
                  Demander un devis <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href={formatPhoneForTel(CONTACTS.pdg.phones[0])} variant="ghost">
                  Appeler : {CONTACTS.pdg.phones[0]}
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat value="BTP" label="Expertise terrain" />
                <Stat value="QSE" label="Qualité & sécurité" />
                <Stat value="Suivi" label="Pilotage chantier" />
                <Stat value="BF" label="Présence nationale" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-white/5 to-transparent blur-2xl" />
              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white">Domaines</div>
                  <div className="text-xs text-white/60">{BRAND.address}</div>
                </div>

                <div className="mt-5 grid gap-4">
                  {[
                    { icon: "building", title: "Bâtiments", sub: "Construction & réhabilitation" },
                    { icon: "pavers", title: "Pavetage", sub: "Voiries & aménagements" },
                    { icon: "water", title: "Assainissement", sub: "Caniveaux & drainage" },
                    { icon: "bolt", title: "Éclairage", sub: "Installation & maintenance" },
                    { icon: "road", title: "Routes", sub: "Terrassements & chaussées" },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl bg-white/5 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900">
                          <Icon name={x.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{x.title}</div>
                          <div className="text-xs text-white/60">{x.sub}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold text-white">Contact principal</div>
                    <div className="mt-2 text-xs text-white/60">PDG — {CONTACTS.pdg.name}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href={formatPhoneForTel(CONTACTS.pdg.phones[0])}
                        className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-slate-900 hover:bg-white/90"
                      >
                        {CONTACTS.pdg.phones[0]}
                      </a>
                      <a
                        href={formatMailTo(CONTACTS.pdg.email, subject, body)}
                        className="rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
                      >
                        {CONTACTS.pdg.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50">
        <Container className="py-14 sm:py-20">
          <div className="mb-10">
            <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              Services
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Nos domaines d’intervention
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              Des prestations complètes en génie civil et BTP, adaptées aux besoins des collectivités, entreprises et
              partenaires.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon="building"
              title="Bâtiments"
              description="Construction, réhabilitation, extensions : ouvrages administratifs, éducatifs, sanitaires, résidentiels."
            />
            <ServiceCard
              icon="pavers"
              title="Pavage & aménagements"
              description="Voiries urbaines, bordures, pavés, trottoirs, plateformes et aménagements extérieurs."
            />
            <ServiceCard
              icon="water"
              title="Assainissement"
              description="Caniveaux, dalots, drainage, réseaux d’évacuation et ouvrages d’assainissement."
            />
            <ServiceCard
              icon="bolt"
              title="Éclairage public"
              description="Installation, modernisation, maintenance : candélabres, réseaux, armoires et sécurisation."
            />
            <ServiceCard
              icon="road"
              title="Travaux de routes"
              description="Terrassements, couches de forme, chaussées, ouvrages annexes et entretien."
            />
            <ServiceCard
              icon="check"
              title="Suivi & maîtrise"
              description="Organisation de chantier, contrôle qualité, sécurité, reporting et respect des délais."
            />
          </div>
        </Container>
      </section>
    </>
  );
}
