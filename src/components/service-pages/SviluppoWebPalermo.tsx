import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import WrapperMotionServices from "./WrapperMotionServices";
import { THEME_COLORS } from "@/constants/colors";

const contentSections = [
  {
    title: "Siti web vetrina",
    paragraphs: [
      "Progettiamo siti web personalizzati per raccontare l’identità della tua attività, presentare i tuoi servizi e facilitare il contatto con potenziali clienti.",
      "Curiamo struttura, design e navigazione per rendere le informazioni chiare, accessibili e semplici da trovare su ogni dispositivo.",
    ],
  },
  {
    title: "E-commerce",
    paragraphs: [
      "Realizziamo negozi online per presentare e vendere prodotti attraverso un’esperienza d’acquisto semplice e intuitiva.",
      "Organizziamo catalogo, schede prodotto, carrello e checkout in base alle esigenze del progetto, con possibilità di integrare sistemi di pagamento e strumenti per la gestione degli ordini.",
    ],
  },
  {
    title: "Gestionali web",
    paragraphs: [
      "Sviluppiamo gestionali web semplici e personalizzati per aiutare le piccole imprese a organizzare attività, clienti, prodotti e informazioni in un unico ambiente accessibile dal browser.",
      "Le funzionalità vengono definite in base alle necessità dell’attività, privilegiando semplicità d’uso, organizzazione e possibilità di evoluzione nel tempo.",
    ],
  },
  {
    title: "SEO tecnica e on-page",
    paragraphs: [
      "Strutturiamo i siti con attenzione agli aspetti tecnici e ai contenuti che aiutano i motori di ricerca a comprendere le pagine.",
      "Lavoriamo su metadati, gerarchia dei titoli, collegamenti interni, indicizzabilità, dati strutturati e ottimizzazione delle immagini, in base alle caratteristiche del progetto.",
    ],
  },
  {
    title: "GEO e visibilità nei motori di ricerca AI",
    paragraphs: [
      "Strutturiamo i contenuti affinché le informazioni aziendali, i servizi e le competenze del brand siano chiari e facilmente comprensibili dai motori di ricerca e dai sistemi di intelligenza artificiale.",
      "Lavoriamo sulla struttura semantica, sui dati strutturati e sulla chiarezza dei contenuti per migliorare la comprensione del sito e favorirne la visibilità nei nuovi ecosistemi di ricerca basati sull’AI.",
    ],
  },
  {
    title: "Performance e design responsive",
    paragraphs: [
      "Progettiamo siti che si adattano a smartphone, tablet e computer, prestando attenzione alla navigazione, ai tempi di caricamento e all’accessibilità.",
      "Ottimizziamo il codice e le risorse in funzione del progetto per offrire un’esperienza fluida e una base tecnica affidabile.",
    ],
  },
  {
    title: "Un progetto sviluppato sulle tue esigenze",
    paragraphs: [
      "Ogni attività ha obiettivi e necessità differenti. Partiamo dalle tue esigenze per definire la struttura del sito, le funzionalità necessarie e le soluzioni più adatte al progetto.",
      "Dalla prima idea alla pubblicazione, lavoriamo per realizzare uno strumento digitale coerente con la tua attività e pronto a evolversi nel tempo.",
    ],
  },
];

export default function SviluppoWebPalermo() {
  return (
    <div
      id="inizio"
      className="px-6 py-16 md:py-24"
      style={{ backgroundColor: THEME_COLORS.secondary }}
    >
      <WrapperMotionServices>
        <article className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-4xl pb-12 text-center md:pb-16">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Sviluppo Web a Palermo
            </h1>
            <div className="mt-8 space-y-5 text-left text-lg font-semibold leading-8 md:text-xl md:leading-9">
              <p>
                Realizziamo siti web su misura per aziende e attività che vogliono
                presentarsi online in modo professionale, raggiungere nuovi clienti
                e valorizzare i propri servizi.
              </p>
              <p>
                Dai siti vetrina agli e-commerce e ai gestionali web, sviluppiamo
                soluzioni digitali responsive, progettate per offrire un’esperienza
                intuitiva, buone prestazioni e una struttura tecnica solida.
              </p>
            </div>
          </header>

          <div className="rounded-3xl bg-[#F5F1EA] px-6 py-4 shadow-xl md:px-14">
            {contentSections.map((section, index) => (
              <section
                key={section.title}
                className={
                  "py-8 md:py-10 " +
                  (index < contentSections.length - 1
                    ? "border-b border-[#1C2A2F]/15"
                    : "")
                }
                aria-labelledby={"web-development-section-" + index}
              >
                <h2
                  id={"web-development-section-" + index}
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: THEME_COLORS.dark }}
                >
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 md:text-lg md:leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div
            className="mt-10 rounded-3xl px-6 py-10 text-center shadow-lg md:mt-14 md:px-12 md:py-12"
            style={{ backgroundColor: THEME_COLORS.secondary }}
          >
            <p
              className="mx-auto max-w-3xl text-2xl font-bold leading-tight md:text-3xl"
              style={{ color: THEME_COLORS.dark }}
            >
              Hai in mente un sito web che aiuti la tua attività a crescere?
            </p>
            <ContactForm buttonLabel="Parla con noi" />
          </div>
        </article>
      </WrapperMotionServices>
    </div>
  );
}