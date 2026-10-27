/* Crawls the running site and reports broken internal links, failed local
 * requests, duplicate ids, and pages missing required landmarks.
 *
 *   npm run build && npm start        # in one shell
 *   npm run check                     # in another (defaults to :3000)
 */

import { chromium } from "playwright";
import { ITEMS, METIERS } from "../lib/rv-data.ts";
import { LOCALES } from "../lib/i18n/config.ts";

const BASE = process.argv[2] || "http://localhost:3000";

const ROUTES = LOCALES.flatMap((l) => [
  `/${l}`,
  `/${l}/catalogue`,
  `/${l}/metiers`,
  `/${l}/sur-mesure`,
  `/${l}/atelier`,
  `/${l}/contact`,
  ...METIERS.map((m) => `/${l}/catalogue/${m.key}`),
  ...ITEMS.map((i) => `/${l}/piece/${i.slot}`),
]);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// First hit of each route also runs Next's on-demand image optimisation, which
// is slow for a 21-card grid. Be generous.
page.setDefaultNavigationTimeout(120_000);
page.setDefaultTimeout(120_000);

const problems = [];
const linkTargets = new Set();

for (const route of ROUTES) {
  const url = BASE + route;
  const pageErrors = [];

  const onConsole = (m) => {
    if (m.type() === "error") pageErrors.push("console: " + m.text());
  };
  const onFailed = (r) => {
    // Remote CDN images are a separate concern; aborts are just navigation
    // cancelling below-fold lazy images and the looping hero video.
    if (!r.url().startsWith(BASE)) return;
    const why = r.failure()?.errorText ?? "";
    if (/ABORTED/i.test(why)) return;
    pageErrors.push(`request failed (${why}): ${r.url()}`);
  };
  const onResponse = (r) => {
    if (r.url().startsWith(BASE) && r.status() >= 400) {
      pageErrors.push(`${r.status()} ${r.url().replace(BASE, "")}`);
    }
  };

  page.on("console", onConsole);
  page.on("requestfailed", onFailed);
  page.on("response", onResponse);

  const resp = await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForLoadState("load").catch(() => {});
  if (!resp || resp.status() !== 200) {
    problems.push(`${route}: HTTP ${resp ? resp.status() : "no response"}`);
  }

  const info = await page.evaluate(() => {
    const ids = [...document.querySelectorAll("[id]")].map((e) => e.id);
    return {
      title: document.title,
      lang: document.documentElement.lang,
      h1: document.querySelectorAll("h1").length,
      main: !!document.querySelector("main"),
      skip: !!document.querySelector(".rv-skip"),
      desc: !!document.querySelector('meta[name="description"]'),
      dupes: [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))],
      brokenLocalImgs: [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0)
        .map((i) => i.currentSrc || i.src)
        .filter((s) => !/^https?:\/\/(?!localhost)/.test(s)),
      imgsNoAlt: [...document.images].filter((i) => i.getAttribute("alt") === null).length,
      links: [...document.querySelectorAll("a[href]")]
        .map((a) => a.getAttribute("href"))
        .filter((h) => h && h.startsWith("/")),
      overflow: document.documentElement.scrollWidth > window.innerWidth,
    };
  });

  if (!info.title) problems.push(`${route}: no <title>`);
  const expectLang = route.startsWith("/en") ? "en" : "fr-MA";
  if (info.lang !== expectLang) {
    problems.push(`${route}: lang="${info.lang}" (expected ${expectLang})`);
  }
  if (info.h1 !== 1) problems.push(`${route}: ${info.h1} <h1>`);
  if (!info.main) problems.push(`${route}: no <main>`);
  if (!info.skip) problems.push(`${route}: no skip link`);
  if (!info.desc) problems.push(`${route}: no meta description`);
  if (info.dupes.length) problems.push(`${route}: duplicate id ${info.dupes.join(", ")}`);
  if (info.imgsNoAlt) problems.push(`${route}: ${info.imgsNoAlt} img without alt`);
  if (info.overflow) problems.push(`${route}: horizontal overflow`);
  info.brokenLocalImgs.forEach((b) => problems.push(`${route}: broken image ${b}`));
  pageErrors.forEach((e) => problems.push(`${route}: ${e}`));

  info.links.forEach((h) => linkTargets.add(BASE + h.replace(/#.*$/, "")));

  page.off("console", onConsole);
  page.off("requestfailed", onFailed);
  page.off("response", onResponse);
}

for (const link of [...linkTargets].sort()) {
  const r = await page.request.get(link);
  if (!r.ok()) problems.push(`dead link: ${link.replace(BASE, "")} -> ${r.status()}`);
}

await browser.close();

console.log(`checked ${ROUTES.length} routes, ${linkTargets.size} distinct internal link targets`);
if (problems.length) {
  console.log(`\n${problems.length} PROBLEM(S):`);
  problems.forEach((p) => console.log("  - " + p));
  process.exit(1);
}
console.log("\nno problems found");
