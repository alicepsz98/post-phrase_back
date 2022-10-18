import { BaseData } from './../BaseData'
import { PostModel, EditPostDTO } from './../../model/PostModel'

class PostData extends BaseData {
  private tableName: string = 'post'
  async createPost(post: PostModel) {
    try {
      const { id, title, content, category, author, user_id, createdAt } = post
      await BaseData.dbConnection.insert({
        id,
        title,
        content,
        category,
        author,
        user_id,
        createdAt
      }).into(this.tableName)
    } catch (err: any) {
      throw new Error(`Database error: ${err.message}`)
    }
  }
  async editPost(post: EditPostDTO) {
    try {
      const { id, title, content, category, author }: EditPostDTO = post
      await BaseData.dbConnection(this.tableName)
        .update({ title, content, category, author })
        .where({ id })
    } catch (err: any) {
      throw new Error(`Database error: ${err.message}`)
    }
  }
  async deletePost(id: string) {
    try {
      await BaseData.dbConnection(this.tableName)
        .del()
        .where({ id })
    } catch (err: any) {
      throw new Error(`Database error: ${err.message}`)
    }
  }
  async getPostById(id: string) {
    try {
      const result = await BaseData.dbConnection(this.tableName)
        .select('*')
        .where({ id })
      return result[0]
    } catch (err: any) {
      throw new Error(`Database error: ${err.message}`)
    }
  }
  async getAllPosts() {
    try {
      const result = await BaseData.dbConnection(this.tableName)
        .select('*')
      return result
    } catch (err: any) {
      throw new Error(`Database error: ${err.message}`)
    }
  }
}

export const postData = new PostData()