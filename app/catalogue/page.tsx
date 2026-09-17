"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { ITEMS, LABELS, MetierKey, product } from "@/lib/data";

const FILTERS: { key: MetierKey | "tout"; label: string }[] = [
  { key: "tout", label: "TOUT VOIR" },
  ...(Object.keys(LABELS) as MetierKey[]).map((k) => ({ key: k, label: LABELS[k] })),
];

export default function CataloguePage() {
  const [active, setActive] = useState<MetierKey | "tout">("tout");

  const pieces = useMemo(
    () => ITEMS.filter((p) => active === "tout" || p.m === active),
    [active]
  );

  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      <SiteHeader active="/catalogue" />

      <div style={{ padding: "clamp(40px,5vw,72px) clamp(20px,3.2vw,40px) clamp(20px,2.4vw,30px)" }}>
        <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>
          CATALOGUE — {ITEMS.length} RÉFÉRENCES
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
          Chaque métier, sa pièce
        </div>
        <div
          style={{
            font: "500 14px/1.65 var(--font-body)",
            color: "rgba(26,23,20,.62)",
            maxWidth: 520,
            marginTop: 18,
          }}
        >
          Photographie produit : chaque pièce est présentée seule, sur fond
          neutre, pour juger des coutures, poches, zips et bandes. Cliquez
          pour la fiche technique. Le chiffrage se fait après échange.
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "30px 0 0" }}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className="rv-filter-btn"
              data-active={active === f.key}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))",
          gap: "clamp(14px,1.6vw,22px)",
          padding: "0 clamp(20px,3.2vw,40px) clamp(48px,6vw,84px)",
        }}
      >
        {pieces.map((p) => {
          const im = product(p.slot);
          return (
            <Link
              key={p.slot}
              href={`/piece?ref=${p.slot}`}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <div
                style={{
                  position: "relative",
                  height: "clamp(250px,25vw,320px)",
                  background: "transparent",
                  padding: "clamp(16px,1.8vw,26px)",
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
                <span
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    background: "#FBF8F2",
                    padding: "7px 10px",
                    font: "italic 700 9.5px/1 var(--font-body)",
                    letterSpacing: ".16em",
                    color: "rgba(26,23,20,.6)",
                    pointerEvents: "none",
                  }}
                >
                  {LABELS[p.m]}
                </span>
              </div>
              <div style={{ height: 1, background: "#1A1714" }} />
              <div style={{ font: "700 14px/1.3 var(--font-body)" }}>{p.name}</div>
              <div style={{ font: "500 12px/1.5 var(--font-body)", color: "rgba(26,23,20,.6)" }}>
                {p.matiere}
              </div>
              <div
                style={{
                  font: "italic 600 10px/1.5 var(--font-body)",
                  letterSpacing: ".12em",
                  color: "#C40017",
                }}
              >
                VOIR LA FICHE →
              </div>
            </Link>
          );
        })}
      </div>

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
            fontSize: "clamp(30px,4.6vw,60px)",
            lineHeight: 1.04,
            letterSpacing: "-.028em",
            textTransform: "uppercase",
          }}
        >
          Équipons
          <br />
          votre équipe
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "flex-start",
            font: "italic 700 10.5px/1 var(--font-body)",
            letterSpacing: ".18em",
          }}
        >
          <span style={{ color: "rgba(231,225,213,.6)" }}>+212 5 22 00 00 00</span>
          <a
            href="mailto:m.moungid@rougevif.ma"
            style={{ color: "rgba(231,225,213,.6)", padding: "8px 0", display: "inline-block" }}
          >
            M.MOUNGID@ROUGEVIF.MA
          </a>
          <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "16px 30px", fontSize: 11 }}>
            DEMANDER UN DEVIS →
          </Link>
        </div>
      </div>
    </div>
  );
}
