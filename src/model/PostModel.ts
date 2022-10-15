export interface CreatePostInputDTO {
  title: string,
  content: string,
  category: string
  author: string
  user_id: string
}

export interface EditPostDTO {
  id?: string,
  title: string,
  content: string,
  category: string,
  author: string
}

export class PostModel implements CreatePostInputDTO {
  id!: string
  title!: string
  content!: string
  category!: string
  author!: string
  user_id!: string
  createdAt!: Date
}