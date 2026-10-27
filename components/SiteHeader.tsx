import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/**
 * Black "signalétique" bar. `overlay` floats it over the home hero video;
 * every other page gets a solid sticky bar. `quote="text"` is used on the
 * contact page itself, where a link back to the current page makes no sense.
 */
export default function SiteHeader({
  locale,
  quote = "link",
  quoteHref,
  overlay = false,
}: {
  locale: Locale;
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
