import { lists } from "../../dbModels"

interface ReqBody {
  uid: string
  sound_id: string
  sound_type: string
}

export default defineEventHandler(async (event) => {
  const { uid, sound_id, sound_type } = await readBody<ReqBody>(event)

  try {
    const data = await lists.findOne({
      uid,
      sound_id,
    })
    if (data) {
      return {
        code: "LIST_ENTRY_EXISTS",
        message: "Entry already exists in the list",
      }
    } else {
      const newListEntry = await lists.create({
        uid,
        sound_id,
        sound_type,
      })

      return {
        id: newListEntry._id,
        uid: newListEntry.uid,
        sound_id: newListEntry.sound_id,
        sound_type: newListEntry.sound_type,
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
