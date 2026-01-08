/**
 * Site configuration constants
 */

export const SITE_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  name: "Anirohi",
  description: "Watch your favorite anime series and movies in HD quality. Stream the latest episodes and discover new shows.",
} as const;

export const SEO_CONFIG = {
  descriptionMaxLength: 160,
} as const;
