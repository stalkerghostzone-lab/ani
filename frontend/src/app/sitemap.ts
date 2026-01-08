import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://anirohi.com";
  const currentDate = new Date();

  // Core static routes
  // Note: Dynamic anime routes are not included here as we don't have a cheap way
  // to fetch the full catalog. Consider using a sitemap index or dynamic sitemap
  // generation if the anime catalog becomes available.
  const routes = [
    "",
    "/home",
    "/browse",
    "/search",
    "/library",
    "/schedule",
    "/saved",
    "/contact",
    "/dmca",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/home" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/home" ? 0.9 : 0.5,
  }));
}
