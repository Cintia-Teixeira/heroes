import { Injectable } from "@nestjs/common";
import { UserDao } from "src/users/user-dao.service";
import { User } from "src/users/user.entity";
import { AnyARecord } from "dns";

@Injectable()
export class AuthService {
    constructor(private userDao: UserDao) { }

    //https://github.com/kelektiv/node.bcrypt.js#readme   ==> store hashed password
    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.userDao.findUser(login);
        if (user && user.password === pass) {  //?se o usuário e sua senha match com a senha que passei, então consigo fazer o login
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}