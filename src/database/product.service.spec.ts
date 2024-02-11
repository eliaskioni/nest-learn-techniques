import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

describe('ProductService', () => {
  let service: ProductService;
  let product: Product
  let productRepositoryMock: any;

  beforeEach(async () => {
    productRepositoryMock = {
      findOneBy: jest.fn(),
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: productRepositoryMock
        }
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call get on repository Class', () => {
    const getProduct = jest.spyOn(productRepositoryMock, 'findOneBy');
    service.getProduct();
    expect(getProduct).toHaveBeenCalledTimes(1);
  })
});
