import mongoose from "mongoose"

const schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String, bcrypt: true },
    name: String,
    role: String,
  },
  { timestamps: true, strict: true, strictQuery: true }
)

export default mongoose.model("User", schema, "user")
