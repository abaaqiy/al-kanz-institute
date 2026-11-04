/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        emerald: {
          deep: "#123F35",
          forest: "#1D5B49",
        },
        gold: "#C7A45D",
        ivory: "#FAF8F2",
        charcoal: "#252B29",
        sage: "#E7EEE8",
        slate: "#737C77",
        // Dark mode specific colors
        "emerald-dark": "#0E2A23",
        "surface-dark": "#143B31",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: ["Amiri", "Noto Naskh Arabic", "serif"],
        // Added for the cinematic hero headings
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      borderRadius: {
        card: "14px",
        input: "10px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(18,63,53,.06), 0 8px 24px rgba(18,63,53,.06)",
      },
      maxWidth: {
        container: "1180px",
      },
    },
  },
  plugins: [],
};