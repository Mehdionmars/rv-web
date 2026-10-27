import Link from "next/link";
import ProductCard from "./ProductCard";
import SiteHeader from "./SiteHeader";
import { QuoteBand } from "./Bands";
import type { Locale } from "@/lib/i18n/config";
import { getItems, getItemsFor, getLabels } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";
import type { MetierKey } from "@/lib/rv-data";

/**
 * The catalogue, optionally narrowed to one métier.
 *
 * Filtering is routing, not state: each chip is a real URL that prerenders to
 * its own static page. No client JavaScript, and every filtered view is
 * linkable and indexable.
 */
export default function CatalogueView({
  locale,
  active,
}: {
  locale: Locale;
  active?: MetierKey;
}) {
  const t = getMessages(locale);
  const labels = getLabels(locale);
  const shown = active ? getItemsFor(active, locale) : getItems(locale);
  const keys = Object.keys(labels) as MetierKey[];

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="contenu">
        <div className="rv-section rv-section--tight">
          <p className="rv-eyebrow">
            {t.catalogue.eyebrow} — {t.common.references(shown.length)}
          </p>
          <h1 className="rv-title">{t.catalogue.heading}</h1>
          <p className="rv-lede">{t.catalogue.lede}</p>

          <ul className="rv-filters" aria-label={t.catalogue.filterLabel}>
            <li>
              <Link
                className="rv-filter"
                href={`/${locale}/catalogue`}
                aria-current={active ? undefined : "page"}
                data-active={active ? undefined : "true"}
              >
                {t.catalogue.all}
              </Link>
            </li>
            {keys.map((k) => (
              <li key={k}>
                <Link
                  className="rv-filter"
                  href={`/${locale}/catalogue/${k}`}
                  aria-current={active === k ? "page" : undefined}
                  data-active={active === k ? "true" : undefined}
                >
                  {labels[k]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {shown.length > 0 ? (
          <ul className="rv-grid">
            {shown.map((item, i) => (
              <ProductCard
                key={item.slot}
                item={item}
                locale={locale}
                priority={i < 4}
              />
            ))}
          </ul>
        ) : (
          <p className="rv-empty">{t.catalogue.empty}</p>
        )}

        <QuoteBand locale={locale} />
      </main>
    </>
  );
}
