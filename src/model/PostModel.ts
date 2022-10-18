export interface CreatePostDTO {
  title: string,
  content: string,
  category: string,
  author: string,
  user_id: string,
}

export interface EditPostDTO {
  id?: string,
  title: string,
  content: string,
  category: string,
  author: string,
}

export class PostModel implements CreatePostDTO {
  id!: string
  title!: string
  content!: string
  category!: string
  author!: string
  user_id!: string
  createdAt!: Date
}