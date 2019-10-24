import { Controller, Get, Param } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
   
    @Get()
    getList(): string {
        return 
            'Batman'
            'Superman'
        ;     
     
    }

    @Get(':id')
    findHeroe(@Param() params): string {
        console.log(params.name);
        return `Heroe #${params.id} is ${params.name}`;
    }
}
