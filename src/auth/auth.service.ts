import { Injectable, Inject } from "@nestjs/common";
import { UserDao } from "../users/user-dao.service";
import { JwtService } from "@nestjs/jwt";       

@Injectable()
export class AuthService {
    constructor(
        private userDao: UserDao, 
        //private jwtService: JwtService
    ) { }

    //https://github.com/kelektiv/node.bcrypt.js#readme   ==> store hashed password
    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.userDao.findUser(login);
        if (user && user.password === pass) {  //?se o usuário e sua senha match com a senha que passei, então consigo fazer o login
            const { password, ...result } = user;
            return result;
        }
        return null;
    }


   /* async login(user : any){
        const payload = { login: user.login, sub: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }*/
}