import { Controller, Get, Param, Delete, Post, Put, Body } from '@nestjs/common';
import { HeroDto } from './hero-dto';
import { HeroDao } from './hero-dao.service';
import { Hero } from './hero.entity';


@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) { }

    @Get()
    list(): Promise<Hero[]> {
        return this.heroDao.list();
    }

    @Post()
    add(@Body() heroDto: HeroDto): HeroDto {
        this.heroDao.add(heroDto);
        return heroDto;
    }

    @Get(':id')
    findHero(@Param('id') id: number): Promise<Hero> {
        var heroFound = this.heroDao.findHero(id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) {
        this.heroDao.removeHero(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        this.heroDao.update(id, heroDto);
    }
}


