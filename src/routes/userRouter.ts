import express from 'express'
import { userController } from './../controller/UserController'

const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.put('/edit', userController.editUser)
userRouter.delete('/delete', userController.deleteUser)
userRouter.get('/all', userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)

export default userRouter
