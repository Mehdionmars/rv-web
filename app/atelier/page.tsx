import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Atelier — Rougevif",
};

const MACHINES = [
  {
    src: "/uploads/Customized%20Uniforms%20Manufacturers%20in%20Bangalore%20_%20Komal%20Uniforms.jpg",
    alt: "Ligne de piquage",
  },
  {
    src: "https://images.pexels.com/photos/4492077/pexels-photo-4492077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Surjeteuse",
  },
  {
    src: "https://images.pexels.com/photos/30378380/pexels-photo-30378380.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Broderie traditionnelle marocaine",
  },
];

const STATS = [
  { n: "2014", l: "PREMIÈRE SÉRIE" },
  { n: "180", l: "ENTREPRISES ÉQUIPÉES" },
  { n: "18", l: "POSTES DE PIQUAGE" },
  { n: "5 ans", l: "RÉASSORT GARANTI" },
];

export default function AtelierPage() {
  return (
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      <SiteHeader active="/atelier" />

      <div
        style={{
          position: "relative",
          minHeight: "min(560px,70vw)",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          background: "#1A1714",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/uploads/10439515-hd_1920_1080_25fps.mp4"
            poster="/uploads/Customized%20Uniforms%20Manufacturers%20in%20Bangalore%20_%20Komal%20Uniforms.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(transparent 35%,rgba(26,23,20,.88))",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "clamp(40px,5vw,64px) clamp(20px,3.2vw,40px)", color: "#FBF8F2" }}>
          <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#E2001A" }}>
            RUE IBN BATTOUTA · AÏN SEBAÂ · CASABLANCA
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px,5.6vw,74px)",
              lineHeight: 1.04,
              letterSpacing: "-.025em",
              textTransform: "uppercase",
              margin: "16px 0 0",
              maxWidth: 900,
            }}
          >
            42 personnes, un seul toit
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "clamp(20px,3vw,40px)",
          padding: "clamp(36px,4.5vw,64px) clamp(20px,3.2vw,40px)",
        }}
      >
        <div style={{ font: "500 15px/1.75 var(--font-body)", color: "rgba(26,23,20,.7)" }}>
          Coupe, couture, broderie et marquage sont réunis dans un même
          bâtiment. Vous voyez le vêtement naître, vous le corrigez avant la
          série — et vous savez qui l’a cousu.
        </div>
        <div style={{ font: "500 15px/1.75 var(--font-body)", color: "rgba(26,23,20,.7)" }}>
          Le parc machines tourne six jours sur sept : piqueuses plates,
          surjeteuses cinq fils, recouvreuses, brodeuses douze têtes et
          presses de marquage. Rien n’est sous-traité hors de Casablanca.
        </div>
      </div>

      <div style={{ background: "#1A1714", color: "#E7E1D5", padding: "clamp(36px,4.5vw,64px) clamp(20px,3.2vw,40px)" }}>
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
          Nos machines de confection
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
            marginTop: 28,
          }}
        >
          {MACHINES.map((m) => (
            <div key={m.src} style={{ height: "clamp(210px,26vw,330px)", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            marginTop: 32,
            borderTop: "1px solid rgba(231,225,213,.24)",
          }}
        >
          {STATS.map((s) => (
            <div key={s.l} style={{ padding: "18px 0" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-.015em" }}>
                {s.n}
              </div>
              <div style={{ font: "italic 700 9.5px/1 var(--font-body)", letterSpacing: ".18em", color: "rgba(231,225,213,.6)", marginTop: 7 }}>
                {s.l}
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
          Venez voir l’atelier
        </div>
        <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "17px 32px" }}>
          PRENDRE RENDEZ-VOUS →
        </Link>
      </div>
    </div>
  );
}
