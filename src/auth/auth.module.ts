import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";

@Module({
    imports: [UserModule, PassportModule],
    controllers: [],
    providers: [AuthService, LocalStrategy],

})

export class AuthModule { }