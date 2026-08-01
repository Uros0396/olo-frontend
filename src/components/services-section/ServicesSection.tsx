import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import DesktopServiceCard from "./desktop/DesktopServiceCard";
import MobileServiceCard from "./mobile/MobileServiceCard";
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

export default function ServicesSection() {
  return (
    <section
      id="nostri-servizi"
      className="scroll-mt-32 px-6 py-12 md:py-24"
      aria-labelledby="nostri-servizi-title"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-7xl">
          <h2
            id="nostri-servizi-title"
            className="text-4xl font-bold"
            style={{
              color: THEME_COLORS.background,
              textShadow: `-1px 0 ${THEME_COLORS.dark}, 1px 0 ${THEME_COLORS.dark}, 0 -1px ${THEME_COLORS.dark}, 0 1px ${THEME_COLORS.dark}`,
            }}
          >
            I NOSTRI SERVIZI
          </h2>

          <div className="mt-8 grid gap-8 md:hidden">
            {services.map((service) => (
              <MobileServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8 hidden gap-10 md:grid md:grid-cols-2">
            {services.map((service) => (
              <DesktopServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
