import { Controller, Get } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
   
    @Get()
    getList(): string[] {
        return [
            "Batman",
            "Superman"
        ];     
     
    }
}
