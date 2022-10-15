import { UserModel, EditUserDTO } from './../../model/UserModel';
import { BaseData } from "../BaseData";

class UserData extends BaseData {
    private tableName: string = 'user'
    async signup(user: UserModel) {
        try {
            const { id, name, email, password, createdAt } = user
            await BaseData.dbConnection.insert({
                id, 
                name, 
                email, 
                password,
                createdAt
            }).into(this.tableName)
        } catch (err: any) {
            throw new Error(`Database error: ${err.message}`);
        }
    }
    async getUserByEmail(email: string) {
        try {
            const result = await BaseData.dbConnection(this.tableName)
              .select('*')
              .where({ email });
            return {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password,
                createdAt: result[0].createdAt,
            }
        } catch(err: any) {
            console.error(err.message)
        }
    }
    async editUser(user: EditUserDTO) {
        try {
            const { id, name, email } = user 
            await BaseData.dbConnection(this.tableName)
                .update({ name, email })
                .where({ id })
        } catch(err: any) {
            console.error(err.message)
        }
    }
}

export const userData = new UserData()