import type { Metadata } from "next";
import SviluppoWebPalermo from "@/components/service-pages/SviluppoWebPalermo";

export const metadata: Metadata = {
  title: "Sviluppo web a Palermo | Siti, e-commerce e gestionali",
  description:
    "Realizziamo siti web, e-commerce e gestionali su misura a Palermo. Design responsive, SEO tecnica, GEO, performance e supporto tecnico.",
  alternates: {
    canonical: "/sviluppo-web-palermo",
  },
};

export default function SviluppoWebPalermoPage() {
  return <SviluppoWebPalermo />;
}