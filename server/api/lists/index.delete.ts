import { lists } from "../../dbModels"

interface ReqBody {
  uid: string
  sound_id: string
}

export default defineEventHandler(async (event) => {
  const { uid, sound_id } = await readBody<ReqBody>(event)
  try {
    await lists.deleteOne({ uid: uid, sound_id: sound_id })
    return {
      code: 200,
      message: "List entry deleted successfully",
    }
  } catch (error) {
    console.dir(error)
    return {
      code: "ERROR",
      message: "Something went wrong",
    }
  }
})
