"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "./ConsentProvider";

const GOOGLE_ANALYTICS_ID = "G-MM30NT67DQ";
const GA_COOKIE_NAMES = ["_ga", "_ga_MM30NT67DQ"];

function deleteAnalyticsCookies() {
  const hostname = window.location.hostname;
  const domain = hostname.startsWith("www.") ? hostname.slice(4) : hostname;

  for (const cookieName of GA_COOKIE_NAMES) {
    document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;

    if (domain.includes(".")) {
      document.cookie = `${cookieName}=; Max-Age=0; Path=/; Domain=.${domain}; SameSite=Lax`;
    }
  }
}

export default function ConsentAwareAnalytics() {
  const { externalContentAllowed, ready } = useConsent();

  useEffect(() => {
    if (!ready) {
      return;
    }

    const disableKey = `ga-disable-${GOOGLE_ANALYTICS_ID}`;
    const analyticsWindow = window as typeof window & Record<string, unknown>;
    analyticsWindow[disableKey] = !externalContentAllowed;

    if (!externalContentAllowed) {
      deleteAnalyticsCookies();
    }
  }, [externalContentAllowed, ready]);

  if (!ready || !externalContentAllowed) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
