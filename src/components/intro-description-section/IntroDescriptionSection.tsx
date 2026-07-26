import ScrollReveal from "../scroll-reveal/ScrollReveal";
const titleIntro = "OGNI IMPRESA PUO' CRESCERE.";
const titleIntro2 = "SERVE LA STRATEGIA GIUSTA.";
const description =
  "Ogni azienda ha obiettivi, sfide e opportunità diverse. <br />Per questo partiamo sempre dall'ascolto.<br /> Analizziamo il tuo business e costruiamo una strategia di marketing, comunicazione e branding su misura, pensata per valorizzare la tua identità e accompagnare la crescita della tua impresa nel tempo.";
export default function IntroDescriptionSection() {
  return (
    <ScrollReveal>
      {" "}
      <div className="mx-auto mt-16 w-full max-w-[1200px] text-center md:mt-6 p-5">
        <h3 className="text-4xl font-bold md:text-5xl ">{titleIntro}</h3>
        <h3 className="text-4xl font-bold md:text-5xl mb-10 md:mt-4">
          {titleIntro2}
        </h3>
        <p className="text-4xl md:text-5xl text-left">
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
