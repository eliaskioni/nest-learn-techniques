import { Test, TestingModule } from '@nestjs/testing';
import { EnvsController } from './envs.controller';
import { ConfigModule } from '@nestjs/config';

describe('EnvsController', () => {
  let controller: EnvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvsController],
      imports: [
        ConfigModule.forRoot(),
      ]
    }).compile();

    controller = module.get<EnvsController>(EnvsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return database name defined in .env', () => {
    const envs = controller.getEnvs();
    expect(envs).toEqual('learn');
  })
});
