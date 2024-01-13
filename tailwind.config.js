/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./image/background.png')",
      },
      fontFamily: {
        'anton': ['font-family: Anton', "sans-serif"],
      },
    },
  },
  plugins: [],
}