import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { getLabel, type LocalItem } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";

/** Every product shot in the library is 350×390 on a neutral ground. */
const W = 350;
const H = 390;

export default function ProductCard({
  item,
  locale,
  priority = false,
  variant = "full",
}: {
  item: LocalItem;
  locale: Locale;
  priority?: boolean;
  /** "related" is the smaller card used at the foot of a pièce page. */
  variant?: "full" | "related";
}) {
  const related = variant === "related";
  const t = getMessages(locale);

  return (
    <li className={related ? "rv-card rv-card--related" : "rv-card"}>
      <Link href={`/${locale}/piece/${item.slot}`}>
        <figure className="rv-card__media">
          <Image
            src={item.img.src}
            alt={item.img.alt}
            width={W}
            height={H}
            priority={priority}
            sizes="(max-width: 700px) 90vw, 260px"
          />
          {!related && (
            <span className="rv-card__tag">{getLabel(item.m, locale)}</span>
          )}
        </figure>
        <div className="rv-card__rule" />
        <p className="rv-card__name">{item.name}</p>
        {!related && (
          <>
            <p className="rv-card__meta">{item.matiere}</p>
            <p className="rv-card__cta">{t.catalogue.cardCta}</p>
          </>
        )}
      </Link>
    </li>
  );
}
