import { lists } from "../../dbModels"

interface List {
  _id: String
  uid: String
  sound_id: String
}

export default defineEventHandler(async (event) => {
  //@ts-ignore
  const uid = event.context.params.id
  try {
    const listEntries = await lists.find({
      uid: uid,
    })
    if (listEntries) {
      return listEntries
    } else {
      return {
        code: "LIST_ENTRIES_NOT_FOUND",
        message: `Could not find list entries for user ID ${uid}`,
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
