// End-to-end Testing

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../app.module';
import { HeroDao } from '../../hero.dao.service';

describe('HeroesController', () => {
    let app: INestApplication;
    let heroDao = {
         list: () => [{ id: 1, name: 'Batman', age: 20 }]
    };
    

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
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
        .expect(
            heroDao.list()
        );
    });

    afterAll(async () => {
        await app.close();
    });
});
