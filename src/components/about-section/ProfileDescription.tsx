import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { THEME_COLORS } from "@/constants/colors";

type ProfileDescriptionProps = {
  description: string;
  alternateDescription: string;
  name: string;
  isAlternate?: boolean;
  onToggle?: () => void;
};

export default function ProfileDescription({
  description,
  alternateDescription,
  name,
  isAlternate: controlledIsAlternate,
  onToggle,
}: ProfileDescriptionProps) {
  const [internalIsAlternate, setInternalIsAlternate] = useState(false);
  const isAlternate = controlledIsAlternate ?? internalIsAlternate;

  return (
    <div className="relative mt-4 max-w-xl pb-10 md:min-h-[14rem]">
      <div className="grid">
        <p
          className={`col-start-1 row-start-1 text-xl leading-6 transition-opacity duration-400 ease-in-out motion-reduce:transition-none ${
            isAlternate ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden={isAlternate}
        >
          {description}
        </p>
        <p
          className={`col-start-1 row-start-1 text-xl leading-6 transition-opacity duration-400 ease-in-out motion-reduce:transition-none ${
            isAlternate ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!isAlternate}
        >
          {alternateDescription}
        </p>
      </div>

      <button
        type="button"
        onClick={
          onToggle ?? (() => setInternalIsAlternate((current) => !current))
        }
        className="absolute bottom-0 right-0 flex size-7 items-center justify-center rounded-full p-1 transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          backgroundColor: THEME_COLORS.primary,
          color: THEME_COLORS.background,
          outlineColor: THEME_COLORS.primary,
        }}
        aria-label={
          isAlternate
            ? `Mostra la prima descrizione di ${name}`
            : `Mostra la seconda descrizione di ${name}`
        }
      >
        <ChevronRight
          className={`size-5 transition-transform ${
            isAlternate ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
