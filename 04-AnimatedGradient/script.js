import {
    animate,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const glassCard =
    document.querySelector(".glass-card");

const meshBackground =
    document.querySelector(".mesh-background");

const themeButtons =
    document.querySelectorAll(".control-button");

const gradientBlobs =
    document.querySelectorAll(".gradient-blob");

const themes = {
    aurora: {
        colors: [
            "#7c3aed",
            "#2563eb",
            "#db2777",
            "#f97316",
            "#06b6d4",
            "#ffffff"
        ],

        background:
            "radial-gradient(circle at center, #111125 0%, #06060d 48%, #020205 100%)"
    },

    sunset: {
        colors: [
            "#7c2d12",
            "#dc2626",
            "#db2777",
            "#f59e0b",
            "#fb7185",
            "#fff7ed"
        ],

        background:
            "radial-gradient(circle at center, #2a1017 0%, #0f0609 52%, #030202 100%)"
    },

    ocean: {
        colors: [
            "#1d4ed8",
            "#0284c7",
            "#0f766e",
            "#06b6d4",
            "#38bdf8",
            "#ecfeff"
        ],

        background:
            "radial-gradient(circle at center, #071c35 0%, #03101d 52%, #010408 100%)"
    }
};

let pointerX = 0;
let pointerY = 0;

let targetPointerX = 0;
let targetPointerY = 0;

function playIntro() {
    animate(".top-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        duration: 750,
        ease: "outExpo"
    });

    animate(".glass-card", {
        opacity: {
            from: 0
        },

        y: {
            from: 55
        },

        scale: {
            from: 0.92
        },

        duration: 1150,
        delay: 120,
        ease: "outExpo"
    });

    animate(".project-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 14
        },

        duration: 700,
        delay: 350,
        ease: "outExpo"
    });

    animate("h1", {
        opacity: {
            from: 0
        },

        y: {
            from: 40
        },

        duration: 950,
        delay: 430,
        ease: "outExpo"
    });

    animate(".glass-card > p", {
        opacity: {
            from: 0
        },

        y: {
            from: 25
        },

        duration: 800,
        delay: 590,
        ease: "outExpo"
    });

    animate(".control-button", {
        opacity: {
            from: 0
        },

        y: {
            from: 18
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

    animate(".status-item, .status-divider", {
        opacity: {
            from: 0
        },

        y: {
            from: 14
        },

        delay: stagger(
            70,
            {
                start: 900
            }
        ),

        duration: 600,
        ease: "outExpo"
    });

    animate(".interaction-hint", {
        opacity: {
            from: 0
        },

        y: {
            from: 15
        },

        duration: 650,
        delay: 1150,
        ease: "outExpo"
    });

    animate(".corner-text", {
        opacity: {
            from: 0
        },

        duration: 700,
        delay: 1200,
        ease: "outExpo"
    });
}

function animateBlob(
    selector,
    settings
) {
    animate(selector, {
        x: settings.x,
        y: settings.y,
        scale: settings.scale,
        rotate: settings.rotate,

        duration: settings.duration,

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });
}

function startMeshAnimation() {
    animateBlob(".blob-purple", {
        x: [
            {
                to: 180,
                duration: 8000
            },
            {
                to: -70,
                duration: 8000
            }
        ],

        y: [
            {
                to: 100,
                duration: 8000
            },
            {
                to: -60,
                duration: 8000
            }
        ],

        scale: [
            {
                to: 1.18,
                duration: 8000
            },
            {
                to: 0.88,
                duration: 8000
            }
        ],

        rotate: [
            {
                to: 18,
                duration: 8000
            },
            {
                to: -12,
                duration: 8000
            }
        ],

        duration: 16000
    });

    animateBlob(".blob-blue", {
        x: [
            {
                to: -190,
                duration: 9000
            },
            {
                to: 60,
                duration: 9000
            }
        ],

        y: [
            {
                to: 110,
                duration: 9000
            },
            {
                to: -80,
                duration: 9000
            }
        ],

        scale: [
            {
                to: 0.88,
                duration: 9000
            },
            {
                to: 1.2,
                duration: 9000
            }
        ],

        rotate: [
            {
                to: -20,
                duration: 9000
            },
            {
                to: 14,
                duration: 9000
            }
        ],

        duration: 18000
    });

    animateBlob(".blob-pink", {
        x: [
            {
                to: -140,
                duration: 7600
            },
            {
                to: 80,
                duration: 7600
            }
        ],

        y: [
            {
                to: -130,
                duration: 7600
            },
            {
                to: 50,
                duration: 7600
            }
        ],

        scale: [
            {
                to: 1.16,
                duration: 7600
            },
            {
                to: 0.9,
                duration: 7600
            }
        ],

        rotate: [
            {
                to: 22,
                duration: 7600
            },
            {
                to: -18,
                duration: 7600
            }
        ],

        duration: 15200
    });

    animateBlob(".blob-orange", {
        x: [
            {
                to: 160,
                duration: 8800
            },
            {
                to: -60,
                duration: 8800
            }
        ],

        y: [
            {
                to: -100,
                duration: 8800
            },
            {
                to: 45,
                duration: 8800
            }
        ],

        scale: [
            {
                to: 0.86,
                duration: 8800
            },
            {
                to: 1.14,
                duration: 8800
            }
        ],

        rotate: [
            {
                to: -17,
                duration: 8800
            },
            {
                to: 20,
                duration: 8800
            }
        ],

        duration: 17600
    });

    animateBlob(".blob-cyan", {
        x: [
            {
                to: 120,
                duration: 6800
            },
            {
                to: -130,
                duration: 6800
            }
        ],

        y: [
            {
                to: 95,
                duration: 6800
            },
            {
                to: -105,
                duration: 6800
            }
        ],

        scale: [
            {
                to: 1.22,
                duration: 6800
            },
            {
                to: 0.82,
                duration: 6800
            }
        ],

        rotate: [
            {
                to: 25,
                duration: 6800
            },
            {
                to: -20,
                duration: 6800
            }
        ],

        duration: 13600
    });

    animate(".blob-center", {
        scale: [
            {
                to: 1.28,
                duration: 6000
            },
            {
                to: 0.82,
                duration: 6000
            }
        ],

        opacity: [
            {
                to: 0.48,
                duration: 6000
            },
            {
                to: 0.22,
                duration: 6000
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".ring-one", {
        rotate: 360,

        duration: 28000,
        loop: true,

        ease: "linear"
    });

    animate(".ring-two", {
        rotate: -360,

        duration: 38000,
        loop: true,

        ease: "linear"
    });

    animate("h1 span", {
        backgroundPosition: [
            {
                from: "0% 50%",
                to: "100% 50%",
                duration: 4200
            },
            {
                to: "0% 50%",
                duration: 4200
            }
        ],

        loop: true,

        ease: "inOutSine"
    });

    animate(".label-dot", {
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

    animate(".cursor-icon span", {
        y: [
            {
                to: 7,
                duration: 700
            },
            {
                to: 0,
                duration: 700
            }
        ],

        opacity: [
            {
                to: 0.25,
                duration: 700
            },
            {
                to: 1,
                duration: 700
            }
        ],

        loop: true,

        ease: "inOutSine"
    });

    animate(".card-shine", {
        x: [
            {
                from: "-180%",
                to: "480%",
                duration: 4400
            }
        ],

        delay: 1800,
        loop: true,

        ease: "inOutQuad"
    });
}

function changeTheme(themeName) {
    const theme = themes[themeName];

    if (!theme) {
        return;
    }

    gradientBlobs.forEach((blob, index) => {
        animate(blob, {
            backgroundColor: theme.colors[index],

            duration: 1100,
            ease: "inOutQuad"
        });
    });

    meshBackground.style.background =
        theme.background;
}

function handlePointerMove(event) {
    const normalizedX =
        event.clientX / window.innerWidth - 0.5;

    const normalizedY =
        event.clientY / window.innerHeight - 0.5;

    targetPointerX = normalizedX;
    targetPointerY = normalizedY;
}

function updateParallax() {
    pointerX +=
        (targetPointerX - pointerX) * 0.055;

    pointerY +=
        (targetPointerY - pointerY) * 0.055;

    glassCard.style.transform = `
        perspective(1100px)
        rotateY(${pointerX * 4.5}deg)
        rotateX(${pointerY * -4.5}deg)
        translate3d(
            ${pointerX * 8}px,
            ${pointerY * 8}px,
            0
        )
    `;

    meshBackground.style.transform = `
        translate3d(
            ${pointerX * -28}px,
            ${pointerY * -28}px,
            0
        )
        scale(1.03)
    `;

    requestAnimationFrame(updateParallax);
}

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTheme =
            button.dataset.theme;

        themeButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        changeTheme(selectedTheme);

        animate(button, {
            scale: [
                {
                    to: 0.9,
                    duration: 90
                },
                {
                    to: 1.08,
                    duration: 180
                },
                {
                    to: 1,
                    duration: 260
                }
            ],

            ease: "outBack"
        });
    });
});

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

playIntro();
startMeshAnimation();
updateParallax();