/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryPink: "#F1C6D4",
        primaryYellow: "#FFD966",
        primaryGreen: "#AEDF6F",
        secondaryWhite: "#FFFFFF",
        secondaryRed: "#6C2323",
        secondaryBrown: "#453C3C",
        secondaryBlack: "#000",
      },
      fontFamily: {
        sans: ["var(----font-publicSans)"],
        title: ["Bodoni Moda", "sans-serif"],
      },
    },
  },
  plugins: [],
}
