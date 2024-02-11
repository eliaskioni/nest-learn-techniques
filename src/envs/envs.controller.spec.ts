import { Test, TestingModule } from '@nestjs/testing';
import { EnvsController } from './envs.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

describe('EnvsController', () => {
  let controller: EnvsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnvsController],
      imports: [
        ConfigModule.forRoot(
          {
            load: [configuration]
          }
        ),
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
  });

  it('should return a redis config object from configService ', () => {
    const redisConfigObj = controller.getRedisConfig();
    expect(redisConfigObj).toEqual({INDEX: "1", URL: "localhost"})
  })
});
