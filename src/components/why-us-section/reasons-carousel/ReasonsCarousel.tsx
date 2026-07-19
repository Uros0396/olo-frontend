"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { THEME_COLORS } from "@/constants/colors";

type Reason = {
  icon: string;
  title: string;
  description: string;
};

type ReasonsCarouselProps = {
  reasons: Reason[];
};

const offsets = [-1, 0, 1];

export default function ReasonsCarousel({ reasons }: ReasonsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function getReason(offset: number) {
    return reasons[(activeIndex + offset + reasons.length) % reasons.length];
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? reasons.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % reasons.length);
  }

  return (
    <div className="mt-24 flex items-center justify-center gap-3 md:mt-32 md:gap-8">
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Mostra il motivo precedente"
        className="z-20 shrink-0 rounded-full p-3 transition hover:opacity-75"
        style={{
          backgroundColor: THEME_COLORS.primary,
          color: THEME_COLORS.background,
        }}
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <div className="flex min-w-0 items-center justify-center overflow-hidden py-10">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {offsets.map((offset) => {
            const reason = getReason(offset);
            const isActive = offset === 0;

            return (
              <motion.article
                layout
                key={reason.title}
                animate={{
                  opacity: isActive ? 1 : 0.58,
                  scale: isActive ? 1.08 : 0.86,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className={`${
                  isActive ? "flex" : "hidden md:flex"
                } h-[26rem] w-52 shrink-0 flex-col justify-between rounded-3xl p-7 md:w-64`}
                style={{
                  backgroundColor: isActive
                    ? THEME_COLORS.primary
                    : THEME_COLORS.background,
                  color: isActive
                    ? THEME_COLORS.background
                    : THEME_COLORS.dark,
                }}
              >
                <p className="text-4xl" aria-hidden="true">
                  {reason.icon}
                </p>
                <div>
                  <h4 className="text-2xl font-bold">{reason.title}</h4>
                  <p className="mt-4 text-base font-semibold leading-7">
                    {reason.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={showNext}
        aria-label="Mostra il motivo successivo"
        className="z-20 shrink-0 rounded-full p-3 transition hover:opacity-75"
        style={{
          backgroundColor: THEME_COLORS.primary,
          color: THEME_COLORS.background,
        }}
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}
