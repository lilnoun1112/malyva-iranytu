# Mályvavirág iránytű – prototípus

A „Miben segíthetünk?” blokk mondatépítő döntési fája. A látogató mindig csak az aktuális lépéshez tartozó gombokat látja; a választásaiból egy összefüggő mondat épül, a végén pedig célzott projektajánlást kap.

## Megnyitás

- Dupla kattintás az `index.html`-re: működik, ilyenkor a `data/fallback.js` másolatból olvas.
- Helyi szerverről (a CSV-ket közvetlenül olvassa): `python3 -m http.server 8000`, majd http://localhost:8000

A **Szerkesztői nézet** gomb (az oldal alján):
- végigolvassa az összes lehetséges mondatot,
- jelzi a hibás sorokat (hiányzó szülő, ismeretlen projektnév, ajánlás nélküli végpont stb.),
- szaggatott kerettel mutatja a feltételezett elemeket,
- és fogad egy saját, Google Sheetsből exportált CSV-t, hogy publikálás nélkül ki lehessen próbálni.

## Az adatok

Két táblázat, mindkettő CSV-ként szerkeszthető vagy Google Sheetsbe importálható.

### `data/fa.csv` – a döntési fa

Minden sor egy gomb. A sorrend a gombok sorrendje.

| oszlop | mire való |
|---|---|
| `id` | egyedi azonosító (ékezet nélkül) |
| `szulo` | a szülő sor `id`-ja. Üres = a gyökér (pontosan egy ilyen sor van) |
| `gomb` | a gomb felirata |
| `mondatresz` | ami a mondatba kerül, ha eltér a feliratól. Üresen hagyva a felirat kerül be kisbetűvel |
| `egyedi_mondat` | ha a gomb nem illik a szülő mondatába, ez a szöveg lép a szülő `folytatas`-a helyére |
| `folytatas` | a gyerekek előtti mondatrész; a `…` jelöli a választás helyét |
| `ajanlas_1`–`ajanlas_4` | ajánlott projektek nevei. Opcionális mélylink: `StopHPV \| https://stophpv.hu/...` |
| `allapot` | `feltételezett`, ha a sort nem a forrástáblázatból vettük át szó szerint |
| `megjegyzes` | belső jegyzet; csak a szerkesztői nézetben látszik |

**Hogyan épül a mondat?** A gyökér `egyedi_mondat`-ja a nyitány („Azért látogattam az oldalra, mert”). A szülő `folytatas` szövegében a `…` helyére a választott gyerek `mondatresz`-e kerül:

```
folytatas:  , azon belül is a(z) …
gomb:       Tünetekről            →  „…, azon belül is a tünetekről”
```

- Az `a(z)` automatikusan `a` vagy `az` lesz a következő szó alapján.
- A `…` után is állhat szöveg: `, a(z) … esetében`.
- Csak az egy szinten látható gomboknak kell ugyanabba a mondatba illeniük. A „Hozzátartozó vagyok” gomb `egyedi_mondat`-tal saját irányba viszi a mondatot: „…mert hozzátartozóként szeretnék segíteni egy szerettemnek, akit … érint”.

Ha egy végpontnak nincs ajánlása, a legközelebbi ősének ajánlásai jelennek meg.

### `data/projektek.csv` – az ajánlható oldalak

`nev` (erre hivatkozik a fa), `tipus` (Projekt / Kiadvány / Videó…), `url`, `leiras`, `allapot`.

Ha egy ajánlásnak nincs URL-je, a kártyán „Link hamarosan” jelenik meg.

### CSV módosítása után

Futtasd: `node tools/build-fallback.mjs`. Ez frissíti a `data/fallback.js`-t a dupla kattintásos megnyitáshoz. Szerverről futtatva erre nincs szükség.

## Forrás és szabályok

Forrás: `malyvavirag_dontesi_fa_freshest.xlsx`. Minden sor `megjegyzes` oszlopa megadja, melyik cellából jön.

- A címkék a táblázatból jönnek. Csak a mondathoz szükséges nyelvtani alak változik, például *Petefészek → Petefészekrákról* vagy *Férfi vagyok → Férfiként*.
- A cellamegjegyzéseket követjük: *A2 → Megelőzés*, a *Betegútkíséret* a Daganatos betegségek alá kerül (A60), a *Hozzátartozó* ág szerkezete az A91 megjegyzéséből jön.
- A címke nélküli sorok kimaradnak:
  - 23: fej-nyaki HPV-ajánlás;
  - 40–41, 48–49, 55–56: emlő és fej-nyak a szervlistákban;
  - 58–59;
  - 67–69: a rehabilitáció alsorai;
  - 78–90.
- A 50. sor B-címkéje ideiglenes: „Innen valamit kitöröltünk?”. A szerkesztői nézetben kérdésként van jelölve.
- A rehabilitáció nincs szétbontva; a 66. sor ajánlásait mutatja.
- A projektkártyákon nincs leírás, mert a táblázatban sincs. URL csak ott van, ahol a táblázat megadja.
