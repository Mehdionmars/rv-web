import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Sur-mesure — Rougevif",
};

const STEPS = [
  {
    n: "01",
    title: "Visite et relevé de postes",
    text: "Nous venons voir les gestes réels : ports de charge, accroupissements, températures, contraintes d’hygiène.",
  },
  {
    n: "02",
    title: "Choix des matières",
    text: "Échantillons remis en main propre : grammages, traitements, comportement au lavage industriel.",
  },
  {
    n: "03",
    title: "Prototype porté",
    text: "Deux semaines pour un premier exemplaire, testé une semaine complète par vos équipes avant validation.",
  },
  {
    n: "04",
    title: "Série et marquage",
    text: "Coupe, couture, broderie et marquage réalisés sur place, puis livraison par tailles nominatives.",
  },
];

const INFO = [
  {
    title: "PERSONNALISATION",
    text: "Broderie poitrine et dos, sérigraphie, transfert haute ténacité, passepoils et empiècements aux couleurs de l’enseigne, étiquettes nominatives tissées.",
  },
  {
    title: "QUANTITÉS",
    text: "À partir de 25 pièces par référence en sur-mesure. Réassort garanti cinq ans sur les modèles validés, sans minimum de commande.",
  },
  {
    title: "SUIVI",
    text: "Un interlocuteur unique, une fiche technique archivée par référence, et vos tailles conservées pour les nouveaux arrivants.",
  },
];

export default function SurMesurePage() {
  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      <SiteHeader active="/sur-mesure" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "clamp(20px,3vw,44px)",
          alignItems: "center",
          padding: "clamp(40px,5vw,72px) clamp(20px,3.2vw,40px)",
        }}
      >
        <div>
          <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>
            SUR-MESURE
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px,5vw,66px)",
              lineHeight: 1.04,
              letterSpacing: "-.02em",
              textTransform: "uppercase",
              margin: "18px 0 0",
            }}
          >
            Votre vestiaire, dessiné avec vous
          </div>
          <div
            style={{
              font: "500 15px/1.7 var(--font-body)",
              color: "rgba(26,23,20,.68)",
              maxWidth: 520,
              marginTop: 20,
            }}
          >
            Nous partons de vos postes, pas d’un catalogue. Prise de mesures
            sur site, prototype validé par les porteurs, puis série lancée
            dans notre atelier d’Aïn Sebaâ.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "16px 30px" }}>
              LANCER UN PROJET
            </Link>
            <Link href="/catalogue" className="rv-btn rv-btn-outline" style={{ padding: "16px 30px" }}>
              PARTIR DU CATALOGUE
            </Link>
          </div>
        </div>
        <div style={{ height: "clamp(260px,30vw,420px)", background: "#FBF8F2", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/uploads/imgi_22_pointing-sketch.jpg"
            alt="Prise de mesures sur site"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(26,23,20,.16)", padding: "clamp(36px,4.5vw,64px) clamp(20px,3.2vw,40px)" }}>
        <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>
          LE DÉROULÉ — 6 À 8 SEMAINES
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "clamp(16px,2vw,26px)",
            marginTop: 28,
          }}
        >
          {STEPS.map((s) => (
            <div key={s.n} style={{ borderTop: "2px solid #1A1714", paddingTop: 16 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, letterSpacing: "-.015em" }}>
                {s.n}
              </div>
              <div style={{ font: "700 14px/1.35 var(--font-body)", marginTop: 10 }}>{s.title}</div>
              <div style={{ font: "500 12.5px/1.6 var(--font-body)", color: "rgba(26,23,20,.6)", marginTop: 8 }}>
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#1A1714", color: "#E7E1D5", padding: "clamp(40px,5vw,68px) clamp(20px,3.2vw,40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "clamp(20px,3vw,40px)",
          }}
        >
          {INFO.map((b) => (
            <div key={b.title}>
              <div style={{ font: "italic 800 10px/1 var(--font-body)", letterSpacing: ".2em", color: "#E2001A" }}>
                {b.title}
              </div>
              <div style={{ font: "500 13.5px/1.7 var(--font-body)", color: "rgba(231,225,213,.72)", marginTop: 14 }}>
                {b.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "clamp(40px,5vw,68px) clamp(20px,3.2vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(26px,3.6vw,46px)",
            lineHeight: 1.04,
            letterSpacing: "-.02em",
            textTransform: "uppercase",
            maxWidth: 620,
          }}
        >
          Décrivez vos postes, nous revenons sous 48 h
        </div>
        <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "17px 32px" }}>
          DEMANDER UN DEVIS →
        </Link>
      </div>
    </div>
  );
}
