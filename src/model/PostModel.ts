export interface CreatePostInput {
  title: string,
  content: string,
  category: string
  author: string
  user_id: string
}

export class PostModel implements CreatePostInput {
  id!: string
  title!: string
  content!: string
  category!: string
  author!: string
  user_id!: string
  createdAt!: Date
}