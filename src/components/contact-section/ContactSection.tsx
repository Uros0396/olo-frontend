import ScrollReveal from "@/components/scroll-reveal/ScrollReveal";
import { THEME_COLORS } from "@/constants/colors";
import ContactForm from "./contact-form/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contattaci"
      className="scroll-mt-32 px-6 py-24"
      aria-labelledby="contattaci-title"
    >
      <ScrollReveal>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="contattaci-title"
                className="text-4xl font-bold"
                style={{ color: THEME_COLORS.background }}
              >
                CONTATTACI
              </h2>
              <p
                className="mt-8 max-w-xl text-xl leading-8 md:text-2xl"
                style={{ color: THEME_COLORS.dark }}
              >
                Hai un&apos;idea, un progetto o un ostacolo da superare?
                Iniziamo a parlarne insieme.
              </p>
              <ContactForm />

              <div className="mt-14 space-y-6">
                <ContactDetail title="Sedi">
                  Via Arimondi 107, Palermo
                </ContactDetail>
                <ContactDetail title="Orari">
                  Lunedi - Venerdi: 9:00 - 18:00
                  <br />
                  Sabato: 9:00 - 17:00
                </ContactDetail>
                <ContactDetail title="Recapiti">
                  <a href="mailto:info@oltrelostacolo.it">
                    info@oltrelostacolo.it
                  </a>
                  <br />
                  <a href="tel:+393885567998">+39 388 556 7998</a>
                </ContactDetail>
              </div>
            </div>

            <div>
              <h3
                className="text-4xl font-bold"
                style={{ color: THEME_COLORS.background }}
              >
                CI TROVI QUI
              </h3>
              <div className="mt-8">
                <Map
                  title="Sede Oltre l'ostacolo, Via Arimondi 107 Palermo"
                  src="https://www.google.com/maps?q=Via%20Arimondi%20107%2C%20Palermo&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Map({ title, src }: { title: string; src: string }) {
  return (
    <iframe
      title={title}
      src={src}
      className="aspect-square w-full max-w-sm rounded-3xl border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

function ContactDetail({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="text-lg font-bold"
        style={{ color: THEME_COLORS.background }}
      >
        {title}
      </h3>
      <p className="mt-2 leading-6" style={{ color: THEME_COLORS.dark }}>
        {children}
      </p>
    </div>
  );
}
