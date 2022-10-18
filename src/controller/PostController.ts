import { Request, Response } from 'express'
import { postBusiness } from './../business/PostBusiness'
import { CreatePostDTO, EditPostDTO } from './../model/PostModel'

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      if(!req.headers.authorization) {
        throw new Error('Not authorized!')
      }
      const { title, content, category, author, user_id }: CreatePostDTO = req.body
      const data = await postBusiness.createPost({
        title,
        content,
        category,
        author,
        user_id
      })
      res.status(201).send(data)
    } catch (err: any) {
      res.status(400).send(err.message)
    }
  }
  async editPost(req: Request, res: Response) {
    try {
      if(!req.headers.authorization) {
        throw new Error('Not authorized!')
      }
      const id: string = req.params.id
      const { title, content, category, author }: EditPostDTO = req.body
      const body: EditPostDTO = { id, title, content, category, author }
      await postBusiness.editPost(body)
      res.status(200).send({ message: 'Post updated', post: body })
    } catch(err: any) {
      res.status(400).send(err.message)
    }
  }
  async deletePost(req: Request, res: Response) {
    try{ 
      if(!req.headers.authorization) {
        throw new Error('Not authorized!')
      }
      const id: string = req.params.id
      await postBusiness.deletePost(id)
      res.status(200).send({ message: 'Post deleted!'})
    } catch(err: any) {
      res.status(400).send(err.message)
    }
  }
} 

export const postController = new PostController()