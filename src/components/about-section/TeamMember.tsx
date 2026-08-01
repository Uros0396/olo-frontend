"use client";

import { useState } from "react";
import Image from "next/image";
import { THEME_COLORS } from "@/constants/colors";
import ProfileDescription from "./ProfileDescription";

export type TeamMemberData = {
  name: string;
  role: string;
  frontImage: string;
  backImage: string;
  description: string;
  alternateDescription: string;
  reverseLayout?: boolean;
};

export default function TeamMember({ member }: { member: TeamMemberData }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isPinnedAlternate, setIsPinnedAlternate] = useState(false);
  const isAlternate = isHovering || isPinnedAlternate;

  return (
    <article
      className={`flex flex-col items-center gap-6 md:gap-10 ${
        member.reverseLayout ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <button
        type="button"
        className="h-100 w-80 shrink-0 cursor-pointer [perspective:1000px] md:cursor-default"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse") setIsHovering(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === "mouse") setIsHovering(false);
        }}
        onClick={() => {
          if (window.matchMedia("(max-width: 767px)").matches) {
            setIsPinnedAlternate((current) => !current);
          }
        }}
        aria-label={
          isAlternate
            ? `Mostra il primo lato del profilo di ${member.name}`
            : `Mostra il secondo lato del profilo di ${member.name}`
        }
        aria-pressed={isAlternate}
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isAlternate ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]"
            style={{
              position: "absolute",
              backgroundColor: THEME_COLORS.background,
            }}
          >
            <Image
              src={member.frontImage}
              alt={`Immagine di ${member.name}`}
              fill
              sizes="320px"
              loading="eager"
              className="object-cover"
            />
          </div>

          <div
            className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
            style={{
              position: "absolute",
              backgroundColor: THEME_COLORS.primary,
            }}
          >
            <Image
              src={member.backImage}
              alt=""
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </div>
      </button>

      <div className="w-full text-center md:flex-1 md:text-left">
        <h3 className="text-3xl font-bold">{member.name}</h3>
        <p className="mt-2 text-lg font-bold">{member.role}</p>
        <div className="mt-4 text-base leading-7 md:text-lg">
          <ProfileDescription
            name={member.name}
            description={member.description}
            alternateDescription={member.alternateDescription}
            isAlternate={isAlternate}
            onToggle={() => setIsPinnedAlternate((current) => !current)}
          />
        </div>
      </div>
    </article>
  );
}
