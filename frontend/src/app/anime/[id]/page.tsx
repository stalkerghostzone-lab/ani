import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAniwatchScraper } from "@/lib/aniwatch/scraper";
import AnimeDetailContent from "./anime-detail-content";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const scraper = getAniwatchScraper();
    const animeData = await scraper.getInfo(id);
    const anime = animeData?.anime;
    
    if (!anime?.info?.name) {
      return {
        title: "Anime Not Found - Anirohi",
        description: "The requested anime could not be found.",
      };
    }

    const info = anime.info;
    const moreInfo = anime.moreInfo;
    
    const title = `${info.name} - Watch on Anirohi`;
    const description = info.description 
      ? info.description.slice(0, 160) + (info.description.length > 160 ? "..." : "")
      : `Watch ${info.name} anime online in HD quality. ${moreInfo?.type || "Anime"} with ${info.stats?.episodes?.sub || info.stats?.episodes?.dub || "multiple"} episodes available.`;
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "video.tv_show",
        images: info.poster ? [
          {
            url: info.poster,
            width: 460,
            height: 650,
            alt: info.name || "Anime poster",
          },
        ] : [],
        siteName: "Anirohi",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: info.poster ? [info.poster] : [],
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata for anime:", id, error);
    return {
      title: "Anime - Anirohi",
      description: "Watch anime online in HD quality.",
    };
  }
}

export default function AnimeDetailPage({ params }: PageProps) {
  return <AnimeDetailContent params={params} />;
}
