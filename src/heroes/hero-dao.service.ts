import { Injectable, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { HeroDto } from './hero-dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Hero } from "./hero.entity";
import { Repository } from "typeorm";


@Injectable()
export class HeroDao {
    constructor(
        @InjectRepository(Hero)
        private heroRepository: Repository<Hero>,
    ) { }


    list(): Promise<Hero[]> {
        return this.heroRepository.find();
    }

    add(heroDto: HeroDto): HeroDto {
        this.heroRepository.save(heroDto);
        return heroDto;
    }

    findHero(id: number): Promise<Hero> {
        var heroFound = this.heroRepository.findOne(id);
        return heroFound;
    }

    removeHero(id: number) {
        this.heroRepository.delete(id);
    }

    update(id: number, heroDto: HeroDto) {
        this.heroRepository.update(id, heroDto);
    }

} 