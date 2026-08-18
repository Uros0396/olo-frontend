export const SITE_CONFIG = {
  name: "Oltre l'Ostacolo",
  description:
    "Agenzia di branding, comunicazione, sviluppo web e consulenza aziendale a Palermo. Strategie su misura per imprese e professionisti in Sicilia.",
  email: "info@oltrelostacolo.it",
  telephone: "+393885567998",
  address: {
    streetAddress: "Via Arimondi 107",
    addressLocality: "Palermo",
    addressRegion: "PA",
    addressCountry: "IT",
  },
  socialLinks: [
    "https://www.facebook.com/share/1DFpjQbpzH/",
    "https://www.instagram.com/oltrelostacolo.agency",
    "https://www.tiktok.com/@oltre.lostacolo",
    "https://youtube.com/@oltrelostacolo107",
    "https://www.linkedin.com/company/oltre-l-ostacolo/",
  ],
} as const;

export function getMetadataBase() {
  const deploymentUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.RENDER_EXTERNAL_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  const urlWithProtocol = deploymentUrl.startsWith("http")
    ? deploymentUrl
    : `https://${deploymentUrl}`;

  return new URL(urlWithProtocol);
}
