<script lang="ts" setup>
import { useAuthStore } from "../store/auth"
const store = useAuthStore()
const token = store.getToken
</script>
<template>
  <section>
    <AudioPlayerFavs :token="token" />
  </section>
</template>
