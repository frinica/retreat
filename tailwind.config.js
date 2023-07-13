/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, ts, vue}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1F431A",
          light: "#33502",
        },
      },
    },
  },
  plugins: [],
}
