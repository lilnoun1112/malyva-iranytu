const EMBEDDED_DATA = {
  "metadata": {
    "title": "Mályvavirág döntési fa prototípus",
    "version": "v1",
    "source": "malyvavirag_dontesi_fa_cimkezes_v5_D_nelkul.xlsx",
    "generatedAt": "2026-06-04T17:31:18",
    "note": "A fa kizárólag a tíz külső projektoldalt ajánlja; a magazin, kapcsolat, szakember válaszol és hasonló belső tartalmak nem részei ennek a prototípusnak."
  },
  "layers": [
    {
      "key": "a",
      "name": "A - fő téma",
      "shortName": "A",
      "description": "A látogató legelső, nagy irányválasztása.",
      "color": "#2563EB"
    },
    {
      "key": "b",
      "name": "B - élethelyzet",
      "shortName": "B",
      "description": "A választott témán belüli aktuális helyzet.",
      "color": "#7C3AED"
    },
    {
      "key": "c1",
      "name": "C1 - érintett terület / célcsoport",
      "shortName": "C1",
      "description": "A releváns terület, célcsoport vagy betegségcsoport.",
      "color": "#059669"
    },
    {
      "key": "c2",
      "name": "C2 - pontosítás",
      "shortName": "C2",
      "description": "Opcionális pontosítás, csak ott jelenik meg, ahol szükséges.",
      "color": "#0D9488"
    }
  ],
  "projects": {
    "StopHPV": {
      "name": "StopHPV",
      "summary": "HPV-fókuszú edukációs oldal, amely a vírusról, szűrésről, oltásról, HPV-hez kapcsolódó betegségekről és a továbblépési lehetőségekről ad közérthető, szakemberekkel kidolgozott információt.",
      "url": "https://stophpv.hu/",
      "tags": {
        "a": [
          "HPV, szűrés, oltás",
          "Fiataloknak, szülőknek",
          "Férfiaknak"
        ],
        "b": [
          "Megelőzés",
          "HPV-lelet",
          "Szűrés előtt/után",
          "Oltásról döntés",
          "Partnerként érint",
          "Fiatal/szülő információ"
        ],
        "c": [
          "Általános HPV",
          "Méhnyak",
          "Férfi érintettség",
          "Fiatalok / szülők",
          "Partneri kérdés",
          "Fej-nyaki terület"
        ],
        "visible": [
          "HPV",
          "oltás",
          "szűrés",
          "megelőzés"
        ]
      }
    },
    "Mályvabetegút": {
      "name": "Mályvabetegút",
      "summary": "Digitális betegútkísérő nőgyógyászati daganattal érintetteknek, amely a diagnózistól a kezeléseken át a további lépésekig segít eligazodni.",
      "url": "https://malyvabetegut.hu/",
      "tags": {
        "a": [
          "Daganatos megbetegedések",
          "Betegút, kezelés, műtét",
          "Rehabilitáció és életminőség"
        ],
        "b": [
          "Gyanús tünet",
          "Kivizsgálás előtt",
          "Diagnózis",
          "Daganattípusról tájékozódás",
          "További segítség",
          "Kezelési döntés"
        ],
        "c": [
          "Méhnyak",
          "Nőgyógyászati daganat",
          "Petefészek",
          "Méhtest",
          "Hüvely",
          "Szeméremtest"
        ],
        "visible": [
          "nőgyógyászati daganat",
          "betegút",
          "diagnózis",
          "kezelés"
        ]
      }
    },
    "Emlőrákbetegút": {
      "name": "Emlőrákbetegút",
      "summary": "Digitális betegútkísérő emlődaganattal érintettek számára, külön útvonalakkal nőknek, férfiaknak és várandósoknak.",
      "url": "https://emlorakbetegut.hu/",
      "tags": {
        "a": [
          "Daganatos megbetegedések",
          "Betegút, kezelés, műtét",
          "Rehabilitáció és életminőség"
        ],
        "b": [
          "Gyanús tünet",
          "Kivizsgálás előtt",
          "Diagnózis",
          "Daganattípusról tájékozódás",
          "További segítség",
          "Kezelési döntés"
        ],
        "c": [
          "Emlőrák"
        ],
        "visible": [
          "emlőrák",
          "betegút",
          "diagnózis",
          "kezelés"
        ]
      }
    },
    "Fej-nyakibetegút": {
      "name": "Fej-nyakibetegút",
      "summary": "Digitális betegútkísérő fej-nyaki daganattal érintetteknek, amely betegségtípus szerint segít megérteni a kezelési és támogatási folyamatot.",
      "url": "https://fejnyakibetegut.hu/",
      "tags": {
        "a": [
          "HPV, szűrés, oltás",
          "Daganatos megbetegedések",
          "Betegút, kezelés, műtét"
        ],
        "b": [
          "Partnerként érint",
          "Gyanús tünet",
          "Kivizsgálás előtt",
          "Diagnózis",
          "Daganattípusról tájékozódás",
          "További segítség"
        ],
        "c": [
          "Fej-nyaki terület",
          "Fej-nyaki daganat"
        ],
        "visible": [
          "fej-nyaki daganat",
          "betegút",
          "diagnózis",
          "kezelés"
        ]
      }
    },
    "Mályva Útitárs": {
      "name": "Mályva Útitárs",
      "summary": "Hozzátartozóknak készült digitális útmutató, amely abban segít, hogyan lehet jól támogatni egy daganatos betegséggel érintett szerettet a betegút során.",
      "url": "https://malyvautitars.hu/",
      "tags": {
        "a": [
          "HPV, szűrés, oltás",
          "Daganatos megbetegedések",
          "Betegút, kezelés, műtét"
        ],
        "b": [
          "HPV-lelet",
          "Partnerként érint",
          "Diagnózis",
          "További segítség",
          "Kezelési döntés",
          "Műtét előtt"
        ],
        "c": [
          "Méhnyak",
          "Partneri kérdés",
          "Nőgyógyászati daganat",
          "Petefészek",
          "Méhtest",
          "Hüvely"
        ],
        "visible": [
          "hozzátartozó",
          "útmutató",
          "betegút",
          "támogatás"
        ]
      }
    },
    "NOPREM": {
      "name": "NOPREM",
      "summary": "Prehabilitációs és rehabilitációs program nőgyógyászati daganat miatt műtét előtt vagy után álló nőknek, segítő videókkal, kiadványokkal és életminőség-javító támogatással.",
      "url": "https://noprem.malyvavirag.hu/",
      "tags": {
        "a": [
          "Betegút, kezelés, műtét",
          "Rehabilitáció és életminőség"
        ],
        "b": [
          "Műtét előtt",
          "Kezelés után",
          "Műtét után",
          "Testi változások",
          "Mindennapokba visszatérés"
        ],
        "c": [
          "Méhnyak",
          "Nőgyógyászati daganat",
          "Petefészek",
          "Méhtest",
          "Hüvely",
          "Szeméremtest"
        ],
        "visible": [
          "műtét előtt",
          "prehabilitáció",
          "rehabilitáció",
          "nőgyógyászati daganat"
        ]
      }
    },
    "Szexuális egészség": {
      "name": "Szexuális egészség",
      "summary": "Nőgyógyászati daganattal érintetteknek készült érzékeny edukációs platform, amely a test változásairól, a kezelések következményeiről és a szexuális élet újraépítéséről ad támogatást.",
      "url": "https://szexualisegeszseg.malyvavirag.hu/",
      "tags": {
        "a": [
          "Betegút, kezelés, műtét",
          "Rehabilitáció és életminőség"
        ],
        "b": [
          "Kezelés után",
          "Testi változások",
          "Szexuális élet / intimitás",
          "Mindennapokba visszatérés"
        ],
        "c": [
          "Méhnyak",
          "Nőgyógyászati daganat",
          "Petefészek",
          "Méhtest",
          "Hüvely",
          "Szeméremtest"
        ],
        "visible": [
          "szexuális egészség",
          "rehabilitáció",
          "életminőség",
          "nőgyógyászati daganat"
        ]
      }
    },
    "Felfedezni": {
      "name": "Felfedezni",
      "summary": "Petefészekrák-fókuszú figyelemfelhívó oldal, amely a korai, sokszor jellegtelen tünetek felismerését segíti a FELFEDEZNI betűszóra épített tünetlistával.",
      "url": "https://felfedezni.hu/",
      "tags": {
        "a": [
          "Daganatos megbetegedések"
        ],
        "b": [
          "Gyanús tünet"
        ],
        "c": [
          "Nőgyógyászati daganat",
          "Petefészek"
        ],
        "visible": [
          "petefészekrák",
          "tünetek",
          "korai felismerés",
          "kivizsgálás"
        ]
      }
    },
    "Kardvirág": {
      "name": "Kardvirág",
      "summary": "Férfiakat megszólító Mályvavirág-program, amely a HPV-asszociált elváltozásokra, daganatokra és a férfiak prevencióban betöltött szerepére irányítja a figyelmet.",
      "url": "https://kardviragok.hu/",
      "tags": {
        "a": [
          "HPV, szűrés, oltás",
          "Férfiaknak"
        ],
        "b": [
          "Megelőzés",
          "HPV-lelet",
          "Oltásról döntés",
          "Partnerként érint",
          "HPV férfiként",
          "Partneri érintettség"
        ],
        "c": [
          "Férfi érintettség",
          "Partneri kérdés",
          "Fej-nyaki terület",
          "Fej-nyaki daganat",
          "HPV",
          "Partneri / családi érintettség"
        ],
        "visible": [
          "férfiak",
          "HPV",
          "megelőzés",
          "fej-nyaki daganatok"
        ]
      }
    },
    "Mályva Tinik": {
      "name": "Mályva Tinik",
      "summary": "10-18 éves fiataloknak szóló program, amely kortárs hangon magyarázza el, mi a HPV, miért fontos az oltás, és hogyan lehet a fertőzést megelőzni.",
      "url": "https://malyvavirag.hu/malyva-tinik-program",
      "tags": {
        "a": [
          "HPV, szűrés, oltás",
          "Fiataloknak, szülőknek"
        ],
        "b": [
          "Megelőzés",
          "Oltásról döntés",
          "Fiatal/szülő információ",
          "Tiniként tájékozódnék",
          "Szülőként tájékozódnék",
          "Iskolai edukáció"
        ],
        "c": [
          "Fiatalok / szülők",
          "Tiniknek",
          "Szülőknek",
          "Pedagógusoknak"
        ],
        "visible": [
          "fiatalok",
          "HPV",
          "oltás",
          "megelőzés"
        ]
      }
    }
  },
  "paths": [
    {
      "id": "path-001",
      "sourceRow": 2,
      "a": "HPV, szűrés, oltás",
      "b": "Megelőzés",
      "c1": "Általános HPV",
      "c2": null,
      "projects": [
        "StopHPV"
      ],
      "note": "Megelőző edukáció, nem betegút."
    },
    {
      "id": "path-002",
      "sourceRow": 3,
      "a": "HPV, szűrés, oltás",
      "b": "Megelőzés",
      "c1": "Méhnyak",
      "c2": null,
      "projects": [
        "StopHPV"
      ],
      "note": "Megelőző edukáció, nem betegút."
    },
    {
      "id": "path-003",
      "sourceRow": 4,
      "a": "HPV, szűrés, oltás",
      "b": "Megelőzés",
      "c1": "Férfi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": "Megelőző edukáció, nem betegút."
    },
    {
      "id": "path-004",
      "sourceRow": 5,
      "a": "HPV, szűrés, oltás",
      "b": "Megelőzés",
      "c1": "Fiatalok / szülők",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Megelőző edukáció, nem betegút."
    },
    {
      "id": "path-005",
      "sourceRow": 6,
      "a": "HPV, szűrés, oltás",
      "b": "HPV-lelet",
      "c1": "Méhnyak",
      "c2": null,
      "projects": [
        "StopHPV"
      ],
      "note": "Csak HPV-környezetben jelenjen meg."
    },
    {
      "id": "path-006",
      "sourceRow": 7,
      "a": "HPV, szűrés, oltás",
      "b": "HPV-lelet",
      "c1": "Partneri kérdés",
      "c2": null,
      "projects": [
        "StopHPV",
        "Kardvirág",
        "Mályva Útitárs"
      ],
      "note": "Csak HPV-környezetben jelenjen meg."
    },
    {
      "id": "path-007",
      "sourceRow": 8,
      "a": "HPV, szűrés, oltás",
      "b": "HPV-lelet",
      "c1": "Férfi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": "Csak HPV-környezetben jelenjen meg."
    },
    {
      "id": "path-008",
      "sourceRow": 9,
      "a": "HPV, szűrés, oltás",
      "b": "Szűrés előtt/után",
      "c1": "Méhnyak",
      "c2": null,
      "projects": [
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-009",
      "sourceRow": 10,
      "a": "HPV, szűrés, oltás",
      "b": "Oltásról döntés",
      "c1": "Általános HPV",
      "c2": null,
      "projects": [
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-010",
      "sourceRow": 11,
      "a": "HPV, szűrés, oltás",
      "b": "Oltásról döntés",
      "c1": "Fiatalok / szülők",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-011",
      "sourceRow": 12,
      "a": "HPV, szűrés, oltás",
      "b": "Oltásról döntés",
      "c1": "Férfi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-012",
      "sourceRow": 13,
      "a": "HPV, szűrés, oltás",
      "b": "Partnerként érint",
      "c1": "Férfi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-013",
      "sourceRow": 14,
      "a": "HPV, szűrés, oltás",
      "b": "Partnerként érint",
      "c1": "Partneri kérdés",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-014",
      "sourceRow": 15,
      "a": "HPV, szűrés, oltás",
      "b": "Partnerként érint",
      "c1": "Fej-nyaki terület",
      "c2": null,
      "projects": [
        "Kardvirág",
        "Fej-nyakibetegút",
        "StopHPV"
      ],
      "note": null
    },
    {
      "id": "path-015",
      "sourceRow": 16,
      "a": "HPV, szűrés, oltás",
      "b": "Fiatal/szülő információ",
      "c1": "Tiniknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs betegút, műtét vagy kezelés opció ezen az ágon."
    },
    {
      "id": "path-016",
      "sourceRow": 17,
      "a": "HPV, szűrés, oltás",
      "b": "Fiatal/szülő információ",
      "c1": "Szülőknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs betegút, műtét vagy kezelés opció ezen az ágon."
    },
    {
      "id": "path-017",
      "sourceRow": 18,
      "a": "HPV, szűrés, oltás",
      "b": "Fiatal/szülő információ",
      "c1": "Pedagógusoknak",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs betegút, műtét vagy kezelés opció ezen az ágon."
    },
    {
      "id": "path-018",
      "sourceRow": 19,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-019",
      "sourceRow": 20,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Felfedezni",
        "Mályvabetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-020",
      "sourceRow": 21,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-021",
      "sourceRow": 22,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-022",
      "sourceRow": 23,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-023",
      "sourceRow": 24,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-024",
      "sourceRow": 25,
      "a": "Daganatos megbetegedések",
      "b": "Gyanús tünet",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút"
      ],
      "note": "A petefészek ágon a Felfedezni legyen elsődleges."
    },
    {
      "id": "path-025",
      "sourceRow": 26,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-026",
      "sourceRow": 27,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-027",
      "sourceRow": 28,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-028",
      "sourceRow": 29,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-029",
      "sourceRow": 30,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-030",
      "sourceRow": 31,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút"
      ],
      "note": null
    },
    {
      "id": "path-031",
      "sourceRow": 32,
      "a": "Daganatos megbetegedések",
      "b": "Kivizsgálás előtt",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút"
      ],
      "note": null
    },
    {
      "id": "path-032",
      "sourceRow": 33,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-033",
      "sourceRow": 34,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-034",
      "sourceRow": 35,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-035",
      "sourceRow": 36,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-036",
      "sourceRow": 37,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-037",
      "sourceRow": 38,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-038",
      "sourceRow": 39,
      "a": "Daganatos megbetegedések",
      "b": "Diagnózis",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-039",
      "sourceRow": 40,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-040",
      "sourceRow": 41,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-041",
      "sourceRow": 42,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-042",
      "sourceRow": 43,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-043",
      "sourceRow": 44,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút"
      ],
      "note": null
    },
    {
      "id": "path-044",
      "sourceRow": 45,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút"
      ],
      "note": null
    },
    {
      "id": "path-045",
      "sourceRow": 46,
      "a": "Daganatos megbetegedések",
      "b": "Daganattípusról tájékozódás",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút"
      ],
      "note": null
    },
    {
      "id": "path-046",
      "sourceRow": 47,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-047",
      "sourceRow": 48,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-048",
      "sourceRow": 49,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-049",
      "sourceRow": 50,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-050",
      "sourceRow": 51,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-051",
      "sourceRow": 52,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-052",
      "sourceRow": 53,
      "a": "Daganatos megbetegedések",
      "b": "További segítség",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "A fa csak külső projektoldalakat ajánl; a kapcsolati és támogatópont-informác..."
    },
    {
      "id": "path-053",
      "sourceRow": 54,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-054",
      "sourceRow": 55,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-055",
      "sourceRow": 56,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-056",
      "sourceRow": 57,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-057",
      "sourceRow": 58,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-058",
      "sourceRow": 59,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-059",
      "sourceRow": 60,
      "a": "Betegút, kezelés, műtét",
      "b": "Diagnózis",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-060",
      "sourceRow": 61,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-061",
      "sourceRow": 62,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-062",
      "sourceRow": 63,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-063",
      "sourceRow": 64,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-064",
      "sourceRow": 65,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-065",
      "sourceRow": 66,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-066",
      "sourceRow": 67,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelési döntés",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-067",
      "sourceRow": 68,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-068",
      "sourceRow": 69,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-069",
      "sourceRow": 70,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-070",
      "sourceRow": 71,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-071",
      "sourceRow": 72,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-072",
      "sourceRow": 73,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-073",
      "sourceRow": 74,
      "a": "Betegút, kezelés, műtét",
      "b": "Műtét előtt",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-074",
      "sourceRow": 75,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-075",
      "sourceRow": 76,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-076",
      "sourceRow": 77,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-077",
      "sourceRow": 78,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-078",
      "sourceRow": 79,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-079",
      "sourceRow": 80,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-080",
      "sourceRow": 81,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés alatt",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-081",
      "sourceRow": 82,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Szexuális egészség",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-082",
      "sourceRow": 83,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Szexuális egészség",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-083",
      "sourceRow": 84,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Szexuális egészség",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-084",
      "sourceRow": 85,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Szexuális egészség",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-085",
      "sourceRow": 86,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Szexuális egészség",
        "NOPREM",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-086",
      "sourceRow": 87,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-087",
      "sourceRow": 88,
      "a": "Betegút, kezelés, műtét",
      "b": "Kezelés után",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-088",
      "sourceRow": 89,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhnyak",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-089",
      "sourceRow": 90,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Petefészek",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-090",
      "sourceRow": 91,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Méhtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-091",
      "sourceRow": 92,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Hüvely",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-092",
      "sourceRow": 93,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Nőgyógyászati daganat",
      "c2": "Szeméremtest",
      "projects": [
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-093",
      "sourceRow": 94,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-094",
      "sourceRow": 95,
      "a": "Betegút, kezelés, műtét",
      "b": "Kontroll / utánkövetés",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": null
    },
    {
      "id": "path-095",
      "sourceRow": 96,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét előtt",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "NOPREM",
        "Mályvabetegút"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-096",
      "sourceRow": 97,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét előtt",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-097",
      "sourceRow": 98,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét előtt",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-098",
      "sourceRow": 99,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét előtt",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-099",
      "sourceRow": 100,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét után",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "NOPREM",
        "Mályvabetegút"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-100",
      "sourceRow": 101,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét után",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-101",
      "sourceRow": 102,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét után",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-102",
      "sourceRow": 103,
      "a": "Rehabilitáció és életminőség",
      "b": "Műtét után",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-103",
      "sourceRow": 104,
      "a": "Rehabilitáció és életminőség",
      "b": "Testi változások",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Szexuális egészség",
        "NOPREM",
        "Mályvabetegút"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-104",
      "sourceRow": 105,
      "a": "Rehabilitáció és életminőség",
      "b": "Testi változások",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-105",
      "sourceRow": 106,
      "a": "Rehabilitáció és életminőség",
      "b": "Testi változások",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-106",
      "sourceRow": 107,
      "a": "Rehabilitáció és életminőség",
      "b": "Testi változások",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-107",
      "sourceRow": 108,
      "a": "Rehabilitáció és életminőség",
      "b": "Szexuális élet / intimitás",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Szexuális egészség",
        "Mályvabetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-108",
      "sourceRow": 109,
      "a": "Rehabilitáció és életminőség",
      "b": "Szexuális élet / intimitás",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-109",
      "sourceRow": 110,
      "a": "Rehabilitáció és életminőség",
      "b": "Szexuális élet / intimitás",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-110",
      "sourceRow": 111,
      "a": "Rehabilitáció és életminőség",
      "b": "Szexuális élet / intimitás",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-111",
      "sourceRow": 112,
      "a": "Rehabilitáció és életminőség",
      "b": "Lelki támogatás",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-112",
      "sourceRow": 113,
      "a": "Rehabilitáció és életminőség",
      "b": "Lelki támogatás",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-113",
      "sourceRow": 114,
      "a": "Rehabilitáció és életminőség",
      "b": "Lelki támogatás",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-114",
      "sourceRow": 115,
      "a": "Rehabilitáció és életminőség",
      "b": "Lelki támogatás",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-115",
      "sourceRow": 116,
      "a": "Rehabilitáció és életminőség",
      "b": "Mindennapokba visszatérés",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "NOPREM",
        "Szexuális egészség",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-116",
      "sourceRow": 117,
      "a": "Rehabilitáció és életminőség",
      "b": "Mindennapokba visszatérés",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Emlőrákbetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-117",
      "sourceRow": 118,
      "a": "Rehabilitáció és életminőség",
      "b": "Mindennapokba visszatérés",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-118",
      "sourceRow": 119,
      "a": "Rehabilitáció és életminőség",
      "b": "Mindennapokba visszatérés",
      "c1": "Nem tudom vagy nem szeretném megadni",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Ezen az ágon a daganattípus opcionális."
    },
    {
      "id": "path-119",
      "sourceRow": 120,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem diagnózist kapott",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-120",
      "sourceRow": 121,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem diagnózist kapott",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-121",
      "sourceRow": 122,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem diagnózist kapott",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-122",
      "sourceRow": 123,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem diagnózist kapott",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-123",
      "sourceRow": 124,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés/műtét előtt áll",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-124",
      "sourceRow": 125,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés/műtét előtt áll",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-125",
      "sourceRow": 126,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés/műtét előtt áll",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-126",
      "sourceRow": 127,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés/műtét előtt áll",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-127",
      "sourceRow": 128,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés alatt van",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-128",
      "sourceRow": 129,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés alatt van",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-129",
      "sourceRow": 130,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés alatt van",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-130",
      "sourceRow": 131,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés alatt van",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-131",
      "sourceRow": 132,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés után van",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-132",
      "sourceRow": 133,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés után van",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-133",
      "sourceRow": 134,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés után van",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-134",
      "sourceRow": 135,
      "a": "Hozzátartozóként segítenék",
      "b": "Szerettem kezelés után van",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-135",
      "sourceRow": 136,
      "a": "Hozzátartozóként segítenék",
      "b": "Nem tudom, mit mondjak",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-136",
      "sourceRow": 137,
      "a": "Hozzátartozóként segítenék",
      "b": "Nem tudom, mit mondjak",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-137",
      "sourceRow": 138,
      "a": "Hozzátartozóként segítenék",
      "b": "Nem tudom, mit mondjak",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-138",
      "sourceRow": 139,
      "a": "Hozzátartozóként segítenék",
      "b": "Nem tudom, mit mondjak",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-139",
      "sourceRow": 140,
      "a": "Hozzátartozóként segítenék",
      "b": "Gyakorlati segítség",
      "c1": "Nőgyógyászati daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Mályvabetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-140",
      "sourceRow": 141,
      "a": "Hozzátartozóként segítenék",
      "b": "Gyakorlati segítség",
      "c1": "Emlőrák",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Emlőrákbetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-141",
      "sourceRow": 142,
      "a": "Hozzátartozóként segítenék",
      "b": "Gyakorlati segítség",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Mályva Útitárs",
        "Fej-nyakibetegút"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-142",
      "sourceRow": 143,
      "a": "Hozzátartozóként segítenék",
      "b": "Gyakorlati segítség",
      "c1": "Nem tudom pontosan",
      "c2": null,
      "projects": [
        "Mályva Útitárs"
      ],
      "note": "Legyen Nem tudom pontosan opció."
    },
    {
      "id": "path-143",
      "sourceRow": 144,
      "a": "Fiataloknak, szülőknek",
      "b": "Tiniként tájékozódnék",
      "c1": "Tiniknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-144",
      "sourceRow": 145,
      "a": "Fiataloknak, szülőknek",
      "b": "Szülőként tájékozódnék",
      "c1": "Szülőknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-145",
      "sourceRow": 146,
      "a": "Fiataloknak, szülőknek",
      "b": "Oltásról döntés",
      "c1": "Tiniknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-146",
      "sourceRow": 147,
      "a": "Fiataloknak, szülőknek",
      "b": "Oltásról döntés",
      "c1": "Szülőknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-147",
      "sourceRow": 148,
      "a": "Fiataloknak, szülőknek",
      "b": "Iskolai edukáció",
      "c1": "Pedagógusoknak",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-148",
      "sourceRow": 149,
      "a": "Fiataloknak, szülőknek",
      "b": "Iskolai edukáció",
      "c1": "Tiniknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-149",
      "sourceRow": 150,
      "a": "Fiataloknak, szülőknek",
      "b": "Kortárs tartalom",
      "c1": "Tiniknek",
      "c2": null,
      "projects": [
        "Mályva Tinik",
        "StopHPV"
      ],
      "note": "Nincs pozitív lelet, műtét, kezelés vagy rehabilitáció opció."
    },
    {
      "id": "path-150",
      "sourceRow": 151,
      "a": "Férfiaknak",
      "b": "HPV férfiként",
      "c1": "HPV",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": "Férfi látogatónak dedikált belépőpont."
    },
    {
      "id": "path-151",
      "sourceRow": 152,
      "a": "Férfiaknak",
      "b": "Partneri érintettség",
      "c1": "Partneri / családi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV",
        "Mályva Útitárs"
      ],
      "note": "Férfi látogatónak dedikált belépőpont."
    },
    {
      "id": "path-152",
      "sourceRow": 153,
      "a": "Férfiaknak",
      "b": "Oltásról döntés",
      "c1": "Férfi érintettség",
      "c2": null,
      "projects": [
        "Kardvirág",
        "StopHPV"
      ],
      "note": "Férfi látogatónak dedikált belépőpont."
    },
    {
      "id": "path-153",
      "sourceRow": 154,
      "a": "Férfiaknak",
      "b": "Fej-nyaki információ férfiként",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Kardvirág",
        "Fej-nyakibetegút",
        "StopHPV"
      ],
      "note": "Férfi látogatónak dedikált belépőpont."
    },
    {
      "id": "path-154",
      "sourceRow": 155,
      "a": "Férfiaknak",
      "b": "Betegút férfiként",
      "c1": "Fej-nyaki daganat",
      "c2": null,
      "projects": [
        "Fej-nyakibetegút",
        "Kardvirág",
        "Mályva Útitárs"
      ],
      "note": "Férfi látogatónak dedikált belépőpont."
    }
  ],
  "demoPaths": [
    {
      "label": "Petefészekrák gyanús tünet",
      "state": {
        "a": "Daganatos megbetegedések",
        "b": "Gyanús tünet",
        "c1": "Nőgyógyászati daganat",
        "c2": "Petefészek"
      }
    },
    {
      "label": "Pozitív HPV-lelet",
      "state": {
        "a": "HPV, szűrés, oltás",
        "b": "HPV-lelet",
        "c1": "Méhnyak",
        "c2": null
      }
    },
    {
      "label": "Hozzátartozóként segítenék",
      "state": {
        "a": "Hozzátartozóként segítenék",
        "b": "Szerettem diagnózist kapott",
        "c1": "Nem tudom pontosan",
        "c2": null
      }
    },
    {
      "label": "Tinik és HPV-oltás",
      "state": {
        "a": "Fiataloknak, szülőknek",
        "b": "Oltásról döntés",
        "c1": "Tiniknek",
        "c2": null
      }
    }
  ]
};

let DATA = null;
let state = {
  a: null,
  b: null,
  c1: null,
  c2: null
};

const levelOrder = ["a", "b", "c1", "c2"];
const levelTitles = {
  a: "Válassz fő témát",
  b: "Válassz élethelyzetet",
  c1: "Pontosítsd az érintett területet vagy célcsoportot",
  c2: "Válassz pontosítást"
};
const levelHints = {
  a: "Az első lépésben csak a legnagyobb irányt választjuk ki.",
  b: "Itt már csak az adott fő témához tartozó, valóban releváns élethelyzetek jelennek meg.",
  c1: "Ez a réteg szűkíti le a találatokat betegségcsoport, terület vagy célcsoport szerint.",
  c2: "Ez csak ott jelenik meg, ahol a fa még tovább pontosítható."
};

async function loadData() {
  try {
    const response = await fetch("data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("A data.json nem tölthető be.");
    return await response.json();
  } catch (error) {
    console.warn("A prototípus a beépített tartalék adatokkal fut.", error);
    return EMBEDDED_DATA;
  }
}

function matchesPrevious(path, levelKey) {
  const levelIndex = levelOrder.indexOf(levelKey);
  return levelOrder.slice(0, levelIndex).every(key => {
    return state[key] === null || path[key] === state[key];
  });
}

function matchesCurrentState(path) {
  return levelOrder.every(key => {
    return state[key] === null || path[key] === state[key];
  });
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function projectNamesFor(paths) {
  const names = [];
  paths.forEach(path => {
    path.projects.forEach(name => {
      if (!names.includes(name)) names.push(name);
    });
  });
  return names;
}

function getOptions(levelKey) {
  const rows = DATA.paths.filter(path => matchesPrevious(path, levelKey));
  const values = unique(rows.map(path => path[levelKey]));
  return values.map(value => {
    const matchingRows = rows.filter(path => path[levelKey] === value);
    return {
      value,
      rows: matchingRows.length,
      projects: projectNamesFor(matchingRows)
    };
  });
}

function getCurrentLevel() {
  for (const key of levelOrder) {
    const options = getOptions(key);
    if (options.length > 0 && state[key] === null) {
      return key;
    }
  }
  return null;
}

function setChoice(levelKey, value) {
  const index = levelOrder.indexOf(levelKey);
  state[levelKey] = value;
  levelOrder.slice(index + 1).forEach(key => state[key] = null);
  render();
}

function resetState() {
  state = { a: null, b: null, c1: null, c2: null };
  render();
}

function setDemo(demoState) {
  state = {
    a: demoState.a || null,
    b: demoState.b || null,
    c1: demoState.c1 || null,
    c2: demoState.c2 || null
  };
  render();
}

function renderBreadcrumb() {
  const wrapper = document.getElementById("breadcrumb");
  wrapper.replaceChildren();

  const selected = levelOrder.filter(key => state[key] !== null);

  if (selected.length === 0) {
    const li = document.createElement("li");
    li.className = "empty-state";
    li.textContent = "Még nincs kiválasztott útvonal.";
    wrapper.appendChild(li);
    return;
  }

  selected.forEach(key => {
    const layer = DATA.layers.find(item => item.key === key);
    const li = document.createElement("li");
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = layer ? layer.name : key;
    const value = document.createElement("span");
    value.className = "value";
    value.textContent = state[key];
    li.append(label, value);
    wrapper.appendChild(li);
  });
}

function renderLayerLegend() {
  const wrapper = document.getElementById("layerLegend");
  wrapper.replaceChildren();

  DATA.layers.forEach(layer => {
    const item = document.createElement("div");
    item.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "legend-dot";
    dot.style.background = layer.color;

    const text = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = layer.name;
    const description = document.createElement("span");
    description.textContent = layer.description;
    text.append(name, description);

    item.append(dot, text);
    wrapper.appendChild(item);
  });
}

function renderDemoButtons() {
  const wrapper = document.getElementById("demoButtons");
  wrapper.replaceChildren();

  DATA.demoPaths.forEach(demo => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-button";
    button.textContent = demo.label;
    button.addEventListener("click", () => setDemo(demo.state));
    wrapper.appendChild(button);
  });
}

function renderStepPanel() {
  const panel = document.getElementById("stepPanel");
  panel.replaceChildren();

  const currentLevel = getCurrentLevel();

  if (!currentLevel) {
    const title = document.createElement("h2");
    title.textContent = "Ajánlott projektoldalak";
    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = "A választott útvonal alapján ezek a külső projektoldalak a legrelevánsabbak.";
    panel.append(title, hint);
    return;
  }

  const title = document.createElement("h2");
  title.textContent = levelTitles[currentLevel];

  const hint = document.createElement("p");
  hint.className = "hint";
  hint.textContent = levelHints[currentLevel];

  const choices = document.createElement("div");
  choices.className = "choice-grid";

  getOptions(currentLevel).forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-button";
    button.addEventListener("click", () => setChoice(currentLevel, option.value));

    const copy = document.createElement("div");
    const choiceTitle = document.createElement("div");
    choiceTitle.className = "choice-title";
    choiceTitle.textContent = option.value;

    const meta = document.createElement("div");
    meta.className = "choice-meta";
    meta.textContent = `${option.rows} döntési útvonal · ${option.projects.length} projekt`;

    copy.append(choiceTitle, meta);

    const badge = document.createElement("span");
    badge.className = `badge ${currentLevel}`;
    badge.textContent = currentLevel.toUpperCase();

    button.append(copy, badge);
    choices.appendChild(button);
  });

  panel.append(title, hint, choices);
}

function renderResults() {
  const wrapper = document.getElementById("resultsPanel");
  wrapper.replaceChildren();

  if (getCurrentLevel()) return;

  const rows = DATA.paths.filter(matchesCurrentState);
  const projectNames = projectNamesFor(rows);

  const summary = document.createElement("div");
  summary.className = "result-summary";

  const title = document.createElement("h2");
  title.textContent = `${projectNames.length} ajánlott projekt`;

  const text = document.createElement("p");
  text.textContent = `${rows.length} döntési útvonal illeszkedik a kiválasztott kombinációra.`;

  summary.append(title, text);
  wrapper.appendChild(summary);

  const grid = document.createElement("div");
  grid.className = "project-grid";

  projectNames.forEach(name => {
    const project = DATA.projects[name];
    if (!project) return;

    const card = document.createElement("article");
    card.className = "project-card";

    const heading = document.createElement("h3");
    heading.textContent = project.name;

    const summaryText = document.createElement("p");
    summaryText.textContent = project.summary;

    const tags = document.createElement("div");
    tags.className = "tag-row";
    project.tags.visible.forEach(tag => {
      const chip = document.createElement("span");
      chip.className = "tag";
      chip.textContent = tag;
      tags.appendChild(chip);
    });

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Projekt megnyitása";

    card.append(heading, summaryText, tags, link);
    grid.appendChild(card);
  });

  wrapper.appendChild(grid);
}

function renderPathTable() {
  const wrapper = document.getElementById("pathTable");
  wrapper.replaceChildren();

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["A", "B", "C1", "C2", "Ajánlott projektek"].forEach(label => {
    const th = document.createElement("th");
    th.textContent = label;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  const tbody = document.createElement("tbody");
  DATA.paths.forEach(path => {
    const tr = document.createElement("tr");
    [path.a, path.b, path.c1, path.c2 || "", path.projects.join(", ")].forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.append(thead, tbody);
  wrapper.appendChild(table);
}

function render() {
  renderBreadcrumb();
  renderStepPanel();
  renderResults();
}

document.addEventListener("DOMContentLoaded", async () => {
  DATA = await loadData();
  renderLayerLegend();
  renderDemoButtons();
  renderPathTable();
  document.getElementById("resetBtn").addEventListener("click", resetState);
  render();
});
