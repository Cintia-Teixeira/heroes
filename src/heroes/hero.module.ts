import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroDao } from './hero-dao.service';
import { HeroesController } from './heroes.controller';
import { Hero } from './hero.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Hero])],
    providers: [HeroDao],
    controllers: [HeroesController],
})

export class HeroModule { }

