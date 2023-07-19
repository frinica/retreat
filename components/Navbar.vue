<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useAuthStore } from "../store/auth"
import { useRouter } from "vue-router"

const { authenticated } = storeToRefs(useAuthStore())
const { logoutUser } = useAuthStore()
const router = useRouter()
const showMenu = ref(false)

const toggleNav = () => {
  showMenu.value = !showMenu.value
}

const logout = () => {
  logoutUser()
  router.push("/login")
}
</script>

<template>
  <header v-if="authenticated" class="bg-green text-white p-2">
    <nav class="relative">
      <div class="flex justify-between">
        <div class="w-8"></div>
        <h1 class="font-serif text-3xl">Retreat</h1>
        <button @click="toggleNav">
          <ProfileIcon class="cursor-pointer" />
        </button>
      </div>
      <transition name="slide-fade">
        <div
          v-if="showMenu"
          class="absolute right-0 bg-green-dark flex flex-col gap-4 text-end p-4 z-10 mt-2 -mr-2 w-[50%] h-screen"
        >
          <nuxt-link to="/" class="hover:font-semibold">Home</nuxt-link>
          <nuxt-link to="/profile" class="hover:font-semibold"
            >My favourites</nuxt-link
          >
          <nuxt-link @click="logout" class="cursor-pointer hover:font-semibold"
            >Sign out</nuxt-link
          >
        </div>
      </transition>
    </nav>
  </header>
</template>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
