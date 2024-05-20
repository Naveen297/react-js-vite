/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georama: ["Georama", "sans-serif"],
        georamalight: ["GEORAMALight","sans-serif"],
      },
    },
  },
  plugins: [],
}