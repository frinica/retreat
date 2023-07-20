<script lang="ts" setup>
import { useAuthStore } from "../store/auth"
definePageMeta({
  middleware: "auth",
})
const store = useAuthStore()
const token = store.getToken
</script>
<template>
  <section
    class="h-screen bg-black mx-2 my-6 p-4 bg-opacity-40 rounded-lg shadow-md md:my-10 md:w-1/3 md:justify-self-center"
  >
    <h2 class="font-serif text-3xl text-center mb-8 mt-4">My Favourites</h2>
    <AudioPlayerFavs :token="token" />
  </section>
</template>
