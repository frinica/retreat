<script lang="ts" setup>
interface UserData {
  id: string
  email: string
  name: string
  role: string
}
interface RegError {
  code: string
  message: string
}

const user = ref({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
})
const errorMsg = ref<string | null>(null)

const validatePassword = () => {
  if (user.value.passwordConfirm !== user.value.password) {
    return (errorMsg.value = "Password does not match")
  } else if (user.value.passwordConfirm === user.value.password) {
    return (errorMsg.value = null)
  }
}

const register = async () => {
  validatePassword()
  if (errorMsg.value) {
    return
  } else {
    const { email, password, name } = user.value
    const role = "user"

    const res = await useFetch<UserData | RegError>("/api/users", {
      method: "post",
      headers: { "Content-Type": "application-json" },
      body: { email, password, name, role },
    }).then((response) => response.data)

    if (res?.value?.hasOwnProperty("message")) {
      return (errorMsg.value = res.value.message)
    } else {
      location.reload()
    }
  }
}
</script>

<template>
  <form @submit.prevent="register" class="flex flex-col">
    <input
      v-model="user.name"
      type="text"
      name="name"
      placeholder="Name or Username"
      required
      class="border border-green rounded-lg px-2 py-1 mb-4 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%] text-gray"
    />
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
      minlength="8"
      maxlength="20"
      class="border border-green rounded-lg px-2 py-1 mb-4 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%] text-gray"
    />
    <input
      v-model="user.passwordConfirm"
      type="password"
      name="passwordConfirm"
      placeholder="Confirm password"
      class="border border-green rounded-lg px-2 py-1 mb-8 drop-shadow-lg opacity-80 focus:outline-green md:self-center md:w-[33%] text-gray"
    />
    <p v-if="errorMsg" class="text-white -mt-6 text-sm self-start mb-6">
      {{ errorMsg }}
    </p>
    <button
      class="text-white bg-green py-2 px-6 rounded-xl border border-green-light drop-shadow-lg shadow-inner hover:bg-green-dark hover:border-green w-[50%] self-center"
    >
      Sign up
    </button>
  </form>
</template>
