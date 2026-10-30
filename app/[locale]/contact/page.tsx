import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SewingIcon from "@/components/SewingIcon";
import DevisForm from "@/components/DevisForm";
import { FootBar, MAIL_ALT, MAIL_MAIN, PHONE } from "@/components/Bands";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { pageAlternates } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale).contact;
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale);

  return (
    <>
      <SiteHeader locale={locale} quote="text" />

      <main id="contenu">
        <div className="rv-contact">
          <div>
            <SewingIcon name="needle-curl" className="rv-page-ico" />
            <p className="rv-eyebrow">{t.contact.eyebrow}</p>
            <h1 className="rv-contact__title">{t.contact.heading}</h1>
            <p className="rv-contact__text">{t.contact.lede}</p>

            <ul className="rv-coords">
              <li>
                <a href={`mailto:${MAIL_MAIN}`}>{MAIL_MAIN.toUpperCase()}</a>
              </li>
              <li>
                <a href={`mailto:${MAIL_ALT}`}>{MAIL_ALT.toUpperCase()}</a>
              </li>
              <li>
                <span>{PHONE}</span>
              </li>
              <li>
                <span>{t.common.address}</span>
              </li>
              <li>
                <span>{t.common.hours}</span>
              </li>
            </ul>
          </div>

          <DevisForm locale={locale} />
        </div>
      </main>

      <FootBar
        left={{ href: `/${locale}`, label: t.common.backHome }}
        right={{ href: `/${locale}/catalogue`, label: t.common.seeCatalogue }}
      />
    </>
  );
}
