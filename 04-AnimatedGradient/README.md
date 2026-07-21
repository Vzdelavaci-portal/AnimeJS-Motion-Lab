# Animated Gradient Mesh

## English

Animated Gradient Mesh is a premium animated background built with HTML, CSS, JavaScript and Anime.js.

Instead of using a simple linear gradient, this project combines multiple blurred color layers, soft lighting and smooth organic movement to create a modern mesh gradient similar to those used by companies like Stripe, Linear, Framer and many AI startups.

The animation reacts to cursor movement with a subtle parallax effect and allows switching between multiple color themes.

## Features

* Animated mesh gradient
* Smooth organic blob movement
* Anime.js powered animations
* Interactive cursor parallax
* Multiple color themes
* Premium glassmorphism interface
* Animated shine effect
* Dynamic gradient text
* Soft lighting and glow
* Noise texture overlay
* Responsive layout
* Modern landing page design

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
04-AnimatedGradient/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Anime.js is loaded as an ES module, therefore the project should be opened using a local development server.

### Visual Studio Code

Install the **Live Server** extension and open:

```text
index.html
```

using:

```text
Open with Live Server
```

### Python

Or start a local server:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000
```

## Color Themes

The project includes three built-in themes:

* 🌌 Aurora
* 🌅 Sunset
* 🌊 Ocean

Additional themes can be added inside the `themes` object in **script.js**.

## Gradient Blobs

Each blurred color layer is an independent animated element.

Example:

```javascript
const themes = {
    aurora: {
        colors: [
            "#7c3aed",
            "#2563eb",
            "#db2777",
            "#f97316",
            "#06b6d4",
            "#ffffff"
        ]
    }
};
```

Feel free to replace the colors with your own palette.

## Animation

Every blob moves independently using Anime.js.

Each animation includes:

* Position
* Scale
* Rotation
* Duration
* Loop
* Alternate motion

This creates a natural flowing effect instead of repetitive movement.

## Parallax Effect

Moving the mouse slightly shifts the entire background and glass card to create depth.

The effect is calculated using pointer position and updated with `requestAnimationFrame()` for maximum smoothness.

## Customization

You can easily modify:

* Background colors
* Blob sizes
* Blur amount
* Animation duration
* Movement range
* Number of blobs
* Glass effect
* Theme presets

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/04-AnimatedGradient/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/04-AnimatedGradient

---

# Animated Gradient Mesh

## Česky

Animated Gradient Mesh je moderní animované pozadí vytvořené pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Namísto obyčejného lineárního gradientu kombinuje několik rozmazaných barevných vrstev, jemné světelné efekty a plynulé organické animace, čímž vytváří živý **mesh gradient**, který dnes používají moderní technologické společnosti a AI startupy.

Pozadí reaguje na pohyb kurzoru jemným parallax efektem a umožňuje přepínání mezi několika barevnými motivy.

## Funkce

* Animovaný mesh gradient
* Organický pohyb barevných blobů
* Animace pomocí Anime.js
* Reakce na pohyb kurzoru
* Více barevných motivů
* Glassmorphism panel
* Animovaný světelný odlesk
* Dynamický gradientový nadpis
* Glow efekty
* Noise textura
* Responzivní design
* Moderní hero sekce

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
04-AnimatedGradient/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je načítáno jako ES modul, proto projekt spusť pomocí lokálního serveru.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a otevři:

```text
index.html
```

pomocí:

```text
Open with Live Server
```

### Python

Nebo spusť:

```bash
python -m http.server
```

a otevři:

```text
http://localhost:8000
```

## Barevné motivy

Projekt obsahuje tři připravené motivy:

* 🌌 Aurora
* 🌅 Sunset
* 🌊 Ocean

Další motivy lze jednoduše přidat do objektu `themes` v souboru **script.js**.

## Barevné vrstvy

Každý rozmazaný barevný blob je samostatně animovaný objekt.

Můžeš snadno měnit:

* barvy
* velikosti
* průhlednost
* rozmazání
* dobu animace
* trajektorii pohybu

## Parallax efekt

Pohyb myši vytváří jemný prostorový efekt.

Pozadí i glass panel se lehce naklánějí podle polohy kurzoru, což dodává celé stránce hloubku.

## Přizpůsobení

Projekt lze snadno upravit změnou:

* barev
* počtu blobů
* velikosti blobů
* intenzity blur efektu
* rychlosti animací
* rozsahu pohybu
* vzhledu glass panelu
* vlastních barevných motivů

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/04-AnimatedGradient/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/04-AnimatedGradient

## License

This project is available for educational and personal use.
