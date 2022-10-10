import * as bcrypt from 'bcryptjs'

class HashManager {
  async hash(plainText: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    return bcrypt.hash(plainText, salt)
  }
  async compare(plainText: string, cypherText: string): Promise<boolean> {
    return await bcrypt.compare(plainText, cypherText)
  }
}

export const hashManager = new HashManager()