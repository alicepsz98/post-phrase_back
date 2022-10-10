import jwt from 'jsonwebtoken'

export type AuthenticationData = {
  id: string
}

class Authentication {
  generateToken(payload: AuthenticationData): string {
    return jwt.sign(
      { id: payload.id },
      process.env.JWT_KEY as string,
      { expiresIn: process.env.EXPIRES_IN }
    )
  }
  getTokenData(token: string): AuthenticationData {
    return jwt.verify(
      token, 
      process.env.JWT_KEY as string
    ) as AuthenticationData
  }
}

export const authentication = new Authentication()