// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [],
  devtools: { enabled: true },
  runtimeConfig: {
    MDB_URI: process.env.MDB_URI,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
})
