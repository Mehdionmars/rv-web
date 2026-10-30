import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SewingIcon from "@/components/SewingIcon";
import { Closer } from "@/components/Bands";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { pageAlternates } from "@/lib/seo";
import {
  ATELIER_POSTER,
  ATELIER_VIDEO,
  PEXELS,
} from "@/lib/media";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale).atelier;
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(locale, "/atelier"),
  };
}

export default async function AtelierPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale).atelier;

  const machines = [
    { src: PEXELS.piquage, alt: t.machineAlts[0], width: 1600, height: 1067 },
    { src: PEXELS.parcMachines, alt: t.machineAlts[1], width: 1600, height: 1067 },
    { src: PEXELS.brodeuses, alt: t.machineAlts[2], width: 1600, height: 1067 },
  ];

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="contenu">
        <section className="rv-hero">
          <div className="rv-hero__media">
            <video
              src={ATELIER_VIDEO}
              poster={ATELIER_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={t.videoLabel}
            />
          </div>
          <div className="rv-hero__scrim" />
          <div className="rv-hero__copy">
            <p className="rv-hero__eyebrow">{t.eyebrow}</p>
            <h1 className="rv-hero__title">{t.heading}</h1>
          </div>
        </section>

        <div className="rv-cols">
          {t.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <section className="rv-dark" aria-labelledby="rv-machines-title">
          <SewingIcon name="machine" className="rv-page-ico" />
          <h2 className="rv-closer__title" id="rv-machines-title">
            {t.machinesTitle}
          </h2>

          <ul className="rv-machines">
            {machines.map((m) => (
              <li key={m.src}>
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="(max-width: 780px) 100vw, 33vw"
                />
              </li>
            ))}
          </ul>
        </section>

        <Closer
          title={t.closerTitle}
          cta={t.closerCta}
          href={`/${locale}/contact`}
        />
      </main>
    </>
  );
}
