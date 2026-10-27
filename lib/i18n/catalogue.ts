/* English translations of the catalogue.
 *
 * lib/rv-data.ts stays the French source of record. This file overlays it, and
 * the `Record<Slot, …>` / `Record<MetierKey, …>` types mean a missing or
 * misspelled entry is a compile error rather than a page that silently falls
 * back to French.
 */

import {
  ITEMS,
  LABELS,
  METIERS,
  PRODUCT,
  type Item,
  type Metier,
  type MetierKey,
  type Slot,
} from "../rv-data";
import type { Locale } from "./config";

export interface LocalItem {
  slot: Slot;
  m: MetierKey;
  name: string;
  sous: string;
  matiere: string;
  tags: string[];
  tailles: string;
  detail: string;
  specs: [string, string][];
  img: { src: string; alt: string };
}

export interface LocalMetier {
  key: MetierKey;
  titre: string;
  texte: string;
  slot: Slot;
}

interface ItemText {
  name: string;
  sous: string;
  matiere: string;
  tags: string[];
  tailles: string;
  detail: string;
  specs: [string, string][];
  alt: string;
}

const EN_ITEMS: Record<Slot, ItemText> = {
  i1: {
    name: "Work coverall",
    sous: "Workwear built for the car workshop and industrial maintenance",
    matiere: "Piece-dyed sanforised cotton twill, 320 gsm",
    tags: ["DOUBLE ZIP", "TRIPLE STITCHING", "ACTION BACK"],
    tailles: "36–62 · straight or tailored fit",
    detail:
      "The default workshop piece: it takes grease, crouching and industrial laundering without losing its shape. Double zip from collar to ankle, action back that frees the shoulder.",
    specs: [
      ["Fabric", "Sanforised cotton twill 320 gsm"],
      ["Stitching", "Triple at load-bearing areas"],
      ["Fastening", "Double zip under a storm flap"],
      ["Care", "Industrial wash at 60 °C, tunnel dried"],
      ["Marking", "Chest embroidery, back screen print"],
    ],
    alt: "Grey Rougevif work coverall with a double zip, three-quarter view",
  },
  i2: {
    name: "Jacket and trouser set",
    sous: "A complete outfit for production and maintenance",
    matiere: "Two-tone polycotton twill, black panels at wear points",
    tags: ["2-PIECE SET", "REINFORCED KNEES", "REFLECTIVE PIPING"],
    tailles: "S–4XL",
    detail:
      "An elasticated-waist jacket and matching trousers, sold as a set: same colours, same reinforcements, same behaviour in the wash. Discreet reflective piping on the sleeve and the leg.",
    specs: [
      ["Fabric", "Two-tone polycotton twill"],
      ["Reinforcements", "Black panels at elbows and knees"],
      ["Pockets", "4 on the jacket, 6 on the trousers"],
      ["Care", "Wash at 60 °C"],
      ["Marking", "Embroidery or screen printing"],
    ],
    alt: "Grey and black Rougevif work jacket and trouser set",
  },
  i3: {
    name: "Reinforced work trousers",
    sous: "Workshop trousers for standing and floor-level jobs",
    matiere: "Heavy two-tone twill, pre-shaped lined knees",
    tags: ["RULE POCKET", "REINFORCED KNEES", "TOOL LOOPS"],
    tailles: "38–60",
    detail:
      "Pre-shaped, lined knees: crouching no longer pulls on the seam. Side rule pocket, flapped tool pocket, and wide loops for a tool belt.",
    specs: [
      ["Fabric", "Heavy two-tone twill"],
      ["Reinforcements", "Lined knees, lined pockets"],
      ["Pockets", "2 side, 1 rule, 1 cargo, 2 back"],
      ["Options", "Knee-pad pockets"],
      ["Care", "Wash at 60 °C"],
    ],
    alt: "Grey and black Rougevif work trousers with cargo pockets and reinforced knees",
  },
  i4: {
    name: "High-visibility coverall",
    sous: "High-visibility garment for building sites and roadworks",
    matiere: "Fluorescent polyester-cotton twill, segmented retroreflective tape",
    tags: ["EN ISO 20471", "CLASS 3", "REINFORCED KNEES"],
    tailles: "S–4XL",
    detail:
      "A class 3 high-visibility coverall: segmented retroreflective tape across the body, sleeves and legs, with charcoal reinforcements at the knees.",
    specs: [
      ["Standard", "EN ISO 20471 class 3"],
      ["Fabric", "Fluorescent polyester-cotton twill"],
      ["Tape", "Segmented retroreflective"],
      ["Colours", "Yellow or orange"],
      ["Care", "Wash at 60 °C, 50 cycles"],
    ],
    alt: "Yellow and grey Rougevif high-visibility coverall with retroreflective tape",
  },
  c1: {
    name: "Double-breasted chef jacket",
    sous: "Brigade jacket for the kitchen and the pastry section",
    matiere: "Stain-resistant cotton 240 gsm, mandarin collar",
    tags: ["PRESS STUDS", "SHORT SLEEVES", "COLOURED PIPING"],
    tailles: "36–58",
    detail:
      "Double-breasted to hide splashes, with press studs so it opens in one movement at the end of service. Collar piping available in seven colours.",
    specs: [
      ["Fabric", "Stain-resistant cotton 240 gsm"],
      ["Collar", "Mandarin with piping"],
      ["Sleeves", "Short or long"],
      ["Care", "Wash at 60 °C with whites"],
      ["Marking", "Name and role embroidery"],
    ],
    alt: "White double-breasted Rougevif chef jacket with a mandarin collar",
  },
  c2: {
    name: "Women’s chef jacket",
    sous: "Brigade jacket in a women’s cut",
    matiere: "Cotton-polyester twill, removable contrast cuffs",
    tags: ["TAILORED FIT", "SLEEVE POCKET", "STAND COLLAR"],
    tailles: "34–52",
    detail:
      "A tailored cut with waist darts, an asymmetric stand collar and a thermometer pocket on the sleeve. Contrast cuffs that forgive the marks of service.",
    specs: [
      ["Fabric", "Cotton-polyester twill"],
      ["Collar", "Asymmetric stand"],
      ["Pocket", "Thermometer pocket on the sleeve"],
      ["Colours", "6 shades"],
      ["Care", "Wash at 60 °C"],
    ],
    alt: "Blue Rougevif women’s chef jacket with contrast cuffs",
  },
  c3: {
    name: "Houndstooth kitchen trousers",
    sous: "The classic brigade trouser",
    matiere: "Houndstooth cotton-polyester poplin, elasticated waist",
    tags: ["60 °C WASH", "FLAT DRAWCORD", "STRAIGHT CUT"],
    tailles: "XS–3XL",
    detail:
      "The brigade classic: a pattern that forgives stains, an elasticated waist with a flat drawcord, and a straight cut that never binds.",
    specs: [
      ["Fabric", "Cotton-polyester poplin"],
      ["Waist", "Elasticated, flat drawcord"],
      ["Pockets", "2 side, 1 back"],
      ["Care", "Wash at 60 °C"],
      ["Options", "Plain black or houndstooth"],
    ],
    alt: "Rougevif houndstooth kitchen trousers with an elasticated waist",
  },
  c4: {
    name: "Elasticated kitchen trousers",
    sous: "Service trousers for catering operations",
    matiere: "Black cotton-polyester canvas, fully elasticated waist",
    tags: ["NO FASTENINGS", "PULL-ON", "UNISEX"],
    tailles: "XS–4XL",
    detail:
      "A fully elasticated waist with no zip or button: quick to pull on, and no metal part anywhere near the food. Unisex cut.",
    specs: [
      ["Fabric", "Cotton-polyester canvas"],
      ["Waist", "Fully elasticated"],
      ["Pockets", "2 side"],
      ["Care", "Wash at 60 °C"],
      ["Colours", "Black or white"],
    ],
    alt: "Black Rougevif kitchen trousers with an elasticated waist, laid flat",
  },
  s1: {
    name: "Piqué polo",
    sous: "Team garment for reception and retail",
    matiere: "Combed cotton piqué 210 gsm, knitted collar",
    tags: ["CHEST EMBROIDERY", "18 COLOURS", "RIBBED COLLAR"],
    tailles: "XS–4XL",
    detail:
      "The most-worn team garment: a knitted collar that holds its shape after a hundred washes, and combed cotton that doesn’t pill.",
    specs: [
      ["Fabric", "Combed cotton piqué 210 gsm"],
      ["Collar", "Ribbed knit"],
      ["Colours", "18 shades"],
      ["Care", "Wash at 40 °C"],
      ["Marking", "Chest embroidery included"],
    ],
    alt: "Royal blue Rougevif piqué polo with a three-button knitted collar",
  },
  s2: {
    name: "Reception coat",
    sous: "Reception and retail coat, women’s cut",
    matiere: "Crease-resistant twill, straight button front",
    tags: ["NO IRONING", "2 POCKETS", "STRAIGHT CUT"],
    tailles: "34–52",
    detail:
      "A reception garment that still looks sharp at the end of the day: crease-resistant twill, two low patch pockets, mid-thigh length.",
    specs: [
      ["Fabric", "Crease-resistant polyester-cotton twill"],
      ["Front", "Straight button placket"],
      ["Cut", "Straight or lightly tailored"],
      ["Care", "Wash at 40 °C, no ironing"],
      ["Marking", "Discreet embroidery"],
    ],
    alt: "Rougevif women’s reception coat with a straight button front and patch pockets",
  },
  s3: {
    name: "Women’s service tunic",
    sous: "Reception tunic for care and wellbeing trades",
    matiere: "Lightweight stretch twill, concealed zip",
    tags: ["CENTRE ZIP", "2 POCKETS", "DECORATIVE PLEATS"],
    tailles: "34–52",
    detail:
      "A square neckline, a centre zip and pin-tucked pockets: a client-facing garment that doesn’t look like workshop kit.",
    specs: [
      ["Fabric", "Lightweight stretch twill"],
      ["Fastening", "Centre zip"],
      ["Pockets", "2 pin-tucked patch"],
      ["Colours", "8 shades"],
      ["Care", "Wash at 60 °C"],
    ],
    alt: "Pink Rougevif women’s service tunic with a zip front and pleated pockets",
  },
  s4: {
    name: "Service shirt",
    sous: "Uniform shirt for reception and security",
    matiere: "Polyester-cotton poplin, button-down collar",
    tags: ["LONG SLEEVES", "2 FLAP POCKETS", "EPAULETTES"],
    tailles: "XS–3XL",
    detail:
      "A structured uniform shirt: epaulettes, two flap pockets, and poplin that holds its press all day.",
    specs: [
      ["Fabric", "Polyester-cotton poplin"],
      ["Collar", "Button-down"],
      ["Shoulders", "Epaulettes"],
      ["Sleeves", "Short or long"],
      ["Care", "Wash at 40 °C"],
    ],
    alt: "Navy Rougevif long-sleeved service shirt with two flap pockets",
  },
  l1: {
    name: "Warehouse set",
    sous: "Jacket and trouser set for loading bays and the warehouse",
    matiere: "Piece-dyed cotton-polyester twill, elasticated-waist jacket",
    tags: ["2-PIECE SET", "CARGO POCKET", "WINDPROOF"],
    tailles: "S–4XL",
    detail:
      "A short windproof jacket and matching cargo trousers: the team colour stays identical from one piece to the next, resupply included.",
    specs: [
      ["Fabric", "Cotton-polyester twill"],
      ["Jacket", "Elasticated waist and cuffs"],
      ["Trousers", "Flapped cargo pocket, pre-shaped knees"],
      ["Colours", "9 shades"],
      ["Care", "Wash at 60 °C"],
    ],
    alt: "Red Rougevif work jacket and trouser set",
  },
  l2: {
    name: "Two-tone long-sleeved T-shirt",
    sous: "Team base layer for the warehouse",
    matiere: "Cotton jersey 180 gsm, contrast raglan sleeves",
    tags: ["RAGLAN", "RIBBED COLLAR", "BACK MARKING"],
    tailles: "XS–4XL",
    detail:
      "Raglan sleeves that free the shoulder when carrying, a reinforced ribbed collar, and a heather grey body that doesn’t show dust.",
    specs: [
      ["Fabric", "Cotton jersey 180 gsm"],
      ["Sleeves", "Contrast raglan"],
      ["Collar", "Reinforced rib"],
      ["Care", "Wash at 40 °C"],
      ["Marking", "Flock or back screen print"],
    ],
    alt: "Heather grey and navy Rougevif two-tone long-sleeved T-shirt",
  },
  l3: {
    name: "Cargo trousers",
    sous: "Trousers for handling and order picking",
    matiere: "Cotton-polyester twill, flapped cargo pocket",
    tags: ["6 POCKETS", "HALF-ELASTIC WAIST", "REFLECTIVE PIPING"],
    tailles: "38–60",
    detail:
      "Six useful pockets and a half-elasticated waistband so you can climb the racking freely. Reflective piping on the cargo pocket.",
    specs: [
      ["Fabric", "Cotton-polyester twill"],
      ["Pockets", "2 side, 1 cargo, 1 rule, 2 back"],
      ["Waistband", "Half-elasticated"],
      ["Care", "Wash at 60 °C"],
      ["Colours", "7 shades"],
    ],
    alt: "Plain Rougevif work trousers with a flapped cargo pocket",
  },
  l4: {
    name: "Branded cap",
    sous: "Team accessory, embroidered marking",
    matiere: "Washed cotton twill, pre-curved peak",
    tags: ["3D EMBROIDERY", "METAL BUCKLE", "5 PANELS"],
    tailles: "One size",
    detail:
      "The finishing touch for a team: washed twill, a pre-curved peak, and a raised embroidered logo. A metal buckle that doesn’t break after a month.",
    specs: [
      ["Fabric", "Washed cotton twill"],
      ["Peak", "Pre-curved"],
      ["Adjuster", "Metal buckle"],
      ["Marking", "3D embroidery"],
      ["Colours", "10 shades"],
    ],
    alt: "Black Rougevif cap with a pre-curved peak and raised embroidery",
  },
  p1: {
    name: "Bib-and-brace overall",
    sous: "Lined bib-and-brace for building sites and cold jobs",
    matiere: "Lined polycotton twill, two-tone adjustable braces",
    tags: ["BIB POCKET", "PRE-SHAPED KNEES", "LINING"],
    tailles: "S–4XL",
    detail:
      "Adjustable braces with quick-release buckles, a zipped bib pocket, and pre-shaped lined knees. Quilted lining for outdoor jobs.",
    specs: [
      ["Fabric", "Lined polycotton twill"],
      ["Braces", "Adjustable, quick-release buckles"],
      ["Pockets", "Zipped bib, side cargo"],
      ["Knees", "Pre-shaped, knee-pad slots"],
      ["Care", "Wash at 60 °C"],
    ],
    alt: "Navy Rougevif bib-and-brace overall with adjustable braces and a bib pocket",
  },
  p2: {
    name: "High-visibility parka",
    sous: "High-visibility parka for outdoor work",
    matiere: "Water-repellent coated polyester, quilted lining",
    tags: ["EN ISO 20471", "WATER-REPELLENT", "ROLL-AWAY HOOD"],
    tailles: "S–4XL",
    detail:
      "A high-visibility parka for loading bays and roadworks: water-repellent, with a hood that rolls into the collar and horizontal plus brace retroreflective tape.",
    specs: [
      ["Standard", "EN ISO 20471"],
      ["Fabric", "Water-repellent coated polyester"],
      ["Lining", "Quilted"],
      ["Colours", "Orange or yellow on a navy base"],
      ["Marking", "Large-format back transfer"],
    ],
    alt: "Orange and navy Rougevif high-visibility parka with retroreflective tape",
  },
  p3: {
    name: "Long-sleeved work T-shirt",
    sous: "Base layer worn under protective kit",
    matiere: "Breathable cotton jersey, flatlock seams",
    tags: ["FLATLOCK SEAMS", "RIBBED COLLAR", "11 COLOURS"],
    tailles: "XS–3XL",
    detail:
      "The base layer worn under the kit: flatlock seams to avoid chafing over a full day, and a jersey that wicks sweat away.",
    specs: [
      ["Fabric", "Breathable cotton jersey"],
      ["Seams", "Ergonomic flatlock"],
      ["Collar", "Elastane rib"],
      ["Colours", "11 shades"],
      ["Care", "Wash at 40 °C"],
    ],
    alt: "Rougevif long-sleeved work T-shirt in cotton knit",
  },
  a1: {
    name: "Food-processing tunic",
    sous: "Garment compliant with food-hygiene rules",
    matiere: "Bleached cotton-polyester twill, concealed button front",
    tags: ["HACCP", "NO OUTER POCKETS", "90 °C WASH"],
    tailles: "S–4XL",
    detail:
      "Compliant with hygiene requirements: no outer pockets, a concealed button front, and fabric that takes a 90 °C wash. Matching hairnet and beard cover.",
    specs: [
      ["Fabric", "Bleached cotton-polyester twill"],
      ["Hygiene", "No outer pockets, covered button front"],
      ["Accessories", "Hairnet, beard cover"],
      ["Care", "Wash at 90 °C"],
      ["Traceability", "Department code label"],
    ],
    alt: "White Rougevif food-processing tunic with no outer pockets",
  },
  e1: {
    name: "School workshop coat",
    sous: "Workshop and laboratory coat for schools",
    matiere: "Piece-dyed cotton-polyester twill, three pockets",
    tags: ["HEAVY LAUNDERING", "EMBROIDERED LOGO", "3 POCKETS"],
    tailles: "Ages 4–16 and adult",
    detail:
      "A workshop and laboratory coat cut for the school year: frequent washing, reinforced seams, and an embroidered logo in the school’s colours.",
    specs: [
      ["Fabric", "Cotton-polyester twill"],
      ["Pockets", "1 chest, 2 lower"],
      ["Fastening", "Buttons"],
      ["Sizes", "Ages 4 to 16, then S to 3XL"],
      ["Marking", "Embroidered chest logo"],
    ],
    alt: "Charcoal Rougevif school workshop coat with three pockets",
  },
};

const EN_METIERS: Record<MetierKey, { titre: string; texte: string }> = {
  industrie: {
    titre: "Industry",
    texte:
      "Coveralls, sets and trousers cut for mechanical workshops, maintenance and production. Heavy twill, reinforcement at fatigue points, resistance to industrial laundering.",
  },
  protection: {
    titre: "Protection",
    texte:
      "High-visibility garments and lined bib-and-brace overalls for building sites and outdoor jobs: class 2 and 3, water repellency, knee-pad slots.",
  },
  cuisine: {
    titre: "Kitchen",
    texte:
      "Double-breasted jackets for men and women, houndstooth or elasticated brigade trousers. Stain-resistant cotton, holds up to a 60 °C wash.",
  },
  service: {
    titre: "Front of house",
    texte:
      "Polos, coats, tunics and shirts for client-facing teams. Brand colours, discreet embroidery, distinct men’s and women’s cuts.",
  },
  logistique: {
    titre: "Logistics",
    texte:
      "Jacket-and-trouser sets, long-sleeved T-shirts and cargos for warehouses and loading bays. Windproof, useful pockets, colour-matched resupply.",
  },
  agro: {
    titre: "Food processing",
    texte:
      "Tunics and accessories compliant with hygiene rules: no outer pockets, covered button front, 90 °C wash.",
  },
  scolaire: {
    titre: "Schools",
    texte:
      "Workshop and laboratory coats for institutions, from secondary school to vocational college, in the school’s colours.",
  },
};

const EN_LABELS: Record<MetierKey, string> = {
  industrie: "INDUSTRY",
  cuisine: "KITCHEN",
  service: "FRONT OF HOUSE",
  logistique: "LOGISTICS",
  protection: "PROTECTION",
  agro: "FOOD PROCESSING",
  scolaire: "SCHOOLS",
};

/* ------------------------------------------------------------- accessors */

function toLocal(item: Item, locale: Locale): LocalItem {
  const img = PRODUCT[item.slot];
  if (locale === "fr") {
    return {
      slot: item.slot,
      m: item.m,
      name: item.name,
      sous: item.sous,
      matiere: item.matiere,
      tags: item.tags,
      tailles: item.tailles,
      detail: item.detail,
      specs: item.specs,
      img,
    };
  }

  const t = EN_ITEMS[item.slot];
  return {
    slot: item.slot,
    m: item.m,
    name: t.name,
    sous: t.sous,
    matiere: t.matiere,
    tags: t.tags,
    tailles: t.tailles,
    detail: t.detail,
    specs: t.specs,
    img: { src: img.src, alt: t.alt },
  };
}

export const getItems = (locale: Locale): LocalItem[] =>
  ITEMS.map((i) => toLocal(i, locale));

export function getItem(slot: string, locale: Locale): LocalItem | undefined {
  const item = ITEMS.find((i) => i.slot === slot);
  return item ? toLocal(item, locale) : undefined;
}

export const getItemsFor = (m: MetierKey, locale: Locale): LocalItem[] =>
  ITEMS.filter((i) => i.m === m).map((i) => toLocal(i, locale));

function toLocalMetier(m: Metier, locale: Locale): LocalMetier {
  if (locale === "fr") {
    return { key: m.key, titre: m.titre, texte: m.texte, slot: m.slot };
  }
  const t = EN_METIERS[m.key];
  return { key: m.key, titre: t.titre, texte: t.texte, slot: m.slot };
}

export const getMetiers = (locale: Locale): LocalMetier[] =>
  METIERS.map((m) => toLocalMetier(m, locale));

export const getLabels = (locale: Locale): Record<MetierKey, string> =>
  locale === "fr" ? LABELS : EN_LABELS;

export const getLabel = (m: MetierKey, locale: Locale): string =>
  getLabels(locale)[m];

/** Alt text for a product photo in the requested locale. */
export const getImage = (slot: Slot, locale: Locale) =>
  locale === "fr"
    ? PRODUCT[slot]
    : { src: PRODUCT[slot].src, alt: EN_ITEMS[slot].alt };
