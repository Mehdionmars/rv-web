import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { Closer } from "@/components/Bands";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getMessages(locale).surMesure;
  return { title: t.title, description: t.description };
}

export default async function SurMesurePage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getMessages(locale).surMesure;

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="contenu">
        <div className="rv-split">
          <div>
            <p className="rv-eyebrow">{t.eyebrow}</p>
            <h1 className="rv-split__title">{t.heading}</h1>
            <p className="rv-split__text">{t.lede}</p>
            <div className="rv-actions">
              <Link
                className="rv-btn rv-btn--red rv-btn--red-ink"
                href={`/${locale}/contact`}
              >
                {t.ctaStart}
              </Link>
              <Link className="rv-btn rv-btn--ghost" href={`/${locale}/catalogue`}>
                {t.ctaCatalogue}
              </Link>
            </div>
          </div>

          <figure className="rv-split__media">
            <Image
              src="/uploads/imgi_22_pointing-sketch.jpg"
              alt={t.heroAlt}
              width={540}
              height={540}
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </figure>
        </div>

        <section
          className="rv-section rv-section--ruled"
          aria-labelledby="rv-steps-title"
        >
          <h2 className="rv-eyebrow" id="rv-steps-title">
            {t.stepsTitle}
          </h2>
          <ol className="rv-steps">
            {t.steps.map((s) => (
              <li className="rv-step" key={s.n}>
                <p className="rv-step__num">{s.n}</p>
                <h3 className="rv-step__title">{s.title}</h3>
                <p className="rv-step__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rv-dark" aria-label={t.termsLabel}>
          <ul className="rv-dark__grid">
            {t.terms.map((x) => (
              <li key={x.label}>
                <h2 className="rv-dark__label">{x.label}</h2>
                <p className="rv-dark__text">{x.text}</p>
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
