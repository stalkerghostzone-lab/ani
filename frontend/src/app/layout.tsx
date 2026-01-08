import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { QueryProvider } from "@/lib/query/provider";
import { AuthProvider } from "@/lib/auth/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { SITE_CONFIG } from "@/lib/config/site";
import "./globals.css";

// Using system fonts as fallback to avoid network dependency
const fontSans = "--font-sans";
const fontDisplay = "--font-display";

export const viewport: Viewport = {
  themeColor: "#06b6d4",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: `${SITE_CONFIG.name} - Stream Anime Free`,
  description: SITE_CONFIG.description,
  keywords: ["anime", "streaming", "watch anime", "anime online", "free anime"],
  applicationName: SITE_CONFIG.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_CONFIG.name,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - Stream Anime Free`,
    description: SITE_CONFIG.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - Stream Anime Free`,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        <NuqsAdapter>
          <QueryProvider>
            <AuthProvider>
              <div className="pt-[env(safe-area-inset-top)]">{children}</div>
              <Toaster />
            </AuthProvider>
          </QueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
