import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import ReasonsCarousel from "./reasons-carousel/ReasonsCarousel";

const reasons = [
  {
    icon: "🎯",
    title: "Identità",
    description:
      "Costruiamo un'identità chiara e riconoscibile che rappresenti davvero il valore della tua attività.",
  },
  {
    icon: "📈",
    title: "Strategia",
    description:
      "Ogni progetto nasce da un'analisi concreta e da obiettivi misurabili, non da soluzioni standard.",
  },
  {
    icon: "💻",
    title: "Sviluppo",
    description:
      "Realizziamo siti web moderni, veloci e progettati per valorizzare il tuo business.",
  },
  {
    icon: "🤝",
    title: "Affiancamento",
    description:
      "Ti accompagniamo anche dopo la pubblicazione, supportandoti nella crescita del tuo progetto.",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="perche-noi"
      className="scroll-mt-32 px-6 py-24"
      aria-labelledby="perche-noi-title"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <h2
            id="perche-noi-title"
            className="text-4xl font-bold"
            style={{ color: THEME_COLORS.background }}
          >
            PERCHE&apos; NOI
          </h2>

          <h3
            className="mt-6 max-w-4xl text-2xl font-bold leading-tight md:text-4xl"
            style={{ color: THEME_COLORS.background }}
          >
            Non costruiamo solo siti web. Costruiamo un&apos;identità capace di
            trasformare la tua presenza online in un&apos;opportunità di crescita.
          </h3>

          <div
            className="mt-10 max-w-3xl space-y-5 text-lg leading-8"
            style={{ color: THEME_COLORS.dark }}
          >
            <p>
              Molte aziende hanno ottimi prodotti o servizi, ma faticano a
              comunicarne il valore.
            </p>
            <p>
              Noi partiamo dalla tua identità, analizziamo i tuoi obiettivi e
              costruiamo una strategia che renda il tuo brand riconoscibile e
              credibile.
            </p>
            <p>
              Dal posizionamento alla presenza online, ogni scelta è pensata
              per aiutarti a distinguerti e trasformare i visitatori in
              clienti.
            </p>
          </div>

          <ReasonsCarousel reasons={reasons} />
        </div>
      </ScrollReveal>
    </section>
  );
}
