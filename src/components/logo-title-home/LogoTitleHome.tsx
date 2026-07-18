import Image from "next/image";
import { THEME_COLORS } from "@/constants/colors";
import styles from "./LogoTitleHome.module.css";

const title = "OLTRE L' OSTACOLO";
const subtitle = "SLOGAN IMPATTANTE";
const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export default function LogoTitleHome() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-84px)] items-center justify-center overflow-hidden py-12 md:min-h-[calc(100vh-96px)] md:py-16"
      aria-labelledby="home-logo-title"
    >
      <div className="flex w-full flex-col gap-16 mt-10 md:mt-20">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 text-center md:flex-row md:justify-between md:gap-16 md:text-left">
          <div className="min-w-0 flex-1 md:-translate-x-12">
            <h1
              id="home-logo-title"
              className={`${styles.title} m-0 w-max font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] whitespace-nowrap md:origin-left md:scale-110`}
              style={{ color: THEME_COLORS.dark }}
            >
              <span className={styles.titleText}>{title}</span>
            </h1>
            <h2
              className={`${styles.subtitle} mt-6 font-sans text-xl font-semibold tracking-wide md:text-8xl`}
              style={{ color: THEME_COLORS.background }}
            >
              {subtitle}
            </h2>
          </div>

          <div
            className={`${styles.artwork} md:translate-x-40`}
            aria-hidden="true"
          >
            <Image
              src="/img-logo/testa_giraffa__1_-removebg-preview.png"
              alt=""
              width={666}
              height={375}
              priority
              className={styles.giraffe}
            />
            <Image
              src="/img-logo/muretto_-removebg-preview.png"
              alt=""
              width={666}
              height={375}
              priority
              className={styles.wall}
            />
          </div>
        </div>

        <div className="mx-auto mt-16 w-full max-w-[1200px] text-center md:mt-30">
          <h3 className=" text-4xl font-bold md:text-6xl">{description}</h3>
        </div>
      </div>
    </section>
  );
}
