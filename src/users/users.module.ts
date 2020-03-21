import { Module } from '@nestjs/common';
import { UserDao } from './user-dao.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserDao],
    controllers: [UsersController],
    exports: [UserDao],

})

export class UserModule { }
