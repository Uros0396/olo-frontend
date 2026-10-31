import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import Image from "next/image";
import WrapperMotionServices from "./WrapperMotionServices";
import { THEME_COLORS } from "@/constants/colors";

const contentSections = [
  {
    title: "Analisi dei processi",
    paragraphs: [
      "Studiamo i diversi passaggi che compongono il lavoro quotidiano dell’azienda.",
      "Analizziamo come vengono gestiti clienti, richieste, informazioni, attività interne e strumenti digitali per individuare inefficienze, passaggi ripetitivi e punti in cui il processo può essere migliorato.",
      "Da questa analisi costruiamo una visione più chiara del funzionamento dell’attività e delle priorità su cui intervenire.",
    ],
  },
  {
    title: "Ottimizzazione dei flussi di lavoro",
    paragraphs: [
      "Riorganizziamo processi e strumenti per rendere il lavoro più fluido e ridurre passaggi inutili.",
      "Possiamo intervenire sul modo in cui vengono raccolte le richieste, distribuite le attività, condivise le informazioni e gestiti i diversi momenti del rapporto con il cliente.",
      "L’obiettivo è creare flussi di lavoro più semplici da seguire e più facili da controllare.",
    ],
  },
  {
    title: "Digitalizzazione",
    paragraphs: [
      "Introduciamo e integriamo strumenti digitali nei processi in cui possono migliorare organizzazione, velocità e gestione delle informazioni.",
      "Possiamo lavorare sulla gestione dei clienti, sull’archiviazione dei dati, sulla raccolta delle richieste, sui flussi interni e sull’organizzazione delle attività.",
      "Ogni intervento viene costruito intorno al funzionamento reale dell’azienda.",
    ],
  },
  {
    title: "Automazioni",
    paragraphs: [
      "Progettiamo automazioni per collegare strumenti, dati e attività che oggi richiedono interventi manuali.",
      "Possiamo automatizzare operazioni ripetitive, passaggi di informazioni, notifiche, aggiornamenti e flussi tra diversi software.",
      "In questo modo alcuni processi possono diventare più rapidi, ordinati e meno soggetti a errori.",
    ],
  },
  {
    title: "Analisi di vendite, costi e margini",
    paragraphs: [
      "Organizziamo e analizziamo i dati aziendali per ottenere una lettura più chiara dell’andamento dell’attività.",
      "Possiamo lavorare su vendite, costi, margini, performance e altri indicatori utili per comprendere meglio ciò che sta accadendo.",
      "Trasformiamo i dati disponibili in informazioni più semplici da leggere e utilizzare nelle decisioni.",
    ],
  },
  {
    title: "Consulenza strategica",
    paragraphs: [
      "Affianchiamo l’azienda nell’analisi di progetti, problemi e opportunità.",
      "Mettiamo insieme dati, processi, strumenti e obiettivi per valutare le diverse possibilità e costruire un percorso di intervento coerente con le esigenze dell’attività.",
      "La consulenza può riguardare l’organizzazione interna, la digitalizzazione, l’introduzione di nuovi strumenti o il miglioramento di processi già esistenti.",
    ],
  },
  {
    title: "Come lavoriamo",
    paragraphs: [
      "Partiamo dall’analisi dell’attività e ricostruiamo il modo in cui oggi vengono gestiti processi, strumenti e informazioni.",
      "Individuiamo i punti da migliorare, definiamo le priorità e progettiamo gli interventi più utili.",
      "Analizziamo, semplifichiamo e digitalizziamo i processi per aiutare l’azienda a lavorare in modo più organizzato ed efficace.",
    ],
  },
];

export default function DigitalizzazioneConsulenzaPalermo() {
  return (
    <div
      id="inizio"
      className="px-6 py-8 md:py-24"
      style={{ backgroundColor: THEME_COLORS.secondary }}
    >
      <WrapperMotionServices>
        <article className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-4xl pb-12 md:pb-16">
            <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-4 lg:gap-8">
              <h1 className="text-center text-3xl font-bold leading-tight md:whitespace-nowrap md:text-left md:text-4xl lg:text-4xl">
                Digitalizzazione e Consulenza Aziendale a Palermo
              </h1>
              <div className="order-first -mt-6 w-80 shrink-0 md:order-none md:mt-0 md:w-48">
                <Image
                  src="/icons-services-pages/digitalizzazione-consulenza.png"
                  alt="Icona Digitalizzazione e Consulenza Aziendale a Palermo"
                  width={1080}
                  height={1350}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
            <div className="mt-8 space-y-5 text-left text-lg font-semibold leading-8 md:text-xl md:leading-9">
              <p>
                Analizziamo il modo in cui funziona la tua attività per
                individuare processi da semplificare, strumenti da migliorare e
                attività che possono essere gestite in modo più efficace.
              </p>
              <p>
                Partiamo dall’organizzazione reale dell’azienda: clienti, flussi
                di lavoro, strumenti utilizzati, gestione delle informazioni,
                attività ripetitive e dati disponibili.
              </p>
              <p>
                Da qui individuiamo gli interventi più utili per rendere il
                lavoro più semplice, ordinato e controllabile.
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
                aria-labelledby={"consulting-section-" + index}
              >
                <h2
                  id={"consulting-section-" + index}
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
              Vuoi rendere i processi della tua attività più semplici e
              organizzati?
            </p>
            <ContactForm buttonLabel="Parla con noi" />
          </div>
        </article>
      </WrapperMotionServices>
    </div>
  );
}
