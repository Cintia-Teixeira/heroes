import { Controller, Get, Param, Delete, Post, Put, Req, Body } from '@nestjs/common';
import { Request } from 'express';
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

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        for (var i = 0; i < this.heroes.length; i++) {
            if (this.heroes[i].id == id) {
                this.heroes[i] = heroDto;
            }
        }
    }
}


