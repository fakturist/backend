# 🧾 Fakturist

**Fakturist** ist ein modularer Rechnungsservice, entwickelt mit TypeScript und Express. Ziel ist es, einen skalierbaren Multi-Tenant-Service zur automatisierten Rechnungserstellung zu bieten – inklusive PDF-Generierung, Kundenverwaltung, wiederkehrender Posten und E-Rechnungen.

## 🚀 Projektstatus

> ⚙️ Aktuell im Aufbau – MVP-Phase: PDF-Generierung mit wiederverwendbaren Posten und Kunden.

## 📦 Tech-Stack

- [x] Node.js + Express
- [x] TypeScript
- [x] SQLite (mit Prisma ORM)
- [ ] PDF-Generierung (geplant)
- [ ] E-Mail-Versand (geplant)
- [ ] Multi-Tenant-Struktur (geplant)

## 🛠️ Entwicklung

### Setup

```bash
git clone https://github.com/fakturist/backend.git
cd backend
npm install
```

### Lokaler Start

```bash
npm run dev
```

### Test-Endpunkt

```http request
GET /api/health
```

Antwort:

```json
{
  "status": "ok",
  "message": "Fakturist lebt!"
}
```

## 📁 Projektstruktur

```bash
src/
├── routes/       # API-Endpunkte
├── app.ts        # Express-Konfiguration
└── server.ts     # Serverstart
```

## 🧩 Geplante Features

* Kundenverwaltung
* Wiederkehrende Posten
* PDF-Erzeugung (Rechnungen)
* Versand per E-Mail
* E-Rechnungs-Export (XRechnung/ZUGFeRD)
* Benutzerverwaltung & Auth
* Multi-Tenant-Fähigkeit

## ❤️ Mitwirken

Pull Requests und Ideen willkommen! Dies ist ein Open-Source-Projekt, das sich laufend weiterentwickelt.

## 📄 Lizenz

MIT License – frei nutzbar mit Attribution.
