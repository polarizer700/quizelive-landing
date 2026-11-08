import type { MetadataRoute } from "next";

import { site } from "@shared/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
