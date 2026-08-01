import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import type { ServiceData } from "../service-types";

export default function DesktopServiceCard({
  service,
}: {
  service: ServiceData;
}) {
  const isBranding = service.id === "branding";
  const isConsulting = service.id === "digitalizzazione-consulenza-aziendale";
  const isCommunication = service.id === "comunicazione-social";

  return (
    <ScrollReveal>
      <article className="relative isolate flex aspect-[6/5] px-10 py-10 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] lg:px-14">
        <Image
          src={service.backgroundImage}
          alt=""
          width={1080}
          height={1350}
          sizes="50vw"
          className="pointer-events-none absolute left-1/2 top-[-63%] z-0 h-[230%] w-auto max-w-none -translate-x-1/2 select-none"
        />

        <div
          className={`relative z-10 mx-auto my-auto w-full text-center ${
            isConsulting
              ? "max-w-[78%] translate-y-3"
              : isBranding
                ? "max-w-[88%] -translate-y-6"
                : isCommunication
                  ? "max-w-[88%] translate-y-7"
                  : "max-w-[88%]"
          }`}
          style={{ color: THEME_COLORS.background }}
        >
          <p
            className={`font-bold ${
              isConsulting
                ? "text-[10px] tracking-[0.12em] lg:text-[11px]"
                : "text-xs tracking-[0.16em]"
            }`}
          >
            {service.category}
          </p>
          <h3 className="mt-2 text-2xl font-bold leading-tight lg:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6">{service.description}</p>

          <ul
            className={`mx-auto mt-5 grid w-fit max-w-xl gap-x-5 gap-y-1.5 text-left text-xs leading-5 ${
              service.desktopListColumns === 2 ? "grid-cols-2" : "grid-cols-1"
            }`}
          >
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
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
