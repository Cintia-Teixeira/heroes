// End-to-end Testing

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, HttpModule } from '@nestjs/common';
import { Hero } from '../../hero.entity';
import { AppModule } from '../../../app.module';
import { HeroDao } from '../../hero-dao.service';

describe('HeroesController', () => {
    let app: INestApplication;
    let heroDao = { list: () => Hero['test']};
    

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule, HttpModule],
        })
        .overrideProvider(HeroDao)
        .useValue(heroDao)  
        .compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET heroes`, () => {
        return request(app.getHttpServer())
        .get(`/heroes`)
        .expect(200)
        .expect({
            data: heroDao.list(),
        });
    });

    afterAll(async () => {
        await app.close();
    });
});
