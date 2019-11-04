import { Controller, Get, Param, Delete, Post, Put, Req, Body } from '@nestjs/common';
import { HeroDto } from './dto/HeroDto';

@Controller('heroes')
export class HeroesController {

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
        return `Herói ${heroDto.nome} adicionado com sucesso`;
    }

    @Get(':i')
    findHero(@Param('i') i: number) {
        var heroFound = this.heroes.find(hero => hero.id == i);
        return heroFound;
    }

    @Delete(':i')
    removeHero(@Param('i') i) {
        var heroesFiltered = this.heroes.filter(hero => hero.id != i);
        this.heroes = heroesFiltered;
        return this.heroes;
    }

    @Put(':i')
    update(@Param('i') i: number, @Body() heroDto: HeroDto) {
        var toUpdate = this.heroes.find(hero => hero.id == i);
        toUpdate.nome = heroDto.nome;
        toUpdate.idade = heroDto.idade;
        return `Herói ${toUpdate.nome} atualizado com sucesso`;
    }
}


