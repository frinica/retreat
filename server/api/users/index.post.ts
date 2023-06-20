import { users } from "../../dbModels"

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
      console.log(`User with email ${email} already exists`)
      return {
        code: "USER_EXISTS",
        message: "User with the given email already exists.",
      }
    } else {
      console.log("Create user")
      const newUserData = await users.create({
        email,
        password,
        name,
      })

      return {
        id: newUserData._id,
        name: newUserData.name,
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
