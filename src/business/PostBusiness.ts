import { postData } from './../data/migrations/PostData';
import { generateId } from './../services/idGenerator';
import { CreatePostInputDTO, PostModel, EditPostDTO } from './../model/PostModel';

class PostBusiness {
  async createPost(post: CreatePostInputDTO) {
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
  async editPost(post: EditPostDTO) {
    try {
      if(
        post.title === '' || 
        post.content === '' || 
        post.category === '' || 
        post.author === ''
      ) {
        throw new Error('Input cannot be empty!')
      } else if(
        !post.title &&
        !post.content &&
        !post.category &&
        !post.author 
      ) {
        throw new Error('Change at least one input!')
      } else if(!post.id || post.id === '') {
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
    } catch(err: any) {
      console.error(err.message)
    }
  }
}

export const postBusiness = new PostBusiness()