import type { Metadata } from "next";
import Faq from "@/components/legal/Faq";

export const metadata: Metadata = {
  title: "Faq - Domande frequenti",
  description:
    "Domande frequenti sui servizi di Oltre l’Ostacolo: gestione social, siti web, branding e consulenza aziendale a Palermo.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return <Faq />;
}
