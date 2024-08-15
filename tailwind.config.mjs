/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      amg: {
        charcoal: "#333333",
        green: "#1abc9c",
        purple: "#563d7c",
        white: "#ffffff",
        yellow: "#ffda23",
      },
      navtext: {
        50: "#FFF",
      },
      yellow: {
        50: "#563d7c", // purple
        100: "#2C699A",
        400: "#16DB93",
        500: "#EFEA5A",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#54478C",
        200: "#2C699A",
        300: "#16DB93",
        400: "#EFEA5A",
        500: "#F1C453",
        600: "#F29E4C",
      }, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
