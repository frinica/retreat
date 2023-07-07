<script lang="ts" setup>
import { useAuthStore } from "../store/auth"

const store = useAuthStore()
const token = store.getToken

const listEntries = await useFetch(`/api/lists/${token?.id}`, {
  method: "get",
  headers: { "Content-Type": "application/json" },
})

const playSound = (track: any) => {
  console.log(track)
}
</script>

<template>
  <h2 v-if="token?.name">Hello {{ token?.name }}!</h2>
  <h2 v-else>Hello!</h2>

  <div v-for="entry in listEntries.data.value">
    <button @click="playSound(entry)">Play!</button>
  </div>
</template>
