import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppContact from "@/components/whatsapp-contact/WhatsAppContact";
import ConsentProvider from "@/components/banner/ConsentProvider";
import CookieBanner from "@/components/banner/CookieBanner";
import { THEME_COLORS } from "@/constants/colors";
import { getMetadataBase, SITE_CONFIG } from "@/constants/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Agenzia di comunicazione e branding a Palermo | Oltre l'Ostacolo",
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Marketing e comunicazione",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: SITE_CONFIG.name,
    title: "Agenzia di comunicazione e branding a Palermo | Oltre l'Ostacolo",
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenzia di comunicazione e branding a Palermo | Oltre l'Ostacolo",
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} h-full scroll-smooth scroll-pt-32 overscroll-y-none antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundColor: THEME_COLORS.background,
          color: THEME_COLORS.dark,
        }}
      >
        <ConsentProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppContact />
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
