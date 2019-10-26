import { Controller, Get, Param, Delete, Post } from '@nestjs/common';

@Controller('heroes')
export class HeroesController { 
    
    listHeroes = ["Batman", "Superman"];
    

    @Get()
    getList(): string[] {
        return this.listHeroes;

    }

    @Get(':id')
    findHeroe(@Param() params): string {

        return this.listHeroes[params.id];
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
