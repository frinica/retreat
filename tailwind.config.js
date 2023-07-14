/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["RedHatDisplay", "Helvetica"],
        serif: ["Lobster", "Georgia"],
      },
      colors: {
        green: {
          light: "#4B7547",
          DEFAULT: "#3E603A",
          dark: "#1B3817",
        },
        gray: {
          DEFAULT: "#272727",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('~/assets/images/leaves-and-rain.jpg')",
      },
    },
  },
  plugins: [],
}
