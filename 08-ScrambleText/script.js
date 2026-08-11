import {
    animate,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const scrambleElement =
    document.querySelector(".scramble-text");

const nextButton =
    document.querySelector(".next-button");

const counterCurrent =
    document.querySelector(".counter-current");

const counterTotal =
    document.querySelector(".counter-total");

const cursor =
    document.querySelector(".cursor");

const messages = [
    "ACCESS GRANTED",
    "MOTION SYSTEM ONLINE",
    "ANIME.JS READY",
    "CREATE SOMETHING BOLD",
    "WELCOME TO THE FUTURE"
];

const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&!?<>/\\{}[]";

let currentMessageIndex = 0;
let isAnimating = false;

counterTotal.textContent =
    String(messages.length).padStart(2, "0");

function randomCharacter() {
    return characters[
        Math.floor(
            Math.random() * characters.length
        )
    ];
}

function scrambleToText(finalText) {
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    const state = {
        progress: 0
    };

    scrambleElement.classList.add("glitch");

    animate(scrambleElement, {
        x: [
            {
                to: -4,
                duration: 50
            },
            {
                to: 5,
                duration: 50
            },
            {
                to: -2,
                duration: 50
            },
            {
                to: 0,
                duration: 80
            }
        ],

        opacity: [
            {
                to: 0.75,
                duration: 60
            },
            {
                to: 1,
                duration: 130
            }
        ],

        duration: 230,

        ease: "linear"
    });

    animate(state, {
        progress: 1,

        duration: 1450,
        ease: "linear",

        onUpdate: () => {
            const revealIndex =
                Math.floor(
                    state.progress * finalText.length
                );

            let output = "";

            for (
                let index = 0;
                index < finalText.length;
                index++
            ) {
                const finalCharacter =
                    finalText[index];

                if (finalCharacter === " ") {
                    output += " ";
                    continue;
                }

                if (index < revealIndex) {
                    output += finalCharacter;
                } else {
                    output += randomCharacter();
                }
            }

            scrambleElement.textContent = output;
        },

        onComplete: () => {
            scrambleElement.textContent = finalText;

            scrambleElement.classList.remove("glitch");

            animate(scrambleElement, {
                filter: [
                    {
                        from: "blur(2px)",
                        to: "blur(0px)"
                    }
                ],

                scale: [
                    {
                        from: 1.03,
                        to: 1
                    }
                ],

                duration: 380,
                ease: "outExpo",

                onComplete: () => {
                    isAnimating = false;
                }
            });
        }
    });
}

function showNextMessage() {
    if (isAnimating) {
        return;
    }

    currentMessageIndex =
        (currentMessageIndex + 1) %
        messages.length;

    counterCurrent.textContent =
        String(currentMessageIndex + 1)
            .padStart(2, "0");

    animate(nextButton, {
        scale: [
            {
                to: 0.92,
                duration: 90
            },
            {
                to: 1.08,
                duration: 160
            },
            {
                to: 1,
                duration: 230
            }
        ],

        ease: "outBack"
    });

    animate(".button-arrow", {
        rotate: [
            {
                to: 180,
                duration: 220
            },
            {
                to: 360,
                duration: 280
            }
        ],

        ease: "outExpo"
    });

    scrambleToText(
        messages[currentMessageIndex]
    );
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

    animate(".project-number", {
        opacity: {
            from: 0
        },

        y: {
            from: 18
        },

        duration: 700,
        delay: 100,
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

        duration: 1000,
        delay: 180,
        ease: "outExpo"
    });

    animate(".system-line", {
        opacity: {
            from: 0
        },

        x: {
            from: -18
        },

        duration: 650,
        delay: 420,
        ease: "outExpo"
    });

    animate(".terminal-meta span", {
        opacity: {
            from: 0
        },

        y: {
            from: 10
        },

        delay: stagger(
            70,
            {
                start: 700
            }
        ),

        duration: 500,
        ease: "outExpo"
    });

    animate(".controls", {
        opacity: {
            from: 0
        },

        y: {
            from: 18
        },

        duration: 650,
        delay: 850,
        ease: "outExpo"
    });

    animate(".footer-text", {
        opacity: {
            from: 0
        },

        duration: 650,
        delay: 980,
        ease: "outExpo"
    });

    setTimeout(() => {
        scrambleToText(
            messages[currentMessageIndex]
        );
    }, 620);
}

function startAmbientAnimations() {
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
                to: 1.5,
                duration: 800
            },
            {
                to: 1,
                duration: 800
            }
        ],

        opacity: [
            {
                to: 0.45,
                duration: 800
            },
            {
                to: 1,
                duration: 800
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
                duration: 7200
            },
            {
                to: -30,
                duration: 7200
            }
        ],

        y: [
            {
                to: 90,
                duration: 7200
            },
            {
                to: -30,
                duration: 7200
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-two", {
        x: [
            {
                to: -120,
                duration: 8400
            },
            {
                to: 40,
                duration: 8400
            }
        ],

        y: [
            {
                to: -90,
                duration: 8400
            },
            {
                to: 40,
                duration: 8400
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".terminal", {
        y: [
            {
                to: -4,
                duration: 2200
            },
            {
                to: 4,
                duration: 2200
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });
}

nextButton.addEventListener(
    "click",
    showNextMessage
);

playIntro();
startAmbientAnimations();