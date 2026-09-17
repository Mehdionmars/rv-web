import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import { bySlot, ITEMS, LABELS, product } from "@/lib/data";

export function generateMetadata({
  searchParams,
}: {
  searchParams: { ref?: string };
}): Metadata {
  const p = bySlot(searchParams.ref || "i1");
  return { title: `${p.name} — Rougevif` };
}

export default function PiecePage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const p = bySlot(searchParams.ref || "i1");
  const im = product(p.slot);
  const sous = p.sous || `Vêtement professionnel — ${LABELS[p.m].toLowerCase()}`;
  const related = ITEMS.filter((x) => x.m === p.m && x.slot !== p.slot).slice(0, 4);

  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      <SiteHeader active="/catalogue" />

      <div
        style={{
          padding: "18px clamp(20px,3.2vw,40px)",
          font: "italic 600 10px/1 var(--font-body)",
          letterSpacing: ".16em",
          color: "rgba(26,23,20,.5)",
        }}
      >
        <Link href="/catalogue">CATALOGUE</Link> · {LABELS[p.m]}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "clamp(20px,3vw,44px)",
          padding: "0 clamp(20px,3.2vw,40px) clamp(40px,5vw,72px)",
          alignItems: "start",
        }}
      >
        <div
          style={{
            height: "clamp(340px,42vw,540px)",
            background: "transparent",
            padding: "clamp(20px,2.6vw,40px)",
            boxSizing: "border-box",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={im.src}
            alt={im.alt}
            className="rv-product-img"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(30px,4.2vw,56px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
            }}
          >
            {p.name}
          </div>
          <div style={{ font: "500 14px/1.6 var(--font-body)", color: "#C40017", marginTop: 14, maxWidth: 520 }}>
            {sous}
          </div>
          <div
            style={{
              font: "500 15px/1.7 var(--font-body)",
              color: "rgba(26,23,20,.68)",
              marginTop: 16,
              maxWidth: 520,
            }}
          >
            {p.detail}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 22 }}>
            {p.tags.map((tg) => (
              <span key={tg} className="rv-tag">
                {tg}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 30, borderTop: "1px solid #1A1714" }}>
            {p.specs.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(110px,1fr) 2fr",
                  gap: 18,
                  padding: "14px 2px",
                  borderBottom: "1px solid rgba(26,23,20,.16)",
                }}
              >
                <div
                  style={{
                    font: "italic 700 10px/1.4 var(--font-body)",
                    letterSpacing: ".14em",
                    color: "rgba(26,23,20,.5)",
                  }}
                >
                  {k.toUpperCase()}
                </div>
                <div style={{ font: "500 13px/1.5 var(--font-body)" }}>{v}</div>
              </div>
            ))}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(110px,1fr) 2fr",
                gap: 18,
                padding: "14px 2px",
                borderBottom: "1px solid rgba(26,23,20,.16)",
              }}
            >
              <div
                style={{
                  font: "italic 700 10px/1.4 var(--font-body)",
                  letterSpacing: ".14em",
                  color: "rgba(26,23,20,.5)",
                }}
              >
                TAILLES
              </div>
              <div style={{ font: "500 13px/1.5 var(--font-body)" }}>{p.tailles}</div>
            </div>
          </div>
          <div
            style={{
              marginTop: 28,
              background: "#FBF8F2",
              border: "1px solid rgba(26,23,20,.16)",
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                font: "italic 800 10px/1 var(--font-body)",
                letterSpacing: ".2em",
                color: "#C40017",
              }}
            >
              FABRICATION PROFESSIONNELLE
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "10px 26px",
                marginTop: 16,
                font: "500 13px/1.55 var(--font-body)",
              }}
            >
              <div>Tailles {p.tailles}</div>
              <div>Personnalisation poitrine et dos</div>
              <div>Sérigraphie, broderie ou transfert</div>
              <div>Quantités professionnelles sur demande</div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
            <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "16px 30px" }}>
              DEMANDER CETTE PIÈCE
            </Link>
            <Link href="/atelier" className="rv-btn rv-btn-outline" style={{ padding: "16px 30px" }}>
              VOIR L’ATELIER
            </Link>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 clamp(20px,3.2vw,40px) clamp(48px,6vw,84px)" }}>
        <div
          style={{
            font: "italic 800 11.5px/1 var(--font-body)",
            letterSpacing: ".2em",
            color: "#C40017",
            marginBottom: 20,
          }}
        >
          DANS LE MÊME MÉTIER
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(210px,1fr))",
            gap: "clamp(14px,1.6vw,22px)",
          }}
        >
          {related.map((r) => {
            const rim = product(r.slot);
            return (
              <Link
                key={r.slot}
                href={`/piece?ref=${r.slot}`}
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div
                  style={{
                    height: "clamp(220px,23vw,290px)",
                    background: "transparent",
                    padding: "clamp(14px,1.6vw,22px)",
                    boxSizing: "border-box",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rim.src}
                    alt={rim.alt}
                    className="rv-product-img"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </div>
                <div style={{ height: 1, background: "#1A1714" }} />
                <div style={{ font: "700 13.5px/1.3 var(--font-body)" }}>{r.name}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        style={{
          background: "#1A1714",
          color: "#E7E1D5",
          padding: "clamp(40px,5vw,64px) clamp(20px,3.2vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          font: "italic 700 10.5px/1 var(--font-body)",
          letterSpacing: ".18em",
        }}
      >
        <Link href="/catalogue" style={{ color: "#E7E1D5" }}>
          ← RETOUR AU CATALOGUE
        </Link>
        <a href="mailto:m.moungid@rougevif.ma" style={{ color: "rgba(231,225,213,.6)" }}>
          M.MOUNGID@ROUGEVIF.MA
        </a>
      </div>
    </div>
  );
}
