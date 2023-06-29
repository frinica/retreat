import { users } from "../../dbModels"
import { passwordHash } from "../../utils/passwordHash"

const hash = passwordHash()

interface ReqBody {
  email: string
  password: string
}

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<ReqBody>(event)

  if (!email) {
    return {
      code: "EMAIL_REQUIRED",
      message: "Email is required.",
    }
  }
  if (!password) {
    return {
      code: "PASSWORD_REQUIRED",
      message: "Password is required.",
    }
  }

  try {
    const userData = await users.findOne({
      email: email.toLowerCase(),
    })
    if (userData) {
      const savedHash = userData.password || ""
      const isPasswordValid = await hash.comparePassword(password, savedHash)

      if (isPasswordValid) {
        // TODO: Create session
        return {
          id: userData._id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
        }
      } else {
        console.log("Password is not valid.")
        return {
          code: "USER_NOT_FOUND",
          message: "User doesn't exist",
        }
      }
    } else {
      console.log("User not found.")
      return {
        code: "USER_NOT_FOUND",
        message: "User doens't exist.",
      }
    }
  } catch (error) {
    console.dir(error)
    return {
      code: "ERROR",
      message: "Something went wrong.",
    }
  }
})
