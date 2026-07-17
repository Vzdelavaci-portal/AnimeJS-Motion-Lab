# Typewriter Effect

## English

Typewriter Effect is an animated text component built with HTML, CSS, JavaScript and Anime.js.

The animation gradually writes multiple messages, pauses for a moment, deletes the text and continues with the next sentence. The project also includes a blinking cursor, animated status information and a pause control.

## Features

* Animated typing effect
* Automatic text deletion
* Multiple rotating messages
* Blinking cursor
* Pause and resume control
* Animated terminal interface
* Responsive layout
* Decorative background animations
* Built with Anime.js

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
02-Typewriter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Because Anime.js is loaded as an ES module, the project should be opened through a local development server.

### Visual Studio Code

Install the **Live Server** extension and open `index.html` using:

```text
Open with Live Server
```

### Python

You can also start a local server with Python:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000
```

## Custom Messages

You can change the displayed messages in `script.js`:

```javascript
const messages = [
    "Web animations feel alive",
    "Motion creates emotion",
    "Anime.js makes it smooth",
    "Code. Animate. Inspire."
];
```

Add, remove or edit any sentence inside the array.

## Animation Speed

Typing and deleting speeds can be adjusted inside the `animateText()` function:

```javascript
duration: isWriting
    ? text.length * 72
    : text.length * 34
```

A higher number creates a slower animation.

A lower number creates a faster animation.

## Live Demo

[Open Typewriter Effect](https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/02-Typewriter/)

## Source Code

[View the project on GitHub](https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/02-Typewriter)

---

# Efekt psacího stroje

## Česky

Typewriter Effect je animovaný textový prvek vytvořený pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Animace postupně vypisuje několik zpráv, na chvíli se zastaví, text smaže a pokračuje další větou. Projekt obsahuje také blikající kurzor, animované stavové informace a možnost animaci pozastavit.

## Funkce

* Animované psaní textu
* Automatické mazání textu
* Střídání několika zpráv
* Blikající kurzor
* Pozastavení a pokračování animace
* Animované rozhraní terminálu
* Responzivní rozložení
* Dekorativní animace pozadí
* Vytvořeno pomocí Anime.js

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
02-Typewriter/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Protože je Anime.js načítáno jako ES modul, je potřeba projekt spustit přes lokální vývojový server.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a otevři soubor `index.html` pomocí:

```text
Open with Live Server
```

### Python

Lokální server můžeš spustit také pomocí Pythonu:

```bash
python -m http.server
```

Potom otevři:

```text
http://localhost:8000
```

## Úprava zobrazovaných textů

Texty můžeš změnit v souboru `script.js`:

```javascript
const messages = [
    "Web animations feel alive",
    "Motion creates emotion",
    "Anime.js makes it smooth",
    "Code. Animate. Inspire."
];
```

Do pole můžeš přidávat další věty nebo stávající texty upravit.

## Rychlost animace

Rychlost psaní a mazání lze změnit ve funkci `animateText()`:

```javascript
duration: isWriting
    ? text.length * 72
    : text.length * 34
```

Vyšší číslo znamená pomalejší animaci.

Nižší číslo znamená rychlejší animaci.

## Živá ukázka

[Otevřít Typewriter Effect](https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/02-Typewriter/)

## Zdrojový kód

[Zobrazit projekt na GitHubu](https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/02-Typewriter)

## License

This project is available for educational and personal use.
