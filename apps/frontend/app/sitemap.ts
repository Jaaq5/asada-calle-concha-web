import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://asadacalleconcha.com";

  const routes = [
    "",
    "/nosotros",
    "/servicios",
    "/tramites",
    "/noticias",
    "/transparencia",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "yearly" : route === "/noticias" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
