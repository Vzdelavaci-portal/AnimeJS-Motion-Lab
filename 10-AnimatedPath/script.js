import {
    animate,
    createTimeline,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const routePath =
    document.querySelector(".route-path");

const movingPulse =
    document.querySelector(".moving-pulse");

const checkpoints =
    [...document.querySelectorAll(".checkpoint")];

const progressItems =
    [...document.querySelectorAll(".progress-item")];

const replayButton =
    document.querySelector(".replay-button");

const routeState =
    document.querySelector(".route-state");

const routeLength =
    routePath.getTotalLength();

const checkpointProgress = [
    0,
    0.25,
    0.55,
    0.82,
    1
];

let routeAnimation = null;
let currentStep = 0;
let isPlaying = false;

routePath.style.strokeDasharray =
    `${routeLength}`;

routePath.style.strokeDashoffset =
    `${routeLength}`;

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

function positionPulse(progress) {
    const point =
        pointOnPath(progress);

    movingPulse.setAttribute(
        "transform",
        `translate(${point.x} ${point.y})`
    );
}

function resetProgressUI() {
    currentStep = 0;

    checkpoints.forEach((checkpoint) => {
        checkpoint.classList.remove(
            "is-complete",
            "is-active"
        );
    });

    progressItems.forEach(
        (item, index) => {
            item.classList.remove(
                "active",
                "complete"
            );

            const status =
                item.querySelector("small");

            status.textContent =
                index === 0
                    ? "ACTIVE"
                    : "WAITING";
        }
    );

    checkpoints[0].classList.add(
        "is-active"
    );

    progressItems[0].classList.add(
        "active"
    );
}

function setActiveStep(step) {
    if (
        step < 0 ||
        step >= checkpoints.length
    ) {
        return;
    }

    currentStep = step;

    checkpoints.forEach(
        (checkpoint, index) => {
            checkpoint.classList.remove(
                "is-active"
            );

            if (index < step) {
                checkpoint.classList.add(
                    "is-complete"
                );
            }
        }
    );

    checkpoints[step].classList.add(
        "is-active"
    );

    progressItems.forEach(
        (item, index) => {
            item.classList.remove(
                "active"
            );

            const status =
                item.querySelector("small");

            if (index < step) {
                item.classList.add(
                    "complete"
                );

                status.textContent =
                    "COMPLETE";
            } else if (index === step) {
                item.classList.remove(
                    "complete"
                );

                item.classList.add(
                    "active"
                );

                status.textContent =
                    "ACTIVE";
            } else {
                item.classList.remove(
                    "complete"
                );

                status.textContent =
                    "WAITING";
            }
        }
    );

    animate(checkpoints[step], {
        scale: [
            {
                to: 1.7,
                duration: 150
            },
            {
                to: 1,
                duration: 420
            }
        ],

        duration: 570,
        ease: "outBack"
    });
}

function finishRoute() {
    checkpoints.forEach(
        (checkpoint) => {
            checkpoint.classList.remove(
                "is-active"
            );

            checkpoint.classList.add(
                "is-complete"
            );
        }
    );

    progressItems.forEach(
        (item) => {
            item.classList.remove(
                "active"
            );

            item.classList.add(
                "complete"
            );

            item.querySelector(
                "small"
            ).textContent =
                "COMPLETE";
        }
    );

    routeState.textContent =
        "ROUTE COMPLETE";

    animate(".checkpoint-finish", {
        scale: [
            {
                to: 2,
                duration: 220
            },
            {
                to: 1,
                duration: 550
            }
        ],

        duration: 770,
        ease: "outBack"
    });

    animate(".path-panel", {
        boxShadow: [
            {
                to:
                    "0 35px 90px rgba(0,0,0,.42), 0 0 0 rgba(34,211,238,0)"
            },
            {
                to:
                    "0 35px 90px rgba(0,0,0,.42), 0 0 55px rgba(34,211,238,.12)"
            },
            {
                to:
                    "0 35px 90px rgba(0,0,0,.42), 0 0 0 rgba(34,211,238,0)"
            }
        ],

        duration: 900,
        ease: "inOutSine"
    });

    isPlaying = false;
}

function playRoute() {
    if (isPlaying) {
        return;
    }

    isPlaying = true;

    routeState.textContent =
        "ROUTE ACTIVE";

    resetProgressUI();

    routePath.style.strokeDashoffset =
        `${routeLength}`;

    positionPulse(0);

    movingPulse.style.opacity = "1";

    const state = {
        progress: 0
    };

    routeAnimation =
        animate(state, {
            progress: 1,

            duration: 5200,
            ease: "inOutSine",

            onUpdate: () => {
                const progress =
                    state.progress;

                routePath.style.strokeDashoffset =
                    `${
                        routeLength *
                        (1 - progress)
                    }`;

                positionPulse(progress);

                let nextStep = 0;

                checkpointProgress.forEach(
                    (checkpointValue, index) => {
                        if (
                            progress >=
                            checkpointValue
                        ) {
                            nextStep = index;
                        }
                    }
                );

                if (
                    nextStep !== currentStep
                ) {
                    setActiveStep(
                        nextStep
                    );
                }
            },

            onComplete: () => {
                finishRoute();
            }
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

    animate("h1", {
        opacity: {
            from: 0
        },

        y: {
            from: 42
        },

        scale: {
            from: 0.9
        },

        duration: 1000,
        delay: 180,
        ease: "outExpo"
    });

    animate(".description", {
        opacity: {
            from: 0
        },

        y: {
            from: 24
        },

        duration: 760,
        delay: 350,
        ease: "outExpo"
    });

    animate(".path-panel", {
        opacity: {
            from: 0
        },

        y: {
            from: 38
        },

        scale: {
            from: 0.96
        },

        duration: 950,
        delay: 470,
        ease: "outExpo",

        onComplete: () => {
            setTimeout(
                playRoute,
                350
            );
        }
    });

    animate(".progress-item", {
        opacity: {
            from: 0
        },

        y: {
            from: 12
        },

        delay: stagger(
            60,
            {
                start: 760
            }
        ),

        duration: 520,
        ease: "outExpo"
    });
}

function startAmbientAnimations() {
    animate("h1 span", {
        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%",
                duration: 4000
            },
            {
                to: "0% 50%",
                duration: 4000
            }
        ],

        loop: true,
        ease: "inOutSine"
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

    animate(".pulse-glow", {
        scale: [
            {
                to: 1.35,
                duration: 650
            },
            {
                to: 0.8,
                duration: 650
            }
        ],

        opacity: [
            {
                to: 0.8,
                duration: 650
            },
            {
                to: 0.25,
                duration: 650
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-one", {
        x: [
            {
                to: 140,
                duration: 7500
            },
            {
                to: -30,
                duration: 7500
            }
        ],

        y: [
            {
                to: 85,
                duration: 7500
            },
            {
                to: -30,
                duration: 7500
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
                to: 45,
                duration: 8500
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });
}

replayButton.addEventListener(
    "click",
    () => {
        if (isPlaying) {
            return;
        }

        animate(".replay-icon", {
            rotate: [
                {
                    to: 180,
                    duration: 200
                },
                {
                    to: 360,
                    duration: 280
                }
            ],

            ease: "outExpo"
        });

        playRoute();
    }
);

resetProgressUI();
positionPulse(0);

playIntro();
startAmbientAnimations();