export interface CreateUserInputDTO {
    name: string,
    email: string,
    password: string
}
export interface UserLoginDTO {
    email: string,
    password: string
}

export interface EditUserDTO {
    id?: string,
    token?: string,
    name: string,
    email: string
}

export interface DeleteUserDTO {
    token?: string
    id?: string
}

export class UserModel implements CreateUserInputDTO {
    id!: string
    name!: string
    email!: string
    password!: string
    createdAt!: Date
}