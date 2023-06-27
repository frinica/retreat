import * as bcrypt from "bcrypt"

/* export default async function generatePasswordHash(password: string) {
  return await bcrypt.hash(password, 10)
} */

function passwordHash() {
  return {
    hashPassword: async (password: string) => {
      return await bcrypt.hash(password, 10)
    },

    comparePassword: async (password: string, hash: string) => {
      const result = await bcrypt.compare(password, hash)
      return result
    },
  }
}

export { passwordHash }
