<script setup lang="ts">
const { signIn } = useAuth()

const logIn = async (type: string) => {
  signIn(type, { callbackUrl: "http://localhost:3000" })
}
</script>

<template>
  <div>
    <button @click="logIn('Credentials')">SIGN IN</button>
  </div>
</template>
