import { users } from "../../dbModels"

export default defineEventHandler(async (event) => {
  //@ts-ignore
  const userId = event.context.params.id

  try {
    console.log("Find user")
    const userData = await users.findOne({
      _id: userId,
    })
    if (userData) {
      console.log("User found")
      return {
        id: userData._id,
        name: userData.name,
      }
    } else {
      console.log("User not found")
      return {
        code: "USER_NOT_FOUND",
        message: `User with id ${userId} doesn't exist.`,
      }
    }
  } catch (error) {
    console.dir(error)
    return {
      code: "ERROR",
      message: "Something went wrong",
    }
  }
})
