import type { MetadataRoute } from "next";

const baseUrl = "https://www.oltrelostacoloagenzia.it";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: baseUrl + "/brand-identity-palermo",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/social-media-marketing-palermo",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/digitalizzazione-consulenza-palermo",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/sviluppo-web-palermo",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: baseUrl + "/cookie-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: baseUrl + "/faq",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}