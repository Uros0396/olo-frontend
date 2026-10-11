import ScrollReveal from "../scroll-reveal/ScrollReveal";
import MobileIntroDescription from "./mobile/MobileIntroDescription";

const titleIntro = "OGNI IMPRESA PUO' CRESCERE.";
const titleIntro2 = "SERVE LA STRATEGIA GIUSTA.";
const description =
  "Oltre l’Ostacolo è un’agenzia di marketing, comunicazione e consulenza aziendale con sede a Palermo e operativa in tutta la Sicilia. Analizziamo la tua impresa e costruiamo strategie su misura attraverso branding, siti web, social media e contenuti, per valorizzare la tua identità e far crescere il tuo business.";
export default function IntroDescriptionSection() {
  return (
    <section aria-labelledby="intro-description-title">
      <h2 id="intro-description-title" className="sr-only">
        {titleIntro} {titleIntro2}
      </h2>

      <ScrollReveal>
        <MobileIntroDescription
          title={titleIntro}
          secondTitle={titleIntro2}
          descriptionMobile={description}
        />

        <div className="mx-auto hidden w-full max-w-[1200px] p-5 text-center md:mt-6 md:block">
          <p aria-hidden="true" className="text-4xl font-bold md:text-5xl">
            {titleIntro}
          </p>
          <p
            aria-hidden="true"
            className="mb-10 text-4xl font-bold underline-offset-8 md:mt-4 md:text-5xl"
          >
            {titleIntro2}
          </p>
          <p className="text-center text-4xl md:text-5xl">
            {description.split("<br />").map((line, index) => (
              <span key={`${line}-${index}`} className="mb-8 block last:mb-0">
                {line}
              </span>
            ))}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
