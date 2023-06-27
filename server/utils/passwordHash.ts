const bcrypt = require("bcrypt")

export default async function generatePasswordHash(password: String) {
  return await bcrypt.hash(password, 12)
}
