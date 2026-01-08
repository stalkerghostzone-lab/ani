/**
 * SEO configuration for the application
 */

export const SEO_CONFIG = {
  /**
   * Whether search pages should be indexed by search engines
   * Set to false to add noindex meta tag to search results
   */
  INDEX_SEARCH_PAGES: false,

  /**
   * Default site metadata
   */
  SITE_NAME: "Anirohi",
  SITE_DESCRIPTION:
    "Watch your favorite anime series and movies in HD quality. Stream the latest episodes and discover new shows.",
  SITE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://anirohi.com",

  /**
   * Default Open Graph image
   */
  DEFAULT_OG_IMAGE: "/opengraph-image.png",

  /**
   * Twitter card type
   */
  TWITTER_CARD: "summary_large_image" as const,
} as const;
