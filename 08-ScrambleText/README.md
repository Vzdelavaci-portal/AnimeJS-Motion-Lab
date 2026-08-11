# Scramble Text

## English

Scramble Text is a cyber-inspired text reveal animation built with HTML, CSS, JavaScript and Anime.js.

Instead of displaying text instantly, each message begins as a sequence of random characters. The characters rapidly change while the final message is progressively revealed from left to right.

The project combines the scramble algorithm with Anime.js animations, glitch effects, terminal styling, scanlines and ambient motion to create a futuristic system interface.

## Features

* Random character scrambling
* Progressive text reveal
* Multiple messages
* Interactive "Scramble Again" button
* Glitch animation
* Terminal-inspired interface
* Animated blinking cursor
* Scanline overlay
* Noise texture
* Neon glow effects
* Animated message counter
* Ambient background movement
* Responsive design
* Reduced motion support

## Technologies

* HTML5
* CSS3
* JavaScript
* Anime.js

## Project Structure

```text
08-ScrambleText/
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

## How It Works

The effect consists of two main parts:

1. Random character generation
2. Progressive reveal of the final message

During the animation, unrevealed characters are continuously replaced with random symbols.

As the animation progresses, more characters are replaced by their correct final values.

For example:

```text
$F#Q8? 7X@2!%
A%C#S! 9R@4?D
ACC3S$ GRA?TE%
ACCESS GRANTED
```

The result is a digital decoding effect similar to interfaces seen in terminals, sci-fi systems and cyberpunk designs.

## Random Characters

Characters are selected from this collection:

```javascript
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&!?<>/\\{}[]";
```

A random character is generated using:

```javascript
function randomCharacter() {
    return characters[
        Math.floor(
            Math.random() * characters.length
        )
    ];
}
```

You can modify the character set to completely change the visual style of the animation.

For example:

```javascript
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
```

creates a cleaner digital effect.

## Progressive Reveal

The animation uses a progress value from `0` to `1`.

```javascript
const state = {
    progress: 0
};
```

Anime.js animates this value:

```javascript
animate(state, {
    progress: 1,

    duration: 1450,
    ease: "linear"
});
```

The current progress determines how many characters of the final message should already be visible.

```javascript
const revealIndex =
    Math.floor(
        state.progress * finalText.length
    );
```

Characters before `revealIndex` display their final value.

Characters after it continue displaying random symbols.

## Messages

The available messages are stored in an array:

```javascript
const messages = [
    "ACCESS GRANTED",
    "MOTION SYSTEM ONLINE",
    "ANIME.JS READY",
    "CREATE SOMETHING BOLD",
    "WELCOME TO THE FUTURE"
];
```

You can add any number of custom messages.

For example:

```javascript
const messages = [
    "SYSTEM ONLINE",
    "HELLO WORLD",
    "INITIALIZING...",
    "CONNECTION ESTABLISHED"
];
```

The counter automatically uses the number of messages in the array.

## Glitch Effect

At the beginning of each scramble animation, the text receives the `glitch` class.

```javascript
scrambleElement.classList.add("glitch");
```

CSS creates red and cyan text offsets:

```css
.scramble-text.glitch {
    text-shadow:
        -3px 0 var(--red),
        3px 0 var(--cyan),
        0 0 18px rgba(92, 255, 141, 0.3);
}
```

Anime.js simultaneously creates a short horizontal shake.

After the scramble finishes, the glitch effect is removed.

## Blinking Cursor

The terminal cursor is animated using Anime.js:

```javascript
animate(cursor, {
    opacity: [
        {
            to: 0,
            duration: 430
        },
        {
            to: 1,
            duration: 430
        }
    ],

    loop: true,
    ease: "steps(1)"
});
```

This creates the classic terminal cursor effect.

## Scramble Again

Clicking the **SCRAMBLE AGAIN** button:

* selects the next message,
* updates the counter,
* rotates the button icon,
* triggers the glitch,
* generates random characters,
* gradually reveals the final text.

After the final message, the sequence starts again from the beginning.

## Terminal Design

The interface is inspired by futuristic terminals and includes:

* Window controls
* System status
* Command prompt
* Monospace typography
* Neon green text
* Scanlines
* Noise texture
* Background grid
* System metadata

The visual effects are intentionally separated from the actual scramble algorithm, making it easy to reuse the text effect in another design.

## Ambient Animations

Anime.js also controls subtle background motion.

These animations include:

* Moving green glow
* Moving cyan glow
* Pulsing status indicator
* Floating terminal
* Blinking cursor

These effects continue running after the main animation finishes.

## Customization

You can easily modify:

* Messages
* Random character set
* Scramble duration
* Reveal speed
* Terminal colors
* Glitch intensity
* Glow colors
* Cursor speed
* Typography
* Background grid
* Scanline opacity

## Scramble Speed

The duration is controlled here:

```javascript
duration: 1450
```

Lower values create a faster decoding effect.

For example:

```javascript
duration: 700
```

Higher values create a slower reveal:

```javascript
duration: 2500
```

## Accent Color

The primary terminal color is controlled through CSS:

```css
:root {
    --green: #5cff8d;
}
```

Changing this value can completely transform the visual style.

For example, blue:

```css
--green: #32e6ff;
```

or orange:

```css
--green: #ff9d32;
```

## Responsive Design

The project adapts to smaller screens by adjusting:

* Terminal padding
* Text size
* Cursor height
* Metadata spacing
* Controls
* Decorative elements

The main scramble text uses responsive typography:

```css
font-size: clamp(2.6rem, 7vw, 6rem);
```

## Live Demo

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/08-ScrambleText/

## Source Code

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/08-ScrambleText

---

# Scramble Text

## Česky

Scramble Text je futuristická animace odhalování textu vytvořená pomocí HTML, CSS, JavaScriptu a Anime.js.

Místo okamžitého zobrazení textu se nejprve zobrazují rychle se měnící náhodné znaky. Postupně jsou nahrazovány správnými písmeny, dokud se neodhalí celá výsledná zpráva.

Projekt kombinuje vlastní scramble algoritmus s Anime.js animacemi, glitch efektem, terminálovým designem, scanlines a ambientními animacemi.

## Funkce

* Generování náhodných znaků
* Postupné odhalování textu
* Více různých zpráv
* Interaktivní tlačítko Scramble Again
* Glitch efekt
* Terminálový design
* Blikající kurzor
* Scanlines
* Noise textura
* Neonové glow efekty
* Animované počítadlo zpráv
* Pohybující se pozadí
* Responzivní design
* Reduced Motion podpora

## Použité technologie

* HTML5
* CSS3
* JavaScript
* Anime.js

## Struktura projektu

```text
08-ScrambleText/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Lokální spuštění

Anime.js je importováno jako ES modul, proto je potřeba projekt spustit přes lokální server.

### Visual Studio Code

Nainstaluj rozšíření **Live Server** a spusť `index.html` pomocí:

```text
Open with Live Server
```

### Python

Můžeš použít také Python:

```bash
python -m http.server
```

Potom otevři:

```text
http://localhost:8000
```

## Jak efekt funguje

Animace se skládá ze dvou hlavních částí:

1. Generování náhodných znaků
2. Postupné odhalování výsledného textu

Během animace se znaky, které ještě nebyly odhaleny, neustále nahrazují náhodnými symboly.

S postupem animace se stále více znaků nahrazuje správnými hodnotami.

Například:

```text
$F#Q8? 7X@2!%
A%C#S! 9R@4?D
ACC3S$ GRA?TE%
ACCESS GRANTED
```

Výsledkem je efekt digitálního dekódování známý z terminálů, sci-fi rozhraní nebo cyberpunk designu.

## Náhodné znaky

Znaky jsou vybírány z tohoto řetězce:

```javascript
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&!?<>/\\{}[]";
```

Náhodný znak vytváří funkce:

```javascript
function randomCharacter() {
    return characters[
        Math.floor(
            Math.random() * characters.length
        )
    ];
}
```

Změnou sady znaků lze upravit charakter celé animace.

Například:

```javascript
const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
```

vytvoří čistší digitální vzhled.

## Postupné odhalování

Animace používá hodnotu `progress` od `0` do `1`.

```javascript
const state = {
    progress: 0
};
```

Anime.js tuto hodnotu postupně animuje:

```javascript
animate(state, {
    progress: 1,

    duration: 1450,
    ease: "linear"
});
```

Podle aktuální hodnoty se vypočítá počet již odhalených znaků:

```javascript
const revealIndex =
    Math.floor(
        state.progress * finalText.length
    );
```

Znaky před `revealIndex` zobrazují správný text.

Ostatní stále zobrazují náhodné symboly.

## Zprávy

Jednotlivé zprávy jsou uložené v poli:

```javascript
const messages = [
    "ACCESS GRANTED",
    "MOTION SYSTEM ONLINE",
    "ANIME.JS READY",
    "CREATE SOMETHING BOLD",
    "WELCOME TO THE FUTURE"
];
```

Můžeš přidat libovolný počet vlastních textů.

Počítadlo se automaticky přizpůsobí počtu zpráv.

## Glitch efekt

Na začátku každé animace dostane text třídu:

```javascript
scrambleElement.classList.add("glitch");
```

CSS vytvoří červený a tyrkysový posun:

```css
.scramble-text.glitch {
    text-shadow:
        -3px 0 var(--red),
        3px 0 var(--cyan),
        0 0 18px rgba(92, 255, 141, 0.3);
}
```

Anime.js zároveň vytvoří krátké horizontální škubnutí textu.

Po dokončení scramble animace se glitch efekt odstraní.

## Blikající kurzor

Anime.js ovládá také terminálový kurzor:

```javascript
animate(cursor, {
    opacity: [
        {
            to: 0,
            duration: 430
        },
        {
            to: 1,
            duration: 430
        }
    ],

    loop: true,
    ease: "steps(1)"
});
```

Výsledkem je klasický blikající terminálový kurzor.

## Scramble Again

Po kliknutí na tlačítko **SCRAMBLE AGAIN**:

* vybere se další zpráva,
* aktualizuje se počítadlo,
* otočí se ikona tlačítka,
* spustí se glitch,
* začnou se generovat náhodné znaky,
* postupně se odhalí výsledný text.

Po poslední zprávě začne sekvence znovu od začátku.

## Terminálový design

Rozhraní je inspirované futuristickými terminály a obsahuje:

* Ovládací body okna
* Stav systému
* Command prompt
* Monospace písmo
* Neonově zelený text
* Scanlines
* Noise texturu
* Mřížku na pozadí
* Systémová metadata

Vizuální část je oddělená od samotného scramble algoritmu, takže lze efekt snadno použít i v úplně jiném designu.

## Ambientní animace

Anime.js řídí také jemné animace prostředí:

* Pohyb zeleného světla
* Pohyb tyrkysového světla
* Pulzující stavový indikátor
* Jemné plování terminálu
* Blikající kurzor

## Přizpůsobení

Snadno lze změnit:

* Texty
* Sadu náhodných znaků
* Délku scramble animace
* Rychlost odhalování
* Barvy terminálu
* Intenzitu glitch efektu
* Glow efekty
* Rychlost kurzoru
* Typografii
* Mřížku pozadí
* Intenzitu scanlines

## Rychlost animace

Délku scramble efektu řídí:

```javascript
duration: 1450
```

Pro rychlejší efekt například:

```javascript
duration: 700
```

Pro pomalejší:

```javascript
duration: 2500
```

## Hlavní barva

Primární barvu terminálu nastavuje:

```css
:root {
    --green: #5cff8d;
}
```

Změnou této hodnoty lze snadno vytvořit jinou variantu designu.

Například modrou:

```css
--green: #32e6ff;
```

nebo oranžovou:

```css
--green: #ff9d32;
```

## Responzivní design

Na menších obrazovkách se automaticky upravuje:

* Padding terminálu
* Velikost textu
* Výška kurzoru
* Rozložení metadat
* Ovládací prvky
* Dekorativní prvky

Hlavní text používá responzivní velikost:

```css
font-size: clamp(2.6rem, 7vw, 6rem);
```

## Živá ukázka

https://vzdelavaci-portal.github.io/AnimeJS-Motion-Lab/08-ScrambleText/

## Zdrojový kód

https://github.com/Vzdelavaci-portal/AnimeJS-Motion-Lab/tree/main/08-ScrambleText

## License

This project is available for educational and personal use.
