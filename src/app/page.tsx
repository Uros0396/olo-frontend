import type { Metadata } from "next";
import AboutSection from "@/components/about-section/AboutSection";
import ContactSection from "@/components/contact-section/ContactSection";
import { THEME_COLORS } from "@/constants/colors";
import LogoTitleHome from "@/components/logo-title-home/LogoTitleHome";
import ServicesSection from "@/components/services-section/ServicesSection";
import WhyUsSection from "@/components/why-us-section/WhyUsSection";
import IntroDescriptionSection from "@/components/intro-description-section/IntroDescriptionSection";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { SITE_CONFIG } from "@/constants/site";

export const metadata: Metadata = {
  title: "Agenzia di comunicazione e branding a Palermo",
  description: SITE_CONFIG.description,
};

export default function Home() {
  return (
    <div
      id="inizio"
      className="flex min-h-screen flex-col gap-4 bg-scroll md:gap-18 md:bg-fixed"
      style={{
        backgroundColor: THEME_COLORS.secondary,
        backgroundImage: `radial-gradient(
          ellipse 130% 110% at top left,
          color-mix(in srgb, ${THEME_COLORS.secondary} 60%, ${THEME_COLORS.gradientBrown}) 0%,
          color-mix(in srgb, ${THEME_COLORS.secondary} 88%, ${THEME_COLORS.gradientBrown}) 70%,
          ${THEME_COLORS.secondary} 100%
        )`,
      }}
    >
      <OrganizationJsonLd />
      <LogoTitleHome />
      <IntroDescriptionSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />

      <ContactSection />
    </div>
  );
}
