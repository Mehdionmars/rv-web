import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueView from "@/components/CatalogueView";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getMetiers } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";
import { pageAlternates } from "@/lib/seo";
import { LABELS, METIERS, type MetierKey } from "@/lib/rv-data";

type Params = { params: Promise<{ locale: string; metier: string }> };

const isMetier = (k: string): k is MetierKey =>
  Object.prototype.hasOwnProperty.call(LABELS, k);

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    METIERS.map((m) => ({ locale, metier: m.key })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, metier } = await params;
  if (!isLocale(locale) || !isMetier(metier)) return {};

  const t = getMessages(locale).catalogue;
  const m = getMetiers(locale).find((x) => x.key === metier);
  return {
    title: t.metierTitle(m?.titre ?? metier),
    description: m?.texte,
    alternates: pageAlternates(locale, `/catalogue/${metier}`),
  };
}

export default async function CatalogueMetierPage({ params }: Params) {
  const { locale, metier } = await params;
  if (!isLocale(locale) || !isMetier(metier)) notFound();
  return <CatalogueView locale={locale} active={metier} />;
}
