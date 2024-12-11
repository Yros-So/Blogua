const { CiLight } = require('react-icons/ci');

/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    './pages/**/*.{html,js}',
    "./templates/**/*.html",
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx',
     "./static/src/**/*.js",
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1535D8",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
}