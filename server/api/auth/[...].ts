import { NuxtAuthHandler } from "#auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { ofetch } from "ofetch"

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.AUTH_SECRET,
  providers: [
    //@ts-expect-error
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const user = await ofetch("/api/users/signin", {
          method: "POST",
          body: { credentials },
        }).catch((error) => error.data)
      },
    }),
  ],
})
