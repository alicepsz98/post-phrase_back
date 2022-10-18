import express from 'express'
import { postController } from './../controller/PostController'

const postRouter = express.Router()

postRouter.post('/create', postController.createPost)
postRouter.put('/edit/:id', postController.editPost)
postRouter.delete('/delete/:id', postController.deletePost)
postRouter.get('/:id', postController.getPostById)

export default postRouter