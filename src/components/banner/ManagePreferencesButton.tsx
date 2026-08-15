"use client";

import { useConsent } from "./ConsentProvider";

export default function ManagePreferencesButton() {
  const { openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="cursor-pointer font-bold transition hover:translate-x-1"
    >
      Gestisci preferenze
    </button>
  );
}
