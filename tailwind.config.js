/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryPink: "#F1C6D4",
      primaryYellow: "#FFD966",
      primaryGreen: "#AEDF6F",
      secondaryWhite: "#FFFFFF",
      secondaryRed: "#6C2323",
      secondaryBrown: "#453C3C",
    },
    extend: {},
  },
  plugins: [],
}
