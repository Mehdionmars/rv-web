import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getImage, getItemsFor, getMetiers } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale).metiers;
  return { title: t.title, description: t.description };
}

export default async function MetiersPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale);
  const metiers = getMetiers(locale);

  return (
    <>
      <SiteHeader locale={locale} current="metiers" />

      <main id="contenu">
        <div className="rv-intro">
          <p className="rv-eyebrow">{t.metiers.eyebrow}</p>
          <h1 className="rv-title">{t.metiers.heading}</h1>
          <p className="rv-lede">{t.metiers.lede}</p>
        </div>

        <ul className="rv-metiers">
          {metiers.map((m, i) => {
            const im = getImage(m.slot, locale);
            const pieces = getItemsFor(m.key, locale);

            return (
              <li className="rv-metier" key={m.key}>
                <figure className="rv-metier__figure">
                  <Image
                    src={im.src}
                    alt={im.alt}
                    width={350}
                    height={390}
                    priority={i === 0}
                    sizes="(max-width: 680px) 90vw, 40vw"
                  />
                </figure>
                <div>
                  <p className="rv-metier__count">
                    {t.common.references(pieces.length)}
                  </p>
                  <h2 className="rv-metier__name">{m.titre}</h2>
                  <p className="rv-metier__text">{m.texte}</p>
                  <ul className="rv-chips">
                    {pieces.map((p) => (
                      <li key={p.slot}>
                        <Link
                          className="rv-chip"
                          href={`/${locale}/piece/${p.slot}`}
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <section className="rv-band" aria-labelledby="rv-band-title">
          <h2 className="rv-band__title" id="rv-band-title">
            {t.metiers.bandTitle}
          </h2>
          <Link className="rv-btn rv-btn--red" href={`/${locale}/sur-mesure`}>
            {t.metiers.bandCta}
          </Link>
        </section>
      </main>
    </>
  );
}
