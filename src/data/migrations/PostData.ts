import { EditUserDTO } from './../../model/UserModel';
import { PostModel, EditPostDTO } from './../../model/PostModel';
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
  async editPost(post: EditPostDTO) {
    try {
      const { id, title, content, category, author }: EditPostDTO = post
      await BaseData.dbConnection(this.tableName)
        .update({ title, content, category, author })
        .where({ id })
    } catch(err: any) {
      console.error(err.message)
    }
  }
}

export const postData = new PostData()