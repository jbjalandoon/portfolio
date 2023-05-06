/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "320px",
        xs: "425px",
      },
      content: {
        "chevron-right": "url('./src/assets/chevronRight.svg')",
        "chevron-left": "url('./src/assets/chevronLeft.svg')",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(200%)", opacity: "20%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        "card-transition": {
          "0%": {
            transform: "scaleY(0) scaleX(0) translateX(500%)",
          },
          "20%": {
            transform: "translateX(0) scaleX(0) scaleY(100%)",
          },
          "40%": {
            transform: "translateX(0) scaleX(100%) scaleY(100%)",
          },
          "60%": {
            transform: "translateX(0) scaleX(100%) scaleY(100%)",
          },
          "80%": {
            transform: "translateX(0) scaleX(100%) scaleY(100%)",
          },
          "100%": { transform: "scaleY(100%) scaleX(100%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-200%)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        blinking: {
          from: { opacity: "0" },
          to: { opacity: "100%" },
        },
        title: {
          from: { top: "50%" },
          to: { top: "24px", "font-size": "24px", "line-height": "32px" },
        },
        hide: {
          from: { visibility: "visible" },
          to: { visibility: "hidden" },
        },
        enter: {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
        "svg-stroke-fill": {
          from: { "stroke-dashoffset": 880 },
          to: { "stroke-dashoffset": 0 },
        },
        grow: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        countdown: {
          from: { width: "100%" },
          to: { width: "0%" },
        },
      },
      animation: {
        "slide-left": "slide-left 1000ms ease",
        grow: "grow 100ms ease,  grow 100ms ease 2000ms reverse forwards",
        "slide-right": "slide-right 1250ms ease",
        "card-transition": "card-transition 2000ms ease",
        blinking: "blinking 650ms ease infinite",
        hide: "hide 500ms ease",
        title: "title 650ms ease 1 2.8s forwards",
        enter: "enter 650ms ease 1 3.4s forwards",
        "enter-1000": "enter 650ms ease 1 1000ms forwards",
        "enter-instant": "enter 300ms ease forwards",
        "svg-stroke-fill": "svg-stroke-fill 1000ms ease-in-out forwards",
        countdown: "countdown ease 2000ms forwards 100ms",
      },
      boxShadow: {
        project: "0 0 0 1000px inset #0000008f, 0 0 45px 0 inset black;",
      },
      backgroundSize: {
        "100%": "100%",
        "125%": "125%",
      },
      transitionProperty: {
        "background-size": "background-size",
        "stroke-dashoffset": "stroke-dashoffset",
      },
      fontFamily: {
        sans: ["Rubik"],
      },
    },
  },
  plugins: [],
};
