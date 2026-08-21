# Animated Path

## English

Animated Path is an interactive SVG route animation built with HTML, CSS, JavaScript and Anime.js.

The project demonstrates how an SVG path can be progressively drawn while a glowing pulse travels along the route. Individual checkpoints become active as the pulse reaches them, creating a complete animated journey from start to finish.

The result combines SVG drawing, path-following motion, checkpoint animations, progress states and ambient effects in one visual experience.

## Features

* Animated SVG path drawing
* Glowing pulse following the route
* Multiple animated checkpoints
* Active and completed states
* Route progress tracking
* Replay animation button
* Gradient path colors
* SVG glow filter
* Animated route status
* Progress indicators
* Ambient background motion
* Responsive design
* Reduced motion support

## Technologies

* HTML5
* CSS3
* JavaScript
* SVG
* Anime.js

## Project Structure

```text id="6pkd3h"
10-AnimatedPath/
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

```text id="gkfk15"
Open with Live Server
```

### Python

You can also start a local HTTP server:

```bash id="s9zkra"
python -m http.server
```

Then open:

```text id="ykle9d"
http://localhost:8000
```

## How It Works

The animation is based on a single SVG path:

```html id="2m1fn7"
<path
    class="route-path"
    d="
        M 95 350
        C 160 330, 170 170, 280 150
        C 400 130, 410 320, 520 310
        C 640 300, 620 130, 740 125
        C 805 122, 820 195, 820 245
    "
/>
```

The same path is used for both the visual route and for calculating the moving pulse position.

## Path Drawing

The complete SVG path length is calculated in JavaScript:

```javascript id="e66jxc"
const routeLength =
    routePath.getTotalLength();
```

The line is then hidden using `strokeDasharray` and `strokeDashoffset`:

```javascript id="pdba1d"
routePath.style.strokeDasharray =
    `${routeLength}`;

routePath.style.strokeDashoffset =
    `${routeLength}`;
```

During the animation, the offset gradually moves toward zero:

```javascript id="0esrle"
routePath.style.strokeDashoffset =
    `${
        routeLength *
        (1 - progress)
    }`;
```

This creates the effect of the route drawing itself.

## Moving Pulse

The glowing pulse follows the exact same SVG route.

Its position is calculated using:

```javascript id="zq4jcu"
routePath.getPointAtLength();
```

Example:

```javascript id="gr31uq"
function pointOnPath(progress) {
    const point =
        routePath.getPointAtLength(
            routeLength * progress
        );

    return {
        x: point.x,
        y: point.y
    };
}
```

The SVG group containing the pulse is then moved to that position:

```javascript id="7w4yge"
movingPulse.setAttribute(
    "transform",
    `translate(${point.x} ${point.y})`
);
```

This keeps the pulse perfectly aligned with the route.

## Checkpoints

The path contains five checkpoints:

* Start
* Node 01
* Node 02
* Node 03
* Finish

Their approximate positions inside the animation are defined here:

```javascript id="wd4r79"
const checkpointProgress = [
    0,
    0.25,
    0.55,
    0.82,
    1
];
```

As the route progresses, the currently reached checkpoint becomes active.

Previous checkpoints switch to a completed state.

## Checkpoint States

A checkpoint can have three states:

### Waiting

The route has not reached the checkpoint yet.

### Active

The pulse is currently passing the checkpoint.

### Complete

The pulse has already passed it.

CSS classes are used to visually represent those states:

```text id="np9luj"
is-active
is-complete
```

Anime.js also creates a short scale animation when a checkpoint becomes active.

## Route Progress

The lower part of the interface mirrors the SVG checkpoints.

Each item shows:

* Checkpoint name
* Current state
* Colored status indicator

States automatically change between:

```text id="kmx5hl"
WAITING
ACTIVE
COMPLETE
```

## Route Status

The upper panel also displays the overall animation state.

For example:

```text id="h7tk9l"
INITIALIZING
ROUTE ACTIVE
ROUTE COMPLETE
```

This makes the animation feel more like an interactive navigation or tracking interface.

## Gradient Path

The route uses an SVG gradient:

```html id="sbu12a"
<linearGradient
    id="routeGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="0%"
>
```

The colors transition from:

```text id="8kwby6"
Cyan → Purple → Pink
```

The gradient can easily be customized inside `index.html`.

## SVG Glow

The route glow is created using an SVG blur filter:

```html id="m06n2k"
<filter id="routeGlow">

    <feGaussianBlur
        stdDeviation="7"
        result="blur"
    />

    <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
    </feMerge>

</filter>
```

This creates a bright neon appearance without requiring external assets.

## Animation Duration

The route animation duration is controlled here:

```javascript id="a6dmbk"
duration: 5200
```

Lower values make the pulse move faster.

For example:

```javascript id="otbivl"
duration: 2800
```

Higher values create a slower cinematic route:

```javascript id="0ubcpt"
duration: 8000
```

## Replay Animation

After the route reaches the finish point, the animation can be started again with the **REPLAY** button.

The route resets:

* SVG path
* Moving pulse
* Checkpoint states
* Progress indicators
* Route status

and starts from the beginning.

## Ambient Animations

Anime.js also controls continuous decorative motion:

* Animated gradient text
* Pulsing series indicator
* Moving background glows
* Pulsing route marker
* Finish checkpoint pulse

These animations remain subtle so the main path remains the focus.

## Customization

You can easily modify:

* SVG route
* Number of checkpoints
* Checkpoint positions
* Route speed
* Gradient colors
* Glow strength
* Route thickness
* Background
* Progress labels
* Animation timing

## Creating a Different Route

The route can be replaced simply by changing the SVG `d` attribute.

For example:

```html id="d4d7kp"
<path
    d="
        M 50 200
        C 200 50, 400 350, 800 150
    "
/>
```

The moving pulse will automatically follow the new path because JavaScript reads the actual SVG geometry.

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/10-AnimatedPath/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/10-AnimatedPath

---

# Animated Path

## Česky

Animated Path je interaktivní animace SVG trasy vytvořená pomocí HTML, CSS, JavaScriptu a knihovny Anime.js.

Projekt ukazuje postupné vykreslení SVG cesty, po které se současně pohybuje svítící bod. Během průchodu se aktivují jednotlivé checkpointy a jejich stav se mění z čekajícího na aktivní a následně dokončený.

Výsledkem je kompletní vizuální cesta kombinující SVG animaci, pohyb po trase, stavové indikátory a ambientní efekty.

## Funkce

* Postupné vykreslení SVG trasy
* Svítící bod pohybující se po cestě
* Animované checkpointy
* Aktivní a dokončené stavy
* Sledování průběhu trasy
* Tlačítko Replay
* Gradientová cesta
* SVG glow filtr
* Stav trasy
* Progress indikátory
* Ambientní animace
* Responzivní design
* Reduced Motion podpora

## Použité technologie

* HTML5
* CSS3
* JavaScript
* SVG
* Anime.js

## Struktura projektu

```text id="oc1ouv"
10-AnimatedPath/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je importováno jako ES modul, proto projekt spusť pomocí lokálního serveru.

### Visual Studio Code

Nainstaluj **Live Server** a otevři `index.html` pomocí:

```text id="zmbrss"
Open with Live Server
```

### Python

Můžeš použít také:

```bash id="4roltu"
python -m http.server
```

Potom otevři:

```text id="iz6gqy"
http://localhost:8000
```

## Jak animace funguje

Základem je jedna SVG cesta:

```html id="nvb98t"
<path
    class="route-path"
    d="
        M 95 350
        C 160 330, 170 170, 280 150
        C 400 130, 410 320, 520 310
        C 640 300, 620 130, 740 125
        C 805 122, 820 195, 820 245
    "
/>
```

Stejná cesta slouží pro vykreslování i výpočet pozice pohybujícího se bodu.

## Vykreslení cesty

Nejprve JavaScript zjistí celkovou délku SVG path:

```javascript id="je5csq"
const routeLength =
    routePath.getTotalLength();
```

Potom se cesta skryje pomocí:

```javascript id="pmzj7e"
routePath.style.strokeDasharray =
    `${routeLength}`;

routePath.style.strokeDashoffset =
    `${routeLength}`;
```

Během animace se `strokeDashoffset` postupně snižuje:

```javascript id="kv6sza"
routePath.style.strokeDashoffset =
    `${
        routeLength *
        (1 - progress)
    }`;
```

Tím vzniká efekt postupného kreslení čáry.

## Pohybující se bod

Svítící bod používá stejnou SVG trasu.

Pozice se získává pomocí:

```javascript id="bca6g5"
routePath.getPointAtLength();
```

Například:

```javascript id="xjseou"
function pointOnPath(progress) {
    const point =
        routePath.getPointAtLength(
            routeLength * progress
        );

    return {
        x: point.x,
        y: point.y
    };
}
```

Potom se SVG prvek přesune na vypočítané souřadnice.

Díky tomu bod přesně kopíruje trasu bez ohledu na její tvar.

## Checkpointy

Trasa obsahuje pět bodů:

* Start
* Node 01
* Node 02
* Node 03
* Finish

Jejich pozice v průběhu animace jsou definované:

```javascript id="qfl06v"
const checkpointProgress = [
    0,
    0.25,
    0.55,
    0.82,
    1
];
```

Jakmile animace dosáhne konkrétní hodnoty, aktivuje se odpovídající checkpoint.

## Stavy checkpointů

Každý bod může být ve třech stavech.

### Waiting

Trasa k němu ještě nedošla.

### Active

Pohybující se bod právě prochází checkpointem.

### Complete

Checkpoint již byl dokončen.

V CSS používáme třídy:

```text id="rsf2eo"
is-active
is-complete
```

Při aktivaci se zároveň spustí krátká Anime.js scale animace.

## Progress panel

Spodní část rozhraní zobrazuje stejné checkpointy jako SVG mapa.

U každého je vidět:

* Název
* Stav
* Barevný indikátor

Stav se během animace automaticky mění mezi:

```text id="o4vzhx"
WAITING
ACTIVE
COMPLETE
```

## Stav celé trasy

Horní část panelu ukazuje aktuální stav:

```text id="qgh5xn"
INITIALIZING
ROUTE ACTIVE
ROUTE COMPLETE
```

Díky tomu efekt připomíná například tracking systém, navigaci nebo futuristickou mapu.

## Gradient trasy

SVG cesta používá barevný gradient:

```text id="rryrxt"
Cyan → Purple → Pink
```

Barvy lze jednoduše upravit v `linearGradient` uvnitř `index.html`.

## Glow efekt

Záře SVG cesty vzniká pomocí blur filtru:

```html id="cfbf5p"
<filter id="routeGlow">

    <feGaussianBlur
        stdDeviation="7"
        result="blur"
    />

    <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
    </feMerge>

</filter>
```

Není potřeba žádná externí grafika.

## Rychlost trasy

Celková délka hlavní animace je:

```javascript id="v4plrb"
duration: 5200
```

Pro rychlejší pohyb například:

```javascript id="pkogfm"
duration: 2800
```

Pro pomalejší cinematic variantu:

```javascript id="ricg99"
duration: 8000
```

## Replay

Po dokončení lze kliknout na **REPLAY**.

Resetuje se:

* vykreslení SVG cesty,
* pozice světelného bodu,
* checkpointy,
* progress panel,
* stav trasy.

Animace potom začne znovu od začátku.

## Ambientní animace

Anime.js ovládá také jemné nekonečné efekty:

* Gradientový nadpis
* Pulzující stavový bod
* Pohyb světel v pozadí
* Pulzování pohybujícího se bodu
* Finální animaci checkpointu

## Přizpůsobení

Snadno lze změnit:

* Tvar SVG trasy
* Počet checkpointů
* Umístění checkpointů
* Rychlost animace
* Gradient
* Intenzitu glow
* Tloušťku cesty
* Pozadí
* Texty stavů
* Načasování

## Vlastní trasa

Stačí změnit hodnotu SVG `d`.

Například:

```html id="c81fpy"
<path
    d="
        M 50 200
        C 200 50, 400 350, 800 150
    "
/>
```

Svítící bod bude novou cestu automaticky následovat, protože JavaScript pracuje přímo s její geometrií.

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/10-AnimatedPath/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/10-AnimatedPath

## License

This project is available for educational and personal use.
