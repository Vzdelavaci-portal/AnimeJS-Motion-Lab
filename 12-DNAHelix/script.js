import {
    animate
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";


/* ------------------------------
   ELEMENTS
------------------------------ */

const SVG_NS =
    "http://www.w3.org/2000/svg";

const pathA =
    document.querySelector("#pathA");

const pathB =
    document.querySelector("#pathB");

const connections =
    document.querySelector("#connections");

const nodes =
    document.querySelector("#nodes");

const pauseButton =
    document.querySelector("#pauseButton");

const speedButton =
    document.querySelector("#speedButton");

const speedButtonValue =
    speedButton.querySelector("strong");

const speedValue =
    document.querySelector("#speedValue");

const rotationElement =
    document.querySelector("#rotation");

const status =
    document.querySelector("#status");


/* ------------------------------
   CONFIG
------------------------------ */

const CENTER_X = 250;

const START_Y = 40;
const END_Y = 610;

const AMPLITUDE = 115;

const TURNS = 3;

const PAIRS = 22;

const PATH_POINTS = 180;


/* ------------------------------
   STATE
------------------------------ */

const state = {
    rotation: 0
};

let paused = false;

const speeds = [
    0.5,
    1,
    1.5,
    2
];

let speedIndex = 1;


/* ------------------------------
   STORAGE
------------------------------ */

const pairLines = [];

const dotsA = [];
const dotsB = [];


/* ------------------------------
   CREATE SVG ELEMENT
------------------------------ */

function svgElement(type) {

    return document.createElementNS(
        SVG_NS,
        type
    );
}


/* ------------------------------
   CREATE BASE PAIRS
------------------------------ */

function createDNA() {

    for (
        let i = 0;
        i < PAIRS;
        i++
    ) {

        const line =
            svgElement("line");

        line.classList.add(
            "dna-connection"
        );

        line.setAttribute(
            "stroke-width",
            "4"
        );

        connections.appendChild(
            line
        );

        pairLines.push(
            line
        );


        const dotA =
            svgElement("circle");

        dotA.classList.add(
            "dna-node"
        );

        dotA.setAttribute(
            "r",
            "7"
        );

        dotA.setAttribute(
            "fill",
            "#22d3ee"
        );

        nodes.appendChild(
            dotA
        );

        dotsA.push(
            dotA
        );


        const dotB =
            svgElement("circle");

        dotB.classList.add(
            "dna-node"
        );

        dotB.setAttribute(
            "r",
            "7"
        );

        dotB.setAttribute(
            "fill",
            "#ec4899"
        );

        nodes.appendChild(
            dotB
        );

        dotsB.push(
            dotB
        );
    }
}


/* ------------------------------
   DNA MATH
------------------------------ */

function getPoint(
    progress,
    phase
) {

    const y =
        START_Y +
        (
            END_Y -
            START_Y
        ) *
        progress;

    const angle =
        progress *
        Math.PI *
        2 *
        TURNS +
        phase;

    return {

        x:
            CENTER_X +
            Math.sin(angle) *
            AMPLITUDE,

        y,

        depth:
            Math.cos(angle)

    };
}


/* ------------------------------
   CREATE BACKBONE PATH
------------------------------ */

function buildPath(phase) {

    let d = "";

    for (
        let i = 0;
        i <= PATH_POINTS;
        i++
    ) {

        const progress =
            i /
            PATH_POINTS;

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


/* ------------------------------
   COLORS
------------------------------ */

function getPairColor(index) {

    const colors = [
        "#22d3ee",
        "#8b5cf6",
        "#ec4899",
        "#b8ff3d"
    ];

    return colors[
        index %
        colors.length
    ];
}


/* ------------------------------
   DRAW DNA
------------------------------ */

function drawDNA() {

    const phase =
        state.rotation *
        Math.PI /
        180;


    /* BACKBONES */

    pathA.setAttribute(
        "d",
        buildPath(phase)
    );

    pathB.setAttribute(
        "d",
        buildPath(
            phase +
            Math.PI
        )
    );


    /* BASE PAIRS */

    for (
        let i = 0;
        i < PAIRS;
        i++
    ) {

        const progress =
            i /
            (
                PAIRS - 1
            );

        const a =
            getPoint(
                progress,
                phase
            );

        const b =
            getPoint(
                progress,
                phase +
                Math.PI
            );


        const line =
            pairLines[i];


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


        line.setAttribute(
            "stroke",
            getPairColor(i)
        );


        /*
         * When the pair is facing us,
         * it becomes brighter.
         */

        const front =
            (
                a.depth + 1
            ) /
            2;

        line.setAttribute(
            "opacity",
            0.2 +
            front * 0.65
        );


        /* NODE A */

        dotsA[i].setAttribute(
            "cx",
            a.x
        );

        dotsA[i].setAttribute(
            "cy",
            a.y
        );


        /* NODE B */

        dotsB[i].setAttribute(
            "cx",
            b.x
        );

        dotsB[i].setAttribute(
            "cy",
            b.y
        );


        /*
         * Fake 3D depth using radius.
         */

        const radiusA =
            4 +
            (
                (
                    a.depth + 1
                ) /
                2
            ) *
            7;

        const radiusB =
            4 +
            (
                (
                    b.depth + 1
                ) /
                2
            ) *
            7;


        dotsA[i].setAttribute(
            "r",
            radiusA
        );

        dotsB[i].setAttribute(
            "r",
            radiusB
        );


        dotsA[i].setAttribute(
            "opacity",
            0.35 +
            (
                (
                    a.depth + 1
                ) /
                2
            ) *
            0.65
        );


        dotsB[i].setAttribute(
            "opacity",
            0.35 +
            (
                (
                    b.depth + 1
                ) /
                2
            ) *
            0.65
        );
    }


    /* UI */

    let degrees =
        Math.round(
            state.rotation
        ) %
        360;

    if (degrees < 0) {
        degrees += 360;
    }

    rotationElement.textContent =
        String(degrees)
            .padStart(
                3,
                "0"
            ) +
        "°";
}


/* ------------------------------
   ANIMATION
------------------------------ */

const animationState = {
    progress: 0
};

animate(
    animationState,
    {

        progress: 360,

        duration: 7000,

        loop: true,

        ease: "linear",

        onUpdate: () => {

            if (paused) {
                return;
            }

            state.rotation =
                animationState.progress *
                speeds[speedIndex];

            drawDNA();
        }
    }
);


/* ------------------------------
   PAUSE
------------------------------ */

pauseButton.addEventListener(
    "click",
    () => {

        paused =
            !paused;

        if (paused) {

            pauseButton.textContent =
                "RESUME";

            status.textContent =
                "PAUSED";

            status.style.color =
                "#ec4899";

        } else {

            pauseButton.textContent =
                "PAUSE";

            status.textContent =
                "ACTIVE";

            status.style.color =
                "#b8ff3d";
        }
    }
);


/* ------------------------------
   SPEED
------------------------------ */

speedButton.addEventListener(
    "click",
    () => {

        speedIndex =
            (
                speedIndex + 1
            ) %
            speeds.length;

        const speed =
            speeds[speedIndex];

        speedButtonValue.textContent =
            speed + "×";

        speedValue.textContent =
            speed.toFixed(1) +
            "×";
    }
);


/* ------------------------------
   AMBIENT ANIMATIONS
------------------------------ */

animate(
    ".series span",
    {

        scale: [
            {
                to: 1.5
            },
            {
                to: 1
            }
        ],

        opacity: [
            {
                to: 0.4
            },
            {
                to: 1
            }
        ],

        duration: 1600,

        loop: true,

        ease: "inOutSine"
    }
);


animate(
    "h1 span",
    {

        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%"
            },
            {
                to: "0% 50%"
            }
        ],

        duration: 7000,

        loop: true,

        ease: "inOutSine"
    }
);


/* ------------------------------
   INITIAL DRAW
------------------------------ */

createDNA();

/*
 * Important:
 * DNA is drawn immediately.
 * It therefore remains visible even
 * before Anime.js performs an update.
 */

drawDNA();