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
  <section class="text-center bg-hero-pattern py-20 bg-cover h-screen">
    <div
      class="bg-green-dark bg-opacity-50 mx-10 px-8 py-10 rounded-lg shadow-lg"
    >
      <h1 class="text-7xl mb-16 text-white drop-shadow-lg font-serif">
        Retreat
      </h1>

      <form @submit.prevent="login" class="flex flex-col">
        <input
          v-model="user.email"
          type="text"
          name="email"
          placeholder="Email"
          required
          class="border border-green rounded-lg px-2 py-1 mb-4 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%] text-gray"
        />
        <input
          v-model="user.password"
          type="password"
          name="password"
          placeholder="Password"
          required
          class="border border-green rounded-lg px-2 py-1 mb-8 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%] text-gray"
        />
        <div class="text-center">
          <button
            class="text-white bg-green py-2 px-6 rounded-xl border border-green-light drop-shadow-lg shadow-inner hover:bg-green-dark hover:border-green"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
