import {
    animate,
    spring
} from "https://cdn.jsdelivr.net/npm/animejs/+esm";

const magneticArea = document.querySelector(".magnetic-area");
const magneticButton = document.querySelector(".magnetic-button");
const buttonContent = document.querySelector(".button-content");
const buttonGlow = document.querySelector(".button-glow");

const magneticStrength = 0.34;
const contentStrength = 0.18;

let currentButtonAnimation = null;
let currentContentAnimation = null;
let currentGlowAnimation = null;

function stopAnimation(animation) {
    if (animation) {
        animation.cancel();
    }
}

function moveButton(event) {
    const areaBounds = magneticArea.getBoundingClientRect();

    const centerX = areaBounds.left + areaBounds.width / 2;
    const centerY = areaBounds.top + areaBounds.height / 2;

    const cursorX = event.clientX - centerX;
    const cursorY = event.clientY - centerY;

    const buttonX = cursorX * magneticStrength;
    const buttonY = cursorY * magneticStrength;

    const contentX = cursorX * contentStrength;
    const contentY = cursorY * contentStrength;

    magneticArea.classList.add("is-active");

    stopAnimation(currentButtonAnimation);
    stopAnimation(currentContentAnimation);
    stopAnimation(currentGlowAnimation);

    currentButtonAnimation = animate(magneticButton, {
        x: buttonX,
        y: buttonY,
        scale: 1.05,

        duration: 260,
        ease: "outExpo"
    });

    currentContentAnimation = animate(buttonContent, {
        x: contentX,
        y: contentY,

        duration: 300,
        ease: "outExpo"
    });

    currentGlowAnimation = animate(buttonGlow, {
        x: contentX * 1.8,
        y: contentY * 1.8,

        opacity: 1,
        scale: 1.1,

        duration: 280,
        ease: "outExpo"
    });
}

function resetButton() {
    magneticArea.classList.remove("is-active");

    stopAnimation(currentButtonAnimation);
    stopAnimation(currentContentAnimation);
    stopAnimation(currentGlowAnimation);

    currentButtonAnimation = animate(magneticButton, {
        x: 0,
        y: 0,
        scale: 1,

        ease: spring({
            bounce: 0.45,
            duration: 700
        })
    });

    currentContentAnimation = animate(buttonContent, {
        x: 0,
        y: 0,

        ease: spring({
            bounce: 0.5,
            duration: 760
        })
    });

    currentGlowAnimation = animate(buttonGlow, {
        x: 0,
        y: 0,

        opacity: 0,
        scale: 0.7,

        duration: 350,
        ease: "outQuad"
    });
}

function playClickAnimation() {
    animate(magneticButton, {
        scale: [
            {
                to: 0.92,
                duration: 100,
                ease: "inQuad"
            },
            {
                to: 1.08,
                duration: 220,
                ease: "outBack"
            },
            {
                to: 1,
                duration: 280,
                ease: "outExpo"
            }
        ]
    });

    animate(".button-arrow", {
        x: [
            {
                to: 8,
                duration: 120
            },
            {
                to: 0,
                duration: 280
            }
        ],

        rotate: [
            {
                to: -12,
                duration: 120
            },
            {
                to: 0,
                duration: 280
            }
        ],

        ease: "outExpo"
    });
}

magneticArea.addEventListener("pointermove", moveButton);
magneticArea.addEventListener("pointerleave", resetButton);
magneticButton.addEventListener("click", playClickAnimation);