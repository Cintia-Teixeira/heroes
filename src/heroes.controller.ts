import { Controller, Get, Param, Delete } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor() {
        this.listHeroes
    };

  listHeroes = [
        "Batman",
        "Superman"
    ]; 

    @Get()
    getList(): string[] {
        return [
            "Batman",
            "Superman"
        ];

    }

    @Get(':id')
    findHeroe(@Param() params): string {

        return this.listHeroes[params.id];
    }

    @Delete(':id')
    removeHeroe(@Param('id') id: number) {

        return this.listHeroes.splice(id, 1);
    }
}
