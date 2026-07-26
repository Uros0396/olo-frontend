"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const agencyPhone = "+393885567998";
const whatsappColors = {
  green: "#25D366",
  darkGreen: "#128C7E",
  white: "#FFFFFF",
} as const;
const whatsappMessage = encodeURIComponent(
  "Ciao, vorrei parlarvi del mio progetto.",
);

export default function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen ? (
        <div
          className="w-64 rounded-3xl p-5 shadow-lg"
          style={{ backgroundColor: whatsappColors.white }}
        >
          <p className="text-sm font-bold" style={{ color: whatsappColors.darkGreen }}>
            Come possiamo aiutarti?
          </p>
          <div className="mt-4 grid gap-2">
            <a
              href={`tel:${agencyPhone}`}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-transform hover:translate-x-1"
              style={{
                backgroundColor: whatsappColors.darkGreen,
                color: whatsappColors.white,
              }}
            >
              <Phone className="size-4" aria-hidden="true" />
              Chiamaci
            </a>
            <a
              href={`https://wa.me/${agencyPhone.replace("+", "")}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition-transform hover:translate-x-1"
              style={{
                backgroundColor: whatsappColors.green,
                color: whatsappColors.white,
              }}
            >
              <WhatsAppIcon className="size-4" aria-hidden="true" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-15 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{
          backgroundColor: whatsappColors.green,
          color: whatsappColors.white,
          outlineColor: whatsappColors.darkGreen,
        }}
        aria-label={isOpen ? "Chiudi le opzioni di contatto" : "Apri le opzioni di contatto"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X aria-hidden="true" /> : <WhatsAppIcon className="size-7" aria-hidden="true" />}
      </button>
    </div>
  );
}
