import { postBusiness } from './../business/PostBusiness';
import { CreatePostInput } from './../model/PostModel';
import { Request, Response } from 'express'

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const { title, content, category, author, user_id }: CreatePostInput = req.body
      const data = await postBusiness.createPost({
        title,
        content,
        category,
        author,
        user_id
      })
      res.status(201).send(data)
    } catch (err: any) {
      console.error(err.message)
    }
  }
}

export const postController = new PostController()