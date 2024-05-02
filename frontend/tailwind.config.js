const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1408px",
      "2xl": "1536px",
    },
    colors : {
      primary : '#2E4BAB',
      secondary : '#3A9500',
      tertiaire : '#8E0090',
      ...colors
    },
    extend: {},
  },
  plugins: [],
};