"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { THEME_COLORS } from "@/constants/colors";
import { navigation } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const pendingHref = useRef<string | null>(null);

  function activateLink(href: string) {
    pendingHref.current = href;
    setActiveHref(href);
  }

  useEffect(() => {
    const sections = navigation
      .map((item) => ({
        href: item.href,
        element: document.querySelector<HTMLElement>(item.href),
      }))
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          section.element !== null,
      );

    function updateActiveLink() {
      if (pendingHref.current) {
        const pendingSection = document.querySelector<HTMLElement>(
          pendingHref.current,
        );

        if (pendingSection) {
          const { top } = pendingSection.getBoundingClientRect();

          if (top > 160 || top < -160) {
            return;
          }
        }

        pendingHref.current = null;
      }

      const currentSection = [...sections]
        .reverse()
        .find(({ element }) => element.getBoundingClientRect().top <= 160);

      setActiveHref(currentSection?.href ?? null);
    }

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: THEME_COLORS.dark,
        color: THEME_COLORS.background,
      }}
      className="sticky top-0 z-50 shadow-sm"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          aria-label="Torna alla sezione iniziale"
          onClick={() => {
            pendingHref.current = null;
            setActiveHref(null);
          }}
          className="-translate-x-10 flex items-center"
        >
          <Image
            src="/img-logo/logo-nav.png"
            alt="Oltre l'Ostacolo"
            width={666}
            height={375}
            loading="eager"
            className="h-20 w-auto origin-left scale-125 p-3"
          />
        </a>

        <div className="hidden translate-x-7 items-center gap-3 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium transition hover:opacity-75"
              style={{
                color:
                  activeHref === item.href
                    ? THEME_COLORS.secondary
                    : THEME_COLORS.background,
              }}
              aria-current={activeHref === item.href ? "page" : undefined}
              onClick={() => activateLink(item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center md:hidden"
          style={{ color: THEME_COLORS.background }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-4 py-4">
          <ul className="space-y-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    activateLink(item.href);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 text-center text-base font-medium transition hover:opacity-75"
                  style={{
                    color:
                      activeHref === item.href
                        ? THEME_COLORS.secondary
                        : THEME_COLORS.background,
                  }}
                  aria-current={activeHref === item.href ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
