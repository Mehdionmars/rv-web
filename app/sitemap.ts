import type { MetadataRoute } from "next";
import { HTML_LANG, LOCALES } from "@/lib/i18n/config";
import { ITEMS, METIERS } from "@/lib/rv-data";
import { SITE_URL, STATIC_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...METIERS.map((m) => `/catalogue/${m.key}`),
    ...ITEMS.map((i) => `/piece/${i.slot}`),
  ];

  return paths.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/piece") ? 0.6 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [HTML_LANG[l], `${SITE_URL}/${l}${path}`]),
        ),
      },
    })),
  );
}
