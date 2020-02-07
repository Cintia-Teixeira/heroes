import { Module } from '@nestjs/common';
import { UserDao } from './user-dao.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthService } from '../auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthService],
    providers: [UserDao],
    controllers: [UsersController],
    exports: [UserDao],

})

export class UserModule { }
