import { UserDto } from './user-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserDao {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }


    listUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    findUser(login: string): Promise<User> {
        var userFound = this.userRepository.findOne(login);
        return userFound;
    }

    addUser(userDto: UserDto): UserDto {
        this.userRepository.save(userDto);
        return userDto;
    }

    deleteUser(login: string) {
        this.userRepository.delete(login);
    }

    updateUser(login: string, userDto: UserDto) {
        this.userRepository.update(login, userDto);
    }
}
