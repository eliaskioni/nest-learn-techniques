import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {

    constructor(private readonly productService: ProductService){};

    @Get()
    getProduct() {
        return this.productService.getProduct();
    }
}


// docker run --rm \
//   --name=mysql-learn-nest \
//   -e MYSQL_ROOT_PASSWORD=root \
//   -e MYSQL_DATABASE=learn \
//   -e MYSQL_USER=learn \
//   -e MYSQL_PASSWORD=root \
//   -p 3307:3306 \
//   mysql:latest
