import Image from "next/image";
import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";

const teamMembers = [
  {
    name: "Omar Mechri",
    role: "Managing Director",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-logo/logo-nav.png",
  },
  {
    name: "Virginia La Manno",
    role: "Content Creator",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-logo/logo-nav.png",
    reverseLayout: true,
  },
  {
    name: "Uros Milenkovic",
    role: "Sviluppatore Web",
    frontImage: "/img-logo/foto-profilo.png",
    backImage: "/img-logo/logo-nav.png",
  },
];

const loremText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu risus vel ipsum luctus consequat. Curabitur viverra, neque sed luctus ullamcorper, mi nibh consequat massa, in facilisis erat dui sit amet eros. Donec posuere, augue vitae elementum posuere, nunc nisi luctus augue, sed faucibus velit metus at sapien.";

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
              style={{ color: THEME_COLORS.background }}
            >
              CHI SIAMO
            </h2>
            <p
              className="mt-6 max-w-3xl text-lg leading-8 md:text-xl"
              style={{ color: THEME_COLORS.dark }}
            >
              Siamo un team creativo e digitale che trasforma idee in esperienze
              online. Uniamo strategia, design, contenuti e sviluppo web per
              creare soluzioni su misura e aiutare ogni business a crescere.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-30">
          {teamMembers.map((member) => (
            <ScrollReveal key={member.name}>
              <article
                className={`flex flex-col items-center gap-6 md:gap-10 ${
                  member.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="group h-100 w-80 [perspective:1000px]">
                  <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div
                      className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]"
                      style={{ backgroundColor: THEME_COLORS.background }}
                    >
                      <Image
                        src={member.frontImage}
                        alt={`Immagine di ${member.name}`}
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    </div>

                    <div
                      className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      style={{ backgroundColor: THEME_COLORS.primary }}
                    >
                      <Image
                        src={member.backImage}
                        alt=""
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold">{member.role}</p>
                  <p className="mt-4 max-w-xl text-sm leading-6">{loremText}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
