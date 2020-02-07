import { UserDao } from './user-dao.service';
import { Controller, Get, Param, Post, Body, Delete, Put, Request, UseGuards  } from '@nestjs/common';
import { UserDto } from './user-dto';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(
     //   private userDao: UserDao,
        private authService: AuthService, 
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }


  /*  @Get()
    listUsers(): Promise<User[]> {
        return this.userDao.listUsers();
    }

    @Get(':login')
    findUser(@Param('login') login: string): Promise<User> {
        var userFound = this.userDao.findUser(login);
        return userFound;
    }

    @Post()
    addUser(@Body() userDto: UserDto): UserDto {
        this.userDao.addUser(userDto);
        return userDto;
    }

    @Delete(':login')
    deleteUser(@Param('login') login: string) {
        this.userDao.deleteUser(login);
    }

    @Put(':login')
    updateUser(@Param('login') login: string, @Body() userDto: UserDto) {
        this.userDao.updateUser(login, userDto);
    }*/

}