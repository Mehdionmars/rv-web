import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingView from "@/components/LandingView";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getLanding } from "@/lib/i18n/seo-content";
import { pageAlternates } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getLanding("epi", locale);
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, t.path),
  };
}

export default async function Page({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <LandingView
      locale={locale}
      t={getLanding("epi", locale)}
      catalogueHref={`/${locale}/catalogue/protection`}
    />
  );
}
