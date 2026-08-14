import {
    animate,
    createTimeline,
    stagger,
    spring
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const sidebar =
    document.querySelector(".sidebar");

const collapseButton =
    document.querySelector(".collapse-button");

const collapseArrow =
    document.querySelector(".collapse-arrow");

const navItems =
    [...document.querySelectorAll(".nav-item[data-view]")];

const activeIndicator =
    document.querySelector(".active-indicator");

const dashboardView =
    document.querySelector(".dashboard-view");

const viewTitle =
    document.querySelector(".view-title");

const viewKicker =
    document.querySelector(".view-kicker");

const viewDescription =
    document.querySelector(".view-description");

const mobileMenuButton =
    document.querySelector(".mobile-menu-button");

const mobileBackdrop =
    document.querySelector(".mobile-backdrop");

const brandCopy =
    document.querySelector(".brand-copy");

const profileCopy =
    document.querySelector(".profile-copy");

const profileMore =
    document.querySelector(".profile-more");

const navLabels =
    [...document.querySelectorAll(".nav-label")];

const navMetas =
    [...document.querySelectorAll(".nav-meta")];

const notificationBadge =
    document.querySelector(".notification-badge");

const desktopBreakpoint = 820;

const views = {
    dashboard: {
        kicker: "OVERVIEW",
        title: "Dashboard",
        description:
            "A responsive animated workspace with a dynamic sidebar, active navigation and smooth Anime.js transitions."
    },

    analytics: {
        kicker: "INSIGHTS",
        title: "Analytics",
        description:
            "Track interaction, animation performance and project activity through a clean motion-driven dashboard."
    },

    projects: {
        kicker: "WORKSPACE",
        title: "Projects",
        description:
            "Organize creative experiments, UI components and Anime.js projects from one animated workspace."
    },

    animations: {
        kicker: "MOTION",
        title: "Animations",
        description:
            "Explore reusable motion patterns, interactive effects and modern animation experiments powered by Anime.js."
    },

    messages: {
        kicker: "INBOX",
        title: "Messages",
        description:
            "Keep conversations and project feedback organized inside a smooth interactive interface."
    },

    settings: {
        kicker: "SYSTEM",
        title: "Settings",
        description:
            "Customize your workspace, animation preferences and interface behavior."
    }
};

let isCollapsed = false;
let isSidebarAnimating = false;

let activeView = "dashboard";

let mobileMenuOpen = false;
let mobileAnimating = false;

function getIndicatorTarget(item) {
    const nav =
        item.closest(".sidebar-nav");

    if (!nav) {
        return null;
    }

    const navBounds =
        nav.getBoundingClientRect();

    const itemBounds =
        item.getBoundingClientRect();

    return {
        y:
            itemBounds.top -
            navBounds.top
    };
}

function moveIndicator(item, immediate = false) {
    const target =
        getIndicatorTarget(item);

    if (!target) {
        return;
    }

    animate(activeIndicator, {
        y: target.y,

        duration:
            immediate ? 1 : 620,

        ease:
            immediate
                ? "linear"
                : spring({
                    bounce: 0.28,
                    duration: 620
                })
    });
}

function animateActiveIcon(item) {
    const icon =
        item.querySelector(".nav-icon");

    if (!icon) {
        return;
    }

    animate(icon, {
        scale: [
            {
                to: 0.82,
                duration: 90
            },
            {
                to: 1.24,
                duration: 180
            },
            {
                to: 1,
                duration: 250
            }
        ],

        rotate: [
            {
                to: -7,
                duration: 90
            },
            {
                to: 7,
                duration: 180
            },
            {
                to: 0,
                duration: 250
            }
        ],

        ease: "outBack"
    });
}

function updateView(viewName) {
    const config =
        views[viewName];

    if (!config) {
        return;
    }

    animate(dashboardView, {
        opacity: 0,
        y: 22,
        scale: 0.985,

        duration: 220,
        ease: "inQuad",

        onComplete: () => {
            viewKicker.textContent =
                config.kicker;

            viewTitle.textContent =
                config.title;

            viewDescription.textContent =
                config.description;

            animate(dashboardView, {
                opacity: 1,
                y: 0,
                scale: 1,

                duration: 620,
                ease: "outExpo"
            });

            animate(".stat-card", {
                opacity: {
                    from: 0
                },

                y: {
                    from: 18
                },

                delay: stagger(70),

                duration: 560,
                ease: "outExpo"
            });

            animate(
                ".activity-card, .focus-card",
                {
                    opacity: {
                        from: 0
                    },

                    y: {
                        from: 22
                    },

                    delay: stagger(90),

                    duration: 650,
                    ease: "outExpo"
                }
            );
        }
    });
}

function setActiveView(item) {
    const viewName =
        item.dataset.view;

    if (!viewName) {
        return;
    }

    activeView = viewName;

    navItems.forEach((navItem) => {
        navItem.classList.toggle(
            "active",
            navItem === item
        );
    });

    const sidebarNavItem =
        item.closest(".sidebar-nav");

    if (sidebarNavItem) {
        moveIndicator(item);
    }

    animateActiveIcon(item);
    updateView(viewName);

    if (
        window.innerWidth <= desktopBreakpoint &&
        mobileMenuOpen
    ) {
        closeMobileSidebar();
    }
}

function collapseSidebar() {
    if (
        isSidebarAnimating ||
        isCollapsed ||
        window.innerWidth <= desktopBreakpoint
    ) {
        return;
    }

    isSidebarAnimating = true;
    isCollapsed = true;

    collapseButton.setAttribute(
        "aria-expanded",
        "false"
    );

    collapseButton.setAttribute(
        "aria-label",
        "Expand sidebar"
    );

    const timeline =
        createTimeline({
            defaults: {
                ease: "outExpo"
            },

            onComplete: () => {
                sidebar.classList.add(
                    "is-collapsed"
                );

                isSidebarAnimating = false;

                const activeItem =
                    document.querySelector(
                        ".sidebar-nav .nav-item.active"
                    );

                if (activeItem) {
                    moveIndicator(
                        activeItem,
                        true
                    );
                }
            }
        });

    timeline
        .add(
            navLabels,
            {
                opacity: {
                    from: 1,
                    to: 0
                },

                x: {
                    from: 0,
                    to: -14
                },

                duration: 260
            },
            0
        )

        .add(
            navMetas,
            {
                opacity: {
                    from: 1,
                    to: 0
                },

                duration: 190
            },
            0
        )

        .add(
            brandCopy,
            {
                opacity: {
                    from: 1,
                    to: 0
                },

                x: {
                    from: 0,
                    to: -14
                },

                duration: 240
            },
            0
        )

        .add(
            profileCopy,
            {
                opacity: {
                    from: 1,
                    to: 0
                },

                x: {
                    from: 0,
                    to: -14
                },

                duration: 240
            },
            0
        )

        .add(
            profileMore,
            {
                opacity: {
                    from: 1,
                    to: 0
                },

                duration: 180
            },
            0
        )

        .add(
            sidebar,
            {
                width: 92,
                flexBasis: 92,

                duration: 650
            },
            130
        );

    animate(collapseArrow, {
        rotate: 180,

        duration: 520,
        ease: "outExpo"
    });
}

function expandSidebar() {
    if (
        isSidebarAnimating ||
        !isCollapsed ||
        window.innerWidth <= desktopBreakpoint
    ) {
        return;
    }

    isSidebarAnimating = true;
    isCollapsed = false;

    sidebar.classList.remove(
        "is-collapsed"
    );

    collapseButton.setAttribute(
        "aria-expanded",
        "true"
    );

    collapseButton.setAttribute(
        "aria-label",
        "Collapse sidebar"
    );

    const timeline =
        createTimeline({
            defaults: {
                ease: "outExpo"
            },

            onComplete: () => {
                isSidebarAnimating = false;

                const activeItem =
                    document.querySelector(
                        ".sidebar-nav .nav-item.active"
                    );

                if (activeItem) {
                    moveIndicator(
                        activeItem,
                        true
                    );
                }
            }
        });

    timeline
        .add(
            sidebar,
            {
                width: 290,
                flexBasis: 290,

                duration: 650
            },
            0
        )

        .add(
            brandCopy,
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                x: {
                    from: -14,
                    to: 0
                },

                duration: 420
            },
            270
        )

        .add(
            navLabels,
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                x: {
                    from: -12,
                    to: 0
                },

                delay: stagger(45),

                duration: 420
            },
            240
        )

        .add(
            navMetas,
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                duration: 330
            },
            300
        )

        .add(
            profileCopy,
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                x: {
                    from: -12,
                    to: 0
                },

                duration: 400
            },
            360
        )

        .add(
            profileMore,
            {
                opacity: {
                    from: 0,
                    to: 1
                },

                duration: 320
            },
            390
        );

    animate(collapseArrow, {
        rotate: 0,

        duration: 520,
        ease: "outExpo"
    });
}

function toggleSidebar() {
    if (isCollapsed) {
        expandSidebar();
    } else {
        collapseSidebar();
    }
}

function openMobileSidebar() {
    if (
        mobileAnimating ||
        mobileMenuOpen ||
        window.innerWidth > desktopBreakpoint
    ) {
        return;
    }

    mobileAnimating = true;
    mobileMenuOpen = true;

    mobileBackdrop.classList.add(
        "is-visible"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Close sidebar"
    );

    animate(mobileBackdrop, {
        opacity: {
            from: 0,
            to: 1
        },

        duration: 380,
        ease: "outQuad"
    });

    animate(sidebar, {
        x: [
            {
                from: "-105%",
                to: "0%"
            }
        ],

        duration: 650,

        ease: spring({
            bounce: 0.18,
            duration: 650
        }),

        onComplete: () => {
            mobileAnimating = false;
        }
    });

    animate(".sidebar .nav-item", {
        opacity: {
            from: 0
        },

        x: {
            from: -25
        },

        delay: stagger(
            55,
            {
                start: 140
            }
        ),

        duration: 480,
        ease: "outExpo"
    });

    animate(
        ".mobile-menu-button span:first-child",
        {
            y: 4,
            rotate: 45,

            duration: 360,
            ease: "outExpo"
        }
    );

    animate(
        ".mobile-menu-button span:last-child",
        {
            y: -4,
            rotate: -45,

            duration: 360,
            ease: "outExpo"
        }
    );
}

function closeMobileSidebar() {
    if (
        mobileAnimating ||
        !mobileMenuOpen ||
        window.innerWidth > desktopBreakpoint
    ) {
        return;
    }

    mobileAnimating = true;
    mobileMenuOpen = false;

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    mobileMenuButton.setAttribute(
        "aria-label",
        "Open sidebar"
    );

    animate(sidebar, {
        x: "-105%",

        duration: 460,
        ease: "inOutExpo",

        onComplete: () => {
            mobileAnimating = false;
        }
    });

    animate(mobileBackdrop, {
        opacity: 0,

        duration: 320,
        delay: 90,

        ease: "outQuad",

        onComplete: () => {
            mobileBackdrop.classList.remove(
                "is-visible"
            );
        }
    });

    animate(
        ".mobile-menu-button span:first-child",
        {
            y: 0,
            rotate: 0,

            duration: 360,
            ease: "outExpo"
        }
    );

    animate(
        ".mobile-menu-button span:last-child",
        {
            y: 0,
            rotate: 0,

            duration: 360,
            ease: "outExpo"
        }
    );
}

function playIntro() {
    animate(".sidebar", {
        opacity: {
            from: 0
        },

        x: {
            from: -40
        },

        duration: 900,
        ease: "outExpo"
    });

    animate(".brand", {
        opacity: {
            from: 0
        },

        y: {
            from: -15
        },

        duration: 620,
        delay: 180,
        ease: "outExpo"
    });

    animate(".sidebar-nav .nav-item", {
        opacity: {
            from: 0
        },

        x: {
            from: -22
        },

        delay: stagger(
            70,
            {
                start: 280
            }
        ),

        duration: 560,
        ease: "outExpo"
    });

    animate(".profile", {
        opacity: {
            from: 0
        },

        y: {
            from: 20
        },

        duration: 600,
        delay: 700,
        ease: "outExpo"
    });

    animate(".topbar", {
        opacity: {
            from: 0
        },

        y: {
            from: -18
        },

        duration: 700,
        delay: 220,
        ease: "outExpo"
    });

    animate(".view-heading", {
        opacity: {
            from: 0
        },

        y: {
            from: 32
        },

        duration: 850,
        delay: 390,
        ease: "outExpo"
    });

    animate(".stat-card", {
        opacity: {
            from: 0
        },

        y: {
            from: 28
        },

        delay: stagger(
            85,
            {
                start: 560
            }
        ),

        duration: 650,
        ease: "outExpo"
    });

    animate(
        ".activity-card, .focus-card",
        {
            opacity: {
                from: 0
            },

            y: {
                from: 28
            },

            delay: stagger(
                100,
                {
                    start: 880
                }
            ),

            duration: 700,
            ease: "outExpo"
        }
    );

    animate(".chart-line", {
        scaleX: [
            {
                from: 0,
                to: 1
            }
        ],

        duration: 1050,
        delay: 1150,
        ease: "inOutExpo"
    });

    animate(".chart-point", {
        opacity: {
            from: 0,
            to: 1
        },

        scale: {
            from: 0,
            to: 1
        },

        delay: stagger(
            110,
            {
                start: 1320
            }
        ),

        duration: 450,
        ease: "outBack"
    });
}

function startAmbientAnimations() {
    animate(".brand-mark", {
        rotate: [
            {
                to: 4,
                duration: 1700
            },
            {
                to: -4,
                duration: 1700
            }
        ],

        y: [
            {
                to: -2,
                duration: 1700
            },
            {
                to: 2,
                duration: 1700
            }
        ],

        loop: true,
        alternate: true,

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

    animate(notificationBadge, {
        scale: [
            {
                to: 1.14,
                duration: 900
            },
            {
                to: 1,
                duration: 900
            }
        ],

        boxShadow: [
            {
                to: "0 0 24px rgba(236,72,153,.38)",
                duration: 900
            },
            {
                to: "0 0 10px rgba(236,72,153,.15)",
                duration: 900
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });

    animate(".ring-one", {
        rotate: 360,

        duration: 15000,
        loop: true,

        ease: "linear"
    });

    animate(".ring-two", {
        rotate: -360,

        duration: 10000,
        loop: true,

        ease: "linear"
    });

    animate(".focus-core", {
        y: [
            {
                to: -6,
                duration: 1600
            },
            {
                to: 6,
                duration: 1600
            }
        ],

        rotate: [
            {
                to: 3,
                duration: 1600
            },
            {
                to: -3,
                duration: 1600
            }
        ],

        loop: true,
        alternate: true,

        ease: "inOutSine"
    });
}

function handleNavHover(event) {
    const item =
        event.currentTarget;

    const bounds =
        item.getBoundingClientRect();

    const offsetX =
        event.clientX -
        (bounds.left + bounds.width / 2);

    const offsetY =
        event.clientY -
        (bounds.top + bounds.height / 2);

    animate(item, {
        x: offsetX * 0.04,
        y: offsetY * 0.08,

        duration: 240,
        ease: "outExpo"
    });
}

function resetNavHover(event) {
    animate(
        event.currentTarget,
        {
            x: 0,
            y: 0,

            duration: 520,

            ease: spring({
                bounce: 0.2,
                duration: 520
            })
        }
    );
}

navItems.forEach((item) => {
    item.addEventListener(
        "click",
        () => setActiveView(item)
    );

    item.addEventListener(
        "pointermove",
        handleNavHover
    );

    item.addEventListener(
        "pointerleave",
        resetNavHover
    );
});

collapseButton.addEventListener(
    "click",
    toggleSidebar
);

mobileMenuButton.addEventListener(
    "click",
    () => {
        if (mobileMenuOpen) {
            closeMobileSidebar();
        } else {
            openMobileSidebar();
        }
    }
);

mobileBackdrop.addEventListener(
    "click",
    closeMobileSidebar
);

document.addEventListener(
    "keydown",
    (event) => {
        if (
            event.key === "Escape" &&
            mobileMenuOpen
        ) {
            closeMobileSidebar();
        }
    }
);

window.addEventListener(
    "resize",
    () => {
        if (
            window.innerWidth >
            desktopBreakpoint
        ) {
            mobileMenuOpen = false;
            mobileAnimating = false;

            mobileBackdrop.classList.remove(
                "is-visible"
            );

            mobileBackdrop.removeAttribute(
                "style"
            );

            sidebar.style.transform = "";

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            const activeItem =
                document.querySelector(
                    ".sidebar-nav .nav-item.active"
                );

            if (activeItem) {
                moveIndicator(
                    activeItem,
                    true
                );
            }
        }
    }
);

playIntro();
startAmbientAnimations();

requestAnimationFrame(() => {
    const activeItem =
        document.querySelector(
            ".sidebar-nav .nav-item.active"
        );

    if (activeItem) {
        moveIndicator(
            activeItem,
            true
        );
    }
});