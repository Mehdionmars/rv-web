import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogueView from "@/components/CatalogueView";
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
  const t = getMessages(locale).catalogue;
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/catalogue"),
  };
}

export default async function CataloguePage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <CatalogueView locale={locale} />;
}
