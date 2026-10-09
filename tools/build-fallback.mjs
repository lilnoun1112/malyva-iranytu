// A data/*.csv fájlokból elkészíti a data/fallback.js-t, hogy az index.html
// dupla kattintással (file://) megnyitva is működjön.
// Futtatás a repo gyökeréből:  node tools/build-fallback.mjs
import { readFileSync, writeFileSync } from "node:fs";

const read = f => readFileSync(new URL(`../data/${f}`, import.meta.url), "utf8");
const out = `// Automatikusan generált fájl – ne szerkeszd kézzel. Forrás: data/fa.csv, data/projektek.csv
// Újragenerálás: node tools/build-fallback.mjs
window.IRANYTU_FALLBACK = ${JSON.stringify({ fa: read("fa.csv"), projektek: read("projektek.csv") }, null, 2)};
`;
writeFileSync(new URL("../data/fallback.js", import.meta.url), out);
console.log("data/fallback.js frissítve");
