import express from 'express'
import { userController } from './../controller/UserController';

const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.put('/edit', userController.editUser)

export default userRouter
