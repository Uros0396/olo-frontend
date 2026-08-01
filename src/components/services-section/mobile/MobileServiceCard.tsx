import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import type { ServiceData } from "../service-types";

export default function MobileServiceCard({
  service,
}: {
  service: ServiceData;
}) {
  const heightClass =
    service.id === "branding"
      ? "min-h-[50rem]"
      : service.id === "sviluppo-web"
        ? "min-h-[52rem]"
        : service.id === "comunicazione-social"
          ? "min-h-[50rem]"
          : service.id === "digitalizzazione-consulenza-aziendale"
            ? "min-h-[54rem]"
            : "min-h-[54rem]";
  const contentPositionClass =
    service.id === "comunicazione-social"
      ? "-translate-y-5"
      : service.id === "branding"
        ? "translate-y-5"
        : service.id === "digitalizzazione-consulenza-aziendale"
          ? "translate-y-5"
          : "";

  return (
    <ScrollReveal>
      <article
        className={`relative isolate flex overflow-hidden px-11 py-16 ${heightClass}`}
      >
        <Image
          src={service.mobileBackgroundImage ?? service.backgroundImage}
          alt=""
          width={1080}
          height={1350}
          sizes="100vw"
          className="pointer-events-none absolute left-1/2 top-[-65%] z-0 h-[229%] w-[139%] max-w-none -translate-x-1/2 select-none drop-shadow-lg"
        />

        <div
          className={`relative z-10 my-auto w-full ${contentPositionClass}`}
          style={{ color: THEME_COLORS.background }}
        >
          <p className="text-[11px] font-bold tracking-[0.14em]">
            {service.category}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight">
            {service.title}
          </h3>
          <p className="mt-4 text-sm leading-6">{service.description}</p>

          <ul className="mt-6 grid gap-2 text-xs leading-5">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="shrink-0" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </ScrollReveal>
  );
}
