/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
          to: { top: "24px", "font-size": "30px", "line-height": "36px" },
        },
        hide: {
          from: { visibility: "visible" },
          to: { visibility: "hidden" },
        },
        enter: {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
      },
      animation: {
        "slide-left": "slide-left 1000ms ease",
        "slide-right": "slide-right 1250ms ease",
        "card-transition": "card-transition 2000ms ease",
        blinking: "blinking 650ms ease infinite",
        hide: "hide 500ms ease",
        title: "title 650ms ease 1 2.8s forwards",
        enter: "enter 650ms ease 1 3.4s forwards",
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
      },
      fontFamily: {
        sans: ["Rubik"],
      },
    },
  },
  plugins: [],
};
