import { Controller, Get, Param, Delete, Post, Put } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

    heroes = [
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
    list(): object {
        return this.heroes;
    }

    @Post(':id/:nome/:idade')
    create(@Param('id') id: number, @Param('nome') nome: string, @Param('idade') idade: number) {
        return this.heroes.push({ id, nome, idade });
    }

    @Get(':id')
    findHeroe(@Param('id') id: number) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                return this.heroes[i];
            }
        }
    }

    @Delete(':id')
    removeHeroe(@Param('id') id: number) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                this.heroes.splice((i), 1);
            }
        }
    }

    @Post(':id/:nome/:idade')
    update(@Param('id') id: number, @Param('nome') nome: string, @Param('idade') idade: number) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                this.heroes.splice((id), 3, {id, nome, idade});
            }
        }
    }
}
