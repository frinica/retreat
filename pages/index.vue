<script lang="ts" setup>
import { useBackgroundStore } from "~/store/background"

definePageMeta({
  middleware: "auth",
})

const { changeBackground } = useBackgroundStore()
const trackType = ref<string | null>(null)

watch(trackType, () => {
  changeBackground(trackType.value)
})
</script>

<template>
  <section
    class="mx-2 mt-8 px-4 py-6 bg-black rounded-lg bg-opacity-40 shadow-md md:w-1/3 md:justify-self-center"
  >
    <AudioPlayer @track-type="trackType = $event" />
  </section>
</template>
