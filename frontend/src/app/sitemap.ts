import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  // Static routes with their priorities and change frequencies
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/home", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/browse", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/search", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/schedule", priority: 0.7, changeFrequency: "daily" as const },
    { path: "/library", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/saved", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/history", priority: 0.5, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/dmca", priority: 0.3, changeFrequency: "monthly" as const },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
