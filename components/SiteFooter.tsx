import Link from "next/link";
import SewingIcon from "./SewingIcon";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { FOOTER_NAV } from "@/lib/i18n/seo-content";

/** Site-wide footer: the oversized red wordmark. */
export default function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <footer className="v3-foot">
      <span className="v3-foot__word" aria-hidden="true">ROUGEVIF</span>
      <nav className="v3-foot__nav" aria-label="Rougevif">
        {FOOTER_NAV[locale].map((x) => (
          <Link key={x.path} href={`/${locale}${x.path}`}>
            {x.label}
          </Link>
        ))}
      </nav>
      <div className="v3-foot__row">
        <span>© {new Date().getFullYear()} — {t.common.address}</span>
        <SewingIcon name="bobbin" className="v3-foot__ico" />
      </div>
    </footer>
  );
}
