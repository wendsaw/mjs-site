import React from "react";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import { BRAND, CONTACTS } from "../data/company.js";
import { formatMailTo, formatPhoneForTel } from "../lib/utils.js";

function ContactCard({ role, person }) {
  const subject = `Demande d'information — ${BRAND.name}`;
  const body = `Bonjour ${person.name},%0D%0A%0D%0AJe souhaite obtenir des informations concernant vos services (BTP / génie civil).%0D%0A%0D%0AMerci.%0D%0A`;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{role}</div>
          <div className="mt-1 text-lg font-bold text-slate-900">{person.name}</div>
        </div>
        <div className="rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">{person.title}</div>
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-start gap-2 text-sm text-slate-700">
          <div className="mt-0.5 text-slate-900">
            <Icon name="phone" className="h-5 w-5" />
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {person.phones.map((p) => (
              <a
                key={p}
                href={formatPhoneForTel(p)}
                className="rounded-lg bg-slate-50 px-3 py-1.5 font-semibold text-slate-900 hover:bg-slate-100"
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-slate-700">
          <div className="mt-0.5 text-slate-900">
            <Icon name="mail" className="h-5 w-5" />
          </div>
          <a
            href={formatMailTo(person.email, subject, body)}
            className="rounded-lg bg-slate-50 px-3 py-1.5 font-semibold text-slate-900 hover:bg-slate-100"
          >
            {person.email}
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={formatMailTo(person.email, subject, body)} variant="primary">
          Envoyer un email <Icon name="arrow" className="h-4 w-4" />
        </Button>
        <Button href={formatPhoneForTel(person.phones[0])} variant="ghost">
          Appeler <Icon name="phone" className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

export default function Contact() {
  return (
    <section>
      <Container className="py-14 sm:py-20">
        <div className="mb-10">
          <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            Contact
          </div>
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Contactez-nous
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            Écrivez-nous pour un devis ou appelez directement l’équipe dirigeante.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <ContactCard role="Direction générale" person={CONTACTS.pdg} />
          <ContactCard role="Direction Logistique" person={CONTACTS.dt} />
          <ContactCard role="Administration & finance" person={CONTACTS.daf} />
        </div>

        <div className="mt-10 rounded-2xl bg-slate-950 p-8 text-white">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-xl font-extrabold">Demande de devis</div>
              <p className="mt-2 text-sm text-white/70">
                Décrivez votre besoin (type de travaux, localisation, délais). Notre équipe vous recontacte.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                href={formatMailTo("contact@mjsconstruction.org", `Demande de devis — ${BRAND.name}`, `Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis.%0D%0A%0D%0AMerci.%0D%0A`)}
                variant="primary"
                className="w-full"
              >
                Envoyer une demande <Icon name="arrow" className="h-4 w-4" />
              </Button>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}