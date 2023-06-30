import { storeToRefs } from "pinia"
import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore())
  const token = useCookie("token")

  if (token.value) {
    authenticated.value = true
  }

  if (token.value && to?.name === "login") {
    console.log("Token w value: ", token.value)
    console.log("Redirecting")
    return navigateTo("/")
  }

  if (!token.value && to?.name !== "login") {
    console.log("Token w/o value: ", token.value)
    abortNavigation()
    return navigateTo("/login")
  }
})
