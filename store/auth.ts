import { defineStore } from "pinia"

interface UserPayload {
  email: string
  password: string
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayload) {
      const { data, pending }: any = await useFetch("/api/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: { email, password },
      })
      this.loading = pending

      if (data.value) {
        const token = useCookie("token")
        token.value = data?.value?.token
        this.authenticated = true
      }
    },
    logoutUser() {
      const token = useCookie("token")
      this.authenticated = false
      token.value = null
    },
  },
})
