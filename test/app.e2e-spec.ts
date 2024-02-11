import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PersonService } from 'src/cache/cache.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let personService: PersonService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    personService = moduleFixture.get<PersonService>(PersonService);
  });

  it('/ (GET)', async () => {
    const serviceSpy = jest.spyOn(personService, 'get');
    await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
    
    expect(serviceSpy).toHaveBeenCalledTimes(1);  
    
    await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
    
    expect(serviceSpy).toHaveBeenCalledTimes(1);
  });
});
