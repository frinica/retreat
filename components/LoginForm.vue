<script setup lang="ts">
const { signIn } = useAuth()
const email = ref("")
const password = ref("")

const logIn = async (type: string) => {
  console.log(type)
  signIn(type)
}
</script>

<template>
  <div>
    <h2>SIGN IN</h2>
    <form
      @submit.prevent="($event) => signIn('credentials', { email, password })"
    >
      <div>
        <label for="email"
          >Email <input type="text" name="email" v-model="email" />
        </label>
      </div>
      <div>
        <label>Password </label>
        <input type="password" name="password" v-model="password" />
      </div>
      <button>SIGN IN</button>
    </form>
  </div>
</template>
