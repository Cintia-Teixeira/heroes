import { Controller, Get, Param, Delete, Post, Put, Req, Body } from '@nestjs/common';
import { HeroDto } from './dto/HeroDto';
import { HeroDao } from './HeroDao';


@Controller('heroes')
export class HeroesController {
    constructor(private heroDao: HeroDao) {}

    @Get()
    list(): HeroDto[] {
        return this.heroDao.list();
    }

    @Post()
    add(@Body() heroDto: HeroDto) {
        this.heroDao.add(heroDto);
        return `Herói ${heroDto.nome} adicionado com sucesso!`;
    }

    @Get(':id')
    findHero(@Param('id') id: number) {
        var heroFound = this.heroDao.findHero(id);
        return heroFound || 'Herói não encontrado';
    }

    @Delete(':id')
    removeHero(@Param('id') id: number) {
        this.heroDao.removeHero(id);
        return 'Herói excluído com sucesso!';
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() heroDto: HeroDto) {
        this.heroDao.update(id, heroDto);
        return 'Herói atualizado com sucesso!'
    }

}


