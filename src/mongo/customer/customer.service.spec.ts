import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { getModelToken } from '@nestjs/mongoose';
import { Customer } from './customer';

describe('CustomerService', () => {
  let service: CustomerService;
  let customerDocumentMock: any;

  beforeEach(async () => {
    customerDocumentMock = {
      findOne: jest.fn()
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: getModelToken(Customer.name),
          useValue: customerDocumentMock
        }
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be definded', () => {
    expect(service.get).toBeDefined();
  })

  it('should invoke find on mongoose', () => {
    const findOneMock = jest.spyOn(customerDocumentMock, 'findOne');
    service.get()
    expect(findOneMock).toHaveBeenCalledTimes(1);
  })
});
