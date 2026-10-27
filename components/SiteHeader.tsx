import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export type NavKey = "catalogue" | "metiers" | "sur-mesure" | "atelier" | null;

export function SiteNav({
  locale,
  current,
}: {
  locale: Locale;
  current?: NavKey;
}) {
  const t = getMessages(locale);

  const links: { href: string; key: Exclude<NavKey, null>; label: string }[] = [
    { href: `/${locale}/catalogue`, key: "catalogue", label: t.nav.catalogue },
    { href: `/${locale}/metiers`, key: "metiers", label: t.nav.metiers },
    { href: `/${locale}/sur-mesure`, key: "sur-mesure", label: t.nav.surMesure },
    { href: `/${locale}/atelier`, key: "atelier", label: t.nav.atelier },
  ];

  return (
    <nav className="v3-nav" aria-label={t.nav.mainNav}>
      {links.map((l) => (
        <Link
          key={l.key}
          href={l.href}
          aria-current={current === l.key ? "page" : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

/**
 * Black "signalétique" bar. `overlay` floats it over the home hero video;
 * every other page gets a solid sticky bar. `quote="text"` is used on the
 * contact page itself, where a link back to the current page makes no sense.
 */
export default function SiteHeader({
  locale,
  current,
  quote = "link",
  quoteHref,
  overlay = false,
}: {
  locale: Locale;
  current?: NavKey;
  quote?: "link" | "text";
  quoteHref?: string;
  overlay?: boolean;
}) {
  const t = getMessages(locale);

  return (
    <header className={overlay ? "v3-top v3-top--overlay" : "v3-top"}>
      <Link href={`/${locale}`} className="v3-mark" aria-label="Rougevif">
        ROUGEVIF
      </Link>

      <SiteNav locale={locale} current={current} />

      <div className="v3-top__end">
        <LocaleSwitcher current={locale} switchLabel={t.nav.switchTo} />
        {quote === "link" ? (
          <Link className="v3-btn" href={quoteHref ?? `/${locale}/contact`}>
            {t.nav.quote}
          </Link>
        ) : (
          <span className="v3-btn" aria-current="page">
            {t.nav.quote}
          </span>
        )}
      </div>
    </header>
  );
}
