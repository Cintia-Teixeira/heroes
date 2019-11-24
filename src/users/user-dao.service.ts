import { UserDto } from './user-dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDao {

    users: UserDto[] = [];

    listUsers(): UserDto[] {
        return this.users;
    }

    findUser(login: string): UserDto {
        var userFound = this.users.find(user => user.login == login);
        return userFound;
    }

    addUser(userDto: UserDto): UserDto {
        this.users.push(userDto);
        return userDto;
    }

    deleteUser(login: string): UserDto[] {
        this.users = this.users.filter(user => user.login != login);
        return this.users;
    }

    updateUser(login: string, userDto: UserDto) {
        var toUpdate = this.users.findIndex(user => user.login == login);
        this.users[toUpdate] = { ...this.users[toUpdate], ...userDto };
        return toUpdate;

    }






}
