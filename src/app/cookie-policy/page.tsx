import type { Metadata } from "next";
import CookiePolicyContent from "@/components/legal/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Oltre l'Ostacolo",
  description:
    "Informazioni sui cookie e sui contenuti esterni utilizzati dal sito Oltre l'Ostacolo.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
