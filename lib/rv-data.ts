/* The Rougevif catalogue — the single source of truth for product data.
 *
 * Ported from the design canvas's rv-data.js (kept under design/ for
 * reference). Image paths are rooted at /uploads, served from public/.
 */

export type MetierKey =
  | "industrie"
  | "cuisine"
  | "service"
  | "logistique"
  | "protection"
  | "agro"
  | "scolaire";

export type Slot = "i1" | "i2" | "i3" | "i4" | "c1" | "c2" | "c3" | "c4" | "s1" | "s2" | "s3" | "s4" | "l1" | "l2" | "l3" | "l4" | "p1" | "p2" | "p3" | "a1" | "e1";

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Item {
  m: MetierKey;
  slot: Slot;
  name: string;
  sous: string;
  matiere: string;
  tags: string[];
  tailles: string;
  detail: string;
  specs: [string, string][];
}

export interface Metier {
  key: MetierKey;
  titre: string;
  slot: Slot;
  texte: string;
}

export const LABELS: Record<MetierKey, string> = {
  industrie: "INDUSTRIE",
  cuisine: "CUISINE",
  service: "SERVICE",
  logistique: "LOGISTIQUE",
  protection: "PROTECTION",
  agro: "AGROALIMENTAIRE",
  scolaire: "SCOLAIRE",
};

/** Product photography: the garment alone, neutral ground, no model. */
export const PRODUCT: Record<Slot, ProductImage> = {
  i1: { src: "/uploads/imgi_16_combinaison-de-travail-ce117.jpg", alt: "Combinaison de travail grise Rougevif, double zip, vue de trois quarts" },
  i2: { src: "/uploads/imgi_9_blouson-et-pantalon-de-travail-ce1063.jpg", alt: "Ensemble blouson et pantalon de travail gris et noir Rougevif" },
  i3: { src: "/uploads/imgi_15_pantalon-de-travail-gris-homme.jpg", alt: "Pantalon de travail gris et noir Rougevif, poches cargo et genoux renforcés" },
  i4: { src: "/uploads/imgi_11_combinaison-haute-visibilite.jpg", alt: "Combinaison haute visibilité jaune et grise Rougevif, bandes rétroréfléchissantes" },
  c1: { src: "/uploads/imgi_20_veste-de-cuisine-blanche-homme.jpg", alt: "Veste de cuisine blanche croisée Rougevif, col officier" },
  c2: { src: "/uploads/imgi_16_veste-de-cuisine-femme.jpg", alt: "Veste de cuisine femme bleue Rougevif, poignets contrastés" },
  c3: { src: "/uploads/imgi_18_pantalon-de-cuisine-pepita.jpg", alt: "Pantalon de cuisine pied-de-poule Rougevif, taille élastiquée" },
  c4: { src: "/uploads/imgi_22_pantalon-de-cuisine-avec-elastique.jpg", alt: "Pantalon de cuisine noir à taille élastiquée Rougevif, plié à plat" },
  s1: { src: "/uploads/imgi_12_polo-manche-courte-ce138.jpg", alt: "Polo piqué bleu roi Rougevif, col tricoté trois boutons" },
  s2: { src: "/uploads/imgi_18_blouse-de-travail-femme-ce-f-1010.jpg", alt: "Blouse d’accueil femme Rougevif, boutonnage droit et poches plaquées" },
  s3: { src: "/uploads/imgi_11_tunique-de-travail-femme-ce-tq-006.jpg", alt: "Tunique de service femme rose Rougevif, fermeture zippée et plis de poche" },
  s4: { src: "/uploads/imgi_20_chemise-agent-de-securite-manches-longues.jpg", alt: "Chemise de service manches longues bleu marine Rougevif, deux poches à rabat" },
  l1: { src: "/uploads/imgi_10_ensemble-blouson-et-pantalon-ce-1031.jpg", alt: "Ensemble blouson et pantalon de travail rouge Rougevif" },
  l2: { src: "/uploads/imgi_23_t-shirt-manches-longues-bicolore.jpg", alt: "T-shirt manches longues bicolore gris chiné et marine Rougevif" },
  l3: { src: "/uploads/imgi_15_pantalon-de-travail-homme-couleur-unie.jpg", alt: "Pantalon de travail uni Rougevif, poche cargo à rabat" },
  l4: { src: "/uploads/imgi_6_casquette-agent-de-securite.jpg", alt: "Casquette noire Rougevif, visière préformée et broderie en relief" },
  p1: { src: "/uploads/imgi_21_salopette-de-travail-ce1121.jpg", alt: "Salopette de travail bleu marine Rougevif, bretelles réglables et poche bavette" },
  p2: { src: "/uploads/imgi_20_parka-de-travail-ce134-4.jpg", alt: "Parka haute visibilité orange et marine Rougevif, bandes rétroréfléchissantes" },
  p3: { src: "/uploads/imgi_17_t-shirt-de-travail-manches-longues-.jpg", alt: "T-shirt de travail manches longues Rougevif, maille coton" },
  a1: { src: "/uploads/imgi_9_tunique-de-travail-ce-tq-003.jpg", alt: "Tunique agroalimentaire blanche Rougevif, sans poche extérieure" },
  e1: { src: "/uploads/imgi_7_blouse-de-travail-homme-ce-101.jpg", alt: "Blouse d’établissement anthracite Rougevif, trois poches" },
};

export const ITEMS: Item[] = [
  {
    m: "industrie",
    slot: "i1",
    name: "Combinaison de travail",
    sous: "Vêtement de travail conçu pour l’atelier automobile et la maintenance industrielle",
    matiere: "Sergé de coton sanforisé 320 g/m², teint en pièce",
    tags: ["DOUBLE ZIP", "COUTURES TRIPLES", "DOS ACTION"],
    tailles: "36–62 · coupe droite ou cintrée",
    detail: "La pièce d’atelier par défaut : elle encaisse la graisse, les accroupissements et le lavage industriel sans se déformer. Double fermeture zippée du col à la cheville, dos action qui libère l’épaule.",
    specs: [
      ["Matière", "Sergé coton sanforisé 320 g/m²"],
      ["Coutures", "Triples aux zones de charge"],
      ["Fermeture", "Double fermeture zippée sous rabat"],
      ["Entretien", "Lavage industriel à 60 °C, séchage tunnel"],
      ["Marquage", "Broderie poitrine, sérigraphie dos"],
    ],
  },
  {
    m: "industrie",
    slot: "i2",
    name: "Ensemble blouson et pantalon",
    sous: "Tenue complète pour la production et la maintenance",
    matiere: "Sergé polycoton bicolore, empiècements noirs aux zones d’usure",
    tags: ["ENSEMBLE 2 PIÈCES", "GENOUX RENFORCÉS", "LISERÉ RÉFLÉCHISSANT"],
    tailles: "S–4XL",
    detail: "Blouson taille élastiquée et pantalon assorti, vendus en ensemble : mêmes coloris, mêmes renforts, même tenue au lavage. Liseré réfléchissant discret sur la manche et la jambe.",
    specs: [
      ["Matière", "Sergé polycoton bicolore"],
      ["Renforts", "Empiècements noirs coudes et genoux"],
      ["Poches", "4 sur le blouson, 6 sur le pantalon"],
      ["Entretien", "Lavage à 60 °C"],
      ["Marquage", "Broderie ou sérigraphie"],
    ],
  },
  {
    m: "industrie",
    slot: "i3",
    name: "Pantalon de travail renforcé",
    sous: "Pantalon d’atelier pour les postes debout et au sol",
    matiere: "Sergé lourd bicolore, genoux préformés doublés",
    tags: ["POCHE MÈTRE", "GENOUX RENFORCÉS", "PORTE-OUTILS"],
    tailles: "38–60",
    detail: "Genoux préformés et doublés : la position accroupie ne tire plus sur la couture. Poche mètre latérale, poche porte-outils à rabat, passants larges pour ceinture à outils.",
    specs: [
      ["Matière", "Sergé lourd bicolore"],
      ["Renforts", "Genoux doublés, poches doublées"],
      ["Poches", "2 cavalières, 1 mètre, 1 cargo, 2 arrière"],
      ["Options", "Poches genouillères"],
      ["Entretien", "Lavage à 60 °C"],
    ],
  },
  {
    m: "industrie",
    slot: "i4",
    name: "Combinaison haute visibilité",
    sous: "Vêtement de signalisation pour chantiers et voirie",
    matiere: "Sergé polyester-coton fluo, bandes rétroréfléchissantes segmentées",
    tags: ["EN ISO 20471", "CLASSE 3", "GENOUX RENFORCÉS"],
    tailles: "S–4XL",
    detail: "Combinaison de signalisation classe 3 : bandes rétroréfléchissantes segmentées sur le buste, les manches et les jambes, renforts anthracite aux genoux.",
    specs: [
      ["Norme", "EN ISO 20471 classe 3"],
      ["Matière", "Sergé polyester-coton fluo"],
      ["Bandes", "Rétroréfléchissantes segmentées"],
      ["Coloris", "Jaune ou orange"],
      ["Entretien", "Lavage à 60 °C, 50 cycles"],
    ],
  },
  {
    m: "cuisine",
    slot: "c1",
    name: "Veste de cuisine croisée",
    sous: "Veste de brigade pour la cuisine et la pâtisserie",
    matiere: "Coton anti-taches 240 g/m², col officier",
    tags: ["BOUTONS PRESSION", "MANCHES COURTES", "LISERÉ COULEUR"],
    tailles: "36–58",
    detail: "Croisée pour masquer les projections, boutons pression pour l’ouvrir d’un geste en sortie de service. Liseré de col disponible en sept coloris.",
    specs: [
      ["Matière", "Coton anti-taches 240 g/m²"],
      ["Col", "Officier avec liseré"],
      ["Manches", "Courtes ou longues"],
      ["Entretien", "Lavage à 60 °C au blanc"],
      ["Marquage", "Broderie nom et poste"],
    ],
  },
  {
    m: "cuisine",
    slot: "c2",
    name: "Veste de cuisine femme",
    sous: "Veste de brigade coupe femme",
    matiere: "Sergé coton-polyester, poignets contrastés amovibles",
    tags: ["COUPE CINTRÉE", "POCHE MANCHE", "COL MONTANT"],
    tailles: "34–52",
    detail: "Coupe cintrée avec pinces de taille, col montant asymétrique et poche thermomètre sur la manche. Poignets contrastés qui pardonnent les traces de service.",
    specs: [
      ["Matière", "Sergé coton-polyester"],
      ["Col", "Montant asymétrique"],
      ["Poche", "Thermomètre sur manche"],
      ["Coloris", "6 teintes"],
      ["Entretien", "Lavage à 60 °C"],
    ],
  },
  {
    m: "cuisine",
    slot: "c3",
    name: "Pantalon pied-de-poule",
    sous: "Pantalon de brigade classique",
    matiere: "Popeline coton-polyester pied-de-poule, taille élastiquée",
    tags: ["LAVAGE 60 °C", "CORDON PLAT", "COUPE DROITE"],
    tailles: "XS–3XL",
    detail: "Le classique de brigade : motif qui pardonne les taches, taille élastiquée avec cordon plat, coupe droite non serrante.",
    specs: [
      ["Matière", "Popeline coton-polyester"],
      ["Taille", "Élastiquée, cordon plat"],
      ["Poches", "2 côté, 1 arrière"],
      ["Entretien", "Lavage à 60 °C"],
      ["Options", "Uni noir ou pied-de-poule"],
    ],
  },
  {
    m: "cuisine",
    slot: "c4",
    name: "Pantalon de cuisine élastiqué",
    sous: "Pantalon de service pour la restauration collective",
    matiere: "Toile coton-polyester noire, taille entièrement élastiquée",
    tags: ["SANS FERMETURE", "ENFILAGE RAPIDE", "UNISEXE"],
    tailles: "XS–4XL",
    detail: "Taille entièrement élastiquée, sans fermeture ni bouton : enfilage rapide, aucune pièce métallique en contact avec les denrées. Coupe unisexe.",
    specs: [
      ["Matière", "Toile coton-polyester"],
      ["Taille", "Entièrement élastiquée"],
      ["Poches", "2 côté"],
      ["Entretien", "Lavage à 60 °C"],
      ["Coloris", "Noir ou blanc"],
    ],
  },
  {
    m: "service",
    slot: "s1",
    name: "Polo piqué",
    sous: "Vêtement d’équipe pour l’accueil et la vente",
    matiere: "Piqué coton peigné 210 g/m², col tricoté",
    tags: ["BRODERIE POITRINE", "18 COLORIS", "COL CÔTES"],
    tailles: "XS–4XL",
    detail: "Le vêtement d’équipe le plus porté : col tricoté qui garde sa tenue après cent lavages, coton peigné qui ne bouloche pas.",
    specs: [
      ["Matière", "Piqué coton peigné 210 g/m²"],
      ["Col", "Tricoté côtes"],
      ["Coloris", "18 teintes"],
      ["Entretien", "Lavage à 40 °C"],
      ["Marquage", "Broderie poitrine incluse"],
    ],
  },
  {
    m: "service",
    slot: "s2",
    name: "Blouse d’accueil",
    sous: "Blouse de réception et de vente, coupe femme",
    matiere: "Twill infroissable, boutonnage droit",
    tags: ["SANS REPASSAGE", "2 POCHES", "COUPE DROITE"],
    tailles: "34–52",
    detail: "Tenue de réception qui reste nette en fin de journée : twill infroissable, deux poches plaquées basses, longueur à mi-cuisse.",
    specs: [
      ["Matière", "Twill polyester-coton infroissable"],
      ["Boutonnage", "Droit"],
      ["Coupe", "Droite ou légèrement cintrée"],
      ["Entretien", "Lavage à 40 °C, sans repassage"],
      ["Marquage", "Broderie discrète"],
    ],
  },
  {
    m: "service",
    slot: "s3",
    name: "Tunique de service femme",
    sous: "Tunique d’accueil pour les métiers du soin et du bien-être",
    matiere: "Sergé léger stretch, fermeture zippée dissimulée",
    tags: ["ZIP CENTRAL", "2 POCHES", "PLIS DÉCORATIFS"],
    tailles: "34–52",
    detail: "Encolure carrée, fermeture zippée centrale et plis nervurés aux poches : une tenue de contact client qui ne ressemble pas à un vêtement d’atelier.",
    specs: [
      ["Matière", "Sergé léger stretch"],
      ["Fermeture", "Zip central"],
      ["Poches", "2 plaquées nervurées"],
      ["Coloris", "8 teintes"],
      ["Entretien", "Lavage à 60 °C"],
    ],
  },
  {
    m: "service",
    slot: "s4",
    name: "Chemise de service",
    sous: "Chemise d’uniforme pour l’accueil et la sécurité",
    matiere: "Popeline polyester-coton, col pointes boutonnées",
    tags: ["MANCHES LONGUES", "2 POCHES À RABAT", "PATTES D’ÉPAULE"],
    tailles: "XS–3XL",
    detail: "Chemise d’uniforme structurée : pattes d’épaule, deux poches à rabat, popeline qui tient le pli toute la journée.",
    specs: [
      ["Matière", "Popeline polyester-coton"],
      ["Col", "Pointes boutonnées"],
      ["Épaules", "Pattes d’épaule"],
      ["Manches", "Courtes ou longues"],
      ["Entretien", "Lavage à 40 °C"],
    ],
  },
  {
    m: "logistique",
    slot: "l1",
    name: "Ensemble entrepôt",
    sous: "Ensemble blouson et pantalon pour les quais et l’entrepôt",
    matiere: "Sergé coton-polyester teint en pièce, blouson taille élastiquée",
    tags: ["ENSEMBLE 2 PIÈCES", "POCHE CARGO", "COUPE-VENT"],
    tailles: "S–4XL",
    detail: "Blouson court coupe-vent et pantalon cargo assortis : la couleur d’équipe reste identique d’une pièce à l’autre, y compris au réassort.",
    specs: [
      ["Matière", "Sergé coton-polyester"],
      ["Blouson", "Taille et poignets élastiqués"],
      ["Pantalon", "Poche cargo à rabat, genoux préformés"],
      ["Coloris", "9 teintes"],
      ["Entretien", "Lavage à 60 °C"],
    ],
  },
  {
    m: "logistique",
    slot: "l2",
    name: "T-shirt manches longues bicolore",
    sous: "Première couche d’équipe pour l’entrepôt",
    matiere: "Jersey coton 180 g/m², manches raglan contrastées",
    tags: ["RAGLAN", "COL CÔTES", "MARQUAGE DOS"],
    tailles: "XS–4XL",
    detail: "Manches raglan qui libèrent l’épaule au port de charge, col côtes renforcé, corps gris chiné qui ne marque pas la poussière.",
    specs: [
      ["Matière", "Jersey coton 180 g/m²"],
      ["Manches", "Raglan contrastées"],
      ["Col", "Côtes renforcé"],
      ["Entretien", "Lavage à 40 °C"],
      ["Marquage", "Flocage ou sérigraphie dos"],
    ],
  },
  {
    m: "logistique",
    slot: "l3",
    name: "Pantalon cargo",
    sous: "Pantalon de manutention et de préparation de commandes",
    matiere: "Sergé coton-polyester, poche cargo à rabat",
    tags: ["6 POCHES", "CEINTURE SEMI-ÉLASTIQUE", "LISERÉ RÉFLÉCHISSANT"],
    tailles: "38–60",
    detail: "Six poches utiles et une ceinture semi-élastiquée pour monter dans les racks sans contrainte. Liseré réfléchissant sur la poche cargo.",
    specs: [
      ["Matière", "Sergé coton-polyester"],
      ["Poches", "2 côté, 1 cargo, 1 mètre, 2 arrière"],
      ["Ceinture", "Semi-élastiquée"],
      ["Entretien", "Lavage à 60 °C"],
      ["Coloris", "7 teintes"],
    ],
  },
  {
    m: "logistique",
    slot: "l4",
    name: "Casquette marquée",
    sous: "Accessoire d’équipe, marquage brodé",
    matiere: "Sergé coton lavé, visière préformée",
    tags: ["BRODERIE 3D", "RÉGLAGE MÉTAL", "5 PANNEAUX"],
    tailles: "Unique",
    detail: "Finition d’équipe : sergé lavé, visière préformée, broderie en relief du logo. Réglage métal qui ne casse pas au bout d’un mois.",
    specs: [
      ["Matière", "Sergé coton lavé"],
      ["Visière", "Préformée"],
      ["Réglage", "Boucle métal"],
      ["Marquage", "Broderie 3D"],
      ["Coloris", "10 teintes"],
    ],
  },
  {
    m: "protection",
    slot: "p1",
    name: "Salopette de travail",
    sous: "Salopette doublée pour les chantiers et les postes froids",
    matiere: "Sergé polycoton doublé, bretelles réglables bicolores",
    tags: ["POCHE BAVETTE", "GENOUX PRÉFORMÉS", "DOUBLURE"],
    tailles: "S–4XL",
    detail: "Bretelles réglables à boucles rapides, poche bavette zippée, genoux préformés doublés. Doublure matelassée pour les postes extérieurs.",
    specs: [
      ["Matière", "Sergé polycoton doublé"],
      ["Bretelles", "Réglables à boucles rapides"],
      ["Poches", "Bavette zippée, cargo latérale"],
      ["Genoux", "Préformés, logements genouillères"],
      ["Entretien", "Lavage à 60 °C"],
    ],
  },
  {
    m: "protection",
    slot: "p2",
    name: "Parka haute visibilité",
    sous: "Parka de signalisation pour le travail extérieur",
    matiere: "Polyester enduit déperlant, doublure matelassée",
    tags: ["EN ISO 20471", "DÉPERLANT", "CAPUCHE ROULÉE"],
    tailles: "S–4XL",
    detail: "Parka de signalisation pour les quais et la voirie : déperlante, capuche roulée dans le col, bandes rétroréfléchissantes horizontales et bretelles.",
    specs: [
      ["Norme", "EN ISO 20471"],
      ["Matière", "Polyester enduit déperlant"],
      ["Doublure", "Matelassée"],
      ["Coloris", "Orange ou jaune, base marine"],
      ["Marquage", "Transfert dos grand format"],
    ],
  },
  {
    m: "protection",
    slot: "p3",
    name: "T-shirt de travail manches longues",
    sous: "Sous-couche portée sous la tenue de protection",
    matiere: "Jersey coton respirant, coutures plates",
    tags: ["COUTURES PLATES", "COL CÔTES", "11 COLORIS"],
    tailles: "XS–3XL",
    detail: "Première couche portée sous la tenue : coutures plates pour éviter les frottements sur une journée complète, jersey qui évacue la transpiration.",
    specs: [
      ["Matière", "Jersey coton respirant"],
      ["Coutures", "Plates ergonomiques"],
      ["Col", "Côtes élasthanne"],
      ["Coloris", "11 teintes"],
      ["Entretien", "Lavage à 40 °C"],
    ],
  },
  {
    m: "agro",
    slot: "a1",
    name: "Tunique agroalimentaire",
    sous: "Tenue conforme aux règles d’hygiène agroalimentaires",
    matiere: "Sergé coton-polyester blanchi, boutonnage dissimulé",
    tags: ["HACCP", "SANS POCHE EXTÉRIEURE", "LAVAGE 90 °C"],
    tailles: "S–4XL",
    detail: "Conforme aux exigences d’hygiène : aucune poche extérieure, boutonnage dissimulé, tissu supportant le lavage à 90 °C. Charlotte et couvre-barbe assortis.",
    specs: [
      ["Matière", "Sergé coton-polyester blanchi"],
      ["Hygiène", "Sans poche extérieure, boutonnage couvert"],
      ["Accessoires", "Charlotte, couvre-barbe"],
      ["Entretien", "Lavage à 90 °C"],
      ["Traçabilité", "Étiquette code service"],
    ],
  },
  {
    m: "scolaire",
    slot: "e1",
    name: "Blouse d’établissement",
    sous: "Blouse d’atelier et de laboratoire pour les établissements scolaires",
    matiere: "Sergé coton-polyester teint en pièce, trois poches",
    tags: ["LAVAGE INTENSIF", "LOGO BRODÉ", "3 POCHES"],
    tailles: "4–16 ans et adulte",
    detail: "Blouse d’atelier et de laboratoire taillée pour le rythme scolaire : lavages fréquents, coutures renforcées, logo brodé aux couleurs de l’établissement.",
    specs: [
      ["Matière", "Sergé coton-polyester"],
      ["Poches", "1 poitrine, 2 basses"],
      ["Fermeture", "Boutons"],
      ["Tailles", "4 à 16 ans, puis S à 3XL"],
      ["Marquage", "Logo brodé poitrine"],
    ],
  },
];

export const METIERS: Metier[] = [
  { key: "industrie", titre: "Industrie", slot: "i1", texte: "Combinaisons, ensembles et pantalons taillés pour les ateliers mécaniques, la maintenance et la production. Sergé lourd, renforts aux points de fatigue, résistance au lavage industriel." },
  { key: "protection", titre: "Protection", slot: "p2", texte: "Vêtements de signalisation et salopettes doublées pour les chantiers et les postes extérieurs : classe 2 et 3, déperlance, logements genouillères." },
  { key: "cuisine", titre: "Cuisine", slot: "c1", texte: "Vestes croisées homme et femme, pantalons de brigade pied-de-poule ou élastiqués. Coton anti-taches, tenue au lavage à 60 °C." },
  { key: "service", titre: "Service & accueil", slot: "s3", texte: "Polos, blouses, tuniques et chemises pour les équipes en contact client. Coloris d’enseigne, broderie discrète, coupes homme et femme distinctes." },
  { key: "logistique", titre: "Logistique", slot: "l1", texte: "Ensembles blouson-pantalon, t-shirts manches longues et cargos pour les entrepôts et les quais. Coupe-vent, poches utiles, réassort à la teinte." },
  { key: "agro", titre: "Agroalimentaire", slot: "a1", texte: "Tuniques et accessoires conformes aux règles d’hygiène : sans poche extérieure, boutonnage couvert, lavage à 90 °C." },
  { key: "scolaire", titre: "Scolaire", slot: "e1", texte: "Blouses d’atelier et de laboratoire pour les établissements, du collège au lycée professionnel, aux couleurs de l’école." },
];

const FALLBACK: ProductImage = { src: "", alt: "" };

export const product = (slot: Slot | string): ProductImage =>
  PRODUCT[slot as Slot] ?? FALLBACK;

export const bySlot = (slot: string): Item | undefined =>
  ITEMS.find((i) => i.slot === slot);

export const itemsFor = (m: MetierKey): Item[] => ITEMS.filter((i) => i.m === m);

export const countLabel = (n: number): string =>
  `${n} ${n > 1 ? "RÉFÉRENCES" : "RÉFÉRENCE"}`;
