import {
    animate,
    stagger,
    spring
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const blobs =
    [...document.querySelectorAll(".blob")];

const blobCenter =
    document.querySelector(".blob-center");

const loaderValue =
    document.querySelector(".loader-value");

const loaderStatus =
    document.querySelector(".loader-status");

const loadingMessage =
    document.querySelector(".loading-message");

const progressBar =
    document.querySelector(".progress-bar");

const replayButton =
    document.querySelector(".replay-button");

const blobPositions = [
    {
        x: -88,
        y: -58
    },
    {
        x: 0,
        y: -92
    },
    {
        x: 88,
        y: -58
    },
    {
        x: 75,
        y: 64
    },
    {
        x: -75,
        y: 64
    }
];

const messages = [
    {
        at: 0,
        text: "Preparing motion engine..."
    },
    {
        at: 25,
        text: "Generating liquid particles..."
    },
    {
        at: 50,
        text: "Synchronizing blobs..."
    },
    {
        at: 75,
        text: "Finalizing experience..."
    },
    {
        at: 100,
        text: "Experience ready."
    }
];

let isPlaying = false;

function setBlobStartPositions() {
    blobs.forEach((blob, index) => {
        blob.style.transform =
            `translate(${blobPositions[index].x}px, ${blobPositions[index].y}px)`;
    });
}

function setLoadingMessage(progress) {
    let currentMessage =
        messages[0].text;

    messages.forEach((message) => {
        if (progress >= message.at) {
            currentMessage =
                message.text;
        }
    });

    loadingMessage.textContent =
        currentMessage;
}

function resetLoader() {
    loaderValue.textContent = "00";

    loaderStatus.textContent =
        "INITIALIZING";

    loadingMessage.textContent =
        messages[0].text;

    progressBar.style.transform =
        "scaleX(0)";

    blobCenter.style.transform =
        "scale(1)";

    blobCenter.style.opacity =
        "1";

    blobs.forEach((blob) => {
        blob.style.opacity = "1";
        blob.style.transform = "";
    });

    setBlobStartPositions();
}

function animateBlobOrbit() {
    blobs.forEach((blob, index) => {
        const base =
            blobPositions[index];

        const direction =
            index % 2 === 0
                ? 1
                : -1;

        animate(blob, {
            x: [
                {
                    to:
                        base.x +
                        20 * direction,

                    duration:
                        900 +
                        index * 70
                },
                {
                    to:
                        base.x -
                        18 * direction,

                    duration:
                        900 +
                        index * 70
                },
                {
                    to:
                        base.x,

                    duration:
                        900 +
                        index * 70
                }
            ],

            y: [
                {
                    to:
                        base.y -
                        18,

                    duration:
                        900 +
                        index * 70
                },
                {
                    to:
                        base.y +
                        14,

                    duration:
                        900 +
                        index * 70
                },
                {
                    to:
                        base.y,

                    duration:
                        900 +
                        index * 70
                }
            ],

            scale: [
                {
                    to: 1.1,
                    duration: 900
                },
                {
                    to: 0.88,
                    duration: 900
                },
                {
                    to: 1,
                    duration: 900
                }
            ],

            loop: 2,

            ease: "inOutSine"
        });
    });
}

function mergeBlobs() {
    blobs.forEach((blob, index) => {
        animate(blob, {
            x: 0,
            y: 0,

            scale: [
                {
                    to: 1.2,
                    duration: 360
                },
                {
                    to: 0.45,
                    duration: 540
                }
            ],

            opacity: [
                {
                    to: 1,
                    duration: 300
                },
                {
                    to: 0,
                    duration: 520
                }
            ],

            delay:
                index * 40,

            duration: 900,

            ease: "inOutExpo"
        });
    });

    animate(blobCenter, {
        scale: [
            {
                to: 1.55,
                duration: 520
            },
            {
                to: 1.2,
                duration: 420
            }
        ],

        duration: 940,

        ease: spring({
            bounce: 0.32,
            duration: 940
        })
    });
}

function finalPulse() {
    loaderStatus.textContent =
        "COMPLETE";

    loadingMessage.textContent =
        "Experience ready.";

    animate(blobCenter, {
        scale: [
            {
                to: 1.75,
                duration: 260
            },
            {
                to: 0.92,
                duration: 340
            },
            {
                to: 1,
                duration: 420
            }
        ],

        boxShadow: [
            {
                to:
                    "0 0 30px rgba(184,255,61,.25)"
            },
            {
                to:
                    "0 0 70px rgba(184,255,61,.65)"
            },
            {
                to:
                    "0 0 30px rgba(184,255,61,.25)"
            }
        ],

        duration: 1020,
        ease: "outExpo"
    });

    animate(".loader-panel", {
        boxShadow: [
            {
                to:
                    "0 35px 90px rgba(0,0,0,.44), 0 0 0 rgba(184,255,61,0)"
            },
            {
                to:
                    "0 35px 90px rgba(0,0,0,.44), 0 0 55px rgba(184,255,61,.13)"
            },
            {
                to:
                    "0 35px 90px rgba(0,0,0,.44), 0 0 0 rgba(184,255,61,0)"
            }
        ],

        duration: 1100,
        ease: "inOutSine",

        onComplete: () => {
            isPlaying = false;
        }
    });
}

function playLoader() {
    if (isPlaying) {
        return;
    }

    isPlaying = true;

    resetLoader();

    loaderStatus.textContent =
        "LOADING";

    animateBlobOrbit();

    const state = {
        progress: 0
    };

    animate(state, {
        progress: 100,

        duration: 5400,

        ease: "inOutSine",

        onUpdate: () => {
            const progress =
                Math.min(
                    100,
                    Math.round(
                        state.progress
                    )
                );

            loaderValue.textContent =
                String(progress)
                    .padStart(
                        2,
                        "0"
                    );

            progressBar.style.transform =
                `scaleX(${progress / 100})`;

            setLoadingMessage(
                progress
            );

            if (
                progress >= 72 &&
                progress < 78
            ) {
                mergeBlobs();
            }
        },

        onComplete: () => {
            loaderValue.textContent =
                "100";

            progressBar.style.transform =
                "scaleX(1)";

            finalPulse();
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
        delay: 330,
        ease: "outExpo"
    });

    animate(".loader-panel", {
        opacity: {
            from: 0
        },

        y: {
            from: 38
        },

        scale: {
            from: 0.95
        },

        duration: 950,
        delay: 450,
        ease: "outExpo",

        onComplete: () => {
            setTimeout(
                playLoader,
                300
            );
        }
    });

    animate(".loader-meta span", {
        opacity: {
            from: 0
        },

        y: {
            from: 8
        },

        delay: stagger(
            80,
            {
                start: 750
            }
        ),

        duration: 500,
        ease: "outExpo"
    });
}

function startAmbientAnimations() {
    animate("h1 span", {
        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%",
                duration: 3900
            },
            {
                to: "0% 50%",
                duration: 3900
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

    animate(".glow-one", {
        x: [
            {
                to: 130,
                duration: 7600
            },
            {
                to: -30,
                duration: 7600
            }
        ],

        y: [
            {
                to: 90,
                duration: 7600
            },
            {
                to: -30,
                duration: 7600
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(".glow-two", {
        x: [
            {
                to: -125,
                duration: 8600
            },
            {
                to: 40,
                duration: 8600
            }
        ],

        y: [
            {
                to: -85,
                duration: 8600
            },
            {
                to: 45,
                duration: 8600
            }
        ],

        loop: true,
        alternate: true,
        ease: "inOutSine"
    });

    animate(blobCenter, {
        scale: [
            {
                to: 1.05,
                duration: 1200
            },
            {
                to: 0.97,
                duration: 1200
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

        playLoader();
    }
);

resetLoader();
playIntro();
startAmbientAnimations();