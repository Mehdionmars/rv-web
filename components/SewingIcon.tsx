"use client";

import { useEffect, useId, useRef } from "react";

/**
 * Animated sewing pictograms, redrawn as SVG so they take the brand red
 * (currentColor) on a transparent background. The thread draws itself in
 * once the icon scrolls into view; needles, pins and bobbins then keep a
 * small idle motion. All motion stops under prefers-reduced-motion.
 */

export type SewingIconName =
  | "needle"
  | "needle-loop"
  | "pins"
  | "spool"
  | "bobbin"
  | "machine"
  | "machine-line"
  | "needle-curl"
  | "pattern"
  | "yarn"
  | "spool-line"
  | "spool-bob"
  | "needles"
  | "machine-outline";

/** Filled needle lying on the x axis, eye at the origin, tip at x = len. */
function needlePath(len: number, w: number) {
  const r = w / 2;
  return (
    `M ${-r * 1.4} 0 C ${-r * 1.4} ${-r * 1.6} ${r * 2} ${-r * 1.4} ${r * 4} ${-r} ` +
    `L ${len} 0 L ${r * 4} ${r} C ${r * 2} ${r * 1.4} ${-r * 1.4} ${r * 1.6} ${-r * 1.4} 0 Z ` +
    // the eye, cut out with evenodd
    `M ${r * 0.4} 0 C ${r * 0.4} ${-r * 0.45} ${r * 3.2} ${-r * 0.45} ${r * 3.2} 0 ` +
    `C ${r * 3.2} ${r * 0.45} ${r * 0.4} ${r * 0.45} ${r * 0.4} 0 Z`
  );
}

function Needle({ x, y, angle, len, w }: { x: number; y: number; angle: number; len: number; w: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path className="sw-needle" d={needlePath(len, w)} fillRule="evenodd" fill="currentColor" />
    </g>
  );
}

function Thread({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <path
      className="sw-thread"
      d={d}
      pathLength={1}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

/** Outline that draws itself in, like the thread. */
function Outline({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <path
      className="sw-outline"
      d={d}
      pathLength={1}
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

function Art({ name, uid }: { name: SewingIconName; uid: string }) {
  switch (name) {
    case "needle":
      return (
        <>
          <Thread d="M130 26 C104 16 70 6 52 14 C30 26 10 48 22 70 C34 92 72 80 100 62 C128 44 162 50 150 80 C140 108 94 110 72 120 C54 128 40 138 60 160 C80 182 110 182 130 196" />
          <Needle x={42} y={10} angle={45.8} len={206} w={8} />
        </>
      );
    case "needle-loop":
      return (
        <>
          <Thread d="M20 130 C14 90 30 20 70 15 C100 12 96 60 76 85 C56 110 40 130 60 135 C80 140 120 110 135 85 C145 66 155 55 163 62 C176 76 172 120 192 136" />
          <Needle x={6} y={40} angle={43} len={212} w={11} />
        </>
      );
    case "pins":
      return (
        <>
          {[31, 77, 123, 169].map((x, i) => (
            <path
              key={x}
              className="sw-pin"
              style={{ animationDelay: `${i * 0.12}s, ${0.9 + i * 0.25}s` }}
              d={`M${x - 3} 62 L${x - 10} 48 C${x - 16} 34 ${x - 10} 20 ${x} 20 C${x + 10} 20 ${x + 16} 34 ${x + 10} 48 L${x + 3} 62 L${x} 186 Z`}
            />
          ))}
        </>
      );
    case "spool":
      return (
        <>
          <ellipse className="sw-line" cx="92" cy="92" rx="48" ry="8" />
          {Array.from({ length: 13 }, (_, i) => {
            const y = 104 + i * 6.6;
            return (
              <path
                key={y}
                className="sw-wind"
                d={`M44 ${y} Q92 ${y + 5} 140 ${y}`}
                pathLength={1}
                style={{ animationDelay: `${0.05 * (12 - i)}s` }}
              />
            );
          })}
          <Thread d="M100 0 C84 20 94 46 120 60 C146 72 152 88 140 102 C132 112 120 114 112 110" delay={0.7} />
          <Needle x={128} y={58} angle={144} len={58} w={7} />
        </>
      );
    case "machine":
      return (
        <>
          <g className="sw-fill">
            {/* base plate */}
            <rect x="16" y="146" width="168" height="10" rx="2" fill="currentColor" />
            <rect x="28" y="156" width="144" height="7" fill="currentColor" />
            {/* body, with the open arch under the arm */}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M44 146 L44 84 C44 66 58 60 76 64 C104 70 116 70 134 62 L162 54 C172 51 176 58 176 68 L176 146 Z M80 146 L80 118 C80 104 90 98 104 98 L142 98 C149 98 152 103 152 110 L152 146 Z"
            />
            {/* handwheel */}
            <rect x="174" y="74" width="12" height="44" rx="5" fill="currentColor" />
            {/* spool pin and spool */}
            <rect x="132" y="44" width="4" height="12" fill="currentColor" />
            <rect x="126" y="30" width="16" height="16" rx="2" fill="currentColor" />
          </g>
          {/* needle bar going up and down */}
          <g className="sw-bar">
            <rect x="32" y="100" width="6" height="24" fill="currentColor" />
            <path d="M35 124 L35 140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <Thread d="M134 30 C134 18 112 14 96 22 C78 32 56 44 44 66 C36 80 35 92 35 100" delay={0.5} />
        </>
      );
    case "machine-line":
      return (
        <>
          <Outline d="M24 140 L24 60 C24 48 32 42 44 42 L166 42 C178 42 184 50 184 60 C184 70 178 76 166 76 L76 76 L76 42 M76 76 L104 140" />
          <Outline d="M18 140 L190 140 C190 150 184 154 176 154 L28 154 C22 154 18 150 18 140 Z" delay={0.4} />
          <g className="sw-bar">
            <rect className="sw-line" x="146" y="76" width="16" height="18" />
            <path className="sw-line" d="M154 94 L154 126" />
          </g>
        </>
      );
    case "needle-curl":
      return (
        <>
          <Thread d="M62 30 C42 16 10 22 12 48 C14 72 52 72 92 60 C120 52 152 58 166 80 C180 104 166 132 150 126 C134 120 140 86 168 56" />
          <Needle x={96} y={58} angle={126.5} len={140} w={10} />
        </>
      );
    case "pattern":
      return (
        <>
          <Outline d="M56 20 L140 20 L140 162 L56 162 Z" />
          <Outline d="M98 20 C100 40 112 54 140 58 M56 72 C68 106 74 132 72 162" delay={0.5} />
          <path className="sw-cut" d="M98 186 L40 186" />
          <g className="sw-scissors">
            <g className="sw-blade-a">
              <circle className="sw-line" cx="114" cy="194" r="5" />
              <path className="sw-line" d="M117 190 L136 170" />
            </g>
            <g className="sw-blade-b">
              <circle className="sw-line" cx="138" cy="194" r="5" />
              <path className="sw-line" d="M135 190 L116 170" />
            </g>
          </g>
        </>
      );
    case "yarn":
      return (
        <>
          <defs>
            <clipPath id={`${uid}-ball`}>
              <circle cx="92" cy="86" r="58" />
            </clipPath>
          </defs>
          <g className="sw-ball">
            <circle className="sw-line" cx="92" cy="86" r="62" />
            <g clipPath={`url(#${uid}-ball)`}>
              {[0, 14, 28, 42, 56].map((o, i) => (
                <path
                  key={o}
                  className="sw-wind"
                  d={`M${20 + o * 0.2} ${40 + o} C60 ${18 + o} 120 ${24 + o} 160 ${60 + o}`}
                  pathLength={1}
                  style={{ animationDelay: `${0.08 * i}s` }}
                />
              ))}
              {[0, 16, 32, 48].map((o, i) => (
                <path
                  key={`v${o}`}
                  className="sw-wind"
                  d={`M${70 + o} 20 C${48 + o} 60 ${52 + o} 110 ${84 + o} 152`}
                  pathLength={1}
                  style={{ animationDelay: `${0.4 + 0.08 * i}s` }}
                />
              ))}
            </g>
          </g>
          <Thread d="M136 132 C120 150 80 150 60 160 C44 168 40 178 56 182 C80 186 100 176 112 172" delay={0.9} />
          <Needle x={108} y={180} angle={-36} len={88} w={7} />
        </>
      );
    case "spool-line":
      return (
        <>
          <Outline d="M38 18 L132 18 L120 40 L50 40 Z M38 182 L132 182 L120 160 L50 160 Z M50 40 L50 160 M120 40 L120 160" />
          {[56, 76, 96, 116, 136].map((y, i) => (
            <path
              key={y}
              className="sw-wind"
              d={`M50 ${y} L120 ${y + 8} M50 ${y + 12} L120 ${y + 8}`}
              pathLength={1}
              style={{ animationDelay: `${0.5 + 0.1 * i}s` }}
            />
          ))}
          <Thread d="M120 64 C134 60 146 50 156 36" delay={1} />
          <Needle x={160} y={26} angle={97} len={118} w={11} />
        </>
      );
    case "spool-bob":
      return (
        <>
          <defs>
            <clipPath id={`${uid}-core`}>
              <rect x="120" y="36" width="52" height="132" />
            </clipPath>
          </defs>
          <Outline d="M110 14 L182 14 L182 36 L110 36 Z M110 168 L182 168 L182 190 L110 190 Z M120 36 L120 168 M172 36 L172 168" />
          <g clipPath={`url(#${uid}-core)`}>
            <g className="sw-wrapy">
              {[-30, 0, 30, 60, 90, 120, 150, 180].map((y) => (
                <path key={y} className="sw-wind" d={`M110 ${y + 60} L182 ${y}`} pathLength={1} />
              ))}
            </g>
          </g>
          {/* the plumb bob swings on its thread from the spool */}
          <g className="sw-swing">
            <Thread d="M120 58 L58 36 L30 92" delay={0.6} />
            <path
              className="sw-needle"
              fill="currentColor"
              fillRule="evenodd"
              d="M30 92 C16 100 14 120 20 130 L30 192 L40 130 C46 120 44 100 30 92 Z M30 106 C27 106 26 110 26 112 C26 115 28 117 30 117 C32 117 34 115 34 112 C34 110 33 106 30 106 Z"
            />
          </g>
        </>
      );
    case "needles":
      return (
        <>
          <g className="sw-cross-a">
            <Needle x={58} y={40} angle={47} len={172} w={18} />
          </g>
          <g className="sw-cross-b">
            <Needle x={150} y={44} angle={135} len={170} w={16} />
          </g>
          <Thread d="M158 40 C150 22 132 22 128 34" delay={0.8} />
        </>
      );
    case "machine-outline":
      return (
        <>
          <Outline d="M18 150 L190 150 L190 168 L18 168 Z" />
          <Outline d="M50 66 L150 66 C158 66 162 72 162 80 L162 150 M50 92 L118 92 C126 92 130 98 130 106 L130 150 M34 120 L34 54 C34 42 50 42 50 54 L52 120 Z" delay={0.3} />
          <Outline d="M166 74 L178 74 L178 122 L166 122 Z M114 28 L130 28 L130 54 L114 54 Z M122 54 L122 66" delay={0.7} />
          <circle className="sw-line" cx="146" cy="128" r="8" />
          <g className="sw-bar">
            <path className="sw-line" d="M43 120 L43 142" />
          </g>
        </>
      );
    case "bobbin":
      return (
        <>
          <defs>
            <mask id={`${uid}-gap`}>
              <rect width="200" height="200" fill="#fff" />
              <path d="M30 30 L170 170" stroke="#000" strokeWidth="22" strokeLinecap="round" />
            </mask>
            <mask id={`${uid}-stripes`} maskUnits="userSpaceOnUse" x="-50" y="-30" width="100" height="60">
              <rect x="-50" y="-30" width="100" height="60" fill="#fff" />
              <g className="sw-wrap">
                {[-110, -80, -50, -20, 10, 40, 70].map((x) => (
                  <path key={x} d={`M${x} 34 L${x + 34} -34`} stroke="#000" strokeWidth="5" />
                ))}
              </g>
            </mask>
          </defs>
          <g mask={`url(#${uid}-gap)`}>
            <g className="sw-bobbin" transform="translate(100 100) rotate(-45)">
              <path className="sw-line" d="M-62 -50 L-48 -50 L-48 50 L-62 50 Z M48 -50 L62 -50 L62 50 L48 50 Z" />
              <rect x="-48" y="-28" width="96" height="56" fill="currentColor" mask={`url(#${uid}-stripes)`} />
            </g>
          </g>
          <Thread d="M22 32 C30 10 48 8 52 22" delay={0.2} />
          <Needle x={32} y={30} angle={45} len={196} w={10} />
        </>
      );
  }
}

export default function SewingIcon({
  name,
  className,
}: {
  name: SewingIconName;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const uid = `sw${useId().replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.in = "";
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = "";
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`sw sw--${name}${className ? ` ${className}` : ""}`}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <Art name={name} uid={uid} />
    </svg>
  );
}
