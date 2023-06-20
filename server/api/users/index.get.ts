import { users } from "../../dbModels"

export default defineEventHandler(async (event) => {
  try {
    console.log("Find users")
    const usersData = await users.find()
    return usersData.map((user) => ({
      id: user._id,
      name: user.name,
    }))
  } catch (error) {
    console.dir(error)
    return {
      code: "ERROR",
      message: "Something went wrong.",
    }
  }
})
