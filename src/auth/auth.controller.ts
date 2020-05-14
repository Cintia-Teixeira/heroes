import { Controller, UseGuards, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local-auth.guard";
import { ApiBody } from "@nestjs/swagger";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @ApiBody({})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }

}