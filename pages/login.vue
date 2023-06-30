<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useAuthStore } from "~/store/auth"

const { authenticateUser } = useAuthStore()
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const user = ref({
  email: "",
  password: "",
})
const router = useRouter()

const login = async () => {
  await authenticateUser(user.value)
  if (authenticated) {
    router.push("/")
  }
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
