import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";

//Para que serve esse passo se o auth.service já faz a validação?


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(login: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(login, password)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;

    }
}