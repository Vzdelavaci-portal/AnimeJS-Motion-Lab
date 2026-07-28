import {
    animate,
    createTimeline,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const loader =
    document.querySelector(".intro-loader");

const loaderNumber =
    document.querySelector(".loader-number");

const visualFrame =
    document.querySelector(".visual-frame");

const replayButton =
    document.querySelector(".play-button");

let pointerX = 0;
let pointerY = 0;

let targetPointerX = 0;
let targetPointerY = 0;

let loaderValue = 0;

function runLoader() {
    loader.style.display = "grid";
    loader.style.opacity = "1";

    loaderValue = 0;
    loaderNumber.textContent = "00";

    animate(".loader-line span", {
        scaleX: [
            {
                from: 0,
                to: 1
            }
        ],

        duration: 1500,
        ease: "inOutExpo",

        onUpdate: animation => {
            loaderValue =
                Math.min(
                    100,
                    Math.round(animation.progress * 100)
                );

            loaderNumber.textContent =
                String(loaderValue).padStart(2, "0");
        },

        onComplete: () => {
            loaderNumber.textContent = "100";

            animate(loader, {
                y: [
                    {
                        from: "0%",
                        to: "-100%"
                    }
                ],

                duration: 900,
                delay: 180,

                ease: "inOutExpo",

                onComplete: () => {
                    loader.style.display = "none";

                    playHeroIntro();
                }
            });
        }
    });
}

function resetHeroElements() {
    document
        .querySelectorAll(
            ".navigation, " +
            ".hero-badge .mask-content, " +
            ".title-word, " +
            ".hero-description .mask-content, " +
            ".hero-actions .mask-content, " +
            ".visual-frame, " +
            ".floating-card, " +
            ".page-footer"
        )
        .forEach(element => {
            element.removeAttribute("style");
        });
}

function playHeroIntro() {
    resetHeroElements();

    const timeline =
        createTimeline({
            defaults: {
                ease: "outExpo"
            }
        });

    timeline
        .add(".navigation", {
            opacity: {
                from: 0
            },

            y: {
                from: -25
            },

            duration: 850
        })

        .add(
            ".hero-badge .mask-content",
            {
                y: {
                    from: "110%"
                },

                duration: 700
            },
            150
        )

        .add(
            ".title-word",
            {
                y: {
                    from: "115%"
                },

                rotate: {
                    from: 4
                },

                delay: stagger(110),

                duration: 1050
            },
            250
        )

        .add(
            ".accent-line .title-word",
            {
                color: [
                    {
                        from: "rgba(255,255,255,0)",
                        to: "rgba(255,255,255,0)"
                    }
                ],

                duration: 1
            },
            500
        )

        .add(
            ".hero-description .mask-content",
            {
                y: {
                    from: "120%"
                },

                duration: 800
            },
            760
        )

        .add(
            ".hero-actions .mask-content",
            {
                y: {
                    from: "130%"
                },

                duration: 850
            },
            860
        )

        .add(
            ".visual-frame",
            {
                opacity: {
                    from: 0
                },

                scale: {
                    from: 0.82
                },

                rotateY: {
                    from: 16
                },

                rotateX: {
                    from: -8
                },

                x: {
                    from: 65
                },

                duration: 1250
            },
            440
        )

        .add(
            ".floating-card",
            {
                opacity: {
                    from: 0
                },

                scale: {
                    from: 0.55
                },

                delay: stagger(100),

                duration: 780
            },
            980
        )

        .add(
            ".page-footer",
            {
                opacity: {
                    from: 0
                },

                y: {
                    from: 20
                },

                duration: 750
            },
            1150
        );

    animate(".accent-line .title-word::after", {
        clipPath: [
            {
                from: "inset(0 100% 0 0)",
                to: "inset(0 0% 0 0)"
            }
        ],

        duration: 950,
        delay: 800,

        ease: "inOutExpo"
    });

    animate(".primary-button::before", {
        x: [
            {
                from: "-140%",
                to: "500%"
            }
        ],

        duration: 950,
        delay: 1700,

        ease: "inOutQuad"
    });
}

function startAmbientAnimations() {
    animate(".ring-large", {
        rotate: 360,

        duration: 26000,
        loop: true,

        ease: "linear"
    });

    animate(".ring-medium", {
        rotate: -360,

        duration: 19000,
        loop: true,

        ease: "linear"
    });

    animate(".ring-small", {
        rotate: 360,

        duration: 12500,
        loop: true,

        ease: "linear"
    });

    animate(".motion-core", {
        translateY: [
            {
                to: -11,
                duration: 1700
            },
            {
                to: 8,
                duration: 1700
            }
        ],

        scale: [
            {
                to: 1.05,
                duration: 1700
            },
            {
                to: 0.97,
                duration: 1700
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".core-light", {
        scale: [
            {
                to: 1.35,
                duration: 1300
            },
            {
                to: 0.85,
                duration: 1300
            }
        ],

        opacity: [
            {
                to: 0.48,
                duration: 1300
            },
            {
                to: 0.2,
                duration: 1300
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".card-design", {
        x: [
            {
                to: 14,
                duration: 2300
            },
            {
                to: -7,
                duration: 2300
            }
        ],

        y: [
            {
                to: -9,
                duration: 2300
            },
            {
                to: 7,
                duration: 2300
            }
        ],

        rotate: [
            {
                to: 2,
                duration: 2300
            },
            {
                to: -2,
                duration: 2300
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".card-motion", {
        x: [
            {
                to: -12,
                duration: 2700
            },
            {
                to: 8,
                duration: 2700
            }
        ],

        y: [
            {
                to: 11,
                duration: 2700
            },
            {
                to: -8,
                duration: 2700
            }
        ],

        rotate: [
            {
                to: -2,
                duration: 2700
            },
            {
                to: 2.5,
                duration: 2700
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".card-code", {
        x: [
            {
                to: 10,
                duration: 2100
            },
            {
                to: -8,
                duration: 2100
            }
        ],

        y: [
            {
                to: -12,
                duration: 2100
            },
            {
                to: 5,
                duration: 2100
            }
        ],

        rotate: [
            {
                to: 2.5,
                duration: 2100
            },
            {
                to: -1.5,
                duration: 2100
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".glow-one", {
        x: [
            {
                to: -90,
                duration: 8000
            },
            {
                to: 40,
                duration: 8000
            }
        ],

        y: [
            {
                to: 70,
                duration: 8000
            },
            {
                to: -40,
                duration: 8000
            }
        ],

        scale: [
            {
                to: 1.15,
                duration: 8000
            },
            {
                to: 0.9,
                duration: 8000
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".glow-two", {
        x: [
            {
                to: 70,
                duration: 9200
            },
            {
                to: -60,
                duration: 9200
            }
        ],

        y: [
            {
                to: -80,
                duration: 9200
            },
            {
                to: 35,
                duration: 9200
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".badge-dot, .status-dot", {
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
                to: 0.42,
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

    animate(".scroll-line::after", {
        translateX: [
            {
                from: "-100%",
                to: "100%"
            }
        ],

        duration: 1700,
        loop: true,

        ease: "inOutQuad"
    });
}

function handlePointerMove(event) {
    targetPointerX =
        event.clientX / window.innerWidth - 0.5;

    targetPointerY =
        event.clientY / window.innerHeight - 0.5;
}

function updateParallax() {
    pointerX +=
        (targetPointerX - pointerX) * 0.055;

    pointerY +=
        (targetPointerY - pointerY) * 0.055;

    visualFrame.style.transform = `
        perspective(1200px)
        rotateY(${pointerX * 7}deg)
        rotateX(${pointerY * -7}deg)
        translate3d(
            ${pointerX * 12}px,
            ${pointerY * 12}px,
            0
        )
    `;

    document.querySelector(".background-grid")
        .style.transform = `
            translate3d(
                ${pointerX * -18}px,
                ${pointerY * -18}px,
                0
            )
        `;

    requestAnimationFrame(updateParallax);
}

replayButton.addEventListener(
    "click",
    () => {
        playHeroIntro();

        animate(replayButton, {
            scale: [
                {
                    to: 0.9,
                    duration: 100
                },
                {
                    to: 1.06,
                    duration: 180
                },
                {
                    to: 1,
                    duration: 230
                }
            ],

            ease: "outBack"
        });
    }
);

window.addEventListener(
    "pointermove",
    handlePointerMove
);

window.addEventListener(
    "pointerleave",
    () => {
        targetPointerX = 0;
        targetPointerY = 0;
    }
);

runLoader();
startAmbientAnimations();
updateParallax();