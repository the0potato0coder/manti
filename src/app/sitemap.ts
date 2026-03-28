import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.manticorestudio.com";
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Upcoming projects is currently parked and intentionally excluded from
    // sitemap discovery. Re-enable this entry when the route is relaunched.
    // {
    //   url: `${siteUrl}/upcoming-projects`,
    //   lastModified: now,
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
  ];
}
