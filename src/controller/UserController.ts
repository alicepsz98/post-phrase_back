import { CreateUserInput, UserLogin } from './../model/UserModel';
import { Request, Response } from 'express'
import { userBusiness } from './../business/UserBusiness';

class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password }: CreateUserInput = req.body
            const data = await userBusiness.signup({ name, email, password })
            res.status(201).send(data)
        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }
    async login(req: Request, res: Response) {
        try {
            const { email, password }: UserLogin = req.body
            const data = await userBusiness.login({ email, password })
            res.status(201).send(data)
        } catch (err: any) {
            console.error(err.message)
        }
    } 
} 

export const userController = new UserController()