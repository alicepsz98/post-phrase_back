import { postData } from './../data/migrations/PostData'
import { generateId } from './../services/idGenerator'
import { CreatePostDTO, PostModel, EditPostDTO } from './../model/PostModel'

class PostBusiness {
  async createPost(post: CreatePostDTO) {
    try {
      if (
        !post.title ||
        !post.content ||
        !post.category ||
        !post.author ||
        !post.user_id
      ) {
        throw new Error('Input cannot be empty!')
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
      return err.message
    }
  }
  async editPost(post: EditPostDTO) {
    try {
      if (
        post.title === '' ||
        post.content === '' ||
        post.category === '' ||
        post.author === ''
      ) {
        throw new Error('Input cannot be empty!')
      } else if (
        !post.title &&
        !post.content &&
        !post.category &&
        !post.author
      ) {
        throw new Error('Change at least one input!')
      } else if (!post.id || post.id === '') {
        throw new Error('Id not found!')
      }
      const body: EditPostDTO = {
        id: post.id,
        title: post.title,
        content: post.content,
        category: post.category,
        author: post.author
      }
      await postData.editPost(body)
    } catch (err: any) {
      return err.message
    }
  }
  async deletePost(id: string) {
    try {
      if (!id || id === '') {
        throw new Error('Id not found!')
      }
      await postData.deletePost(id)
    } catch (err: any) {
      return err.message
    }
  }
  async getPostById(id: string) {
    try {
      const post = postData.getPostById(id)
      if(!post) {
        throw new Error('Post not found!')
      }
      return post
    } catch (err: any) {
      return err.message 
    }
  }
}

export const postBusiness = new PostBusiness()