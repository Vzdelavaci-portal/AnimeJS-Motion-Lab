# DNA Helix

## English

DNA Helix is an animated double-helix visualization built with **HTML, CSS, JavaScript, SVG and Anime.js**.

The project generates the DNA structure dynamically using JavaScript. Two continuous SVG backbones form the double helix, while individual base pairs connect both strands.

Anime.js controls the rotation while JavaScript recalculates the SVG geometry in real time.

The result is a futuristic DNA visualization with simulated depth, glowing strands, animated base pairs and interactive speed controls.

---

## Features

- Animated DNA double helix
- Two continuous DNA backbones
- Dynamically generated SVG paths
- 22 base pairs
- Real-time SVG calculations
- Simulated 3D depth
- Dynamic node sizes
- Depth-based opacity
- Neon glow effects
- Animated rotation
- Pause / Resume control
- Multiple animation speeds
- Rotation indicator
- Responsive layout
- Futuristic interface
- Anime.js powered motion

---

## Technologies

- HTML5
- CSS3
- JavaScript
- SVG
- Anime.js

---

## Project Structure

```text
12-DNAHelix/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Run Locally

Anime.js is imported as an ES module, so the project should be opened through a local development server.

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

You can also start a local server with:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000
```

---

# How It Works

The DNA visualization is generated entirely with SVG and JavaScript.

The HTML contains two SVG paths:

```html
<path
    id="pathA"
    class="backbone"
/>

<path
    id="pathB"
    class="backbone"
/>
```

These paths represent the two main DNA backbones.

JavaScript continuously calculates their positions and updates their SVG `d` attributes.

---

## DNA Geometry

The helix is based on a sine wave.

Each point is calculated using:

```javascript
const angle =
    progress *
    Math.PI *
    2 *
    TURNS +
    phase;
```

The horizontal position is then calculated using:

```javascript
const x =
    CENTER_X +
    Math.sin(angle) *
    AMPLITUDE;
```

The vertical position depends on the progress through the DNA structure:

```javascript
const y =
    START_Y +
    (END_Y - START_Y) *
    progress;
```

Together, these calculations create a wave-shaped DNA strand.

---

## Double Helix

The second strand uses the same mathematical function but receives an additional phase offset:

```javascript
phase + Math.PI
```

Because `Math.PI` represents half of a full rotation, the second strand appears on the opposite side.

The result is a double helix:

```text
╲          ╱
 ╲────────╱
  ╲      ╱
   ╲    ╱
    ╲  ╱
     ╳
    ╱  ╲
   ╱    ╲
  ╱      ╲
 ╱────────╲
╱          ╲
```

---

## Building the SVG Paths

The project calculates many individual points along each DNA strand.

```javascript
const PATH_POINTS = 180;
```

These points are converted into an SVG path:

```javascript
function buildPath(phase) {

    let d = "";

    for (
        let i = 0;
        i <= PATH_POINTS;
        i++
    ) {

        const progress =
            i / PATH_POINTS;

        const point =
            getPoint(
                progress,
                phase
            );

        if (i === 0) {

            d =
                `M ${point.x} ${point.y}`;

        } else {

            d +=
                ` L ${point.x} ${point.y}`;
        }
    }

    return d;
}
```

The path is regenerated during the animation, producing the rotating helix effect.

---

## Base Pairs

The DNA contains:

```javascript
const PAIRS = 22;
```

Each base pair is represented by an SVG line connecting both strands.

```javascript
line.setAttribute(
    "x1",
    a.x
);

line.setAttribute(
    "y1",
    a.y
);

line.setAttribute(
    "x2",
    b.x
);

line.setAttribute(
    "y2",
    b.y
);
```

As the DNA rotates, these connections move together with both backbones.

---

## Base Pair Colors

The connections use several colors:

```javascript
const colors = [
    "#22d3ee",
    "#8b5cf6",
    "#ec4899",
    "#b8ff3d"
];
```

The colors repeat along the DNA structure to create a more dynamic genetic visualization.

---

## Simulated 3D Depth

The project does not use WebGL or a real 3D engine.

Instead, depth is simulated mathematically.

For each point:

```javascript
depth:
    Math.cos(angle)
```

The value ranges approximately between:

```text
-1 → back
 0 → center
+1 → front
```

This value controls several visual properties.

---

## Dynamic Node Size

Nodes closer to the viewer become larger:

```javascript
const radiusA =
    4 +
    (
        (a.depth + 1) /
        2
    ) *
    7;
```

Points moving toward the back become smaller.

This creates the illusion that the DNA is rotating in three-dimensional space.

---

## Dynamic Opacity

Depth also controls opacity.

```javascript
dotsA[i].setAttribute(
    "opacity",
    0.35 +
    (
        (a.depth + 1) /
        2
    ) *
    0.65
);
```

Front-facing parts of the DNA become brighter while rear sections become darker.

This strengthens the 3D illusion.

---

## SVG Glow

The neon appearance is created with an SVG filter:

```html
<filter
    id="glow"
    x="-100%"
    y="-100%"
    width="300%"
    height="300%"
>

    <feGaussianBlur
        stdDeviation="4"
        result="blur"
    />

    <feMerge>

        <feMergeNode
            in="blur"
        />

        <feMergeNode
            in="SourceGraphic"
        />

    </feMerge>

</filter>
```

The filter creates a blurred copy of the element and combines it with the original.

This produces the glowing neon effect.

---

# Anime.js Animation

Anime.js controls the main rotation state.

```javascript
const animationState = {
    progress: 0
};
```

The value is animated from:

```text
0 → 360
```

using:

```javascript
animate(
    animationState,
    {

        progress: 360,

        duration: 7000,

        loop: true,

        ease: "linear",

        onUpdate: () => {

            state.rotation =
                animationState.progress *
                speeds[speedIndex];

            drawDNA();
        }
    }
);
```

During every update, the DNA geometry is recalculated.

---

## Rotation

The current rotation is displayed in the interface:

```text
000°
090°
180°
270°
359°
```

The value is updated automatically while the DNA rotates.

---

## Pause / Resume

The visualization can be paused using the:

```text
PAUSE
```

button.

When paused, the interface changes to:

```text
PAUSED
```

Pressing the button again changes it to:

```text
RESUME → ACTIVE
```

and the DNA continues rotating.

---

## Speed Control

The **SPEED** button cycles between several animation speeds:

```javascript
const speeds = [
    0.5,
    1,
    1.5,
    2
];
```

Available modes:

```text
0.5×
1.0×
1.5×
2.0×
```

The current value is displayed directly in the interface.

---

## Customization

You can easily modify the DNA visualization.

### Number of Base Pairs

```javascript
const PAIRS = 22;
```

For example:

```javascript
const PAIRS = 30;
```

---

### Number of Turns

```javascript
const TURNS = 3;
```

More turns:

```javascript
const TURNS = 4;
```

---

### Helix Width

The width of the DNA is controlled by:

```javascript
const AMPLITUDE = 115;
```

Narrower DNA:

```javascript
const AMPLITUDE = 80;
```

Wider DNA:

```javascript
const AMPLITUDE = 140;
```

---

### Animation Speed

The default rotation duration is:

```javascript
duration: 7000
```

Faster:

```javascript
duration: 4000
```

Slower:

```javascript
duration: 10000
```

---

### DNA Colors

The strand colors are defined using SVG gradients.

For example:

```html
<stop
    offset="0%"
    stop-color="#22d3ee"
/>
```

You can replace the colors to create completely different DNA themes.

---

## What This Project Demonstrates

This project demonstrates how Anime.js can be combined with mathematical functions and SVG.

Instead of simply moving existing HTML elements, Anime.js controls a numeric animation state.

That state is then used by JavaScript to generate an entire animated SVG structure in real time.

The project combines:

```text
Anime.js
   ↓
Animation state
   ↓
JavaScript calculations
   ↓
Sine / cosine functions
   ↓
SVG coordinates
   ↓
Animated DNA double helix
```

---

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/12-DNAHelix/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/12-DNAHelix

---

# DNA Helix

## Česky

DNA Helix je animovaná vizualizace dvojité šroubovice vytvořená pomocí **HTML, CSS, JavaScriptu, SVG a Anime.js**.

Struktura DNA je generována dynamicky pomocí JavaScriptu. Dvě SVG křivky tvoří hlavní páteře DNA a mezi nimi jsou vytvořené jednotlivé páry bází.

Anime.js řídí průběh rotace a JavaScript během animace přepočítává celou geometrii SVG.

Výsledkem je futuristická DNA vizualizace se simulovanou hloubkou, neonovým efektem a interaktivním ovládáním.

---

## Funkce

- Animovaná dvojitá šroubovice DNA
- Dvě souvislé páteře
- Dynamicky generované SVG
- 22 párů bází
- Výpočty SVG v reálném čase
- Simulace 3D hloubky
- Dynamická velikost bodů
- Opacity podle hloubky
- Neonové glow efekty
- Plynulá rotace
- Pause / Resume
- Několik rychlostí
- Ukazatel rotace
- Responzivní design
- Futuristické UI
- Animace pomocí Anime.js

---

## Použité technologie

- HTML5
- CSS3
- JavaScript
- SVG
- Anime.js

---

## Struktura projektu

```text
12-DNAHelix/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Jak DNA funguje

Základem jsou dvě SVG křivky:

```html
<path id="pathA" />
<path id="pathB" />
```

Jejich souřadnice nejsou pevně definované.

JavaScript je vypočítává pomocí matematických funkcí.

---

## Výpočet šroubovice

Hlavní část výpočtu používá sinus:

```javascript
const x =
    CENTER_X +
    Math.sin(angle) *
    AMPLITUDE;
```

Vertikální pozice je určena podle aktuálního místa ve struktuře:

```javascript
const y =
    START_Y +
    (END_Y - START_Y) *
    progress;
```

Tím vznikne první vlnící se páteř.

---

## Druhá páteř

Druhá část DNA používá stejný výpočet, ale s posunem:

```javascript
phase + Math.PI
```

Obě křivky se proto nacházejí proti sobě a vytvářejí typickou strukturu dvojité šroubovice.

---

## Páry bází

Projekt používá:

```javascript
const PAIRS = 22;
```

Každý pár je SVG čára spojující obě páteře.

Při rotaci DNA se automaticky mění také pozice všech těchto spojení.

---

## Simulace 3D

Projekt nepoužívá Three.js ani WebGL.

Hloubka je vypočítána pomocí:

```javascript
Math.cos(angle)
```

Část DNA směřující k uživateli je:

- větší,
- jasnější,
- výraznější.

Část směřující dozadu je:

- menší,
- tmavší,
- méně výrazná.

Díky tomu vzniká dojem prostorové rotace.

---

## Anime.js

Anime.js animuje číselnou hodnotu:

```text
0 → 360
```

Během každého kroku animace se zavolá:

```javascript
drawDNA();
```

Tato funkce znovu vypočítá:

- obě DNA páteře,
- pozice párů bází,
- pozice bodů,
- jejich velikost,
- opacity,
- aktuální rotaci.

---

## Ovládání

DNA obsahuje dvě hlavní možnosti ovládání.

### Pause / Resume

```text
PAUSE
RESUME
```

Animaci lze kdykoliv zastavit a znovu spustit.

### Speed

Rychlost lze přepínat mezi:

```text
0.5×
1.0×
1.5×
2.0×
```

---

## Úpravy

Projekt lze snadno přizpůsobit změnou několika hodnot.

### Počet párů

```javascript
const PAIRS = 22;
```

### Počet otočení

```javascript
const TURNS = 3;
```

### Šířka DNA

```javascript
const AMPLITUDE = 115;
```

### Rychlost

```javascript
duration: 7000
```

### Barvy

Barvy jednotlivých vláken lze změnit přímo v SVG gradientech.

---

## Co projekt ukazuje

DNA Helix není pouze animace několika HTML elementů.

Ukazuje kombinaci:

```text
Anime.js
   ↓
Animovaná hodnota
   ↓
JavaScript
   ↓
Matematické funkce
   ↓
SVG souřadnice
   ↓
Dynamická DNA struktura
```

Anime.js tedy řídí časování a JavaScript na jeho základě generuje samotnou vizualizaci.

---

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/12-DNAHelix/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/12-DNAHelix

---

## License

This project is available for educational and personal use.
