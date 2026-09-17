"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { ITEMS, LABELS, MetierKey, product } from "@/lib/data";

const WORDS = ["les mécanos.", "les chefs.", "les soudeurs.", "les agents."];

const METIER_PREVIEW = [
  {
    key: "industrie",
    title: "Industrie",
    sub: "COMBINAISONS · PARKAS · HAUTE VISIBILITÉ",
    img: "https://images.pexels.com/photos/4489758/pexels-photo-4489758.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "cuisine",
    title: "Cuisine",
    sub: "VESTES CROISÉES · TABLIERS CUIR",
    img: "https://images.pexels.com/photos/4253133/pexels-photo-4253133.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    key: "service",
    title: "Service",
    sub: "POLOS · BLOUSES · BLAZERS",
    img: "https://images.pexels.com/photos/8629106/pexels-photo-8629106.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const MACHINES = [
  {
    src: "/uploads/Customized%20Uniforms%20Manufacturers%20in%20Bangalore%20_%20Komal%20Uniforms.jpg",
    alt: "Ligne de piquage",
  },
  {
    src: "https://images.pexels.com/photos/5894261/pexels-photo-5894261.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Détail machine industrielle",
  },
  {
    src: "https://images.pexels.com/photos/30378380/pexels-photo-30378380.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Broderie traditionnelle marocaine — Rabat",
  },
];

const STATS = [
  { n: "2014", l: "PREMIÈRE SÉRIE" },
  { n: "180", l: "ENTREPRISES ÉQUIPÉES" },
  { n: "48 h", l: "DEVIS CHIFFRÉ" },
  { n: "5 ans", l: "RÉASSORT GARANTI" },
];

const FILTERS: { key: MetierKey | "tout"; label: string }[] = [
  { key: "tout", label: "TOUT VOIR" },
  ...(Object.keys(LABELS) as MetierKey[]).map((k) => ({ key: k, label: LABELS[k] })),
];

function useReveal() {
  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.querySelectorAll(".rv-reveal").forEach((el) => el.classList.add("rv-in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("rv-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -7% 0px" }
    );
    document.querySelectorAll(".rv-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function HomePage() {
  const [cookies, setCookies] = useState<string | null>("accepted");
  const [loaderDone, setLoaderDone] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [active, setActive] = useState<MetierKey | "tout">("tout");

  useReveal();

  useEffect(() => {
    try {
      setCookies(localStorage.getItem("rv-cookies"));
    } catch {
      setCookies("accepted");
    }
    const t = setTimeout(() => setLoaderDone(true), 1300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const pieces = useMemo(
    () => ITEMS.filter((p) => active === "tout" || p.m === active),
    [active]
  );

  function acceptCookies() {
    try {
      localStorage.setItem("rv-cookies", "accepted");
    } catch {}
    setCookies("accepted");
  }
  function refuseCookies() {
    try {
      localStorage.setItem("rv-cookies", "refused");
    } catch {}
    setCookies("refused");
  }

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
    <div className="rv-site" style={{ width: "100%", background: "#E7E1D5", color: "#1A1714" }}>
      {cookies === null && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 80,
            background: "#1A1714",
            color: "#E7E1D5",
            padding: "18px clamp(16px,3vw,32px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            borderTop: "2px solid #E2001A",
          }}
        >
          <div style={{ font: "500 12.5px/1.6 var(--font-body)", maxWidth: 620 }}>
            Nous utilisons des cookies pour mesurer l’audience du site et
            retenir vos préférences. Aucun suivi publicitaire.
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button
              onClick={refuseCookies}
              style={{
                background: "transparent",
                border: "1px solid rgba(231,225,213,.45)",
                color: "#E7E1D5",
                padding: "13px 22px",
                font: "italic 800 10.5px/1 var(--font-body)",
                letterSpacing: ".18em",
                cursor: "pointer",
              }}
            >
              REFUSER
            </button>
            <button onClick={acceptCookies} className="rv-btn rv-btn-primary" style={{ padding: "13px 24px" }}>
              ACCEPTER
            </button>
          </div>
        </div>
      )}

      {!loaderDone && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "#0B0B0C", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(20px,4vw,48px)", transition: "opacity .6s ease" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(20px,3vw,30px)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,6.4vw,84px)", lineHeight: 1, letterSpacing: "-.03em", textTransform: "uppercase", whiteSpace: "nowrap", color: "#F7F7F8" }}>
              rougevif<span style={{ color: "#E2001A" }}>.</span>
            </div>
            <div style={{ width: "min(320px,62vw)", height: 1, background: "rgba(247,247,248,.16)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: "100%", background: "#F7F7F8", transformOrigin: "left", animation: "rv-loaderbar 1.2s ease forwards" }} />
            </div>
          </div>
        </div>
      )}

      <div style={{ background: "#E2001A", color: "#FBF8F2", overflow: "hidden", whiteSpace: "nowrap", padding: "9px 0" }}>
        <div
          style={{
            display: "inline-block",
            font: "italic 800 11px/1 var(--font-body)",
            letterSpacing: ".22em",
            animation: "rv-marquee 26s linear infinite",
          }}
        >
          VÊTEMENT DE TRAVAIL · CASABLANCA · SANFORISÉ 320 G/M² · COUTURES
          TRIPLES · RÉASSORT 5 ANS · VÊTEMENT DE TRAVAIL · CASABLANCA ·
          SANFORISÉ 320 G/M² · COUTURES TRIPLES · RÉASSORT 5 ANS ·
        </div>
      </div>

      <SiteHeader />

      <div
        style={{
          position: "relative",
          minHeight: "min(780px,88vw)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#1A1714",
        }}
      >
        <div style={{ position: "absolute", inset: "-8% -3%" }}>
          <div style={{ width: "100%", height: "100%", animation: "rv-kb 22s ease-in-out infinite alternate" }}>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src="/uploads/10439515-hd_1920_1080_25fps.mp4"
              poster="https://images.pexels.com/photos/4489776/pexels-photo-4489776.jpeg?auto=compress&cs=tinysrgb&w=1600"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(102deg,rgba(26,23,20,.9) 0%,rgba(26,23,20,.42) 52%,rgba(26,23,20,.72) 100%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 45%,rgba(26,23,20,.86))", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "clamp(56px,8vw,96px) clamp(20px,3.2vw,40px) clamp(28px,3vw,36px)", color: "#FBF8F2" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11, font: "italic 800 11px/1 var(--font-body)", letterSpacing: ".24em" }}>
            <span style={{ width: 8, height: 8, background: "#E2001A", borderRadius: "50%", animation: "rv-pulse 2.4s ease-in-out infinite" }} />
            <span>ATELIER OUVERT · AÏN SEBAÂ, CASABLANCA</span>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(44px,9.6vw,132px)", lineHeight: 0.84, letterSpacing: "-.015em", textTransform: "uppercase", margin: "clamp(18px,2.4vw,26px) 0 0" }}>
            <div>Le travail</div>
            <div style={{ color: "#E2001A" }}>n’attend pas</div>
            <div style={{ fontSize: "clamp(30px,7vw,104px)" }}>
              <span style={{ display: "inline-block", transition: "opacity .28s ease,transform .28s cubic-bezier(.2,.85,.2,1)", color: "#FBF8F2" }}>
                {WORDS[wordIndex]}
              </span>
            </div>
          </div>
          <div style={{ height: 3, background: "#E2001A", width: "min(420px,60%)", margin: "clamp(22px,3vw,34px) 0 0" }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginTop: "clamp(20px,2.6vw,28px)" }}>
            <div style={{ font: "500 clamp(13px,1.2vw,15.5px)/1.6 var(--font-body)", maxWidth: 440, color: "rgba(251,248,242,.78)" }}>
              Sergé de coton sanforisé 320 g/m², coutures triples, rivets
              laiton. Coupé, cousu et marqué chez nous — puis porté six jours
              sur sept.
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="rv-btn rv-btn-primary">DEMANDER UN DEVIS</Link>
              <Link
                href="/atelier"
                className="rv-btn"
                style={{ border: "1px solid rgba(251,248,242,.45)", color: "#FBF8F2" }}
              >
                VOIR L’ATELIER
              </Link>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", borderTop: "1px solid rgba(251,248,242,.24)", color: "#FBF8F2" }}>
          {STATS.map((s, i) => (
            <div
              key={s.l}
              style={{
                padding: "18px clamp(20px,3.2vw,40px)",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(251,248,242,.24)" : undefined,
                display: i === STATS.length - 1 ? "flex" : undefined,
                alignItems: i === STATS.length - 1 ? "center" : undefined,
                justifyContent: i === STATS.length - 1 ? "space-between" : undefined,
                gap: i === STATS.length - 1 ? 14 : undefined,
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-.015em" }}>
                  {s.n}
                </div>
                <div style={{ font: "italic 700 9.5px/1 var(--font-body)", letterSpacing: ".18em", color: "rgba(251,248,242,.6)", marginTop: 7 }}>
                  {s.l}
                </div>
              </div>
              {i === STATS.length - 1 && (
                <span style={{ fontSize: 20, color: "#E2001A", animation: "rv-bob 2.2s ease-in-out infinite" }}>↓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "relative", color: "#FBF8F2", padding: "clamp(44px,6vw,78px) clamp(20px,3.2vw,40px)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: -2, pointerEvents: "none" }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src="/uploads/10439515-hd_1920_1080_25fps.mp4"
            poster="https://images.pexels.com/photos/4489776/pexels-photo-4489776.jpeg?auto=compress&cs=tinysrgb&w=1600"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, zIndex: -1, background: "linear-gradient(100deg,rgba(26,23,20,.86),rgba(26,23,20,.62))", pointerEvents: "none" }} />
        <div className="rv-reveal" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(34px,5.7vw,76px)", lineHeight: 0.94, letterSpacing: "-.028em", maxWidth: 1000 }}>
          On ne s’habille pas pour travailler. On s’équipe.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 30, marginTop: 52, borderTop: "2px solid #FBF8F2", paddingTop: 22 }}>
          {[
            "Sergé de coton sanforisé, teint en pièce : la couleur tient au lavage industriel.",
            "Coutures triples et rivets laiton posés aux points de fatigue réels du poste.",
            "Prise de mesures sur site, prototype en deux semaines, réassort garanti cinq ans.",
          ].map((t) => (
            <div key={t} className="rv-reveal" style={{ display: "flex", gap: 14, alignItems: "flex-start", maxWidth: 340 }}>
              <span style={{ flex: "none", marginTop: 2, width: 26, height: 26, borderRadius: "50%", border: "1.4px solid #E2001A" }} />
              <span style={{ font: "500 14px/1.6 var(--font-body)" }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        {METIER_PREVIEW.map((m, i) => (
          <Link
            key={m.key}
            href="/metiers"
            style={{
              position: "relative",
              height: "clamp(320px,40vw,520px)",
              overflow: "hidden",
              cursor: "pointer",
              display: "block",
              borderRight: i < METIER_PREVIEW.length - 1 ? "1px solid rgba(26,23,20,.18)" : undefined,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.img} alt={m.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 35%,rgba(26,23,20,.9))", pointerEvents: "none" }} />
            <div style={{ position: "absolute", left: 26, right: 26, bottom: 26, pointerEvents: "none", color: "#FBF8F2" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(20px,3.4vw,44px)", lineHeight: 1.04, letterSpacing: "-.02em", textTransform: "uppercase" }}>
                {m.title}
              </div>
              <div style={{ font: "italic 700 10px/1 var(--font-body)", letterSpacing: ".18em", color: "#FBF8F2", marginTop: 12 }}>
                {m.sub}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
        <div style={{ padding: "clamp(44px,6vw,80px) clamp(20px,3.2vw,40px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>L’ATELIER</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,52px)", lineHeight: 0.94, letterSpacing: "-.02em", margin: "20px 0 0", textTransform: "uppercase" }}>
            42 personnes, un seul toit
          </div>
          <div style={{ font: "500 14.5px/1.65 var(--font-body)", color: "rgba(26,23,20,.62)", maxWidth: 420, marginTop: 24 }}>
            Coupe, couture, broderie et marquage réunis rue Ibn Battouta. Vous
            voyez le vêtement naître, vous le corrigez avant la série.
          </div>
          <Link href="/atelier" className="rv-btn" style={{ alignSelf: "flex-start", marginTop: 34, border: "2px solid #E2001A", color: "#1A1714" }}>
            VISITER L’ATELIER
          </Link>
        </div>
        <div style={{ height: "100%", minHeight: "clamp(300px,40vw,480px)", overflow: "hidden" }}>
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
      </div>

      <div style={{ background: "#E7E1D5", color: "#1A1714", padding: "clamp(44px,6vw,84px) clamp(20px,3.2vw,40px)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div>
            <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>CATALOGUE</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.4vw,58px)", lineHeight: 1.04, letterSpacing: "-.02em", textTransform: "uppercase", margin: "18px 0 0" }}>
              Chaque métier, sa pièce
            </div>
          </div>
          <div style={{ font: "500 13.5px/1.6 var(--font-body)", color: "rgba(26,23,20,.62)", maxWidth: 380 }}>
            Galerie des pièces que nous confectionnons. Matières, coupes et
            finitions détaillées — le chiffrage se fait sur mesure, après
            échange.
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "34px 0 0" }}>
          {FILTERS.map((f) => (
            <button key={f.key} className="rv-filter-btn" data-active={active === f.key} onClick={() => setActive(f.key)}>
              {f.label}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "clamp(14px,1.6vw,22px)", marginTop: 30 }}>
          {pieces.map((p) => {
            const im = product(p.slot);
            return (
              <Link key={p.slot} href={`/piece?ref=${p.slot}`} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ position: "relative", aspectRatio: "4/5", background: "#FBF8F2", border: "1px solid rgba(26,23,20,.14)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={im.src} alt={im.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: 0, left: 0, background: "#FBF8F2", padding: "7px 10px", font: "italic 700 9.5px/1 var(--font-body)", letterSpacing: ".16em", color: "rgba(26,23,20,.6)", pointerEvents: "none" }}>
                    {LABELS[p.m]}
                  </span>
                </div>
                <div style={{ height: 1, background: "#1A1714" }} />
                <div style={{ font: "700 14px/1.3 var(--font-body)", letterSpacing: "-.005em" }}>{p.name}</div>
                <div style={{ font: "500 12px/1.5 var(--font-body)", color: "rgba(26,23,20,.6)" }}>{p.matiere}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((tg) => (
                    <span key={tg} className="rv-tag">{tg}</span>
                  ))}
                </div>
                <div style={{ font: "italic 600 10px/1.5 var(--font-body)", letterSpacing: ".12em", color: "#C40017" }}>{p.tailles}</div>
              </Link>
            );
          })}
        </div>
      </div>

      <div style={{ background: "#1A1714", color: "#E7E1D5", padding: "clamp(44px,6vw,74px) clamp(20px,3.2vw,40px)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 30, marginBottom: 34 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px,3.6vw,46px)", lineHeight: 1.04, letterSpacing: "-.02em", textTransform: "uppercase", maxWidth: 620 }}>
            Nos machines de confection
          </div>
          <div style={{ font: "500 13.5px/1.6 var(--font-body)", color: "rgba(231,225,213,.62)", maxWidth: 360 }}>
            Piqueuses plates, surjeteuses cinq fils, recouvreuses, brodeuses
            douze têtes et presses de marquage : tout le parc tourne sous le
            même toit.
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
          {MACHINES.map((m) => (
            <div key={m.src} style={{ height: "clamp(210px,26vw,330px)", overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.src} alt={m.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "#E7E1D5", color: "#1A1714", padding: "clamp(44px,6vw,80px) clamp(20px,3.2vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(28px,4vw,56px)", alignItems: "start" }}>
          <div>
            <div style={{ font: "italic 800 11.5px/1 var(--font-body)", letterSpacing: ".2em", color: "#C40017" }}>CONTACT</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.04, letterSpacing: "-.02em", textTransform: "uppercase", margin: "18px 0 0" }}>
              Dites-nous qui vous habillez
            </div>
            <div style={{ font: "500 14px/1.65 var(--font-body)", color: "rgba(26,23,20,.62)", maxWidth: 400, marginTop: 20 }}>
              Décrivez vos postes et vos effectifs : nous revenons vers vous
              sous 48 h avec un devis chiffré et un échantillon de tissu.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 26, font: "italic 700 10.5px/1.5 var(--font-body)", letterSpacing: ".16em" }}>
              <a href="mailto:m.moungid@rougevif.ma" style={{ color: "#E2001A", padding: "6px 0", display: "inline-block" }}>M.MOUNGID@ROUGEVIF.MA</a>
              <a href="mailto:rougevif.vif@gmail.com" style={{ color: "#E2001A", padding: "6px 0", display: "inline-block" }}>ROUGEVIF.VIF@GMAIL.COM</a>
              <span style={{ color: "rgba(26,23,20,.55)" }}>+212 5 22 00 00 00</span>
              <span style={{ color: "rgba(26,23,20,.55)" }}>RUE IBN BATTOUTA · AÏN SEBAÂ · CASABLANCA</span>
            </div>
          </div>
          <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, background: "#FBF8F2", padding: "clamp(22px,2.6vw,32px)", border: "1px solid rgba(26,23,20,.16)" }}>
            <input name="societe" placeholder="Société" required className="rv-field" style={{ gridColumn: "1/-1" }} />
            <input name="nom" placeholder="Nom et prénom" required className="rv-field" />
            <input name="telephone" placeholder="Téléphone" className="rv-field" />
            <input name="email" type="email" placeholder="E-mail professionnel" required className="rv-field" />
            <input name="effectif" placeholder="Effectif à équiper" className="rv-field" />
            <select name="metier" className="rv-field" style={{ gridColumn: "1/-1" }}>
              <option>Industrie · combinaisons, parkas, haute visibilité</option>
              <option>Cuisine · vestes croisées, tabliers</option>
              <option>Service · polos, blouses, blazers</option>
              <option>Sur-mesure · autre besoin</option>
            </select>
            <textarea name="message" rows={4} placeholder="Postes concernés, contraintes, marquage souhaité…" className="rv-field" style={{ gridColumn: "1/-1", resize: "vertical", lineHeight: 1.55 }} />
            <div style={{ gridColumn: "1/-1", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 14 }}>
              <span style={{ font: "italic 600 10px/1.5 var(--font-body)", letterSpacing: ".12em", color: "rgba(26,23,20,.5)" }}>
                ENVOYÉ À M.MOUNGID@ROUGEVIF.MA &amp; ROUGEVIF.VIF@GMAIL.COM
              </span>
              <button type="submit" className="rv-btn rv-btn-primary" style={{ padding: "16px 32px" }}>ENVOYER LA DEMANDE →</button>
            </div>
          </form>
        </div>
      </div>

      <div style={{ background: "#1A1714", color: "#E7E1D5", padding: "clamp(44px,6vw,70px) clamp(20px,3.2vw,40px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 34 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,5vw,66px)", lineHeight: 1.04, letterSpacing: "-.028em", textTransform: "uppercase" }}>
          Équipons<br />votre équipe
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end", font: "italic 700 10.5px/1 var(--font-body)", letterSpacing: ".18em" }}>
          <span style={{ color: "rgba(231,225,213,.6)" }}>+212 5 22 00 00 00</span>
          <a href="mailto:m.moungid@rougevif.ma" style={{ color: "rgba(231,225,213,.6)", padding: "8px 0", display: "inline-block" }}>M.MOUNGID@ROUGEVIF.MA</a>
          <a href="mailto:rougevif.vif@gmail.com" style={{ color: "rgba(231,225,213,.6)", padding: "8px 0", display: "inline-block" }}>ROUGEVIF.VIF@GMAIL.COM</a>
          <Link href="/contact" className="rv-btn rv-btn-primary" style={{ padding: "18px 34px", fontSize: 11 }}>DEMANDER UN DEVIS →</Link>
        </div>
      </div>
    </div>
  );
}
