import express from 'express'
import { userController } from './../controller/UserController';

const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.put('/edit', userController.editUser)
userRouter.delete('/delete', userController.deleteUser)

export default userRouter
