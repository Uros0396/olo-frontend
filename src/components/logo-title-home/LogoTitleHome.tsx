import Image from "next/image";
import { THEME_COLORS } from "@/constants/colors";
import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import styles from "./LogoTitleHome.module.css";

const title = "OLTRE L' OSTACOLO";
const subtitle = "Identita' che si vede.";
const subtitle2 = "Comunicazione che lascia il segno.";

export default function LogoTitleHome() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-84px)] items-center justify-center overflow-hidden py-12 md:min-h-[calc(100vh-96px)] md:py-16 mb-16"
      aria-labelledby="home-logo-title"
    >
      <div className="flex w-full flex-col gap-16 mt-10 md:mt-20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 text-center md:flex-row md:justify-between md:gap-16 md:text-left">
          <div className="min-w-0 flex-1 md:-translate-x-20">
            <h1
              id="home-logo-title"
              className={`${styles.title} m-0 w-max font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] whitespace-nowrap md:origin-left md:scale-110 md:text-8xl`}
              style={{ color: THEME_COLORS.dark }}
            >
              <span className={styles.titleText}>{title}</span>
            </h1>
            <h2
              className={`${styles.subtitle} mt-10 font-sans text-xl font-semibold tracking-wide md:text-5xl w-max`}
              style={{ color: THEME_COLORS.background }}
            >
              {subtitle}
            </h2>
            <h2
              className={`${styles.subtitle2} mt-6 font-sans text-xl font-semibold tracking-wide md:text-5xl w-max`}
              style={{ color: THEME_COLORS.background }}
            >
              {subtitle2}
            </h2>
            <ContactForm
              buttonLabel="Parla con noi"
              buttonClassName={styles.homeCta}
            />
          </div>

          <div
            className={`${styles.artwork} md:translate-x-70`}
            aria-hidden="true"
          >
            <Image
              src="/img-logo/testa_giraffa__1_-removebg-preview.png"
              alt=""
              width={666}
              height={375}
              preload
              className={styles.giraffe}
            />
            <Image
              src="/img-logo/muretto_-removebg-preview.png"
              alt=""
              width={666}
              height={375}
              preload
              className={styles.wall}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
