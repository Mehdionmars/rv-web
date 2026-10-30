import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SewingIcon from "@/components/SewingIcon";
import ProductCard from "@/components/ProductCard";
import Faq from "@/components/Faq";
import { Closer } from "@/components/Bands";
import type { Locale } from "@/lib/i18n/config";
import { getItem } from "@/lib/i18n/catalogue";
import type { Landing } from "@/lib/i18n/seo-content";

/** Search landing page (textile publicitaire, EPI): pitch, pieces, techniques, FAQ. */
export default function LandingView({
  locale,
  t,
  catalogueHref,
}: {
  locale: Locale;
  t: Landing;
  catalogueHref: string;
}) {
  const products = t.products
    .map((s) => getItem(s, locale))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="contenu">
        <div className="rv-split">
          <div>
            <SewingIcon name="needle-loop" className="rv-page-ico" />
            <p className="rv-eyebrow">{t.eyebrow}</p>
            <h1 className="rv-split__title">{t.heading}</h1>
            <p className="rv-split__text">{t.lede}</p>
            <div className="rv-actions">
              <Link
                className="rv-btn rv-btn--red rv-btn--red-ink"
                href={`/${locale}/contact`}
              >
                {t.ctaQuote}
              </Link>
              <Link className="rv-btn rv-btn--ghost" href={catalogueHref}>
                {t.ctaCatalogue}
              </Link>
            </div>
          </div>

          <figure className="rv-split__media rv-split__media--product">
            <Image
              src={t.heroSrc}
              alt={t.heroAlt}
              width={800}
              height={800}
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </figure>
        </div>

        <section
          className="rv-section rv-section--ruled"
          aria-labelledby="rv-landing-products"
        >
          <h2 className="rv-eyebrow" id="rv-landing-products">
            {t.productsTitle}
          </h2>
          <ul className="rv-grid rv-grid--flush">
            {products.map((item) => (
              <ProductCard key={item.slot} item={item} locale={locale} />
            ))}
          </ul>
        </section>

        <section className="rv-dark" aria-label={t.pointsLabel}>
          <ul className="rv-dark__grid">
            {t.points.map((x) => (
              <li key={x.label}>
                <h2 className="rv-dark__label">{x.label}</h2>
                <p className="rv-dark__text">{x.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <Faq id="rv-landing-faq" title={t.faqTitle} items={t.faq} />

        <Closer
          title={t.closerTitle}
          cta={t.closerCta}
          href={`/${locale}/contact`}
        />
      </main>
    </>
  );
}
