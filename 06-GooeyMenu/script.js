import {
    animate,
    createTimeline,
    stagger,
    spring
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const menuToggle =
    document.querySelector(".menu-toggle");

const menuItems =
    [...document.querySelectorAll(".menu-item")];

const gooeyItems =
    [...document.querySelectorAll(".gooey-item")];

const gooeyBridges =
    [...document.querySelectorAll(".gooey-bridge")];

const gooeyMain =
    document.querySelector(".gooey-main");

const menuLabelText =
    document.querySelector(".menu-label-text");

const menuLabelDot =
    document.querySelector(".menu-label-dot");

const itemPositions = [
    {
        x: -145,
        y: 22
    },
    {
        x: -78,
        y: -102
    },
    {
        x: 0,
        y: -132
    },
    {
        x: 78,
        y: -102
    },
    {
        x: 145,
        y: 22
    }
];

const bridgePositions = [
    {
        x: -72,
        y: 11
    },
    {
        x: -39,
        y: -51
    },
    {
        x: 0,
        y: -66
    },
    {
        x: 39,
        y: -51
    },
    {
        x: 72,
        y: 11
    }
];

let isOpen = false;
let isAnimating = false;

function setMenuState(open) {
    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

    menuToggle.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
    );

    menuItems.forEach((item) => {
        item.style.pointerEvents =
            open ? "auto" : "none";

        item.setAttribute(
            "tabindex",
            open ? "0" : "-1"
        );
    });

    menuLabelText.textContent =
        open ? "Menu open" : "Menu closed";

    menuLabelDot.style.background =
        open ? "#a3ff12" : "#5e5c68";

    menuLabelDot.style.boxShadow =
        open
            ? "0 0 12px #a3ff12"
            : "0 0 10px transparent";
}

function openMenu() {
    if (isAnimating || isOpen) {
        return;
    }

    isAnimating = true;
    isOpen = true;

    setMenuState(true);

    const timeline =
        createTimeline({
            defaults: {
                ease: "outExpo"
            },

            onComplete: () => {
                isAnimating = false;
            }
        });

    timeline
        .add(".line-one", {
            rotate: 45,
            duration: 420
        })

        .add(
            ".line-two",
            {
                rotate: -45,
                duration: 420
            },
            0
        )

        .add(
            gooeyMain,
            {
                scale: [
                    {
                        to: 1.18,
                        duration: 180
                    },
                    {
                        to: 1,
                        duration: 320
                    }
                ]
            },
            0
        );

    gooeyBridges.forEach((bridge, index) => {
        const position =
            bridgePositions[index];

        animate(bridge, {
            x: position.x,
            y: position.y,

            opacity: [
                {
                    from: 0,
                    to: 1,
                    duration: 120
                },
                {
                    to: 0.45,
                    duration: 420
                }
            ],

            scale: [
                {
                    from: 0,
                    to: 1.2,
                    duration: 250
                },
                {
                    to: 0.8,
                    duration: 430
                }
            ],

            delay: index * 30,

            duration: 680,
            ease: "outExpo"
        });
    });

    gooeyItems.forEach((item, index) => {
        const position =
            itemPositions[index];

        animate(item, {
            x: position.x,
            y: position.y,

            opacity: {
                from: 0,
                to: 1
            },

            scale: [
                {
                    from: 0.25,
                    to: 1.16,
                    duration: 430
                },
                {
                    to: 1,
                    duration: 330
                }
            ],

            delay: 100 + index * 55,

            duration: 760,

            ease: spring({
                bounce: 0.45,
                duration: 720
            })
        });
    });

    menuItems.forEach((item, index) => {
        const position =
            itemPositions[index];

        animate(item, {
            x: position.x,
            y: position.y,

            opacity: {
                from: 0,
                to: 1
            },

            scale: [
                {
                    from: 0.25,
                    to: 1.12,
                    duration: 430
                },
                {
                    to: 1,
                    duration: 300
                }
            ],

            rotate: [
                {
                    from: -20,
                    to: 4,
                    duration: 430
                },
                {
                    to: 0,
                    duration: 300
                }
            ],

            delay: 145 + index * 70,

            duration: 760,

            ease: spring({
                bounce: 0.5,
                duration: 720
            })
        });
    });

    animate(".menu-label", {
        scale: [
            {
                to: 0.9,
                duration: 100
            },
            {
                to: 1,
                duration: 300
            }
        ],

        ease: "outBack"
    });
}

function closeMenu() {
    if (isAnimating || !isOpen) {
        return;
    }

    isAnimating = true;
    isOpen = false;

    setMenuState(false);

    animate(".line-one", {
        rotate: 0,

        duration: 420,
        delay: 250,

        ease: "outExpo"
    });

    animate(".line-two", {
        rotate: 90,

        duration: 420,
        delay: 250,

        ease: "outExpo"
    });

    [...menuItems]
        .reverse()
        .forEach((item, reverseIndex) => {
            animate(item, {
                x: 0,
                y: 0,

                opacity: 0,
                scale: 0.25,
                rotate: 18,

                delay: reverseIndex * 38,

                duration: 430,
                ease: "inBack"
            });
        });

    [...gooeyItems]
        .reverse()
        .forEach((item, reverseIndex) => {
            animate(item, {
                x: 0,
                y: 0,

                opacity: 0,
                scale: 0.25,

                delay: 50 + reverseIndex * 32,

                duration: 480,
                ease: "inBack"
            });
        });

    [...gooeyBridges]
        .reverse()
        .forEach((bridge, reverseIndex) => {
            animate(bridge, {
                x: 0,
                y: 0,

                opacity: 0,
                scale: 0,

                delay: reverseIndex * 28,

                duration: 400,
                ease: "inExpo"
            });
        });

    animate(gooeyMain, {
        scale: [
            {
                to: 1.22,
                duration: 300
            },
            {
                to: 1,
                duration: 350
            }
        ],

        delay: 210,

        ease: "outBack",

        onComplete: () => {
            isAnimating = false;
        }
    });

    animate(".menu-label", {
        scale: [
            {
                to: 0.9,
                duration: 100
            },
            {
                to: 1,
                duration: 300
            }
        ],

        ease: "outBack"
    });
}

function toggleMenu() {
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
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
        delay: 120,
        ease: "outExpo"
    });

    animate("h1", {
        opacity: {
            from: 0
        },

        y: {
            from: 45
        },

        scale: {
            from: 0.9
        },

        duration: 1000,
        delay: 200,
        ease: "outExpo"
    });

    animate(".description", {
        opacity: {
            from: 0
        },

        y: {
            from: 25
        },

        duration: 800,
        delay: 390,
        ease: "outExpo"
    });

    animate(".menu-stage", {
        opacity: {
            from: 0
        },

        scale: {
            from: 0.7
        },

        duration: 950,
        delay: 500,
        ease: "outBack"
    });

    animate(".feature", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        delay: stagger(
            90,
            {
                start: 700
            }
        ),

        duration: 650,
        ease: "outExpo"
    });

    animate(".corner-label", {
        opacity: {
            from: 0
        },

        duration: 750,
        delay: 900,
        ease: "outExpo"
    });
}

function startAmbientAnimations() {
    animate("h1 span", {
        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%",
                duration: 3600
            },
            {
                to: "0% 50%",
                duration: 3600
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
                to: 0.45,
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

    animate(".glow-one", {
        x: [
            {
                to: 140,
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
                to: -130,
                duration: 8600
            },
            {
                to: 45,
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

    animate(".glow-three", {
        scale: [
            {
                to: 1.35,
                duration: 4500
            },
            {
                to: 0.8,
                duration: 4500
            }
        ],

        opacity: [
            {
                to: 0.15,
                duration: 4500
            },
            {
                to: 0.05,
                duration: 4500
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".shape-one", {
        y: [
            {
                to: -17,
                duration: 2500
            },
            {
                to: 17,
                duration: 2500
            }
        ],

        rotate: [
            {
                to: 15,
                duration: 2500
            },
            {
                to: -15,
                duration: 2500
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".shape-two", {
        rotate: 360,

        duration: 19000,
        loop: true,

        ease: "linear"
    });

    animate(".shape-three", {
        y: [
            {
                to: 15,
                duration: 2200
            },
            {
                to: -15,
                duration: 2200
            }
        ],

        scale: [
            {
                to: 1.2,
                duration: 2200
            },
            {
                to: 0.85,
                duration: 2200
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(gooeyMain, {
        scale: [
            {
                to: 1.04,
                duration: 1300
            },
            {
                to: 0.97,
                duration: 1300
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });
}

menuToggle.addEventListener(
    "click",
    toggleMenu
);

menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        animate(item, {
            scale: [
                {
                    to: 0.8,
                    duration: 100
                },
                {
                    to: 1.18,
                    duration: 180
                },
                {
                    to: 1,
                    duration: 260
                }
            ],

            rotate: [
                {
                    to: -10,
                    duration: 100
                },
                {
                    to: 6,
                    duration: 180
                },
                {
                    to: 0,
                    duration: 260
                }
            ],

            ease: "outBack"
        });
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) {
        closeMenu();
    }
});

setMenuState(false);
playIntro();
startAmbientAnimations();