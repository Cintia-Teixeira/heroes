import { Controller, Get, Param, Delete } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {

     

    @Get()
    getList(): string[] {
        return [
            "Batman",
            "Superman"
        ];

    }

    @Get(':id')
    findHeroe(@Param() params): string {
        var listHeroes = [
            "Batman",
            "Superman"
        ];
        return listHeroes[params.id];
    }

    @Delete(':id')
    removeHeroe(@Param('id') id: string) {
        return `Heroe #${id} removed`;
    } 
}
