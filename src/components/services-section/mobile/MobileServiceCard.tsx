import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import type { ServiceData } from "../service-types";

export default function MobileServiceCard({
  service,
}: {
  service: ServiceData;
}) {
  return (
    <ScrollReveal>
      <article
        className="rounded-3xl px-8 py-10 shadow-lg"
        style={{
          backgroundColor: THEME_COLORS.dark,
          color: THEME_COLORS.background,
        }}
      >
        <div className="w-full">
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
