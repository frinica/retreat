<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
})
</script>

<template>
  <section class="mx-2 px-4 py-6 bg-black rounded-lg bg-opacity-40 shadow-md">
    <AudioPlayer />
  </section>
</template>
