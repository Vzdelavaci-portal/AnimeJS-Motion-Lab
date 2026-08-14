# Animated Sidebar

## English

Animated Sidebar is a responsive dashboard navigation component built with HTML, CSS, JavaScript and Anime.js.

The project demonstrates how a traditional sidebar can be transformed into a smooth, interactive interface with animated expand and collapse states, active navigation indicators, staggered labels, icon interactions and responsive mobile behavior.

The dashboard layout is included to show how the sidebar behaves in a realistic application environment.

## Features

* Animated expand and collapse
* Smooth active navigation indicator
* Staggered menu label animations
* Animated navigation icons
* Responsive dashboard layout
* Mobile slide-in sidebar
* Animated mobile backdrop
* Keyboard support
* Escape key closing
* Dynamic dashboard content
* Animated statistics cards
* Interactive chart animation
* Floating focus visualization
* Ambient Anime.js animations
* Reduced motion support

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
09-AnimatedSidebar/
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

## Sidebar States

The sidebar supports two desktop states.

### Expanded

The expanded sidebar displays:

* Logo
* Navigation icons
* Navigation labels
* Section numbers
* User profile
* Collapse control

### Collapsed

The collapsed sidebar keeps only the essential icons visible.

Text labels and secondary information smoothly disappear before the sidebar becomes smaller.

When expanded again, the labels return with staggered Anime.js animations.

## Active Navigation Indicator

The selected navigation item is highlighted by a moving background indicator.

Its target position is calculated from the selected menu item:

```javascript
function getIndicatorTarget(item) {
    const nav =
        item.closest(".sidebar-nav");

    const navBounds =
        nav.getBoundingClientRect();

    const itemBounds =
        item.getBoundingClientRect();

    return {
        y:
            itemBounds.top -
            navBounds.top
    };
}
```

Anime.js then moves the indicator using spring easing:

```javascript
animate(activeIndicator, {
    y: target.y,

    duration: 620,

    ease: spring({
        bounce: 0.28,
        duration: 620
    })
});
```

This creates a smooth transition between navigation items.

## Expand and Collapse Animation

The sidebar changes between expanded and collapsed states by animating:

* Width
* Flex basis
* Label opacity
* Label position
* Profile information
* Navigation metadata
* Collapse arrow

For example:

```javascript
animate(sidebar, {
    width: 92,
    flexBasis: 92,

    duration: 650,
    ease: "outExpo"
});
```

When expanding, hidden elements are explicitly restored:

```javascript
opacity: {
    from: 0,
    to: 1
},

x: {
    from: -12,
    to: 0
}
```

This ensures the sidebar can be opened and closed repeatedly without leaving labels hidden.

## Dynamic Views

Each navigation item represents a dashboard view.

Available example views include:

* Dashboard
* Analytics
* Projects
* Animations
* Messages
* Settings

The content is configured inside the `views` object:

```javascript
const views = {
    dashboard: {
        kicker: "OVERVIEW",
        title: "Dashboard",
        description:
            "A responsive animated workspace with a dynamic sidebar, active navigation and smooth Anime.js transitions."
    }
};
```

When a new item is selected, the current content fades out and the new view enters with a smooth transition.

## Animated Icons

Clicking a menu item also animates its icon.

The icon briefly:

* shrinks,
* expands,
* rotates,
* returns to its original state.

This provides immediate visual feedback without overwhelming the interface.

## Mobile Sidebar

On smaller screens, the sidebar becomes an off-canvas navigation panel.

Opening the sidebar animates:

* Sidebar position
* Navigation items
* Dark backdrop
* Mobile menu icon

The backdrop can also be clicked to close the sidebar.

The `Escape` key closes it as well.

## Dashboard Animation

The project also includes an animated dashboard containing:

* Statistic cards
* Motion performance chart
* Animated chart line
* Data points
* Focus visualization
* Rotating rings
* Floating center object

These elements help demonstrate the sidebar inside a realistic application interface.

## Responsive Design

The layout automatically adapts to different screen sizes.

### Desktop

* Expandable sidebar
* Full navigation labels
* Dashboard content beside the sidebar

### Tablet

* Reduced dashboard grid
* Responsive content cards

### Mobile

* Off-canvas sidebar
* Mobile menu button
* Backdrop overlay
* Single-column dashboard

## Customization

You can easily modify:

* Sidebar width
* Collapsed width
* Navigation items
* Icons
* Accent colors
* Animation duration
* Spring strength
* Dashboard content
* Profile information
* Mobile breakpoint
* Card styling

## Sidebar Width

The sidebar dimensions are controlled through CSS variables:

```css
:root {
    --sidebar-expanded: 290px;
    --sidebar-collapsed: 92px;
}
```

Change these values to create a narrower or wider navigation.

## Color Palette

The main interface colors are controlled here:

```css
:root {
    --purple: #8b5cf6;
    --cyan: #22d3ee;
    --pink: #ec4899;
    --green: #71f6a2;
}
```

You can replace them with your own brand colors.

## Animation Style

The project combines several Anime.js techniques:

* Timelines
* Stagger
* Spring easing
* Scale animations
* Opacity transitions
* Rotation
* Position transitions
* Infinite ambient loops

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/09-AnimatedSidebar/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/09-AnimatedSidebar

---

# Animated Sidebar

## Česky

Animated Sidebar je responzivní navigace pro dashboard vytvořená pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Projekt ukazuje, jak lze klasický sidebar proměnit v moderní interaktivní rozhraní s animovaným rozbalením a sbalením, pohyblivým indikátorem aktivní položky, postupným zobrazováním textů, animovanými ikonami a responzivním mobilním režimem.

Součástí projektu je také ukázkový dashboard, aby bylo vidět, jak sidebar funguje v reálném rozhraní aplikace.

## Funkce

* Animované rozbalení a sbalení sidebaru
* Plynulý indikátor aktivní položky
* Stagger animace textových popisků
* Animované ikony
* Responzivní dashboard
* Mobilní sidebar vysouvaný zleva
* Animované ztmavení pozadí
* Podpora klávesnice
* Zavření pomocí Escape
* Dynamický obsah dashboardu
* Animované statistické karty
* Animace grafu
* Vizualizace aktuálního projektu
* Ambientní Anime.js animace
* Reduced Motion podpora

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
09-AnimatedSidebar/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je importováno jako ES modul, proto projekt spusť přes lokální server.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a otevři `index.html` pomocí:

```text
Open with Live Server
```

### Python

Nebo spusť:

```bash
python -m http.server
```

Potom otevři:

```text
http://localhost:8000
```

## Stavy sidebaru

Sidebar podporuje na desktopu dva režimy.

### Rozbalený

Zobrazuje:

* Logo
* Ikony
* Názvy položek
* Čísla sekcí
* Profil uživatele
* Tlačítko pro sbalení

### Sbalený

Po sbalení zůstanou viditelné pouze důležité ikony.

Texty a vedlejší informace nejprve plynule zmizí a následně se zmenší šířka sidebaru.

Po opětovném otevření se texty zobrazí pomocí stagger Anime.js animace.

## Indikátor aktivní položky

Aktivní položku zvýrazňuje pohyblivý indikátor.

Jeho pozice se vypočítá podle vybrané položky:

```javascript
function getIndicatorTarget(item) {
    const nav =
        item.closest(".sidebar-nav");

    const navBounds =
        nav.getBoundingClientRect();

    const itemBounds =
        item.getBoundingClientRect();

    return {
        y:
            itemBounds.top -
            navBounds.top
    };
}
```

Potom Anime.js animuje jeho přesun:

```javascript
animate(activeIndicator, {
    y: target.y,

    duration: 620,

    ease: spring({
        bounce: 0.28,
        duration: 620
    })
});
```

Výsledkem je plynulý pohyb zvýraznění mezi jednotlivými položkami menu.

## Animace sbalení a rozbalení

Při změně stavu se animují:

* Šířka sidebaru
* Flex basis
* Průhlednost textů
* Pozice textů
* Informace o profilu
* Čísla položek
* Šipka tlačítka

Například sbalení:

```javascript
animate(sidebar, {
    width: 92,
    flexBasis: 92,

    duration: 650,
    ease: "outExpo"
});
```

Při rozbalení se texty explicitně vrací:

```javascript
opacity: {
    from: 0,
    to: 1
},

x: {
    from: -12,
    to: 0
}
```

Díky tomu lze sidebar opakovaně otevírat a zavírat bez problémů se skrytými texty.

## Dynamické pohledy

Jednotlivé položky reprezentují různé části dashboardu.

Ukázkově obsahují:

* Dashboard
* Analytics
* Projects
* Animations
* Messages
* Settings

Texty jednotlivých pohledů jsou uložené v objektu:

```javascript
const views = {
    dashboard: {
        kicker: "OVERVIEW",
        title: "Dashboard",
        description:
            "A responsive animated workspace with a dynamic sidebar, active navigation and smooth Anime.js transitions."
    }
};
```

Po kliknutí se stávající obsah krátce skryje a nový pohled se plynule zobrazí.

## Animované ikony

Po kliknutí na položku se její ikona krátce animuje.

Postupně:

* se zmenší,
* zvětší,
* lehce otočí,
* vrátí do původního stavu.

Tím uživatel okamžitě dostane vizuální odezvu.

## Mobilní sidebar

Na menších displejích se sidebar změní na vysouvací panel.

Při otevření se animuje:

* Sidebar z levé strany
* Jednotlivé položky menu
* Tmavý backdrop
* Mobilní menu ikona

Kliknutím na backdrop lze panel zavřít.

Stejně funguje i klávesa `Escape`.

## Dashboard

Projekt obsahuje také ukázkový dashboard s:

* Statistikami
* Grafem Motion Performance
* Animovanou čárou
* Datovými body
* Vizualizací aktuálního projektu
* Rotujícími kruhy
* Plovoucím středovým prvkem

Dashboard slouží především jako prostředí pro demonstraci sidebaru.

## Responzivní design

Rozhraní se automaticky přizpůsobuje velikosti displeje.

### Desktop

* Rozbalovací sidebar
* Kompletní navigace
* Dashboard vedle sidebaru

### Tablet

* Upravené rozložení statistik
* Responzivní karty

### Mobil

* Off-canvas sidebar
* Mobilní menu tlačítko
* Backdrop
* Dashboard v jednom sloupci

## Přizpůsobení

Snadno lze změnit:

* Šířku sidebaru
* Šířku sbaleného režimu
* Položky menu
* Ikony
* Barevnou paletu
* Rychlost animací
* Spring efekt
* Obsah dashboardu
* Profil
* Mobilní breakpoint
* Vzhled karet

## Šířka sidebaru

Rozměry řídí CSS proměnné:

```css
:root {
    --sidebar-expanded: 290px;
    --sidebar-collapsed: 92px;
}
```

## Barvy

Hlavní barvy projektu jsou:

```css
:root {
    --purple: #8b5cf6;
    --cyan: #22d3ee;
    --pink: #ec4899;
    --green: #71f6a2;
}
```

Lze je jednoduše nahradit vlastní barevnou paletou.

## Použité animační techniky

Projekt kombinuje:

* Anime.js Timeline
* Stagger
* Spring easing
* Scale
* Opacity
* Rotation
* Position animation
* Nekonečné ambientní animace

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/09-AnimatedSidebar/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/09-AnimatedSidebar

## License

This project is available for educational and personal use.
