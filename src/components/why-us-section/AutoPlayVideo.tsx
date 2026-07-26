"use client";

import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
};

export default function AutoPlayVideo({ src }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStartedRef.current) {
          return;
        }

        hasStartedRef.current = true;
        void video.play().catch(() => {
          hasStartedRef.current = false;
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      src={src}
      controls
      muted
      playsInline
      preload="none"
      aria-label="Video di presentazione di Oltre l'Ostacolo"
    />
  );
}
