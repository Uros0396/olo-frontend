"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  amount?: number;
};

export default function ScrollReveal({
  children,
  amount = 0.25,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let observer: IntersectionObserver | null = null;
    let revealed = false;

    const showImmediately = () => {
      revealed = true;
      observer?.disconnect();

      element.style.transition = "none";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    };

    const reveal = () => {
      if (revealed) return;

      revealed = true;
      observer?.disconnect();

      element.style.transition = "opacity 1s ease-out, transform 1s ease-out";

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    };

    const bounds = element.getBoundingClientRect();

    // Keep content visible when JS is disabled,
    // during SSR, or when already inside the viewport.
    if (
      reducedMotion.matches ||
      !("IntersectionObserver" in window) ||
      bounds.top < window.innerHeight ||
      bounds.height === 0
    ) {
      showImmediately();
      return;
    }

    // Support tall sections on smaller screens.
    const threshold = Math.min(
      Math.max(amount, 0),
      1,
      (window.innerHeight / bounds.height) * 0.5,
    );

    // Hide only elements below the viewport.
    element.style.opacity = "0";
    element.style.transform = "translateY(32px)";

    observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.boundingClientRect.top < 0 ||
          (entry.isIntersecting && entry.intersectionRatio >= threshold)
        ) {
          reveal();
        }
      },
      { threshold },
    );

    observer.observe(element);

    const onPreferenceChange = () => {
      if (reducedMotion.matches) {
        showImmediately();
      }
    };

    reducedMotion.addEventListener("change", onPreferenceChange);

    return () => {
      observer?.disconnect();

      reducedMotion.removeEventListener("change", onPreferenceChange);

      element.style.opacity = "";
      element.style.transform = "";
      element.style.transition = "";
    };
  }, [amount]);

  return <div ref={ref}>{children}</div>;
}
