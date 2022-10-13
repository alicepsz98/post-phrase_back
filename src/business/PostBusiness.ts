import { postData } from './../data/migrations/PostData';
import { generateId } from './../services/idGenerator';
import { CreatePostInput, PostModel } from './../model/PostModel';

class PostBusiness {
  async createPost(post: CreatePostInput) {
    try {
      if(
        !post.title || 
        !post.content ||
        !post.category ||
        !post.author ||
        !post.user_id
      ) {
        throw new Error()
      }
      const id: string = generateId()
      const body: PostModel = {
        id, 
        title: post.title,
        content: post.content,
        category: post.category,
        author: post.author,
        user_id: post.user_id,
        createdAt: new Date(Date.now())
      }
      await postData.createPost(body)
      return ({ post: body })
    } catch (err: any) {
      console.error(err.message)
    }
  }
}

export const postBusiness = new PostBusiness()