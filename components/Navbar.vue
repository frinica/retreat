<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useAuthStore } from "../store/auth"
import { useRouter } from "vue-router"

const { authenticated } = storeToRefs(useAuthStore())
const { logoutUser } = useAuthStore()
const router = useRouter()

const logout = () => {
  logoutUser()
  router.push("/login")
}
</script>

<template>
  <header>
    <ul
      v-if="authenticated"
      class="flex justify-center gap-x-5 bg-green text-white p-5 mb-10"
    >
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li>
        <nuxt-link to="/profile">Profile</nuxt-link>
      </li>
      <li v-if="!authenticated"><nuxt-link to="/login">Login</nuxt-link></li>
      <li v-if="authenticated">
        <nuxt-link @click="logout">Logout</nuxt-link>
      </li>
    </ul>
  </header>
</template>
