import type { Metadata } from "next";
import Faq from "@/components/legal/Faq";

export const metadata: Metadata = {
  title: "Faq - Domande frequenti",
  description:
    "Domande frequenti sui servizi di Oltre l’Ostacolo: gestione social, sviluppo e realizzazione siti web, branding e consulenza aziendale a Palermo.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ - Domande frequenti | Oltre l'Ostacolo",
    description:
      "Domande frequenti sui servizi di Oltre l'Ostacolo: gestione social, sviluppo e realizzazione siti web, branding e consulenza aziendale a Palermo.",
    url: "/faq",
    type: "website",
    locale: "it_IT",
    siteName: "Oltre l'Ostacolo",
    images: ["/og-image.jpg"],
  },
};

export default function FaqPage() {
  return <Faq />;
}
