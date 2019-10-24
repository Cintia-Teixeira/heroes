import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [HeroesController],
  providers: [AppService],
})
export class AppModule {}
