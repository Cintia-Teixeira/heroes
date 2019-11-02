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
        function findHero(hero) {
            if (hero.id == i) {
                return true;
            }
            return false;
        }

        var heroFound = this.heroes.find(findHero);
        return heroFound;
    }

    @Delete(':i')
    removeHero(@Param('i') i) {
        function remove(hero) {
            if (hero.id != i) {
                return true;
            }
            return false;
        }
        var heroesFiltered = this.heroes.filter(remove);
        this.heroes = heroesFiltered;
        return this.heroes;
    }

    @Put(':i')
    update(@Param('i') i: number, @Body() heroDto: HeroDto) {
        function update(hero) {
            if (hero.id == i) {
                return true;
            }
            return false;
        }
        var toUpdate = this.heroes.find(update);

        var x = this.heroes.indexOf(toUpdate);
        if (~x) {
            this.heroes[x] = heroDto;
        }

        return this.heroes[x];

    }
}


