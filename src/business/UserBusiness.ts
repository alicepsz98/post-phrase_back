import { authentication } from './../services/authenticator';
import { userData } from './../data/migrations/UserData';
import { hashManager } from './../services/hashManager';
import { generateId } from './../services/idGenerator';
import { CreateUserInput, UserModel } from './../model/UserModel';

class UserBusiness {
    async signup(user: CreateUserInput) {
        try {
            if(
                !user.name ||
                !user.email || 
                !user.password 
            ) {
                throw new Error('Input cannot be empty!')
            }
            const id: string = generateId()
            const cypherPassword = await hashManager.hash(user.password)
            const body: UserModel = {
                id,
                name: user.name,
                email: user.email,
                password: cypherPassword,
                createdAt: new Date(Date.now())
            }
            await userData.signup(body)
            const token = authentication.generateToken({ id })
            return token
        } catch (err: any) {
            return err.message
        }
    }
} 

export const userBusiness = new UserBusiness()