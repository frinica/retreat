import { NuxtAuthHandler } from "#auth"
import CredentialsProvider from "next-auth/providers/credentials"
//import { ofetch } from "ofetch"
import { users } from "../../dbModels"

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.AUTH_SECRET,
  pages: { signIn: "/login" },
  providers: [
    //@ts-expect-error
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        console.log("Credentials: ", credentials)
        const { email, password } = credentials
        if (!email || !password) {
          return {
            code: "CREDENTIALS_REQUIRED",
            message: "Both email and password are required.",
          }
        }

        try {
          const userData = await users.findOne({
            email: email.toLowerCase(),
          })
          if (userData) {
            const isPasswordValid = userData.password === password

            if (isPasswordValid) {
              console.log("Password valid")
              /* return {
                id: userData._id,
                name: userData.name,
                email: userData.email,
              } */
              return userData
            } else {
              console.log("Password not valid")
              return {
                code: "USER_NOT_FOUND",
                message: "The user doesn't exist",
              }
            }
          } else {
            console.log("User not found")
            return {
              code: "USER_NOT_FOUND",
              message: "The user doesn't exist",
            }
          }
        } catch (error) {
          console.dir(error)
          return {
            code: "ERROR",
            message: "Something went wrong.",
          }
        }
      },
    }),
  ],
  debug: true,
})
