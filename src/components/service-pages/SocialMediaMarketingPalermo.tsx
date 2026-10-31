import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import Image from "next/image";
import SocialMediaMarketingMotion from "./WrapperMotionServices";
import { THEME_COLORS } from "@/constants/colors";

const contentSections = [
  {
    title: "Strategia social",
    paragraphs: [
      "Definiamo la direzione della comunicazione partendo dall’identità del brand e dagli obiettivi dell’attività.",
      "Individuiamo temi, format, linguaggi e tipologie di contenuto da utilizzare per costruire una presenza riconoscibile e mantenere una comunicazione costante nel tempo.",
      "La strategia diventa la base sulla quale sviluppiamo l’intero lavoro editoriale.",
    ],
  },
  {
    title: "Piano editoriale",
    paragraphs: [
      "Organizziamo i contenuti in base agli obiettivi della comunicazione.",
      "Alcuni contenuti servono a far conoscere il brand, altri a raccontarne il valore, mostrare competenze, creare fiducia o avvicinare le persone ai suoi prodotti e servizi.",
      "Trasformiamo questi obiettivi in un piano editoriale concreto, definendo argomenti, format e pubblicazioni da sviluppare durante il mese.",
    ],
  },
  {
    title: "Produzione video nella tua attività",
    paragraphs: [
      "Ci rechiamo direttamente nella tua sede per realizzare i contenuti nel luogo in cui il brand vive ogni giorno.",
      "Ristoranti, studi professionali, negozi, cantieri, aziende e attività locali diventano il contesto nel quale raccontiamo persone, ambienti, prodotti, servizi e processi di lavoro.",
      "Prima delle riprese prepariamo idee e script. Durante la registrazione guidiamo le persone davanti alla camera per ottenere contenuti naturali e coerenti con il loro modo di comunicare.",
    ],
  },
  {
    title: "Reel e contenuti verticali",
    paragraphs: [
      "Progettiamo Reel e video verticali pensati per il linguaggio delle piattaforme social.",
      "Lavoriamo su apertura, struttura, ritmo, durata e messaggio per rendere ogni contenuto immediato e facile da seguire.",
      "Ogni video viene costruito mantenendo lo stile e la personalità dell’attività che stiamo raccontando.",
    ],
  },
  {
    title: "Editing video",
    paragraphs: [
      "Montiamo i contenuti trasformando le riprese in video pronti per la pubblicazione.",
      "Curiamo tagli, ritmo, sottotitoli, grafiche, immagini, suoni ed elementi visivi per rendere il messaggio chiaro e mantenere alta l’attenzione.",
      "Il montaggio viene adattato al formato, alla piattaforma e allo stile visivo del brand.",
    ],
  },
  {
    title: "Gestione Social",
    paragraphs: [
      "Gestiamo la comunicazione social dalla pianificazione alla pubblicazione.",
      "Coordiniamo strategia, calendario editoriale, produzione dei contenuti e pubblicazione per mantenere continuità e coerenza nel tempo.",
      "In questo modo ogni contenuto fa parte di una comunicazione più ampia e riconoscibile.",
    ],
  },
  {
    title: "Community Management",
    paragraphs: [
      "Gestiamo commenti, messaggi e interazioni mantenendo il tono di voce definito per il brand.",
      "La community diventa così parte della comunicazione e del rapporto quotidiano tra l’attività e le persone che la seguono.",
    ],
  },
];

export default function SocialMediaMarketingPalermo() {
  return (
    <>
      <div
        id="inizio"
        className="px-6 py-8 md:py-24"
        style={{ backgroundColor: THEME_COLORS.secondary }}
      >
        <SocialMediaMarketingMotion>
          <article className="mx-auto max-w-5xl">
            <header className="mx-auto max-w-4xl pb-12 md:pb-16">
              <div className="flex flex-col items-center gap-1 md:flex-row md:justify-center md:gap-4 lg:gap-8">
                <h1 className="text-center text-3xl font-bold leading-tight md:whitespace-nowrap md:text-left md:text-4xl lg:text-5xl">
                  Social Media Marketing a Palermo
                </h1>
                <div className="order-first -mt-6 w-80 shrink-0 md:order-none md:mt-0 md:w-48">
                  <Image
                    src="/icons-services-pages/social-media-marketing.png"
                    alt="Icona Social Media Marketing a Palermo"
                    width={1080}
                    height={1350}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
              <div className="mt-8 space-y-5 text-left text-lg font-semibold leading-8 md:text-xl md:leading-9">
                <p>
                  Costruiamo la comunicazione social della tua attività partendo
                  da ciò che la rende interessante, riconoscibile e diversa.
                </p>
                <p>
                  Studiamo il brand, il settore, il pubblico e gli obiettivi per
                  definire cosa raccontare, come raccontarlo e con quale
                  continuità.
                </p>
                <p>
                  Da qui sviluppiamo una strategia editoriale su misura e la
                  trasformiamo in contenuti pensati per rappresentare davvero
                  l’attività e creare nel tempo una presenza coerente sui
                  social.
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
                  aria-labelledby={"social-section-" + index}
                >
                  <h2
                    id={"social-section-" + index}
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
                Vuoi dare una direzione chiara alla comunicazione social della
                tua attività?
              </p>
              <ContactForm buttonLabel="Parla con noi" />
            </div>
          </article>
        </SocialMediaMarketingMotion>
      </div>
    </>
  );
}
