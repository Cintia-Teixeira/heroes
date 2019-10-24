import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class HeroesController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getList(): [string] {
        return this.appService.getList();
    }
}
