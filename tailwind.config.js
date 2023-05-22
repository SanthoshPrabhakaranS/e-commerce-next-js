/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#005B5C",
      secondary: "#F9F9F9",
      white: "#ffff",
      black: "#000",
      grey: "#D9D9D9",
      yellow: "#FFC107",
      red: "#ff0000"
    },
    fontFamily: {
      playFair: ["Playfair Display", "serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "0px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1534px",
    },
  },
  plugins: [],
});