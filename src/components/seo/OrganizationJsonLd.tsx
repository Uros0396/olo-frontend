import { SITE_CONFIG } from "@/constants/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.telephone,
  address: {
    "@type": "PostalAddress",
    ...SITE_CONFIG.address,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Palermo",
    },
    {
      "@type": "AdministrativeArea",
      name: "Sicilia",
    },
  ],
  sameAs: SITE_CONFIG.socialLinks,
  knowsAbout: [
    "Branding",
    "Brand identity",
    "Comunicazione",
    "Gestione social media",
    "Sviluppo web",
    "Digitalizzazione aziendale",
    "Consulenza strategica",
  ],
};

export default function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

