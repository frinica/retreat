<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
})
</script>

<template>
  <section
    class="mx-2 mt-8 px-4 py-6 bg-black rounded-lg bg-opacity-40 shadow-md md:w-1/3 md:justify-self-center"
  >
    <AudioPlayer />
  </section>
</template>
