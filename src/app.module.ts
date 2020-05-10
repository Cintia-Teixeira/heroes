import { Module, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './heroes/hero.entity';
import { HeroModule } from './heroes/hero.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { AllExceptionsFilter } from './AllExceptionsFilter';

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
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
  ],
})
export class AppModule { }
