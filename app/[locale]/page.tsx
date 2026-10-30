import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SewingIcon from "@/components/SewingIcon";
import DevisForm from "@/components/DevisForm";
import { MAIL_ALT, MAIL_MAIN, PHONE } from "@/components/Bands";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { getItem, getItemsFor, getMetiers } from "@/lib/i18n/catalogue";
import { getMessages } from "@/lib/i18n/messages";
import { ATELIER_POSTER, ATELIER_VIDEO, PEXELS } from "@/lib/media";
import { ITEMS, type Slot } from "@/lib/rv-data";

/**
 * Home — "signalétique d'usine".
 * Black and signal red, products shown as hang-tags.
 */

type Params = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

const TAGS: Slot[] = ["i1", "p2", "c1", "s3", "l1", "a1", "e1", "i4"];
const PHOTOS: Record<string, string> = {
  industrie: PEXELS.industrie,
  cuisine: PEXELS.cuisine,
  service: PEXELS.service,
};

const COPY = {
  fr: {
    since: "Depuis 2011",
    title: ["Le travail", "n’attend", "pas."],
    lede: "Coupé, cousu et marqué sous un seul toit. Sergé 320 g/m², coutures triples, rivets laiton. Porté six jours sur sept.",
    tagsTitle: "Le vestiaire",
    tagsSub: "Faites défiler — chaque étiquette ouvre sa fiche technique.",
    madeIn: "Fabriqué à Casablanca",
    metiersTitle: "Qui on habille",
    manifesto: ["On ne s’habille pas", "pour travailler.", "On s’équipe."],
    contactTitle: ["Votre équipe.", "Notre atelier."],
  },
  en: {
    since: "Since 2011",
    title: ["Work", "doesn’t", "wait."],
    lede: "Cut, sewn and marked under one roof. 320 g/m² twill, triple stitching, brass rivets. Worn six days a week.",
    tagsTitle: "The wardrobe",
    tagsSub: "Scroll — each tag opens its spec sheet.",
    madeIn: "Made in Casablanca",
    metiersTitle: "Who we dress",
    manifesto: ["You don’t dress", "for work.", "You gear up."],
    contactTitle: ["Your team.", "Our workshop."],
  },
} as const;

export default async function HomeV3({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getMessages(locale);
  const c = COPY[locale];
  const metiers = getMetiers(locale);
  const tags = TAGS.map((s) => getItem(s, locale)).filter(
    (i): i is NonNullable<typeof i> => Boolean(i),
  );
  const marquee = metiers.map((m) => m.titre.toUpperCase()).join("  ✱  ") + "  ✱  ";

  return (
    <div className="v3">
      <SiteHeader locale={locale} overlay quoteHref="#devis" />

      <main id="contenu">
        {/* ---------------------------------------------------------- hero */}
        <section className="v3-hero">
          <div className="v3-hero__video" aria-hidden="true">
            <video
              src={ATELIER_VIDEO}
              poster={ATELIER_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
            />
          </div>
          <h1 className="v3-hero__title">
            {c.title.map((line, i) => (
              <span key={line} style={{ animationDelay: `${i * 0.12}s` }}>
                {line}
              </span>
            ))}
          </h1>
          <div className="v3-hero__foot">
            <p>{c.lede}</p>
            <Link className="v3-btn v3-btn--xl" href="#devis">
              {t.home.ctaQuote} <span aria-hidden="true">↘</span>
            </Link>
          </div>
          <div className="v3-hazard" aria-hidden="true" />
        </section>

        <div className="v3-marquee" aria-hidden="true">
          <div>
            {marquee}
            {marquee}
            {marquee}
          </div>
        </div>

        {/* ---------------------------------------------------------- tags */}
        <section className="v3-tags" aria-labelledby="v3-tags">
          <header className="v3-head">
            <div className="v3-head__title">
              <h2 id="v3-tags">{c.tagsTitle}</h2>
              <SewingIcon name="needle" className="v3-head__ico" />
            </div>
            <p>{c.tagsSub}</p>
          </header>
          <ul className="v3-tags__rail">
            {tags.map((item, i) => (
              <li key={item.slot} style={{ ["--r" as string]: `${(i % 2 ? 1 : -1) * (1 + (i % 3))}deg` }}>
                <Link href={`/${locale}/piece/${item.slot}`} className="v3-tag">
                  <span className="v3-tag__hole" aria-hidden="true" />
                  <span className="v3-tag__brand">ROUGEVIF</span>
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width={350}
                    height={390}
                    sizes="240px"
                  />
                  <span className="v3-tag__name">{item.name}</span>
                  <span className="v3-tag__line">{item.matiere}</span>
                  <span className="v3-tag__foot">
                    <span>{item.slot.toUpperCase()}</span>
                    <span>{c.madeIn}</span>
                  </span>
                </Link>
              </li>
            ))}
            <li className="v3-tags__more">
              <Link href={`/${locale}/catalogue`}>
                {t.home.catalogueCta(ITEMS.length)}
              </Link>
            </li>
          </ul>
        </section>

        {/* ---------------------------------------------------- manifesto */}
        <section className="v3-manifesto">
          <p>
            {c.manifesto.map((l, i) => (
              <span key={l} className={i === 2 ? "is-red" : undefined}>
                {l}
              </span>
            ))}
          </p>
          <SewingIcon name="spool" className="v3-manifesto__ico" />
        </section>

        {/* ------------------------------------------------------ métiers */}
        <section className="v3-metiers" aria-labelledby="v3-metiers">
          <header className="v3-head">
            <div className="v3-head__title">
              <h2 id="v3-metiers">{c.metiersTitle}</h2>
              <SewingIcon name="pins" className="v3-head__ico" />
            </div>
          </header>
          <ul>
            {metiers.map((m, i) => {
              const item = getItem(m.slot, locale);
              const photo = PHOTOS[m.key];
              return (
                <li key={m.key} className={photo ? "is-photo" : undefined}>
                  <Link href={`/${locale}/catalogue/${m.key}`}>
                    {photo ? (
                      <Image src={photo} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
                    ) : (
                      item && (
                        <Image
                          className="v3-metiers__cut"
                          src={item.img.src}
                          alt=""
                          width={350}
                          height={390}
                          sizes="200px"
                        />
                      )
                    )}
                    <span className="v3-metiers__n">0{i + 1}</span>
                    <span className="v3-metiers__name">{m.titre}</span>
                    <span className="v3-metiers__count">
                      {t.common.references(getItemsFor(m.key, locale).length)} →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ------------------------------------------------------ contact */}
        <section className="v3-contact" id="devis" aria-labelledby="v3-contact">
          <div className="v3-contact__copy">
            <SewingIcon name="needle-loop" className="v3-contact__ico" />
            <h2 id="v3-contact">
              {c.contactTitle[0]}
              <br />
              <span>{c.contactTitle[1]}</span>
            </h2>
            <p>{t.contact.lede}</p>
            <ul>
              <li><a href={`mailto:${MAIL_MAIN}`}>{MAIL_MAIN}</a></li>
              <li><a href={`mailto:${MAIL_ALT}`}>{MAIL_ALT}</a></li>
              <li>{PHONE}</li>
              <li>{t.common.address}</li>
            </ul>
          </div>
          <div className="v3-contact__form">
            <DevisForm locale={locale} variant="short" />
            <p className="v3-contact__since">
              <span>{c.since.split(" ")[0]}</span>
              {c.since.split(" ")[1]}
            </p>
          </div>
        </section>
      </main>

    </div>
  );
}
