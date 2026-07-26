import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Permissive robots — allow Googlebot and AI answer-engine crawlers.
 * A blanket allow already permits AI bots; explicit entries are belt-and-suspenders
 * per technical-SEO-AI-crawler-audit guidance.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "Google-Extended",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
