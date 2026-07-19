import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";

type ServiceCardProps = {
  category: string;
  title: string;
  description: string;
  services: string[];
};

export default function ServiceCard({
  category,
  title,
  description,
  services,
}: ServiceCardProps) {
  return (
    <ScrollReveal>
      <article
        className="flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] md:p-10"
        style={{
          backgroundColor: THEME_COLORS.background,
          color: THEME_COLORS.dark,
        }}
      >
        <p
          className="text-sm font-bold tracking-[0.18em]"
          style={{ color: THEME_COLORS.primary }}
        >
          {category}
        </p>
        <h3 className="mt-4 text-3xl font-bold">{title}</h3>
        <p className="mt-4 leading-7">{description}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="rounded-full px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: THEME_COLORS.primary,
                color: THEME_COLORS.background,
              }}
            >
              {service}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}
