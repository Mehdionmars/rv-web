export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** Label shown in the header switcher. */
export const LOCALE_LABEL: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
};

/** Full name, used for the switcher's accessible label. */
export const LOCALE_NAME: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

/** BCP 47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  fr: "fr-MA",
  en: "en",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Swap the locale segment of a pathname: /fr/piece/i1 → /en/piece/i1 */
export function withLocale(pathname: string, locale: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length && isLocale(parts[0])) parts[0] = locale;
  else parts.unshift(locale);
  return "/" + parts.join("/");
}
