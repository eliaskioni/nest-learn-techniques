import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

describe('ProductController', () => {
  let controller: ProductController;
  let productService: ProductService;
  let productRepositoryMock: any;

  beforeEach(async () => {
    productRepositoryMock = {
      findOneBy: jest.fn(),
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: productRepositoryMock
        }],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    productService = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should invoke getProduct from Product Service', () => {
    const getProduct = jest.spyOn(productService, 'getProduct');
    controller.getProduct();
    expect(getProduct).toHaveBeenCalledTimes(1);
  })
});
