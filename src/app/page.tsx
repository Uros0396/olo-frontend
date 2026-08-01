import AboutSection from "@/components/about-section/AboutSection";
import ContactSection from "@/components/contact-section/ContactSection";
import { THEME_COLORS } from "@/constants/colors";
import LogoTitleHome from "@/components/logo-title-home/LogoTitleHome";
import ServicesSection from "@/components/services-section/ServicesSection";
import WhyUsSection from "@/components/why-us-section/WhyUsSection";
import IntroDescriptionSection from "@/components/intro-description-section/IntroDescriptionSection";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col gap-4 md:gap-18"
      style={{
        backgroundColor: THEME_COLORS.secondary,
        backgroundImage: `radial-gradient(
          ellipse 130% 110% at top left,
          color-mix(in srgb, ${THEME_COLORS.secondary} 60%, ${THEME_COLORS.gradientBrown}) 0%,
          color-mix(in srgb, ${THEME_COLORS.secondary} 88%, ${THEME_COLORS.gradientBrown}) 70%,
          ${THEME_COLORS.secondary} 100%
        )`,
        backgroundAttachment: "fixed",
      }}
    >
      <LogoTitleHome />
      <IntroDescriptionSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />

      <ContactSection />
    </div>
  );
}
