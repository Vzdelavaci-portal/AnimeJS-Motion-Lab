import {
    animate,
    createTimeline,
    stagger,
    spring
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const siteHeader =
    document.querySelector(".site-header");

const navbar =
    document.querySelector(".navbar");

const navLinks =
    [...document.querySelectorAll(".nav-link")];

const mobileLinks =
    [...document.querySelectorAll(".mobile-link")];

const activeIndicator =
    document.querySelector(".active-indicator");

const menuToggle =
    document.querySelector(".menu-toggle");

const mobilePanel =
    document.querySelector(".mobile-panel");

const sections =
    [...document.querySelectorAll(".page-section")];

let activeSection = "home";
let mobileMenuOpen = false;
let mobileMenuAnimating = false;

function moveIndicator(link, immediate = false) {
    if (!link || window.innerWidth <= 980) {
        return;
    }

    const linksBounds =
        link.parentElement.getBoundingClientRect();

    const linkBounds =
        link.getBoundingClientRect();

    const targetX =
        linkBounds.left - linksBounds.left;

    const targetWidth =
        linkBounds.width;

    animate(activeIndicator, {
        x: targetX,
        width: targetWidth,

        duration: immediate ? 1 : 600,

        ease: immediate
            ? "linear"
            : spring({
                bounce: 0.25,
                duration: 600
            })
    });
}

function setActiveSection(sectionName) {
    if (activeSection === sectionName) {
        return;
    }

    activeSection = sectionName;

    navLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.dataset.section === sectionName
        );
    });

    mobileLinks.forEach((link) => {
        link.classList.toggle(
            "active",
            link.dataset.section === sectionName
        );
    });

    const activeLink =
        navLinks.find(
            link => link.dataset.section === sectionName
        );

    moveIndicator(activeLink);
}

function updateActiveSection() {
    const viewportPosition =
        window.scrollY + window.innerHeight * 0.42;

    let detectedSection = "home";

    sections.forEach((section) => {
        if (viewportPosition >= section.offsetTop) {
            detectedSection = section.id;
        }
    });

    setActiveSection(detectedSection);
}

function updateNavbarOnScroll() {
    siteHeader.classList.toggle(
        "is-scrolled",
        window.scrollY > 50
    );

    updateActiveSection();
}

function animateMagneticLink(event) {
    const link = event.currentTarget;
    const bounds = link.getBoundingClientRect();

    const offsetX =
        event.clientX -
        (bounds.left + bounds.width / 2);

    const offsetY =
        event.clientY -
        (bounds.top + bounds.height / 2);

    animate(link, {
        x: offsetX * 0.15,
        y: offsetY * 0.2,

        duration: 260,
        ease: "outExpo"
    });
}

function resetMagneticLink(event) {
    animate(event.currentTarget, {
        x: 0,
        y: 0,

        duration: 600,

        ease: spring({
            bounce: 0.35,
            duration: 600
        })
    });
}

function openMobileMenu() {
    if (mobileMenuAnimating || mobileMenuOpen) {
        return;
    }

    mobileMenuAnimating = true;
    mobileMenuOpen = true;

    document.body.classList.add("menu-open");
    mobilePanel.classList.add("is-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");

    const timeline = createTimeline({
        defaults: {
            ease: "outExpo"
        },

        onComplete: () => {
            mobileMenuAnimating = false;
        }
    });

    timeline
        .add(mobilePanel, {
            opacity: {
                from: 0,
                to: 1
            },

            scaleY: {
                from: 0.3,
                to: 1
            },

            duration: 650
        })

        .add(
            ".mobile-link",
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                x: {
                    from: -35,
                    to: 0
                },

                delay: stagger(65),

                duration: 560
            },
            170
        );

    animate(".line-top", {
        y: 7,
        rotate: 45,

        duration: 420,
        ease: "outExpo"
    });

    animate(".line-middle", {
        opacity: 0,
        scaleX: 0,

        duration: 250,
        ease: "outQuad"
    });

    animate(".line-bottom", {
        y: -7,
        rotate: -45,

        duration: 420,
        ease: "outExpo"
    });
}

function closeMobileMenu() {
    if (mobileMenuAnimating || !mobileMenuOpen) {
        return;
    }

    mobileMenuAnimating = true;
    mobileMenuOpen = false;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    animate(".mobile-link", {
        opacity: 0,
        x: -20,

        delay: stagger(35, {
            from: "last"
        }),

        duration: 280,
        ease: "inQuad"
    });

    animate(mobilePanel, {
        opacity: 0,
        scaleY: 0.35,

        duration: 500,
        delay: 130,

        ease: "inOutExpo",

        onComplete: () => {
            mobilePanel.classList.remove("is-open");
            document.body.classList.remove("menu-open");

            mobileMenuAnimating = false;
        }
    });

    animate(".line-top", {
        y: 0,
        rotate: 0,

        duration: 420,
        ease: "outExpo"
    });

    animate(".line-middle", {
        opacity: 1,
        scaleX: 1,

        duration: 350,
        delay: 100,
        ease: "outExpo"
    });

    animate(".line-bottom", {
        y: 0,
        rotate: 0,

        duration: 420,
        ease: "outExpo"
    });
}

function toggleMobileMenu() {
    if (mobileMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function playIntro() {
    const timeline = createTimeline({
        defaults: {
            ease: "outExpo"
        }
    });

    timeline
        .add(".navbar", {
            opacity: {
                from: 0
            },

            y: {
                from: -35
            },

            scale: {
                from: 0.95
            },

            duration: 900
        })

        .add(
            ".logo",
            {
                opacity: {
                    from: 0
                },

                x: {
                    from: -20
                },

                duration: 650
            },
            180
        )

        .add(
            ".nav-link",
            {
                opacity: {
                    from: 0
                },

                y: {
                    from: -15
                },

                delay: stagger(65),

                duration: 580
            },
            250
        )

        .add(
            ".contact-button",
            {
                opacity: {
                    from: 0
                },

                x: {
                    from: 20
                },

                duration: 650
            },
            380
        );

    animate(".series-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        duration: 700,
        delay: 420,
        ease: "outExpo"
    });

    animate(".project-label", {
        opacity: {
            from: 0
        },

        y: {
            from: 18
        },

        duration: 700,
        delay: 530,
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
        delay: 620,
        ease: "outExpo"
    });

    animate(".hero-content > p", {
        opacity: {
            from: 0
        },

        y: {
            from: 28
        },

        duration: 800,
        delay: 810,
        ease: "outExpo"
    });

    animate(".explore-button", {
        opacity: {
            from: 0
        },

        scale: {
            from: 0.8
        },

        duration: 700,
        delay: 940,
        ease: "outBack"
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

    animate(".logo-symbol", {
        rotate: [
            {
                to: 8,
                duration: 1800
            },
            {
                to: -8,
                duration: 1800
            }
        ],

        y: [
            {
                to: -2,
                duration: 1800
            },
            {
                to: 2,
                duration: 1800
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".contact-arrow", {
        rotate: [
            {
                to: 10,
                duration: 1200
            },
            {
                to: -5,
                duration: 1200
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
                to: 90,
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
                to: -130,
                duration: 8500
            },
            {
                to: 40,
                duration: 8500
            }
        ],

        y: [
            {
                to: -85,
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

navLinks.forEach((link) => {
    link.addEventListener("pointermove", animateMagneticLink);
    link.addEventListener("pointerleave", resetMagneticLink);

    link.addEventListener("click", () => {
        setActiveSection(link.dataset.section);
    });
});

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setActiveSection(link.dataset.section);
        closeMobileMenu();
    });
});

menuToggle.addEventListener("click", toggleMobileMenu);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenuOpen) {
        closeMobileMenu();
    }
});

window.addEventListener("scroll", updateNavbarOnScroll, {
    passive: true
});

window.addEventListener("resize", () => {
    const activeLink =
        navLinks.find(
            link => link.dataset.section === activeSection
        );

    moveIndicator(activeLink, true);

    if (window.innerWidth > 980 && mobileMenuOpen) {
        mobileMenuOpen = false;
        mobileMenuAnimating = false;

        mobilePanel.classList.remove("is-open");
        mobilePanel.removeAttribute("style");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
    }
});

playIntro();
startAmbientAnimations();
updateNavbarOnScroll();

requestAnimationFrame(() => {
    const activeLink =
        document.querySelector(".nav-link.active");

    moveIndicator(activeLink, true);
});