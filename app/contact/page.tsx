"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const METIER_OPTIONS = [
  "Industrie · combinaisons, parkas, haute visibilité",
  "Protection · EPI, gilets chantier, sous-couches",
  "Cuisine · vestes croisées, tabliers",
  "Service · polos, blouses, blazers",
  "Logistique · softshells, sweats, cargos",
  "Agroalimentaire · blouses HACCP",
  "Scolaire · uniformes d’établissement",
  "Sur-mesure · autre besoin",
];

export default function ContactPage() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const g = (k: string) => (d.get(k) as string) || "—";
    const body = [
      "Société : " + g("societe"),
      "Contact : " + g("nom"),
      "Téléphone : " + g("telephone"),
      "E-mail : " + g("email"),
      "Effectif à équiper : " + g("effectif"),
      "Besoin : " + g("metier"),
      "",
      g("message"),
    ].join("\n");
    window.location.href =
      "mailto:m.moungid@rougevif.ma" +
      "?cc=rougevif.vif@gmail.com" +
      "&subject=" + encodeURIComponent("Demande de devis — " + g("societe")) +
      "&body=" + encodeURIComponent(body);
  }

  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 18,
          padding: "20px clamp(20px,3.2vw,40px)",
          borderBottom: "1px solid rgba(26,23,20,.16)",
        }}
      >
        <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, letterSpacing: "-.02em" }}>
          rougevif<span style={{ color: "#E2001A" }}>.</span>
        </Link>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "4px 22px",
            font: "italic 700 10.5px/1 var(--font-body)",
            letterSpacing: ".2em",
            margin: "-11px 0",
            whiteSpace: "nowrap",
          }}
        >
          <Link href="/catalogue" className="rv-link" style={{ padding: "11px 0", display: "inline-block" }}>
            CATALOGUE
          </Link>
          <Link href="/metiers" className="rv-link" style={{ padding: "11px 0", display: "inline-block" }}>
            MÉTIERS
          </Link>
          <Link href="/sur-mesure" className="rv-link" style={{ padding: "11px 0", display: "inline-block" }}>
            SUR-MESURE
          </Link>
          <Link href="/atelier" className="rv-link" style={{ padding: "11px 0", display: "inline-block" }}>
            ATELIER
          </Link>
        </div>
        <span style={{ font: "italic 800 10.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>
          DEVIS EN 48 H
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "start",
          padding: "clamp(40px,5vw,76px) clamp(20px,3.2vw,40px)",
        }}
      >
        <div>
          <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>
            CONTACT
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(30px,4.4vw,58px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              margin: "18px 0 0",
            }}
          >
            Dites-nous qui vous habillez
          </div>
          <div style={{ font: "500 14.5px/1.7 var(--font-body)", color: "rgba(26,23,20,.66)", maxWidth: 440, marginTop: 20 }}>
            Décrivez vos postes et vos effectifs : nous revenons vers vous
            sous 48 h avec un devis chiffré et un échantillon de tissu.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: 28,
              font: "italic 700 10.5px/1.5 var(--font-body)",
              letterSpacing: ".16em",
            }}
          >
            <a href="mailto:m.moungid@rougevif.ma" style={{ color: "#C40017", padding: "6px 0", display: "inline-block" }}>
              M.MOUNGID@ROUGEVIF.MA
            </a>
            <a href="mailto:rougevif.vif@gmail.com" style={{ color: "#C40017", padding: "6px 0", display: "inline-block" }}>
              ROUGEVIF.VIF@GMAIL.COM
            </a>
            <span style={{ color: "rgba(26,23,20,.55)" }}>+212 5 22 00 00 00</span>
            <span style={{ color: "rgba(26,23,20,.55)" }}>RUE IBN BATTOUTA · AÏN SEBAÂ · CASABLANCA</span>
            <span style={{ color: "rgba(26,23,20,.55)" }}>LUNDI — SAMEDI · 8 H 30 → 18 H</span>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 14,
            background: "#FBF8F2",
            padding: "clamp(22px,2.6vw,32px)",
            border: "1px solid rgba(26,23,20,.16)",
          }}
        >
          <input name="societe" placeholder="Société" required className="rv-field" style={{ gridColumn: "1/-1" }} />
          <input name="nom" placeholder="Nom et prénom" required className="rv-field" />
          <input name="telephone" placeholder="Téléphone" className="rv-field" />
          <input name="email" type="email" placeholder="E-mail professionnel" required className="rv-field" />
          <input name="effectif" placeholder="Effectif à équiper" className="rv-field" />
          <select name="metier" className="rv-field" style={{ gridColumn: "1/-1" }}>
            {METIER_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <textarea
            name="message"
            rows={5}
            placeholder="Postes concernés, contraintes, marquage souhaité…"
            className="rv-field"
            style={{ gridColumn: "1/-1", resize: "vertical", lineHeight: 1.55 }}
          />
          <div
            style={{
              gridColumn: "1/-1",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
            }}
          >
            <span style={{ font: "italic 600 10px/1.5 var(--font-body)", letterSpacing: ".12em", color: "rgba(26,23,20,.5)" }}>
              ENVOYÉ À M.MOUNGID@ROUGEVIF.MA &amp; ROUGEVIF.VIF@GMAIL.COM
            </span>
            <button type="submit" className="rv-btn rv-btn-primary" style={{ padding: "16px 32px" }}>
              ENVOYER LA DEMANDE →
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          background: "#1A1714",
          color: "#E7E1D5",
          padding: "clamp(32px,4vw,56px) clamp(20px,3.2vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          font: "italic 700 10.5px/1 var(--font-body)",
          letterSpacing: ".18em",
        }}
      >
        <Link href="/" style={{ color: "#E7E1D5" }}>
          ← RETOUR À L’ACCUEIL
        </Link>
        <Link href="/catalogue" style={{ color: "rgba(231,225,213,.6)" }}>
          VOIR LE CATALOGUE
        </Link>
      </div>
    </div>
  );
}
