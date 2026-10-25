import type { Metadata } from "next";
import DigitalizzazioneConsulenzaPalermo from "@/components/service-pages/DigitalizzazioneConsulenzaPalermo";

export const metadata: Metadata = {
  title: "Digitalizzazione e consulenza aziendale a Palermo",
  description:
    "Consulenza aziendale a Palermo per analizzare e ottimizzare processi, digitalizzare flussi di lavoro, introdurre automazioni e leggere meglio i dati aziendali.",
  alternates: {
    canonical: "/digitalizzazione-consulenza-palermo",
  },
};

export default function DigitalizzazioneConsulenzaPalermoPage() {
  return <DigitalizzazioneConsulenzaPalermo />;
}