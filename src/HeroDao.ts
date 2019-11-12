import { Injectable, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { HeroDto } from './dto/HeroDto';


@Injectable()
export class HeroDao {

    heroes: HeroDto[] = [
        {
            id: 1,
            nome: "Batman",
            idade: 35
        },

        {
            id: 2,
            nome: "Superman",
            idade: 27
        }
    ];


    @Get()
    list(): HeroDto[] {
        return this.heroes;
    }

    @Post()
    add(@Body() heroDto: HeroDto) {
        this.heroes.push(heroDto);
    }

    @Get(':id')
    findHero(@Param('id') id: number) {
        var heroFound = this.heroes.find(hero => hero.id == id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) {
        var heroesFiltered = this.heroes.filter(hero => hero.id != id);
        this.heroes = heroesFiltered;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        var toUpdate = this.heroes.findIndex(hero => hero.id == id);
        this.heroes[toUpdate] = heroDto;
    }

}