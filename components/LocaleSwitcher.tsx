"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LOCALES,
  LOCALE_LABEL,
  LOCALE_NAME,
  withLocale,
  type Locale,
} from "@/lib/i18n/config";

/**
 * FR / EN. Each option is a real link to the same page in the other locale, so
 * it works without JavaScript and keeps the visitor where they were.
 */
export default function LocaleSwitcher({
  current,
  switchLabel,
}: {
  current: Locale;
  switchLabel: string;
}) {
  const pathname = usePathname() || `/${current}`;

  return (
    <div className="rv-lang">
      {LOCALES.map((l) =>
        l === current ? (
          <span key={l} className="rv-lang__item" aria-current="true">
            {LOCALE_LABEL[l]}
          </span>
        ) : (
          <Link
            key={l}
            className="rv-lang__item"
            href={withLocale(pathname, l)}
            hrefLang={l}
            lang={l}
            aria-label={`${switchLabel} ${LOCALE_NAME[l]}`}
          >
            {LOCALE_LABEL[l]}
          </Link>
        ),
      )}
    </div>
  );
}
