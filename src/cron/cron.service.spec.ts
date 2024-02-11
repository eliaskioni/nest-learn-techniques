import { Test, TestingModule } from '@nestjs/testing';
import { CronService } from './cron.service';
import { Logger } from '@nestjs/common';

describe('CronService', () => {
  let service: CronService;
  let logger: Logger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronService, Logger],
    }).compile();

    service = module.get<CronService>(CronService);
    logger = module.get<Logger>(Logger);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('service.notify should be defined', () => {
    expect(service.notify).toBeDefined();
  })

  it('service.notify should invoke logger.debug', ()=> {
    const loggerSpy = jest.spyOn(logger, 'debug')
    service.notify();
    expect(loggerSpy).toHaveBeenCalledTimes(1);
  })
});
