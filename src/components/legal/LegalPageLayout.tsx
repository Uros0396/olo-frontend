import type { ReactNode } from "react";
import { THEME_COLORS } from "@/constants/colors";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  eyebrow,
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <div
      id="inizio"
      className="min-h-screen px-6 py-16 md:py-24"
      style={{ backgroundColor: THEME_COLORS.secondary }}
    >
      <article
        className="mx-auto max-w-4xl rounded-3xl p-7 shadow-xl md:p-12"
        style={{
          backgroundColor: THEME_COLORS.background,
          color: THEME_COLORS.dark,
        }}
      >
        <p className="text-sm font-bold uppercase tracking-[0.14em]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-5 leading-7">{intro}</p>
        {children}
      </article>
    </div>
  );
}
