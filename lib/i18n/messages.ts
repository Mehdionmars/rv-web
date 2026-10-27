import type { Locale } from "./config";

/* The shape is declared once; TypeScript then requires every locale to fill
   it completely, so a missing translation is a build error, not a blank. */
export interface Messages {
  nav: {
    catalogue: string;
    metiers: string;
    surMesure: string;
    atelier: string;
    quote: string;
    skip: string;
    mainNav: string;
    breadcrumb: string;
    switchTo: string;
  };
  common: {
    references: (n: number) => string;
    address: string;
    hours: string;
    quoteBandTitle: [string, string];
    quoteCta: string;
    backHome: string;
    seeCatalogue: string;
    backToCatalogue: string;
  };
  home: {
    title: string;
    description: string;
    ticker: string;
    live: string;
    heroLine1: string;
    heroLine2: string;
    heroWords: string[];
    heroLede: string;
    ctaQuote: string;
    ctaWorkshop: string;
    stats: { n: string; label: string }[];
    manifesto: string;
    pillars: string[];
    tiles: { name: string; sub: string }[];
    workshopEyebrow: string;
    workshopTitle: string;
    workshopText: string;
    workshopCta: string;
    catalogueEyebrow: string;
    catalogueTitle: string;
    catalogueText: string;
    catalogueCta: (n: number) => string;
    machinesTitle: string;
    machinesText: string;
    loading: string;
    cookies: {
      text: string;
      refuse: string;
      accept: string;
    };
  };
  catalogue: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    lede: string;
    filterLabel: string;
    all: string;
    empty: string;
    cardCta: string;
    metierTitle: (m: string) => string;
  };
  metiers: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    lede: string;
    bandTitle: string;
    bandCta: string;
  };
  piece: {
    sizes: string;
    fabricationTitle: string;
    fabrication: (sizes: string) => string[];
    ctaAsk: string;
    ctaWorkshop: string;
    related: string;
    fallbackSub: (metier: string) => string;
  };
  surMesure: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    lede: string;
    ctaStart: string;
    ctaCatalogue: string;
    heroAlt: string;
    stepsTitle: string;
    steps: { n: string; title: string; text: string }[];
    termsLabel: string;
    terms: { label: string; text: string }[];
    closerTitle: string;
    closerCta: string;
  };
  atelier: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    intro: [string, string];
    machinesTitle: string;
    machineAlts: [string, string, string];
    videoLabel: string;
    closerTitle: string;
    closerCta: string;
  };
  contact: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    lede: string;
    formTitle: string;
    fields: {
      societe: string;
      nom: string;
      telephone: string;
      email: string;
      effectif: string;
      metier: string;
      message: string;
    };
    options: string[];
    optionsShort: string[];
    sentTo: string;
    submit: string;
    status: (mail: string) => string;
    mailLabels: {
      societe: string;
      contact: string;
      telephone: string;
      email: string;
      effectif: string;
      besoin: string;
      subject: string;
    };
  };
  notFound: {
    title: string;
    eyebrow: string;
    heading: string;
    lede: string;
    cta: string;
    closerTitle: string;
    closerCta: string;
  };
}

const fr: Messages = {
  nav: {
    catalogue: "CATALOGUE",
    metiers: "MÉTIERS",
    surMesure: "SUR-MESURE",
    atelier: "ATELIER",
    quote: "DEVIS EN 48 H",
    skip: "ALLER AU CONTENU",
    mainNav: "Navigation principale",
    breadcrumb: "Fil d’Ariane",
    switchTo: "Voir le site en",
  },
  common: {
    references: (n) => `${n} ${n > 1 ? "RÉFÉRENCES" : "RÉFÉRENCE"}`,
    address: "CASABLANCA",
    hours: "LUNDI — SAMEDI · 8 H 30 → 18 H",
    quoteBandTitle: ["Équipons", "votre équipe"],
    quoteCta: "DEMANDER UN DEVIS →",
    backHome: "← RETOUR À L’ACCUEIL",
    seeCatalogue: "VOIR LE CATALOGUE",
    backToCatalogue: "← RETOUR AU CATALOGUE",
  },
  home: {
    title: "Rougevif — Vêtement de travail, Casablanca",
    description:
      "Vêtement de travail coupé, cousu et marqué à Casablanca. Sergé de coton sanforisé 320 g/m², coutures triples, devis chiffré en 48 h, réassort garanti 5 ans.",
    ticker:
      "VÊTEMENT DE TRAVAIL · CASABLANCA · SANFORISÉ 320 G/M² · COUTURES TRIPLES · RÉASSORT 5 ANS · ",
    live: "ATELIER OUVERT · CASABLANCA",
    heroLine1: "Le travail",
    heroLine2: "n’attend pas",
    heroWords: ["les mécanos.", "les chefs.", "les soudeurs.", "les agents."],
    heroLede:
      "Sergé de coton sanforisé 320 g/m², coutures triples, rivets laiton. Coupé, cousu et marqué chez nous — puis porté six jours sur sept.",
    ctaQuote: "DEMANDER UN DEVIS",
    ctaWorkshop: "VOIR L’ATELIER",
    stats: [
      { n: "2014", label: "PREMIÈRE SÉRIE" },
      { n: "180", label: "ENTREPRISES ÉQUIPÉES" },
      { n: "48 h", label: "DEVIS CHIFFRÉ" },
      { n: "5 ans", label: "RÉASSORT GARANTI" },
    ],
    manifesto: "On ne s’habille pas pour travailler. On s’équipe.",
    pillars: [
      "Sergé de coton sanforisé, teint en pièce : la couleur tient au lavage industriel.",
      "Coutures triples et rivets laiton posés aux points de fatigue réels du poste.",
      "Prise de mesures sur site, prototype en deux semaines, réassort garanti cinq ans.",
    ],
    tiles: [
      { name: "Industrie", sub: "COMBINAISONS · PARKAS · HAUTE VISIBILITÉ" },
      { name: "Cuisine", sub: "VESTES CROISÉES · TABLIERS CUIR" },
      { name: "Service", sub: "POLOS · BLOUSES · BLAZERS" },
    ],
    workshopEyebrow: "L’ATELIER",
    workshopTitle: "42 personnes, un seul toit",
    workshopText:
      "Coupe, couture, broderie et marquage réunis sous un même toit. Vous voyez le vêtement naître, vous le corrigez avant la série.",
    workshopCta: "VISITER L’ATELIER",
    catalogueEyebrow: "CATALOGUE",
    catalogueTitle: "Chaque métier, sa pièce",
    catalogueText:
      "Galerie des pièces que nous confectionnons. Matières, coupes et finitions détaillées — le chiffrage se fait sur mesure, après échange.",
    catalogueCta: (n) => `VOIR LES ${n} RÉFÉRENCES →`,
    machinesTitle: "Nos machines de confection",
    machinesText:
      "Piqueuses plates, surjeteuses cinq fils, recouvreuses, brodeuses douze têtes et presses de marquage : tout le parc tourne sous le même toit.",
    loading: "CHARGEMENT",
    cookies: {
      text: "Nous utilisons des cookies pour mesurer l’audience du site et retenir vos préférences. Aucun suivi publicitaire.",
      refuse: "REFUSER",
      accept: "ACCEPTER",
    },
  },
  catalogue: {
    title: "Catalogue",
    description:
      "21 références de vêtement de travail confectionnées à Casablanca : industrie, protection, cuisine, service, logistique, agroalimentaire et scolaire.",
    eyebrow: "CATALOGUE",
    heading: "Chaque métier, sa pièce",
    lede: "Photographie produit : chaque pièce est présentée seule, sur fond neutre, pour juger des coutures, poches, zips et bandes. Cliquez pour la fiche technique. Le chiffrage se fait après échange.",
    filterLabel: "Filtrer par métier",
    all: "TOUT VOIR",
    empty: "Aucune référence pour ce métier.",
    cardCta: "VOIR LA FICHE →",
    metierTitle: (m) => `Catalogue ${m}`,
  },
  metiers: {
    title: "Métiers équipés",
    description:
      "Sept métiers, sept vestiaires : industrie, protection, cuisine, service, logistique, agroalimentaire et scolaire. Chaque secteur a ses contraintes de matière, d’hygiène et de sécurité.",
    eyebrow: "MÉTIERS ÉQUIPÉS",
    heading: "Sept métiers, sept vestiaires",
    lede: "Nous ne vendons pas un catalogue unique à tout le monde. Chaque secteur a ses contraintes de matière, d’hygiène et de sécurité — et son vestiaire.",
    bandTitle: "Votre métier n’est pas listé ?",
    bandCta: "PASSER AU SUR-MESURE →",
  },
  piece: {
    sizes: "TAILLES",
    fabricationTitle: "FABRICATION PROFESSIONNELLE",
    fabrication: (sizes) => [
      `Tailles ${sizes}`,
      "Personnalisation poitrine et dos",
      "Sérigraphie, broderie ou transfert",
      "Quantités professionnelles sur demande",
    ],
    ctaAsk: "DEMANDER CETTE PIÈCE",
    ctaWorkshop: "VOIR L’ATELIER",
    related: "DANS LE MÊME MÉTIER",
    fallbackSub: (metier) => `Vêtement professionnel — ${metier.toLowerCase()}`,
  },
  surMesure: {
    title: "Sur-mesure",
    description:
      "Votre vestiaire dessiné avec vous : relevé de postes sur site, choix des matières, prototype porté, puis série lancée dans notre atelier de Casablanca. 6 à 8 semaines.",
    eyebrow: "SUR-MESURE",
    heading: "Votre vestiaire, dessiné avec vous",
    lede: "Nous partons de vos postes, pas d’un catalogue. Prise de mesures sur site, prototype validé par les porteurs, puis série lancée dans notre atelier de Casablanca.",
    ctaStart: "LANCER UN PROJET",
    ctaCatalogue: "PARTIR DU CATALOGUE",
    heroAlt:
      "Deux responsables en gilet haute visibilité orange examinent un document sur un chantier",
    stepsTitle: "LE DÉROULÉ — 6 À 8 SEMAINES",
    steps: [
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
    ],
    termsLabel: "Conditions du sur-mesure",
    terms: [
      {
        label: "PERSONNALISATION",
        text: "Broderie poitrine et dos, sérigraphie, transfert haute ténacité, passepoils et empiècements aux couleurs de l’enseigne, étiquettes nominatives tissées.",
      },
      {
        label: "QUANTITÉS",
        text: "À partir de 25 pièces par référence en sur-mesure. Réassort garanti cinq ans sur les modèles validés, sans minimum de commande.",
      },
      {
        label: "SUIVI",
        text: "Un interlocuteur unique, une fiche technique archivée par référence, et vos tailles conservées pour les nouveaux arrivants.",
      },
    ],
    closerTitle: "Décrivez vos postes, nous revenons sous 48 h",
    closerCta: "DEMANDER UN DEVIS →",
  },
  atelier: {
    title: "L’atelier",
    description:
      "42 personnes sous un seul toit, à Casablanca. Coupe, couture, broderie et marquage réunis dans un même bâtiment — rien n’est sous-traité.",
    eyebrow: "CASABLANCA",
    heading: "42 personnes, un seul toit",
    intro: [
      "Coupe, couture, broderie et marquage sont réunis dans un même bâtiment. Vous voyez le vêtement naître, vous le corrigez avant la série — et vous savez qui l’a cousu.",
      "Le parc machines tourne six jours sur sept : piqueuses plates, surjeteuses cinq fils, recouvreuses, brodeuses douze têtes et presses de marquage. Rien n’est sous-traité hors de Casablanca.",
    ],
    machinesTitle: "Nos machines de confection",
    machineAlts: [
      "Ligne de piquage : une couturière à sa piqueuse plate, l’atelier en enfilade derrière elle",
      "Rangée de machines industrielles en production sous éclairage d’atelier",
      "Brodeuses multi-têtes marquant un logo sur un vêtement",
    ],
    videoLabel: "Vue de l’atelier Rougevif en production",
    closerTitle: "Venez voir l’atelier",
    closerCta: "PRENDRE RENDEZ-VOUS →",
  },
  contact: {
    title: "Contact",
    description:
      "Décrivez vos postes et vos effectifs : nous revenons vers vous sous 48 h avec un devis chiffré et un échantillon de tissu. Casablanca.",
    eyebrow: "CONTACT",
    heading: "Dites-nous qui vous habillez",
    lede: "Décrivez vos postes et vos effectifs : nous revenons vers vous sous 48 h avec un devis chiffré et un échantillon de tissu.",
    formTitle: "Demande de devis",
    fields: {
      societe: "SOCIÉTÉ",
      nom: "NOM ET PRÉNOM",
      telephone: "TÉLÉPHONE",
      email: "E-MAIL PROFESSIONNEL",
      effectif: "EFFECTIF À ÉQUIPER",
      metier: "BESOIN",
      message: "POSTES CONCERNÉS, CONTRAINTES, MARQUAGE SOUHAITÉ",
    },
    options: [
      "Industrie · combinaisons, parkas, haute visibilité",
      "Protection · EPI, gilets chantier, sous-couches",
      "Cuisine · vestes croisées, tabliers",
      "Service · polos, blouses, blazers",
      "Logistique · softshells, sweats, cargos",
      "Agroalimentaire · blouses HACCP",
      "Scolaire · uniformes d’établissement",
      "Sur-mesure · autre besoin",
    ],
    optionsShort: [
      "Industrie · combinaisons, parkas, haute visibilité",
      "Cuisine · vestes croisées, tabliers",
      "Service · polos, blouses, blazers",
      "Sur-mesure · autre besoin",
    ],
    sentTo: "ENVOYÉ À",
    submit: "ENVOYER LA DEMANDE →",
    status: (mail) =>
      `Votre logiciel de messagerie va s’ouvrir avec la demande pré-remplie. S’il ne s’ouvre pas, écrivez directement à ${mail}.`,
    mailLabels: {
      societe: "Société",
      contact: "Contact",
      telephone: "Téléphone",
      email: "E-mail",
      effectif: "Effectif à équiper",
      besoin: "Besoin",
      subject: "Demande de devis —",
    },
  },
  notFound: {
    title: "Page introuvable",
    eyebrow: "ERREUR 404",
    heading: "Cette page n’existe pas",
    lede: "Le lien est peut-être ancien. Le catalogue complet reste accessible.",
    cta: "VOIR LE CATALOGUE →",
    closerTitle: "Besoin d’équiper une équipe ?",
    closerCta: "DEMANDER UN DEVIS →",
  },
};

const en: Messages = {
  nav: {
    catalogue: "CATALOGUE",
    metiers: "TRADES",
    surMesure: "MADE-TO-MEASURE",
    atelier: "WORKSHOP",
    quote: "QUOTE IN 48 H",
    skip: "SKIP TO CONTENT",
    mainNav: "Main navigation",
    breadcrumb: "Breadcrumb",
    switchTo: "View this site in",
  },
  common: {
    references: (n) => `${n} ${n > 1 ? "REFERENCES" : "REFERENCE"}`,
    address: "CASABLANCA",
    hours: "MONDAY — SATURDAY · 8.30 AM → 6 PM",
    quoteBandTitle: ["Let’s kit out", "your team"],
    quoteCta: "REQUEST A QUOTE →",
    backHome: "← BACK TO HOME",
    seeCatalogue: "VIEW THE CATALOGUE",
    backToCatalogue: "← BACK TO CATALOGUE",
  },
  home: {
    title: "Rougevif — Workwear, Casablanca",
    description:
      "Workwear cut, sewn and marked in Casablanca. Sanforised cotton twill 320 gsm, triple stitching, costed quote in 48 hours, five-year resupply guarantee.",
    ticker:
      "WORKWEAR · CASABLANCA · SANFORISED 320 GSM · TRIPLE STITCHING · 5-YEAR RESUPPLY · ",
    live: "WORKSHOP OPEN · CASABLANCA",
    heroLine1: "Work doesn’t",
    heroLine2: "wait around",
    heroWords: [
      "for mechanics.",
      "for chefs.",
      "for welders.",
      "for officers.",
    ],
    heroLede:
      "Sanforised cotton twill 320 gsm, triple stitching, brass rivets. Cut, sewn and marked in-house — then worn six days a week.",
    ctaQuote: "REQUEST A QUOTE",
    ctaWorkshop: "SEE THE WORKSHOP",
    stats: [
      { n: "2014", label: "FIRST PRODUCTION RUN" },
      { n: "180", label: "COMPANIES KITTED OUT" },
      { n: "48 h", label: "COSTED QUOTE" },
      { n: "5 years", label: "RESUPPLY GUARANTEED" },
    ],
    manifesto: "You don’t dress for work. You equip for it.",
    pillars: [
      "Piece-dyed sanforised cotton twill: the colour holds through industrial laundering.",
      "Triple stitching and brass rivets placed at the job’s real stress points.",
      "On-site measuring, a prototype in two weeks, resupply guaranteed for five years.",
    ],
    tiles: [
      { name: "Industry", sub: "COVERALLS · PARKAS · HIGH VISIBILITY" },
      { name: "Kitchen", sub: "DOUBLE-BREASTED JACKETS · LEATHER APRONS" },
      { name: "Front of house", sub: "POLOS · TUNICS · BLAZERS" },
    ],
    workshopEyebrow: "THE WORKSHOP",
    workshopTitle: "42 people, one roof",
    workshopText:
      "Cutting, sewing, embroidery and marking under one roof. You watch the garment take shape, and correct it before the run.",
    workshopCta: "VISIT THE WORKSHOP",
    catalogueEyebrow: "CATALOGUE",
    catalogueTitle: "Every trade, its garment",
    catalogueText:
      "The pieces we make. Fabrics, cuts and finishes in detail — pricing is worked out with you, after we talk.",
    catalogueCta: (n) => `VIEW ALL ${n} REFERENCES →`,
    machinesTitle: "Our sewing machinery",
    machinesText:
      "Flatbed machines, five-thread overlockers, coverstitch machines, twelve-head embroidery machines and marking presses: the whole floor runs under one roof.",
    loading: "LOADING",
    cookies: {
      text: "We use cookies to measure site traffic and remember your preferences. No advertising tracking.",
      refuse: "DECLINE",
      accept: "ACCEPT",
    },
  },
  catalogue: {
    title: "Catalogue",
    description:
      "21 workwear references made in Casablanca: industry, protection, kitchen, front of house, logistics, food processing and schools.",
    eyebrow: "CATALOGUE",
    heading: "Every trade, its garment",
    lede: "Product photography: each piece is shown on its own against a neutral ground, so you can judge the stitching, pockets, zips and reflective banding. Click through for the spec sheet. Pricing follows a conversation.",
    filterLabel: "Filter by trade",
    all: "VIEW ALL",
    empty: "No references for this trade.",
    cardCta: "VIEW SPEC SHEET →",
    metierTitle: (m) => `${m} catalogue`,
  },
  metiers: {
    title: "Trades we equip",
    description:
      "Seven trades, seven wardrobes: industry, protection, kitchen, front of house, logistics, food processing and schools. Each sector has its own fabric, hygiene and safety constraints.",
    eyebrow: "TRADES WE EQUIP",
    heading: "Seven trades, seven wardrobes",
    lede: "We don’t sell one catalogue to everybody. Each sector has its own fabric, hygiene and safety constraints — and its own wardrobe.",
    bandTitle: "Your trade isn’t listed?",
    bandCta: "GO MADE-TO-MEASURE →",
  },
  piece: {
    sizes: "SIZES",
    fabricationTitle: "PROFESSIONAL MANUFACTURE",
    fabrication: (sizes) => [
      `Sizes ${sizes}`,
      "Chest and back personalisation",
      "Screen printing, embroidery or transfer",
      "Trade quantities on request",
    ],
    ctaAsk: "ENQUIRE ABOUT THIS PIECE",
    ctaWorkshop: "SEE THE WORKSHOP",
    related: "IN THE SAME TRADE",
    fallbackSub: (metier) => `Professional garment — ${metier.toLowerCase()}`,
  },
  surMesure: {
    title: "Made-to-measure",
    description:
      "Your wardrobe designed with you: on-site job survey, fabric selection, a worn prototype, then the run launched in our Casablanca workshop. 6 to 8 weeks.",
    eyebrow: "MADE-TO-MEASURE",
    heading: "Your wardrobe, designed with you",
    lede: "We start from your jobs, not from a catalogue. On-site measuring, a prototype signed off by the people who wear it, then the run launched in our Casablanca workshop.",
    ctaStart: "START A PROJECT",
    ctaCatalogue: "START FROM THE CATALOGUE",
    heroAlt:
      "Two supervisors in orange high-visibility vests reviewing a document on a building site",
    stepsTitle: "HOW IT RUNS — 6 TO 8 WEEKS",
    steps: [
      {
        n: "01",
        title: "Site visit and job survey",
        text: "We come and watch the real movements: load carrying, crouching, temperatures, hygiene constraints.",
      },
      {
        n: "02",
        title: "Fabric selection",
        text: "Swatches handed over in person: weights, treatments, behaviour under industrial laundering.",
      },
      {
        n: "03",
        title: "Worn prototype",
        text: "Two weeks for a first sample, worn for a full week by your teams before sign-off.",
      },
      {
        n: "04",
        title: "Production and marking",
        text: "Cutting, sewing, embroidery and marking done on site, then delivered by name and size.",
      },
    ],
    termsLabel: "Made-to-measure terms",
    terms: [
      {
        label: "PERSONALISATION",
        text: "Chest and back embroidery, screen printing, high-tenacity transfer, piping and panels in your brand colours, woven name labels.",
      },
      {
        label: "QUANTITIES",
        text: "From 25 pieces per reference for made-to-measure. Resupply guaranteed for five years on approved models, with no minimum order.",
      },
      {
        label: "FOLLOW-UP",
        text: "A single point of contact, a spec sheet archived per reference, and your sizes kept on file for new starters.",
      },
    ],
    closerTitle: "Tell us about your jobs, we come back within 48 h",
    closerCta: "REQUEST A QUOTE →",
  },
  atelier: {
    title: "The workshop",
    description:
      "42 people under one roof in Casablanca. Cutting, sewing, embroidery and marking in the same building — nothing is subcontracted.",
    eyebrow: "CASABLANCA",
    heading: "42 people, one roof",
    intro: [
      "Cutting, sewing, embroidery and marking all happen in the same building. You watch the garment take shape, you correct it before the run — and you know who sewed it.",
      "The machine floor runs six days a week: flatbed machines, five-thread overlockers, coverstitch machines, twelve-head embroidery machines and marking presses. Nothing is subcontracted outside Casablanca.",
    ],
    machinesTitle: "Our sewing machinery",
    machineAlts: [
      "The sewing line: a machinist at her flatbed machine, the workshop stretching out behind her",
      "A row of industrial machines in production under workshop lighting",
      "Multi-head embroidery machines stitching a logo onto a garment",
    ],
    videoLabel: "View of the Rougevif workshop in production",
    closerTitle: "Come and see the workshop",
    closerCta: "BOOK A VISIT →",
  },
  contact: {
    title: "Contact",
    description:
      "Tell us about your jobs and headcount: we come back within 48 hours with a costed quote and a fabric swatch. Casablanca.",
    eyebrow: "CONTACT",
    heading: "Tell us who you’re dressing",
    lede: "Tell us about your jobs and your headcount: we come back to you within 48 hours with a costed quote and a fabric swatch.",
    formTitle: "Quote request",
    fields: {
      societe: "COMPANY",
      nom: "FULL NAME",
      telephone: "PHONE",
      email: "WORK EMAIL",
      effectif: "HEADCOUNT TO EQUIP",
      metier: "WHAT YOU NEED",
      message: "JOBS CONCERNED, CONSTRAINTS, MARKING REQUIRED",
    },
    options: [
      "Industry · coveralls, parkas, high visibility",
      "Protection · PPE, site vests, base layers",
      "Kitchen · double-breasted jackets, aprons",
      "Front of house · polos, tunics, blazers",
      "Logistics · softshells, sweatshirts, cargos",
      "Food processing · HACCP tunics",
      "Schools · institution uniforms",
      "Made-to-measure · something else",
    ],
    optionsShort: [
      "Industry · coveralls, parkas, high visibility",
      "Kitchen · double-breasted jackets, aprons",
      "Front of house · polos, tunics, blazers",
      "Made-to-measure · something else",
    ],
    sentTo: "SENT TO",
    submit: "SEND REQUEST →",
    status: (mail) =>
      `Your email client will open with the request pre-filled. If it doesn’t, write to ${mail} directly.`,
    mailLabels: {
      societe: "Company",
      contact: "Contact",
      telephone: "Phone",
      email: "Email",
      effectif: "Headcount to equip",
      besoin: "Requirement",
      subject: "Quote request —",
    },
  },
  notFound: {
    title: "Page not found",
    eyebrow: "ERROR 404",
    heading: "This page doesn’t exist",
    lede: "The link may be an old one. The full catalogue is still available.",
    cta: "VIEW THE CATALOGUE →",
    closerTitle: "Need to kit out a team?",
    closerCta: "REQUEST A QUOTE →",
  },
};

export const MESSAGES: Record<Locale, Messages> = { fr, en };

export const getMessages = (locale: Locale): Messages => MESSAGES[locale];
