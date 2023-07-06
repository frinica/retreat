<script lang="ts" setup>
import { useAuthStore } from "../store/auth"

const store = useAuthStore()
const token = store.getToken
</script>

<template>
  <h2 v-if="token?.name">Hello {{ token?.name }}!</h2>
  <h2 v-else>Hello!</h2>
</template>
