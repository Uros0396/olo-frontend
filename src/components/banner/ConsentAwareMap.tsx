"use client";

import Image from "next/image";
import { useConsent } from "./ConsentProvider";

type ConsentAwareMapProps = {
  src: string;
  title: string;
};

export default function ConsentAwareMap({
  src,
  title,
}: ConsentAwareMapProps) {
  const { externalContentAllowed } = useConsent();
  const mapClassName =
    "aspect-square w-full max-w-sm rounded-3xl border-0";

  if (!externalContentAllowed) {
    return (
      <div
        className={`${mapClassName} relative overflow-hidden bg-neutral-100`}
        role="img"
        aria-label="Mappa statica della sede Oltre l'Ostacolo in Via Generale Giuseppe Arimondi 107, Palermo"
      >
        <Image
          src="/images/mappa-statica.png"
          alt="Mappa stradale con la sede Oltre l'Ostacolo in Via Generale Giuseppe Arimondi 107, Palermo"
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          className="object-cover object-left"
          priority={false}
        />
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      className={mapClassName}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
