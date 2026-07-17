import {
    animate
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const controlButton = document.querySelector(".control-button");
const controlIcon = document.querySelector(".control-icon");
const controlText = document.querySelector(".control-text");

const statusText = document.querySelector(".status-text");
const statusIndicator = document.querySelector(".status-indicator");

const messages = [
    "Web animations feel alive",
    "Motion creates emotion",
    "Anime.js makes it smooth",
    "Code. Animate. Inspire."
];

let isPaused = false;
let animationCycle = 0;

let activeAnimation = null;
let activeDelay = null;

function wait(duration) {
    return new Promise((resolve) => {
        const timerState = {
            progress: 0
        };

        activeDelay = animate(timerState, {
            progress: 1,
            duration,
            ease: "linear",
            onComplete: resolve
        });

        if (isPaused) {
            activeDelay.pause();
        }
    });
}

function animateText(text, direction = "write") {
    return new Promise((resolve) => {
        const isWriting = direction === "write";

        const textState = {
            characters: isWriting ? 0 : text.length
        };

        const targetValue = isWriting ? text.length : 0;

        activeAnimation = animate(textState, {
            characters: targetValue,

            duration: isWriting
                ? text.length * 72
                : text.length * 34,

            ease: "linear",

            onUpdate: () => {
                const visibleCharacters = Math.round(
                    textState.characters
                );

                typedText.textContent = text.slice(
                    0,
                    visibleCharacters
                );
            },

            onComplete: () => {
                typedText.textContent = isWriting
                    ? text
                    : "";

                resolve();
            }
        });

        if (isPaused) {
            activeAnimation.pause();
        }
    });
}

function updateStatus(text, state = "active") {
    statusText.textContent = text;

    statusIndicator.dataset.state = state;

    if (state === "paused") {
        statusIndicator.style.background = "#ffd166";
        statusIndicator.style.boxShadow =
            "0 0 12px #ffd166";
    } else {
        statusIndicator.style.background = "#58e39b";
        statusIndicator.style.boxShadow =
            "0 0 12px #58e39b";
    }
}

async function runTypewriter() {
    const currentCycle = ++animationCycle;

    while (currentCycle === animationCycle) {
        for (const message of messages) {
            if (currentCycle !== animationCycle) {
                return;
            }

            updateStatus("Writing message");

            await animateText(message, "write");
            await wait(1500);

            updateStatus("Deleting message");

            await animateText(message, "delete");
            await wait(420);
        }
    }
}

function toggleAnimation() {
    isPaused = !isPaused;

    if (isPaused) {
        activeAnimation?.pause();
        activeDelay?.pause();

        controlIcon.textContent = "▶";
        controlText.textContent = "Play";

        controlButton.setAttribute(
            "aria-label",
            "Resume animation"
        );

        updateStatus("Animation paused", "paused");
    } else {
        activeAnimation?.play();
        activeDelay?.play();

        controlIcon.textContent = "Ⅱ";
        controlText.textContent = "Pause";

        controlButton.setAttribute(
            "aria-label",
            "Pause animation"
        );

        updateStatus("Typing animation active");
    }

    animate(controlButton, {
        scale: [
            {
                to: 0.92,
                duration: 90
            },
            {
                to: 1,
                duration: 260
            }
        ],

        ease: "outBack"
    });
}

function playIntro() {
    animate(".series-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 18
        },

        duration: 700,
        ease: "outExpo"
    });

    animate(".terminal", {
        opacity: {
            from: 0
        },

        y: {
            from: 45
        },

        scale: {
            from: 0.94
        },

        duration: 1100,
        delay: 120,
        ease: "outExpo"
    });

    animate(".project-info", {
        opacity: {
            from: 0
        },

        y: {
            from: 30
        },

        duration: 900,
        delay: 420,
        ease: "outExpo"
    });

    animate(".floating-symbol", {
        opacity: {
            from: 0
        },

        scale: {
            from: 0.4
        },

        duration: 900,
        delay: (_, index) => 500 + index * 170,
        ease: "outBack"
    });
}

function animateBackground() {
    animate(".symbol-one", {
        y: [
            {
                to: -18,
                duration: 2400
            },
            {
                to: 18,
                duration: 2400
            }
        ],

        rotate: [
            {
                to: -8,
                duration: 2400
            },
            {
                to: 8,
                duration: 2400
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".symbol-two", {
        y: [
            {
                to: 16,
                duration: 2800
            },
            {
                to: -16,
                duration: 2800
            }
        ],

        rotate: [
            {
                to: 7,
                duration: 2800
            },
            {
                to: -7,
                duration: 2800
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".symbol-three", {
        y: [
            {
                to: -14,
                duration: 2600
            },
            {
                to: 14,
                duration: 2600
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-one", {
        x: [
            {
                to: 130,
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
                to: -110,
                duration: 8500
            },
            {
                to: 40,
                duration: 8500
            }
        ],

        y: [
            {
                to: -80,
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

    animate(".series-dot", {
        scale: [
            {
                to: 1.45,
                duration: 850
            },
            {
                to: 1,
                duration: 850
            }
        ],

        opacity: [
            {
                to: 0.55,
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
}

controlButton.addEventListener("click", toggleAnimation);

playIntro();
animateBackground();

setTimeout(() => {
    runTypewriter();
}, 850);