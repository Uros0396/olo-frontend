import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import TeamMember, { type TeamMemberData } from "./TeamMember";

const teamMembers: TeamMemberData[] = [
  {
    name: "Omar Mechri",
    role: "Founder & Business Strategist",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-profiles/omar-giraffa.jpeg",
    description:
      'Sono il primo punto di contatto tra la tua azienda e il nostro team. Prima di parlare di marketing, cerco di capire la tua realtà. Per questo la prima domanda che faccio non è mai "cosa vuoi che facciamo?", ma "cosa sta succedendo davvero nella tua azienda?".',
    alternateDescription:
      "Mi piace immaginare ciò che ancora non esiste. Sono curioso per natura e difficilmente mi fermo alla prima impressione. Mi viene spontaneo immaginare come le cose potrebbero diventare e questo mi porta a vedere possibilità dove altri vedono solo limiti.",
  },
  {
    name: "Virginia La Manno",
    role: "Brand Identity & Content Manager",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-profiles/virginia-giraffa.jpeg",
    reverseLayout: true,
    description:
      "Ogni brand comunica qualcosa, ancora prima di dire una parola. Il mio lavoro è costruire un'identità visiva coerente, riconoscibile e capace di rappresentare davvero l'azienda in ogni dettaglio: dai colori ai contenuti social, fino al modo in cui viene percepita.",
    alternateDescription:
      "Mi accorgo subito quando qualcosa non è al posto giusto. Sono decisamente pignola. Sì, lo ammetto. Ma solo perché credo che siano i dettagli a fare la differenza. Mi piace quando ogni elemento è coerente e racconta la stessa storia: è lì che un brand inizia davvero a lasciare il segno. E se durante una passeggiata incontro un cane... devo accarezzarlo.",
  },
  {
    name: "Uros Milenkovic",
    role: "FullStack Developer",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-profiles/uros-giraffa.jpeg",
    description:
      "Un sito web dovrebbe essere intuitivo prima ancora che bello. Per questo, progetto ogni pagina pensando a chi la utilizzerà, creando esperienze semplici, veloci e facili da navigare. Credo che la tecnologia migliore sia quella che semplifica le cose, non quella che le complica.",
    alternateDescription:
      "Mi affascina vedere un'idea prendere forma, un passo alla volta. Sapere che qualcuno utilizzerà qualcosa che ho creato e che gli renderà le cose più semplici è la parte che mi dà più soddisfazione. La musica è il mio modo di entrare in modalità sviluppo. Senza, il codice funziona lo stesso, io un po' meno.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="scroll-mt-32 px-6 py-24"
      aria-labelledby="chi-siamo-title"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div>
            <h2
              id="chi-siamo-title"
              className="text-4xl font-bold"
              style={{
                color: THEME_COLORS.background,
                textShadow: `-1px 0 ${THEME_COLORS.dark}, 1px 0 ${THEME_COLORS.dark}, 0 -1px ${THEME_COLORS.dark}, 0 1px ${THEME_COLORS.dark}`,
              }}
            >
              CHI SIAMO
            </h2>
            <p
              className="md:mt-14 max-w-3xl space-y-6 text-lg leading-8 md:text-4xl"
              style={{ color: THEME_COLORS.dark }}
            >
              <span className="block">
                Oltre l&apos;Ostacolo nasce dall&apos;incontro di persone con
                competenze diverse e una visione condivisa: aiutare le imprese a
                crescere attraverso strategie costruite sulla loro realtà.
              </span>
              <span className="block">
                Crediamo che ogni collaborazione inizi dalla fiducia. Per
                questo, prima di raccontarti cosa facciamo, vogliamo presentarti
                chi siamo.
              </span>
            </p>
          </div>
        </ScrollReveal>

        <div className="md:mt-30 space-y-30">
          {teamMembers.map((member) => (
            <ScrollReveal key={member.name}>
              <TeamMember member={member} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
