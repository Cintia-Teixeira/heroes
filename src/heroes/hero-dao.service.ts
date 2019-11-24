import { Injectable, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { HeroDto } from './hero-dto';


@Injectable()
export class HeroDao {
    id = 0;

    heroes: HeroDto[] = [];

    list(): HeroDto[] {
        return this.heroes;
    }

    add(heroDto: HeroDto) : HeroDto {
        heroDto.id = this.id + 1;
        this.heroes.push(heroDto);
        this.id = heroDto.id;
        return heroDto;
    }

    findHero(id: number) : HeroDto {
        var heroFound = this.heroes.find(hero => hero.id == id);
        return heroFound;
    }
   
    removeHero(id: number) : HeroDto[] {
        var heroesFiltered = this.heroes.filter(hero => hero.id != id);    
        this.heroes = heroesFiltered;
        return this.heroes;
    }

    update(id: number , heroDto: HeroDto) : HeroDto {
        var toUpdate = this.heroes.findIndex(hero => hero.id == id);
        this.heroes[toUpdate] = { ...this.heroes[toUpdate], ...heroDto}
        return this.heroes[toUpdate];
    }

} 