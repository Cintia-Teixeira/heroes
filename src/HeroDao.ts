import { Injectable, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { HeroDto } from './dto/HeroDto';


@Injectable()
export class HeroDao {
    id = 0;

    heroes: HeroDto[] = [
        
    ];

    @Get()
    list(): HeroDto[] {
        return this.heroes;
    }

    @Post()
    add(@Body() heroDto: HeroDto) : HeroDto {
        heroDto.id = this.id + 1;
        this.heroes.push(heroDto);
        this.id = heroDto.id;
        return heroDto;

    }

    @Get(':id')
    findHero(@Param('id') id: number) : HeroDto {
        var heroFound = this.heroes.find(hero => hero.id == id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) : HeroDto[] {
        var heroesFiltered = this.heroes.filter(hero => hero.id != id);    
        this.heroes = heroesFiltered;
        return this.heroes;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) : HeroDto {
        var toUpdate = this.heroes.findIndex(hero => hero.id == id);
        this.heroes[toUpdate] = heroDto;
        return this.heroes[toUpdate];
    }

}