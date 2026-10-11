export const SITE_CONFIG = {
  name: "Oltre l'Ostacolo",
  url: "https://www.oltrelostacoloagenzia.it/",
  logo: "https://www.oltrelostacoloagenzia.it/img-logo/oltrelostacolo-logo.png",
  description:
    "Agenzia di branding, comunicazione, sviluppo web e consulenza aziendale a Palermo. Strategie su misura per imprese e professionisti in Sicilia.",
  email: "info@oltrelostacoloagenzia.it",
  telephone: "+393884788576",
  address: {
    streetAddress: "Via Generale Giuseppe Arimondi 107",
    addressLocality: "Palermo",
    addressRegion: "PA",
    postalCode: "90143",
    addressCountry: "IT",
  },
  socialLinks: [
    "https://www.facebook.com/profile.php?id=61592616756722",
    "https://www.instagram.com/oltrelostacolo.agency",
    "https://www.tiktok.com/@oltre.lostacolo",
    "https://youtube.com/@oltrelostacolo107",
    "https://www.linkedin.com/company/oltre-l-ostacolo/",
  ],
} as const;

export function getMetadataBase() {
  return new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_CONFIG.url);
}
