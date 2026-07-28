# Hero Intro

## English

Hero Intro is a cinematic landing page animation built with HTML, CSS, JavaScript and Anime.js.

The project demonstrates how to create a complete animated hero section with a loading sequence, masked text reveals, animated navigation, floating interface elements and subtle cursor-based parallax.

Instead of showing all content immediately, the page introduces each element in a carefully timed sequence to create a more polished and memorable first impression.

## Features

* Cinematic loading screen
* Animated loading percentage
* Progress line animation
* Masked headline reveal
* Staggered text entrance
* Animated navigation
* CTA button entrance
* Replay animation button
* Interactive cursor parallax
* Rotating motion rings
* Floating information cards
* Animated glowing core
* Ambient background movement
* Responsive layout
* Reduced motion support

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
05-HeroIntro/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Anime.js is imported as an ES module, so the project should be opened through a local development server.

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

## Intro Sequence

The intro animation is divided into two main stages.

### Loading Screen

The loading screen includes:

* Animated percentage counter
* Horizontal progress line
* Loading label
* Full-screen exit transition

After reaching 100%, the loader moves out of the viewport and starts the hero animation.

### Hero Reveal

The hero section reveals:

* Navigation
* Project badge
* Main headline
* Description
* Action buttons
* Visual frame
* Floating cards
* Footer information

The timing is controlled through an Anime.js timeline.

## Anime.js Timeline

The main entrance sequence is created using `createTimeline()`:

```javascript
const timeline = createTimeline({
    defaults: {
        ease: "outExpo"
    }
});
```

Each page element is added to the timeline with its own delay, duration and starting position.

This makes it possible to coordinate multiple animations without relying on many independent timeouts.

## Mask Reveal Effect

The headline and supporting content use wrappers with hidden overflow:

```css
.mask-wrapper {
    overflow: hidden;
}
```

The inner content starts below the visible area and moves upward:

```javascript
timeline.add(".title-word", {
    y: {
        from: "115%"
    },

    delay: stagger(110),

    duration: 1050
});
```

This creates a clean cinematic text reveal.

## Replay Animation

The intro can be replayed using the **Replay intro** button.

The button calls:

```javascript
playHeroIntro();
```

Before restarting, the animated elements are reset so the entrance sequence can run again.

## Parallax Effect

The visual panel reacts to pointer movement.

The cursor position is converted into normalized values and used to control:

* Horizontal rotation
* Vertical rotation
* Position offset
* Background grid movement

The movement is smoothed using `requestAnimationFrame()`.

## Ambient Animations

After the entrance animation finishes, several elements continue moving:

* Rotating rings
* Floating cards
* Glowing center object
* Background lights
* Status indicators
* Scroll indicator

These subtle loops keep the page visually active without distracting from the main content.

## Customization

You can easily modify:

* Hero headline
* Description
* Navigation links
* Button labels
* Accent color
* Loader duration
* Animation timing
* Parallax intensity
* Background grid
* Floating cards
* Motion ring speed

## Accent Color

The main highlight color is controlled through a CSS variable:

```css
:root {
    --accent: #b7ff2a;
}
```

Changing this value updates the buttons, status lights, logo and glow effects.

## Loader Duration

The progress animation duration can be adjusted in `script.js`:

```javascript
duration: 1500
```

Increase the value for a slower intro.

Decrease the value for a faster loading sequence.

## Responsive Design

The layout automatically changes on smaller screens:

* Two-column layout becomes one column
* Navigation links are hidden
* Typography scales down
* Buttons stack vertically
* Visual elements resize
* Footer content adjusts

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/05-HeroIntro/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/05-HeroIntro

---

# Hero Intro

## Česky

Hero Intro je filmově působící animovaná úvodní sekce vytvořená pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Projekt ukazuje, jak vytvořit kompletní moderní hero sekci s načítací obrazovkou, postupným odhalením textu, animovanou navigací, plovoucími prvky a jemným parallax efektem reagujícím na pohyb kurzoru.

Obsah se nezobrazí celý najednou. Jednotlivé prvky přicházejí v přesně načasované sekvenci, díky čemuž stránka působí profesionálněji a vytváří výraznější první dojem.

## Funkce

* Filmová načítací obrazovka
* Animované procento načítání
* Animace progress line
* Maskované odhalení nadpisu
* Postupný vstup textu
* Animovaná navigace
* Vstup CTA tlačítek
* Tlačítko pro opakování animace
* Parallax podle pohybu kurzoru
* Rotující kruhy
* Plovoucí informační karty
* Animované svítící jádro
* Pohyb světel v pozadí
* Responzivní rozložení
* Podpora omezení animací

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
05-HeroIntro/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je načítáno jako ES modul, proto je potřeba projekt spustit přes lokální server.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a otevři `index.html` pomocí:

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

## Průběh úvodní animace

Animace se skládá ze dvou hlavních částí.

### Načítací obrazovka

Obsahuje:

* Počítadlo procent
* Horizontální progress line
* Text načítání
* Animovaný odchod celé obrazovky

Po dosažení 100 % se loader vysune mimo obrazovku a spustí hlavní hero animaci.

### Odhalení hero sekce

Postupně se zobrazí:

* Navigace
* Projektový štítek
* Hlavní nadpis
* Popis
* Akční tlačítka
* Vizuální panel
* Plovoucí karty
* Informace v patičce

Načasování celé sekvence řídí Anime.js timeline.

## Anime.js Timeline

Hlavní vstupní animace používá `createTimeline()`:

```javascript
const timeline = createTimeline({
    defaults: {
        ease: "outExpo"
    }
});
```

Každý prvek má vlastní délku animace, zpoždění a počáteční pozici.

Díky tomu lze jednoduše koordinovat více animací bez použití velkého množství samostatných timeoutů.

## Mask Reveal efekt

Nadpis a další obsah používají wrapper se skrytým přetečením:

```css
.mask-wrapper {
    overflow: hidden;
}
```

Vnitřní obsah začíná pod viditelnou oblastí a následně se vysune nahoru:

```javascript
timeline.add(".title-word", {
    y: {
        from: "115%"
    },

    delay: stagger(110),

    duration: 1050
});
```

Tím vzniká čisté filmové odhalení textu.

## Opakování animace

Animaci lze znovu spustit pomocí tlačítka **Replay intro**.

Tlačítko zavolá:

```javascript
playHeroIntro();
```

Před opakováním se jednotlivé prvky resetují, aby se mohla celá vstupní sekvence přehrát znovu.

## Parallax efekt

Vizuální panel reaguje na pohyb kurzoru.

Pozice kurzoru se převádí na normalizované hodnoty, které ovládají:

* Natočení doprava a doleva
* Natočení nahoru a dolů
* Posun panelu
* Pohyb mřížky v pozadí

Pohyb je vyhlazen pomocí `requestAnimationFrame()`.

## Ambientní animace

Po dokončení úvodní sekvence se některé prvky pohybují dál:

* Rotující kruhy
* Plovoucí karty
* Svítící středový objekt
* Světla v pozadí
* Stavové indikátory
* Indikátor scrollování

Tyto jemné smyčky udržují stránku vizuálně živou, aniž by odváděly pozornost od hlavního obsahu.

## Přizpůsobení

Snadno lze upravit:

* Hlavní nadpis
* Popis
* Odkazy v navigaci
* Texty tlačítek
* Hlavní barvu
* Délku loaderu
* Načasování animací
* Intenzitu parallax efektu
* Mřížku v pozadí
* Plovoucí karty
* Rychlost otáčení kruhů

## Hlavní barva

Výrazná barva projektu je nastavena pomocí CSS proměnné:

```css
:root {
    --accent: #b7ff2a;
}
```

Změnou této hodnoty se upraví tlačítka, stavové kontrolky, logo i glow efekty.

## Délka loaderu

Rychlost načítací animace lze upravit v souboru `script.js`:

```javascript
duration: 1500
```

Vyšší hodnota vytvoří pomalejší úvod.

Nižší hodnota animaci zrychlí.

## Responzivní design

Na menších obrazovkách se automaticky upraví:

* Dvousloupcové rozložení se změní na jeden sloupec
* Odkazy v navigaci se skryjí
* Nadpis se zmenší
* Tlačítka se mohou zobrazit pod sebou
* Vizuální prvky se přizpůsobí šířce
* Patička změní rozložení

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/05-HeroIntro/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/05-HeroIntro

## License

This project is available for educational and personal use.
