import { UserDao } from './user-dao.service';
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(
        private userDao: UserDao,
    ) { }

    @Get()
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
    }

}