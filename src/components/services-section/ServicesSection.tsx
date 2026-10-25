import Link from "next/link";
import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import DesktopServiceCard from "./desktop/DesktopServiceCard";
import MobileServiceCard from "./mobile/MobileServiceCard";
import type { ServiceData } from "./service-types";
import { brandingService } from "./subservices/branding/Branding";
import { communicationService } from "./subservices/comunicazione-social/ComunicazioneSocial";
import { consultingService } from "./subservices/digitalizzazione-consulenza-aziendale/DigitalizzazioneConsulenzaAziendale";
import { webDevelopmentService } from "./subservices/sviluppo-web/SviluppoWeb";

const services = [
  brandingService,
  webDevelopmentService,
  communicationService,
  consultingService,
];

const servicePageHrefs: Record<string, string> = {
  branding: "/brand-identity-palermo",
  "sviluppo-web": "/sviluppo-web-palermo",
  "comunicazione-social": "/social-media-marketing-palermo",
  "digitalizzazione-consulenza-aziendale": "/digitalizzazione-consulenza-palermo",
};

function ServiceCardLink({
  service,
  children,
}: {
  service: ServiceData;
  children: React.ReactNode;
}) {
  const href = servicePageHrefs[service.id];

  if (!href) return <>{children}</>;

  return (
    <Link
      href={href}
      className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C2A2F]"
    >
      {children}
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="nostri-servizi"
      className="scroll-mt-32 overflow-x-clip px-6 py-12 md:py-24"
      aria-labelledby="nostri-servizi-title"
    >
      <ScrollReveal amount={0.03}>
        <div className="mx-auto max-w-7xl">
          <h2
            id="nostri-servizi-title"
            className="text-4xl font-bold"
            style={{
              color: THEME_COLORS.background,
              textShadow: "-1px 0 #1C2A2F, 1px 0 #1C2A2F, 0 -1px #1C2A2F, 0 1px #1C2A2F",
            }}
          >
            I NOSTRI SERVIZI
          </h2>

          <div className="mt-8 grid gap-8 md:hidden">
            {services.map((service) => (
              <ServiceCardLink key={service.id} service={service}>
                <MobileServiceCard service={service} />
              </ServiceCardLink>
            ))}
          </div>

          <div className="mt-8 hidden gap-10 md:grid md:grid-cols-2">
            {services.map((service) => (
              <ServiceCardLink key={service.id} service={service}>
                <DesktopServiceCard service={service} />
              </ServiceCardLink>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}