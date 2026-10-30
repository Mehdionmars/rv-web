import { HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/config";
import { MAIL_MAIN } from "@/components/Bands";

/** The domain Vercel actually serves; the bare domain 308s here. */
export const SITE_URL = "https://www.rougevif.ma";

/** Every route below /[locale], used by the sitemap. "" is the home page. */
export const STATIC_PATHS = ["", "/catalogue", "/metiers", "/sur-mesure", "/atelier", "/contact"];

/** Canonical + hreflang for one page. `path` is what follows the locale, e.g. "/catalogue". */
export function pageAlternates(locale: Locale, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], `/${l}${path}`])),
      "x-default": `/fr${path}`,
    },
  };
}

/** Organization data for search engines and AI answer engines. */
export function organizationJsonLd(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${SITE_URL}/#organization`,
    name: "Rougevif",
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}/uploads/imgi_16_combinaison-de-travail-ce117.jpg`,
    description,
    email: MAIL_MAIN,
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Casablanca",
      addressCountry: "MA",
    },
    areaServed: { "@type": "Country", name: "Morocco" },
    openingHours: "Mo-Sa 08:30-18:00",
    knowsAbout: [
      "Vêtements de travail",
      "Vêtements professionnels",
      "Textile publicitaire",
      "EPI",
      "Broderie et marquage",
      "Workwear",
      "PPE",
    ],
  };
}
