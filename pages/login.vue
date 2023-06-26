<script setup lang="ts">
const login = ref(true)
</script>

<template>
  <div v-if="login">
    <LoginForm />
    <p>New to Retreat? Sign up <a @click="login = false">here.</a></p>
  </div>
  <div v-else><SignupForm /></div>
</template>
