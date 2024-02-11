import { Test, TestingModule } from '@nestjs/testing';
import { CacheController } from './cache.controller';
import { PersonService } from './cache.service';
import { CACHE_MANAGER, CacheModule } from '@nestjs/cache-manager';

describe('CacheController', () => {
  let controller: CacheController;
  let personService: PersonService; 
  let cacheManager: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CacheController],
      providers: [
        PersonService,
        {
          provide: CACHE_MANAGER,
          useValue: {
            get: jest.fn(()=>null),
            set: jest.fn()
          }
        }
      ],
      imports: [
        CacheModule.register()
      ]
    }).compile();

    controller = module.get<CacheController>(CacheController);
    personService = module.get<PersonService>(PersonService);
    cacheManager = module.get(CACHE_MANAGER);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('get should be defined', () => {
    expect(controller.get).toBeDefined()
  })

  it('get should invoke service.get', () => {
    const personServiceMock = jest.spyOn(personService, 'get');
    controller.get();
    expect(personServiceMock).toHaveBeenCalledTimes(1);
  })
});
