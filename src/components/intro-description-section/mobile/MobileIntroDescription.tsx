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
      <h3 className="whitespace-nowrap text-[clamp(0.95rem,4.6vw,1.5rem)] font-bold leading-tight">
        {title}
      </h3>
      <h3 className="mt-3 whitespace-nowrap text-[clamp(0.95rem,4.6vw,1.5rem)] font-bold leading-tight">
        {secondTitle}
      </h3>
    </div>
  );
}
