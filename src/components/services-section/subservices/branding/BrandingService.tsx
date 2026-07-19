import ServiceCard from "../ServiceCard";

export default function BrandingService() {
  return (
    <ServiceCard
      category="BRANDING"
      title="Identità che lascia il segno"
      description="Diamo forma a brand riconoscibili e coerenti, capaci di raccontare con chiarezza chi sei e perché sceglierti."
      services={[
        "Creazione Brand Identity",
        "Rebranding del logo",
        "Packaging prodotto",
      ]}
    />
  );
}
