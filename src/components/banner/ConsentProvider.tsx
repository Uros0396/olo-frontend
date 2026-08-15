"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ConsentChoice = "accepted" | "rejected" | null;

type ConsentContextValue = {
  externalContentAllowed: boolean;
  bannerOpen: boolean;
  choose: (choice: Exclude<ConsentChoice, null>) => void;
  openPreferences: () => void;
  ready: boolean;
};

const CONSENT_COOKIE = "olo_external_content_consent_v1";
const SIX_MONTHS_IN_SECONDS = 60 * 60 * 24 * 180;

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readConsentCookie(): ConsentChoice {
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));

  const value = cookie?.split("=")[1];
  return value === "accepted" || value === "rejected" ? value : null;
}

function writeConsentCookie(choice: Exclude<ConsentChoice, null>) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${SIX_MONTHS_IN_SECONDS}; Path=/; SameSite=Lax${secure}`;
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const initialization = window.setTimeout(() => {
      const savedChoice = readConsentCookie();
      setChoice(savedChoice);
      setBannerOpen(savedChoice === null);
      setReady(true);
    }, 0);

    return () => window.clearTimeout(initialization);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      externalContentAllowed: choice === "accepted",
      bannerOpen,
      choose(nextChoice) {
        writeConsentCookie(nextChoice);
        setChoice(nextChoice);
        setBannerOpen(false);
      },
      openPreferences() {
        setBannerOpen(true);
      },
      ready,
    }),
    [bannerOpen, choice, ready],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);

  if (!context) {
    throw new Error("useConsent deve essere usato dentro ConsentProvider.");
  }

  return context;
}
