import { Metadata } from "next";
import { Suspense } from "react";
import { SearchContent } from "./search-content";

export const metadata: Metadata = {
  title: "Search Anime - Anirohi",
  description: "Search for your favorite anime series and movies. Browse through thousands of anime titles.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SearchContent />
    </Suspense>
  );
}
