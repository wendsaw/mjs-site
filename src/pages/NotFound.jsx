import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container.jsx";

export default function NotFound() {
  return (
    <section>
      <Container className="py-16">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-8">
          <h1 className="text-2xl font-extrabold text-slate-900">Page introuvable</h1>
          <p className="mt-2 text-sm text-slate-600">
            Le lien est incorrect ou la page n’existe plus.
          </p>
          <Link to="/" className="mt-6 inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
            Retour à l’accueil
          </Link>
        </div>
      </Container>
    </section>
  );
}





