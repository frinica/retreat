<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
})
</script>

<template>
  <section class="mx-8">
    <AudioPlayer />
  </section>
</template>
