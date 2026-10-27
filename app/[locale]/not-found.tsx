import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { Closer } from "@/components/Bands";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

/* A not-found boundary cannot read route params, so it answers in the default
   locale. Every real route validates its own locale before rendering. */
export default function NotFound() {
  const locale = DEFAULT_LOCALE;
  const t = getMessages(locale).notFound;

  return (
    <>
      <SiteHeader locale={locale} />
      <main id="contenu">
        <div className="rv-intro">
          <p className="rv-eyebrow">{t.eyebrow}</p>
          <h1 className="rv-title">{t.heading}</h1>
          <p className="rv-lede">{t.lede}</p>
          <div className="rv-actions">
            <Link className="rv-btn rv-btn--ghost" href={`/${locale}/catalogue`}>
              {t.cta}
            </Link>
          </div>
        </div>
        <Closer
          title={t.closerTitle}
          cta={t.closerCta}
          href={`/${locale}/contact`}
        />
      </main>
    </>
  );
}
