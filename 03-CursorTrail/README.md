# Cursor Trail

## English

Cursor Trail is an interactive visual effect built with HTML, CSS, JavaScript and Anime.js.

The project creates a colorful trail of glowing particles that follows the cursor across the screen. The particle size, movement and intensity react to the speed of the pointer, creating a smooth and dynamic motion effect.

The animation also supports touch input, so the effect can be used on both desktop and mobile devices.

## Features

* Interactive cursor trail
* Glowing animated particles
* Particle movement based on cursor speed
* Smooth interpolation between pointer positions
* Click particle burst
* Custom animated cursor
* Live particle and speed statistics
* Touch device support
* Responsive layout
* Animated background elements
* Built with Anime.js

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
03-CursorTrail/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Anime.js is loaded as an ES module, so the project should be opened through a local development server.

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

## Particle Settings

The maximum number of reusable particles can be changed in `script.js`:

```javascript
const maximumParticles = 42;
```

A higher value creates a denser trail but may require more processing power.

A lower value creates a lighter effect with fewer particles.

## Particle Colors

The colors used by the cursor trail are defined in the `colors` array:

```javascript
const colors = [
    "#9c6cff",
    "#6f7dff",
    "#38bdf8",
    "#42f5d7",
    "#ff5ca8",
    "#c084fc"
];
```

You can replace these values with your own color palette.

## Particle Spacing

The distance between generated particles can be adjusted here:

```javascript
const spacing =
    pointerType === "touch" ? 10 : 7;
```

A smaller number creates more particles.

A larger number creates a more separated trail.

## Particle Duration

The particle animation duration is controlled here:

```javascript
duration:
    620 + Math.random() * 250
```

Increase the value to keep particles visible longer.

Decrease the value to make the trail disappear faster.

## Live Demo

[Open Cursor Trail](https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/03-CursorTrail/)

## Source Code

[View the project on GitHub](https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/03-CursorTrail)

---

# Stopa za kurzorem

## Česky

Cursor Trail je interaktivní vizuální efekt vytvořený pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Projekt vytváří barevnou stopu svítících částic, která následuje kurzor po obrazovce. Velikost, pohyb a intenzita částic reagují na rychlost ukazatele, díky čemuž vzniká plynulý a dynamický efekt.

Animace podporuje také dotykové ovládání, takže ji lze používat na počítačích i mobilních zařízeních.

## Funkce

* Interaktivní stopa za kurzorem
* Svítící animované částice
* Reakce částic na rychlost kurzoru
* Plynulé doplňování částic mezi pozicemi
* Výbuch částic po kliknutí
* Vlastní animovaný kurzor
* Živé zobrazení počtu částic a rychlosti
* Podpora dotykových zařízení
* Responzivní rozložení
* Animované prvky pozadí
* Vytvořeno pomocí Anime.js

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
03-CursorTrail/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je načítáno jako ES modul, proto je potřeba projekt otevřít přes lokální vývojový server.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a otevři soubor `index.html` pomocí:

```text
Open with Live Server
```

### Python

Lokální server lze spustit také pomocí Pythonu:

```bash
python -m http.server
```

Potom otevři:

```text
http://localhost:8000
```

## Nastavení počtu částic

Maximální počet opakovaně používaných částic lze změnit v souboru `script.js`:

```javascript
const maximumParticles = 42;
```

Vyšší hodnota vytvoří hustší stopu, ale může vyžadovat větší výkon.

Nižší hodnota vytvoří jednodušší efekt s menším počtem částic.

## Barvy částic

Barvy používané ve stopě jsou definovány v poli `colors`:

```javascript
const colors = [
    "#9c6cff",
    "#6f7dff",
    "#38bdf8",
    "#42f5d7",
    "#ff5ca8",
    "#c084fc"
];
```

Tyto hodnoty můžeš nahradit vlastní barevnou paletou.

## Rozestupy mezi částicemi

Vzdálenost mezi vytvářenými částicemi lze změnit zde:

```javascript
const spacing =
    pointerType === "touch" ? 10 : 7;
```

Menší číslo vytvoří více částic.

Větší číslo vytvoří více oddělenou stopu.

## Délka animace částic

Doba animace částic je nastavena zde:

```javascript
duration:
    620 + Math.random() * 250
```

Vyšší hodnota ponechá částice viditelné déle.

Nižší hodnota způsobí rychlejší zmizení stopy.

## Živá ukázka

[Otevřít Cursor Trail](https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/03-CursorTrail/)

## Zdrojový kód

[Zobrazit projekt na GitHubu](https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/03-CursorTrail)

## License

This project is available for educational and personal use.
