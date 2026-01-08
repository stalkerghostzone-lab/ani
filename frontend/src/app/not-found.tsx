import Link from "next/link";
import { Navbar } from "@/components/blocks/navbar";
import { Footer } from "@/components/blocks/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">
              Page not found
            </h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors inline-block"
            >
              Go home
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 rounded-lg bg-foreground/10 text-foreground font-medium hover:bg-foreground/20 transition-colors inline-block"
            >
              Search anime
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
