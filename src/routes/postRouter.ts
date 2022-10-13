
import express from 'express'
import { postController } from './../controller/PostController'

const postRouter = express.Router()

postRouter.post('/create', postController.createPost)

export default postRouter