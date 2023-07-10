import mongoose, { mongo } from "mongoose"

const schema = new mongoose.Schema(
  {
    uid: String,
    sound_id: String,
    sound_type: String,
  },
  { timestamps: true }
)

export default mongoose.model("List", schema, "list")
