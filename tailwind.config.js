/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [   
  './public/index.html',
  './src/**/*.{html,js}',
],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: colors.green,
        linkedin: "#2867B2",
        github: "#211F1F",
        dev: "#0a0a0a",
        facebook: "#3B5998",
        twitter: "#1DA1F2",
        google: "#DB4437",
        light: colors.white,
        dark: colors.teal,
      },
    },
  },
  plugins: [],
}