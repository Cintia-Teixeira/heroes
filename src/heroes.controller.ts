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

    @Get(':id')
    findHero(@Param('id') id: number) {
        var heroFound = this.heroes.find(hero => hero.id == id);
        return heroFound;
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) {
        var heroesFiltered = this.heroes.filter(hero => hero.id != id);
        this.heroes = heroesFiltered;
        return this.heroes;
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        var toUpdate = this.heroes.find(hero => hero.id == id);
        toUpdate.nome = heroDto.nome;
        toUpdate.idade = heroDto.idade;
        return `Herói ${toUpdate.nome} atualizado com sucesso`;
    }
}


