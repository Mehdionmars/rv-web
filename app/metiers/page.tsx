import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { ITEMS, METIERS, product } from "@/lib/data";

export const metadata: Metadata = {
  title: "Métiers — Rougevif",
  description:
    "Sept métiers, sept vestiaires : industrie, protection, cuisine, service, logistique, agroalimentaire et scolaire.",
};

export default function MetiersPage() {
  const rows = METIERS.map((m, i) => {
    const items = ITEMS.filter((x) => x.m === m.key);
    const im = product(m.slot);
    return {
      key: m.key,
      titre: m.titre,
      texte: m.texte,
      img: im.src,
      alt: im.alt,
      imageFirst: i % 2 === 0,
      countLabel:
        items.length + (items.length > 1 ? " RÉFÉRENCES" : " RÉFÉRENCE"),
      pieces: items.map((x) => ({ name: x.name, href: `/piece?ref=${x.slot}` })),
    };
  });

  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      <SiteHeader active="/metiers" />

      <div
        style={{
          padding: "clamp(40px,5vw,72px) clamp(20px,3.2vw,40px) clamp(24px,3vw,40px)",
        }}
      >
        <div
          style={{
            font: "italic 800 11.5px/1 var(--font-body)",
            letterSpacing: ".2em",
            color: "#C40017",
          }}
        >
          MÉTIERS ÉQUIPÉS
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(32px,5vw,68px)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            textTransform: "uppercase",
            margin: "18px 0 0",
            maxWidth: 900,
          }}
        >
          Sept métiers, sept vestiaires
        </div>
        <div
          style={{
            font: "500 14px/1.65 var(--font-body)",
            color: "rgba(26,23,20,.62)",
            maxWidth: 540,
            marginTop: 18,
          }}
        >
          Nous ne vendons pas un catalogue unique à tout le monde. Chaque
          secteur a ses contraintes de matière, d’hygiène et de sécurité — et
          son vestiaire.
        </div>
      </div>

      {rows.map((m) => (
        <div
          key={m.key}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(20px,3vw,44px)",
            alignItems: "center",
            padding: "clamp(24px,3vw,40px) clamp(20px,3.2vw,40px)",
            borderTop: "1px solid rgba(26,23,20,.16)",
          }}
        >
          <div
            style={{
              height: "clamp(230px,26vw,340px)",
              background: "transparent",
              padding: "clamp(16px,2vw,28px)",
              boxSizing: "border-box",
              order: m.imageFirst ? 0 : 2,
            }}
          >
            {m.img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={m.img}
                alt={m.alt}
                className="rv-product-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : null}
          </div>
          <div>
            <div
              style={{
                font: "italic 800 10px/1 var(--font-body)",
                letterSpacing: ".2em",
                color: "#C40017",
              }}
            >
              {m.countLabel}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(26px,3.4vw,44px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                textTransform: "uppercase",
                margin: "14px 0 0",
              }}
            >
              {m.titre}
            </div>
            <div
              style={{
                font: "500 14px/1.65 var(--font-body)",
                color: "rgba(26,23,20,.66)",
                maxWidth: 460,
                marginTop: 16,
              }}
            >
              {m.texte}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 20,
              }}
            >
              {m.pieces.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="rv-link"
                  style={{
                    border: "1px solid rgba(26,23,20,.24)",
                    padding: "9px 13px",
                    font: "italic 600 10px/1 var(--font-body)",
                    letterSpacing: ".12em",
                    transition: "all .22s",
                  }}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          background: "#1A1714",
          color: "#E7E1D5",
          padding: "clamp(44px,6vw,70px) clamp(20px,3.2vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 30,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(28px,4.2vw,54px)",
            lineHeight: 1.04,
            letterSpacing: "-.028em",
            textTransform: "uppercase",
            maxWidth: 620,
          }}
        >
          Votre métier n’est pas listé ?
        </div>
        <Link href="/sur-mesure" className="rv-btn rv-btn-primary" style={{ padding: "17px 32px" }}>
          PASSER AU SUR-MESURE →
        </Link>
      </div>
    </div>
  );
}
