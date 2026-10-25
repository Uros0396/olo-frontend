import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import WrapperMotionServices from "./WrapperMotionServices";
import { THEME_COLORS } from "@/constants/colors";

const contentSections = [
  {
    title: "Logo",
    paragraphs: [
      "Progettiamo il logo partendo dall’identità e dal posizionamento dell’azienda.",
      "Studiamo forme, simboli, proporzioni e applicazioni per creare un segno riconoscibile e versatile, capace di funzionare su supporti e formati diversi.",
      "Possiamo sviluppare una nuova identità oppure lavorare su un logo già esistente, aggiornandolo e rendendolo più coerente con l’evoluzione dell’azienda.",
    ],
  },
  {
    title: "Palette colori",
    paragraphs: [
      "Definiamo una palette cromatica coerente con la personalità e il posizionamento del brand.",
      "Stabiliamo colori principali e secondari e il modo in cui devono essere utilizzati nei diversi materiali, così da costruire nel tempo una presenza visiva riconoscibile.",
    ],
  },
  {
    title: "Tipografia",
    paragraphs: [
      "Selezioniamo i caratteri tipografici e definiamo le gerarchie con cui vengono utilizzati.",
      "Titoli, testi, elementi grafici e materiali di comunicazione seguono così uno stile coerente e facilmente riconducibile al brand.",
    ],
  },
  {
    title: "Stile visivo",
    paragraphs: [
      "Costruiamo il linguaggio grafico che accompagna il brand nella comunicazione.",
      "Definiamo forme, composizioni, elementi ricorrenti, trattamento delle immagini, icone, grafiche e criteri visivi da utilizzare sui diversi canali.",
      "In questo modo l’identità mantiene la propria coerenza dal sito ai social, fino ai materiali fisici.",
    ],
  },
  {
    title: "Rebranding",
    paragraphs: [
      "Quando un’azienda cresce o cambia, anche la sua identità può evolversi.",
      "Analizziamo logo, colori, tipografia e stile visivo esistenti per individuare gli elementi da valorizzare e quelli da aggiornare.",
      "Costruiamo quindi un’identità più attuale e coerente con il posizionamento che l’azienda vuole avere oggi.",
    ],
  },
  {
    title: "Packaging",
    paragraphs: [
      "Progettiamo il packaging come parte dell’identità del prodotto e del brand.",
      "Lavoriamo su colori, composizione, tipografia, elementi grafici e applicazione del marchio per creare confezioni riconoscibili e coerenti con il resto della comunicazione.",
    ],
  },
  {
    title: "Cosa costruiamo per il tuo brand",
    paragraphs: [
      "Un sistema visivo completo composto da logo, palette colori, tipografia, stile grafico e linee guida che permettono all’identità di essere applicata in modo coerente nei diversi punti di contatto.",
      "Una base solida sulla quale costruire social, sito web, materiali aziendali, packaging e tutta la comunicazione futura.",
    ],
  },
];

export default function BrandIdentityPalermo() {
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
              Brand Identity a Palermo
            </h1>
            <div className="mt-8 space-y-5 text-left text-lg font-semibold leading-8 md:text-xl md:leading-9">
              <p>
                Il tuo brand è il modo in cui un’azienda si presenta, viene percepita e ricordata.
              </p>
              <p>
                Per costruire la sua identità partiamo dall’azienda: analizziamo ciò che fa, i suoi valori, le persone a cui vuole parlare, il mercato in cui opera e gli elementi che la rendono riconoscibile.
              </p>
              <p>
                Da qui sviluppiamo un’identità visiva coerente, pensata per accompagnare il brand in tutti i suoi punti di contatto: social, sito web, materiali stampati, packaging e comunicazione aziendale.
              </p>
              <p>
                L’obiettivo è creare un sistema visivo riconoscibile, coerente e utilizzabile nel tempo.
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
                aria-labelledby={"brand-section-" + index}
              >
                <h2
                  id={"brand-section-" + index}
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
              Vuoi costruire un’identità riconoscibile e coerente per la tua azienda?
            </p>
            <ContactForm buttonLabel="Parla con noi" />
          </div>
        </article>
      </WrapperMotionServices>
    </div>
  );
}