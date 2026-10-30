import type { Faq as FaqItem } from "@/lib/i18n/seo-content";

/**
 * Open/close question list plus its FAQPage structured data, so search and
 * answer engines can quote the replies directly. `tone="dark"` sits on the
 * home page's ink sections.
 */
export default function Faq({
  id,
  title,
  items,
  tone = "light",
}: {
  id: string;
  title: string;
  items: FaqItem[];
  tone?: "light" | "dark";
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  return (
    <section
      className={tone === "dark" ? "rv-faq rv-faq--dark" : "rv-faq"}
      aria-labelledby={id}
    >
      <h2 className="rv-faq__title" id={id}>
        {title}
      </h2>
      <div className="rv-faq__list">
        {items.map((x) => (
          <details className="rv-faq__item" key={x.q}>
            <summary>{x.q}</summary>
            <p>{x.a}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
