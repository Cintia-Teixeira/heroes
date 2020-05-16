import { Injectable } from "@nestjs/common";
import { HeroDto } from './hero.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Hero } from "./hero.entity";
import { Repository, getRepository } from "typeorm";
import { paginate, Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { MaxLength } from "class-validator";


@Injectable()
export class HeroDao {
    constructor(
        @InjectRepository(Hero)
        private heroRepository: Repository<Hero>,
    ) { }


    list(): Promise<Hero[]> {
        return this.heroRepository.find();
    }

    async paginate(options: IPaginationOptions): Promise<Pagination<Hero>>{
         return paginate<Hero>(this.heroRepository, options);
     }

    async filterByGenderAndAge(gender: string, age: number, page: number = 1, limit: number) {
        const hero = await getRepository(Hero)
            .createQueryBuilder("hero")
            .where("hero.gender = gender", { gender: gender })
            .andWhere("hero.age = age", { age: age })
            .take(limit)
            .skip(limit * (page - 1))
            .getMany();

        return hero;
    }

    async filterByGender(gender: string, page: number = 1, limit: number) {
        const hero = await getRepository(Hero)
            .createQueryBuilder("hero")
            .where("hero.gender = :gender", { gender: gender })
            .take(limit)
            .skip(limit * (page - 1))
            .getMany();

        return hero;
    }

    async filterByAge(age: number, page: number = 1, limit: number, ) {
        const hero = await getRepository(Hero)
            .createQueryBuilder("hero")
            .where("hero.age = :age", { age: age })
            .take(limit)
            .skip(limit * (page - 1))
            .getMany();

        return hero;
    }

    add(heroDto: HeroDto): HeroDto {
        this.heroRepository.save(heroDto);
        return heroDto;
    }

    findHero(id: number): Promise<Hero> {
        var heroFound = this.heroRepository.findOne(id);
        return heroFound;
    }

    removeHero(id: number) {
        this.heroRepository.delete(id);
    }

    update(id: number, heroDto: HeroDto) {
        this.heroRepository.update(id, heroDto);
    }

} 