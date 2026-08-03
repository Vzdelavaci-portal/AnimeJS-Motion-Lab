# Gooey Menu

## English

Gooey Menu is an interactive liquid-style navigation component built with HTML, CSS, JavaScript and Anime.js.

The menu starts as a single floating action button. After clicking it, multiple navigation items smoothly spread outward and visually merge through an SVG gooey filter. Anime.js controls the staggered movement, elastic scaling, rotation and closing sequence.

The result is a playful but polished navigation effect suitable for creative websites, portfolios, landing pages and experimental user interfaces.

## Features

* Interactive floating action button
* Liquid gooey effect
* SVG blur and color matrix filter
* Five animated menu items
* Staggered opening sequence
* Elastic Anime.js motion
* Animated plus-to-close icon
* Hover labels
* Keyboard support
* Escape key closing
* Responsive layout
* Ambient background animations
* Animated status indicator
* Reduced motion support

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js
* SVG Filters

## Project Structure

```text
06-GooeyMenu/
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

## How the Gooey Effect Works

The liquid effect is created using an SVG filter:

```html
<filter id="gooey">
    <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="12"
        result="blur"
    />

    <feColorMatrix
        in="blur"
        mode="matrix"
        values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 24 -10
        "
        result="gooey"
    />

    <feComposite
        in="SourceGraphic"
        in2="gooey"
        operator="atop"
    />
</filter>
```

The Gaussian blur softens the shapes, while the color matrix increases the alpha contrast. Nearby circles then visually merge into one liquid form.

The filter is applied to the separate background layer:

```css
.gooey-layer {
    filter: url("#gooey");
}
```

The actual clickable icons remain outside the filtered layer, so they stay sharp and readable.

## Menu Positions

The position of every menu item is configured in `script.js`:

```javascript
const itemPositions = [
    {
        x: -145,
        y: 22
    },
    {
        x: -78,
        y: -102
    },
    {
        x: 0,
        y: -132
    },
    {
        x: 78,
        y: -102
    },
    {
        x: 145,
        y: 22
    }
];
```

Change the `x` and `y` values to create a different menu layout.

For example, the menu can expand:

* horizontally,
* vertically,
* in a complete circle,
* in a semicircle,
* diagonally.

## Opening Animation

When the menu opens, Anime.js animates:

* the plus icon into a close icon,
* the liquid background circles,
* the connecting bridge shapes,
* the visible navigation buttons,
* scale and rotation,
* opacity,
* staggered delays.

The spring easing gives the buttons a soft elastic motion:

```javascript
ease: spring({
    bounce: 0.5,
    duration: 720
})
```

## Closing Animation

The items close in reverse order and merge back into the center button.

The animation includes:

* reverse stagger,
* movement back to the center,
* shrinking,
* fading,
* icon rotation,
* center button bounce.

## Menu Items

The project contains five example items:

* Home
* Profile
* Messages
* Favorites
* Settings

You can change their labels and icons directly in `index.html`.

Example:

```html
<a
    href="#"
    class="menu-item item-one"
    aria-label="Home"
    data-label="Home"
>
    <span class="menu-icon">⌂</span>
</a>
```

The value in `data-label` appears as the hover tooltip.

## Keyboard Accessibility

The project includes basic keyboard support:

* The main button can be focused with the keyboard.
* Menu items become focusable only when the menu is open.
* The `Escape` key closes the menu.
* `aria-expanded` describes the current state.
* Accessible labels are included for the controls.

## Customization

You can easily modify:

* Menu item count
* Menu item positions
* Labels and icons
* Main accent color
* Button sizes
* SVG blur strength
* Gooey filter intensity
* Animation speed
* Spring bounce
* Background decorations
* Responsive behavior

## Accent Color

The main color is controlled through CSS variables:

```css
:root {
    --accent: #a3ff12;
    --accent-light: #d4ff77;
    --accent-dark: #66b900;
}
```

Changing these values updates the menu bubbles, gradient text, status lights and glow effects.

## Gooey Intensity

The blur strength can be changed here:

```html
<feGaussianBlur
    stdDeviation="12"
/>
```

A higher value creates softer and wider liquid connections.

A lower value creates sharper shapes.

The alpha contrast is controlled by the final values in the SVG color matrix:

```text
0 0 0 24 -10
```

Large changes can produce very different liquid results, so adjust these values gradually.

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/06-GooeyMenu/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/06-GooeyMenu

---

# Gooey Menu

## Česky

Gooey Menu je interaktivní navigační komponenta s tekutým efektem vytvořená pomocí HTML, CSS, JavaScriptu, Anime.js a SVG filtrů.

Menu začíná jako jedno kulaté plovoucí tlačítko. Po kliknutí se z něj plynule rozbalí několik navigačních položek, které se díky SVG gooey filtru vizuálně propojí do tekutého tvaru. Anime.js řídí jejich postupný pohyb, pružné zvětšení, rotaci i návrat zpět do středu.

Výsledkem je hravá, ale zároveň moderní navigace vhodná pro kreativní weby, portfolia, landing pages nebo experimentální uživatelská rozhraní.

## Funkce

* Interaktivní plovoucí tlačítko
* Tekutý gooey efekt
* SVG blur a color matrix filtr
* Pět animovaných položek
* Postupné rozbalení menu
* Pružný pohyb pomocí Anime.js
* Přeměna plusu na křížek
* Popisky při najetí
* Podpora klávesnice
* Zavření klávesou Escape
* Responzivní rozložení
* Animované pozadí
* Stavový indikátor
* Podpora omezení animací

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js
* SVG filtry

## Struktura projektu

```text
06-GooeyMenu/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je importováno jako ES modul, proto je potřeba projekt otevřít přes lokální vývojový server.

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

## Jak funguje gooey efekt

Tekutý efekt vytváří SVG filtr:

```html
<filter id="gooey">
    <feGaussianBlur
        in="SourceGraphic"
        stdDeviation="12"
        result="blur"
    />

    <feColorMatrix
        in="blur"
        mode="matrix"
        values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 24 -10
        "
        result="gooey"
    />

    <feComposite
        in="SourceGraphic"
        in2="gooey"
        operator="atop"
    />
</filter>
```

Gaussian blur tvary rozmaže a color matrix následně zvýší kontrast průhlednosti. Kružnice umístěné blízko sebe se díky tomu vizuálně spojí do jednoho tekutého tvaru.

Filtr je použit na samostatnou vrstvu:

```css
.gooey-layer {
    filter: url("#gooey");
}
```

Klikatelné ikony jsou mimo filtrovanou vrstvu, takže zůstávají ostré a dobře čitelné.

## Pozice položek

Pozice každé položky menu je nastavena v `script.js`:

```javascript
const itemPositions = [
    {
        x: -145,
        y: 22
    },
    {
        x: -78,
        y: -102
    },
    {
        x: 0,
        y: -132
    },
    {
        x: 78,
        y: -102
    },
    {
        x: 145,
        y: 22
    }
];
```

Změnou hodnot `x` a `y` lze vytvořit jiné rozložení.

Menu se může rozbalovat například:

* vodorovně,
* svisle,
* do celého kruhu,
* do půlkruhu,
* diagonálně.

## Animace otevření

Při otevření Anime.js animuje:

* změnu plusu na křížek,
* tekuté kruhy v pozadí,
* spojovací tvary,
* viditelná navigační tlačítka,
* měřítko a rotaci,
* průhlednost,
* postupné zpoždění položek.

Spring easing vytváří měkký pružný pohyb:

```javascript
ease: spring({
    bounce: 0.5,
    duration: 720
})
```

## Animace zavření

Položky se zavírají v opačném pořadí a postupně se slévají zpět do hlavního tlačítka.

Animace obsahuje:

* obrácený stagger,
* návrat do středu,
* zmenšení,
* zmizení,
* otočení ikony,
* odskočení hlavního tlačítka.

## Položky menu

Projekt obsahuje pět ukázkových položek:

* Home
* Profile
* Messages
* Favorites
* Settings

Jejich názvy a ikony lze změnit přímo v `index.html`.

Příklad:

```html
<a
    href="#"
    class="menu-item item-one"
    aria-label="Home"
    data-label="Home"
>
    <span class="menu-icon">⌂</span>
</a>
```

Hodnota `data-label` se zobrazí jako popisek při najetí kurzoru.

## Přístupnost

Projekt obsahuje základní podporu klávesnice:

* Hlavní tlačítko lze ovládat klávesnicí.
* Položky jsou dostupné pro focus pouze při otevřeném menu.
* Klávesa `Escape` menu zavře.
* `aria-expanded` informuje o aktuálním stavu.
* Ovládací prvky obsahují přístupné popisky.

## Přizpůsobení

Snadno lze změnit:

* Počet položek
* Pozice položek
* Texty a ikony
* Hlavní barvu
* Velikosti tlačítek
* Sílu SVG blur efektu
* Intenzitu gooey filtru
* Rychlost animací
* Pružnost pohybu
* Dekorace pozadí
* Responzivní chování

## Hlavní barva

Barevnost menu řídí CSS proměnné:

```css
:root {
    --accent: #a3ff12;
    --accent-light: #d4ff77;
    --accent-dark: #66b900;
}
```

Jejich změnou se upraví bubliny, gradientový text, stavové kontrolky i glow efekty.

## Intenzita gooey efektu

Sílu rozmazání lze upravit zde:

```html
<feGaussianBlur
    stdDeviation="12"
/>
```

Vyšší hodnota vytvoří měkčí a širší tekuté spojení.

Nižší hodnota vytvoří ostřejší tvary.

Kontrast průhlednosti řídí poslední hodnoty SVG matice:

```text
0 0 0 24 -10
```

Tyto hodnoty upravuj postupně, protože i menší změna může výrazně ovlivnit výsledný efekt.

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/06-GooeyMenu/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/06-GooeyMenu

## License

This project is available for educational and personal use.
