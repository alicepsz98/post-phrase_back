import { authentication } from './../services/authenticator';
import { userData } from './../data/migrations/UserData';
import { hashManager } from './../services/hashManager';
import { generateId } from './../services/idGenerator';
import { CreateUserDTO, UserLoginDTO, UserModel, EditUserDTO, DeleteUserDTO } from './../model/UserModel';

class UserBusiness {
    async signup(user: CreateUserDTO) {
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
            return {
                token, 
                user: body
            }
        } catch (err: any) {
            return err.message
        }
    }
    async login(input: UserLoginDTO) {
        try {   
            if(!input.email || !input.password) {
                throw new Error('Input cannot be empty!')
            }
            const user = await userData.getUserByEmail(input.email)
            if(!user) {
                throw new Error('User not found or wrong password!')
            }
            const passwordIsCorrect: boolean = await hashManager.compare(input.password, user.password)
            if (!passwordIsCorrect) {
                throw new Error('User not found or wrong password!')
            }
            const token: string = authentication.generateToken({ id: user.id })
            return ({ token, user })
        } catch(err: any) {
            return err.message
        }
    }
    async editUser(user: EditUserDTO) {
        try {
            const token = user.token ? authentication.getTokenData(user.token) : null
            if(user.name === '' || user.email === '') {
                throw new Error('Input cannot be empty!')
            } else if (!user.name && !user.email) {
                throw new Error('Change at least one input!')
            } 
            const body: EditUserDTO = {
                id: token?.id,
                name: user.name,
                email: user.email
            }
        await userData.editUser(body)
        } catch(err: any) {
            return err.message
        }
    }
    async deleteUser(user: DeleteUserDTO) {
        try {
            const token = user.token ? authentication.getTokenData(user.token) : null
            if (!user || !user.token) {
                throw new Error('User not found or unauthorized')
            }
            const body = {
                id: token?.id
            }
            await userData.deleteUser(body)
        } catch(err: any) {
            return err.message
        }
    }
} 

export const userBusiness = new UserBusiness()