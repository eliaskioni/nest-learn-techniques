import { ValidationPipe } from '@nestjs/common';
import { CustomerDto } from './dto';
import { AgePipe } from './age.pipe';

describe('CustomerDto', () => {
  it('should be defined', () => {
    const customerDto: CustomerDto = new CustomerDto();
    expect(customerDto).toBeDefined();
  });

  it('should have required properties', () => {
    const customerDto: CustomerDto = new CustomerDto();
    customerDto.name = "Some name";
    expect(customerDto.name).toBe("Some name");
    customerDto.age = 12;
    expect(customerDto.age).toBe(12);
  })

  it('should only allow age greater than 18', () => {
    const customerDto: CustomerDto = new CustomerDto();
    customerDto.age = 19
    customerDto.name = "SomeValue"
    const validationPipe = new ValidationPipe();
    expect(validationPipe.transform(customerDto, {type: 'body', metatype: CustomerDto})).resolves.toEqual(customerDto);

  })
});
