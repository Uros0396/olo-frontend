type MobileIntroDescriptionProps = {
  title: string;
  secondTitle: string;
  descriptionMobile: string;
};

export default function MobileIntroDescription({
  title,
  secondTitle,
  descriptionMobile,
}: MobileIntroDescriptionProps) {
  return (
    <div className="mx-auto w-full text-center md:hidden mb-18">
      <p
        aria-hidden="true"
        className="whitespace-nowrap text-xl font-bold leading-tight"
      >
        {title}
      </p>
      <p
        aria-hidden="true"
        className="mt-3 whitespace-nowrap text-xl font-bold leading-tight"
      >
        {secondTitle}
      </p>

      <p className="text-center text-xl p-4">{descriptionMobile}</p>
    </div>
  );
}
