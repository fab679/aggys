const {
  amber,
  violet,
  blueGray,
  coolGray,
  fuchsia,
  rose,
  cyan,
  teal,
} = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        flower: ["Indie Flower"],
        gloria: ["Gloria Hallelujah"],
        sue: ["Sue Ellen Francisco"],
        annie: ["Annie Use Your Telescope"],
        nunito: ["Nunito"],
        yomogi: ["Yomogi"],
      },
      colors: {
        amber,
        violet,
        blueGray,
        coolGray,
        fuchsia,
        rose,
        cyan,
        teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
