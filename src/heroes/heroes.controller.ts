import { Controller, Get, Param, Delete, Post, Put, Body, UseGuards, Query } from '@nestjs/common';
import { HeroDto } from './hero.dto';
import { HeroDao } from './hero.dao.service';
import { Hero } from './hero.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
//import { Pagination } from 'nestjs-typeorm-paginate';
import { getRepository } from "typeorm";
import { GenderAndAgeQueryDto } from './query.dto';

@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) { }

    /*@Get()
    list(): Promise<Hero[]> {
        return this.heroDao.list();
    }

   /* @Get()
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
    }*/
    @Get('filter')
    async getByGenderAndAge(
        @Query() query: GenderAndAgeQueryDto,
        @Query('page') page: number,
        @Query('limit') limit: number
    ){
        return this.heroDao.filter(query, page, limit);
    }

    @Get('search')
    async filterByGenderAndAge(
        @Query('gender') gender: string,
        @Query('age') age: number,
        @Query('page') page: number,
        @Query('limit') limit: number
    ){
        return this.heroDao.search(gender, age, page, limit);
    }

    @Get('gender')
    async filterByGender(
        @Query('gender') gender: string,
        @Query('page') page: number,
        @Query('limit') limit: number, ) {
        const hero = this.heroDao.filterByGender(gender, page, limit)
        return hero;
    }

    @Get('age')
    async filterByAge(
        @Query('age') age: number,
        @Query('page') page: number,
        @Query('limit') limit: number, ) {
        const hero = this.heroDao.filterByAge(age, page, limit)
        return hero;
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


