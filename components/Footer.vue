<script lang="ts" setup>
import { useBackgroundStore } from "~/store/background"
const bgStore = useBackgroundStore()
const bgType = computed(() => bgStore.getBackground)
const bgStyle = ref<string>("bg-green-dark")

watch(bgType, (newValue) => {
  if (!newValue) {
    bgStyle.value = "bg-green-dark"
  } else if (newValue) {
    bgStyle.value = `bg-${newValue}`
  }
})
</script>
<template>
  <section :class="[bgStyle]" class="p-6 text-center font-sans">
    <p>&copy; <span class="text-sm">frinica@github 2023</span></p>
  </section>
</template>
