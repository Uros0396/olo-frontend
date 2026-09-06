"use client";

import { THEME_COLORS } from "@/constants/colors";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type AutoPlayVideoProps = {
  src: string;
};

export default function AutoPlayVideo({ src }: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStartTime, setModalStartTime] = useState(0);

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

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const handleFullscreenChange = async () => {
      const isDesktop = window.matchMedia(
        "(min-width: 768px) and (hover: hover)",
      ).matches;

      if (!isDesktop || document.fullscreenElement !== video) {
        return;
      }

      const currentTime = video.currentTime;
      video.pause();
      await document.exitFullscreen();
      setModalStartTime(currentTime);
      setIsModalOpen(true);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isModalOpen]);

  const closeModal = () => {
    const video = videoRef.current;
    const modalVideo = modalVideoRef.current;

    if (video && modalVideo) {
      video.currentTime = modalVideo.currentTime;
    }

    setIsModalOpen(false);
  };

  return (
    <>
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()}
        src={src}
        controls
        muted
        playsInline
        preload="none"
        aria-label="Video di presentazione di Oltre l'Ostacolo"
      />

      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm"
            style={{ backgroundColor: `${THEME_COLORS.dark}E6` }}
            role="dialog"
            aria-modal="true"
            aria-label="Video di presentazione di Oltre l'Ostacolo"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal();
              }
            }}
          >
            <div className="relative aspect-[9/16] h-[90vh] max-h-[900px] max-w-[90vw] overflow-hidden rounded-xl bg-black shadow-2xl">
              <video
                ref={modalVideoRef}
                className="h-full w-full object-cover"
                controlsList="nodownload nofullscreen"
                onContextMenu={(event) => event.preventDefault()}
                onLoadedMetadata={(event) => {
                  event.currentTarget.currentTime = modalStartTime;
                  void event.currentTarget.play();
                }}
                src={src}
                controls
                muted
                playsInline
                preload="auto"
              />

              <button
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 z-20 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Chiudi il video"
              >
                <X size={24} />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
