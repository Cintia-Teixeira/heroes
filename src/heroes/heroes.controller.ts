import { Controller, Get, Param, Delete, Post, Put, Body, UseGuards, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { HeroDto } from './hero.dto';
import { HeroDao } from './hero.dao.service';
import { Hero } from './hero.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Pagination } from 'nestjs-typeorm-paginate';
import { GenderAndAgeQueryDto } from './query.dto';

@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) { }

    // @Get()
    // list(): Promise<Hero[]> {
    //     return this.heroDao.list();
    // }

    @Get()
    async index(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
    ): Promise<Pagination<Hero>> {
        limit = limit > 100 ? 100 : limit;
        return this.heroDao.paginate({
            page,
            limit,
            route: '/heroes',
        });
    }

    @UsePipes(new ValidationPipe({
        transform: true
    }))
    @Get('filter')
    async getByGenderAndAge(
        @Query('page') page: number,
        @Query('limit') limit: number,
        @Query() query: GenderAndAgeQueryDto
    ) {
        return this.heroDao.filter(query, page, limit);
    }

    @UseGuards(JwtAuthGuard)
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

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    removeHero(@Param('id') id: number) {
        this.heroDao.removeHero(id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        this.heroDao.update(id, heroDto);
    }
}


