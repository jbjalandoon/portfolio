/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(200%)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-200%)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
      },
      animation: {
        "slide-left": "slide-left 1250ms ease",
        "slide-right": "slide-right 1250ms ease",
      },
    },
  },
  plugins: [],
};
