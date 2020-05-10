//Unit Testing

import { HeroesController } from "../heroes.controller";
import { HeroDao } from '../hero-dao.service';
import { Hero } from "../hero.entity";
import { Repository } from "typeorm";
import { HeroDto } from "../hero-dto";

describe('HeroesController', () => {
    let heroesController: HeroesController;
    let heroDao: HeroDao;
    let heroRepository: Repository<Hero>;
    let heroDto: HeroDto;

    beforeEach(() => {
        heroRepository = new Repository<Hero>();
        heroDao = new HeroDao(heroRepository);
        heroesController = new HeroesController(heroDao);        
    });

    describe('list', () => {
        it('should return an array of heroes', async () => {
            const result = Hero['test'];
            jest.spyOn(heroDao, 'list').mockImplementation(() => result);

            expect(await heroesController.list()).toBe(result);
        });
    });

    describe('add', () => {
        it('should return the added hero', async () => {
            const result = HeroDto['test'];
            jest.spyOn(heroDao, 'add').mockImplementation(() => result);

            expect(await heroesController.add(heroDto)).toBe(result);
        });
    });

    describe('findHero', () => {
        it('should return a hero', async () => {
            heroDto = new HeroDto();
            const id = heroDto.id;
            const result = Hero['test'];
            jest.spyOn(heroDao, 'findHero').mockImplementation(() => result);

            expect(await heroesController.findHero(id)).toBe(result);
        });
    });

    describe('removeHero', () => {
        it('should not have a return', async () => {
            heroDto = new HeroDto();
            const id = heroDto.id;
            const result = void
            jest.spyOn(heroDao, 'removeHero').mockImplementation(() => result);

            expect(await heroesController.removeHero(id)).toBe(result);
        });
    });

    describe('update', () => {
        it( 'should not have a return', async () => {
            heroDto = new HeroDto();
            const id = heroDto.id;
            const result = void
            jest.spyOn(heroDao, 'update').mockImplementation(() => result);

            expect(await heroesController.update(id, heroDto)).toBe(result);
        });
    });
});