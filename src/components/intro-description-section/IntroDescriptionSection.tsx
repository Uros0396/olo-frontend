import ScrollReveal from "../scroll-reveal/ScrollReveal";
import MobileIntroDescription from "./mobile/MobileIntroDescription";

const titleIntro = "OGNI IMPRESA PUO' CRESCERE.";
const titleIntro2 = "SERVE LA STRATEGIA GIUSTA.";
const description =
  "Analizziamo il tuo business e costruiamo una strategia di marketing, comunicazione e branding su misura, pensata per valorizzare la tua identità e accompagnare la crescita della tua impresa nel tempo.";
export default function IntroDescriptionSection() {
  return (
    <ScrollReveal>
      <MobileIntroDescription title={titleIntro} secondTitle={titleIntro2} />

      <div className="mx-auto md:mt-6 hidden w-full max-w-[1200px] p-5 text-center md:block">
        <h3 className="text-4xl font-bold   md:text-5xl">{titleIntro}</h3>
        <h3 className="mb-10 text-4xl font-bold underline-offset-8 md:mt-4 md:text-5xl">
          {titleIntro2}
        </h3>
        <p className="text-4xl md:text-5xl text-center">
          {description.split("<br />").map((line, index) => (
            <span key={`${line}-${index}`} className="mb-8 block last:mb-0">
              {line}
            </span>
          ))}
        </p>
      </div>
    </ScrollReveal>
  );
}
