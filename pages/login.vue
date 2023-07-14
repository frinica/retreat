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
  <section class="text-center p-20 bg-hero-pattern bg-cover h-screen">
    <h1 class="text-7xl mb-16 text-white drop-shadow-lg font-serif">Retreat</h1>

    <form @submit.prevent="login" class="flex flex-col">
      <input
        v-model="user.email"
        type="text"
        name="email"
        placeholder="Email"
        required
        class="border border-green rounded-lg px-2 py-1 mb-4 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%]"
      />
      <input
        v-model="user.password"
        type="password"
        name="password"
        placeholder="Password"
        required
        class="border border-green rounded-lg px-2 py-1 mb-8 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%]"
      />
      <div class="text-center">
        <button
          class="text-white bg-green py-2 px-6 rounded-xl border border-green-light drop-shadow-lg shadow-inner hover:bg-green-dark hover:border-green"
        >
          Sign in
        </button>
      </div>
    </form>
  </section>
</template>
