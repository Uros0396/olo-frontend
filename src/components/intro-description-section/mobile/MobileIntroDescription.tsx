type MobileIntroDescriptionProps = {
  title: string;
  secondTitle: string;
};

export default function MobileIntroDescription({
  title,
  secondTitle,
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
    </div>
  );
}
