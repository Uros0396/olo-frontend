import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import AutoPlayVideo from "./AutoPlayVideo";
const whyUsText =
  "La nostra idea di agenzia nasce da una convinzione semplice: il nostro lavoro non è gestire i social o realizzare un sito web. Il nostro obiettivo è aiutare le imprese a costruire un'identità forte, autentica e riconoscibile.";
const whyUsText2 =
  "Noi non vogliamo inventare un'immagine che non esiste. Al contrario, vogliamo scoprire ciò che rende unica ogni impresa e trasformarlo nella sua forza. Crediamo che ogni azienda abbia già un'identità e un potenziale: il nostro lavoro è farli emergere e comunicarli nel modo giusto. Per questo partiamo sempre dall'ascolto e dall'analisi. Osserviamo l'azienda, i suoi numeri, i suoi processi, il mercato e i concorrenti. Cerchiamo di capire cosa funziona, cosa può essere migliorato e quali opportunità non sono ancora state sfruttate.";
const whyUsText3 =
  "Solo dopo scegliamo gli strumenti più adatti: branding, comunicazione, social media, siti web, analisi dei dati, promozioni e strategie di marketing. Per noi questi non sono il punto di partenza, ma gli strumenti con cui valorizzare l'identità dell'azienda e trasformarla in risultati concreti.";
const whyUsText4 =
  "Il nostro obiettivo finale è semplice: aiutare le imprese a farsi riconoscere, attrarre i clienti giusti e crescere nel tempo.";

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

          <div className="mt-16 flex flex-col gap-10 md:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-10 text-3xl">
              <ScrollReveal>
                <p>{whyUsText}</p>
              </ScrollReveal>
              <ScrollReveal>
                <p>{whyUsText2}</p>
              </ScrollReveal>
              <ScrollReveal>
                <p>{whyUsText3}</p>
              </ScrollReveal>
              <ScrollReveal>
                <p>{whyUsText4}</p>
              </ScrollReveal>
            </div>
            <div className="flex min-w-0 flex-1 items-start justify-center px-6">
              <div className="relative w-full max-w-[360px]">
                <span
                  className="absolute -left-[13px] top-28 h-16 w-1.5 rounded-l-md bg-neutral-800"
                  aria-hidden="true"
                />
                <span
                  className="absolute -right-[13px] top-36 h-20 w-1.5 rounded-r-md bg-neutral-800"
                  aria-hidden="true"
                />

                <div className="relative aspect-[9/19] overflow-hidden rounded-[3rem] border-[10px] border-neutral-950 bg-black shadow-2xl">
                  <span
                    className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-neutral-950"
                    aria-hidden="true"
                  />

                  <AutoPlayVideo src="/1025.mp4" />

                  <span
                    className="absolute bottom-2 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-white/80"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
