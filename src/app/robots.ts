import type { MetadataRoute } from "next";

const SITE_URL = "https://sunny-portfolio-three-woad-86.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
