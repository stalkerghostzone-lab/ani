import { Metadata } from "next";
import { SEO_CONFIG } from "@/lib/config/seo";
import { AnimeDetailClient } from "./anime-detail-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Helper function to fetch anime data for metadata generation
async function fetchAnimeData(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/rpc/anime.getAboutInfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: { id } }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data?.result?.data;
  } catch (error) {
    console.error("Failed to fetch anime data for metadata:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = await fetchAnimeData(id);

  if (!data?.anime) {
    return {
      title: "Anime Not Found | Anirohi",
      description: "The requested anime could not be found.",
    };
  }

  const anime = data.anime;
  const info = anime.info;
  const moreInfo = anime.moreInfo;

  const title = `${info.name || "Anime"} | Anirohi`;
  const description =
    info.description?.slice(0, 160) ||
    `Watch ${info.name || "anime"} on Anirohi. ${moreInfo.type || "Anime"} series with ${info.stats?.episodes?.sub || info.stats?.episodes?.dub || "multiple"} episodes.`;

  return {
    title,
    description,
    keywords: [
      info.name,
      "anime",
      "watch anime",
      "stream anime",
      moreInfo.type,
      ...(Array.isArray(moreInfo.genres) ? moreInfo.genres : []),
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "video.tv_show",
      images: info.poster
        ? [
            {
              url: info.poster,
              width: 460,
              height: 690,
              alt: info.name || "Anime poster",
            },
          ]
        : [{ url: SEO_CONFIG.DEFAULT_OG_IMAGE }],
      siteName: SEO_CONFIG.SITE_NAME,
    },
    twitter: {
      card: SEO_CONFIG.TWITTER_CARD,
      title,
      description,
      images: info.poster ? [info.poster] : [SEO_CONFIG.DEFAULT_OG_IMAGE],
    },
  };
}

export default async function AnimeDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <AnimeDetailClient id={id} />;
}
