import express from 'express'
import { userController } from './../controller/UserController';

const userRouter = express.Router()

userRouter.post('/signup', userController.signup)

export default userRouter
