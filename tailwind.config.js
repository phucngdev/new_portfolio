/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4caf50",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      animation: {
        gradient: "gradient 5s ease infinite",
        "move-rotate-1": "move-rotate-1 25s linear infinite",
        "move-rotate-2": "move-rotate-2 25s linear infinite",
        pacse: "pacse 1s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "move-rotate-1": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(20vw, 10vh) rotate(180deg)" },
          "50%": { transform: "translate(15vw, 15vh) rotate(360deg)" },
          "75%": { transform: "translate(40vw, 30vh) rotate(180deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "move-rotate-2": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-20vw, 10vh) rotate(180deg)" },
          "50%": { transform: "translate(30vw, 50vh) rotate(360deg)" },
          "75%": { transform: "translate(10vw, 30vh) rotate(180deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        pacse: {
          "0%": { transform: "scale(1, 1)" },
          "50%": { opacity: 0.5 },
          "100%": { transform: "scale(1.4)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
