import Link from "next/link";

const NAV = [
  { href: "/catalogue", label: "CATALOGUE" },
  { href: "/metiers", label: "MÉTIERS" },
  { href: "/sur-mesure", label: "SUR-MESURE" },
  { href: "/atelier", label: "ATELIER" },
];

export default function SiteHeader({ active }: { active?: string }) {
  return (
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
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: "-.02em",
        }}
      >
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
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="rv-link"
            style={{
              padding: "11px 0",
              display: "inline-block",
              color: active === n.href ? "#E2001A" : undefined,
            }}
          >
            {n.label}
          </Link>
        ))}
      </div>
      <Link
        href="/contact"
        className="rv-btn rv-btn-dark"
        style={{ padding: "13px 24px" }}
      >
        DEVIS EN 48 H
      </Link>
    </div>
  );
}
