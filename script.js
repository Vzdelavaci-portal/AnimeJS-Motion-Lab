import {
    animate,
    stagger
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const magneticPreview = document.querySelector(".magnetic-preview");
const previewButton = document.querySelector(".preview-button");

animate(".hero-badge", {
    opacity: {
        from: 0
    },

    y: {
        from: 20
    },

    duration: 700,
    ease: "outExpo"
});

animate(".hero h1", {
    opacity: {
        from: 0
    },

    y: {
        from: 45
    },

    duration: 950,
    delay: 120,
    ease: "outExpo"
});

animate(".hero > p", {
    opacity: {
        from: 0
    },

    y: {
        from: 30
    },

    duration: 850,
    delay: 260,
    ease: "outExpo"
});

animate(".hero-button", {
    opacity: {
        from: 0
    },

    scale: {
        from: 0.85
    },

    duration: 700,
    delay: 400,
    ease: "outBack"
});

animate(".hero-visual", {
    opacity: {
        from: 0
    },

    scale: {
        from: 0.7
    },

    duration: 1100,
    delay: 480,
    ease: "outExpo"
});

animate(".orbit-one", {
    rotate: 360,

    duration: 9000,
    loop: true,
    ease: "linear"
});

animate(".orbit-two", {
    rotate: -360,

    duration: 13000,
    loop: true,
    ease: "linear"
});

animate(".orbit-three", {
    rotate: 360,

    duration: 17000,
    loop: true,
    ease: "linear"
});

animate(".hero-core", {
    y: [
        {
            to: -12,
            duration: 1600
        },
        {
            to: 12,
            duration: 1600
        }
    ],

    rotate: [
        {
            to: -3,
            duration: 1600
        },
        {
            to: 3,
            duration: 1600
        }
    ],

    loop: true,
    alternate: true,
    ease: "inOutSine"
});

animate(".orb-one", {
    x: [
        {
            to: 130,
            duration: 7000
        },
        {
            to: -40,
            duration: 7000
        }
    ],

    y: [
        {
            to: 80,
            duration: 7000
        },
        {
            to: -40,
            duration: 7000
        }
    ],

    loop: true,
    alternate: true,
    ease: "inOutSine"
});

animate(".orb-two", {
    x: [
        {
            to: -100,
            duration: 9000
        },
        {
            to: 60,
            duration: 9000
        }
    ],

    y: [
        {
            to: 100,
            duration: 9000
        },
        {
            to: -70,
            duration: 9000
        }
    ],

    loop: true,
    alternate: true,
    ease: "inOutSine"
});

animate(".orb-three", {
    x: [
        {
            to: 90,
            duration: 8000
        },
        {
            to: -80,
            duration: 8000
        }
    ],

    loop: true,
    alternate: true,
    ease: "inOutSine"
});

animate(".project-card", {
    opacity: {
        from: 0
    },

    y: {
        from: 45
    },

    delay: stagger(120),
    duration: 900,
    ease: "outExpo"
});

projectCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();

        const x =
            (event.clientX - bounds.left) / bounds.width - 0.5;

        const y =
            (event.clientY - bounds.top) / bounds.height - 0.5;

        animate(card, {
            rotateY: x * 7,
            rotateX: y * -7,
            y: -8,

            duration: 300,
            ease: "outExpo"
        });
    });

    card.addEventListener("pointerleave", () => {
        animate(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,

            duration: 600,
            ease: "outExpo"
        });
    });
});

if (magneticPreview && previewButton) {
    magneticPreview.addEventListener("pointermove", (event) => {
        const bounds = magneticPreview.getBoundingClientRect();

        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        const offsetX = event.clientX - centerX;
        const offsetY = event.clientY - centerY;

        animate(previewButton, {
            x: offsetX * 0.18,
            y: offsetY * 0.18,
            scale: 1.06,

            duration: 250,
            ease: "outExpo"
        });
    });

    magneticPreview.addEventListener("pointerleave", () => {
        animate(previewButton, {
            x: 0,
            y: 0,
            scale: 1,

            duration: 600,
            ease: "outElastic(1, .6)"
        });
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach((card) => {
            const category = card.dataset.category;

            const shouldShow =
                selectedFilter === "all" ||
                category === selectedFilter;

            card.classList.toggle("is-hidden", !shouldShow);
        });
    });
});
