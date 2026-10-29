import Link from "next/link";
import SewingIcon from "./SewingIcon";
import type { Locale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export const PHONE = "+212 5 22 00 00 00";
export const MAIL_MAIN = "m.moungid@rougevif.ma";
export const MAIL_ALT = "rougevif.vif@gmail.com";

/** Dark "Équipons votre équipe" band with contact details. */
export function QuoteBand({
  locale,
  withAltMail = false,
}: {
  locale: Locale;
  withAltMail?: boolean;
}) {
  const t = getMessages(locale);
  const [line1, line2] = t.common.quoteBandTitle;

  return (
    <section className="rv-band rv-band--split">
      <SewingIcon name="spool-bob" className="rv-band-ico" />
      <p className="rv-band__title">
        {line1}
        <br />
        {line2}
      </p>
      <div className="rv-band__contact">
        <span>{PHONE}</span>
        <a href={`mailto:${MAIL_MAIN}`}>{MAIL_MAIN.toUpperCase()}</a>
        {withAltMail && <a href={`mailto:${MAIL_ALT}`}>{MAIL_ALT.toUpperCase()}</a>}
        <Link className="rv-btn rv-btn--red" href={`/${locale}/contact`}>
          {t.common.quoteCta}
        </Link>
      </div>
    </section>
  );
}

/** Light closing band: a headline and one call to action. */
export function Closer({
  title,
  cta,
  href,
}: {
  title: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="rv-closer">
      <SewingIcon name="spool-line" className="rv-band-ico" />
      <h2 className="rv-closer__title">{title}</h2>
      <Link className="rv-btn rv-btn--red rv-btn--red-ink" href={href}>
        {cta}
      </Link>
    </section>
  );
}

export function FootBar({
  left,
  right,
}: {
  left: { href: string; label: string };
  right: { href: string; label: string; external?: boolean };
}) {
  return (
    <footer className="rv-footbar">
      <Link href={left.href}>{left.label}</Link>
      {right.external ? (
        <a href={right.href}>{right.label}</a>
      ) : (
        <Link href={right.href}>{right.label}</Link>
      )}
    </footer>
  );
}
