// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],
  runtimeConfig: {
    MDB_URI: process.env.MDB_URI,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
})
