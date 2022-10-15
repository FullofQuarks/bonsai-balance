/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const customTheme = {
  primary: colors.blue[500],
  'primary-dark': colors.blue[600],
  danger: colors.red[600],
  'danger-dark': colors.red[700],
}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins : {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
  }
}
