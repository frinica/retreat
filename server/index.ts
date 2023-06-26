import mongoose from "mongoose"

const config = useRuntimeConfig()

export default async () => {
  try {
    await mongoose.connect(config.MDB_URI)
    console.log("Connected to DB.")
  } catch (error) {
    console.error("DB Connection failed.", error)
  }
}
