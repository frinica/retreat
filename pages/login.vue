<script setup lang="ts">
import { ref } from "vue"

const user = ref({
  email: "",
  password: "",
})

const login = async () => {
  // LOGIN
}
</script>

<template>
  <h2>Sign in</h2>

  <form @submit.prevent="login">
    <label for="email">Email</label>
    <input v-model="user.email" type="text" name="email" required />
    <label for="password">Password</label>
    <input v-model="user.password" type="password" name="password" required />
    <button>Sign in</button>
  </form>
</template>
