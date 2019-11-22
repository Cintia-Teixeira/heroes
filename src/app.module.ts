import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { AppService } from './app.service';
import { HeroDao } from './hero-dao.service';
import { UsersController } from './users.controller';
import { UserDao } from './user-dao.service';

@Module({
  imports: [],
  controllers: [HeroesController, UsersController],
  providers: [AppService, HeroDao, UserDao],
})
export class AppModule {}
