import { Request, Response } from 'express'
import { CreateUserDTO, UserLoginDTO, EditUserDTO } from './../model/UserModel'
import { userBusiness } from './../business/UserBusiness'

class UserController {
  async signup(req: Request, res: Response) {
    try {
      const { name, email, password }: CreateUserDTO = req.body
      const data = await userBusiness.signup({ name, email, password })
      res.status(201).send(data)
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
  async login(req: Request, res: Response) {
    try {
      const { email, password }: UserLoginDTO = req.body
      const data = await userBusiness.login({ email, password })
      res.status(201).send(data)
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
  async editUser(req: Request, res: Response) {
    try {
      if (!req.headers.authorization) {
        throw new Error('Not authorized!')
      }
      const body: EditUserDTO = {
        token: req.headers.authorization as string,
        name: req.body.name,
        email: req.body.email
      }
        await userBusiness.editUser(body)
        res.status(200).send({ message: 'User updated!', user: body })
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      if (!req.headers.authorization) {
        throw new Error('Not authorized!')
      }
      const body = {
        token: req.headers.authorization as string
      }
      await userBusiness.deleteUser(body)
      res.status(200).send({ message: 'User deleted!' })
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
  async getUserById(req: Request, res: Response) {
    try {
      const id = req.params.id
      const user = await userBusiness.getUserById(id)
      res.status(200).send(user)
    } catch(err: any) {
      res.status(400).send(err.message)
    }
  }
}

export const userController = new UserController()