import type { MetadataRoute } from "next";

const baseUrl = "https://www.oltrelostacoloagenzia.it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
