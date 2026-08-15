import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Footer viene visualizzato correttamente", async ({ page }) => {
    const footer = page.locator("footer");

    await expect(footer).toBeVisible();

    await expect(
      footer.getByText("OLTRE L'OSTACOLO", { exact: true }),
    ).toBeVisible();

    await expect(
      footer.getByText(
        "Strategia, identita' e soluzioni digitali per la crescita del tuo business.",
        { exact: true },
      ),
    ).toBeVisible();

    await expect(
      footer.getByText("© 2026 Oltre l'Ostacolo. Tutti i diritti riservati.", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("Footer contiene i link di navigazione", async ({ page }) => {
    const footer = page.locator("footer");

    const links = [
      { name: "Chi siamo", href: "#chi-siamo" },
      { name: "I nostri servizi", href: "#nostri-servizi" },
      { name: "Perche' noi", href: "#perche-noi" },
      { name: "Contattaci", href: "#contattaci" },
    ];

    for (const link of links) {
      const element = footer.getByRole("link", {
        name: link.name,
        exact: true,
      });

      await expect(element).toBeVisible();
      await expect(element).toHaveAttribute("href", link.href);
    }
  });

  test("Footer contiene i contatti corretti", async ({ page }) => {
    const footer = page.locator("footer");

    await expect(footer.getByText("Via Arimondi 107, Palermo")).toBeVisible();

    const email = footer.getByRole("link", {
      name: "info@oltrelostacolo.it",
    });

    await expect(email).toHaveAttribute(
      "href",
      "mailto:info@oltrelostacolo.it",
    );

    const phone = footer.getByRole("link", {
      name: "+39 388 556 7998",
    });

    await expect(phone).toHaveAttribute("href", "tel:+393885567998");
  });

  test("Footer contiene tutti i social", async ({ page }) => {
    const footer = page.locator("footer");

    const socials = ["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn"];

    for (const social of socials) {
      const link = footer.getByRole("link", { name: social });

      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute("target", "_blank");
    }
  });

  test("Torna su punta alla home", async ({ page }) => {
    const footer = page.locator("footer");

    const tornaSu = footer.getByRole("link", {
      name: "Torna su",
    });

    await expect(tornaSu).toBeVisible();
    await expect(tornaSu).toHaveAttribute("href", "#home");
  });
});
