/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-fire-img",
    "bg-forest-img",
    "bg-night-img",
    "bg-ocean-img",
    "bg-rain-img",
    "bg-thunder-img",
    "bg-tropical-img",
    "bg-underwater-img",
    "bg-fire",
    "bg-forest",
    "bg-night",
    "bg-ocean",
    "bg-rain",
    "bg-thunder",
    "bg-tropical",
    "bg-underwater",
  ],
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

        // Audioplayer type colours
        fire: "#BD4400",
        forest: "#1B3817",
        night: "#072B56",
        ocean: "#5287CF",
        rain: "#358192",
        thunder: "#423068",
        tropical: "#D24B2B",
        underwater: "#003E60",
      },
      backgroundImage: {
        "hero-pattern": "url('~/assets/images/leaves-and-rain.jpg')",
        "fire-img": "url(~/assets/images/fire.jpg",
        "forest-img": "url(~/assets/images/forest.jpg)",
        "night-img": "url(~/assets/images/night.jpg)",
        "ocean-img": "url(~/assets/images/ocean.jpg)",
        "rain-img": "url(~/assets/images/rain.jpg)",
        "thunder-img": "url(~/assets/images/thunder.jpg)",
        "tropical-img": "url(~/assets/images/tropical.jpg)",
        "underwater-img": "url(~/assets/images/underwater.jpg)",
      },
    },
  },
  plugins: [],
}
