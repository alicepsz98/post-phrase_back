import { UserModel } from './../../model/UserModel';
import { BaseData } from "../BaseData";

class UserData extends BaseData {
    private tableName: string = 'user'
    public async signup(user: UserModel) {
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
}

export const userData = new UserData()