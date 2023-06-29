<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useAuthStore } from "~/store/auth"

const router = useRouter()

const { logoutUser } = useAuthStore()
const { authenticated } = storeToRefs(useAuthStore())

const logout = () => {
  logoutUser()
  router.push("/login")
}
</script>

<template>
  <div>
    <header>
      <ul>
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
    <main>
      <slot />
    </main>
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>
</template>
