Mályvavirág interaktív döntési fa prototípus

Fájlok:
- index.html: a prototípus megnyitása böngészőben
- styles.css: minimális formázás
- app.js: interaktív döntési fa logika
- data.json: döntési utak, címkerétegek, projektkártyák és demóútvonalak

Használat:
1. Nyisd meg az index.html fájlt egy böngészőben.
2. A bal oldali Példaútvonalak gombokkal gyorsan demonstrálható néhány tipikus út.
3. Az Újrakezdés gombbal visszaáll az alapállapot.

Megjegyzés:
A data.json külön fájlban van, de az app.js tartalmaz egy beépített tartalék adatváltozatot is, hogy a prototípus akkor is működjön, ha a böngésző helyi fájlként nem engedi betölteni a JSON-t.
Ha a data.json-t szerkeszted, érdemes lokális szerveren futtatni, például:
python -m http.server 8000

Ezután böngészőben:
http://localhost:8000
