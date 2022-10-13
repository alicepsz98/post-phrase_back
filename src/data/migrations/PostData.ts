import { PostModel } from './../../model/PostModel';
import { BaseData } from './../BaseData';

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
      console.error(err.message)
    }
  }
}

export const postData = new PostData()