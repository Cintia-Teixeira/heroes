import { Controller, Get, Param, Delete, Post, Put, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { HeroesDto } from './dto/HeroesDto';

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
    list(@Req() request: Request) {
        return this.heroes;
    }

    @Post()
    add(@Body() heroesDto: HeroesDto) {
        this.heroes.push(heroesDto);
        return `Herói ${heroesDto.nome} adicionado com sucesso`;
    }



    /* @Get(':id')
     findHeroe(@Param('id') id: number) {
         for (var i = 0; i < this.heroes.length; i++) {
             if (this.heroes[i].id == id) {
                 return this.heroes[i];
             }
         }
     }*/

    @Delete(':id')
    removeHeroe(@Param('id') id: number) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                this.heroes.splice((i), 1);
            }
        }
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroesDto: HeroesDto) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                this.heroes[i] = heroesDto;
            }
        }
    }
}


