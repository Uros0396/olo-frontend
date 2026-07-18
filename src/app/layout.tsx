import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { THEME_COLORS } from "@/constants/colors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oltre l'Ostacolo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-32 antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          backgroundColor: THEME_COLORS.background,
          color: THEME_COLORS.dark,
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
