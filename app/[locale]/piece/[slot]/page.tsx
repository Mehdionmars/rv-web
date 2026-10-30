import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SewingIcon from "@/components/SewingIcon";
import ProductCard from "@/components/ProductCard";
import { FootBar, MAIL_MAIN } from "@/components/Bands";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getItem, getItemsFor, getLabel } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";
import { pageAlternates } from "@/lib/seo";
import { ITEMS } from "@/lib/rv-data";

type Params = { params: Promise<{ locale: string; slot: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    ITEMS.map((i) => ({ locale, slot: i.slot })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slot } = await params;
  if (!isLocale(locale)) return {};

  const item = getItem(slot, locale);
  if (!item) return {};

  return {
    title: item.name,
    description: `${item.sous}. ${item.matiere}.`,
    alternates: pageAlternates(locale, `/piece/${slot}`),
    openGraph: { images: [{ url: item.img.src, alt: item.img.alt }] },
  };
}

export default async function PiecePage({ params }: Params) {
  const { locale, slot } = await params;
  if (!isLocale(locale)) notFound();

  const item = getItem(slot, locale);
  if (!item) notFound();

  const t = getMessages(locale);
  const metier = getLabel(item.m, locale);
  const related = getItemsFor(item.m, locale)
    .filter((x) => x.slot !== item.slot)
    .slice(0, 4);

  return (
    <>
      <SiteHeader locale={locale} />

      <nav className="rv-crumbs" aria-label={t.nav.breadcrumb}>
        <Link href={`/${locale}/catalogue`}>{t.nav.catalogue}</Link> ·{" "}
        <Link href={`/${locale}/catalogue/${item.m}`}>{metier}</Link>
      </nav>

      <main id="contenu">
        <article className="rv-piece">
          <figure className="rv-piece__figure">
            <Image
              src={item.img.src}
              alt={item.img.alt}
              width={350}
              height={390}
              priority
              sizes="(max-width: 700px) 90vw, 40vw"
            />
          </figure>

          <div>
            <h1 className="rv-piece__name">{item.name}</h1>
            <p className="rv-piece__sub">{item.sous}</p>
            <p className="rv-piece__detail">{item.detail}</p>

            <ul className="rv-tags">
              {item.tags.map((tag) => (
                <li className="rv-tag" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>

            <dl className="rv-specs">
              {item.specs.map(([k, v]) => (
                <div key={k}>
                  <dt>{k.toUpperCase()}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
              <div>
                <dt>{t.piece.sizes}</dt>
                <dd>{item.tailles}</dd>
              </div>
            </dl>

            <section className="rv-note" aria-labelledby="rv-note-title">
              <h2 className="rv-eyebrow" id="rv-note-title">
                {t.piece.fabricationTitle}
              </h2>
              <ul className="rv-note__list">
                {t.piece.fabrication(item.tailles).map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>

            <div className="rv-actions">
              <Link
                className="rv-btn rv-btn--red rv-btn--red-ink"
                href={`/${locale}/contact`}
              >
                {t.piece.ctaAsk}
              </Link>
              <Link className="rv-btn rv-btn--ghost" href={`/${locale}/atelier`}>
                {t.piece.ctaWorkshop}
              </Link>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="rv-related" aria-labelledby="rv-related-title">
            <SewingIcon name="needles" className="rv-page-ico" />
            <h2 className="rv-eyebrow" id="rv-related-title">
              {t.piece.related}
            </h2>
            <ul className="rv-grid rv-grid--flush rv-grid--related">
              {related.map((r) => (
                <ProductCard
                  key={r.slot}
                  item={r}
                  locale={locale}
                  variant="related"
                />
              ))}
            </ul>
          </section>
        )}
      </main>

      <FootBar
        left={{
          href: `/${locale}/catalogue`,
          label: t.common.backToCatalogue,
        }}
        right={{
          href: `mailto:${MAIL_MAIN}`,
          label: MAIL_MAIN.toUpperCase(),
          external: true,
        }}
      />
    </>
  );
}
