import type { Locale } from "@/lib/i18n/config";
import type { Slot } from "@/lib/rv-data";

/* Copy written for search: the two landing pages, the FAQs and the footer
   links that point at them. Every claim here repeats a fact stated elsewhere
   on the site (atelier, marquage, délais, quantités) — keep it that way. */

export interface Faq {
  q: string;
  a: string;
}

export interface Landing {
  /** Path after the locale, e.g. "/epi". */
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lede: string;
  heroSrc: string;
  heroAlt: string;
  productsTitle: string;
  products: Slot[];
  pointsLabel: string;
  points: { label: string; text: string }[];
  faqTitle: string;
  faq: Faq[];
  ctaQuote: string;
  ctaCatalogue: string;
  closerTitle: string;
  closerCta: string;
}

type LandingKey = "publicitaire" | "epi";

const LANDINGS: Record<Locale, Record<LandingKey, Landing>> = {
  fr: {
    publicitaire: {
      path: "/textile-publicitaire",
      title: "Textile publicitaire personnalisé à Casablanca",
      description:
        "Polos, t-shirts et casquettes brodés ou imprimés au logo de votre entreprise, fabriqués et marqués dans notre atelier de Casablanca. Devis chiffré sous 48 h.",
      eyebrow: "TEXTILE PUBLICITAIRE · CASABLANCA",
      heading: "Textile publicitaire à votre logo",
      lede: "Polos, t-shirts, casquettes et chemises aux couleurs de votre marque. Nous les cousons et les marquons nous-mêmes à Casablanca : broderie, sérigraphie ou transfert, sans intermédiaire.",
      heroSrc: "/uploads/imgi_12_polo-manche-courte-ce138.jpg",
      heroAlt: "Polo piqué bleu roi Rougevif, prêt à être brodé au logo d’une entreprise",
      productsTitle: "LES PIÈCES LES PLUS DEMANDÉES",
      products: ["s1", "l2", "l4", "s4"],
      pointsLabel: "Techniques de marquage",
      points: [
        {
          label: "BRODERIE",
          text: "Logo brodé poitrine, dos ou manche. Tient au lavage industriel et reste net dans le temps : le choix des équipes en contact client.",
        },
        {
          label: "SÉRIGRAPHIE",
          text: "Pour les grands visuels et les séries : aplats de couleur vifs au dos des t-shirts et des polos, pour un événement ou une campagne.",
        },
        {
          label: "TRANSFERT",
          text: "Transfert haute ténacité pour les logos détaillés, les noms et les numéros individuels.",
        },
      ],
      faqTitle: "Questions fréquentes — textile publicitaire",
      faq: [
        {
          q: "Pouvez-vous broder ou imprimer le logo de mon entreprise ?",
          a: "Oui. Broderie, sérigraphie et transfert haute ténacité sont réalisés dans notre atelier de Casablanca, en poitrine, au dos ou sur la manche.",
        },
        {
          q: "Quels articles peut-on personnaliser ?",
          a: "Polos, t-shirts, chemises, casquettes, blousons et vêtements de travail de notre catalogue, dans les coloris de votre enseigne.",
        },
        {
          q: "Combien de temps pour recevoir un devis ?",
          a: "Nous envoyons un devis chiffré sous 48 h, avec un échantillon de tissu.",
        },
        {
          q: "Est-ce sous-traité ?",
          a: "Non. Coupe, couture, broderie et marquage sont réunis dans le même bâtiment à Casablanca.",
        },
      ],
      ctaQuote: "DEMANDER UN DEVIS",
      ctaCatalogue: "VOIR LE CATALOGUE",
      closerTitle: "Envoyez votre logo, nous revenons sous 48 h",
      closerCta: "DEMANDER UN DEVIS →",
    },
    epi: {
      path: "/epi",
      title: "EPI et vêtements haute visibilité à Casablanca",
      description:
        "Combinaisons et parkas haute visibilité classe 2 et 3, salopettes doublées et vêtements de protection fabriqués à Casablanca. Devis chiffré sous 48 h.",
      eyebrow: "EPI · HAUTE VISIBILITÉ · CASABLANCA",
      heading: "EPI et vêtements haute visibilité",
      lede: "Combinaisons, parkas et salopettes pour les chantiers, l’industrie et les postes extérieurs. Bandes rétroréfléchissantes, tissus déperlants, logements genouillères — confectionnés dans notre atelier de Casablanca.",
      heroSrc: "/uploads/imgi_11_combinaison-haute-visibilite.jpg",
      heroAlt: "Combinaison haute visibilité jaune et grise Rougevif, bandes rétroréfléchissantes",
      productsTitle: "LA GAMME PROTECTION",
      products: ["i4", "p2", "p1", "p3"],
      pointsLabel: "Ce que nous fabriquons",
      points: [
        {
          label: "HAUTE VISIBILITÉ",
          text: "Combinaisons et parkas de signalisation classe 2 et 3, bandes rétroréfléchissantes cousues, pour les chantiers et les abords de voirie.",
        },
        {
          label: "POSTES EXTÉRIEURS",
          text: "Salopettes doublées et parkas déperlantes pour le froid et la pluie, avec logements genouillères.",
        },
        {
          label: "MARQUAGE",
          text: "Logo et nom de l’entreprise brodés ou transférés, sans masquer les bandes réfléchissantes.",
        },
      ],
      faqTitle: "Questions fréquentes — EPI",
      faq: [
        {
          q: "Fabriquez-vous des vêtements haute visibilité ?",
          a: "Oui : combinaisons et parkas de signalisation classe 2 et 3, avec bandes rétroréfléchissantes, fabriquées dans notre atelier de Casablanca.",
        },
        {
          q: "Pouvez-vous ajouter notre logo sur les EPI ?",
          a: "Oui, en broderie ou en transfert haute ténacité, placé de façon à ne pas couvrir les bandes réfléchissantes.",
        },
        {
          q: "Pour quels métiers ?",
          a: "Chantiers, industrie, logistique, sécurité et tous les postes en extérieur ou à proximité de la circulation.",
        },
        {
          q: "Pourrons-nous recommander les mêmes modèles ?",
          a: "Oui, le réassort est garanti cinq ans, à la même teinte, sans minimum de commande.",
        },
      ],
      ctaQuote: "DEMANDER UN DEVIS",
      ctaCatalogue: "VOIR LA GAMME PROTECTION",
      closerTitle: "Équipez vos équipes, devis sous 48 h",
      closerCta: "DEMANDER UN DEVIS →",
    },
  },
  en: {
    publicitaire: {
      path: "/textile-publicitaire",
      title: "Custom promotional apparel in Casablanca",
      description:
        "Polo shirts, T-shirts and caps embroidered or printed with your company logo, made and marked in our Casablanca workshop. Costed quote within 48 hours.",
      eyebrow: "PROMOTIONAL APPAREL · CASABLANCA",
      heading: "Promotional apparel with your logo",
      lede: "Polo shirts, T-shirts, caps and shirts in your brand colours. We sew and mark them ourselves in Casablanca: embroidery, screen printing or transfer, with no middleman.",
      heroSrc: "/uploads/imgi_12_polo-manche-courte-ce138.jpg",
      heroAlt: "Royal blue Rougevif piqué polo shirt, ready to be embroidered with a company logo",
      productsTitle: "MOST REQUESTED PIECES",
      products: ["s1", "l2", "l4", "s4"],
      pointsLabel: "Marking techniques",
      points: [
        {
          label: "EMBROIDERY",
          text: "Logo embroidered on the chest, back or sleeve. Stands up to industrial washing and stays sharp — the choice for customer-facing teams.",
        },
        {
          label: "SCREEN PRINTING",
          text: "For large artwork and longer runs: bright solid colours on the back of T-shirts and polos, for an event or a campaign.",
        },
        {
          label: "TRANSFER",
          text: "High-tenacity transfer for detailed logos, individual names and numbers.",
        },
      ],
      faqTitle: "FAQ — promotional apparel",
      faq: [
        {
          q: "Can you embroider or print our company logo?",
          a: "Yes. Embroidery, screen printing and high-tenacity transfer are all done in our Casablanca workshop, on the chest, back or sleeve.",
        },
        {
          q: "Which items can be customised?",
          a: "Polo shirts, T-shirts, shirts, caps, jackets and the workwear in our catalogue, in your brand colours.",
        },
        {
          q: "How long does a quote take?",
          a: "We send a costed quote within 48 hours, with a fabric swatch.",
        },
        {
          q: "Is any of it subcontracted?",
          a: "No. Cutting, sewing, embroidery and marking all happen in the same building in Casablanca.",
        },
      ],
      ctaQuote: "REQUEST A QUOTE",
      ctaCatalogue: "SEE THE CATALOGUE",
      closerTitle: "Send us your logo, we reply within 48 hours",
      closerCta: "REQUEST A QUOTE →",
    },
    epi: {
      path: "/epi",
      title: "PPE and high-visibility workwear in Casablanca",
      description:
        "Class 2 and 3 high-visibility coveralls and parkas, lined bib overalls and protective workwear made in Casablanca. Costed quote within 48 hours.",
      eyebrow: "PPE · HIGH VISIBILITY · CASABLANCA",
      heading: "PPE and high-visibility workwear",
      lede: "Coveralls, parkas and bib overalls for building sites, industry and outdoor work. Retroreflective tape, water-repellent fabrics, knee-pad pockets — made in our Casablanca workshop.",
      heroSrc: "/uploads/imgi_11_combinaison-haute-visibilite.jpg",
      heroAlt: "Yellow and grey Rougevif high-visibility coverall with retroreflective tape",
      productsTitle: "THE PROTECTION RANGE",
      products: ["i4", "p2", "p1", "p3"],
      pointsLabel: "What we make",
      points: [
        {
          label: "HIGH VISIBILITY",
          text: "Class 2 and 3 signalling coveralls and parkas with sewn-on retroreflective tape, for building sites and roadside work.",
        },
        {
          label: "OUTDOOR WORK",
          text: "Lined bib overalls and water-repellent parkas for cold and rain, with knee-pad pockets.",
        },
        {
          label: "MARKING",
          text: "Company logo and name embroidered or transferred, without covering the reflective tape.",
        },
      ],
      faqTitle: "FAQ — PPE",
      faq: [
        {
          q: "Do you make high-visibility clothing?",
          a: "Yes: class 2 and 3 signalling coveralls and parkas with retroreflective tape, made in our Casablanca workshop.",
        },
        {
          q: "Can you add our logo to PPE?",
          a: "Yes, embroidered or as a high-tenacity transfer, placed so it never covers the reflective tape.",
        },
        {
          q: "Which trades is it for?",
          a: "Building sites, industry, logistics, security and any job outdoors or near traffic.",
        },
        {
          q: "Can we reorder the same models later?",
          a: "Yes, resupply is guaranteed for five years, in the same shade, with no minimum order.",
        },
      ],
      ctaQuote: "REQUEST A QUOTE",
      ctaCatalogue: "SEE THE PROTECTION RANGE",
      closerTitle: "Equip your teams — quote within 48 hours",
      closerCta: "REQUEST A QUOTE →",
    },
  },
};

export const getLanding = (key: LandingKey, locale: Locale): Landing =>
  LANDINGS[locale][key];

export const HOME_FAQ: Record<Locale, { title: string; items: Faq[] }> = {
  fr: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Fabriquez-vous vous-mêmes vos vêtements de travail ?",
        a: "Oui. Depuis 2011, tout est coupé, cousu, brodé et marqué dans notre atelier d’Aïn Chock, à Casablanca. Rien n’est sous-traité.",
      },
      {
        q: "Pouvez-vous mettre le logo de mon entreprise sur les vêtements ?",
        a: "Oui : broderie poitrine et dos, sérigraphie ou transfert haute ténacité, réalisés sur place. Voir notre page textile publicitaire.",
      },
      {
        q: "Proposez-vous des EPI et des vêtements haute visibilité ?",
        a: "Oui : combinaisons et parkas haute visibilité classe 2 et 3, salopettes doublées et vêtements pour postes extérieurs.",
      },
      {
        q: "En combien de temps recevrai-je un devis ?",
        a: "Sous 48 h, avec un devis chiffré et un échantillon de tissu. Pour un projet sur-mesure, comptez 6 à 8 semaines de la visite à la livraison.",
      },
      {
        q: "Y a-t-il une quantité minimum ?",
        a: "Les pièces du catalogue sont disponibles en quantités professionnelles sur demande. En sur-mesure, la série démarre à 25 pièces par référence.",
      },
      {
        q: "Pourrai-je recommander les mêmes vêtements plus tard ?",
        a: "Oui. Le réassort est garanti cinq ans sur les modèles validés, à la même teinte et sans minimum de commande.",
      },
      {
        q: "Quels secteurs habillez-vous ?",
        a: "Industrie, chantiers et EPI, cuisine et restauration, service et accueil, logistique, agroalimentaire et établissements scolaires.",
      },
    ],
  },
  en: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Do you make your workwear yourselves?",
        a: "Yes. Since 2011, everything has been cut, sewn, embroidered and marked in our Aïn Chock workshop in Casablanca. Nothing is subcontracted.",
      },
      {
        q: "Can you put our company logo on the clothing?",
        a: "Yes: chest and back embroidery, screen printing or high-tenacity transfer, all done in-house. See our promotional apparel page.",
      },
      {
        q: "Do you offer PPE and high-visibility clothing?",
        a: "Yes: class 2 and 3 high-visibility coveralls and parkas, lined bib overalls and clothing for outdoor work.",
      },
      {
        q: "How quickly will I get a quote?",
        a: "Within 48 hours, with a costed quote and a fabric swatch. For a made-to-measure project, allow 6 to 8 weeks from site visit to delivery.",
      },
      {
        q: "Is there a minimum order?",
        a: "Catalogue pieces are available in professional quantities on request. Made-to-measure runs start at 25 pieces per reference.",
      },
      {
        q: "Can we reorder the same clothing later?",
        a: "Yes. Resupply is guaranteed for five years on approved models, in the same shade and with no minimum order.",
      },
      {
        q: "Which sectors do you dress?",
        a: "Industry, building sites and PPE, kitchens and catering, front of house, logistics, food processing and schools.",
      },
    ],
  },
};

/** Footer links — every indexable section, so each page links to the others. */
export const FOOTER_NAV: Record<Locale, { label: string; path: string }[]> = {
  fr: [
    { label: "Catalogue", path: "/catalogue" },
    { label: "Métiers", path: "/metiers" },
    { label: "Textile publicitaire", path: "/textile-publicitaire" },
    { label: "EPI & haute visibilité", path: "/epi" },
    { label: "Sur-mesure", path: "/sur-mesure" },
    { label: "L’atelier", path: "/atelier" },
    { label: "Contact", path: "/contact" },
  ],
  en: [
    { label: "Catalogue", path: "/catalogue" },
    { label: "Trades", path: "/metiers" },
    { label: "Promotional apparel", path: "/textile-publicitaire" },
    { label: "PPE & high visibility", path: "/epi" },
    { label: "Made to measure", path: "/sur-mesure" },
    { label: "The workshop", path: "/atelier" },
    { label: "Contact", path: "/contact" },
  ],
};
