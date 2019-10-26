import { Controller, Get, Param, Delete, Post } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

    listHeroes: [
        {
            id: 1,
            nome: 'Batman',
            idade: 35
        },
        {
            id: 2,
            nome: 'Superman',
            idade: 27
        }

    ];

    @Get()
    async getList(): Promise<any> {
        return this.listHeroes;

    }

    @Get('id')
    findHeroe = this.listHeroes.find(function(element) {
        return element.id;
    }

    @Delete(':id')
    removeHeroe(@Param('id') id: number) {

        return this.listHeroes.splice(id, 1);
    }

    @Post(':name')
    create(@Param('name') name: string) {
        return this.listHeroes.push(name);
    }

    @Post(':id/:name')
    update(@Param('id') id: number, @Param('name') name: string) {
        return this.listHeroes.splice(id, 1, name);
    }
}
