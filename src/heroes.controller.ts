import { Controller, Get, Param, Delete, Post, Put, Body } from '@nestjs/common';
import { HeroDto } from './dto/hero-dto';
import { HeroDao } from './hero-dao.service';


@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) { }

    @Get()
    list(): HeroDto[] {
        return this.heroDao.list();
    }

    @Post()
    add(@Body() heroDto: HeroDto): HeroDto {
        this.heroDao.add(heroDto);
        return heroDto;
    }

    @Get(':id')
    findHero(@Param('id') id: number): HeroDto {
        var heroFound = this.heroDao.findHero(id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) {
        this.heroDao.removeHero(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        var updated = this.heroDao.update(id, heroDto);
    }

}


