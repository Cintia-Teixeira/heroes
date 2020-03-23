import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes/hero.entity';
import { HeroModule } from './heroes/hero.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'heroes.db',
      synchronize: true,
      logging: false,
      entities: [Hero, User],
    }),
    HeroModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
