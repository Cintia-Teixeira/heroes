import { Module } from '@nestjs/common';
import { HeroesController } from './heroes/heroes.controller';
import { AppService } from './app.service';
import { HeroDao } from './heroes/hero-dao.service';
import { UsersController } from './users/users.controller';
import { UserDao } from './users/user-dao.service';

@Module({
  imports: [],
  controllers: [HeroesController, UsersController],
  providers: [AppService, HeroDao, UserDao],
})
export class AppModule {}
