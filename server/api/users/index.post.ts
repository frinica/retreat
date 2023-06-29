import { users } from "../../dbModels"
import { passwordHash } from "../../utils/passwordHash"

const hash = passwordHash()

interface ReqBody {
  email: string
  password: string
  name: string
}

export default defineEventHandler(async (event) => {
  const { email, password, name } = await readBody<ReqBody>(event)

  try {
    const userData = await users.findOne({
      email,
    })
    if (userData) {
      return {
        code: "USER_EXISTS",
        message: "User with the given email already exists.",
      }
    } else {
      const hashedPassword = await hash.hashPassword(password)
      const newUserData = await users.create({
        email,
        password: hashedPassword,
        name,
        role: "user",
      })

      return {
        id: newUserData._id,
        name: newUserData.name,
        email: newUserData.email,
        role: newUserData.role,
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
