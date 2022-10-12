import { Request, Response } from 'express'
import { userBusiness } from './../business/UserBusiness';

class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password }: any = req.body
            const token = await userBusiness.signup({ name, email, password })
            res.send({ token })
        } catch (err: any) {
            res.status(400).send(err.message)
        }
    }
}

export const userController = new UserController()