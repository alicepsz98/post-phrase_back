export interface CreateUserInput {
    name: string,
    email: string,
    password: string
}

export class UserModel implements CreateUserInput {
    id!: string
    name!: string
    email!: string
    password!: string
    createdAt!: Date
}