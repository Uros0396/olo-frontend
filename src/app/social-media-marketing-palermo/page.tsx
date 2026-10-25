import type { Metadata } from "next";
import SocialMediaMarketingPalermo from "@/components/service-pages/SocialMediaMarketingPalermo";

export const metadata: Metadata = {
  title: "Social Media Marketing a Palermo",
  description:
    "Strategia social, piano editoriale, produzione video, Reel e gestione social per attività e brand a Palermo.",
  alternates: {
    canonical: "/social-media-marketing-palermo",
  },
};

export default function SocialMediaMarketingPage() {
  return <SocialMediaMarketingPalermo />;
}