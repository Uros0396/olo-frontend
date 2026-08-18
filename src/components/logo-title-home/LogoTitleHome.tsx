import Image from "next/image";
import { THEME_COLORS } from "@/constants/colors";
import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import MobileLogoTitleHome from "./mobile/MobileLogoTitleHome";
import styles from "./LogoTitleHome.module.css";

const title = "OLTRE L' OSTACOLO";
const subtitle = "Identita' che si vede.";
const subtitle2 = "Comunicazione che lascia il segno.";

export default function LogoTitleHome() {
  return (
    <section
      id="home"
      className="mb-4 flex min-h-[calc(100svh-68px)] items-center justify-center overflow-hidden px-5 py-8 md:mb-16 md:min-h-[calc(100vh-96px)] md:px-0 md:py-16"
      aria-labelledby="home-title"
    >
      <h1 id="home-title" className="sr-only">
        {title}
      </h1>

      <MobileLogoTitleHome
        title={title}
        subtitle={subtitle}
        subtitle2={subtitle2}
      />

      <div className="mt-20 hidden w-full flex-col gap-16 md:flex">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-16 text-left">
          <div className="min-w-0 flex-1 md:-translate-x-20">
            <p
              aria-hidden="true"
              className={`${styles.title} m-0 w-max font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] whitespace-nowrap md:origin-left md:scale-110 md:text-8xl`}
              style={{ color: THEME_COLORS.dark }}
            >
              <span className={styles.titleText}>{title}</span>
            </p>
            <p
              className={`${styles.subtitle} mt-10 font-sans text-xl font-semibold tracking-wide md:text-5xl w-max`}
              style={{ color: THEME_COLORS.background }}
            >
              {subtitle}
            </p>
            <p
              className={`${styles.subtitle2} mt-6 font-sans text-xl font-semibold tracking-wide md:text-5xl w-max`}
              style={{ color: THEME_COLORS.background }}
            >
              {subtitle2}
            </p>
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
