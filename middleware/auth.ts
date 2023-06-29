import { storeToRefs } from "pinia"
import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore())
  const token = useCookie("token")

  if (token.value) {
    authenticated.value = true
  }

  // TODO: Fix middleware to redirect user on successfull login
  console.log("To: ", to, "From: ", from)
  if (token.value && from?.name === "login") {
    console.log("Redirecting")
    return navigateTo("/")
  }

  if (!token.value && to?.name !== "login") {
    abortNavigation()
    return navigateTo("/login")
  }
})
