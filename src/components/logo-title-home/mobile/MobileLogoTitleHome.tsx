import Image from "next/image";
import ContactForm from "@/components/contact-section/contact-form/ContactForm";
import { THEME_COLORS } from "@/constants/colors";
import styles from "../LogoTitleHome.module.css";

type MobileLogoTitleHomeProps = {
  title: string;
  subtitle: string;
  subtitle2: string;
};

export default function MobileLogoTitleHome({
  title,
  subtitle,
  subtitle2,
}: MobileLogoTitleHomeProps) {
  return (
    <div className="flex w-full flex-col items-center text-center md:hidden">
      <div className={styles.mobileArtwork} aria-hidden="true">
        <div className={styles.mobileArtworkScale}>
          <Image
            src="/img-logo/testa_giraffa__1_-removebg-preview.png"
            alt=""
            width={666}
            height={375}
            preload
            sizes="(max-width: 767px) 96vw, 430px"
            className={styles.giraffe}
          />
          <Image
            src="/img-logo/muretto_-removebg-preview.png"
            alt=""
            width={666}
            height={375}
            preload
            sizes="(max-width: 767px) 96vw, 430px"
            className={styles.wall}
          />
        </div>
      </div>

      <h1
        className={`${styles.title} mt-18 whitespace-nowrap font-sans text-[clamp(1.65rem,8vw,2.4rem)] font-extrabold leading-none tracking-[-0.04em]`}
        style={{ color: THEME_COLORS.dark }}
      >
        <span className={styles.titleText}>{title}</span>
      </h1>
      <h2
        className={`${styles.subtitle} mt-7 font-sans text-xl font-semibold leading-tight tracking-wide`}
        style={{ color: THEME_COLORS.background }}
      >
        {subtitle}
      </h2>
      <h2
        className={`${styles.subtitle2} mt-3 font-sans text-xl font-semibold leading-tight tracking-wide`}
        style={{ color: THEME_COLORS.background }}
      >
        {subtitle2}
      </h2>
      <ContactForm
        buttonLabel="Parla con noi"
        buttonClassName={styles.homeCta}
      />
    </div>
  );
}
