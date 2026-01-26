import React from "react";
import Container from "../components/Container.jsx";
import Card from "../components/Card.jsx";
import Icon from "../components/Icon.jsx";
import { BRAND } from "../data/company.js";

function ValueItem({ title, description }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 text-slate-900">
        <Icon name="check" className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{description}</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section>
      <Container className="py-14 sm:py-20">
        <div className="mb-10">
          <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            Présentation
          </div>
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {BRAND.name} — qui sommes-nous ?
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            {BRAND.description} Notre engagement : des ouvrages durables, des délais maîtrisés et une relation de
            confiance avec nos partenaires.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-900">Notre mission</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Concevoir et réaliser des infrastructures fiables, adaptées aux besoins, avec une approche centrée sur la
              qualité, la sécurité et la performance.
            </p>

            <h2 className="mt-6 text-lg font-bold text-slate-900">Notre vision</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Être un acteur de référence du BTP au Burkina Faso et dans la sous-région, reconnu pour la rigueur, la
              transparence et la durabilité de ses réalisations.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-bold text-slate-900">Nos engagements</h2>
            <div className="mt-5 space-y-4">
              <ValueItem
                title="Rigueur d’exécution"
                description="Méthodes structurées, contrôle qualité et suivi des points critiques."
              />
              <ValueItem title="Réactivité" description="Mobilisation rapide, adaptation aux contraintes terrain." />
              <ValueItem
                title="Transparence"
                description="Communication claire, reporting régulier, décisions basées sur les faits."
              />
              <ValueItem
                title="Durabilité"
                description="Choix techniques orientés longévité, robustesse et maintenance."
              />
            </div>
          </Card>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/70 bg-slate-50 p-6">
          <div className="text-sm font-bold text-slate-900">À ajouter (optionnel)</div>
          <p className="mt-2 text-sm text-slate-600">
            Historique, agréments, références clients, organigramme, politique QSE, photos de chantiers.
          </p>
        </div>
      </Container>
    </section>
  );
}