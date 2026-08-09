import { THEME_COLORS } from "@/constants/colors";
import SocialIcon, { type SocialName } from "./SocialIcon";

const footerLinks = [
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "I nostri servizi", href: "#nostri-servizi" },
  { label: "Perche' noi", href: "#perche-noi" },
  { label: "Contattaci", href: "#contattaci" },
];

const socialLinks: { label: SocialName; href: string }[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DFpjQbpzH/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/oltrelostacolo.agency?igsh=MXJ0ZnV6MGg3Yjcxcg==",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@oltre.lostacolo",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@oltrelostacolo107?si=WEy99xj0A9wA4e2A",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/oltre-l-ostacolo/",
  },
];

export default function Footer() {
  return (
    <footer
      className="mt-auto px-6 py-14 md:py-16"
      style={{
        backgroundColor: THEME_COLORS.dark,
        color: THEME_COLORS.background,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-bold">OLTRE L&apos;OSTACOLO</p>
            <p className="mt-4 max-w-xs leading-6">
              Strategia, identita&apos; e soluzioni digitali per la crescita del
              tuo business.
            </p>
          </div>

          <div>
            <h2
              className="text-lg font-bold"
              style={{ color: THEME_COLORS.secondary }}
            >
              Esplora
            </h2>
            <nav
              className="mt-4 flex flex-col items-start gap-3"
              aria-label="Link footer"
            >
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:translate-x-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2
              className="text-lg font-bold"
              style={{ color: THEME_COLORS.secondary }}
            >
              Contatti
            </h2>
            <address className="mt-4 not-italic leading-7">
              Via Arimondi 107, Palermo
              <br />
              <a href="mailto:info@oltrelostacolo.it">info@oltrelostacolo.it</a>
              <br />
              <a href="tel:+393885567998">+39 388 556 7998</a>
            </address>
          </div>

          <div>
            <h2
              className="text-lg font-bold"
              style={{ color: THEME_COLORS.secondary }}
            >
              Seguici
            </h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: THEME_COLORS.secondary,
                    color: THEME_COLORS.dark,
                  }}
                >
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between"
          style={{ borderColor: THEME_COLORS.background }}
        >
          <p>© 2026 Oltre l&apos;Ostacolo. Tutti i diritti riservati.</p>
          <a href="#home" className="font-bold transition hover:translate-x-1">
            Torna su
          </a>
        </div>
      </div>
    </footer>
  );
}
