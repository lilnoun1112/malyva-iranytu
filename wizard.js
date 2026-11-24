/*
 * Mályvavirág iránytű – mondatépítő döntési fa
 *
 * Adatforrás: data/fa.csv (a fa) és data/projektek.csv (az ajánlható oldalak).
 * Mindkettő sima táblázat, Google Sheetsből CSV-ként exportálható.
 *
 * Mondatépítés:
 *   - minden csomópont "folytatas" mezője a gyerekei elé kerülő mondatrész, benne a "…" a választás helye
 *   - a gyerek "mondatresz" mezője kerül a "…" helyére (ha üres: a gomb felirata kisbetűvel)
 *   - a gyerek "egyedi_mondat" mezője a szülő folytatását teljesen lecseréli (pl. "…, mert konizáció előtt állok")
 *   - az "a(z)" névelő automatikusan "a" vagy "az" lesz a következő szó alapján
 */
(function () {
  "use strict";

  const SLOT = "…";
  const ARTICLE = "a(z)";
  const VOWEL = /^[aáeéiíoóöőuúüű]/i;
  const STAGGER = [0, 18, 6, 20, 2, 14, 4, 16]; // a dizájn "szétszórt" gombjai

  const el = {
    sentence: document.getElementById("sentence"),
    options: document.getElementById("options"),
    results: document.getElementById("results"),
    controls: document.getElementById("controls"),
    back: document.getElementById("backBtn"),
    reset: document.getElementById("resetBtn"),
    editorToggle: document.getElementById("editorToggle"),
    editor: document.getElementById("editor"),
  };

  let model = null;
  let path = []; // kiválasztott csomópontok azonosítói, a gyökér nélkül
  let dataSource = "";

  /* ---------- CSV ---------- */

  function parseCSV(text) {
    const rows = [];
    let row = [], field = "", quoted = false;
    text = text.replace(/^﻿/, "");
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (ch === '"') quoted = false;
        else field += ch;
      } else if (ch === '"') quoted = true;
      else if (ch === ",") { row.push(field); field = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(field); rows.push(row); row = []; field = "";
      } else field += ch;
    }
    if (field !== "" || row.length) { row.push(field); rows.push(row); }
    const head = (rows.shift() || []).map(h => h.trim().toLowerCase());
    return rows
      .filter(r => r.some(v => v.trim() !== ""))
      .map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] || "").trim()])));
  }

  /* ---------- Modell ---------- */

  function buildModel(faRows, projRows) {
    const warnings = [];
    const projects = new Map();
    projRows.forEach(p => {
      if (!p.nev) return;
      projects.set(p.nev.toLowerCase(), {
        name: p.nev, type: p.tipus || "Projekt", url: p.url, summary: p.leiras,
        placeholder: !!p.allapot,
      });
    });

    const nodes = new Map();
    const children = new Map();
    let root = null;

    faRows.forEach((row, i) => {
      if (!row.id) { warnings.push(`${i + 2}. sor: hiányzó id`); return; }
      if (nodes.has(row.id)) warnings.push(`Ismétlődő id: ${row.id}`);
      const recs = ["ajanlas_1", "ajanlas_2", "ajanlas_3", "ajanlas_4"]
        .map(k => row[k]).filter(Boolean)
        .map(cell => {
          const [name, url] = cell.split("|").map(s => s.trim());
          if (!projects.has(name.toLowerCase())) warnings.push(`${row.id}: ismeretlen ajánlás „${name}” – vedd fel a projektek.csv-be`);
          return { name, url: url || "" };
        });
      const node = {
        id: row.id, parent: row.szulo, label: row.gomb, fragment: row.mondatresz,
        sentence: row.egyedi_mondat, prompt: row.folytatas, recs,
        placeholder: !!row.allapot, status: row.allapot, note: row.megjegyzes,
      };
      nodes.set(node.id, node);
      if (!node.parent) {
        if (root) warnings.push(`Több gyökérsor van (${root.id}, ${node.id}) – az elsőt használom`);
        else root = node;
      } else {
        if (!children.has(node.parent)) children.set(node.parent, []);
        children.get(node.parent).push(node);
      }
    });

    nodes.forEach(n => {
      if (n.parent && !nodes.has(n.parent)) warnings.push(`${n.id}: a szülő („${n.parent}”) nem létezik`);
      const kids = children.get(n.id) || [];
      if (kids.length && !n.prompt) warnings.push(`${n.id}: vannak alopciói, de nincs „folytatas” szövege`);
      if (kids.length && n.prompt && !n.prompt.includes(SLOT) && kids.some(k => !k.sentence))
        warnings.push(`${n.id}: a „folytatas” szövegből hiányzik a „…” jel`);
      if (!kids.length && n !== root && !n.recs.length) warnings.push(`${n.id}: végpont ajánlás nélkül`);
      if (n !== root && !n.label) warnings.push(`${n.id}: nincs gombfelirat`);
    });
    if (!root) warnings.push("Nincs gyökérsor (üres „szulo” mezővel)");

    return { root, nodes, children, projects, warnings };
  }

  /* ---------- Mondat ---------- */

  function lowerFirst(s) {
    if (!s) return s;
    // "HPV-ről" marad, "Megelőzésről" -> "megelőzésről"
    return s.length > 1 && s[1] === s[1].toUpperCase() && s[1] !== s[1].toLowerCase() ? s : s[0].toLowerCase() + s.slice(1);
  }

  const fragmentOf = n => n.fragment || lowerFirst(n.label);
  const articleFor = word => (VOWEL.test(word) ? "az" : "a");

  // a szülő folytatása, kitöltve a gyerekkel – részekre bontva, hogy csak a választott szó legyen kiemelve
  function segmentParts(parent, child) {
    if (child.sentence) return { before: "", frag: child.sentence.trim(), after: "" };
    const frag = fragmentOf(child);
    const prompt = (parent.prompt || SLOT).replace(ARTICLE + " " + SLOT, articleFor(frag) + " " + SLOT);
    const i = prompt.indexOf(SLOT);
    if (i < 0) return { before: prompt + " ", frag, after: "" };
    return { before: prompt.slice(0, i), frag, after: prompt.slice(i + SLOT.length) };
  }

  function segmentFor(parent, child) {
    const { before, frag, after } = segmentParts(parent, child);
    return before + frag + after;
  }

  function join(parts) {
    return parts.reduce((acc, p) => {
      if (!p) return acc;
      if (!acc) return p;
      return /^[,.;:!?]/.test(p) ? acc + p : acc + " " + p;
    }, "");
  }

  // A nyitott kérdés: a szülő folytatása a "…" előtti részig. Ami a "…" után áll (pl. "esetében"),
  // csak a választás után jelenik meg, így a mondat végén sosem marad lyuk.
  // Az "a(z)" a látható opciókhoz igazodik; ha vegyesen kellene "a" és "az", elhagyjuk.
  function openPrompt(node, kids) {
    let before = (node.prompt || "").split(SLOT)[0];
    if (before.includes(ARTICLE)) {
      const arts = new Set(kids.filter(k => !k.sentence).map(k => articleFor(fragmentOf(k))));
      before = before.replace(arts.size === 1 ? ARTICLE : new RegExp("\\s*" + ARTICLE.replace(/[()]/g, "\\$&")), arts.size === 1 ? [...arts][0] : "");
    }
    return before.replace(/\s+$/, "");
  }

  /* ---------- Állapot ---------- */

  const current = () => (path.length ? model.nodes.get(path[path.length - 1]) : model.root);
  const kidsOf = n => model.children.get(n.id) || [];

  function choose(id) { path.push(id); render(true); }
  function goTo(step) { path = path.slice(0, step); render(true); }

  /* ---------- Megjelenítés ---------- */

  function h(tag, attrs = {}, ...kids) {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") e.className = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v === true ? "" : v);
    });
    kids.flat().forEach(k => k != null && e.append(k.nodeType ? k : document.createTextNode(k)));
    return e;
  }

  const startsWithPunct = t => /^[,.;:!?]/.test(t);

  function renderSentence(node, kids) {
    const out = [h("span", { class: "seg seg-root" }, model.root.sentence || "")];
    let parent = model.root;
    path.forEach((id, i) => {
      const n = model.nodes.get(id);
      const { before, frag, after } = segmentParts(parent, n);
      const lead = (before || frag);
      out.push(startsWithPunct(lead) ? "" : " ");
      // a szegmens egésze kattintható, de csak a választott rész van aláhúzva
      const fragMatch = frag.match(/^([,.;:!?]\s*)?(.*)$/);
      out.push(h("span", {
        class: "seg seg-chosen", role: "button", tabindex: "0",
        title: "Módosítom ezt a választást",
        "aria-label": `${(before + frag + after).replace(/^[,\s]+/, "")} – módosítás`,
        onclick: () => goTo(i),
        onkeydown: e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(i); } },
      }, before, fragMatch[1] || "", h("span", { class: "pick" }, fragMatch[2]), after));
      parent = n;
    });
    if (kids.length) {
      const before = openPrompt(node, kids);
      if (before && !startsWithPunct(before)) out.push(" ");
      out.push(h("span", { class: "seg seg-open" }, before),
        h("span", { class: "slot", "aria-hidden": "true" }, "…"));
    } else {
      out.push(".");
    }
    el.sentence.replaceChildren(...out);
  }

  function renderOptions(kids, animate) {
    el.options.replaceChildren(...kids.map((k, i) => h("li", {
      class: "option" + (animate ? " enter" : ""),
      style: `--i:${i};--dy:${STAGGER[i % STAGGER.length]}px`,
    }, h("button", {
      type: "button", class: "pill" + (k.placeholder ? " is-placeholder" : ""),
      onclick: () => choose(k.id),
      title: k.placeholder ? `Feltételezett elem${k.note ? ": " + k.note : ""}` : null,
    }, k.label))));
    el.options.hidden = !kids.length;
  }

  function recommendationsFor(node) {
    // a végpont ajánlásai; ha üres, a legközelebbi ős ajánlásai
    let n = node;
    while (n && !n.recs.length) n = model.nodes.get(n.parent);
    const seen = new Set();
    return (n ? n.recs : []).filter(r => !seen.has(r.name.toLowerCase()) && seen.add(r.name.toLowerCase()));
  }

  function renderResults(node, kids, animate) {
    if (kids.length) { el.results.hidden = true; el.results.replaceChildren(); return; }
    const recs = recommendationsFor(node);
    const cards = recs.map((r, i) => {
      const p = model.projects.get(r.name.toLowerCase()) || { name: r.name, type: "Projekt", summary: "", url: "", placeholder: true };
      const url = r.url || p.url;
      const deep = r.url && r.url !== p.url;
      return h("li", { class: "card" + (animate ? " enter" : "") + (p.placeholder ? " is-placeholder" : ""), style: `--i:${i}` },
        h("span", { class: "card-type" }, p.type),
        h("h4", { class: "card-name" }, p.name),
        p.summary ? h("p", { class: "card-summary" }, p.summary) : null,
        url
          ? h("a", { class: "card-link", href: url, target: "_blank", rel: "noopener" },
              deep ? "Ugrás a témához" : "Tovább az oldalra", h("span", { "aria-hidden": "true" }, " →"))
          : h("span", { class: "card-link is-missing" }, "Link hamarosan"));
    });
    el.results.replaceChildren(
      h("p", { class: "results-lead" }, recs.length === 1 ? "Ezt az oldalunkat ajánljuk neked:" : "Ezeket az oldalainkat ajánljuk neked:"),
      h("ul", { class: "cards" }, cards));
    el.results.hidden = false;
  }

  function render(animate = false) {
    const node = current();
    const kids = kidsOf(node);
    renderSentence(node, kids);
    renderOptions(kids, animate);
    renderResults(node, kids, animate);
    el.controls.hidden = path.length === 0;
    if (animate) {
      el.sentence.classList.remove("pulse"); void el.sentence.offsetWidth; el.sentence.classList.add("pulse");
    }
    if (document.body.classList.contains("editing")) renderEditor();
  }

  /* ---------- Szerkesztői nézet ---------- */

  function allSentences() {
    const out = [];
    const walk = (node, trail) => {
      const kids = kidsOf(node);
      if (!kids.length) {
        let parent = model.root;
        const segs = [model.root.sentence];
        trail.forEach(n => { segs.push(segmentFor(parent, n)); parent = n; });
        out.push({ node, trail, text: join(segs) + ".", recs: recommendationsFor(node) });
        return;
      }
      kids.forEach(k => walk(k, trail.concat(k)));
    };
    walk(model.root, []);
    return out;
  }

  function renderEditor() {
    const sentences = allSentences();
    const placeholders = [...model.nodes.values()].filter(n => n.placeholder).length;
    const fileInput = h("input", { type: "file", id: "csvInput", accept: ".csv,text/csv", multiple: true, onchange: e => loadFiles(e.target.files) });

    el.editor.replaceChildren(
      h("div", { class: "ed-head" },
        h("h2", {}, "Szerkesztői nézet"),
        h("p", {}, `Adatforrás: ${dataSource} · ${model.nodes.size - 1} opció · ${sentences.length} végpont · ${placeholders} feltételezett elem`)),
      h("div", { class: "ed-grid" },
        h("section", { class: "ed-box" },
          h("h3", {}, "Saját CSV kipróbálása"),
          h("p", {}, "Exportáld a fa.csv-t és/vagy a projektek.csv-t Google Sheetsből, és húzd ide őket. A fájlnév döntse el, melyik melyik („fa” vagy „projekt” szerepeljen benne). Az oldal nem ment semmit, csak ebben a böngészőablakban próbálja ki."),
          h("label", { class: "drop", for: "csvInput" }, "CSV fájlok kiválasztása vagy ide húzása", fileInput)),
        h("section", { class: "ed-box" },
          h("h3", {}, model.warnings.length ? `Ellenőrzés: ${model.warnings.length} figyelmeztetés` : "Ellenőrzés: minden rendben"),
          model.warnings.length
            ? h("ul", { class: "warn" }, model.warnings.map(w => h("li", {}, w)))
            : h("p", {}, "Minden sornak van szülője, felirata és ajánlása."))),
      h("section", { class: "ed-box ed-wide" },
        h("h3", {}, "Az összes lehetséges mondat"),
        h("p", {}, "Így olvasható végig minden út. A szaggatott keretes elemek feltételezettek; a táblázatban még nincs végleges címkéjük vagy linkjük."),
        h("ol", { class: "all" }, sentences.map(s => h("li", { class: s.trail.some(n => n.placeholder) ? "is-placeholder" : "" },
          h("button", { type: "button", class: "jump", onclick: () => { path = s.trail.map(n => n.id); render(true); document.getElementById("iranytu").scrollIntoView({ behavior: "smooth" }); } }, s.text),
          h("span", { class: "recs" }, s.recs.map(r => r.name).join(" · ")),
          s.trail.filter(n => n.note).map(n => h("span", { class: "note" }, `${n.id}: ${n.note}`))))))
    );
  }

  async function loadFiles(files) {
    let fa = null, proj = null;
    for (const f of files) {
      const text = await f.text();
      if (/proj/i.test(f.name)) proj = text; else fa = text;
    }
    try {
      const faRows = fa ? parseCSV(fa) : model._faRows;
      const projRows = proj ? parseCSV(proj) : model._projRows;
      setModel(faRows, projRows, "feltöltött CSV (" + [...files].map(f => f.name).join(", ") + ")");
      path = [];
      render(true);
    } catch (e) {
      alertEditor("A fájlt nem sikerült beolvasni: " + e.message);
    }
  }

  function alertEditor(msg) {
    el.editor.prepend(h("p", { class: "ed-error", role: "alert" }, msg));
  }

  /* ---------- Indítás ---------- */

  function setModel(faRows, projRows, source) {
    model = buildModel(faRows, projRows);
    model._faRows = faRows; model._projRows = projRows;
    dataSource = source;
    if (model.warnings.length) console.warn("Döntési fa figyelmeztetések:", model.warnings);
  }

  async function load() {
    try {
      const [fa, proj] = await Promise.all(["data/fa.csv", "data/projektek.csv"].map(async u => {
        const r = await fetch(u, { cache: "no-store" });
        if (!r.ok) throw new Error(u + ": " + r.status);
        return r.text();
      }));
      setModel(parseCSV(fa), parseCSV(proj), "data/fa.csv + data/projektek.csv");
    } catch (err) {
      // helyi fájlként (file://) megnyitva a böngésző nem engedi a fetch-et
      if (window.IRANYTU_FALLBACK) {
        setModel(parseCSV(window.IRANYTU_FALLBACK.fa), parseCSV(window.IRANYTU_FALLBACK.projektek), "beépített másolat (data/fallback.js)");
      } else {
        el.sentence.textContent = "Az adatokat nem sikerült betölteni.";
        console.error(err);
        return;
      }
    }
    render(false);
  }

  el.back.addEventListener("click", () => goTo(path.length - 1));
  el.reset.addEventListener("click", () => goTo(0));
  el.editorToggle.addEventListener("click", () => {
    const on = document.body.classList.toggle("editing");
    el.editorToggle.setAttribute("aria-pressed", on);
    el.editor.hidden = !on;
    if (on) { renderEditor(); el.editor.scrollIntoView({ behavior: "smooth" }); }
  });
  ["dragover", "drop"].forEach(t => document.addEventListener(t, e => {
    if (!document.body.classList.contains("editing")) return;
    e.preventDefault();
    if (t === "drop" && e.dataTransfer.files.length) loadFiles(e.dataTransfer.files);
  }));

  load();
})();
