import { Test, TestingModule } from '@nestjs/testing';
import { KannelService } from './http.service';
describe('KannelService', () => {
  let service: KannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KannelService],
    }).compile();

    service = module.get<KannelService>(KannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
