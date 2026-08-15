"use client";

import { THEME_COLORS } from "@/constants/colors";
import { useConsent } from "./ConsentProvider";

export default function CookieBanner() {
  const { bannerOpen, choose, ready } = useConsent();

  if (!ready || !bannerOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 md:p-6">
      <section
        className="mx-auto max-w-4xl rounded-3xl border p-6 shadow-2xl md:flex md:items-center md:justify-between md:gap-8 md:p-8"
        style={{
          backgroundColor: THEME_COLORS.background,
          borderColor: THEME_COLORS.dark,
          color: THEME_COLORS.dark,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        aria-describedby="consent-description"
      >
        <div className="max-w-2xl">
          <h2 id="consent-title" className="text-xl font-bold">
            La tua privacy è importante
          </h2>
          <p id="consent-description" className="mt-2 text-sm leading-6">
            Utilizziamo strumenti tecnici necessari al funzionamento del sito
            e, solo con il tuo consenso, contenuti esterni per offrire
            funzionalità interattive. Potrai modificare la scelta in qualsiasi
            momento dal footer.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0 md:shrink-0">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-full border-2 px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: THEME_COLORS.dark,
              color: THEME_COLORS.dark,
            }}
          >
            Rifiuta non necessari
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: THEME_COLORS.secondary,
              color: THEME_COLORS.dark,
            }}
          >
            Accetta tutti
          </button>
        </div>
      </section>
    </div>
  );
}
