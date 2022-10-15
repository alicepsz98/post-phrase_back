
import express from 'express'
import { postController } from './../controller/PostController'

const postRouter = express.Router()

postRouter.post('/create', postController.createPost)
postRouter.put('/edit/:id', postController.editPost)

export default postRouter