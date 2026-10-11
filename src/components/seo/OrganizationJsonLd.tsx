import { SITE_CONFIG } from "@/constants/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}#organization`,
  url: SITE_CONFIG.url,
  logo: SITE_CONFIG.logo,
  name: SITE_CONFIG.name,
  description:
    "Oltre l’Ostacolo è un’agenzia di marketing, comunicazione e consulenza aziendale a Palermo. Aiutiamo le imprese a costruire un’identità forte, autentica e riconoscibile. Partiamo dall’ascolto e dall’analisi dell’azienda, dei suoi processi, del mercato e dei concorrenti per individuare esigenze e opportunità di crescita. Da qui scegliamo gli strumenti più adatti: branding e rebranding, logo e identità visiva, packaging, siti web personalizzati, gestione social, piani editoriali, video e reel. Affianchiamo le aziende anche nell’analisi di vendite, costi e margini e nell’ottimizzazione dei processi, con strategie costruite sulla loro realtà.",
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.telephone,
  address: {
    "@type": "PostalAddress",
    ...SITE_CONFIG.address,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "18:30",
    },
  ],
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
