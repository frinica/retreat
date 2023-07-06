import { defineStore } from "pinia"

interface UserPayload {
  email: string
  password: string
}

interface TokenData {
  id: string
  name: string
  email: string
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    token: null as TokenData | null,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayload) {
      const { data, pending }: any = await useFetch("/api/users/signin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: { email, password },
      })
      this.loading = pending

      if (data.value) {
        const token = useCookie("token")
        token.value = data?.value
        this.authenticated = true
        this.token = token?.value as TokenData | null
      }
    },
    logoutUser() {
      const token = useCookie("token")
      this.authenticated = false
      token.value = null
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
})
