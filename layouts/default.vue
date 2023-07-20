<script lang="ts" setup>
import { useBackgroundStore } from "~/store/background"

const bgStore = useBackgroundStore()
const bgType = computed(() => bgStore.getBackground)
const bgStyle = ref<string>("bg-gradient-to-b from-gray to-green-darker")

watch(bgType, (newValue) => {
  if (!newValue) {
    bgStyle.value = "bg-gradient-to-b from-gray to-green-darker"
  } else if (newValue) {
    bgStyle.value = `bg-${newValue}-img bg-cover`
  }
})
</script>

<template>
  <div :class="[bgStyle]">
    <Navbar />
    <main class="h-full font-sans text-white pb-10 md:grid">
      <slot />
    </main>
    <footer class="text-white">
      <Footer />
    </footer>
  </div>
</template>
