import { Controller, Get, Param, Delete, Post, Put, Req, Body } from '@nestjs/common';
import { HeroDto } from './dto/HeroDto';
import { HeroDao } from './HeroDao';


@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) {}

    @Get()
    list(): HeroDto[] {
        return this.heroDao.list();
    }

    @Post()
    add(@Body() heroDto: HeroDto) : HeroDto{
        this.heroDao.add(heroDto);
        return heroDto;
    }

    @Get(':id')
    findHero(@Param('id') id: number) : HeroDto {
        var heroFound = this.heroDao.findHero(id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) : HeroDto[] {
        this.heroDao.removeHero(id);
        return this.heroDao.list();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) : HeroDto {
        this.heroDao.update(id, heroDto);
        return this.heroDao.findHero(id);
    }

}


