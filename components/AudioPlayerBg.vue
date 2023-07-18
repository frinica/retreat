<script lang="ts" setup>
const props = defineProps({
  type: {
    default: "",
    type: String,
  },
})

const typeBgImage = computed(() => {
  if (!props.type) {
    return "bg-green-dark"
  } else {
    return `bg-${props.type}-img`
  }
})

const typeColour = computed(() => {
  if (!props.type) {
    return "bg-green"
  } else {
    return `bg-${props.type}`
  }
})
</script>

<template>
  <div
    :class="typeBgImage"
    class="mb-5 py-6 px-3 rounded-lg h-28 bg-cover bg-bottom shadow-lg"
  >
    <div
      :class="typeColour"
      class="h-full bg-opacity-50 p-2 rounded-lg shadow-md"
    ></div>
  </div>
</template>
