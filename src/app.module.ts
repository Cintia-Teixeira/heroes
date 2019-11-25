import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes/hero.entity';
import { HeroModule } from './heroes/hero.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'heroes',
      entities: [Hero],
    }),
    HeroModule,
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
