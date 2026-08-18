import { ImageResponse } from "next/og";
import { THEME_COLORS } from "@/constants/colors";

export const alt =
  "Oltre l'Ostacolo - Branding, comunicazione e sviluppo web a Palermo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: THEME_COLORS.secondary,
        color: THEME_COLORS.dark,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", fontSize: 76, fontWeight: 800 }}>
        OLTRE L&apos;OSTACOLO
      </div>
      <div
        style={{
          color: THEME_COLORS.background,
          display: "flex",
          fontSize: 38,
          fontWeight: 600,
          marginTop: 34,
        }}
      >
        Branding · Comunicazione · Sviluppo web
      </div>
      <div style={{ display: "flex", fontSize: 27, marginTop: 28 }}>
        Strategie su misura per imprese e professionisti in Sicilia
      </div>
    </div>,
    size,
  );
}

