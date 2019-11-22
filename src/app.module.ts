import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { AppService } from './app.service';
import { HeroDao } from './hero-dao.service';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [AppService, HeroDao],
})
export class AppModule {}
