import type { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/config/seo";

export const metadata: Metadata = {
  title: "Search Anime | Anirohi",
  description: "Search and discover anime series and movies. Find your favorite shows by title, genre, and more.",
  ...(SEO_CONFIG.INDEX_SEARCH_PAGES
    ? {}
    : {
        robots: {
          index: false,
          follow: true,
        },
      }),
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
