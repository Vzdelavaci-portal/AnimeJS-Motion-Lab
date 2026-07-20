import {
    animate,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const trailContainer =
    document.querySelector(".cursor-trail");

const customCursor =
    document.querySelector(".custom-cursor");

const particleCountElement =
    document.querySelector("#particleCount");

const cursorSpeedElement =
    document.querySelector("#cursorSpeed");

const particlePool = [];

const maximumParticles = 42;

const colors = [
    "#9c6cff",
    "#6f7dff",
    "#38bdf8",
    "#42f5d7",
    "#ff5ca8",
    "#c084fc"
];

let particleIndex = 0;
let activeParticles = 0;

let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;
let lastTime = performance.now();

let lastParticleX = lastX;
let lastParticleY = lastY;

let currentCursorX = lastX;
let currentCursorY = lastY;

function createParticlePool() {
    for (
        let index = 0;
        index < maximumParticles;
        index++
    ) {
        const particle =
            document.createElement("span");

        particle.className = "trail-particle";

        trailContainer.appendChild(particle);
        particlePool.push(particle);
    }
}

function getDistance(x1, y1, x2, y2) {
    return Math.hypot(
        x2 - x1,
        y2 - y1
    );
}

function getCursorSpeed(x, y, currentTime) {
    const distance = getDistance(
        lastX,
        lastY,
        x,
        y
    );

    const elapsedTime = Math.max(
        currentTime - lastTime,
        1
    );

    return Math.min(
        Math.round((distance / elapsedTime) * 100),
        99
    );
}

function updateStatistics(speed) {
    particleCountElement.textContent =
        String(activeParticles).padStart(2, "0");

    cursorSpeedElement.textContent =
        String(speed).padStart(2, "0");
}

function createTrailParticle(
    x,
    y,
    speed,
    pointerType = "mouse"
) {
    const particle =
        particlePool[particleIndex];

    particleIndex =
        (particleIndex + 1) % maximumParticles;

    const color =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];

    const speedMultiplier =
        Math.min(speed / 30, 1.5);

    const baseSize =
        pointerType === "touch" ? 20 : 13;

    const size =
        baseSize +
        Math.random() * 8 +
        speedMultiplier * 9;

    const offsetX =
        (Math.random() - 0.5) *
        (8 + speedMultiplier * 10);

    const offsetY =
        (Math.random() - 0.5) *
        (8 + speedMultiplier * 10);

    const travelX =
        (Math.random() - 0.5) *
        (35 + speedMultiplier * 28);

    const travelY =
        (Math.random() - 0.5) *
        (35 + speedMultiplier * 28);

    particle.style.left = `${x + offsetX}px`;
    particle.style.top = `${y + offsetY}px`;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.background = color;

    particle.style.boxShadow = `
        0 0 ${size}px ${color},
        0 0 ${size * 2}px ${color}
    `;

    activeParticles = Math.min(
        activeParticles + 1,
        maximumParticles
    );

    updateStatistics(speed);

    animate(particle, {
        opacity: [
            {
                from: 0,
                to: 0.95,
                duration: 80
            },
            {
                to: 0,
                duration: 650
            }
        ],

        scale: [
            {
                from: 0.15,
                to: 1,
                duration: 120
            },
            {
                to: 0,
                duration: 650
            }
        ],

        x: travelX,
        y: travelY,

        rotate: Math.random() * 180 - 90,

        duration:
            620 + Math.random() * 250,

        ease: "outExpo",

        onComplete: () => {
            particle.style.opacity = "0";

            activeParticles = Math.max(
                activeParticles - 1,
                0
            );

            updateStatistics(0);
        }
    });
}

function createParticlesBetweenPoints(
    startX,
    startY,
    endX,
    endY,
    speed,
    pointerType
) {
    const distance = getDistance(
        startX,
        startY,
        endX,
        endY
    );

    const spacing =
        pointerType === "touch" ? 10 : 7;

    const steps = Math.max(
        Math.floor(distance / spacing),
        1
    );

    for (
        let step = 1;
        step <= steps;
        step++
    ) {
        const progress = step / steps;

        const x =
            startX +
            (endX - startX) * progress;

        const y =
            startY +
            (endY - startY) * progress;

        createTrailParticle(
            x,
            y,
            speed,
            pointerType
        );
    }
}

function moveCustomCursor(x, y) {
    currentCursorX = x;
    currentCursorY = y;

    animate(customCursor, {
        x,
        y,
        opacity: 1,
        scale: 1,

        duration: 260,
        ease: "outExpo"
    });
}

function handlePointerMove(event) {
    const currentTime =
        performance.now();

    const x = event.clientX;
    const y = event.clientY;

    const speed = getCursorSpeed(
        x,
        y,
        currentTime
    );

    const distanceFromLastParticle =
        getDistance(
            lastParticleX,
            lastParticleY,
            x,
            y
        );

    if (distanceFromLastParticle > 4) {
        createParticlesBetweenPoints(
            lastParticleX,
            lastParticleY,
            x,
            y,
            speed,
            event.pointerType
        );

        lastParticleX = x;
        lastParticleY = y;
    }

    if (event.pointerType === "mouse") {
        moveCustomCursor(x, y);
    }

    lastX = x;
    lastY = y;
    lastTime = currentTime;

    updateStatistics(speed);
}

function handlePointerDown(event) {
    const burstCount = 14;

    for (
        let index = 0;
        index < burstCount;
        index++
    ) {
        setTimeout(() => {
            createTrailParticle(
                event.clientX,
                event.clientY,
                40,
                event.pointerType
            );
        }, index * 18);
    }

    if (event.pointerType === "mouse") {
        animate(customCursor, {
            scale: [
                {
                    to: 0.65,
                    duration: 100
                },
                {
                    to: 1.25,
                    duration: 180
                },
                {
                    to: 1,
                    duration: 260
                }
            ],

            duration: 540,
            ease: "outBack"
        });
    }
}

function handlePointerLeave() {
    animate(customCursor, {
        opacity: 0,
        scale: 0.6,

        duration: 250,
        ease: "outQuad"
    });
}

function playIntroAnimation() {
    animate(".series-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        duration: 700,
        ease: "outExpo"
    });

    animate(".project-number", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        duration: 700,
        delay: 150,
        ease: "outExpo"
    });

    animate("h1", {
        opacity: {
            from: 0
        },

        y: {
            from: 50
        },

        scale: {
            from: 0.9
        },

        duration: 1050,
        delay: 220,
        ease: "outExpo"
    });

    animate(".description", {
        opacity: {
            from: 0
        },

        y: {
            from: 30
        },

        duration: 850,
        delay: 420,
        ease: "outExpo"
    });

    animate(".interaction-hint", {
        opacity: {
            from: 0
        },

        scale: {
            from: 0.75
        },

        duration: 750,
        delay: 560,
        ease: "outBack"
    });

    animate(".stat", {
        opacity: {
            from: 0
        },

        y: {
            from: 22
        },

        delay: stagger(
            100,
            {
                start: 680
            }
        ),

        duration: 700,
        ease: "outExpo"
    });

    animate(".corner-label", {
        opacity: {
            from: 0
        },

        duration: 900,
        delay: 900,
        ease: "outExpo"
    });
}

function animateBackground() {
    animate(".glow-one", {
        x: [
            {
                to: 150,
                duration: 7000
            },
            {
                to: -30,
                duration: 7000
            }
        ],

        y: [
            {
                to: 90,
                duration: 7000
            },
            {
                to: -30,
                duration: 7000
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-two", {
        x: [
            {
                to: -140,
                duration: 8500
            },
            {
                to: 40,
                duration: 8500
            }
        ],

        y: [
            {
                to: -100,
                duration: 8500
            },
            {
                to: 50,
                duration: 8500
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-three", {
        x: [
            {
                to: 100,
                duration: 6000
            },
            {
                to: -100,
                duration: 6000
            }
        ],

        y: [
            {
                to: -60,
                duration: 6000
            },
            {
                to: 60,
                duration: 6000
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate("h1 span", {
        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%",
                duration: 3500
            },
            {
                to: "0% 50%",
                duration: 3500
            }
        ],

        loop: true,
        ease: "inOutSine"
    });

    animate(".series-dot", {
        scale: [
            {
                to: 1.5,
                duration: 850
            },
            {
                to: 1,
                duration: 850
            }
        ],

        opacity: [
            {
                to: 0.5,
                duration: 850
            },
            {
                to: 1,
                duration: 850
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".mouse-wheel", {
        y: [
            {
                to: 7,
                duration: 650
            },
            {
                to: 0,
                duration: 650
            }
        ],

        opacity: [
            {
                to: 0.2,
                duration: 650
            },
            {
                to: 1,
                duration: 650
            }
        ],

        loop: true,
        ease: "inOutSine"
    });
}

createParticlePool();

window.addEventListener(
    "pointermove",
    handlePointerMove
);

window.addEventListener(
    "pointerdown",
    handlePointerDown
);

document.documentElement.addEventListener(
    "mouseleave",
    handlePointerLeave
);

playIntroAnimation();
animateBackground();