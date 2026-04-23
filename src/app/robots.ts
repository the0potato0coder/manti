import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /upcoming-projects is intentionally parked for now.
        disallow: [
          "/admin",
          "/seo-admin",
          "/studio",
          "/api/auth",
          "/upcoming-projects",
        ],
      },
    ],
    sitemap: "https://www.manticorestudio.com/sitemap.xml",
    host: "https://www.manticorestudio.com",
  };
}
