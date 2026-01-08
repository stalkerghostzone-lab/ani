"use client";

import { Suspense } from "react";
import { SearchContent } from "./search-content";

// Note: This is a client component, so metadata needs to be handled in layout or via client-side head updates
// Since Next.js doesn't support metadata export from client components, we'll handle SEO via the parent layout

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SearchContent />
    </Suspense>
  );
}
