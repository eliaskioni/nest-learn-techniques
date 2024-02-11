import { Test, TestingModule } from '@nestjs/testing';
import { AgePipe } from './age.pipe';

describe('AgePipe', () => {
  let pipe: AgePipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      {
        providers: [AgePipe]
      }
    ).compile();

    pipe = module.get<AgePipe>(AgePipe);
  })
  it('should be defined', () => {
    expect(new AgePipe()).toBeDefined();
  });

  it('should transform param', () => {
    const ageParam: string = "20"
    const transformedAgeParam = pipe.transform(ageParam, {type: 'param', metatype: String})
    expect(transformedAgeParam).toEqual(20)
  })

  it('should throw when age is less than 18', () => {
    const invalidAge: string = "17"
    expect(() => pipe.transform(invalidAge, {type: 'param', metatype: String})).toThrow()
  })

  it('should throw when age is greater than 65', () => {
    const invalidAge: string = "66"
    expect(() => pipe.transform(invalidAge, {type: 'param', metatype: String})).toThrow()
  })

  it('should transform valid param of type int', () => {
    const validAge: number = 20
    expect(pipe.transform(validAge, {type: 'param', metatype: Number})).toEqual(20)
  })
});
