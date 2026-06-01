# 👕 Interaktiver Outfit-Planer & Avatar-Customizer

Ein interaktiver Web-Prototyp, mit dem Nutzer einen eigenen Avatar im Snapchat-Stil anpassen und verschiedene Kleidungsstücke einer Marke zu individuellen Outfits kombinieren können. Die Anwendung läuft komplett im Browser und benötigt keine Server-Infrastruktur oder externe Bilddateien.

## 🚀 Features

- **Avatar-Anpassung:** Dynamische Änderung von Haut- und Haarfarbe per Klick über CSS-Variablen.
- **Interaktiver Kleiderschrank:** Modulares An- und Ausziehen von Oberteilen, Hosen und Schuhen.
- **Echtzeit-Shoplinks:** Dynamische Generierung von Produkt- und Kauf-Links basierend auf dem aktuell ausgewählten Outfit.
- **Speichern & Teilen:** Intelligentes Zustandssystem (State Management), das das aktuelle Outfit direkt in die URL codiert. Der generierte Link stellt den exakten Zustand beim Empfänger wieder her.
- **Vektorbasiert (SVG):** Keine Ladezeiten oder verpixelte Bilder, da alle Kleidungsstücke und der Avatar nativ als SVG-Pfade gerendert werden.

## 📁 Projektstruktur

Das Projekt ist sauber in die drei Kerntechnologien des Frontends aufgeteilt:

```text
├── index.html   # Das HTML5-Gerüst und die SVG-Basislayer
├── style.css    # Das Responsive Design, Layouts und CSS-Variablen
└── script.js    # Die Anwendungslogik, Datenbasis und URL-Generierung
