import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import BrandingService from "./subservices/branding/BrandingService";
import BusinessOptimizationService from "./subservices/business-optimization/BusinessOptimizationService";
import ContentSocialService from "./subservices/content-social/ContentSocialService";
import WebDevelopmentService from "./subservices/web-development/WebDevelopmentService";

export default function ServicesSection() {
  return (
    <section
      id="nostri-servizi"
      className="scroll-mt-32 px-6 py-24"
      aria-labelledby="nostri-servizi-title"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <BrandingService />
            <WebDevelopmentService />
            <ContentSocialService />
            <BusinessOptimizationService />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
