import type { MetadataRoute } from "next";
import { SITE, CASE_STUDIES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CASE_STUDIES.map((study) => ({
      url: `${SITE.url}/cases/${study.slug}`,
      lastModified: new Date(study.modifiedTime),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
