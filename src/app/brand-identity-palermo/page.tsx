import type { Metadata } from "next";
import BrandIdentityPalermo from "@/components/service-pages/BrandIdentityPalermo";

export const metadata: Metadata = {
  title: "Brand Identity a Palermo",
  description:
    "Progettiamo identità visive per aziende a Palermo: logo, palette colori, tipografia, stile visivo, rebranding e packaging.",
  alternates: {
    canonical: "/brand-identity-palermo",
  },
};

export default function BrandIdentityPalermoPage() {
  return <BrandIdentityPalermo />;
}