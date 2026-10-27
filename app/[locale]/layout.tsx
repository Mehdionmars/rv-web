import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import {
  HTML_LANG,
  LOCALES,
  isLocale,
  type Locale,
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import SiteFooter from "@/components/SiteFooter";
import "../globals.css";
import "../v3.css";

// The whole site uses a single face: IBM Plex Sans Regular.
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-plex",
  display: "swap",
});

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale);

  return {
    metadataBase: new URL("https://rougevif.ma"),
    title: {
      default: t.home.title,
      template: `%s — Rougevif`,
    },
    description: t.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        LOCALES.map((l) => [HTML_LANG[l], `/${l}`]),
      ),
    },
    openGraph: {
      type: "website",
      locale: HTML_LANG[locale].replace("-", "_"),
      siteName: "Rougevif",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#E7E1D5",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale as Locale);

  return (
    <html
      lang={HTML_LANG[locale]}
      className={plex.variable}
    >
      <body>
        <a className="rv-skip" href="#contenu">
          {t.nav.skip}
        </a>
        {children}
        <SiteFooter locale={locale as Locale} />
      </body>
    </html>
  );
}
