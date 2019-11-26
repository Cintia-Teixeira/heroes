import { Module } from '@nestjs/common';
import { UserDao } from './user-dao.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserDao],
    controllers: [UsersController],

})

export class UserModule { }
