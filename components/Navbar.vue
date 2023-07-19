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
  <header
    v-if="authenticated"
    class="bg-green-dark text-white p-2 shadow-custom"
  >
    <nav class="relative">
      <div class="flex justify-between">
        <div class="w-8"></div>
        <h1 class="font-serif text-3xl">
          <nuxt-link to="/">Retreat</nuxt-link>
        </h1>
        <button
          class="text-white w-10 h-10 relative focus:outline-none"
          @click="showMenu = !showMenu"
        >
          <span class="sr-only">Open main menu</span>
          <div
            class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'rotate-45': showMenu, ' -translate-y-1.5': !showMenu }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ 'opacity-0': showMenu }"
            ></span>
            <span
              aria-hidden="true"
              class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
              :class="{ '-rotate-45': showMenu, ' translate-y-1.5': !showMenu }"
            ></span>
          </div>
        </button>
      </div>
      <transition name="slide-fade">
        <div
          v-if="showMenu"
          class="absolute right-0 bg-gradient-to-b from-black to-green-dark flex flex-col gap-4 text-end p-4 z-10 mt-4 -mr-2 w-[50%] h-screen shadow-lg rounded-b-lg"
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
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
