import AboutSection from "@/components/about-section/AboutSection";
import ContactSection from "@/components/contact-section/ContactSection";
import { THEME_COLORS } from "@/constants/colors";
import LogoTitleHome from "@/components/logo-title-home/LogoTitleHome";
import ServicesSection from "@/components/services-section/ServicesSection";
import WhyUsSection from "@/components/why-us-section/WhyUsSection";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: THEME_COLORS.secondary }}
    >
      <LogoTitleHome />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </main>
  );
}
