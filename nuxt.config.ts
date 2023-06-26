// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@sidebase/nuxt-auth"],
  devtools: { enabled: true },
  runtimeConfig: {
    MDB_URI: process.env.MDB_URI,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
})
